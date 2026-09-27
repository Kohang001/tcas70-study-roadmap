import React from 'react';
import { Clock, CheckCircle2, ChevronRight, Check } from 'lucide-react';
import SubjectBadge from './SubjectBadge';
import ProgressBar from './ProgressBar';
import { getTaskProgress } from '../utils/progressUtils';
import confetti from 'canvas-confetti';

export default function TodayCard({
  task,
  subtaskStates = {},
  onToggleSubtask,
  onOpenDetails = null
}) {
  const progress = getTaskProgress(task, subtaskStates);
  const isDone = progress.isCompleted;

  const handleSubtaskClick = (subtaskId, currentlyDone) => {
    onToggleSubtask(subtaskId);
    if (!currentlyDone && progress.completedSubtasks + 1 === progress.totalSubtasks) {
      confetti({
        particleCount: 40,
        spread: 50,
        origin: { y: 0.8 }
      });
    }
  };

  return (
    <div
      style={{
        background: '#FFFFFF',
        border: '1px solid var(--border-subtle)',
        borderRadius: 'var(--radius-xl)',
        padding: '18px 20px',
        marginBottom: '14px',
        boxShadow: 'var(--shadow-sm)',
        transition: 'all var(--transition-fast)'
      }}
      className="animate-fade-in"
    >
      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '14px', marginBottom: '10px' }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px', flexWrap: 'wrap' }}>
            <SubjectBadge subjectCode={task.subject} size="sm" showName />
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', fontSize: '0.75rem', color: 'var(--text-muted)', background: 'var(--bg-card-subtle)', padding: '2px 8px', borderRadius: 'var(--radius-sm)' }}>
              <Clock size={12} />
              {task.duration} นาที
            </span>
            {task.type && (
              <span style={{ fontSize: '0.75rem', color: '#475569', background: '#F1F5F9', padding: '2px 8px', borderRadius: 'var(--radius-sm)' }}>
                {task.type}
              </span>
            )}
          </div>

          <h4 style={{
            fontSize: '1.05rem',
            fontWeight: 700,
            color: isDone ? 'var(--text-muted)' : 'var(--text-main)',
            textDecoration: isDone ? 'line-through' : 'none'
          }}>
            {task.topic}
          </h4>
        </div>

        {/* Progress pill */}
        <span style={{
          fontSize: '0.75rem',
          fontWeight: 700,
          padding: '4px 10px',
          borderRadius: 'var(--radius-full)',
          background: isDone ? '#ECFDF5' : progress.completedSubtasks > 0 ? '#FEF3C7' : '#F1F5F9',
          color: isDone ? '#047857' : progress.completedSubtasks > 0 ? '#B45309' : '#64748B',
          whiteSpace: 'nowrap'
        }}>
          {isDone ? '✅ เสร็จแล้ว' : `${progress.completedSubtasks}/${progress.totalSubtasks} งาน (${progress.percent}%)`}
        </span>
      </div>

      {/* Progress bar */}
      <div style={{ marginBottom: '12px' }}>
        <ProgressBar percent={progress.percent} height={6} />
      </div>

      {/* Checklist quick preview */}
      {task.subtasks && task.subtasks.length > 0 && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', marginTop: '10px' }}>
          {task.subtasks.map(st => {
            const isChecked = !!subtaskStates[st.id];
            return (
              <div
                key={st.id}
                onClick={() => handleSubtaskClick(st.id, isChecked)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '6px 10px',
                  borderRadius: 'var(--radius-md)',
                  background: '#F8FAFC',
                  cursor: 'pointer',
                  fontSize: '0.85rem'
                }}
              >
                <div style={{
                  width: '16px',
                  height: '16px',
                  borderRadius: '4px',
                  border: isChecked ? 'none' : '2px solid var(--border-medium)',
                  background: isChecked ? '#10B981' : '#FFFFFF',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}>
                  {isChecked && <Check size={11} strokeWidth={3} color="white" />}
                </div>
                <span style={{
                  textDecoration: isChecked ? 'line-through' : 'none',
                  color: isChecked ? 'var(--text-muted)' : 'var(--text-main)'
                }}>
                  {st.title}
                </span>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
