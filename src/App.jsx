import React, { useState } from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import MobileNav from './components/MobileNav';
import OnboardingModal from './components/OnboardingModal';

// Pages
import Dashboard from './pages/Dashboard';
import Today from './pages/Today';
import WeeklyPlan from './pages/WeeklyPlan';
import MonthlyPlan from './pages/MonthlyPlan';
import Subjects from './pages/Subjects';
import Progress from './pages/Progress';
import ErrorLogPage from './pages/ErrorLogPage';
import Settings from './pages/Settings';

// Hooks & Data
import { useStudyProgress } from './hooks/useStudyProgress';
import { getSmartPlanForDate } from './data/studyPlan';
import './styles/App.css';

export default function App() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [showOnboardingManual, setShowOnboardingManual] = useState(false);

  const {
    realTodayStr,
    activeToday,
    simulatedDate,
    autoLockToday,
    lockToRealToday,
    setSimulatedDate,
    studentName,
    setStudentName,
    onboarded,
    setOnboarded,
    subtaskStates,
    dailyNotes,
    taskNotes,
    errorLogs,
    streak,
    toggleSubtask,
    setTaskComplete,
    saveDailyNote,
    saveTaskNote,
    addErrorLog,
    deleteErrorLog,
    updateErrorLog,
    resetToday,
    resetAll,
    exportData,
    importData
  } = useStudyProgress();

  // Active day tasks count for today badge
  const todayPlan = getSmartPlanForDate(activeToday);
  const todayTasksCount = todayPlan ? todayPlan.tasks.length : 0;

  const handleSelectDate = (dateStr) => {
    setSimulatedDate(dateStr);
  };

  const handleResetSimulatedDate = () => {
    lockToRealToday();
  };

  const isFirstRun = !onboarded;

  return (
    <Router>
      <div className="app-container">
        {/* Sidebar (Desktop + Mobile Drawer) */}
        <Sidebar
          mobileOpen={mobileOpen}
          onCloseMobile={() => setMobileOpen(false)}
          streak={streak}
          todayTasksCount={todayTasksCount}
        />

        {/* Main Content Area */}
        <div className="main-content">
          <Header
            activeToday={activeToday}
            realTodayStr={realTodayStr}
            simulatedDate={simulatedDate}
            autoLockToday={autoLockToday}
            onResetSimulatedDate={handleResetSimulatedDate}
            streak={streak}
            studentName={studentName}
            onToggleMobileMenu={() => setMobileOpen(!mobileOpen)}
          />

          <main id="main-content-region">
            <Routes>
              <Route
                path="/"
                element={
                  <Dashboard
                    activeToday={activeToday}
                    realTodayStr={realTodayStr}
                    autoLockToday={autoLockToday}
                    streak={streak}
                    subtaskStates={subtaskStates}
                    taskNotes={taskNotes}
                    dailyNotes={dailyNotes}
                    onToggleSubtask={toggleSubtask}
                    onSaveTaskNote={saveTaskNote}
                    onAddErrorLog={addErrorLog}
                    onSelectDate={handleSelectDate}
                    onLockToRealToday={lockToRealToday}
                    studentName={studentName}
                  />
                }
              />

              <Route
                path="/today"
                element={
                  <Today
                    activeToday={activeToday}
                    realTodayStr={realTodayStr}
                    autoLockToday={autoLockToday}
                    subtaskStates={subtaskStates}
                    taskNotes={taskNotes}
                    dailyNotes={dailyNotes}
                    onToggleSubtask={toggleSubtask}
                    onSetTaskComplete={setTaskComplete}
                    onSaveDailyNote={saveDailyNote}
                    onSaveTaskNote={saveTaskNote}
                    onAddErrorLog={addErrorLog}
                    onSelectDate={handleSelectDate}
                    onResetToday={resetToday}
                    onLockToRealToday={lockToRealToday}
                  />
                }
              />

              <Route
                path="/weekly"
                element={
                  <WeeklyPlan
                    activeToday={activeToday}
                    subtaskStates={subtaskStates}
                    onSelectDate={handleSelectDate}
                  />
                }
              />

              <Route
                path="/monthly"
                element={
                  <MonthlyPlan
                    subtaskStates={subtaskStates}
                    onSelectDate={handleSelectDate}
                  />
                }
              />

              <Route
                path="/subjects"
                element={
                  <Subjects
                    subtaskStates={subtaskStates}
                  />
                }
              />

              <Route
                path="/progress"
                element={
                  <Progress
                    activeToday={activeToday}
                    streak={streak}
                    subtaskStates={subtaskStates}
                  />
                }
              />

              <Route
                path="/error-log"
                element={
                  <ErrorLogPage
                    errorLogs={errorLogs}
                    onAddErrorLog={addErrorLog}
                    onUpdateErrorLog={updateErrorLog}
                    onDeleteErrorLog={deleteErrorLog}
                    activeDate={activeToday}
                  />
                }
              />

              <Route
                path="/settings"
                element={
                  <Settings
                    studentName={studentName}
                    setStudentName={setStudentName}
                    activeToday={activeToday}
                    realTodayStr={realTodayStr}
                    simulatedDate={simulatedDate}
                    autoLockToday={autoLockToday}
                    onLockToRealToday={lockToRealToday}
                    setSimulatedDate={setSimulatedDate}
                    onResetToday={resetToday}
                    onResetAll={resetAll}
                    onExportData={exportData}
                    onImportData={importData}
                    onReplayOnboarding={() => setShowOnboardingManual(true)}
                  />
                }
              />

              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </main>
        </div>

        {/* Mobile Dock Navigation */}
        <MobileNav />

        {/* First Run Onboarding Modal */}
        <OnboardingModal
          isOpen={isFirstRun || showOnboardingManual}
          onClose={() => {
            setOnboarded(true);
            setShowOnboardingManual(false);
          }}
        />
      </div>
    </Router>
  );
}
