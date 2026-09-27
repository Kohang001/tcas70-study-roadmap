import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  LayoutDashboard, 
  CalendarCheck, 
  CalendarDays, 
  Map, 
  BookOpen, 
  BarChart3, 
  AlertCircle, 
  Settings,
  Flame,
  Sparkles,
  X
} from 'lucide-react';

const NAV_ITEMS = [
  { path: '/', label: 'Dashboard', icon: LayoutDashboard },
  { path: '/today', label: 'วันนี้', icon: CalendarCheck },
  { path: '/weekly', label: 'รายสัปดาห์', icon: CalendarDays },
  { path: '/monthly', label: 'รายเดือน', icon: Map },
  { path: '/subjects', label: 'รายวิชา', icon: BookOpen },
  { path: '/progress', label: 'ความคืบหน้า', icon: BarChart3 },
  { path: '/error-log', label: 'Error Log', icon: AlertCircle },
  { path: '/settings', label: 'ตั้งค่า', icon: Settings }
];

export default function Sidebar({
  mobileOpen = false,
  onCloseMobile = () => {},
  streak = 0,
  todayTasksCount = 0
}) {
  return (
    <>
      {mobileOpen && (
        <div
          className="mobile-drawer-backdrop"
          onClick={onCloseMobile}
          aria-hidden="true"
        />
      )}

      <aside className={`sidebar ${mobileOpen ? 'mobile-open' : ''}`}>
        {/* Header / Brand */}
        <div className="sidebar-header" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div className="sidebar-brand">
            <div className="brand-icon">
              <Sparkles size={22} />
            </div>
            <div>
              <div className="brand-title">TCAS70</div>
              <span className="brand-subtitle">Study Roadmap</span>
            </div>
          </div>

          {mobileOpen && (
            <button
              type="button"
              onClick={onCloseMobile}
              style={{ color: '#94A3B8', padding: '6px' }}
              aria-label="Close menu"
            >
              <X size={20} />
            </button>
          )}
        </div>

        {/* Nav Links */}
        <nav className="sidebar-nav">
          {NAV_ITEMS.map((item) => {
            const Icon = item.icon;
            return (
              <NavLink
                key={item.path}
                to={item.path}
                end={item.path === '/'}
                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                onClick={onCloseMobile}
              >
                <Icon size={19} />
                <span>{item.label}</span>
                {item.path === '/today' && todayTasksCount > 0 && (
                  <span className="nav-badge">{todayTasksCount}</span>
                )}
              </NavLink>
            );
          })}
        </nav>

        {/* Footer with Streak widget */}
        <div className="sidebar-footer">
          <div className="streak-card-sidebar">
            <span className="streak-icon">🔥</span>
            <div>
              <div className="streak-text-bold">อ่านต่อเนื่อง {streak} วัน</div>
              <span className="streak-text-sub">ทำเป้าหมายทุกวันอย่างมั่นคง</span>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
