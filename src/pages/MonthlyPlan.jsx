import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Map, Calendar, Target, Award, Sparkles } from 'lucide-react';
import MonthCard from '../components/MonthCard';
import { MONTH_ROADMAP_META } from '../data/studyPlan';

export default function MonthlyPlan({
  subtaskStates,
  onSelectDate
}) {
  const navigate = useNavigate();

  const handleSelectDate = (dateStr) => {
    if (onSelectDate) {
      onSelectDate(dateStr);
    }
    navigate('/today');
  };

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
        <span style={{ fontSize: '0.8rem', fontWeight: 600, color: '#2563EB', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
          MONTHLY ROADMAP
        </span>
        <h2 style={{ fontSize: '1.75rem', fontWeight: 800, color: 'var(--text-main)', letterSpacing: '-0.02em', marginTop: '2px' }}>
          แผนการอ่านรายเดือน (กันยายน 2569 - มีนาคม 2570)
        </h2>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem', marginTop: '4px' }}>
          ภาพรวมการจัดสรรเวลา สัดส่วนวิชา และเป้าหมายเชิงกลยุทธ์ในแต่ละเดือน เพื่อเตรียมตัวอย่างมีประสิทธิภาพสูงสุด
        </p>
      </div>

      {/* Monthly Cards List */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        {MONTH_ROADMAP_META.map(month => (
          <MonthCard
            key={month.id}
            monthMeta={month}
            subtaskStates={subtaskStates}
            onSelectDate={handleSelectDate}
          />
        ))}
      </div>
    </div>
  );
}
