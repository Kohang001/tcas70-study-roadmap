import React from 'react';
import { Menu } from 'lucide-react';
import { formatThaiDate } from '../utils/dateUtils';

export default function Header({
  activeToday,
  simulatedDate,
  onResetSimulatedDate,
  streak = 0,
  studentName = 'น้องเด็ก 70',
  onToggleMobileMenu
}) {
  const isSimulated = !!simulatedDate;

  return (
    <header className="app-header">
      <div className="header-left">
        <button
          type="button"
          onClick={onToggleMobileMenu}
          className="mobile-menu-btn"
          aria-label="Toggle navigation drawer"
        >
          <Menu size={22} />
        </button>

        <div>
          <h1 className="header-greeting">
            สวัสดี 👋 {studentName}
          </h1>
          <div className="header-date-badge" style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
            <span style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '5px',
              background: isSimulated ? '#FEF3C7' : '#ECFDF5',
              color: isSimulated ? '#92400E' : '#065F46',
              border: isSimulated ? '1px solid #FCD34D' : '1px solid #A7F3D0',
              padding: '2px 9px',
              borderRadius: 'var(--radius-full)',
              fontSize: '0.78rem',
              fontWeight: 700
            }}>
              {isSimulated ? '⚠️ โหมดจำลองวัน' : '🔒 ล็อควันอัตโนมัติ'}: วันนี้ {formatThaiDate(activeToday, true)}
            </span>
          </div>
        </div>
      </div>

      <div className="header-right">
        {isSimulated && (
          <div className="simulated-pill">
            <span>กำลังดู: {activeToday}</span>
            <button
              type="button"
              onClick={onResetSimulatedDate}
              className="btn-primary"
              style={{ padding: '3px 10px', fontSize: '0.75rem', background: '#2563EB', marginLeft: '6px' }}
              title="ล็อคกลับสู่วันนี้จริง"
            >
              🔒 ล็อคกลับสู่วันนี้
            </button>
          </div>
        )}

        <div className="header-streak-badge" title="อ่านหนังสือต่อเนื่องอย่างน้อย 1 งานต่อวัน">
          <span className="streak-icon">🔥</span>
          <span>อ่านต่อเนื่อง {streak} วัน</span>
        </div>
      </div>
    </header>
  );
}
