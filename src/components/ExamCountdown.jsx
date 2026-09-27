import React from 'react';
import { Calendar, Clock, Award, CheckCircle } from 'lucide-react';
import { EXAMS, TGAT_TPAT3_EXAM_DATE, ALEVEL_EXAM_DATE } from '../data/exams';
import { getDaysRemaining } from '../utils/dateUtils';

export default function ExamCountdown({ activeToday }) {
  const tgatExam = EXAMS.find(e => e.id === 'tgat-tpat3');
  const alevelExam = EXAMS.find(e => e.id === 'alevel');

  const daysToTgat = getDaysRemaining(TGAT_TPAT3_EXAM_DATE, activeToday);
  const daysToAlevel = getDaysRemaining(ALEVEL_EXAM_DATE, activeToday);

  const isTgatToday = activeToday === TGAT_TPAT3_EXAM_DATE;
  const isTgatPassed = activeToday > TGAT_TPAT3_EXAM_DATE;

  const isAlevelToday = activeToday === ALEVEL_EXAM_DATE;
  const isAlevelPassed = activeToday > ALEVEL_EXAM_DATE;

  return (
    <div className="countdown-grid">
      {/* TGAT + TPAT3 Card */}
      <div className="countdown-card tpat-tgat">
        <div className="countdown-info">
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', opacity: 0.9, fontSize: '0.82rem', marginBottom: '4px' }}>
            <Calendar size={14} />
            <span>{tgatExam.thaiDate}</span>
          </div>
          <h3>{tgatExam.name}</h3>
          <p>{tgatExam.desc}</p>
        </div>

        <div className="countdown-days">
          {isTgatToday ? (
            <div style={{ textAlign: 'right' }}>
              <span className="countdown-number" style={{ fontSize: '1.8rem', color: '#FDE047' }}>วันนี้</span>
              <span className="countdown-label">สนามสอบจริง! 🔥</span>
            </div>
          ) : isTgatPassed ? (
            <div style={{ textAlign: 'right', display: 'flex', alignItems: 'center', gap: '6px' }}>
              <CheckCircle size={28} style={{ color: '#86EFAC' }} />
              <div>
                <div style={{ fontWeight: 700, fontSize: '1.1rem' }}>สอบเสร็จแล้ว</div>
                <div style={{ fontSize: '0.75rem', opacity: 0.85 }}>ผ่านไปได้ด้วยดี</div>
              </div>
            </div>
          ) : (
            <>
              <span className="countdown-number">{daysToTgat}</span>
              <span className="countdown-label">เหลืออีก (วัน)</span>
            </>
          )}
        </div>
      </div>

      {/* A-Level Card */}
      <div className="countdown-card alevel">
        <div className="countdown-info">
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', opacity: 0.9, fontSize: '0.82rem', marginBottom: '4px' }}>
            <Calendar size={14} />
            <span>{alevelExam.thaiDate}</span>
          </div>
          <h3>{alevelExam.name}</h3>
          <p>{alevelExam.desc}</p>
        </div>

        <div className="countdown-days">
          {isAlevelToday ? (
            <div style={{ textAlign: 'right' }}>
              <span className="countdown-number" style={{ fontSize: '1.8rem', color: '#FDE047' }}>วันนี้</span>
              <span className="countdown-label">สนามสอบจริง! 🎯</span>
            </div>
          ) : isAlevelPassed ? (
            <div style={{ textAlign: 'right', display: 'flex', alignItems: 'center', gap: '6px' }}>
              <Award size={28} style={{ color: '#FDE047' }} />
              <div>
                <div style={{ fontWeight: 700, fontSize: '1.1rem' }}>จบสนามสอบ</div>
                <div style={{ fontSize: '0.75rem', opacity: 0.85 }}>เตรียมยื่นคะแนน</div>
              </div>
            </div>
          ) : (
            <>
              <span className="countdown-number">{daysToAlevel}</span>
              <span className="countdown-label">เหลืออีก (วัน)</span>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
