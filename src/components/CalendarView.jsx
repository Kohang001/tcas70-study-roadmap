import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { parseDate, formatDateToISO, formatThaiMonth, getBuddhistYear } from '../utils/dateUtils';
import { getSmartPlanForDate } from '../data/studyPlan';
import { getDayProgress } from '../utils/progressUtils';

export default function CalendarView({
  activeDate,
  onSelectDate,
  subtaskStates = {},
  className = ''
}) {
  const initialDate = parseDate(activeDate);
  const [currentYear, setCurrentYear] = useState(initialDate.getFullYear());
  const [currentMonth, setCurrentMonth] = useState(initialDate.getMonth() + 1); // 1-12

  const handlePrevMonth = () => {
    if (currentMonth === 1) {
      setCurrentMonth(12);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
  };

  const handleNextMonth = () => {
    if (currentMonth === 12) {
      setCurrentMonth(1);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
  };

  // Days in month
  const firstDayOfMonth = new Date(currentYear, currentMonth - 1, 1).getDay(); // 0 is Sun
  const daysInMonth = new Date(currentYear, currentMonth, 0).getDate();

  // Adjust so Monday is day 0
  const startOffset = (firstDayOfMonth === 0 ? 6 : firstDayOfMonth - 1);

  const daysArray = [];
  // Empty slots
  for (let i = 0; i < startOffset; i++) {
    daysArray.push(null);
  }
  // Days
  for (let d = 1; d <= daysInMonth; d++) {
    const monthStr = String(currentMonth).padStart(2, '0');
    const dayStr = String(d).padStart(2, '0');
    daysArray.push(`${currentYear}-${monthStr}-${dayStr}`);
  }

  const dayHeaders = ['จ.', 'อ.', 'พ.', 'พฤ.', 'ศ.', 'ส.', 'อา.'];

  return (
    <div className={`glass-card ${className}`} style={{ padding: '20px' }}>
      {/* Calendar Header */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
        <h4 style={{ fontWeight: 700, fontSize: '1rem', color: 'var(--text-main)' }}>
          {formatThaiMonth(currentYear, currentMonth)}
        </h4>
        <div style={{ display: 'flex', gap: '4px' }}>
          <button
            type="button"
            onClick={handlePrevMonth}
            style={{ padding: '6px', borderRadius: 'var(--radius-sm)', background: 'var(--bg-card-subtle)' }}
            aria-label="Previous month"
          >
            <ChevronLeft size={16} />
          </button>
          <button
            type="button"
            onClick={handleNextMonth}
            style={{ padding: '6px', borderRadius: 'var(--radius-sm)', background: 'var(--bg-card-subtle)' }}
            aria-label="Next month"
          >
            <ChevronRight size={16} />
          </button>
        </div>
      </div>

      {/* Weekday headers */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: '4px', textAlign: 'center', marginBottom: '8px' }}>
        {dayHeaders.map((dh, idx) => (
          <span key={idx} style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-muted)' }}>
            {dh}
          </span>
        ))}
      </div>

      {/* Days grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: '4px' }}>
        {daysArray.map((dateStr, idx) => {
          if (!dateStr) {
            return <div key={`empty-${idx}`} style={{ height: '36px' }} />;
          }

          const dayNumber = parseInt(dateStr.split('-')[2], 10);
          const isSelected = dateStr === activeDate;
          const plan = getSmartPlanForDate(dateStr);
          const hasTasks = plan && plan.tasks && plan.tasks.length > 0;
          const isExam = plan && plan.isExamDay;

          let statusDotColor = null;
          if (isExam) {
            statusDotColor = '#DC2626'; // Red for Exam day
          } else if (hasTasks) {
            const prog = getDayProgress(plan.tasks, subtaskStates);
            if (prog.isAllCompleted) {
              statusDotColor = '#10B981'; // Green
            } else if (prog.completedSubtasks > 0) {
              statusDotColor = '#F59E0B'; // Orange / In progress
            } else {
              statusDotColor = '#3B82F6'; // Blue / Pending
            }
          }

          return (
            <button
              key={dateStr}
              type="button"
              onClick={() => onSelectDate(dateStr)}
              style={{
                height: '36px',
                borderRadius: 'var(--radius-md)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '0.85rem',
                fontWeight: isSelected ? 700 : 500,
                color: isSelected ? '#FFFFFF' : 'var(--text-main)',
                backgroundColor: isSelected ? '#2563EB' : 'transparent',
                border: isSelected ? '1px solid #1D4ED8' : '1px solid transparent',
                position: 'relative',
                transition: 'all var(--transition-fast)'
              }}
              onMouseEnter={(e) => {
                if (!isSelected) e.currentTarget.style.backgroundColor = '#F1F5F9';
              }}
              onMouseLeave={(e) => {
                if (!isSelected) e.currentTarget.style.backgroundColor = 'transparent';
              }}
            >
              <span>{dayNumber}</span>
              {statusDotColor && (
                <span
                  style={{
                    position: 'absolute',
                    bottom: '3px',
                    width: '5px',
                    height: '5px',
                    borderRadius: '50%',
                    backgroundColor: isSelected ? '#FFFFFF' : statusDotColor
                  }}
                />
              )}
            </button>
          );
        })}
      </div>

      {/* Legend */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px', marginTop: '14px', paddingTop: '12px', borderTop: '1px solid var(--border-subtle)', fontSize: '0.72rem', color: 'var(--text-muted)' }}>
        <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
          <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#3B82F6' }} /> ยังไม่ทำ
        </span>
        <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
          <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#F59E0B' }} /> กำลังทำ
        </span>
        <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
          <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#10B981' }} /> เสร็จครบ
        </span>
      </div>
    </div>
  );
}
