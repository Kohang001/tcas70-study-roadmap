import React, { useState, useRef } from "react";
import {
  RotateCcw,
  Download,
  Upload,
  Trash2,
  User,
  Calendar,
  HelpCircle,
  AlertTriangle,
} from "lucide-react";
import { formatThaiDate } from "../utils/dateUtils";

export default function Settings({
  studentName,
  setStudentName,
  activeToday,
  realTodayStr,
  simulatedDate,
  onLockToRealToday,
  setSimulatedDate,
  onResetToday,
  onResetAll,
  onExportData,
  onImportData,
  onReplayOnboarding,
  targetScores,
  onUpdateTargetScore,
  onResetTargetScores,
}) {
  const [localName, setLocalName] = useState(studentName);
  const [nameSavedFeedback, setNameSavedFeedback] = useState(false);
  const [customDateInput, setCustomDateInput] = useState(activeToday);
  const fileInputRef = useRef(null);

  const handleSaveName = (e) => {
    e.preventDefault();
    setStudentName(localName);
    setNameSavedFeedback(true);
    setTimeout(() => setNameSavedFeedback(false), 2000);
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const parsed = JSON.parse(event.target.result);
        const res = onImportData(parsed);
        if (res.success) {
          alert("นำเข้าข้อมูลสำเร็จเรียบร้อย!");
        } else {
          alert(`เกิดข้อผิดพลาดในการนำเข้าข้อมูล: ${res.error}`);
        }
      } catch {
        alert("ไฟล์ JSON ไม่ถูกต้อง กรุณาตรวจสอบไฟล์");
      }
    };
    reader.readAsText(file);
    e.target.value = null;
  };

  const handleConfirmResetAll = () => {
    if (
      confirm(
        "คำเตือน: การกระทำนี้จะล้างข้อมูลเช็กลิสต์ โน้ตส่วนตัว และ Error Log ทั้งหมด\n\nต้องการรีเซ็ตข้อมูลทั้งหมดจริงหรือไม่?",
      )
    ) {
      onResetAll();
      alert("รีเซ็ตข้อมูลทั้งหมดเรียบร้อยแล้ว");
    }
  };

  const testPresets = [
    { label: "28 ก.ย. 2569 (Phase 1 เริ่มต้น)", date: "2026-09-28" },
    { label: "12 ต.ค. 2569 (Phase 1 สัปดาห์ที่ 3)", date: "2026-10-12" },
    { label: "01 ธ.ค. 2569 (Phase 3 Full Mocks)", date: "2026-12-01" },
    { label: "30 ม.ค. 2570 (🎯 Exam Day: TGAT/TPAT3)", date: "2027-01-30" },
    { label: "01 ก.พ. 2570 (🔥 A-Level Takeover)", date: "2027-02-01" },
    {
      label: "08 มี.ค. 2570 (สัปดาห์สุดท้าย Final Review)",
      date: "2027-03-08",
    },
    { label: "13 มี.ค. 2570 (🎯 A-Level Physics)", date: "2027-03-13" },
    { label: "14 มี.ค. 2570 (🎯 Math1 + English)", date: "2027-03-14" },
    { label: "15 มี.ค. 2570 (🎉 จบสนามสอบ TCAS70)", date: "2027-03-15" },
  ];

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
          PREFERENCES & DATA
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
          ตั้งค่า & จัดการข้อมูล (Settings)
        </h2>
        <p
          style={{
            color: "var(--text-muted)",
            fontSize: "0.92rem",
            marginTop: "4px",
          }}
        >
          ปรับแต่งชื่อผู้ใช้งาน สำรองข้อมูลความคืบหน้า
          และทดสอบเปลี่ยนวันที่เพื่อดูแผนการอ่านในแต่ละช่วง
        </p>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap: "22px",
        }}
      >
        {/* User Profile */}
        <div className="glass-card" style={{ padding: "24px" }}>
          <h3
            style={{
              fontSize: "1.15rem",
              fontWeight: 800,
              color: "var(--text-main)",
              marginBottom: "12px",
              display: "flex",
              alignItems: "center",
              gap: "8px",
            }}
          >
            <User size={18} style={{ color: "#2563EB" }} />
            ข้อมูลผู้เรียน
          </h3>

          <form
            onSubmit={handleSaveName}
            style={{ display: "flex", flexDirection: "column", gap: "12px" }}
          >
            <div>
              <label
                style={{
                  display: "block",
                  fontSize: "0.85rem",
                  fontWeight: 600,
                  color: "var(--text-muted)",
                  marginBottom: "6px",
                }}
              >
                ชื่อเรียกของคุณ
              </label>
              <input
                type="text"
                value={localName}
                onChange={(e) => setLocalName(e.target.value)}
                placeholder="เช่น น้องเด็ก 70, น้องมินนี่..."
                style={{
                  width: "100%",
                  padding: "9px 12px",
                  borderRadius: "var(--radius-md)",
                  border: "1px solid var(--border-medium)",
                  fontSize: "0.9rem",
                }}
              />
            </div>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              {nameSavedFeedback && (
                <span
                  style={{
                    fontSize: "0.82rem",
                    color: "#059669",
                    fontWeight: 600,
                  }}
                >
                  ✓ บันทึกชื่อสำเร็จ
                </span>
              )}
              <button
                type="submit"
                className="btn-primary"
                style={{
                  padding: "8px 18px",
                  fontSize: "0.85rem",
                  marginLeft: "auto",
                }}
              >
                บันทึกชื่อ
              </button>
            </div>
          </form>
        </div>

        {/* Date Simulator / Tester */}
        <div className="glass-card" style={{ padding: "24px" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: "10px",
            }}
          >
            <h3
              style={{
                fontSize: "1.15rem",
                fontWeight: 800,
                color: "var(--text-main)",
                display: "flex",
                alignItems: "center",
                gap: "8px",
              }}
            >
              <Calendar size={18} style={{ color: "#7C3AED" }} />
              เครื่องจำลองวันที่ (Date Simulator)
            </h3>
            {simulatedDate && (
              <span
                style={{
                  fontSize: "0.75rem",
                  color: "#B45309",
                  background: "#FEF3C7",
                  padding: "2px 8px",
                  borderRadius: "var(--radius-sm)",
                  fontWeight: 600,
                }}
              >
                จำลองอยู่
              </span>
            )}
          </div>

          <p
            style={{
              fontSize: "0.82rem",
              color: "var(--text-muted)",
              marginBottom: "14px",
              lineHeight: 1.5,
            }}
          >
            ปัจจุบันระบบอิงตามวันที่จริง{" "}
            <strong>{formatThaiDate(realTodayStr, true)}</strong>{" "}
            คุณสามารถจำลองวันที่เพื่อตรวจสอบแผนล่วงหน้า เช่น วันสอบ TGAT/TPAT3
            หรือช่วง A-Level Takeover
          </p>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "8px",
              marginBottom: "14px",
            }}
          >
            <div
              style={{
                fontSize: "0.8rem",
                fontWeight: 600,
                color: "var(--text-main)",
              }}
            >
              เลือกช่วงสำคัญเพื่อทดสอบ:
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
              {testPresets.map((preset) => (
                <button
                  key={preset.date}
                  type="button"
                  onClick={() => setSimulatedDate(preset.date)}
                  className="btn-secondary"
                  style={{
                    padding: "4px 10px",
                    fontSize: "0.75rem",
                    backgroundColor:
                      activeToday === preset.date ? "#EFF6FF" : "white",
                    borderColor:
                      activeToday === preset.date
                        ? "#3B82F6"
                        : "var(--border-subtle)",
                    color:
                      activeToday === preset.date
                        ? "#1D4ED8"
                        : "var(--text-main)",
                    fontWeight: activeToday === preset.date ? 700 : 500,
                  }}
                >
                  {preset.label}
                </button>
              ))}
            </div>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <input
              type="date"
              value={customDateInput}
              onChange={(e) => {
                setCustomDateInput(e.target.value);
                setSimulatedDate(e.target.value);
              }}
              style={{
                flex: 1,
                padding: "7px 12px",
                borderRadius: "var(--radius-md)",
                border: "1px solid var(--border-medium)",
                fontSize: "0.85rem",
              }}
            />
            {simulatedDate && (
              <button
                type="button"
                onClick={() => {
                  onLockToRealToday();
                  setCustomDateInput(realTodayStr);
                }}
                className="btn-secondary"
                style={{ padding: "7px 12px", fontSize: "0.82rem" }}
                title="ล็อคกลับสู่วันนี้จริง"
              >
                🔒 ล็อคกลับสู่วันนี้จริง
              </button>
            )}
          </div>
        </div>

        {/* Data Backup & Restore */}
        <div className="glass-card" style={{ padding: "24px" }}>
          <h3
            style={{
              fontSize: "1.15rem",
              fontWeight: 800,
              color: "var(--text-main)",
              marginBottom: "8px",
              display: "flex",
              alignItems: "center",
              gap: "8px",
            }}
          >
            <Download size={18} style={{ color: "#059669" }} />
            สำรอง & กู้คืนข้อมูล (Export / Import)
          </h3>
          <p
            style={{
              fontSize: "0.82rem",
              color: "var(--text-muted)",
              marginBottom: "16px",
              lineHeight: 1.5,
            }}
          >
            ดาวน์โหลดไฟล์บันทึกความคืบหน้าเก็บไว้ในเครื่องคอมพิวเตอร์ของคุณ
            เพื่อป้องกันข้อมูลหาย หรือนำไปเปิดบนอุปกรณ์อื่น
          </p>

          <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
            <button
              type="button"
              onClick={onExportData}
              className="btn-primary"
              style={{
                padding: "9px 16px",
                fontSize: "0.88rem",
                background: "#059669",
                borderColor: "#059669",
              }}
            >
              <Download size={16} /> ส่งออกข้อมูล (Export JSON)
            </button>

            <button
              type="button"
              onClick={() => fileInputRef.current?.click()}
              className="btn-secondary"
              style={{ padding: "9px 16px", fontSize: "0.88rem" }}
            >
              <Upload size={16} /> นำเข้าข้อมูล (Import JSON)
            </button>
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleFileChange}
              accept=".json"
              style={{ display: "none" }}
            />
          </div>
        </div>

        <section
          style={{
            background: "white",
            border: "1px solid #E2E8F0",
            borderRadius: "var(--radius-2xl)",
            padding: "22px",
            marginBottom: "22px",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "16px",
              marginBottom: "18px",
            }}
          >
            <div>
              <h2
                style={{
                  fontSize: "1.15rem",
                  fontWeight: 800,
                  color: "var(--text-main)",
                  marginBottom: "4px",
                }}
              >
                🎯 เป้าหมายคะแนนของฉัน
              </h2>

              <p
                style={{
                  fontSize: "0.86rem",
                  color: "var(--text-muted)",
                  margin: 0,
                }}
              >
                ตั้งคะแนนเป้าหมายของแต่ละวิชาได้เอง
                ค่านี้ใช้เพื่อช่วยติดตามเป้าหมายเท่านั้น
              </p>
            </div>

            <button
              type="button"
              onClick={onResetTargetScores}
              className="btn-secondary"
              style={{
                whiteSpace: "nowrap",
              }}
            >
              คืนค่าเริ่มต้น
            </button>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: "12px",
            }}
          >
            {Object.entries(targetScores).map(([subject, score]) => (
              <label
                key={subject}
                style={{
                  border: "1px solid #E2E8F0",
                  borderRadius: "var(--radius-xl)",
                  padding: "14px 16px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: "12px",
                }}
              >
                <span
                  style={{
                    fontWeight: 700,
                    color: "var(--text-main)",
                  }}
                >
                  {subject}
                </span>

                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "5px",
                  }}
                >
                  <input
                    type="number"
                    min="0"
                    max="100"
                    step="1"
                    value={score}
                    onChange={(event) => {
                      const value = event.target.value;

                      if (value === "") {
                        return;
                      }

                      onUpdateTargetScore(subject, value);
                    }}
                    style={{
                      width: "70px",
                      padding: "7px 9px",
                      borderRadius: "10px",
                      border: "1px solid #CBD5E1",
                      fontWeight: 700,
                      textAlign: "center",
                    }}
                  />

                  <span
                    style={{
                      fontWeight: 700,
                      color: "var(--text-muted)",
                    }}
                  >
                    /100
                  </span>
                </div>
              </label>
            ))}
          </div>
        </section>

        {/* Reset & Onboarding Replay */}
        <div className="glass-card" style={{ padding: "24px" }}>
          <h3
            style={{
              fontSize: "1.15rem",
              fontWeight: 800,
              color: "var(--text-main)",
              marginBottom: "8px",
              display: "flex",
              alignItems: "center",
              gap: "8px",
            }}
          >
            <AlertTriangle size={18} style={{ color: "#DC2626" }} />
            การรีเซ็ตข้อมูล (Reset Options)
          </h3>
          <p
            style={{
              fontSize: "0.82rem",
              color: "var(--text-muted)",
              marginBottom: "16px",
              lineHeight: 1.5,
            }}
          >
            จัดการรีเซ็ตความคืบหน้าของวันนี้
            หรือล้างข้อมูลทั้งหมดเพื่อเริ่มต้นใหม่อีกครั้ง
          </p>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "10px",
              marginBottom: "16px",
            }}
          >
            <button
              type="button"
              onClick={() => {
                if (confirm("ต้องการรีเซ็ตเช็กลิสต์งานของวันนี้ใช่หรือไม่?")) {
                  onResetToday(activeToday);
                  alert("รีเซ็ตงานของวันนี้เรียบร้อย");
                }
              }}
              className="btn-secondary"
              style={{ padding: "8px 14px", fontSize: "0.85rem" }}
            >
              <RotateCcw size={15} /> รีเซ็ตเฉพาะงานวันนี้
            </button>

            <button
              type="button"
              onClick={handleConfirmResetAll}
              className="btn-danger"
              style={{ padding: "8px 14px", fontSize: "0.85rem" }}
            >
              <Trash2 size={15} /> รีเซ็ตข้อมูลทั้งหมด
            </button>
          </div>

          <div
            style={{
              paddingTop: "14px",
              borderTop: "1px solid var(--border-subtle)",
            }}
          >
            <button
              type="button"
              onClick={onReplayOnboarding}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                color: "#2563EB",
                fontSize: "0.85rem",
                fontWeight: 600,
              }}
            >
              <HelpCircle size={16} /> ดูคำแนะนำเริ่มต้นใช้งานใหม่อีกครั้ง
              (Replay Tour)
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
