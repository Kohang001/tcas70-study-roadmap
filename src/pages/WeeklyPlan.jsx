import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  CalendarDays, 
  ChevronLeft, 
  ChevronRight, 
  Sparkles, 
  Target, 
  CheckCircle2, 
  RotateCcw,
  BookOpen
} from 'lucide-react';
import WeekCard from '../components/WeekCard';
import ProgressBar from '../components/ProgressBar';
import { 
  getMondayOfWeek, 
  getDaysOfWeek, 
  formatShortThaiDate, 
  formatThaiDate, 
  addDays, 
  getWeekIndex 
} from '../utils/dateUtils';
import { getSmartPlanForDate } from '../data/studyPlan';
import { getWeekProgress } from '../utils/progressUtils';

export default function WeeklyPlan({
  activeToday,
  subtaskStates,
  onSelectDate
}) {
  const navigate = useNavigate();

  // Active Monday of displayed week
  const initialMonday = getMondayOfWeek(activeToday);
  const [currentMonday, setCurrentMonday] = useState(initialMonday);

  const daysInWeek = getDaysOfWeek(currentMonday);
  const weekPlans = daysInWeek.map(d => getSmartPlanForDate(d));

  const weekProgress = getWeekProgress(weekPlans, subtaskStates);
  const weekNumber = getWeekIndex(currentMonday);

  const startDayThai = formatShortThaiDate(daysInWeek[0]);
  const endDayThai = formatShortThaiDate(daysInWeek[6]);

  const handlePrevWeek = () => {
    setCurrentMonday(prev => addDays(prev, -7));
  };

  const handleNextWeek = () => {
    setCurrentMonday(prev => addDays(prev, 7));
  };

  const handleCurrentWeek = () => {
    setCurrentMonday(getMondayOfWeek(activeToday));
  };

  const handleSelectDay = (dateStr) => {
    if (onSelectDate) {
      onSelectDate(dateStr);
    }
    navigate('/today');
  };

  // Determine weekly focus summary dynamically or from week plans
  const weekFocusSummary = weekPlans.find(p => p && p.focus)?.focus || 'มุ่งเน้นเนื้อหาตามตารางประจำสัปดาห์';
  const isPostExamPeriod = currentMonday >= '2027-01-30';

  return (
    <div className="page-wrapper animate-fade-in">
      {/* Header & Week Switcher */}
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
            <span style={{ fontSize: '0.8rem', fontWeight: 600, color: '#2563EB', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              WEEKLY ROADMAP
            </span>
            <h2 style={{ fontSize: '1.75rem', fontWeight: 800, color: 'var(--text-main)', letterSpacing: '-0.02em', marginTop: '2px' }}>
              สัปดาห์ที่ {weekNumber}
            </h2>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-muted)', fontSize: '0.92rem', marginTop: '4px' }}>
              <CalendarDays size={15} />
              <span>วันที่ {startDayThai} - {endDayThai}</span>
            </div>
          </div>

          {/* Week Switcher Controls */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', background: 'var(--bg-card-subtle)', padding: '6px 12px', borderRadius: 'var(--radius-xl)' }}>
            <button
              type="button"
              onClick={handlePrevWeek}
              className="btn-secondary"
              style={{ padding: '6px 12px', fontSize: '0.85rem' }}
            >
              <ChevronLeft size={16} /> สัปดาห์ก่อน
            </button>

            <button
              type="button"
              onClick={handleCurrentWeek}
              className="btn-primary"
              style={{ padding: '6px 14px', fontSize: '0.85rem' }}
            >
              สัปดาห์ปัจจุบัน
            </button>

            <button
              type="button"
              onClick={handleNextWeek}
              className="btn-secondary"
              style={{ padding: '6px 12px', fontSize: '0.85rem' }}
            >
              สัปดาห์ถัดไป <ChevronRight size={16} />
            </button>
          </div>
        </div>

        {/* Weekly Progress Bar */}
        <div style={{ marginTop: '20px', paddingTop: '16px', borderTop: '1px solid var(--border-subtle)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
            <span style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--text-main)' }}>
              ความคืบหน้าสัปดาห์นี้
            </span>
            <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontWeight: 600 }}>
              {weekProgress.completedTasks} / {weekProgress.totalTasks} งาน ({weekProgress.percent}%)
            </span>
          </div>
          <ProgressBar percent={weekProgress.percent} height={9} />
        </div>
      </div>

      {/* Week Focus Highlights (สัปดาห์นี้เน้นอะไร) */}
      <div style={{
        background: 'linear-gradient(135deg, #EFF6FF 0%, #F5F3FF 100%)',
        border: '1px solid #DBEAFE',
        borderRadius: 'var(--radius-2xl)',
        padding: '22px 26px',
        marginBottom: '24px'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px' }}>
          <Target size={20} style={{ color: '#2563EB' }} />
          <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#1E3A8A' }}>
            สัปดาห์นี้เน้นอะไร
          </h3>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px' }}>
          {!isPostExamPeriod ? (
            <>
              <div style={{ background: 'white', padding: '14px 18px', borderRadius: 'var(--radius-xl)', border: '1px solid #E2E8F0' }}>
                <div style={{ fontWeight: 700, fontSize: '0.92rem', color: '#7C3AED', marginBottom: '6px' }}>
                  🎯 TGAT / TPAT3
                </div>
                <ul style={{ paddingLeft: '18px', fontSize: '0.86rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
                  <li>เพิ่มความเร็ว Numerical Reasoning & เปรียบเทียบปริมาณ</li>
                  <li>ฝึก Spatial การหมุนภาพและพับกล่องลูกเต๋า</li>
                  <li>Mechanical Reasoning: คาน รอก เฟือง และกฎนิวตัน</li>
                </ul>
              </div>

              <div style={{ background: 'white', padding: '14px 18px', borderRadius: 'var(--radius-xl)', border: '1px solid #E2E8F0' }}>
                <div style={{ fontWeight: 700, fontSize: '0.92rem', color: '#DC2626', marginBottom: '6px' }}>
                  📚 A-Level Foundations
                </div>
                <ul style={{ paddingLeft: '18px', fontSize: '0.86rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
                  <li>Math: ฟังก์ชันพื้นฐาน / เอกซ์โพเนนเชียล / ความน่าจะเป็น</li>
                  <li>Physics: การเคลื่อนที่แนวตรง / กราฟการเคลื่อนที่ / แรงนิวตัน</li>
                  <li>English: Academic Vocabulary วันละ 15-20 คำ</li>
                </ul>
              </div>
            </>
          ) : (
            <div style={{ background: 'white', padding: '16px 20px', borderRadius: 'var(--radius-xl)', border: '1px solid #E2E8F0', gridColumn: '1 / -1' }}>
              <div style={{ fontWeight: 700, fontSize: '0.95rem', color: '#DC2626', marginBottom: '6px' }}>
                🔥 A-Level Takeover Focus
              </div>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
                ทุ่มสมาธิ 100% สู่การเก็บเนื้อหา A-Level Math1, Physics, English ให้ครบทุกบท ทำข้อสอบจำลอง และซ่อมจุดผิดจาก Error Log
              </p>
            </div>
          )}
        </div>
      </div>

      {/* 7 Days Grid */}
      <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--text-main)', marginBottom: '14px' }}>
        ตารางรายวัน (คลิกเพื่อดูงานทั้งหมดในวันนั้น)
      </h3>

      <div className="week-grid">
        {weekPlans.map((dayPlan, idx) => (
          <WeekCard
            key={dayPlan.date || idx}
            dayPlan={dayPlan}
            isToday={dayPlan.date === activeToday}
            subtaskStates={subtaskStates}
            onSelectDay={handleSelectDay}
          />
        ))}
      </div>
    </div>
  );
}
