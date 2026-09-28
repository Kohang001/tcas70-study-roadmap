import React from 'react';
import { Coffee } from 'lucide-react';

export default function EmptyState({
  title = 'ไม่มีงานอ่านในวันนี้ 🎉',
  description = 'วันนี้เป็นวันพัก ผ่อนคลายให้เต็มที่แล้วกลับมาลุยต่อพรุ่งนี้!',
  actionText = null,
  onAction = null,
  icon = null
}) {
  return (
    <div style={{
      textAlign: 'center',
      padding: '48px 24px',
      background: '#FFFFFF',
      borderRadius: 'var(--radius-2xl)',
      border: '1px dashed var(--border-medium)',
      margin: '20px 0'
    }} className="animate-fade-in">
      <div style={{
        width: '64px',
        height: '64px',
        borderRadius: '50%',
        background: '#EFF6FF',
        color: '#2563EB',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        margin: '0 auto 16px auto'
      }}>
        {icon || <Coffee size={32} />}
      </div>

      <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--text-main)', marginBottom: '8px' }}>
        {title}
      </h3>
      <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem', maxWidth: '420px', margin: '0 auto 20px auto', lineHeight: 1.6 }}>
        {description}
      </p>

      {actionText && onAction && (
        <button
          type="button"
          onClick={onAction}
          className="btn-primary"
          style={{ padding: '8px 18px', fontSize: '0.88rem' }}
        >
          {actionText}
        </button>
      )}
    </div>
  );
}
