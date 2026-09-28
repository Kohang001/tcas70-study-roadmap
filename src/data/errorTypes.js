export const ERROR_TYPES = [
  {
    id: "concept",
    label: "Concept",
    description: "ไม่เข้าใจหรือสับสนแนวคิดหลัก",
    icon: "🧠",
    color: "#7C3AED",
    background: "#F5F3FF",
  },
  {
    id: "formula",
    label: "Formula",
    description: "จำสูตรผิด เลือกสูตรผิด หรือใช้สูตรผิดเงื่อนไข",
    icon: "📐",
    color: "#2563EB",
    background: "#EFF6FF",
  },
  {
    id: "calculation",
    label: "Calculation",
    description: "คำนวณ เลข เครื่องหมาย หรือหน่วยผิด",
    icon: "🧮",
    color: "#EA580C",
    background: "#FFF7ED",
  },
  {
    id: "reading",
    label: "Reading",
    description: "อ่านโจทย์ไม่ครบ หรือตีความคำถามผิด",
    icon: "📖",
    color: "#059669",
    background: "#ECFDF5",
  },
  {
    id: "time",
    label: "Time",
    description: "ใช้เวลามากเกินไปหรือบริหารเวลาไม่ดี",
    icon: "⏱️",
    color: "#0891B2",
    background: "#ECFEFF",
  },
  {
    id: "careless",
    label: "Careless",
    description: "รู้วิธีทำแต่พลาดจากความไม่รอบคอบ",
    icon: "⚠️",
    color: "#DC2626",
    background: "#FEF2F2",
  },
  {
    id: "other",
    label: "Other",
    description: "สาเหตุอื่น ๆ",
    icon: "📝",
    color: "#64748B",
    background: "#F8FAFC",
  },
];

export function getErrorTypeMeta(errorType) {
  return (
    ERROR_TYPES.find((type) => type.id === errorType) ||
    ERROR_TYPES.find((type) => type.id === "other")
  );
}