import React, { useState } from "react";
import { Plus, Search, Trash2, Edit3, Filter, Calendar } from "lucide-react";
import SubjectBadge from "../components/SubjectBadge";
import ErrorModal from "../components/ErrorModal";
import EmptyState from "../components/EmptyState";
import { SUBJECT_LIST } from "../data/subjects";
import { formatThaiDate } from "../utils/dateUtils";
import { ERROR_TYPES, getErrorTypeMeta } from "../data/errorTypes";

export default function ErrorLogPage({
  errorLogs = [],
  onAddErrorLog,
  onUpdateErrorLog,
  onDeleteErrorLog,
  activeDate,
}) {
  const [subjectFilter, setSubjectFilter] = useState("all");
  const [errorTypeFilter, setErrorTypeFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const [editingLog, setEditingLog] = useState(null);

  const handleOpenAdd = () => {
    setEditingLog(null);
    setModalOpen(true);
  };

  const handleOpenEdit = (log) => {
    setEditingLog(log);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setEditingLog(null);
  };

  const handleSave = (logData) => {
    if (editingLog) {
      onUpdateErrorLog(editingLog.id, logData);
    } else {
      onAddErrorLog(logData);
    }

    handleCloseModal();
  };

  // Filter logs
  const filteredLogs = errorLogs.filter((log) => {
    // Subject filter
    if (
      subjectFilter !== "all" &&
      log.subject.toLowerCase() !== subjectFilter.toLowerCase()
    ) {
      return false;
    }

    // Error type filter
    const logErrorType = log.errorType || "other";

    if (errorTypeFilter !== "all" && logErrorType !== errorTypeFilter) {
      return false;
    }

    // Search query
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      const matchTopic = log.topic?.toLowerCase().includes(q);
      const matchDesc = log.questionDesc?.toLowerCase().includes(q);
      const matchWhy = log.whyWrong?.toLowerCase().includes(q);
      const matchSol = log.solution?.toLowerCase().includes(q);
      if (!matchTopic && !matchDesc && !matchWhy && !matchSol) {
        return false;
      }
    }
    return true;
  });

  const errorTypeStats = ERROR_TYPES.map((type) => {
    const count = errorLogs.filter(
      (log) => (log.errorType || "other") === type.id,
    ).length;

    return {
      ...type,
      count,
    };
  });

  const topErrorType =
    [...errorTypeStats]
      .filter((type) => type.count > 0)
      .sort((a, b) => b.count - a.count)[0] || null;

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
                color: "#DC2626",
                textTransform: "uppercase",
                letterSpacing: "0.05em",
              }}
            >
              MISTAKE JOURNAL
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
              สมุดบันทึกข้อผิดพลาด (Error Log)
            </h2>
            <p
              style={{
                color: "var(--text-muted)",
                fontSize: "0.92rem",
                marginTop: "4px",
              }}
            >
              เปลี่ยนทุกข้อที่เคยทำผิดให้กลายเป็นคลังความรู้
              เพื่อไม่ให้พลาดซ้ำในสนามสอบจริง
            </p>
          </div>

          <button
            type="button"
            onClick={handleOpenAdd}
            className="btn-primary"
            style={{
              padding: "10px 20px",
              background: "#DC2626",
              borderColor: "#DC2626",
            }}
          >
            <Plus size={18} /> + บันทึกข้อผิดใหม่
          </button>
        </div>
      </div>

      {/* Error Type Summary */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
          gap: "12px",
          marginBottom: "22px",
        }}
      >
        <div
          className="glass-card"
          style={{
            padding: "18px",
          }}
        >
          <div
            style={{
              fontSize: "0.78rem",
              color: "var(--text-muted)",
              marginBottom: "5px",
            }}
          >
            ข้อผิดทั้งหมด
          </div>

          <div
            style={{
              fontSize: "1.8rem",
              fontWeight: 800,
              color: "var(--text-main)",
            }}
          >
            {errorLogs.length}
          </div>
        </div>

        <div
          className="glass-card"
          style={{
            padding: "18px",
          }}
        >
          <div
            style={{
              fontSize: "0.78rem",
              color: "var(--text-muted)",
              marginBottom: "5px",
            }}
          >
            สาเหตุที่พลาดบ่อยที่สุด
          </div>

          {topErrorType ? (
            <>
              <div
                style={{
                  fontSize: "1.05rem",
                  fontWeight: 800,
                  color: topErrorType.color,
                }}
              >
                {topErrorType.icon} {topErrorType.label}
              </div>

              <div
                style={{
                  marginTop: "3px",
                  fontSize: "0.8rem",
                  color: "var(--text-muted)",
                }}
              >
                {topErrorType.count} ข้อ
              </div>
            </>
          ) : (
            <div
              style={{
                fontWeight: 700,
                color: "var(--text-muted)",
              }}
            >
              ยังไม่มีข้อมูล
            </div>
          )}
        </div>

        {errorTypeStats
          .filter((type) => type.count > 0)
          .map((type) => (
            <button
              key={type.id}
              type="button"
              onClick={() =>
                setErrorTypeFilter(
                  errorTypeFilter === type.id ? "all" : type.id,
                )
              }
              style={{
                textAlign: "left",
                padding: "16px",
                borderRadius: "var(--radius-xl)",
                border:
                  errorTypeFilter === type.id
                    ? `2px solid ${type.color}`
                    : "1px solid var(--border-subtle)",
                background: type.background,
                cursor: "pointer",
              }}
            >
              <div
                style={{
                  fontSize: "0.78rem",
                  fontWeight: 700,
                  color: type.color,
                }}
              >
                {type.icon} {type.label}
              </div>

              <div
                style={{
                  fontSize: "1.45rem",
                  fontWeight: 800,
                  color: "var(--text-main)",
                  marginTop: "3px",
                }}
              >
                {type.count}
              </div>
            </button>
          ))}
      </div>

      {/* Filter and Search Bar */}
      <div
        style={{
          background: "#FFFFFF",
          border: "1px solid var(--border-subtle)",
          borderRadius: "var(--radius-xl)",
          padding: "16px 20px",
          marginBottom: "22px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "14px",
        }}
      >
        {/* Search */}
        <div style={{ position: "relative", flex: 1, minWidth: "240px" }}>
          <Search
            size={16}
            style={{
              position: "absolute",
              left: "12px",
              top: "50%",
              transform: "translateY(-50%)",
              color: "var(--text-muted)",
            }}
          />
          <input
            type="text"
            placeholder="ค้นหาตามชื่อหัวข้อ, สาเหตุที่ผิด, หรือวิธีแก้..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            style={{
              width: "100%",
              padding: "9px 12px 9px 36px",
              borderRadius: "var(--radius-md)",
              border: "1px solid var(--border-medium)",
              fontSize: "0.88rem",
              outline: "none",
            }}
          />
        </div>

        {/* Subject Filter */}
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <Filter size={15} style={{ color: "var(--text-muted)" }} />
          <span style={{ fontSize: "0.85rem", color: "var(--text-muted)" }}>
            วิชา:
          </span>
          <select
            value={subjectFilter}
            onChange={(e) => setSubjectFilter(e.target.value)}
            style={{
              padding: "8px 14px",
              borderRadius: "var(--radius-md)",
              border: "1px solid var(--border-medium)",
              background: "white",
              fontSize: "0.85rem",
            }}
          >
            <option value="all">ทุกวิชา ({errorLogs.length})</option>
            {SUBJECT_LIST.map((s) => {
              const count = errorLogs.filter(
                (l) => l.subject.toLowerCase() === s.code.toLowerCase(),
              ).length;
              return (
                <option key={s.id} value={s.code}>
                  {s.code} ({count})
                </option>
              );
            })}
          </select>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
          }}
        >
          <span
            style={{
              fontSize: "0.85rem",
              color: "var(--text-muted)",
            }}
          >
            ประเภท:
          </span>

          <select
            value={errorTypeFilter}
            onChange={(e) => setErrorTypeFilter(e.target.value)}
            style={{
              padding: "8px 14px",
              borderRadius: "var(--radius-md)",
              border: "1px solid var(--border-medium)",
              background: "white",
              fontSize: "0.85rem",
            }}
          >
            <option value="all">ทุกประเภท ({errorLogs.length})</option>

            {ERROR_TYPES.map((type) => {
              const count = errorLogs.filter(
                (log) => (log.errorType || "other") === type.id,
              ).length;

              return (
                <option key={type.id} value={type.id}>
                  {type.icon} {type.label} ({count})
                </option>
              );
            })}
          </select>
        </div>
      </div>

      {/* Logs List */}
      {filteredLogs.length === 0 ? (
        <EmptyState
          title="ไม่พบบันทึก Error Log"
          description={
            searchQuery
              ? "ไม่พบรายการที่ตรงกับคำค้นหา ลองล้างตัวกรองหรือค้นหาด้วยคำอื่น"
              : "ยังไม่มีข้อผิดพลาดที่บันทึกไว้ในหมวดนี้ เริ่มจดข้อแรกเพื่อพัฒนาตัวเองได้เลย!"
          }
          actionText="+ บันทึกข้อผิดข้อแรก"
          onAction={handleOpenAdd}
        />
      ) : (
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          {filteredLogs.map((log) => {
            const errorTypeMeta = getErrorTypeMeta(log.errorType);

            return (
              <div
                key={log.id}
                className="glass-card animate-fade-in"
                style={{
                  padding: "22px 24px",
                  borderLeft: "4px solid #DC2626",
                }}
              >
                {/* Header row */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    justifyContent: "space-between",
                    gap: "16px",
                    marginBottom: "12px",
                    flexWrap: "wrap",
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
                      <SubjectBadge
                        subjectCode={log.subject}
                        size="sm"
                        showName
                      />
                      <span
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "4px",
                          fontSize: "0.74rem",
                          fontWeight: 700,
                          color: errorTypeMeta.color,
                          background: errorTypeMeta.background,
                          padding: "3px 8px",
                          borderRadius: "var(--radius-full)",
                        }}
                      >
                        {errorTypeMeta.icon} {errorTypeMeta.label}
                      </span>
                      <span
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "4px",
                          fontSize: "0.78rem",
                          color: "var(--text-muted)",
                        }}
                      >
                        <Calendar size={13} />
                        {formatThaiDate(log.date, false)}
                      </span>
                    </div>

                    <h3
                      style={{
                        fontSize: "1.2rem",
                        fontWeight: 800,
                        color: "var(--text-main)",
                      }}
                    >
                      {log.topic}
                    </h3>
                  </div>

                  {/* Actions */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "6px",
                    }}
                  >
                    <button
                      type="button"
                      onClick={() => handleOpenEdit(log)}
                      style={{
                        padding: "6px 12px",
                        borderRadius: "var(--radius-md)",
                        background: "var(--bg-card-subtle)",
                        fontSize: "0.8rem",
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "4px",
                        color: "var(--text-main)",
                      }}
                    >
                      <Edit3 size={13} /> แก้ไข
                    </button>

                    <button
                      type="button"
                      onClick={() => {
                        if (confirm("ต้องการลบบันทึกนี้ใช่หรือไม่?")) {
                          onDeleteErrorLog(log.id);
                        }
                      }}
                      style={{
                        padding: "6px 10px",
                        borderRadius: "var(--radius-md)",
                        background: "#FEF2F2",
                        fontSize: "0.8rem",
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "4px",
                        color: "#DC2626",
                      }}
                      title="ลบบันทึก"
                    >
                      <Trash2 size={14} />
                    </button>
                  </div>
                </div>

                {/* Question description */}
                {log.questionDesc && (
                  <div
                    style={{
                      fontSize: "0.88rem",
                      color: "var(--text-muted)",
                      marginBottom: "14px",
                      background: "#F8FAFC",
                      padding: "10px 14px",
                      borderRadius: "var(--radius-md)",
                      lineHeight: 1.5,
                    }}
                  >
                    <span
                      style={{ fontWeight: 600, color: "var(--text-main)" }}
                    >
                      ลักษณะโจทย์:{" "}
                    </span>
                    {log.questionDesc}
                  </div>
                )}

                {/* Why Wrong & Solution side by side or stacked */}
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                    gap: "14px",
                  }}
                >
                  {/* Why Wrong */}
                  <div
                    style={{
                      background: "#FEF2F2",
                      border: "1px solid #FECACA",
                      borderRadius: "var(--radius-lg)",
                      padding: "14px 16px",
                    }}
                  >
                    <div
                      style={{
                        fontWeight: 700,
                        fontSize: "0.86rem",
                        color: "#DC2626",
                        marginBottom: "6px",
                        display: "flex",
                        alignItems: "center",
                        gap: "6px",
                      }}
                    >
                      <span>❌ ผิดเพราะ:</span>
                    </div>
                    <p
                      style={{
                        fontSize: "0.9rem",
                        color: "#7F1D1D",
                        lineHeight: 1.5,
                      }}
                    >
                      {log.whyWrong || "ไม่ได้ระบุ"}
                    </p>
                  </div>

                  {/* Solution */}
                  <div
                    style={{
                      background: "#ECFDF5",
                      border: "1px solid #A7F3D0",
                      borderRadius: "var(--radius-lg)",
                      padding: "14px 16px",
                    }}
                  >
                    <div
                      style={{
                        fontWeight: 700,
                        fontSize: "0.86rem",
                        color: "#059669",
                        marginBottom: "6px",
                        display: "flex",
                        alignItems: "center",
                        gap: "6px",
                      }}
                    >
                      <span>✅ วิธีแก้ / จุดที่ต้องจำ:</span>
                    </div>
                    <p
                      style={{
                        fontSize: "0.9rem",
                        color: "#064E3B",
                        lineHeight: 1.5,
                      }}
                    >
                      {log.solution || "ไม่ได้ระบุ"}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Add / Edit Modal */}
      {modalOpen && (
        <ErrorModal
          isOpen={true}
          onClose={handleCloseModal}
          onSave={handleSave}
          initialData={editingLog}
          activeDate={activeDate}
        />
      )}
    </div>
  );
}
