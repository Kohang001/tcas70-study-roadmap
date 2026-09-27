import React from 'react';
import { 
  BarChart3, 
  Flame, 
  Award, 
  CheckCircle2, 
  Target, 
  Sparkles, 
  BookOpen, 
  TrendingUp,
  Clock
} from 'lucide-react';
import ProgressBar from '../components/ProgressBar';
import SubjectBadge from '../components/SubjectBadge';
import { SUBJECT_LIST } from '../data/subjects';
import { DAILY_PLANS } from '../data/studyPlan';
import { getSubjectProgress, getDayProgress } from '../utils/progressUtils';
import { formatThaiDate } from '../utils/dateUtils';

export default function Progress({
  activeToday,
  streak,
  subtaskStates
}) {
  // Compute overall stats across all daily plans
  let totalTasksOverall = 0;
  let completedTasksOverall = 0;
  let totalSubtasksOverall = 0;
  let completedSubtasksOverall = 0;

  DAILY_PLANS.forEach(day => {
    if (day.tasks) {
      const p = getDayProgress(day.tasks, subtaskStates);
      totalTasksOverall += p.totalTasks;
      completedTasksOverall += p.completedTasks;
      totalSubtasksOverall += p.totalSubtasks;
      completedSubtasksOverall += p.completedSubtasks;
    }
  });

  const overallPercent = totalSubtasksOverall > 0 
    ? Math.round((completedSubtasksOverall / totalSubtasksOverall) * 100) 
    : 0;

  // Milestone Badges logic
  const milestones = [
    {
      id: 'first-step',
      title: 'ก้าวแรกสู่มหาวิทยาลัย',
      desc: 'ทำงานย่อยชิ้นแรกสำเร็จ',
      unlocked: completedSubtasksOverall >= 1,
      icon: '🌱'
    },
    {
      id: 'streak-3',
      title: 'ความสม่ำเสมอ 3 วัน',
      desc: 'อ่านหนังสือต่อเนื่อง 3 วันติด',
      unlocked: streak >= 3,
      icon: '🔥'
    },
    {
      id: 'streak-7',
      title: 'วินัยเหล็ก 7 วัน',
      desc: 'อ่านต่อเนื่องครบ 1 สัปดาห์',
      unlocked: streak >= 7,
      icon: '⚡'
    },
    {
      id: 'tasks-10',
      title: 'สะสม 10 งานใหญ่',
      desc: 'ทำ Main Tasks เสร็จครบ 10 หัวข้อ',
      unlocked: completedTasksOverall >= 10,
      icon: '🎯'
    },
    {
      id: 'tasks-30',
      title: 'เซียนสนามสอบ',
      desc: 'ทำ Main Tasks เสร็จครบ 30 หัวข้อ',
      unlocked: completedTasksOverall >= 30,
      icon: '🏆'
    },
    {
      id: 'half-way',
      title: 'ข้ามกึ่งกลางทาง',
      desc: 'ความคืบหน้าภาพรวมเกิน 50%',
      unlocked: overallPercent >= 50,
      icon: '🚀'
    }
  ];

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
          PROGRESS ANALYTICS
        </span>
        <h2 style={{ fontSize: '1.75rem', fontWeight: 800, color: 'var(--text-main)', letterSpacing: '-0.02em', marginTop: '2px' }}>
          ความคืบหน้าภาพรวม (TCAS70 Progress)
        </h2>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem', marginTop: '4px' }}>
          ติดตามความก้าวหน้าสะสมทั้ง 7 วิชา รายละเอียดการทำโจทย์ และเหรียญความสำเร็จ
        </p>
      </div>

      {/* Top Overview Metric Cards */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '18px', marginBottom: '28px' }}>
        {/* Overall Completion */}
        <div className="glass-card" style={{ padding: '22px' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
            <span style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>ความพร้อมภาพรวม</span>
            <Target size={18} style={{ color: '#2563EB' }} />
          </div>
          <div style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--text-main)', fontFamily: 'var(--font-en)' }}>
            {overallPercent}%
          </div>
          <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', marginTop: '4px' }}>
            {completedTasksOverall} จาก {totalTasksOverall} งานหลักสำเร็จ
          </div>
          <div style={{ marginTop: '12px' }}>
            <ProgressBar percent={overallPercent} height={6} />
          </div>
        </div>

        {/* Streak */}
        <div className="glass-card" style={{ padding: '22px' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
            <span style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>อ่านต่อเนื่อง</span>
            <Flame size={18} style={{ color: '#EA580C' }} />
          </div>
          <div style={{ fontSize: '2rem', fontWeight: 800, color: '#EA580C', fontFamily: 'var(--font-en)' }}>
            {streak} วัน
          </div>
          <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', marginTop: '4px' }}>
            ทำเป้าหมายทุกวัน สะสมความรู้ทีละนิด
          </div>
        </div>

        {/* Total Subtasks */}
        <div className="glass-card" style={{ padding: '22px' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
            <span style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>งานย่อยที่สำเร็จ (Subtasks)</span>
            <CheckCircle2 size={18} style={{ color: '#10B981' }} />
          </div>
          <div style={{ fontSize: '2rem', fontWeight: 800, color: '#059669', fontFamily: 'var(--font-en)' }}>
            {completedSubtasksOverall}
          </div>
          <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', marginTop: '4px' }}>
            จากเช็กลิสต์ทั้งหมด {totalSubtasksOverall} รายการ
          </div>
        </div>
      </div>

      {/* Subject by Subject Progress Breakdown */}
      <div className="glass-card" style={{ padding: '26px', marginBottom: '28px' }}>
        <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--text-main)', marginBottom: '18px', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <TrendingUp size={20} style={{ color: '#2563EB' }} />
          ความคืบหน้ารายวิชา (Subject Breakdown)
        </h3>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {SUBJECT_LIST.map(subject => {
            const stats = getSubjectProgress(subject.code, DAILY_PLANS, subtaskStates);

            return (
              <div
                key={subject.id}
                style={{
                  background: 'var(--bg-card-subtle)',
                  padding: '16px 20px',
                  borderRadius: 'var(--radius-xl)',
                  border: '1px solid var(--border-subtle)'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px', flexWrap: 'wrap', gap: '8px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <SubjectBadge subjectCode={subject.code} size="md" />
                    <span style={{ fontWeight: 700, fontSize: '0.95rem', color: 'var(--text-main)' }}>
                      {subject.name}
                    </span>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <span style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>
                      {stats.completedTasks} / {stats.totalTasks} งานสำเร็จ (เหลือ {stats.remainingTasks} งาน)
                    </span>
                    <span style={{ fontSize: '1.05rem', fontWeight: 800, color: subject.color, fontFamily: 'var(--font-en)', minWidth: '45px', textAlign: 'right' }}>
                      {stats.percent}%
                    </span>
                  </div>
                </div>

                <ProgressBar percent={stats.percent} height={8} color={subject.color} />
              </div>
            );
          })}
        </div>
      </div>

      {/* Milestones / Badges */}
      <div className="glass-card" style={{ padding: '26px' }}>
        <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--text-main)', marginBottom: '6px', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Award size={20} style={{ color: '#F59E0B' }} />
          เหรียญความสำเร็จ (Milestones & Achievements)
        </h3>
        <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '20px' }}>
          สะสมเหรียญรางวัลจากความมุ่งมั่นและวินัยในการอ่านหนังสือ
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px' }}>
          {milestones.map(m => (
            <div
              key={m.id}
              style={{
                border: m.unlocked ? '1px solid #FCD34D' : '1px dashed var(--border-medium)',
                background: m.unlocked ? '#FFFBEB' : '#F8FAFC',
                borderRadius: 'var(--radius-xl)',
                padding: '18px 16px',
                textAlign: 'center',
                opacity: m.unlocked ? 1 : 0.6,
                transition: 'all var(--transition-fast)'
              }}
            >
              <div style={{ fontSize: '2rem', marginBottom: '8px', filter: m.unlocked ? 'none' : 'grayscale(100%)' }}>
                {m.icon}
              </div>
              <div style={{ fontWeight: 700, fontSize: '0.92rem', color: m.unlocked ? '#92400E' : 'var(--text-muted)', marginBottom: '4px' }}>
                {m.title}
              </div>
              <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                {m.desc}
              </div>
              {m.unlocked && (
                <span style={{
                  display: 'inline-block',
                  marginTop: '8px',
                  fontSize: '0.68rem',
                  fontWeight: 700,
                  color: '#059669',
                  background: '#ECFDF5',
                  padding: '2px 8px',
                  borderRadius: 'var(--radius-full)'
                }}>
                  ✓ ปลดล็อกแล้ว
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
