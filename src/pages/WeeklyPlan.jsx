import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { CalendarDays, ChevronLeft, ChevronRight, Target } from "lucide-react";
import WeekCard from "../components/WeekCard";
import ProgressBar from "../components/ProgressBar";
import {
  getMondayOfWeek,
  getDaysOfWeek,
  formatShortThaiDate,
  addDays,
  getWeekIndex,
} from "../utils/dateUtils";
import { getSmartPlanForDate } from "../data/studyPlan";
import { WEEK_PROFILES } from "../data/weekProfiles";
import { getWeekProgress } from "../utils/progressUtils";

const ROADMAP_FIRST_MONDAY = "2026-09-28";
const ROADMAP_LAST_MONDAY = "2027-03-08";

function clampRoadmapMonday(monday) {
  if (monday < ROADMAP_FIRST_MONDAY) {
    return ROADMAP_FIRST_MONDAY;
  }

  if (monday > ROADMAP_LAST_MONDAY) {
    return ROADMAP_LAST_MONDAY;
  }

  return monday;
}

export default function WeeklyPlan({
  activeToday,
  subtaskStates,
  onSelectDate,
}) {
  const navigate = useNavigate();

  // Active Monday of displayed week
  const initialMonday = clampRoadmapMonday(getMondayOfWeek(activeToday));
  const [currentMonday, setCurrentMonday] = useState(initialMonday);

  const daysInWeek = getDaysOfWeek(currentMonday);
  const weekPlans = daysInWeek.map((d) => getSmartPlanForDate(d));

  const weekProgress = getWeekProgress(weekPlans, subtaskStates);
  const weekNumber = getWeekIndex(currentMonday);
  const weekProfile = WEEK_PROFILES[weekNumber] || null;

  const isTgatPhase = [
    "pre-tgat",
    "mock-tgat",
    "final-tgat",
    "final-tgat-light",
  ].includes(weekProfile?.mode);

  const isALevelPhase = ["alevel", "past-paper", "final-alevel"].includes(
    weekProfile?.mode,
  );

  const startDayThai = formatShortThaiDate(daysInWeek[0]);
  const endDayThai = formatShortThaiDate(daysInWeek[6]);

  const handlePrevWeek = () => {
    setCurrentMonday((prev) => {
      const previous = addDays(prev, -7);

      if (previous < ROADMAP_FIRST_MONDAY) {
        return prev;
      }

      return previous;
    });
  };

  const handleNextWeek = () => {
    setCurrentMonday((prev) => {
      const next = addDays(prev, 7);

      if (next > ROADMAP_LAST_MONDAY) {
        return prev;
      }

      return next;
    });
  };

  const handleCurrentWeek = () => {
    setCurrentMonday(clampRoadmapMonday(getMondayOfWeek(activeToday)));
  };

  const handleSelectDay = (dateStr) => {
    if (onSelectDate) {
      onSelectDate(dateStr);
    }
    navigate("/today");
  };

  // Determine weekly focus summary dynamically or from week plans

  return (
    <div className="page-wrapper animate-fade-in">
      {/* Header & Week Switcher */}
      <div
        style={{
          background: "#FFFFFF",
          border: "1px solid var(--border-subtle)",
          borderRadius: "var(--radius-2xl)",
          padding: "24px 28px",
          marginBottom: "24px",
          boxShadow: "var(--shadow-sm)",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "16px",
          }}
        >
          <div>
            <span
              style={{
                fontSize: "0.8rem",
                fontWeight: 600,
                color: "#2563EB",
                textTransform: "uppercase",
                letterSpacing: "0.05em",
              }}
            >
              WEEKLY ROADMAP
            </span>
            <h2
              style={{
                fontSize: "1.75rem",
                fontWeight: 800,
                color: "var(--text-main)",
                letterSpacing: "-0.02em",
                marginTop: "2px",
              }}
            >
              สัปดาห์ที่ {weekNumber}
            </h2>
            {weekProfile && (
              <div
                style={{
                  marginTop: "4px",
                  fontSize: "0.86rem",
                  fontWeight: 600,
                  color: "#6366F1",
                }}
              >
                {weekProfile.phase}
              </div>
            )}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                color: "var(--text-muted)",
                fontSize: "0.92rem",
                marginTop: "4px",
              }}
            >
              <CalendarDays size={15} />
              <span>
                วันที่ {startDayThai} - {endDayThai}
              </span>
            </div>
          </div>

          {/* Week Switcher Controls */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              background: "var(--bg-card-subtle)",
              padding: "6px 12px",
              borderRadius: "var(--radius-xl)",
            }}
          >
            <button
              type="button"
              onClick={handlePrevWeek}
              disabled={currentMonday <= ROADMAP_FIRST_MONDAY}
              className="btn-secondary"
              style={{
                padding: "6px 12px",
                fontSize: "0.85rem",
                opacity: currentMonday <= ROADMAP_FIRST_MONDAY ? 0.45 : 1,
                cursor:
                  currentMonday <= ROADMAP_FIRST_MONDAY
                    ? "not-allowed"
                    : "pointer",
              }}
            >
              <ChevronLeft size={16} />
              สัปดาห์ก่อน
            </button>

            <button
              type="button"
              onClick={handleCurrentWeek}
              className="btn-primary"
              style={{ padding: "6px 14px", fontSize: "0.85rem" }}
            >
              สัปดาห์ปัจจุบัน
            </button>

            <button
              type="button"
              onClick={handleNextWeek}
              disabled={currentMonday >= ROADMAP_LAST_MONDAY}
              className="btn-secondary"
              style={{
                padding: "6px 12px",
                fontSize: "0.85rem",
                opacity: currentMonday >= ROADMAP_LAST_MONDAY ? 0.45 : 1,
                cursor:
                  currentMonday >= ROADMAP_LAST_MONDAY
                    ? "not-allowed"
                    : "pointer",
              }}
            >
              สัปดาห์ถัดไป
              <ChevronRight size={16} />
            </button>
          </div>
        </div>

        {/* Weekly Progress Bar */}
        <div
          style={{
            marginTop: "20px",
            paddingTop: "16px",
            borderTop: "1px solid var(--border-subtle)",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "8px",
            }}
          >
            <span
              style={{
                fontSize: "0.9rem",
                fontWeight: 600,
                color: "var(--text-main)",
              }}
            >
              ความคืบหน้าสัปดาห์นี้
            </span>
            <span
              style={{
                fontSize: "0.85rem",
                color: "var(--text-muted)",
                fontWeight: 600,
              }}
            >
              {weekProgress.completedTasks} / {weekProgress.totalTasks} งาน (
              {weekProgress.percent}%)
            </span>
          </div>
          <ProgressBar percent={weekProgress.percent} height={9} />
        </div>
      </div>

      {/* Week Focus Highlights */}
      <div
        style={{
          background: "linear-gradient(135deg, #EFF6FF 0%, #F5F3FF 100%)",
          border: "1px solid #DBEAFE",
          borderRadius: "var(--radius-2xl)",
          padding: "22px 26px",
          marginBottom: "24px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            marginBottom: "14px",
          }}
        >
          <Target size={20} style={{ color: "#2563EB" }} />

          <h3
            style={{
              fontSize: "1.15rem",
              fontWeight: 800,
              color: "#1E3A8A",
            }}
          >
            สัปดาห์นี้เน้นอะไร
          </h3>
        </div>

        {weekProfile ? (
          <>
            {/* Main Focus */}
            <div
              style={{
                background: "rgba(255,255,255,0.75)",
                border: "1px solid #DBEAFE",
                padding: "14px 18px",
                borderRadius: "var(--radius-xl)",
                marginBottom: "16px",
              }}
            >
              <div
                style={{
                  fontSize: "0.78rem",
                  fontWeight: 700,
                  color: "#2563EB",
                  textTransform: "uppercase",
                  letterSpacing: "0.04em",
                  marginBottom: "4px",
                }}
              >
                เป้าหมายหลักของสัปดาห์
              </div>

              <div
                style={{
                  fontSize: "1rem",
                  fontWeight: 700,
                  color: "var(--text-main)",
                }}
              >
                {weekProfile.focus}
              </div>
            </div>

            {/* ===========================
          TGAT / TPAT PERIOD
      ============================ */}
            {isTgatPhase && (
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                  gap: "16px",
                }}
              >
                {/* TGAT / TPAT3 */}
                <div
                  style={{
                    background: "white",
                    padding: "16px 18px",
                    borderRadius: "var(--radius-xl)",
                    border: "1px solid #E2E8F0",
                  }}
                >
                  <div
                    style={{
                      fontWeight: 700,
                      fontSize: "0.92rem",
                      color: "#7C3AED",
                      marginBottom: "8px",
                    }}
                  >
                    🎯 TGAT / TPAT3
                  </div>

                  <ul
                    style={{
                      paddingLeft: "18px",
                      fontSize: "0.86rem",
                      color: "var(--text-muted)",
                      lineHeight: 1.75,
                      margin: 0,
                    }}
                  >
                    <li>
                      <strong>TGAT1:</strong> {weekProfile.tgat1}
                    </li>

                    <li>
                      <strong>TGAT2:</strong> {weekProfile.tgat2}
                    </li>

                    <li>
                      <strong>TGAT3:</strong> {weekProfile.tgat3}
                    </li>

                    <li>
                      <strong>TPAT3:</strong> {weekProfile.tpat3}
                    </li>
                  </ul>
                </div>

                {/* A-Level Maintenance */}
                <div
                  style={{
                    background: "white",
                    padding: "16px 18px",
                    borderRadius: "var(--radius-xl)",
                    border: "1px solid #E2E8F0",
                  }}
                >
                  <div
                    style={{
                      fontWeight: 700,
                      fontSize: "0.92rem",
                      color: "#DC2626",
                      marginBottom: "8px",
                    }}
                  >
                    📚 A-Level พื้นฐาน / รักษาความต่อเนื่อง
                  </div>

                  <ul
                    style={{
                      paddingLeft: "18px",
                      fontSize: "0.86rem",
                      color: "var(--text-muted)",
                      lineHeight: 1.75,
                      margin: 0,
                    }}
                  >
                    <li>
                      <strong>Math1:</strong> {weekProfile.math}
                    </li>

                    <li>
                      <strong>Physics:</strong> {weekProfile.physics}
                    </li>

                    <li>
                      <strong>English:</strong> {weekProfile.english}
                    </li>
                  </ul>
                </div>
              </div>
            )}

            {/* ===========================
          A-LEVEL PERIOD
      ============================ */}
            {isALevelPhase && (
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                  gap: "14px",
                }}
              >
                {/* Math */}
                <div
                  style={{
                    background: "white",
                    padding: "16px 18px",
                    borderRadius: "var(--radius-xl)",
                    border: "1px solid #FECACA",
                  }}
                >
                  <div
                    style={{
                      fontWeight: 700,
                      color: "#DC2626",
                      marginBottom: "6px",
                    }}
                  >
                    🔢 Math1
                  </div>

                  <div
                    style={{
                      fontSize: "0.86rem",
                      lineHeight: 1.6,
                      color: "var(--text-muted)",
                    }}
                  >
                    {weekProfile.math}
                  </div>
                </div>

                {/* Physics */}
                <div
                  style={{
                    background: "white",
                    padding: "16px 18px",
                    borderRadius: "var(--radius-xl)",
                    border: "1px solid #BAE6FD",
                  }}
                >
                  <div
                    style={{
                      fontWeight: 700,
                      color: "#0284C7",
                      marginBottom: "6px",
                    }}
                  >
                    ⚛️ Physics
                  </div>

                  <div
                    style={{
                      fontSize: "0.86rem",
                      lineHeight: 1.6,
                      color: "var(--text-muted)",
                    }}
                  >
                    {weekProfile.physics}
                  </div>
                </div>

                {/* English */}
                <div
                  style={{
                    background: "white",
                    padding: "16px 18px",
                    borderRadius: "var(--radius-xl)",
                    border: "1px solid #BBF7D0",
                  }}
                >
                  <div
                    style={{
                      fontWeight: 700,
                      color: "#16A34A",
                      marginBottom: "6px",
                    }}
                  >
                    🇬🇧 English
                  </div>

                  <div
                    style={{
                      fontSize: "0.86rem",
                      lineHeight: 1.6,
                      color: "var(--text-muted)",
                    }}
                  >
                    {weekProfile.english}
                  </div>
                </div>
              </div>
            )}
          </>
        ) : (
          <div
            style={{
              background: "white",
              borderRadius: "var(--radius-xl)",
              border: "1px solid #E2E8F0",
              padding: "18px",
              color: "var(--text-muted)",
              fontSize: "0.9rem",
            }}
          >
            ไม่มีข้อมูล Focus สำหรับสัปดาห์นี้
          </div>
        )}
      </div>

      {/* 7 Days Grid */}
      <h3
        style={{
          fontSize: "1.25rem",
          fontWeight: 800,
          color: "var(--text-main)",
          marginBottom: "14px",
        }}
      >
        ตารางรายวัน (คลิกเพื่อดูงานทั้งหมดในวันนั้น)
      </h3>

      <div className="week-grid">
        {weekPlans.map((dayPlan, idx) => (
          <WeekCard
            key={dayPlan.date || idx}
            dayPlan={dayPlan}
            isToday={dayPlan.date === activeToday}
            subtaskStates={subtaskStates}
            onSelectDay={handleSelectDay}
          />
        ))}
      </div>
    </div>
  );
}
