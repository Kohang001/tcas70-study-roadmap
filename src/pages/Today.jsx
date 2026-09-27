import React, { useState } from 'react';
import { 
  Calendar, 
  ChevronLeft, 
  ChevronRight, 
  Filter, 
  CheckCircle2, 
  Sparkles, 
  BookOpen, 
  Save, 
  RotateCcw,
  AlertCircle
} from 'lucide-react';
import TaskCard from '../components/TaskCard';
import ProgressBar from '../components/ProgressBar';
import EmptyState from '../components/EmptyState';
import ExamDayScreen from '../components/ExamDayScreen';
import ErrorModal from '../components/ErrorModal';
import { getSmartPlanForDate } from '../data/studyPlan';
import { formatThaiDate, addDays } from '../utils/dateUtils';
import { getDayProgress, getTaskProgress } from '../utils/progressUtils';
import { SUBJECT_LIST } from '../data/subjects';

export default function Today({
  activeToday,
  realTodayStr,
  autoLockToday,
  subtaskStates,
  taskNotes,
  dailyNotes,
  onToggleSubtask,
  onSetTaskComplete,
  onSaveDailyNote,
  onSaveTaskNote,
  onAddErrorLog,
  onSelectDate,
  onResetToday,
  onLockToRealToday
}) {
  const [selectedDate, setSelectedDate] = useState(activeToday);
  const [statusFilter, setStatusFilter] = useState('all'); // 'all', 'not_started', 'in_progress', 'completed'
  const [subjectFilter, setSubjectFilter] = useState('all');
  const [noteText, setNoteText] = useState(dailyNotes[selectedDate] || '');
  const [noteSavedFeedback, setNoteSavedFeedback] = useState(false);
  const [errorModalOpen, setErrorModalOpen] = useState(false);
  const [errorModalInitial, setErrorModalInitial] = useState(null);

  // Automatically keep selectedDate in sync with activeToday
  React.useEffect(() => {
    setSelectedDate(activeToday);
  }, [activeToday]);

  // Sync noteText when date changes
  React.useEffect(() => {
    setNoteText(dailyNotes[selectedDate] || '');
  }, [selectedDate, dailyNotes]);

  const currentPlan = getSmartPlanForDate(selectedDate);
  const allTasks = currentPlan ? currentPlan.tasks : [];

  // Filter tasks
  const filteredTasks = allTasks.filter(task => {
    // Subject filter
    if (subjectFilter !== 'all' && task.subject.toLowerCase() !== subjectFilter.toLowerCase()) {
      return false;
    }
    // Status filter
    if (statusFilter !== 'all') {
      const prog = getTaskProgress(task, subtaskStates);
      if (statusFilter === 'completed' && !prog.isCompleted) return false;
      if (statusFilter === 'in_progress' && prog.status !== 'in_progress') return false;
      if (statusFilter === 'not_started' && prog.status !== 'not_started') return false;
    }
    return true;
  });

  const progress = getDayProgress(allTasks, subtaskStates);
  const isExamDay = currentPlan && currentPlan.isExamDay;
  const isPostExam = currentPlan && currentPlan.isPostExam;
  const isBrowsingOtherDay = selectedDate !== activeToday;

  const handlePrevDay = () => {
    setSelectedDate(prev => addDays(prev, -1));
  };

  const handleNextDay = () => {
    setSelectedDate(prev => addDays(prev, 1));
  };

  const handleBackToToday = () => {
    setSelectedDate(activeToday);
    if (onLockToRealToday) {
      onLockToRealToday();
    }
  };

  const handleSaveNote = () => {
    onSaveDailyNote(selectedDate, noteText);
    setNoteSavedFeedback(true);
    setTimeout(() => setNoteSavedFeedback(false), 2000);
  };

  const handleOpenErrorModal = (initialData) => {
    setErrorModalInitial(initialData);
    setErrorModalOpen(true);
  };

  return (
    <div className="page-wrapper animate-fade-in">
      {/* Browsing Other Day Notice */}
      {isBrowsingOtherDay && (
        <div style={{
          background: '#FFFBEB',
          border: '1px solid #FCD34D',
          borderRadius: 'var(--radius-xl)',
          padding: '12px 18px',
          marginBottom: '16px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '10px'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#92400E', fontSize: '0.9rem' }}>
            <span>👀 กำลังเปิดดูแผนของวันที่ <strong>{formatThaiDate(selectedDate, true)}</strong></span>
          </div>

          <button
            type="button"
            onClick={handleBackToToday}
            className="btn-primary"
            style={{ padding: '6px 14px', fontSize: '0.82rem', background: '#2563EB' }}
          >
            🔒 ล็อคกลับสู่วันนี้อัตโนมัติ ({formatThaiDate(activeToday, false)})
          </button>
        </div>
      )}

      {/* Top Header & Date Stepper */}
      <div style={{
        background: '#FFFFFF',
        border: '1px solid var(--border-subtle)',
        borderRadius: 'var(--radius-2xl)',
        padding: '24px 28px',
        marginBottom: '24px',
        boxShadow: 'var(--shadow-sm)'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px' }}>
          <div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '0.8rem', fontWeight: 700, color: '#059669', background: '#ECFDF5', border: '1px solid #A7F3D0', padding: '3px 10px', borderRadius: 'var(--radius-full)', marginBottom: '6px' }}>
              🔒 ล็อควันอัตโนมัติ: วันนี้คือ {formatThaiDate(activeToday, true)}
            </div>
            <h2 style={{ fontSize: '1.75rem', fontWeight: 800, color: 'var(--text-main)', letterSpacing: '-0.02em', marginTop: '2px' }}>
              แผนการอ่านวันนี้
            </h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem', marginTop: '4px' }}>
              {currentPlan ? currentPlan.focus : 'ทำตามเป้าหมายรายวัน เช็กลิสต์งาน และบันทึกสิ่งที่ได้เรียนรู้'}
            </p>
          </div>

          {/* Date Navigator */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', background: 'var(--bg-card-subtle)', padding: '6px 12px', borderRadius: 'var(--radius-xl)' }}>
            <button
              type="button"
              onClick={handlePrevDay}
              style={{ padding: '6px', borderRadius: 'var(--radius-md)', background: 'white', border: '1px solid var(--border-subtle)' }}
              title="วันก่อนหน้า"
            >
              <ChevronLeft size={18} />
            </button>

            <div style={{ textAlign: 'center', minWidth: '180px' }}>
              <div style={{ fontSize: '0.92rem', fontWeight: 700, color: 'var(--text-main)' }}>
                {formatThaiDate(selectedDate, true)}
              </div>
              <div style={{ fontSize: '0.75rem', color: isBrowsingOtherDay ? '#B45309' : '#059669', fontWeight: 600 }}>
                {isBrowsingOtherDay ? `ดูวันอื่น (${selectedDate})` : '🔒 วันนี้ (ล็อคอัตโนมัติ)'}
              </div>
            </div>

            <button
              type="button"
              onClick={handleNextDay}
              style={{ padding: '6px', borderRadius: 'var(--radius-md)', background: 'white', border: '1px solid var(--border-subtle)' }}
              title="วันถัดไป"
            >
              <ChevronRight size={18} />
            </button>

            {isBrowsingOtherDay && (
              <button
                type="button"
                onClick={handleBackToToday}
                className="btn-primary"
                style={{ padding: '5px 12px', fontSize: '0.78rem', marginLeft: '6px' }}
                title="ล็อคกลับสู่วันนี้"
              >
                🔒 วันนี้
              </button>
            )}
          </div>
        </div>

        {/* Progress Bar วันนี้ */}
        {!isExamDay && allTasks.length > 0 && (
          <div style={{ marginTop: '20px', paddingTop: '16px', borderTop: '1px solid var(--border-subtle)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
              <span style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--text-main)' }}>
                Progress วันนี้: {progress.percent}%
              </span>
              <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                {progress.completedTasks} จาก {progress.totalTasks} งานสำเร็จ
              </span>
            </div>
            <ProgressBar percent={progress.percent} height={10} />
          </div>
        )}
      </div>

      {/* If Exam Day, show special exam banner */}
      {isExamDay && (
        <ExamDayScreen
          examTitle={currentPlan.examType}
          dateThai={formatThaiDate(selectedDate, false)}
        />
      )}

      {/* If All Tasks Complete banner */}
      {progress.isAllCompleted && allTasks.length > 0 && (
        <div style={{
          background: 'linear-gradient(135deg, #10B981, #059669)',
          color: 'white',
          borderRadius: 'var(--radius-2xl)',
          padding: '24px 28px',
          marginBottom: '24px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '16px',
          boxShadow: 'var(--shadow-md)'
        }}>
          <div>
            <h3 style={{ fontSize: '1.4rem', fontWeight: 800, marginBottom: '4px' }}>
              🎉 งานวันนี้เสร็จครบแล้ว!
            </h3>
            <p style={{ opacity: 0.95, fontSize: '0.92rem' }}>
              เก่งมาก! ทำเป้าหมายประจำวันนี้สำเร็จครบ 100% แล้ว พักผ่อนให้เต็มที่เพื่อเตรียมพร้อมสำหรับวันพรุ่งนี้
            </p>
          </div>

          <button
            type="button"
            onClick={() => onResetToday(selectedDate)}
            className="btn-secondary"
            style={{ color: '#065F46', background: 'white', fontSize: '0.85rem' }}
          >
            <RotateCcw size={14} /> รีเซ็ตงานวันนี้
          </button>
        </div>
      )}

      {/* Filters Toolbar */}
      {!isExamDay && allTasks.length > 0 && (
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '14px',
          marginBottom: '20px'
        }}>
          {/* Status Tabs */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', background: 'white', padding: '4px', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border-subtle)' }}>
            {[
              { id: 'all', label: 'ทั้งหมด' },
              { id: 'not_started', label: 'ยังไม่ทำ' },
              { id: 'in_progress', label: 'กำลังทำ' },
              { id: 'completed', label: 'เสร็จแล้ว' }
            ].map(tab => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setStatusFilter(tab.id)}
                style={{
                  padding: '6px 14px',
                  borderRadius: 'var(--radius-md)',
                  fontSize: '0.85rem',
                  fontWeight: statusFilter === tab.id ? 700 : 500,
                  backgroundColor: statusFilter === tab.id ? '#2563EB' : 'transparent',
                  color: statusFilter === tab.id ? 'white' : 'var(--text-muted)'
                }}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Subject Filter Dropdown */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>วิชา:</span>
            <select
              value={subjectFilter}
              onChange={(e) => setSubjectFilter(e.target.value)}
              style={{
                padding: '7px 14px',
                borderRadius: 'var(--radius-lg)',
                border: '1px solid var(--border-medium)',
                background: 'white',
                fontSize: '0.85rem'
              }}
            >
              <option value="all">ทุกวิชา</option>
              {SUBJECT_LIST.map(s => (
                <option key={s.id} value={s.code}>{s.code}</option>
              ))}
            </select>
          </div>
        </div>
      )}

      {/* Tasks List */}
      {!isExamDay && (
        <>
          {filteredTasks.length === 0 ? (
            <EmptyState
              title={allTasks.length === 0 ? 'ไม่มีงานอ่านในวันนี้ 🎉' : 'ไม่มีงานในตัวกรองนี้'}
              description={allTasks.length === 0 ? 'วันนี้เป็นวันพัก ผ่อนคลายให้เต็มที่แล้วกลับมาลุยต่อพรุ่งนี้' : 'ลองเปลี่ยนตัวกรองสถานะหรือวิชาเพื่อดูงานอื่นๆ'}
            />
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
              {filteredTasks.map(task => (
                <TaskCard
                  key={task.id}
                  task={task}
                  subtaskStates={subtaskStates}
                  taskNotes={taskNotes}
                  onToggleSubtask={onToggleSubtask}
                  onSetTaskComplete={onSetTaskComplete}
                  onSaveTaskNote={onSaveTaskNote}
                  onOpenErrorModal={handleOpenErrorModal}
                  initiallyExpanded={true}
                />
              ))}
            </div>
          )}
        </>
      )}

      {/* Personal Daily Notes Section */}
      <div className="glass-card" style={{ padding: '24px', marginTop: '28px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
          <h4 style={{ fontWeight: 700, fontSize: '1.05rem', color: 'var(--text-main)', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <BookOpen size={18} style={{ color: '#2563EB' }} />
            บันทึกส่วนตัวประจำวัน (Daily Notes)
          </h4>
          {noteSavedFeedback && (
            <span style={{ fontSize: '0.82rem', color: '#059669', fontWeight: 600 }}>
              ✓ บันทึกเรียบร้อย
            </span>
          )}
        </div>

        <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '12px' }}>
          จดประเด็นที่ได้เรียนรู้ ความคืบหน้า สิ่งที่ติดขัด หรือคำเตือนใจสำหรับตัวเอง บันทึกนี้จะถูกเก็บไว้เสมอ
        </p>

        <textarea
          rows={3}
          value={noteText}
          onChange={(e) => setNoteText(e.target.value)}
          onBlur={handleSaveNote}
          placeholder="เช่น 'วันนี้เรื่อง Probability ยังสับสนเรื่องจัดหมู่ พรุ่งนี้ต้องกลับมาทำเพิ่ม 10 ข้อ'..."
          style={{
            width: '100%',
            padding: '12px 14px',
            borderRadius: 'var(--radius-lg)',
            border: '1px solid var(--border-medium)',
            fontSize: '0.92rem',
            background: 'white',
            lineHeight: 1.5,
            resize: 'vertical'
          }}
        />

        <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '10px' }}>
          <button
            type="button"
            onClick={handleSaveNote}
            className="btn-primary"
            style={{ padding: '8px 18px', fontSize: '0.85rem' }}
          >
            <Save size={15} /> บันทึกโน้ต
          </button>
        </div>
      </div>

      {/* Error Modal */}
      <ErrorModal
        isOpen={errorModalOpen}
        onClose={() => setErrorModalOpen(false)}
        onSave={onAddErrorLog}
        initialData={errorModalInitial}
        activeDate={selectedDate}
      />
    </div>
  );
}
