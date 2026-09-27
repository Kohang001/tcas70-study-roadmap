import React from 'react';
import { 
  MessageSquare, 
  Brain, 
  Sparkles, 
  Cog, 
  Calculator, 
  Atom, 
  BookOpen 
} from 'lucide-react';
import { SUBJECTS } from '../data/subjects';

const ICON_MAP = {
  MessageSquare,
  Brain,
  Sparkles,
  Cog,
  Calculator,
  Atom,
  BookOpen
};

export default function SubjectBadge({ subjectCode, size = 'md', showName = false, className = '' }) {
  if (!subjectCode) return null;
  const key = subjectCode.toLowerCase().replace(/[^a-z0-9]/g, '');
  const subject = SUBJECTS[key] || {
    code: subjectCode,
    nameEn: subjectCode,
    color: '#64748B',
    badgeBg: '#F1F5F9',
    badgeText: '#334155',
    borderColor: '#CBD5E1',
    icon: 'BookOpen'
  };

  const IconComponent = ICON_MAP[subject.icon] || BookOpen;

  const sizeStyles = {
    sm: { padding: '2px 8px', fontSize: '0.72rem', iconSize: 12 },
    md: { padding: '4px 10px', fontSize: '0.8rem', iconSize: 14 },
    lg: { padding: '6px 14px', fontSize: '0.88rem', iconSize: 16 }
  }[size] || { padding: '4px 10px', fontSize: '0.8rem', iconSize: 14 };

  return (
    <span
      className={`subject-badge ${className}`}
      style={{
        backgroundColor: subject.badgeBg,
        color: subject.badgeText,
        border: `1px solid ${subject.borderColor}`,
        padding: sizeStyles.padding,
        fontSize: sizeStyles.fontSize
      }}
    >
      <IconComponent size={sizeStyles.iconSize} style={{ color: subject.color }} />
      <span>{showName ? `${subject.code} • ${subject.nameEn}` : subject.code}</span>
    </span>
  );
}
