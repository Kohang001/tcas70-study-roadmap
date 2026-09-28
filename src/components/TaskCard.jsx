import React, { useState } from 'react';
import { 
  Clock, 
  Check, 
  ChevronDown, 
  ChevronUp, 
  CheckCircle2,
  Edit3, 
  AlertCircle,
} from 'lucide-react';
import confetti from 'canvas-confetti';
import SubjectBadge from './SubjectBadge';
import ProgressBar from './ProgressBar';
import { getTaskProgress } from '../utils/progressUtils';

export default function TaskCard({
  task,
  subtaskStates = {},
  taskNotes = {},
  onToggleSubtask,
  onSetTaskComplete,
  onSaveTaskNote,
  onOpenErrorModal = null,
  initiallyExpanded = true
}) {
  const [expanded, setExpanded] = useState(initiallyExpanded);
  const [isEditingNote, setIsEditingNote] = useState(false);
  const [localNote, setLocalNote] = useState(taskNotes[task.id] || '');

  const progress = getTaskProgress(task, subtaskStates);
  const isDone = progress.isCompleted;

  const handleSubtaskClick = (subtaskId, currentlyDone) => {
    onToggleSubtask(subtaskId);

    // If this subtask will make the whole task complete, fire celebratory confetti!
    if (!currentlyDone && progress.completedSubtasks + 1 === progress.totalSubtasks) {
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.8 },
        colors: ['#3B82F6', '#10B981', '#F59E0B', '#8B5CF6']
      });
    }
  };

  const handleToggleAll = (e) => {
    e.stopPropagation();
    const shouldComplete = !isDone;
    onSetTaskComplete(task, shouldComplete);
    if (shouldComplete) {
      confetti({
        particleCount: 40,
        spread: 50,
        origin: { y: 0.75 }
      });
    }
  };

  const handleNoteBlur = () => {
    onSaveTaskNote(task.id, localNote);
    setIsEditingNote(false);
  };

  return (
    <div className={`task-card ${isDone ? 'is-completed' : ''} animate-fade-in`}>
      {/* Header Row */}
      <div className="task-header" onClick={() => setExpanded(!expanded)} style={{ cursor: 'pointer' }}>
        <div className="task-title-group">
          <div className="task-badges-row">
            <SubjectBadge subjectCode={task.subject} size="sm" showName />
            <span className="task-duration-badge">
              <Clock size={12} />
              {task.duration} นาที
            </span>
            {task.type && (
              <span className="task-type-badge">{task.type}</span>
            )}
            <span className={`task-status-pill status-${progress.status}`}>
              {progress.status === 'completed' && '✅ เสร็จแล้ว'}
              {progress.status === 'in_progress' && '⏳ กำลังทำ'}
              {progress.status === 'not_started' && '⚪ ยังไม่เริ่ม'}
            </span>
          </div>

          <h4 className={`task-topic ${isDone ? 'is-done' : ''}`}>
            {task.topic}
          </h4>
        </div>

        {/* Action Controls */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }} onClick={e => e.stopPropagation()}>
          <button
            type="button"
            onClick={handleToggleAll}
            className={isDone ? 'btn-secondary' : 'btn-primary'}
            style={{ padding: '6px 12px', fontSize: '0.8rem' }}
            title={isDone ? 'ยกเลิกเสร็จทั้งหมด' : 'ทำเครื่องหมายว่าเสร็จแล้ว'}
          >
            {isDone ? (
              <>
                <Check size={14} /> เสร็จแล้ว
              </>
            ) : (
              <>
                <CheckCircle2 size={14} /> ทำเสร็จ
              </>
            )}
          </button>

          <button
            type="button"
            onClick={() => setExpanded(!expanded)}
            style={{ padding: '6px', color: 'var(--text-muted)' }}
            aria-label="Expand task details"
          >
            {expanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
          </button>
        </div>
      </div>

      {/* Progress mini bar */}
      <div style={{ marginTop: '10px', marginBottom: expanded ? '14px' : '0' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.78rem', color: 'var(--text-muted)', marginBottom: '4px' }}>
          <span>ความคืบหน้างานย่อย</span>
          <span style={{ fontWeight: 600 }}>
            {progress.completedSubtasks} / {progress.totalSubtasks} งาน ({progress.percent}%)
          </span>
        </div>
        <ProgressBar percent={progress.percent} height={6} />
      </div>

      {/* Expanded Details: Subtasks Checklist & Notes */}
      {expanded && (
        <div className="subtasks-list animate-fade-in">
          <div style={{ fontSize: '0.82rem', fontWeight: 600, color: 'var(--text-muted)', marginBottom: '4px' }}>
            รายการที่ต้องทำในหัวข้อนี้:
          </div>

          {task.subtasks && task.subtasks.map((subtask) => {
            const isChecked = !!subtaskStates[subtask.id];
            return (
              <div
                key={subtask.id}
                className={`subtask-item ${isChecked ? 'checked' : ''}`}
                onClick={() => handleSubtaskClick(subtask.id, isChecked)}
                role="checkbox"
                aria-checked={isChecked}
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    handleSubtaskClick(subtask.id, isChecked);
                  }
                }}
              >
                <div className="subtask-checkbox">
                  {isChecked && <Check size={13} strokeWidth={3} />}
                </div>
                <span className="subtask-title">{subtask.title}</span>
              </div>
            );
          })}

          {/* Quick Actions & Notes Area */}
          <div style={{ marginTop: '12px', display: 'flex', flexWrap: 'wrap', gap: '8px', alignItems: 'center', justifyContent: 'space-between' }}>
            {onOpenErrorModal && (
              <button
                type="button"
                onClick={() => onOpenErrorModal({ subject: task.subject, topic: task.topic })}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  fontSize: '0.78rem',
                  color: '#DC2626',
                  background: '#FEF2F2',
                  border: '1px solid #FECACA',
                  padding: '4px 10px',
                  borderRadius: 'var(--radius-md)',
                  fontWeight: 600
                }}
              >
                <AlertCircle size={14} />
                จดข้อผิดลง Error Log
              </button>
            )}

            {!isEditingNote && !localNote && (
              <button
                type="button"
                onClick={() => setIsEditingNote(true)}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '5px',
                  fontSize: '0.78rem',
                  color: 'var(--text-muted)',
                  marginLeft: 'auto'
                }}
              >
                <Edit3 size={13} />
                + เพิ่มบันทึกส่วนตัว
              </button>
            )}
          </div>

          {/* Personal Task Note display or input */}
          {(isEditingNote || localNote) && (
            <div className="task-notes-box">
              <input
                type="text"
                className="task-notes-input"
                placeholder="โน้ตช่วยจำ เช่น 'ยังสับสนตรงนี้ พรุ่งนี้ทวนเพิ่ม'..."
                value={localNote}
                onChange={(e) => setLocalNote(e.target.value)}
                onBlur={handleNoteBlur}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') handleNoteBlur();
                }}
                autoFocus={isEditingNote}
              />
            </div>
          )}
        </div>
      )}
    </div>
  );
}
