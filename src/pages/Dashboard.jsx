import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Flame,
  Calendar,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  BookOpen,
  AlertCircle,
  Clock,
  Coffee,
} from "lucide-react";
import ExamCountdown from "../components/ExamCountdown";
import TodayCard from "../components/TodayCard";
import ProgressBar from "../components/ProgressBar";
import CalendarView from "../components/CalendarView";
import EmptyState from "../components/EmptyState";
import ExamDayScreen from "../components/ExamDayScreen";
import ErrorModal from "../components/ErrorModal";
import { getSmartPlanForDate } from "../data/studyPlan";
import { formatThaiDate } from "../utils/dateUtils";
import { getDayProgress } from "../utils/progressUtils";

export default function Dashboard({
  activeToday,
  realTodayStr,
  autoLockToday,
  streak,
  subtaskStates,
  taskNotes,
  dailyNotes,
  onToggleSubtask,
  onSaveTaskNote,
  onAddErrorLog,
  onSelectDate,
  studentName,
}) {
  const [errorModalOpen, setErrorModalOpen] = useState(false);
  const [errorModalInitial, setErrorModalInitial] = useState(null);

  const todayPlan = getSmartPlanForDate(activeToday);
  const tasks = todayPlan ? todayPlan.tasks : [];
  const progress = getDayProgress(tasks, subtaskStates);

  const isExamDay = todayPlan && todayPlan.isExamDay;
  const isPostExam = todayPlan && todayPlan.isPostExam;

  const handleOpenErrorModal = (initialData) => {
    setErrorModalInitial(initialData);
    setErrorModalOpen(true);
  };

  return (
    <div className="page-wrapper animate-fade-in">
      {/* Top Welcome & Motivation Banner */}
      <div
        style={{
          background: "linear-gradient(135deg, #1E293B 0%, #0F172A 100%)",
          color: "white",
          borderRadius: "var(--radius-2xl)",
          padding: "24px 28px",
          marginBottom: "24px",
          boxShadow: "var(--shadow-md)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "16px",
        }}
      >
        <div>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "6px",
              color: "#93C5FD",
              fontSize: "0.82rem",
              fontWeight: 600,
              marginBottom: "6px",
            }}
          >
            <Sparkles size={15} />
            <span>TCAS70 Study Roadmap • สู่มหาวิทยาลัยในฝัน</span>
          </div>
          <h2
            style={{
              fontSize: "1.6rem",
              fontWeight: 800,
              letterSpacing: "-0.02em",
              marginBottom: "4px",
            }}
          >
            วันนี้พร้อมลุยแล้วหรือยัง, {studentName}? 💪
          </h2>
          <p style={{ color: "#94A3B8", fontSize: "0.9rem" }}>
            {todayPlan
              ? todayPlan.focus
              : "ก้าวหน้าวันละนิด สะสมความรู้ทีละบท สู่เป้าหมายที่ตั้งไว้"}
          </p>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <div
            style={{
              background: "rgba(255, 255, 255, 0.08)",
              border: "1px solid rgba(255, 255, 255, 0.15)",
              padding: "10px 18px",
              borderRadius: "var(--radius-xl)",
              textAlign: "center",
            }}
          >
            <div style={{ fontSize: "0.75rem", color: "#CBD5E1" }}>
              อ่านต่อเนื่อง
            </div>
            <div
              style={{ fontSize: "1.25rem", fontWeight: 800, color: "#FDBA74" }}
            >
              🔥 {streak} วัน
            </div>
          </div>

          <Link
            to="/today"
            className="btn-primary"
            style={{ padding: "12px 20px", textDecoration: "none" }}
          >
            เปิดแผนวันนี้ <ArrowRight size={16} />
          </Link>
        </div>
      </div>

      {/* Exam Countdown Component */}
      <ExamCountdown activeToday={activeToday} />

      {/* If Exam Day, show special exam banner */}
      {isExamDay && (
        <ExamDayScreen
          examTitle={todayPlan.examType}
          dateThai={formatThaiDate(activeToday, false)}
          examDate={activeToday}
        />
      )}

      {/* If Post-Exam, show celebratory final notice */}
      {isPostExam && (
        <div
          style={{
            background: "linear-gradient(135deg, #065F46, #047857)",
            color: "white",
            borderRadius: "var(--radius-2xl)",
            padding: "30px",
            textAlign: "center",
            marginBottom: "28px",
            boxShadow: "var(--shadow-lg)",
          }}
        >
          <h2
            style={{ fontSize: "1.8rem", fontWeight: 800, marginBottom: "8px" }}
          >
            🎉 จบ Roadmap TCAS70 แล้ว!
          </h2>
          <p
            style={{
              fontSize: "1rem",
              opacity: 0.95,
              maxWidth: "600px",
              margin: "0 auto 16px auto",
            }}
          >
            ยินดีด้วยกับความทุ่มเทและมีวินัยตลอดเส้นทาง
            ขอให้น้องได้เข้าสู่คณะและมหาวิทยาลัยในฝันตามที่ตั้งใจ!
          </p>
          <Link
            to="/progress"
            className="btn-secondary"
            style={{ color: "#065F46", background: "white" }}
          >
            ดูสถิติความสำเร็จทั้งหมด <ArrowRight size={16} />
          </Link>
        </div>
      )}

      {/* Main Grid: Today's Tasks + Sidebar Widgets */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "minmax(0, 1fr) 340px",
          gap: "24px",
        }}
      >
        {/* Left Column: Today Tasks */}
        <div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: "16px",
              flexWrap: "wrap",
              gap: "10px",
            }}
          >
            <div>
              <h3
                style={{
                  fontSize: "1.25rem",
                  fontWeight: 800,
                  color: "var(--text-main)",
                }}
              >
                วันนี้ต้องทำอะไรบ้าง
              </h3>
              <p style={{ fontSize: "0.82rem", color: "var(--text-muted)" }}>
                {formatThaiDate(activeToday, true)}
              </p>
            </div>

            {tasks.length > 0 && (
              <div
                style={{ display: "flex", alignItems: "center", gap: "10px" }}
              >
                <span
                  style={{
                    fontSize: "0.85rem",
                    color: "var(--text-muted)",
                    fontWeight: 600,
                  }}
                >
                  {progress.completedTasks} / {progress.totalTasks} งาน (
                  {progress.percent}%)
                </span>
                <span
                  style={{
                    padding: "4px 10px",
                    borderRadius: "var(--radius-full)",
                    fontSize: "0.75rem",
                    fontWeight: 700,
                    backgroundColor: progress.isAllCompleted
                      ? "#ECFDF5"
                      : "#EFF6FF",
                    color: progress.isAllCompleted ? "#059669" : "#1D4ED8",
                  }}
                >
                  {progress.isAllCompleted
                    ? "✅ เสร็จครบแล้ว!"
                    : `เหลืออีก ${progress.totalTasks - progress.completedTasks} งาน`}
                </span>
              </div>
            )}
          </div>

          {/* Today Tasks Progress Bar */}
          {tasks.length > 0 && (
            <div style={{ marginBottom: "18px" }}>
              <ProgressBar percent={progress.percent} height={8} />
            </div>
          )}

          {/* Positive Encouraging Feedback Box */}
          {progress.completedTasks > 0 && !progress.isAllCompleted && (
            <div
              style={{
                background: "#EFF6FF",
                border: "1px solid #BFDBFE",
                borderRadius: "var(--radius-lg)",
                padding: "10px 16px",
                fontSize: "0.88rem",
                color: "#1E40AF",
                marginBottom: "16px",
                display: "flex",
                alignItems: "center",
                gap: "8px",
              }}
            >
              <CheckCircle2 size={16} />
              <span>
                ยอดเยี่ยมมาก! ✅ เสร็จแล้ว {progress.completedTasks} งาน
                เหลืออีก {progress.totalTasks - progress.completedTasks}{" "}
                งานสำหรับวันนี้ ค่อยๆ ทำทีละหัวข้อนะ
              </span>
            </div>
          )}

          {progress.isAllCompleted && tasks.length > 0 && (
            <div
              style={{
                background: "#ECFDF5",
                border: "1px solid #A7F3D0",
                borderRadius: "var(--radius-lg)",
                padding: "12px 18px",
                fontSize: "0.92rem",
                color: "#065F46",
                marginBottom: "16px",
                display: "flex",
                alignItems: "center",
                gap: "10px",
                fontWeight: 600,
              }}
            >
              <span>
                🎉 งานวันนี้เสร็จครบหมดแล้ว!
                พักผ่อนให้เต็มที่แล้วกลับมาลุยต่อพรุ่งนี้
              </span>
            </div>
          )}

          {/* Task Cards List */}
          {tasks.length === 0 ? (
            <EmptyState
              title={
                isExamDay
                  ? "🎯 วันนี้เป็นวันสอบจริง!"
                  : "ไม่มีงานอ่านในวันนี้ 🎉"
              }
              description={
                isExamDay
                  ? "ทำใจให้สบาย มีสมาธิ อ่านโจทย์รอบคอบ"
                  : "วันนี้เป็นวันพัก ผ่อนคลายให้เต็มที่แล้วกลับมาลุยต่อพรุ่งนี้"
              }
              actionText="ดูแผนสัปดาห์นี้"
              onAction={() => (window.location.href = "#/weekly")}
            />
          ) : (
            <div style={{ display: "flex", flexDirection: "column" }}>
              {tasks.map((task) => (
                <TodayCard
                  key={task.id}
                  task={task}
                  subtaskStates={subtaskStates}
                  onToggleSubtask={onToggleSubtask}
                />
              ))}
            </div>
          )}
        </div>

        {/* Right Column: Mini Calendar & Quick Notes */}
        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          {/* Interactive Calendar Widget */}
          <CalendarView
            activeDate={activeToday}
            onSelectDate={onSelectDate}
            subtaskStates={subtaskStates}
          />

          {/* Daily Note Card */}
          <div className="glass-card" style={{ padding: "20px" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                marginBottom: "10px",
              }}
            >
              <h4
                style={{
                  fontWeight: 700,
                  fontSize: "0.98rem",
                  color: "var(--text-main)",
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                }}
              >
                <BookOpen size={16} style={{ color: "#2563EB" }} />
                บันทึกประจำวัน
              </h4>
              <Link
                to="/today"
                style={{
                  fontSize: "0.75rem",
                  color: "#2563EB",
                  fontWeight: 600,
                }}
              >
                แก้ไขในหน้าวันนี้ →
              </Link>
            </div>
            <p
              style={{
                fontSize: "0.85rem",
                color: dailyNotes[activeToday]
                  ? "var(--text-main)"
                  : "var(--text-muted)",
                fontStyle: dailyNotes[activeToday] ? "normal" : "italic",
                background: "#F8FAFC",
                padding: "12px",
                borderRadius: "var(--radius-md)",
                lineHeight: 1.5,
              }}
            >
              {dailyNotes[activeToday] ||
                "ยังไม่มีบันทึกสำหรับวันนี้ แตะเพื่อเขียนสิ่งที่ได้เรียนรู้หรือจุดที่ต้องทบทวน"}
            </p>
          </div>

          {/* Error Log Shortcut */}
          <div className="glass-card" style={{ padding: "20px" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                marginBottom: "8px",
              }}
            >
              <h4
                style={{
                  fontWeight: 700,
                  fontSize: "0.98rem",
                  color: "var(--text-main)",
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                }}
              >
                <AlertCircle size={16} style={{ color: "#DC2626" }} />
                Error Log ล่าสุด
              </h4>
              <Link
                to="/error-log"
                style={{
                  fontSize: "0.75rem",
                  color: "#2563EB",
                  fontWeight: 600,
                }}
              >
                ดูทั้งหมด →
              </Link>
            </div>
            <p
              style={{
                fontSize: "0.82rem",
                color: "var(--text-muted)",
                marginBottom: "12px",
              }}
            >
              จดบันทึกข้อที่ทำผิดทันที ช่วยป้องกันการทำผิดซ้ำในสนามสอบจริง
            </p>
            <button
              type="button"
              onClick={() => handleOpenErrorModal(null)}
              className="btn-secondary"
              style={{
                width: "100%",
                fontSize: "0.85rem",
                padding: "8px 12px",
              }}
            >
              + เพิ่มข้อผิดใหม่ลง Error Log
            </button>
          </div>
        </div>
      </div>

      {/* Error Modal */}
      <ErrorModal
        isOpen={errorModalOpen}
        onClose={() => setErrorModalOpen(false)}
        onSave={onAddErrorLog}
        initialData={errorModalInitial}
        activeDate={activeToday}
      />
    </div>
  );
}
