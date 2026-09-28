import React, { useState } from "react";
import { Check, Sparkles, Heart } from "lucide-react";
import { EXAM_DAY_CHECKLIST } from "../data/exams";
import confetti from "canvas-confetti";

export default function ExamDayScreen({
  examTitle = "TGAT & TPAT3",
  dateThai = "30 มกราคม 2570",
  examDate = "2027-01-30",
}) {
  const storageKey = `tcas70_exam_checklist_${examDate}`;
  const loadChecklist = (key) => {
    try {
      const saved = localStorage.getItem(key);
      return saved ? JSON.parse(saved) : {};
    } catch (error) {
      console.error("Failed to load exam checklist:", error);
      return {};
    }
  };

  const [checkedItems, setCheckedItems] = useState(() =>
    loadChecklist(storageKey),
  );

  const toggleCheck = (id) => {
    setCheckedItems((prev) => {
      const next = { ...prev, [id]: !prev[id] };
      localStorage.setItem(storageKey, JSON.stringify(next));

      const allChecked = EXAM_DAY_CHECKLIST.every((item) => next[item.id]);
      if (allChecked) {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
        });
      }
      return next;
    });
  };

  return (
    <div className="animate-fade-in" style={{ marginBottom: "32px" }}>
      <div className="exam-day-banner">
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            color: "#FCD34D",
            fontWeight: 600,
            fontSize: "0.9rem",
            marginBottom: "8px",
          }}
        >
          <Sparkles size={18} />
          <span>EXAM DAY • {dateThai}</span>
        </div>
        <h2
          style={{
            fontSize: "1.85rem",
            fontWeight: 800,
            marginBottom: "10px",
            color: "#FFFFFF",
            letterSpacing: "-0.02em",
          }}
        >
          วันสอบจริงมาถึงแล้ว! สนามสอบ {examTitle} 🎯
        </h2>
        <p
          style={{
            opacity: 0.9,
            fontSize: "1rem",
            lineHeight: 1.6,
            maxWidth: "720px",
          }}
        >
          วันนี้ไม่มีตารางอ่านหนังสือใหม่ ทุกความมุ่งมั่น ทุกลมหายใจ
          และข้อสอบที่ฝึกทำมาตลอดหลายเดือนได้เตรียมพร้อมให้คุณแล้ว มีสมาธิ
          อ่านคำสั่งโจทย์ให้รอบคอบ บริหารเวลาให้ดี
          และเชื่อมั่นในศักยภาพของตัวเอง!
        </p>

        <div
          style={{
            marginTop: "24px",
            paddingTop: "20px",
            borderTop: "1px solid rgba(255, 255, 255, 0.15)",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: "12px",
            }}
          >
            <h4
              style={{
                fontWeight: 700,
                fontSize: "1.05rem",
                color: "#FFFFFF",
                display: "flex",
                alignItems: "center",
                gap: "8px",
              }}
            >
              <Heart size={18} style={{ color: "#F472B6" }} />
              เช็กลิสต์ความพร้อมก่อนออกจากบ้าน
            </h4>
            <span style={{ fontSize: "0.82rem", opacity: 0.85 }}>
              พร้อมแล้ว{" "}
              {EXAM_DAY_CHECKLIST.filter((c) => checkedItems[c.id]).length} /{" "}
              {EXAM_DAY_CHECKLIST.length} อย่าง
            </span>
          </div>

          <div className="exam-checklist-grid">
            {EXAM_DAY_CHECKLIST.map((item) => {
              const isChecked = !!checkedItems[item.id];
              return (
                <div
                  key={item.id}
                  className={`exam-check-item ${isChecked ? "checked" : ""}`}
                  onClick={() => toggleCheck(item.id)}
                  onKeyDown={(event) => {
                    if (event.key === "Enter" || event.key === " ") {
                      event.preventDefault();
                      toggleCheck(item.id);
                    }
                  }}
                  role="checkbox"
                  aria-checked={isChecked}
                  tabIndex={0}
                >
                  <div
                    style={{
                      width: "20px",
                      height: "20px",
                      borderRadius: "6px",
                      border: "2px solid white",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      background: isChecked ? "#10B981" : "transparent",
                      borderColor: isChecked
                        ? "#10B981"
                        : "rgba(255, 255, 255, 0.6)",
                      flexShrink: 0,
                    }}
                  >
                    {isChecked && (
                      <Check size={14} strokeWidth={3} color="white" />
                    )}
                  </div>
                  <span
                    style={{
                      fontSize: "0.9rem",
                      color: "white",
                      fontWeight: isChecked ? 600 : 400,
                    }}
                  >
                    {item.title}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
