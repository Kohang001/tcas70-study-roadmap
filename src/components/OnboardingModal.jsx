import React, { useState } from 'react';
import { Sparkles, Calendar, CheckCircle2, ChevronRight, Rocket, Compass, BookOpen } from 'lucide-react';
import confetti from 'canvas-confetti';

const STEPS = [
  {
    step: 1,
    title: 'เตรียมตัวสอบ TCAS70 ให้เป็นระบบ 🚀',
    desc: 'แผนการอ่านหนังสือที่ออกแบบเฉพาะสำหรับเด็ก 69-70 ครอบคลุมทั้ง TGAT1-3, TPAT3 และ A-Level คณิต1 ฟิสิกส์ อังกฤษ ให้พร้อมสู่มหาวิทยาลัยในฝัน',
    icon: Compass,
    color: '#3B82F6',
    bg: '#EFF6FF'
  },
  {
    step: 2,
    title: 'ดูว่าแต่ละวันต้องอ่านอะไร 📅',
    desc: 'ไม่ต้องกังวลว่าจะเริ่มตรงไหน ระบบจัดตารางรายวันให้ชัดเจน พร้อมแบ่งสัดส่วนเนื้อหาและโจทย์ตามลำดับความสำคัญ (High Priority) ในแต่ละเดือน',
    icon: Calendar,
    color: '#7C3AED',
    bg: '#F5F3FF'
  },
  {
    step: 3,
    title: 'เช็กงานที่ทำเสร็จและติดตามความคืบหน้า 🎯',
    desc: 'ระบบ Checklist ย่อยช่วยให้เก็บงานได้อย่างแม่นยำ พร้อมสมุดจด Error Log และการคำนวณ Streak อ่านต่อเนื่องแบบไม่กดดัน',
    icon: CheckCircle2,
    color: '#10B981',
    bg: '#ECFDF5'
  }
];

export default function OnboardingModal({ isOpen, onClose }) {
  const [currentStep, setCurrentStep] = useState(0);

  if (!isOpen) return null;

  const stepData = STEPS[currentStep];
  const IconComponent = stepData.icon;
  const isLastStep = currentStep === STEPS.length - 1;

  const handleNext = () => {
    if (isLastStep) {
      confetti({
        particleCount: 90,
        spread: 70,
        origin: { y: 0.6 }
      });
      onClose();
    } else {
      setCurrentStep(prev => prev + 1);
    }
  };

  return (
    <div className="modal-backdrop">
      <div className="modal-content animate-fade-in" style={{ maxWidth: '520px', textAlign: 'center', padding: '36px 30px' }}>
        {/* Step Icon */}
        <div style={{
          width: '72px',
          height: '72px',
          borderRadius: '50%',
          background: stepData.bg,
          color: stepData.color,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          margin: '0 auto 20px auto',
          boxShadow: `0 8px 24px ${stepData.color}25`
        }}>
          <IconComponent size={36} />
        </div>

        {/* Indicator dots */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', marginBottom: '20px' }}>
          {STEPS.map((s) => (
            <div
              key={s.step}
              style={{
                width: (s.step - 1) === currentStep ? '24px' : '8px',
                height: '8px',
                borderRadius: 'var(--radius-full)',
                backgroundColor: (s.step - 1) === currentStep ? '#2563EB' : '#CBD5E1',
                transition: 'all 0.3s ease'
              }}
            />
          ))}
        </div>

        <h3 style={{ fontSize: '1.45rem', fontWeight: 800, color: 'var(--text-main)', marginBottom: '12px' }}>
          {stepData.title}
        </h3>

        <p style={{ color: 'var(--text-muted)', fontSize: '0.96rem', lineHeight: 1.6, marginBottom: '28px' }}>
          {stepData.desc}
        </p>

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px' }}>
          {currentStep > 0 && (
            <button
              type="button"
              onClick={() => setCurrentStep(prev => prev - 1)}
              className="btn-secondary"
              style={{ padding: '10px 20px' }}
            >
              ย้อนกลับ
            </button>
          )}

          <button
            type="button"
            onClick={handleNext}
            className="btn-primary"
            style={{ padding: '10px 28px', fontSize: '1rem' }}
          >
            {isLastStep ? (
              <>
                <Rocket size={18} /> เริ่มอ่านหนังสือ
              </>
            ) : (
              <>
                ถัดไป <ChevronRight size={18} />
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
