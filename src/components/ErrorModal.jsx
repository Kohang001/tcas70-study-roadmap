import React, { useState, useEffect } from "react";
import { X, AlertCircle, Save } from "lucide-react";
import { SUBJECT_LIST } from "../data/subjects";
import { ERROR_TYPES } from "../data/errorTypes";

export default function ErrorModal({
  isOpen,
  onClose,
  onSave,
  initialData = null,
  activeDate = "2026-09-28",
}) {
  const [subject, setSubject] = useState("Physics");
  const [errorType, setErrorType] = useState("concept");
  const [topic, setTopic] = useState("");
  const [questionDesc, setQuestionDesc] = useState("");
  const [whyWrong, setWhyWrong] = useState("");
  const [solution, setSolution] = useState("");
  const [date, setDate] = useState(activeDate);

  useEffect(() => {
    if (initialData) {
      setSubject(initialData.subject || "Physics");

      // Error Log เก่าที่ไม่มีประเภท ให้จัดเป็น Other
      setErrorType(initialData.errorType || "other");

      setTopic(initialData.topic || "");
      setQuestionDesc(initialData.questionDesc || "");
      setWhyWrong(initialData.whyWrong || "");
      setSolution(initialData.solution || "");
      setDate(initialData.date || activeDate);
    } else {
      setSubject("Physics");

      // Error Log ใหม่ เริ่มต้นที่ Concept
      setErrorType("concept");

      setTopic("");
      setQuestionDesc("");
      setWhyWrong("");
      setSolution("");
      setDate(activeDate);
    }
  }, [initialData, activeDate, isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!topic.trim()) {
      alert("กรุณาระบุหัวข้อเรื่อง");
      return;
    }
    onSave({
      subject,
      errorType,
      topic,
      questionDesc,
      whyWrong,
      solution,
      date,
    });
    onClose();
  };

  return (
    <div className="modal-backdrop">
      <div
        className="modal-content animate-fade-in"
        style={{ maxWidth: "580px" }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: "20px",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <div
              style={{
                width: "36px",
                height: "36px",
                borderRadius: "var(--radius-md)",
                background: "#FEF2F2",
                color: "#DC2626",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <AlertCircle size={20} />
            </div>
            <div>
              <h3
                style={{
                  fontSize: "1.25rem",
                  fontWeight: 800,
                  color: "var(--text-main)",
                }}
              >
                {initialData
                  ? "แก้ไขบันทึก Error Log"
                  : "บันทึกข้อผิดลง Error Log"}
              </h3>
              <p style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}>
                เรียนรู้จากข้อผิดพลาด เปลี่ยนจุดอ่อนให้กลายเป็นคะแนนสอบ
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            style={{ color: "var(--text-muted)", padding: "6px" }}
          >
            <X size={20} />
          </button>
        </div>

        <form
          onSubmit={handleSubmit}
          style={{ display: "flex", flexDirection: "column", gap: "16px" }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "14px",
            }}
          >
            <div>
              <label
                style={{
                  display: "block",
                  fontSize: "0.85rem",
                  fontWeight: 600,
                  marginBottom: "6px",
                  color: "var(--text-main)",
                }}
              >
                วิชา
              </label>
              <select
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                style={{
                  width: "100%",
                  padding: "10px 12px",
                  borderRadius: "var(--radius-md)",
                  border: "1px solid var(--border-medium)",
                  background: "white",
                  fontSize: "0.9rem",
                }}
              >
                {SUBJECT_LIST.map((s) => (
                  <option key={s.code} value={s.code}>
                    {s.code} ({s.nameEn})
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label
                style={{
                  display: "block",
                  fontSize: "0.85rem",
                  fontWeight: 600,
                  marginBottom: "6px",
                  color: "var(--text-main)",
                }}
              >
                วันที่พบข้อผิด
              </label>
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                style={{
                  width: "100%",
                  padding: "9px 12px",
                  borderRadius: "var(--radius-md)",
                  border: "1px solid var(--border-medium)",
                  background: "white",
                  fontSize: "0.9rem",
                }}
              />
            </div>

            <div>
              <label
                style={{
                  display: "block",
                  fontSize: "0.85rem",
                  fontWeight: 600,
                  marginBottom: "6px",
                  color: "var(--text-main)",
                }}
              >
                ประเภทความผิด
              </label>

              <select
                value={errorType}
                onChange={(e) => setErrorType(e.target.value)}
                style={{
                  width: "100%",
                  padding: "10px 12px",
                  borderRadius: "var(--radius-md)",
                  border: "1px solid var(--border-medium)",
                  background: "white",
                  fontSize: "0.9rem",
                }}
              >
                {ERROR_TYPES.map((type) => (
                  <option key={type.id} value={type.id}>
                    {type.icon} {type.label} — {type.description}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label
              style={{
                display: "block",
                fontSize: "0.85rem",
                fontWeight: 600,
                marginBottom: "6px",
                color: "var(--text-main)",
              }}
            >
              หัวข้อ / เรื่อง (Topic) *
            </label>
            <input
              type="text"
              placeholder="เช่น Newton’s Laws, Probability, อนุกรมตัวเลข..."
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
              required
              style={{
                width: "100%",
                padding: "10px 12px",
                borderRadius: "var(--radius-md)",
                border: "1px solid var(--border-medium)",
                background: "white",
                fontSize: "0.9rem",
              }}
            />
          </div>

          <div>
            <label
              style={{
                display: "block",
                fontSize: "0.85rem",
                fontWeight: 600,
                marginBottom: "6px",
                color: "var(--text-main)",
              }}
            >
              ลักษณะโจทย์หรือคำถามที่ทำผิด
            </label>
            <textarea
              rows={2}
              placeholder="อธิบายโจทย์สั้นๆ เช่น โจทย์มวล 2 ก้อนบนพื้นเอียงถามหาแรงดึงเชือก..."
              value={questionDesc}
              onChange={(e) => setQuestionDesc(e.target.value)}
              style={{
                width: "100%",
                padding: "10px 12px",
                borderRadius: "var(--radius-md)",
                border: "1px solid var(--border-medium)",
                background: "white",
                fontSize: "0.9rem",
                resize: "vertical",
              }}
            />
          </div>

          <div>
            <label
              style={{
                display: "block",
                fontSize: "0.85rem",
                fontWeight: 600,
                marginBottom: "6px",
                color: "#DC2626",
              }}
            >
              ❌ ผิดเพราะอะไร? (สาเหตุที่พลาด)
            </label>
            <textarea
              rows={2}
              placeholder="เช่น ใส่แรงเสียดทานผิดทิศ, สับสนระหว่างตัวคูณกับตัวบวก, อ่านคำสั่งโจทย์ไม่ครบ..."
              value={whyWrong}
              onChange={(e) => setWhyWrong(e.target.value)}
              style={{
                width: "100%",
                padding: "10px 12px",
                borderRadius: "var(--radius-md)",
                border: "1px solid #FECACA",
                background: "#FEF2F2",
                fontSize: "0.9rem",
                resize: "vertical",
              }}
            />
          </div>

          <div>
            <label
              style={{
                display: "block",
                fontSize: "0.85rem",
                fontWeight: 600,
                marginBottom: "6px",
                color: "#059669",
              }}
            >
              ✅ วิธีแก้ / จุดที่ต้องจำ (Correct Approach)
            </label>
            <textarea
              rows={2}
              placeholder="เช่น วาด Free Body Diagram ก่อนแทนสูตรทุกครั้ง, แปลงหน่วยเป็น SI ก่อนเสมอ..."
              value={solution}
              onChange={(e) => setSolution(e.target.value)}
              style={{
                width: "100%",
                padding: "10px 12px",
                borderRadius: "var(--radius-md)",
                border: "1px solid #A7F3D0",
                background: "#ECFDF5",
                fontSize: "0.9rem",
                resize: "vertical",
              }}
            />
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              gap: "10px",
              marginTop: "10px",
            }}
          >
            <button type="button" onClick={onClose} className="btn-secondary">
              ยกเลิก
            </button>
            <button type="submit" className="btn-primary">
              <Save size={16} /> บันทึก Error Log
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
