import React from 'react';

export default function ProgressBar({
  percent = 0,
  height = 8,
  color = null,
  gradient = null,
  showLabel = false,
  labelPrefix = '',
  className = ''
}) {
  const safePercent = Math.min(100, Math.max(0, Math.round(percent) || 0));

  let fillStyle = {
    width: `${safePercent}%`,
    backgroundColor: color || '#2563EB'
  };

  if (gradient) {
    fillStyle = {
      width: `${safePercent}%`,
      background: gradient
    };
  } else if (!color) {
    // Dynamic color depending on percentage if not explicitly specified
    if (safePercent >= 100) {
      fillStyle.background = 'linear-gradient(90deg, #10B981, #059669)';
    } else if (safePercent >= 50) {
      fillStyle.background = 'linear-gradient(90deg, #3B82F6, #2563EB)';
    } else {
      fillStyle.background = 'linear-gradient(90deg, #F59E0B, #EA580C)';
    }
  }

  return (
    <div className={`progress-wrapper ${className}`} style={{ width: '100%' }}>
      {showLabel && (
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '6px',
          fontSize: '0.82rem',
          color: 'var(--text-muted)'
        }}>
          <span>{labelPrefix}</span>
          <span style={{ fontWeight: 700, color: 'var(--text-main)', fontFamily: 'var(--font-en)' }}>
            {safePercent}%
          </span>
        </div>
      )}
      <div className="progress-container" style={{ height: `${height}px` }}>
        <div className="progress-bar-fill" style={fillStyle} />
      </div>
    </div>
  );
}
