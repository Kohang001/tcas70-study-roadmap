import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  LayoutDashboard, 
  CalendarCheck, 
  CalendarDays, 
  BookOpen, 
  BarChart3 
} from 'lucide-react';

export default function MobileNav() {
  return (
    <nav className="mobile-nav" aria-label="Mobile Navigation">
      <NavLink
        to="/"
        end
        className={({ isActive }) => `mobile-nav-link ${isActive ? 'active' : ''}`}
      >
        <LayoutDashboard className="mobile-nav-icon" />
        <span>Dashboard</span>
      </NavLink>

      <NavLink
        to="/today"
        className={({ isActive }) => `mobile-nav-link ${isActive ? 'active' : ''}`}
      >
        <CalendarCheck className="mobile-nav-icon" />
        <span>วันนี้</span>
      </NavLink>

      <NavLink
        to="/weekly"
        className={({ isActive }) => `mobile-nav-link ${isActive ? 'active' : ''}`}
      >
        <CalendarDays className="mobile-nav-icon" />
        <span>สัปดาห์</span>
      </NavLink>

      <NavLink
        to="/subjects"
        className={({ isActive }) => `mobile-nav-link ${isActive ? 'active' : ''}`}
      >
        <BookOpen className="mobile-nav-icon" />
        <span>รายวิชา</span>
      </NavLink>

      <NavLink
        to="/progress"
        className={({ isActive }) => `mobile-nav-link ${isActive ? 'active' : ''}`}
      >
        <BarChart3 className="mobile-nav-icon" />
        <span>ความคืบหน้า</span>
      </NavLink>
    </nav>
  );
}
