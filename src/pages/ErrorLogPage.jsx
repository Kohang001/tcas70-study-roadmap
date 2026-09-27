import React, { useState } from 'react';
import { 
  AlertCircle, 
  Plus, 
  Search, 
  Trash2, 
  Edit3, 
  Filter, 
  Calendar, 
  BookOpen,
  CheckCircle2
} from 'lucide-react';
import SubjectBadge from '../components/SubjectBadge';
import ErrorModal from '../components/ErrorModal';
import EmptyState from '../components/EmptyState';
import { SUBJECT_LIST } from '../data/subjects';
import { formatThaiDate } from '../utils/dateUtils';

export default function ErrorLogPage({
  errorLogs = [],
  onAddErrorLog,
  onUpdateErrorLog,
  onDeleteErrorLog,
  activeDate
}) {
  const [subjectFilter, setSubjectFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [modalOpen, setModalOpen] = useState(false);
  const [editingLog, setEditingLog] = useState(null);

  const handleOpenAdd = () => {
    setEditingLog(null);
    setModalOpen(true);
  };

  const handleOpenEdit = (log) => {
    setEditingLog(log);
    setModalOpen(true);
  };

  const handleSave = (logData) => {
    if (editingLog) {
      onUpdateErrorLog(editingLog.id, logData);
    } else {
      onAddErrorLog(logData);
    }
  };

  // Filter logs
  const filteredLogs = errorLogs.filter(log => {
    // Subject filter
    if (subjectFilter !== 'all' && log.subject.toLowerCase() !== subjectFilter.toLowerCase()) {
      return false;
    }
    // Search query
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      const matchTopic = log.topic?.toLowerCase().includes(q);
      const matchDesc = log.questionDesc?.toLowerCase().includes(q);
      const matchWhy = log.whyWrong?.toLowerCase().includes(q);
      const matchSol = log.solution?.toLowerCase().includes(q);
      if (!matchTopic && !matchDesc && !matchWhy && !matchSol) {
        return false;
      }
    }
    return true;
  });

  return (
    <div className="page-wrapper animate-fade-in">
      {/* Header */}
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
            <span style={{ fontSize: '0.8rem', fontWeight: 600, color: '#DC2626', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              MISTAKE JOURNAL
            </span>
            <h2 style={{ fontSize: '1.75rem', fontWeight: 800, color: 'var(--text-main)', letterSpacing: '-0.02em', marginTop: '2px' }}>
              สมุดบันทึกข้อผิดพลาด (Error Log)
            </h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem', marginTop: '4px' }}>
              เปลี่ยนทุกข้อที่เคยทำผิดให้กลายเป็นคลังความรู้ เพื่อไม่ให้พลาดซ้ำในสนามสอบจริง
            </p>
          </div>

          <button
            type="button"
            onClick={handleOpenAdd}
            className="btn-primary"
            style={{ padding: '10px 20px', background: '#DC2626', borderColor: '#DC2626' }}
          >
            <Plus size={18} /> + บันทึกข้อผิดใหม่
          </button>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div style={{
        background: '#FFFFFF',
        border: '1px solid var(--border-subtle)',
        borderRadius: 'var(--radius-xl)',
        padding: '16px 20px',
        marginBottom: '22px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '14px'
      }}>
        {/* Search */}
        <div style={{ position: 'relative', flex: 1, minWidth: '240px' }}>
          <Search size={16} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
          <input
            type="text"
            placeholder="ค้นหาตามชื่อหัวข้อ, สาเหตุที่ผิด, หรือวิธีแก้..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            style={{
              width: '100%',
              padding: '9px 12px 9px 36px',
              borderRadius: 'var(--radius-md)',
              border: '1px solid var(--border-medium)',
              fontSize: '0.88rem',
              outline: 'none'
            }}
          />
        </div>

        {/* Subject Filter */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Filter size={15} style={{ color: 'var(--text-muted)' }} />
          <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>วิชา:</span>
          <select
            value={subjectFilter}
            onChange={(e) => setSubjectFilter(e.target.value)}
            style={{
              padding: '8px 14px',
              borderRadius: 'var(--radius-md)',
              border: '1px solid var(--border-medium)',
              background: 'white',
              fontSize: '0.85rem'
            }}
          >
            <option value="all">ทุกวิชา ({errorLogs.length})</option>
            {SUBJECT_LIST.map(s => {
              const count = errorLogs.filter(l => l.subject.toLowerCase() === s.code.toLowerCase()).length;
              return (
                <option key={s.id} value={s.code}>
                  {s.code} ({count})
                </option>
              );
            })}
          </select>
        </div>
      </div>

      {/* Logs List */}
      {filteredLogs.length === 0 ? (
        <EmptyState
          title="ไม่พบบันทึก Error Log"
          description={searchQuery ? 'ไม่พบรายการที่ตรงกับคำค้นหา ลองล้างตัวกรองหรือค้นหาด้วยคำอื่น' : 'ยังไม่มีข้อผิดพลาดที่บันทึกไว้ในหมวดนี้ เริ่มจดข้อแรกเพื่อพัฒนาตัวเองได้เลย!'}
          actionText="+ บันทึกข้อผิดข้อแรก"
          onAction={handleOpenAdd}
        />
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {filteredLogs.map(log => (
            <div
              key={log.id}
              className="glass-card animate-fade-in"
              style={{ padding: '22px 24px', borderLeft: '4px solid #DC2626' }}
            >
              {/* Header row */}
              <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '16px', marginBottom: '12px', flexWrap: 'wrap' }}>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
                    <SubjectBadge subjectCode={log.subject} size="sm" showName />
                    <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', fontSize: '0.78rem', color: 'var(--text-muted)' }}>
                      <Calendar size={13} />
                      {formatThaiDate(log.date, false)}
                    </span>
                  </div>

                  <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--text-main)' }}>
                    {log.topic}
                  </h3>
                </div>

                {/* Actions */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <button
                    type="button"
                    onClick={() => handleOpenEdit(log)}
                    style={{
                      padding: '6px 12px',
                      borderRadius: 'var(--radius-md)',
                      background: 'var(--bg-card-subtle)',
                      fontSize: '0.8rem',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '4px',
                      color: 'var(--text-main)'
                    }}
                  >
                    <Edit3 size={13} /> แก้ไข
                  </button>

                  <button
                    type="button"
                    onClick={() => {
                      if (confirm('ต้องการลบบันทึกนี้ใช่หรือไม่?')) {
                        onDeleteErrorLog(log.id);
                      }
                    }}
                    style={{
                      padding: '6px 10px',
                      borderRadius: 'var(--radius-md)',
                      background: '#FEF2F2',
                      fontSize: '0.8rem',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '4px',
                      color: '#DC2626'
                    }}
                    title="ลบบันทึก"
                  >
                    <Trash2 size={14} />
                  </button>
                </div>
              </div>

              {/* Question description */}
              {log.questionDesc && (
                <div style={{ fontSize: '0.88rem', color: 'var(--text-muted)', marginBottom: '14px', background: '#F8FAFC', padding: '10px 14px', borderRadius: 'var(--radius-md)', lineHeight: 1.5 }}>
                  <span style={{ fontWeight: 600, color: 'var(--text-main)' }}>ลักษณะโจทย์: </span>
                  {log.questionDesc}
                </div>
              )}

              {/* Why Wrong & Solution side by side or stacked */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '14px' }}>
                {/* Why Wrong */}
                <div style={{ background: '#FEF2F2', border: '1px solid #FECACA', borderRadius: 'var(--radius-lg)', padding: '14px 16px' }}>
                  <div style={{ fontWeight: 700, fontSize: '0.86rem', color: '#DC2626', marginBottom: '6px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <span>❌ ผิดเพราะ:</span>
                  </div>
                  <p style={{ fontSize: '0.9rem', color: '#7F1D1D', lineHeight: 1.5 }}>
                    {log.whyWrong || 'ไม่ได้ระบุ'}
                  </p>
                </div>

                {/* Solution */}
                <div style={{ background: '#ECFDF5', border: '1px solid #A7F3D0', borderRadius: 'var(--radius-lg)', padding: '14px 16px' }}>
                  <div style={{ fontWeight: 700, fontSize: '0.86rem', color: '#059669', marginBottom: '6px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <span>✅ วิธีแก้ / จุดที่ต้องจำ:</span>
                  </div>
                  <p style={{ fontSize: '0.9rem', color: '#064E3B', lineHeight: 1.5 }}>
                    {log.solution || 'ไม่ได้ระบุ'}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Add / Edit Modal */}
      <ErrorModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        onSave={handleSave}
        initialData={editingLog}
        activeDate={activeDate}
      />
    </div>
  );
}
