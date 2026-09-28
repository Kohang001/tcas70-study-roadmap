import React, { useState } from "react";
import { ChevronRight, X, Star } from "lucide-react";
import SubjectBadge from "../components/SubjectBadge";
import ProgressBar from "../components/ProgressBar";
import { SUBJECT_LIST } from "../data/subjects";
import { ALL_DAILY_PLANS } from "../data/studyPlan";
import { getSubjectProgress } from "../utils/progressUtils";

export default function Subjects({ subtaskStates, targetScores }) {
  const [selectedSubject, setSelectedSubject] = useState(null);

  return (
    <div className="page-wrapper animate-fade-in">
      {/* Header */}
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
        <span
          style={{
            fontSize: "0.8rem",
            fontWeight: 600,
            color: "#2563EB",
            textTransform: "uppercase",
            letterSpacing: "0.05em",
          }}
        >
          SUBJECT ROADMAPS
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
          ความคืบหน้ารายวิชา & ลำดับการอ่าน
        </h2>
        <p
          style={{
            color: "var(--text-muted)",
            fontSize: "0.92rem",
            marginTop: "4px",
          }}
        >
          วิเคราะห์ความคืบหน้าของทั้ง 7 วิชา และคลิกดูโครงสร้างเนื้อหาตามลำดับ
          High Priority ที่แนะนำ
        </p>
      </div>

      {/* Grid of Subject Cards */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap: "20px",
        }}
      >
        {SUBJECT_LIST.map((subject) => {
          const stats = getSubjectProgress(
            subject.code,
            ALL_DAILY_PLANS,
            subtaskStates,
          );

          return (
            <div
              key={subject.id}
              className="glass-card"
              style={{
                padding: "22px",
                cursor: "pointer",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                borderLeft: `4px solid ${subject.color}`,
              }}
              onClick={() => setSelectedSubject(subject)}
            >
              <div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginBottom: "12px",
                  }}
                >
                  <SubjectBadge subjectCode={subject.code} size="md" />
                  <span
                    style={{
                      fontSize: "0.75rem",
                      fontWeight: 700,
                      color: subject.color,
                      background: subject.bgLight,
                      padding: "3px 8px",
                      borderRadius: "var(--radius-full)",
                    }}
                  >
                    เป้าหมาย {targetScores?.[subject.code] ?? "-"} / 100
                  </span>
                </div>

                <h3
                  style={{
                    fontSize: "1.15rem",
                    fontWeight: 800,
                    color: "var(--text-main)",
                    marginBottom: "4px",
                  }}
                >
                  {subject.name}
                </h3>
                <p
                  style={{
                    fontSize: "0.82rem",
                    color: "var(--text-muted)",
                    lineHeight: 1.5,
                    marginBottom: "14px",
                  }}
                >
                  {subject.focus}
                </p>
              </div>

              <div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "baseline",
                    marginBottom: "6px",
                  }}
                >
                  <span
                    style={{
                      fontSize: "1.35rem",
                      fontWeight: 800,
                      color: "var(--text-main)",
                      fontFamily: "var(--font-en)",
                    }}
                  >
                    {stats.percent}%
                  </span>
                  <span
                    style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}
                  >
                    {stats.completedTasks} / {stats.totalTasks} งานสำเร็จ (เหลือ{" "}
                    {stats.remainingTasks})
                  </span>
                </div>

                <ProgressBar
                  percent={stats.percent}
                  height={7}
                  color={subject.color}
                />

                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginTop: "12px",
                    paddingTop: "10px",
                    borderTop: "1px solid var(--border-subtle)",
                    fontSize: "0.78rem",
                  }}
                >
                  <span style={{ color: "var(--text-muted)" }}>
                    ดู Roadmap และเนื้อหา
                  </span>
                  <span
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "3px",
                      color: subject.color,
                      fontWeight: 700,
                    }}
                  >
                    เปิดดู <ChevronRight size={14} />
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Subject Detail Roadmap Modal */}
      {selectedSubject && (
        <div
          className="modal-backdrop"
          onClick={() => setSelectedSubject(null)}
        >
          <div
            className="modal-content animate-fade-in"
            style={{ maxWidth: "680px" }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div
              style={{
                display: "flex",
                alignItems: "flex-start",
                justifyContent: "space-between",
                marginBottom: "20px",
              }}
            >
              <div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    marginBottom: "6px",
                  }}
                >
                  <SubjectBadge subjectCode={selectedSubject.code} size="md" />
                  <span
                    style={{ fontSize: "0.82rem", color: "var(--text-muted)" }}
                  >
                    {selectedSubject.category}
                  </span>
                </div>
                <h3
                  style={{
                    fontSize: "1.4rem",
                    fontWeight: 800,
                    color: "var(--text-main)",
                  }}
                >
                  {selectedSubject.name}
                </h3>
                <p
                  style={{
                    fontSize: "0.85rem",
                    color: "var(--text-muted)",
                    marginTop: "2px",
                  }}
                >
                  {selectedSubject.description}
                </p>
              </div>

              <button
                type="button"
                onClick={() => setSelectedSubject(null)}
                style={{ color: "var(--text-muted)", padding: "6px" }}
                aria-label="Close modal"
              >
                <X size={20} />
              </button>
            </div>

            {/* High Priority Topics */}
            <div
              style={{
                background: selectedSubject.bgLight,
                border: `1px solid ${selectedSubject.borderColor}`,
                borderRadius: "var(--radius-xl)",
                padding: "16px 20px",
                marginBottom: "20px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                  color: selectedSubject.color,
                  fontWeight: 700,
                  fontSize: "0.92rem",
                  marginBottom: "8px",
                }}
              >
                <Star size={16} fill={selectedSubject.color} />
                <span>หัวข้อ High Priority (ควรเน้นเก็บคะแนนก่อน)</span>
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                {selectedSubject.priorityTopics.map((pt, idx) => (
                  <span
                    key={idx}
                    style={{
                      background: "white",
                      border: "1px solid rgba(0,0,0,0.08)",
                      padding: "4px 10px",
                      borderRadius: "var(--radius-full)",
                      fontSize: "0.8rem",
                      fontWeight: 600,
                      color: "var(--text-main)",
                    }}
                  >
                    ★ {pt}
                  </span>
                ))}
              </div>
            </div>

            {/* Roadmap / Syllabus list */}
            <div>
              <h4
                style={{
                  fontWeight: 700,
                  fontSize: "1rem",
                  color: "var(--text-main)",
                  marginBottom: "12px",
                }}
              >
                ลำดับการศึกษาที่แนะนำ (Recommended Order)
              </h4>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "8px",
                  maxHeight: "360px",
                  overflowY: "auto",
                  paddingRight: "4px",
                }}
              >
                {selectedSubject.roadmap.map((item, idx) => {
                  const isHigh =
                    item.priority === "High" || item.status === "High";
                  return (
                    <div
                      key={idx}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        padding: "10px 14px",
                        borderRadius: "var(--radius-lg)",
                        background: "var(--bg-card-subtle)",
                        border: isHigh
                          ? `1px solid ${selectedSubject.borderColor}`
                          : "1px solid transparent",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "10px",
                        }}
                      >
                        <span
                          style={{
                            width: "24px",
                            height: "24px",
                            borderRadius: "50%",
                            background: isHigh
                              ? selectedSubject.color
                              : "#CBD5E1",
                            color: "white",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            fontSize: "0.75rem",
                            fontWeight: 700,
                            flexShrink: 0,
                          }}
                        >
                          {item.order || idx + 1}
                        </span>
                        <div>
                          <div
                            style={{
                              fontWeight: 600,
                              fontSize: "0.88rem",
                              color: "var(--text-main)",
                            }}
                          >
                            {item.title}
                          </div>
                          {item.desc && (
                            <div
                              style={{
                                fontSize: "0.76rem",
                                color: "var(--text-muted)",
                              }}
                            >
                              {item.desc}
                            </div>
                          )}
                        </div>
                      </div>

                      {isHigh && (
                        <span
                          style={{
                            fontSize: "0.7rem",
                            fontWeight: 700,
                            color: selectedSubject.color,
                            background: selectedSubject.badgeBg,
                            padding: "2px 8px",
                            borderRadius: "var(--radius-full)",
                          }}
                        >
                          High Priority
                        </span>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Special Section if TGAT3 thinking process or TGAT1 functions */}
            {selectedSubject.thinkingProcess && (
              <div
                style={{
                  marginTop: "20px",
                  padding: "14px 18px",
                  background: "#FDF2F8",
                  borderRadius: "var(--radius-lg)",
                  border: "1px solid #FBCFE8",
                }}
              >
                <div
                  style={{
                    fontWeight: 700,
                    fontSize: "0.88rem",
                    color: "#BE185D",
                    marginBottom: "6px",
                  }}
                >
                  กระบวนการคิดในการตัดสินใจ (Thinking Process):
                </div>
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    alignItems: "center",
                    gap: "6px",
                    fontSize: "0.8rem",
                    color: "#9D174D",
                  }}
                >
                  {selectedSubject.thinkingProcess.map((step, idx) => (
                    <React.Fragment key={idx}>
                      <span
                        style={{
                          background: "white",
                          padding: "2px 8px",
                          borderRadius: "var(--radius-sm)",
                          fontWeight: 600,
                        }}
                      >
                        {step}
                      </span>
                      {idx < selectedSubject.thinkingProcess.length - 1 && (
                        <span>→</span>
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </div>
            )}

            <div
              style={{
                marginTop: "24px",
                display: "flex",
                justifyContent: "flex-end",
              }}
            >
              <button
                type="button"
                onClick={() => setSelectedSubject(null)}
                className="btn-primary"
              >
                เข้าใจแล้ว
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
