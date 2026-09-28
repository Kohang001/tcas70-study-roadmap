import React from "react";
import { CheckCircle2, ChevronRight } from "lucide-react";
import SubjectBadge from "./SubjectBadge";
import ProgressBar from "./ProgressBar";
import { formatShortThaiDate } from "../utils/dateUtils";
import { getDayProgress } from "../utils/progressUtils";

export default function WeekCard({
  dayPlan,
  isToday = false,
  subtaskStates = {},
  onSelectDay,
}) {
  if (!dayPlan) return null;

  const isExamDay = dayPlan.isExamDay;
  const tasks = dayPlan.tasks || [];
  const progress = getDayProgress(tasks, subtaskStates);
  const isCompletedAll = tasks.length > 0 && progress.isAllCompleted;

  return (
    <div
      className={`day-card ${isToday ? "is-today-card" : ""} ${isCompletedAll ? "is-completed-all" : ""}`}
      onClick={() => onSelectDay(dayPlan.date)}
    >
      {/* Header */}
      <div className="day-card-header">
        <div>
          <span className="day-name">{dayPlan.dayThai}</span>
          <span className="day-date-sub" style={{ marginLeft: "6px" }}>
            {formatShortThaiDate(dayPlan.date)}
          </span>
          {isToday && (
            <span
              style={{
                marginLeft: "6px",
                fontSize: "0.7rem",
                fontWeight: 700,
                color: "#2563EB",
                background: "#EFF6FF",
                padding: "2px 6px",
                borderRadius: "var(--radius-sm)",
              }}
            >
              วันนี้
            </span>
          )}
        </div>

        {isCompletedAll ? (
          <CheckCircle2 size={18} style={{ color: "#10B981" }} />
        ) : (
          <span
            style={{
              fontSize: "0.78rem",
              color: "var(--text-muted)",
              fontWeight: 600,
            }}
          >
            {progress.completedTasks} / {progress.totalTasks}
          </span>
        )}
      </div>

      {/* Focus & Subjects list */}
      {isExamDay ? (
        <div
          style={{
            padding: "12px",
            background: "#FEF2F2",
            border: "1px solid #FECACA",
            borderRadius: "var(--radius-md)",
            color: "#DC2626",
            fontSize: "0.85rem",
            fontWeight: 700,
            textAlign: "center",
          }}
        >
          🎯 วันสอบจริง! {dayPlan.examType || "EXAM DAY"}
        </div>
      ) : tasks.length === 0 ? (
        <div
          style={{
            padding: "10px 0",
            fontSize: "0.82rem",
            color: "var(--text-muted)",
          }}
        >
          🌿 วันพักผ่อน / ทบทวนตามอัธยาศัย
        </div>
      ) : (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "8px",
            flex: 1,
          }}
        >
          {tasks.map((task) => (
            <div
              key={task.id}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                fontSize: "0.82rem",
                gap: "8px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                  minWidth: 0,
                  flex: 1,
                }}
              >
                <SubjectBadge subjectCode={task.subject} size="sm" />
                <span
                  style={{
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                    color: "var(--text-main)",
                    fontWeight: 500,
                  }}
                  title={task.topic}
                >
                  {task.topic}
                </span>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Progress Bar & Click prompt */}
      {!isExamDay && tasks.length > 0 && (
        <div style={{ marginTop: "auto", paddingTop: "8px" }}>
          <ProgressBar percent={progress.percent} height={5} />
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginTop: "6px",
              fontSize: "0.75rem",
              color: "var(--text-muted)",
            }}
          >
            <span>ความคืบหน้า</span>
            <span
              style={{
                display: "flex",
                alignItems: "center",
                gap: "2px",
                color: "#2563EB",
                fontWeight: 600,
              }}
            >
              ดูรายละเอียด <ChevronRight size={13} />
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
