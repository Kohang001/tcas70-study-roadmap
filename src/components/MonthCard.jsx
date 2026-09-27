import React, { useState } from 'react';
import { Calendar, ChevronDown, ChevronUp, ArrowRight, Target } from 'lucide-react';
import ProgressBar from './ProgressBar';
import { ALL_DAILY_PLANS } from '../data/studyPlan';
import { getDayProgress } from '../utils/progressUtils';
import SubjectBadge from './SubjectBadge';

export default function MonthCard({
  monthMeta,
  subtaskStates = {},
  onSelectDate = null
}) {
  const [isExpanded, setIsExpanded] = useState(false);

  // Filter all daily plans belonging to this month (e.g. 2026-10)
  const monthKey = monthMeta.id; // '2026-10'
  const daysInThisMonth = ALL_DAILY_PLANS.filter(p => p.date.startsWith(monthKey));

  // Compute month progress
  let totalSub = 0;
  let compSub = 0;
  let totalTasks = 0;
  let compTasks = 0;

  daysInThisMonth.forEach(day => {
    if (day.tasks) {
      const p = getDayProgress(day.tasks, subtaskStates);
      totalSub += p.totalSubtasks;
      compSub += p.completedSubtasks;
      totalTasks += p.totalTasks;
      compTasks += p.completedTasks;
    }
  });

  const monthPercent = totalSub > 0 ? Math.round((compSub / totalSub) * 100) : 0;

  return (
    <div className="month-card animate-fade-in">
      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '16px', flexWrap: 'wrap' }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '6px' }}>
            <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: 'var(--text-main)', letterSpacing: '-0.01em' }}>
              {monthMeta.name}
            </h3>
            <span style={{
              fontSize: '0.75rem',
              fontWeight: 600,
              padding: '3px 8px',
              borderRadius: 'var(--radius-full)',
              background: '#EFF6FF',
              color: '#1D4ED8',
              border: '1px solid #BFDBFE'
            }}>
              {monthMeta.phase}
            </span>
          </div>

          <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem', lineHeight: 1.5, maxWidth: '680px' }}>
            <span style={{ fontWeight: 600, color: 'var(--text-main)' }}>เป้าหมาย: </span>
            {monthMeta.target}
          </p>
        </div>

        {/* Month Progress badge */}
        <div style={{ textAlign: 'right', minWidth: '160px' }}>
          <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', marginBottom: '4px' }}>
            ความคืบหน้าประจำเดือน
          </div>
          <div style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--text-main)', fontFamily: 'var(--font-en)' }}>
            {monthPercent}%
          </div>
          <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
            {compTasks} / {totalTasks} งานสำเร็จ
          </div>
        </div>
      </div>

      {/* Subject Ratio Distribution Bar */}
      <div style={{ marginTop: '16px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '4px' }}>
          <span>สัดส่วนการอ่านโดยประมาณ:</span>
        </div>

        <div className="ratio-bar-container">
          {monthMeta.ratios.map((r) => (
            <div
              key={r.name}
              className="ratio-segment"
              style={{
                width: `${r.percent}%`,
                backgroundColor: r.color
              }}
              title={`${r.name}: ${r.percent}%`}
            />
          ))}
        </div>

        {/* Ratio badges legend */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginTop: '6px' }}>
          {monthMeta.ratios.map((r) => (
            <span key={r.name} style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', fontSize: '0.78rem', color: 'var(--text-muted)' }}>
              <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: r.color }} />
              <span style={{ fontWeight: 600, color: 'var(--text-main)' }}>{r.name}</span> {r.percent}%
            </span>
          ))}
        </div>
      </div>

      {/* Progress Bar */}
      <div style={{ marginTop: '16px' }}>
        <ProgressBar percent={monthPercent} height={7} />
      </div>

      {/* Expand/Collapse Weeks List */}
      <div style={{ marginTop: '16px', paddingTop: '14px', borderTop: '1px solid var(--border-subtle)' }}>
        <button
          type="button"
          onClick={() => setIsExpanded(!isExpanded)}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            fontSize: '0.85rem',
            color: '#2563EB',
            fontWeight: 600
          }}
        >
          {isExpanded ? (
            <>ซ่อนตารางรายสัปดาห์ในเดือนนี้ <ChevronUp size={16} /></>
          ) : (
            <>ดูรายการตารางสัปดาห์ทั้งหมดในเดือนนี้ ({daysInThisMonth.length} วัน) <ChevronDown size={16} /></>
          )}
        </button>

        {isExpanded && (
          <div style={{ marginTop: '14px', display: 'flex', flexDirection: 'column', gap: '8px' }} className="animate-fade-in">
            {daysInThisMonth.map(day => {
              const dayProg = getDayProgress(day.tasks, subtaskStates);
              return (
                <div
                  key={day.date}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '10px 14px',
                    borderRadius: 'var(--radius-lg)',
                    background: 'var(--bg-card-subtle)',
                    gap: '12px',
                    flexWrap: 'wrap'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <span style={{ fontWeight: 700, fontSize: '0.9rem', minWidth: '70px' }}>
                      {day.dayThai} {day.date.split('-')[2]}
                    </span>
                    <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                      {day.focus}
                    </span>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>
                      {dayProg.completedTasks}/{dayProg.totalTasks} งาน ({dayProg.percent}%)
                    </span>
                    {onSelectDate && (
                      <button
                        type="button"
                        onClick={() => onSelectDate(day.date)}
                        className="btn-secondary"
                        style={{ padding: '4px 10px', fontSize: '0.75rem' }}
                      >
                        เปิดแผนวันนี้ <ArrowRight size={12} />
                      </button>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
