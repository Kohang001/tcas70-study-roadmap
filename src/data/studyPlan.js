import { WEEK_PROFILES } from "./weekProfiles";
// Complete TCAS70 Study Roadmap Data from 28 Sep 2026 to 14 Mar 2027

export const MONTH_ROADMAP_META = [
  {
    id: "2026-09",
    year: 2026,
    month: 9,
    name: "กันยายน 2569",
    phase: "Phase 1: เริ่มต้นปูพื้นฐาน",
    target:
      "เริ่มต้นจัดตารางเรียน ปูพื้นฐาน TGAT1-3 และเปิดโจทย์ฟิสิกส์/คณิตศาสตร์บทแรก",
    ratios: [
      { name: "TGAT/TPAT3", percent: 65, color: "#7C3AED" },
      { name: "Math1", percent: 15, color: "#DC2626" },
      { name: "Physics", percent: 15, color: "#0284C7" },
      { name: "English", percent: 5, color: "#059669" },
    ],
  },
  {
    id: "2026-10",
    year: 2026,
    month: 10,
    name: "ตุลาคม 2569",
    phase: "Phase 1: เสริมทักษะ TGAT & TPAT3",
    target:
      "ปูพื้นฐาน TGAT/TPAT3 และเปิดพื้นฐาน Math/Physics (ฟังก์ชัน, กราฟการเคลื่อนที่, งานและพลังงาน)",
    ratios: [
      { name: "TGAT/TPAT3", percent: 65, color: "#7C3AED" },
      { name: "Math1", percent: 15, color: "#DC2626" },
      { name: "Physics", percent: 15, color: "#0284C7" },
      { name: "English", percent: 5, color: "#059669" },
    ],
  },
  {
    id: "2026-11",
    year: 2026,
    month: 11,
    name: "พฤศจิกายน 2569",
    phase: "Phase 2: ฝึกความเร็วและการมองภาพ",
    target:
      "เร่งสปีด TGAT/TPAT3 พร้อมขยายเนื้อหา Math1 (การนับ, ความน่าจะเป็น, ลิมิต) และฟิสิกส์ (โมเมนตัม, โพรเจกไทล์, ไฟฟ้า)",
    ratios: [
      { name: "TGAT/TPAT3", percent: 60, color: "#7C3AED" },
      { name: "Math1", percent: 20, color: "#DC2626" },
      { name: "Physics", percent: 15, color: "#0284C7" },
      { name: "English", percent: 5, color: "#059669" },
    ],
  },
  {
    id: "2026-12",
    year: 2026,
    month: 12,
    name: "ธันวาคม 2569",
    phase: "Phase 3: ตะลุยโจทย์จำลองเสมือนจริง",
    target:
      "เน้น 70% TGAT/TPAT3 ฝึกทำ Full Mock Exam จับเวลา 180 นาทีทุกสุดสัปดาห์ และคงเนื้อหา A-Level",
    ratios: [
      { name: "TGAT/TPAT3", percent: 70, color: "#7C3AED" },
      { name: "Math1", percent: 15, color: "#DC2626" },
      { name: "Physics", percent: 10, color: "#0284C7" },
      { name: "English", percent: 5, color: "#059669" },
    ],
  },
  {
    id: "2027-01",
    year: 2027,
    month: 1,
    name: "มกราคม 2570",
    phase: "Phase 4: โค้งสุดท้ายสู่สนาม TGAT/TPAT3",
    target:
      "สัปดาห์ 1-2 เน้นความแม่นยำและความเร็ว, สัปดาห์ก่อนสอบเน้น Error Log และสูตรสำคัญ สู่สอบจริง 30 ม.ค.",
    ratios: [
      { name: "TGAT/TPAT3", percent: 85, color: "#7C3AED" },
      { name: "A-Level Review", percent: 15, color: "#DC2626" },
    ],
  },
  {
    id: "2027-02",
    year: 2027,
    month: 2,
    name: "กุมภาพันธ์ 2570",
    phase: "Phase 5: A-Level Takeover!",
    target:
      "ทุ่มเท 100% สู่ A-Level! จบเนื้อหา Math1, Physics และฝึก Reading/Vocab ทุกวัน จบเนื้อหาให้ได้ก่อน 22 ก.พ.",
    ratios: [
      { name: "Math1", percent: 40, color: "#DC2626" },
      { name: "Physics", percent: 35, color: "#0284C7" },
      { name: "English", percent: 25, color: "#059669" },
    ],
  },
  {
    id: "2027-03",
    year: 2027,
    month: 3,
    name: "มีนาคม 2570",
    phase: "Phase 6: Past Paper Week & Final Review",
    target:
      "ทำข้อสอบเก่าย้อนหลัง 5 ปี (Past Papers), ทบทวนสูตรสรุป และเตรียมตัวสอบจริง A-Level 13-15 มี.ค.",
    ratios: [
      { name: "Math1", percent: 40, color: "#DC2626" },
      { name: "Physics", percent: 35, color: "#0284C7" },
      { name: "English", percent: 25, color: "#059669" },
    ],
  },
];

// Master list of daily schedules
export const DAILY_PLANS = [
  // ==========================================
  // PHASE 1: WEEK 1 (28 SEP - 4 OCT 2026)
  // ==========================================
  {
    date: "2026-09-28",
    dayOfWeek: "Monday",
    dayThai: "จันทร์",
    phase: "Phase 1: ปูพื้นฐาน TGAT/TPAT3 & Math/Physics",
    week: 1,
    focus: "เริ่มต้นเปิดพื้นฐาน Conversation และ Function",
    tasks: [
      {
        id: "2026-09-28-tgat1-conv",
        subject: "TGAT1",
        topic: "Conversation: Greeting & Basic Communication",
        duration: 60,
        type: "Concept & โจทย์",
        subtasks: [
          {
            id: "2026-09-28-tgat1-conv-1",
            title: "ทบทวนโครงสร้างบทสนทนาสถานการณ์เบื้องต้น",
          },
          {
            id: "2026-09-28-tgat1-conv-2",
            title: "ฝึกทำโจทย์ Situation & Response 15 ข้อ",
          },
          {
            id: "2026-09-28-tgat1-conv-3",
            title: "จดสำนวนและคำแสลงที่พบบ่อยลงสมุด",
          },
        ],
      },
      {
        id: "2026-09-28-math1-function",
        subject: "Math1",
        topic: "Function Basics (ความสัมพันธ์และฟังก์ชันพื้นฐาน)",
        duration: 60,
        type: "ทบทวน Concept",
        subtasks: [
          {
            id: "2026-09-28-math1-func-1",
            title: "อ่านทวนเรื่อง โดเมน และ เรนจ์ ของความสัมพันธ์",
          },
          {
            id: "2026-09-28-math1-func-2",
            title: "ฝึกหาโดเมนและเรนจ์แบบมีสแควร์รูทและเศษส่วน 5 ข้อ",
          },
          {
            id: "2026-09-28-math1-func-3",
            title: "สรุปรูปแบบฟังก์ชันหนึ่งต่อหนึ่ง และฟังก์ชันทั่วถึง",
          },
        ],
      },
    ],
  },
  {
    date: "2026-09-29",
    dayOfWeek: "Tuesday",
    dayThai: "อังคาร",
    phase: "Phase 1: ปูพื้นฐาน TGAT/TPAT3 & Math/Physics",
    week: 1,
    focus: "เน้น Numerical Reasoning และฟิสิกส์ Kinematics",
    tasks: [
      {
        id: "2026-09-29-tpat3-num",
        subject: "TPAT3",
        topic: "Numerical Reasoning (อัตราส่วนและร้อยละพื้นฐาน)",
        duration: 60,
        type: "ฝึกคำนวณเร็ว",
        subtasks: [
          {
            id: "2026-09-29-tpat3-num-1",
            title: "ทบทวนเทคนิคการตัดทอนเศษส่วนและคิดเลขในใจ",
          },
          {
            id: "2026-09-29-tpat3-num-2",
            title: "ทำโจทย์อัตราส่วนต่อเนื่องและกำไร-ขาดทุน 15 ข้อ",
          },
          {
            id: "2026-09-29-tpat3-num-3",
            title: "จดทริกลัดในการประมาณค่าตัวเลข",
          },
        ],
      },
      {
        id: "2026-09-29-physics-kinematics",
        subject: "Physics",
        topic: "Kinematics: ปริมาณการเคลื่อนที่แนวตรง",
        duration: 60,
        type: "Concept + โจทย์พื้นฐาน",
        subtasks: [
          {
            id: "2026-09-29-phy-kin-1",
            title:
              "ทบทวนความแตกต่างระหว่างระยะทางกับการกระจัด, อัตราเร็วกับความเร็ว",
          },
          {
            id: "2026-09-29-phy-kin-2",
            title: "สรุป 5 สูตรการเคลื่อนที่แนวเส้นตรงด้วยความเร่งคงที่",
          },
          {
            id: "2026-09-29-phy-kin-3",
            title: "ทำโจทย์แทนค่า 5 สูตรการเคลื่อนที่ 5 ข้อ",
          },
        ],
      },
    ],
  },
  {
    date: "2026-09-30",
    dayOfWeek: "Wednesday",
    dayThai: "พุธ",
    phase: "Phase 1: ปูพื้นฐาน TGAT/TPAT3 & Math/Physics",
    week: 1,
    focus: "ทักษะตัวเลขและภาษาของ TGAT2",
    tasks: [
      {
        id: "2026-09-30-tgat2-num",
        subject: "TGAT2",
        topic: "Numerical Reasoning (อนุกรมมิติเดียวและสองมิติ)",
        duration: 60,
        type: "มอง Pattern",
        subtasks: [
          {
            id: "2026-09-30-tgat2-num-1",
            title: "ฝึกมองผลต่างชั้นที่ 1 และ 2 ของอนุกรมตัวเลข",
          },
          {
            id: "2026-09-30-tgat2-num-2",
            title: "ทำโจทย์อนุกรมตัวเลข 20 ข้อ จับเวลา 20 นาที",
          },
          {
            id: "2026-09-30-tgat2-num-3",
            title: "บันทึก Pattern แปลกๆ ลง Error Log",
          },
        ],
      },
      {
        id: "2026-09-30-tgat2-verbal",
        subject: "TGAT2",
        topic: "Verbal Reasoning (การสรุปความและการใช้เหตุผลเชิงภาษา)",
        duration: 45,
        type: "วิเคราะห์ข้อความ",
        subtasks: [
          {
            id: "2026-09-30-tgat2-verb-1",
            title: "อ่านหลักการหาข้อสรุปที่สมเหตุสมผล (ไม่คิดไปเอง)",
          },
          {
            id: "2026-09-30-tgat2-verb-2",
            title: "ทำโจทย์สรุปความจากบทความสั้น 10 ข้อ",
          },
        ],
      },
    ],
  },
  {
    date: "2026-10-01",
    dayOfWeek: "Thursday",
    dayThai: "พฤหัสบดี",
    phase: "Phase 1: ปูพื้นฐาน TGAT/TPAT3 & Math/Physics",
    week: 1,
    focus: "มิติสัมพันธ์ TPAT3 และกราฟการเคลื่อนที่ฟิสิกส์",
    tasks: [
      {
        id: "2026-10-01-tpat3-spatial",
        subject: "TPAT3",
        topic: "Spatial Rotation & Folding (การหมุนรูปและพับกล่อง)",
        duration: 60,
        type: "ฝึกจินตนาการ 3D",
        subtasks: [
          {
            id: "2026-10-01-tpat3-spat-1",
            title: "ทำความเข้าใจหลักการหน้าตรงข้ามของลูกเต๋าคลี่",
          },
          {
            id: "2026-10-01-tpat3-spat-2",
            title: "ทำแบบฝึกหัดพับกล่องลูกบาศก์ 15 ข้อ",
          },
          {
            id: "2026-10-01-tpat3-spat-3",
            title: "ฝึกหมุนรูป 90 และ 180 องศาในใจ",
          },
        ],
      },
      {
        id: "2026-10-01-physics-graphs",
        subject: "Physics",
        topic: "Kinematics: กราฟ x-t, v-t, a-t",
        duration: 60,
        type: "วิเคราะห์กราฟ",
        subtasks: [
          {
            id: "2026-10-01-phy-grp-1",
            title: "จดจำความหมายของ ความชัน และ พื้นที่ใต้กราฟ ของทั้ง 3 กราฟ",
          },
          {
            id: "2026-10-01-phy-grp-2",
            title: "ฝึกแปลงกราฟจาก v-t ไปเป็น x-t และ a-t",
          },
          {
            id: "2026-10-01-phy-grp-3",
            title: "ทำโจทย์สอบเรื่องกราฟการเคลื่อนที่ 5 ข้อ",
          },
        ],
      },
    ],
  },
  {
    date: "2026-10-02",
    dayOfWeek: "Friday",
    dayThai: "ศุกร์",
    phase: "Phase 1: ปูพื้นฐาน TGAT/TPAT3 & Math/Physics",
    week: 1,
    focus: "ความเข้าใจ 4 สมรรถนะใน TGAT3",
    tasks: [
      {
        id: "2026-10-02-tgat3-intro",
        subject: "TGAT3",
        topic: "Introduction to 4 Competencies (ทำความเข้าใจกรอบประเมิน)",
        duration: 60,
        type: "วิเคราะห์สถานการณ์",
        subtasks: [
          {
            id: "2026-10-02-tgat3-1",
            title: "ทำความเข้าใจคะแนนเต็มและเกณฑ์ตอบแบบข้อสอบทัศนคติ",
          },
          { id: "2026-10-02-tgat3-2", title: "ทำโจทย์ชุดนำร่อง 20-30 ข้อ" },
          {
            id: "2026-10-02-tgat3-3",
            title: "วิเคราะห์ชอยส์ที่ตอบแล้วได้คะแนนสูงสุด vs หักคะแนน",
          },
        ],
      },
    ],
  },
  {
    date: "2026-10-03",
    dayOfWeek: "Saturday",
    dayThai: "เสาร์",
    phase: "Phase 1: ปูพื้นฐาน TGAT/TPAT3 & Math/Physics",
    week: 1,
    focus: "ฝึกเข้มข้น TGAT1 + TGAT2 + TPAT3 Numerical",
    tasks: [
      {
        id: "2026-10-03-tgat1-rev",
        subject: "TGAT1",
        topic: "Question-Response & Short Dialogue Practice",
        duration: 60,
        type: "Speed Drill",
        subtasks: [
          {
            id: "2026-10-03-tgat1-1",
            title: "ทำข้อสอบบทสนทนา 25 ข้อต่อเนื่อง",
          },
          { id: "2026-10-03-tgat1-2", title: "ตรวจและจดคำศัพท์ที่ไม่รู้" },
        ],
      },
      {
        id: "2026-10-03-tgat2-rev",
        subject: "TGAT2",
        topic: "Speed Drill: Number Series & Comparison",
        duration: 60,
        type: "ฝึกจับเวลา",
        subtasks: [
          {
            id: "2026-10-03-tgat2-1",
            title: "จับเวลาทำโจทย์ตัวเลข 25 ข้อ 25 นาที",
          },
          { id: "2026-10-03-tgat2-2", title: "เช็กความแม่นยำเทียบกับเวลา" },
        ],
      },
      {
        id: "2026-10-03-tpat3-num-rev",
        subject: "TPAT3",
        topic: "TPAT3 Numerical: Equations & Data Tables",
        duration: 60,
        type: "ทำโจทย์",
        subtasks: [
          {
            id: "2026-10-03-tpat3-1",
            title: "ฝึกอ่านค่าตารางและแผนภูมิแท่งเชิงวิศวกรรม",
          },
          {
            id: "2026-10-03-tpat3-2",
            title: "ทำโจทย์ปัญหาการคำนวณค่าไฟและอัตราไหล 5 ข้อ",
          },
          { id: "2026-10-03-tpat3-3", title: "บันทึกจุดที่ติดขัดลง Error Log" },
        ],
      },
    ],
  },
  {
    date: "2026-10-04",
    dayOfWeek: "Sunday",
    dayThai: "อาทิตย์",
    phase: "Phase 1: ปูพื้นฐาน TGAT/TPAT3 & Math/Physics",
    week: 1,
    focus: "A-Level Deep Dive: Math1, Physics & English Vocab",
    tasks: [
      {
        id: "2026-10-04-math1-deep",
        subject: "Math1",
        topic: "Function: Composite Function & Inverse Function",
        duration: 90,
        type: "ทำโจทย์เข้มข้น",
        subtasks: [
          {
            id: "2026-10-04-math1-1",
            title: "สรุปนิยาม f(g(x)) และเงื่อนไขการหาอินเวอร์ส",
          },
          {
            id: "2026-10-04-math1-2",
            title: "ทำโจทย์คอมโพสิทและอินเวอร์ส 10 ข้อ",
          },
          {
            id: "2026-10-04-math1-3",
            title: "ทำโจทย์ระดับข้อสอบเก่าคณิตประยุกต์ 3 ข้อ",
          },
        ],
      },
      {
        id: "2026-10-04-physics-deep",
        subject: "Physics",
        topic: "Kinematics: การเคลื่อนที่แนวดิ่งภายใต้แรงโน้มถ่วง (Free Fall)",
        duration: 90,
        type: "ทำโจทย์เข้มข้น",
        subtasks: [
          {
            id: "2026-10-04-phy-1",
            title: "สรุปเครื่องหมาย g (+/-) และจุดสูงสุด v=0",
          },
          {
            id: "2026-10-04-phy-2",
            title: "ทำโจทย์ปาวัตถุขึ้นจากหน้าผา 8 ข้อ",
          },
          { id: "2026-10-04-phy-3", title: "ทบทวนจุดผิดและวาดภาพประกอบทุกข้อ" },
        ],
      },
      {
        id: "2026-10-04-eng-vocab",
        subject: "English",
        topic: "Academic Vocabulary Building (Day 1)",
        duration: 30,
        type: "ท่องคำศัพท์",
        subtasks: [
          {
            id: "2026-10-04-eng-1",
            title: "ท่องศัพท์ Academic Word List 20 คำ",
          },
          {
            id: "2026-10-04-eng-2",
            title: "แต่งประโยคสั้นๆ 5 ประโยคจากคำศัพท์ใหม่",
          },
        ],
      },
    ],
  },

  // ==========================================
  // PHASE 1: WEEK 2 (5 - 11 OCT 2026)
  // ==========================================
  {
    date: "2026-10-05",
    dayOfWeek: "Monday",
    dayThai: "จันทร์",
    phase: "Phase 1: ปูพื้นฐาน TGAT/TPAT3 & Math/Physics",
    week: 2,
    focus: "TGAT1 Question-Response & Short Dialogue, Math Function",
    tasks: [
      {
        id: "2026-10-05-tgat1",
        subject: "TGAT1",
        topic: "Question-Response & Short Conversation (Speed Drill)",
        duration: 60,
        type: "โจทย์จับเวลา",
        subtasks: [
          {
            id: "2026-10-05-tgat1-1",
            title: "ทำข้อสอบ Question-Response 15 ข้อ",
          },
          {
            id: "2026-10-05-tgat1-2",
            title: "ทำ Short Conversation 3 สถานการณ์",
          },
          {
            id: "2026-10-05-tgat1-3",
            title: "สรุป Keyword แสดงความเห็นชอบ/ไม่เห็นชอบ",
          },
        ],
      },
      {
        id: "2026-10-05-math1",
        subject: "Math1",
        topic: "Function: ชนิดของฟังก์ชัน (เชิงเส้น, กำลังสอง, ค่าสัมบูรณ์)",
        duration: 60,
        type: "Concept + โจทย์",
        subtasks: [
          {
            id: "2026-10-05-math1-1",
            title: "ทบทวนจุดยอดพาราโบลา y = a(x-h)² + k",
          },
          {
            id: "2026-10-05-math1-2",
            title: "ทำโจทย์ประยุกต์ค่าสูงสุด-ต่ำสุดของฟังก์ชันกำลังสอง 6 ข้อ",
          },
        ],
      },
    ],
  },
  {
    date: "2026-10-06",
    dayOfWeek: "Tuesday",
    dayThai: "อังคาร",
    phase: "Phase 1: ปูพื้นฐาน TGAT/TPAT3 & Math/Physics",
    week: 2,
    focus: "TPAT3 Numerical (Ratio, %, Equations) & Physics Kinematics",
    tasks: [
      {
        id: "2026-10-06-tpat3",
        subject: "TPAT3",
        topic: "Numerical: Ratio, Percentage & Linear Equations",
        duration: 60,
        type: "คำนวณเร็ว",
        subtasks: [
          {
            id: "2026-10-06-tpat3-1",
            title: "ฝึกตั้งสมการจากโจทย์ปัญหาความเร็วและเวลา",
          },
          { id: "2026-10-06-tpat3-2", title: "ทำโจทย์ TPAT3 Numerical 12 ข้อ" },
        ],
      },
      {
        id: "2026-10-06-physics",
        subject: "Physics",
        topic: "Kinematics: โจทย์เคลื่อนที่สัมพัทธ์และความเร่งคงที่",
        duration: 60,
        type: "ทำโจทย์วิเคราะห์",
        subtasks: [
          { id: "2026-10-06-phy-1", title: "ฝึกโจทย์รถสองคันวิ่งไล่กวดกัน" },
          { id: "2026-10-06-phy-2", title: "ทำโจทย์สอบเข้า 5 ข้อ" },
        ],
      },
    ],
  },
  {
    date: "2026-10-07",
    dayOfWeek: "Wednesday",
    dayThai: "พุธ",
    phase: "Phase 1: ปูพื้นฐาน TGAT/TPAT3 & Math/Physics",
    week: 2,
    focus: "TGAT2 Number Series & Quantitative Comparison",
    tasks: [
      {
        id: "2026-10-07-tgat2",
        subject: "TGAT2",
        topic:
          "Number Series & Quantitative Comparison (เปรียบเทียบเชิงปริมาณ)",
        duration: 75,
        type: "เทคนิคตัดชอยส์",
        subtasks: [
          {
            id: "2026-10-07-tgat2-1",
            title:
              "ทำความเข้าใจหลักการตอบคอลัมน์ A vs B vs เท่ากัน vs สรุปไม่ได้",
          },
          {
            id: "2026-10-07-tgat2-2",
            title: "ทำโจทย์เปรียบเทียบเชิงปริมาณ 15 ข้อ",
          },
          {
            id: "2026-10-07-tgat2-3",
            title: "จดตัวแปรกับดัก (เช่น จำนวนจริงลบ หรือ 0)",
          },
        ],
      },
    ],
  },
  {
    date: "2026-10-08",
    dayOfWeek: "Thursday",
    dayThai: "พฤหัสบดี",
    phase: "Phase 1: ปูพื้นฐาน TGAT/TPAT3 & Math/Physics",
    week: 2,
    focus: "TPAT3 Spatial (Cube, Folding, Rotation) & Physics Motion Graphs",
    tasks: [
      {
        id: "2026-10-08-tpat3",
        subject: "TPAT3",
        topic: "Spatial: Cube, Folding & 3D Rotation",
        duration: 60,
        type: "ฝึกมองภาพ",
        subtasks: [
          {
            id: "2026-10-08-tpat3-1",
            title: "ทำโจทย์คลี่ลูกบาศก์ลายสัญลักษณ์ 10 ข้อ",
          },
          {
            id: "2026-10-08-tpat3-2",
            title: "ฝึกหมุนรูป 3 มิติในแกน X, Y, Z 10 ข้อ",
          },
        ],
      },
      {
        id: "2026-10-08-physics",
        subject: "Physics",
        topic: "Kinematics: Motion Graphs & Area Under Curve",
        duration: 60,
        type: "วิเคราะห์เชิงลึก",
        subtasks: [
          { id: "2026-10-08-phy-1", title: "ฝึกคำนวณงานและการกระจัดจากกราฟ" },
          { id: "2026-10-08-phy-2", title: "ทำข้อสอบเก่าเรื่องกราฟ 6 ข้อ" },
        ],
      },
    ],
  },
  {
    date: "2026-10-09",
    dayOfWeek: "Friday",
    dayThai: "ศุกร์",
    phase: "Phase 1: ปูพื้นฐาน TGAT/TPAT3 & Math/Physics",
    week: 2,
    focus: "TGAT3 Problem Solving & Emotional Management",
    tasks: [
      {
        id: "2026-10-09-tgat3",
        subject: "TGAT3",
        topic: "Complex Problem Solving & Emotional Management",
        duration: 60,
        type: "วิเคราะห์เคสกรณีศึกษา",
        subtasks: [
          {
            id: "2026-10-09-tgat3-1",
            title: "ศึกษาแนวคิดการควบคุมอารมณ์ในที่ทำงานและการสื่อสารเชิงบวก",
          },
          { id: "2026-10-09-tgat3-2", title: "ทำโจทย์สถานการณ์สมมติ 20 ข้อ" },
          {
            id: "2026-10-09-tgat3-3",
            title: "วิเคราะห์เหตุผลการให้คะแนนแต่ละตัวเลือก",
          },
        ],
      },
    ],
  },
  {
    date: "2026-10-10",
    dayOfWeek: "Saturday",
    dayThai: "เสาร์",
    phase: "Phase 1: ปูพื้นฐาน TGAT/TPAT3 & Math/Physics",
    week: 2,
    focus: "TGAT1 Text Completion/Reading & TGAT2 40 Questions",
    tasks: [
      {
        id: "2026-10-10-tgat1",
        subject: "TGAT1",
        topic: "Text Completion & Short Reading Comprehension",
        duration: 60,
        type: "อ่านจับใจความ",
        subtasks: [
          {
            id: "2026-10-10-tgat1-1",
            title: "ทำโจทย์ Text Completion 2 บทความ (10 ข้อ)",
          },
          {
            id: "2026-10-10-tgat1-2",
            title: "อ่านบทความสั้นและตอบคำถาม Main Idea",
          },
        ],
      },
      {
        id: "2026-10-10-tgat2",
        subject: "TGAT2",
        topic: "TGAT2 Comprehensive 40 Questions Set",
        duration: 75,
        type: "Mini Test จับเวลา",
        subtasks: [
          {
            id: "2026-10-10-tgat2-1",
            title: "ทำชุดข้อสอบ 40 ข้อ (ตัวเลข, ตรรกะ, มิติ)",
          },
          { id: "2026-10-10-tgat2-2", title: "ตรวจและสรุปสถิติคะแนน" },
        ],
      },
    ],
  },
  {
    date: "2026-10-11",
    dayOfWeek: "Sunday",
    dayThai: "อาทิตย์",
    phase: "Phase 1: ปูพื้นฐาน TGAT/TPAT3 & Math/Physics",
    week: 2,
    focus: "Math Function/Exponential & Physics Kinematics Problems",
    tasks: [
      {
        id: "2026-10-11-math1",
        subject: "Math1",
        topic: "Function Operations & Intro to Exponential",
        duration: 90,
        type: "ปูพื้นฐาน Expo",
        subtasks: [
          {
            id: "2026-10-11-math1-1",
            title: "ทบทวนสมบัติเลขยกกำลังและกราฟเอกซ์โพเนนเชียล",
          },
          {
            id: "2026-10-11-math1-2",
            title: "แก้สมการเอกซ์โพเนนเชียลฐานเท่ากัน 8 ข้อ",
          },
        ],
      },
      {
        id: "2026-10-11-physics",
        subject: "Physics",
        topic: "Kinematics: รวมโจทย์ประยุกต์สอบเข้ามหาวิทยาลัย",
        duration: 90,
        type: "ทำโจทย์สอบเข้า",
        subtasks: [
          {
            id: "2026-10-11-phy-1",
            title: "ทำโจทย์ข้อสอบเก่าย้อนหลังเรื่องการเคลื่อนที่ 8 ข้อ",
          },
          { id: "2026-10-11-phy-2", title: "สรุปจุดหลอกลงสมุด Error Log" },
        ],
      },
    ],
  },

  // ==========================================
  // PHASE 1: WEEK 3 (12 - 18 OCT 2026)
  // ==========================================
  {
    date: "2026-10-12",
    dayOfWeek: "Monday",
    dayThai: "จันทร์",
    phase: "Phase 1: ปูพื้นฐาน TGAT/TPAT3 & Math/Physics",
    week: 3,
    focus: "TGAT1 Long Conversation, Reading & Math Expo/Log",
    tasks: [
      {
        id: "2026-10-12-tgat1-long-conversation",
        subject: "TGAT1",
        topic: "Long Conversation & Reading Skills",
        duration: 60,
        type: "บทสนทนายาวและอ่านเร็ว",
        subtasks: [
          {
            id: "2026-10-12-tgat1-long-1",
            title: "อ่านบทสนทนาขนาดยาว (4-6 รอบการพูด) 3 ชุด",
          },
          {
            id: "2026-10-12-tgat1-long-2",
            title: "ฝึกเทคนิค Skimming หาหัวข้อหลักของเรื่อง",
          },
          {
            id: "2026-10-12-tgat1-long-3",
            title: "จดคำศัพท์ที่ไม่คุ้นเคย 15 คำ",
          },
        ],
      },
      {
        id: "2026-10-12-math1-expo-log",
        subject: "Math1",
        topic: "Exponential & Logarithm (สมบัติของ Logarithm)",
        duration: 60,
        type: "ทบทวนสูตรและสมบัติ",
        subtasks: [
          {
            id: "2026-10-12-math1-log-1",
            title: "ท่องจำและทำความเข้าใจ 10 สมบัติของลอการิทึม",
          },
          {
            id: "2026-10-12-math1-log-2",
            title: "ฝึกแปลงรูปเลขยกกำลังเป็น log และกลับกัน 10 ข้อ",
          },
          { id: "2026-10-12-math1-log-3", title: "แก้สมการ log พื้นฐาน 5 ข้อ" },
        ],
      },
    ],
  },
  {
    date: "2026-10-13",
    dayOfWeek: "Tuesday",
    dayThai: "อังคาร",
    phase: "Phase 1: ปูพื้นฐาน TGAT/TPAT3 & Math/Physics",
    week: 3,
    focus: "TPAT3 Mechanical (Force, Lever, Gear) & Physics Newton’s Laws",
    tasks: [
      {
        id: "2026-10-13-tpat3-mech",
        subject: "TPAT3",
        topic: "Mechanical: Force, Lever & Gear (คานและเฟือง)",
        duration: 60,
        type: "หลักการทางกลศาสตร์",
        subtasks: [
          {
            id: "2026-10-13-tpat3-mech-1",
            title: "สรุปคานอันดับ 1, 2, 3 และการได้เปรียบเชิงกล (MA)",
          },
          {
            id: "2026-10-13-tpat3-mech-2",
            title: "ฝึกหาทิศทางการหมุนและความเร็วรอบของเฟือง 8 ข้อ",
          },
        ],
      },
      {
        id: "2026-10-13-physics-newton",
        subject: "Physics",
        topic: "Newton’s Laws of Motion: กฎ 3 ข้อและ Free Body Diagram",
        duration: 60,
        type: "Concept + FBD",
        subtasks: [
          {
            id: "2026-10-13-phy-newton-1",
            title: "ทำความเข้าใจกฎข้อ 1, 2, 3 และแรงกิริยา-ปฏิกิริยา",
          },
          {
            id: "2026-10-13-phy-newton-2",
            title:
              "ฝึกวาด Free Body Diagram วัตถุบนพื้นเอียงและเชือกคล้อง 6 รูป",
          },
          {
            id: "2026-10-13-phy-newton-3",
            title: "ทำโจทย์แทนค่า ΣF = ma พื้นฐาน 5 ข้อ",
          },
        ],
      },
    ],
  },
  {
    date: "2026-10-14",
    dayOfWeek: "Wednesday",
    dayThai: "พุธ",
    phase: "Phase 1: ปูพื้นฐาน TGAT/TPAT3 & Math/Physics",
    week: 3,
    focus: "TGAT2 Logical Reasoning & Figure Series",
    tasks: [
      {
        id: "2026-10-14-tgat2-logic",
        subject: "TGAT2",
        topic: "Logical Reasoning & Figure Series (อนุกรมภาพ)",
        duration: 75,
        type: "ฝึกสังเกต Pattern ภาพ",
        subtasks: [
          {
            id: "2026-10-14-tgat2-fig-1",
            title: "ทบทวนรูปแบบการหมุน, การย้ายตำแหน่ง, การสลับสีของรูปภาพ",
          },
          { id: "2026-10-14-tgat2-fig-2", title: "ทำโจทย์อนุกรมภาพ 25 ข้อ" },
          {
            id: "2026-10-14-tgat2-fig-3",
            title:
              "ฝึกการสรุปความตรรกศาสตร์ (ถ้า...แล้ว, บางตัว/ทุกตัว) 10 ข้อ",
          },
        ],
      },
    ],
  },
  {
    date: "2026-10-15",
    dayOfWeek: "Thursday",
    dayThai: "พฤหัสบดี",
    phase: "Phase 1: ปูพื้นฐาน TGAT/TPAT3 & Math/Physics",
    week: 3,
    focus: "TPAT3 Spatial & Physics Free Body Diagram",
    tasks: [
      {
        id: "2026-10-15-tpat3-spatial",
        subject: "TPAT3",
        topic: "Spatial Reasoning: ภาพฉาย Orthographic (หน้า, บน, ข้าง)",
        duration: 60,
        type: "มองภาพฉาย",
        subtasks: [
          {
            id: "2026-10-15-tpat3-ortho-1",
            title: "ฝึกมองภาพชิ้นงานจากมุม Top, Front, Side",
          },
          {
            id: "2026-10-15-tpat3-ortho-2",
            title: "ทำโจทย์จับคู่ภาพฉายกับวัตถุ 3 มิติ 15 ข้อ",
          },
        ],
      },
      {
        id: "2026-10-15-physics-fbd",
        subject: "Physics",
        topic: "Newton’s Laws: แรงเสียดทานและระบบมวลหลายก้อน",
        duration: 60,
        type: "ทำโจทย์วิเคราะห์แรง",
        subtasks: [
          {
            id: "2026-10-15-phy-fbd-1",
            title: "ทบทวนความแตกต่าง แรงเสียดทานสถิต (fs) vs จลน์ (fk)",
          },
          {
            id: "2026-10-15-phy-fbd-2",
            title: "ทำโจทย์มวลผูกติดกันดึงด้วยแรงเดียว 5 ข้อ",
          },
          { id: "2026-10-15-phy-fbd-3", title: "บันทึกข้อผิดลง Error Log" },
        ],
      },
    ],
  },
  {
    date: "2026-10-16",
    dayOfWeek: "Friday",
    dayThai: "ศุกร์",
    phase: "Phase 1: ปูพื้นฐาน TGAT/TPAT3 & Math/Physics",
    week: 3,
    focus: "TGAT3 Innovation & Complex Problem Solving",
    tasks: [
      {
        id: "2026-10-16-tgat3-innov",
        subject: "TGAT3",
        topic: "Innovation & Complex Problem Solving Framework",
        duration: 60,
        type: "กระบวนการคิดเชิงนวัตกรรม",
        subtasks: [
          {
            id: "2026-10-16-tgat3-1",
            title:
              "ศึกษากระบวนการคิด 6 ขั้นตอน (Problem -> Info -> Solutions -> Action)",
          },
          {
            id: "2026-10-16-tgat3-2",
            title: "วิเคราะห์โจทย์ประเมินสมรรถนะนวัตกรรม 20 ข้อ",
          },
          {
            id: "2026-10-16-tgat3-3",
            title: "สรุป Keyword สำหรับการเลือกทางออกที่สร้างความยั่งยืน",
          },
        ],
      },
    ],
  },
  {
    date: "2026-10-17",
    dayOfWeek: "Saturday",
    dayThai: "เสาร์",
    phase: "Phase 1: ปูพื้นฐาน TGAT/TPAT3 & Math/Physics",
    week: 3,
    focus: "TGAT1 + TGAT2 Mixed Practice Set",
    tasks: [
      {
        id: "2026-10-17-tgat-mixed",
        subject: "TGAT1",
        topic: "TGAT1 Mixed Practice (Conversation + Reading)",
        duration: 60,
        type: "ชุดผสมจับเวลา",
        subtasks: [
          { id: "2026-10-17-tgat1-1", title: "ทำข้อสอบจำลอง TGAT1 30 ข้อ" },
          { id: "2026-10-17-tgat1-2", title: "ตรวจคำตอบและทบทวนข้อที่ลังเล" },
        ],
      },
      {
        id: "2026-10-17-tgat2-mixed",
        subject: "TGAT2",
        topic: "TGAT2 Mixed Practice (Numerical + Spatial + Logic)",
        duration: 60,
        type: "ชุดผสมจับเวลา",
        subtasks: [
          { id: "2026-10-17-tgat2-1", title: "ทำข้อสอบจำลอง TGAT2 30 ข้อ" },
          {
            id: "2026-10-17-tgat2-2",
            title: "จดบันทึกเวลาที่ใช้ต่อข้อเพื่อปรับปรุงความเร็ว",
          },
        ],
      },
    ],
  },
  {
    date: "2026-10-18",
    dayOfWeek: "Sunday",
    dayThai: "อาทิตย์",
    phase: "Phase 1: ปูพื้นฐาน TGAT/TPAT3 & Math/Physics",
    week: 3,
    focus: "Math Logarithm/Sequence & Physics Newton Problems",
    tasks: [
      {
        id: "2026-10-18-math1-seq",
        subject: "Math1",
        topic: "Logarithm Equations & Intro to Sequence",
        duration: 90,
        type: "โจทย์ลอการิทึมและลำดับ",
        subtasks: [
          {
            id: "2026-10-18-math-1",
            title: "ฝึกแก้อสมการลอการิทึม (ระวังฐานระหว่าง 0 ถึง 1)",
          },
          {
            id: "2026-10-18-math-2",
            title:
              "ทำความเข้าใจนิยาม ลำดับเลขคณิต (พจน์ทั่วไป an = a1 + (n-1)d)",
          },
          { id: "2026-10-18-math-3", title: "ทำโจทย์ประยุกต์ลำดับ 6 ข้อ" },
        ],
      },
      {
        id: "2026-10-18-physics-newton-prob",
        subject: "Physics",
        topic: "Newton’s Laws: โจทย์รอกและพื้นเอียงระดับข้อสอบจริง",
        duration: 90,
        type: "โจทย์ระดับข้อสอบ",
        subtasks: [
          {
            id: "2026-10-18-phy-1",
            title: "ทำโจทย์ระบบรอกเดี่ยวตายตัวและรอกเคลื่อนที่ 5 ข้อ",
          },
          {
            id: "2026-10-18-phy-2",
            title: "ทำโจทย์มวลต่อบนพื้นเอียงมีแรงเสียดทาน 5 ข้อ",
          },
          { id: "2026-10-18-phy-3", title: "วิเคราะห์ข้อผิดลง Error Log" },
        ],
      },
    ],
  },

  // ==========================================
  // PHASE 1: WEEK 4 (19 - 25 OCT 2026)
  // ==========================================
  {
    date: "2026-10-19",
    dayOfWeek: "Monday",
    dayThai: "จันทร์",
    phase: "Phase 1: ปูพื้นฐาน TGAT/TPAT3 & Math/Physics",
    week: 4,
    focus: "TGAT1 Reading & Math Sequence",
    tasks: [
      {
        id: "2026-10-19-tgat1",
        subject: "TGAT1",
        topic: "Reading Comprehension: Ads, News & Short Articles",
        duration: 60,
        type: "ฝึกอ่านเร็ว",
        subtasks: [
          { id: "2026-10-19-tgat1-1", title: "อ่านป้ายประกาศและโฆษณา 2 ชุด" },
          { id: "2026-10-19-tgat1-2", title: "อ่านข่าวสั้นและตอบคำถาม 5W1H" },
        ],
      },
      {
        id: "2026-10-19-math1",
        subject: "Math1",
        topic: "Sequence & Series: ลำดับเรขาคณิตและอนุกรมเลขคณิต",
        duration: 60,
        type: "Concept + สูตร",
        subtasks: [
          {
            id: "2026-10-19-math-1",
            title: "สรุปสูตร an = a1 * r^(n-1) และ Sn",
          },
          { id: "2026-10-19-math-2", title: "ทำโจทย์ลำดับเรขาคณิต 8 ข้อ" },
        ],
      },
    ],
  },
  {
    date: "2026-10-20",
    dayOfWeek: "Tuesday",
    dayThai: "อังคาร",
    phase: "Phase 1: ปูพื้นฐาน TGAT/TPAT3 & Math/Physics",
    week: 4,
    focus: "TPAT3 Mechanical & Physics Work/Energy",
    tasks: [
      {
        id: "2026-10-20-tpat3",
        subject: "TPAT3",
        topic: "Mechanical Reasoning: รอก, สายพาน และระบบส่งกำลัง",
        duration: 60,
        type: "กลไกเครื่องกล",
        subtasks: [
          { id: "2026-10-20-tpat-1", title: "วิเคราะห์ระบบรอกพวงและการทดแรง" },
          { id: "2026-10-20-tpat-2", title: "ทำโจทย์ระบบกลไก 10 ข้อ" },
        ],
      },
      {
        id: "2026-10-20-physics",
        subject: "Physics",
        topic: "Work, Energy & Power: งานจากแรงคงที่และพลังงานจลน์/ศักย์",
        duration: 60,
        type: "ปูพื้นฐานงาน-พลังงาน",
        subtasks: [
          {
            id: "2026-10-20-phy-1",
            title: "ทบทวนสูตร W = F*s*cos(θ), Ek = 1/2mv², Ep = mgh",
          },
          { id: "2026-10-20-phy-2", title: "ทำโจทย์งานและกำลัง 6 ข้อ" },
        ],
      },
    ],
  },
  {
    date: "2026-10-21",
    dayOfWeek: "Wednesday",
    dayThai: "พุธ",
    phase: "Phase 1: ปูพื้นฐาน TGAT/TPAT3 & Math/Physics",
    week: 4,
    focus: "TGAT2 Spatial & Logical Reasoning",
    tasks: [
      {
        id: "2026-10-21-tgat2",
        subject: "TGAT2",
        topic: "Spatial (หมุน/พับ 2D-3D) + Logical Deduction",
        duration: 75,
        type: "ฝึกทำโจทย์รวดเร็ว",
        subtasks: [
          { id: "2026-10-21-tgat-1", title: "ทำโจทย์มิติสัมพันธ์ 15 ข้อ" },
          {
            id: "2026-10-21-tgat-2",
            title: "ทำโจทย์ตรรกศาสตร์เชิงเงื่อนไข 15 ข้อ",
          },
        ],
      },
    ],
  },
  {
    date: "2026-10-22",
    dayOfWeek: "Thursday",
    dayThai: "พฤหัสบดี",
    phase: "Phase 1: ปูพื้นฐาน TGAT/TPAT3 & Math/Physics",
    week: 4,
    focus: "TPAT3 Scientific & Engineering Thinking",
    tasks: [
      {
        id: "2026-10-22-tpat3",
        subject: "TPAT3",
        topic: "Engineering Design Process (EDP) & Scientific Method",
        duration: 75,
        type: "กระบวนการออกแบบวิศวกรรม",
        subtasks: [
          {
            id: "2026-10-22-tpat-1",
            title: "สรุป 6 ขั้นตอนของกระบวนการออกแบบเชิงวิศวกรรม",
          },
          {
            id: "2026-10-22-tpat-2",
            title: "ทำโจทย์วิเคราะห์การทดลองและตัวแปรต้น-ตาม-ควบคุม 15 ข้อ",
          },
        ],
      },
    ],
  },
  {
    date: "2026-10-23",
    dayOfWeek: "Friday",
    dayThai: "ศุกร์",
    phase: "Phase 1: ปูพื้นฐาน TGAT/TPAT3 & Math/Physics",
    week: 4,
    focus: "TGAT3 Timed Practice",
    tasks: [
      {
        id: "2026-10-23-tgat3",
        subject: "TGAT3",
        topic: "TGAT3 Timed Practice (40 ข้อ 45 นาที)",
        duration: 60,
        type: "จับเวลาเสมือนจริง",
        subtasks: [
          { id: "2026-10-23-tgat-1", title: "ทำแบบทดสอบจับเวลา 40 ข้อ" },
          {
            id: "2026-10-23-tgat-2",
            title: "วิเคราะห์จุดที่เลือกตอบตัวเลือกที่ได้คะแนนรอง",
          },
        ],
      },
    ],
  },
  {
    date: "2026-10-24",
    dayOfWeek: "Saturday",
    dayThai: "เสาร์",
    phase: "Phase 1: ปูพื้นฐาน TGAT/TPAT3 & Math/Physics",
    week: 4,
    focus: "TPAT3 Mixed Practice Set",
    tasks: [
      {
        id: "2026-10-24-tpat3-mixed",
        subject: "TPAT3",
        topic: "TPAT3 Mixed Practice (Numerical + Spatial + Mechanical)",
        duration: 90,
        type: "ฝึกรวมบท",
        subtasks: [
          {
            id: "2026-10-24-tpat-1",
            title: "ทำชุดข้อสอบรวมความถนัดวิทย์ 35 ข้อ",
          },
          { id: "2026-10-24-tpat-2", title: "เช็กความเร็วและการคิดเลขเร็ว" },
        ],
      },
    ],
  },
  {
    date: "2026-10-25",
    dayOfWeek: "Sunday",
    dayThai: "อาทิตย์",
    phase: "Phase 1: ปูพื้นฐาน TGAT/TPAT3 & Math/Physics",
    week: 4,
    focus: "Math Statistics & Physics Work/Energy",
    tasks: [
      {
        id: "2026-10-25-math1",
        subject: "Math1",
        topic: "Statistics: ค่ากลางข้อมูล (ค่าเฉลี่ย, มัธยฐาน, ฐานนิยม)",
        duration: 90,
        type: "High-Yield Topic",
        subtasks: [
          {
            id: "2026-10-25-math-1",
            title: "ทบทวนการหาค่าเฉลี่ยแบบถ่วงน้ำหนักและข้อมูลแจกแจงความถี่",
          },
          { id: "2026-10-25-math-2", title: "ทำโจทย์ค่ากลางสถิติ 10 ข้อ" },
        ],
      },
      {
        id: "2026-10-25-physics",
        subject: "Physics",
        topic: "Work & Energy: กฎอนุรักษ์พลังงานกล (Conservation of Energy)",
        duration: 90,
        type: "โจทย์อนุรักษ์พลังงาน",
        subtasks: [
          {
            id: "2026-10-25-phy-1",
            title: "ทบทวน E1 + W_other = E2 (สปริง, ความสูง, ความเร็ว)",
          },
          {
            id: "2026-10-25-phy-2",
            title: "ทำโจทย์อนุรักษ์พลังงานติดสปริงและแรงเสียดทาน 8 ข้อ",
          },
        ],
      },
    ],
  },

  // ==========================================
  // PHASE 1: WEEK 5 (26 - 31 OCT 2026)
  // ==========================================
  {
    date: "2026-10-26",
    dayOfWeek: "Monday",
    dayThai: "จันทร์",
    phase: "Phase 1: Mini Mock & Review",
    week: 5,
    focus: "TGAT1 Mini Mock Exam",
    tasks: [
      {
        id: "2026-10-26-tgat1-mock",
        subject: "TGAT1",
        topic: "TGAT1 Mini Mock (30 ข้อ 30 นาที)",
        duration: 60,
        type: "Mini Mock",
        subtasks: [
          { id: "2026-10-26-mock-1", title: "ทำ Mini Mock ข้อสอบเสมือนจริง" },
          {
            id: "2026-10-26-mock-2",
            title: "วิเคราะห์จุดอ่อนเรื่องสำนวนและบริบท",
          },
        ],
      },
    ],
  },
  {
    date: "2026-10-27",
    dayOfWeek: "Tuesday",
    dayThai: "อังคาร",
    phase: "Phase 1: Mini Mock & Review",
    week: 5,
    focus: "TPAT3 Numerical + Spatial Timed",
    tasks: [
      {
        id: "2026-10-27-tpat3-timed",
        subject: "TPAT3",
        topic: "TPAT3 Numerical & Spatial Timed Set",
        duration: 75,
        type: "จับเวลาเน้นความเร็ว",
        subtasks: [
          {
            id: "2026-10-27-tpat-1",
            title: "ทำชุดตัวเลขและมิติสัมพันธ์ 25 ข้อ 30 นาที",
          },
          { id: "2026-10-27-tpat-2", title: "ตรวจข้อผิดและลง Error Log" },
        ],
      },
    ],
  },
  {
    date: "2026-10-28",
    dayOfWeek: "Wednesday",
    dayThai: "พุธ",
    phase: "Phase 1: Mini Mock & Review",
    week: 5,
    focus: "TGAT2 Mini Mock Exam",
    tasks: [
      {
        id: "2026-10-28-tgat2-mock",
        subject: "TGAT2",
        topic: "TGAT2 Mini Mock (40 ข้อ 40 นาที)",
        duration: 60,
        type: "Mini Mock",
        subtasks: [
          { id: "2026-10-28-mock-1", title: "ทำ Mini Mock TGAT2 ครบทุกพาร์ต" },
          {
            id: "2026-10-28-mock-2",
            title: "คำนวณคะแนนประเมินเทียบเป้าหมาย 75+",
          },
        ],
      },
    ],
  },
  {
    date: "2026-10-29",
    dayOfWeek: "Thursday",
    dayThai: "พฤหัสบดี",
    phase: "Phase 1: Mini Mock & Review",
    week: 5,
    focus: "TPAT3 Mechanical Mini Test",
    tasks: [
      {
        id: "2026-10-29-tpat3-mech-test",
        subject: "TPAT3",
        topic: "TPAT3 Mechanical Reasoning Mini Test",
        duration: 60,
        type: "Mini Test",
        subtasks: [
          {
            id: "2026-10-29-mech-1",
            title: "ทำโจทย์กลศาสตร์ คาน รอก เฟือง วงจรไฟฟ้า 20 ข้อ",
          },
          { id: "2026-10-29-mech-2", title: "ทบทวนจุดที่มองทิศทางผิด" },
        ],
      },
    ],
  },
  {
    date: "2026-10-30",
    dayOfWeek: "Friday",
    dayThai: "ศุกร์",
    phase: "Phase 1: Mini Mock & Review",
    week: 5,
    focus: "TGAT3 Mini Mock",
    tasks: [
      {
        id: "2026-10-30-tgat3-mock",
        subject: "TGAT3",
        topic: "TGAT3 Mini Mock: สถานการณ์จำลองยุคใหม่",
        duration: 60,
        type: "Mini Mock",
        subtasks: [
          { id: "2026-10-30-mock-1", title: "ทำโจทย์สมรรถนะการทำงาน 30 ข้อ" },
          { id: "2026-10-30-mock-2", title: "สรุป Pattern ชอยส์ยอดนิยม" },
        ],
      },
    ],
  },
  {
    date: "2026-10-31",
    dayOfWeek: "Saturday",
    dayThai: "เสาร์",
    phase: "Phase 1: Mini Mock & Review",
    week: 5,
    focus: "TGAT Mixed Mock & Phase 1 Review",
    tasks: [
      {
        id: "2026-10-31-tgat-full",
        subject: "TGAT2",
        topic: "TGAT Combined Mock (TGAT1 + TGAT2 + TGAT3)",
        duration: 90,
        type: "Combined Mock",
        subtasks: [
          { id: "2026-10-31-mock-1", title: "ทำชุดข้อสอบรวม TGAT จำลองเวลา" },
          { id: "2026-10-31-mock-2", title: "ทบทวนสรุปคะแนนประจำเดือนตุลาคม" },
        ],
      },
      {
        id: "2026-10-31-physics-momentum-intro",
        subject: "Physics",
        topic: "Momentum & Collision: กฎอนุรักษ์โมเมนตัมเบื้องต้น",
        duration: 60,
        type: "เตรียมขึ้นเรื่องใหม่",
        subtasks: [
          { id: "2026-10-31-phy-1", title: "ทบทวนสูตร p = mv และการดล I = Δp" },
          { id: "2026-10-31-phy-2", title: "ทำโจทย์การชนพื้นฐาน 4 ข้อ" },
        ],
      },
    ],
  },

  // ==========================================
  // NOVEMBER 2026 (PHASE 2)
  // Main focus: TGAT/TPAT3 60%, Math/Physics/English 40%
  // ==========================================
  {
    date: "2026-11-01",
    dayOfWeek: "Sunday",
    dayThai: "อาทิตย์",
    phase: "Phase 2: พฤศจิกายน - เร่งสปีดโจทย์ & เจาะ A-Level",
    week: 6,
    focus: "Math Counting & Probability / Physics Momentum",
    tasks: [
      {
        id: "2026-11-01-math1",
        subject: "Math1",
        topic: "Counting Principles (กฎการบวก การคูณ แฟกทอเรียล)",
        duration: 90,
        type: "High-Yield Core",
        subtasks: [
          {
            id: "2026-11-01-m-1",
            title: "สรุปการเรียงสับเปลี่ยน P(n,r) และจัดหมู่ C(n,r)",
          },
          { id: "2026-11-01-m-2", title: "ทำโจทย์จัดแถวและจัดวงกลม 8 ข้อ" },
        ],
      },
      {
        id: "2026-11-01-physics",
        subject: "Physics",
        topic: "Momentum & Collision (การชนแบบยืดหยุ่นและไม่ยืดหยุ่น)",
        duration: 90,
        type: "ทำโจทย์ข้อสอบ",
        subtasks: [
          {
            id: "2026-11-01-p-1",
            title: "ทำโจทย์อนุรักษ์โมเมนตัมใน 1 มิติ 6 ข้อ",
          },
          {
            id: "2026-11-01-p-2",
            title: "จด Error Log เรื่องเครื่องหมายความเร็ว",
          },
        ],
      },
    ],
  },
  {
    date: "2026-11-02",
    dayOfWeek: "Monday",
    dayThai: "จันทร์",
    phase: "Phase 2: พฤศจิกายน",
    week: 6,
    focus: "TGAT1 Conversation & Math Counting",
    tasks: [
      {
        id: "2026-11-02-tgat1",
        subject: "TGAT1",
        topic: "Conversation: Idioms & Academic Situations",
        duration: 60,
        type: "Speed Drill",
        subtasks: [
          {
            id: "2026-11-02-t1-1",
            title: "จดสำนวนภาษาอังกฤษในข้อสอบ 20 สำนวน",
          },
          { id: "2026-11-02-t1-2", title: "ทำข้อสอบ Conversation 20 ข้อ" },
        ],
      },
      {
        id: "2026-11-02-math1",
        subject: "Math1",
        topic: "Counting: โจทย์สิ่งของเหมือน/ต่างกัน",
        duration: 60,
        type: "ทำโจทย์",
        subtasks: [
          {
            id: "2026-11-02-m-1",
            title: "ฝึกโจทย์แจกของเหมือน และ Stars & Bars",
          },
          { id: "2026-11-02-m-2", title: "ทำโจทย์ 8 ข้อ" },
        ],
      },
    ],
  },
  {
    date: "2026-11-03",
    dayOfWeek: "Tuesday",
    dayThai: "อังคาร",
    phase: "Phase 2: พฤศจิกายน",
    week: 6,
    focus: "TPAT3 Numerical & Physics Momentum",
    tasks: [
      {
        id: "2026-11-03-tpat3",
        subject: "TPAT3",
        topic: "Numerical: Word Problems & Percent Change",
        duration: 60,
        type: "โจทย์ปัญหาคำนวณ",
        subtasks: [
          {
            id: "2026-11-03-tp-1",
            title: "ทำโจทย์ปัญหาการเจือจางและการผสมสารละลาย 8 ข้อ",
          },
          { id: "2026-11-03-tp-2", title: "ฝึกคิดเลขเร็ว 15 นาที" },
        ],
      },
      {
        id: "2026-11-03-physics",
        subject: "Physics",
        topic: "Momentum: การระเบิดและการชน 2 มิติ",
        duration: 60,
        type: "ทำโจทย์",
        subtasks: [
          { id: "2026-11-03-ph-1", title: "ฝึกแตกเวกเตอร์โมเมนตัมแกน X และ Y" },
          { id: "2026-11-03-ph-2", title: "ทำโจทย์ 5 ข้อ" },
        ],
      },
    ],
  },
  {
    date: "2026-11-09",
    dayOfWeek: "Monday",
    dayThai: "จันทร์",
    phase: "Phase 2: พฤศจิกายน",
    week: 7,
    focus: "TGAT1 Reading & Math Probability",
    tasks: [
      {
        id: "2026-11-09-tgat1",
        subject: "TGAT1",
        topic: "Reading Comprehension: Long Articles & Graphs",
        duration: 60,
        type: "บทความยาว",
        subtasks: [
          { id: "2026-11-09-t1-1", title: "ฝึก Skimming & Scanning 3 บทความ" },
          {
            id: "2026-11-09-t1-2",
            title: "ตอบคำถามจับใจความและคำศัพท์ในบริบท",
          },
        ],
      },
      {
        id: "2026-11-09-math1",
        subject: "Math1",
        topic: "Probability: ความน่าจะเป็นและการแจกแจงทวินาม",
        duration: 60,
        type: "โจทย์ความน่าจะเป็น",
        subtasks: [
          {
            id: "2026-11-09-m-1",
            title: "ทบทวน P(E) = n(E)/n(S) และกฎความน่าจะเป็นมีเงื่อนไข",
          },
          { id: "2026-11-09-m-2", title: "ทำโจทย์ข้อสอบเก่า 6 ข้อ" },
        ],
      },
    ],
  },
  {
    date: "2026-11-10",
    dayOfWeek: "Tuesday",
    dayThai: "อังคาร",
    phase: "Phase 2: พฤศจิกายน",
    week: 7,
    focus: "TPAT3 Numerical & Physics Projectile",
    tasks: [
      {
        id: "2026-11-10-tpat3",
        subject: "TPAT3",
        topic: "Numerical: Data Interpretation & Table Analysis",
        duration: 60,
        type: "วิเคราะห์ตาราง",
        subtasks: [
          { id: "2026-11-10-tp-1", title: "ฝึกอ่านค่าตารางหลายตัวแปร 10 ข้อ" },
        ],
      },
      {
        id: "2026-11-10-physics",
        subject: "Physics",
        topic: "Projectile Motion: การเคลื่อนที่วิถีโค้ง",
        duration: 60,
        type: "แยกแกนคิด",
        subtasks: [
          {
            id: "2026-11-10-ph-1",
            title: "สรุปการเคลื่อนที่แยกแกน X (vx คงที่) และ Y (ความเร่ง g)",
          },
          {
            id: "2026-11-10-ph-2",
            title: "ทำโจทย์ยิงมุมเงยและยิงแนวระดับ 6 ข้อ",
          },
        ],
      },
    ],
  },
  {
    date: "2026-11-16",
    dayOfWeek: "Monday",
    dayThai: "จันทร์",
    phase: "Phase 2: พฤศจิกายน",
    week: 8,
    focus: "TGAT1 & Math Limit (Calculus)",
    tasks: [
      {
        id: "2026-11-16-tgat1",
        subject: "TGAT1",
        topic: "TGAT1 Speed Test (30 ข้อ 30 นาที)",
        duration: 60,
        type: "จับเวลา",
        subtasks: [
          { id: "2026-11-16-t1-1", title: "ทำ Speed Test และตรวจจุดตัดชอยส์" },
        ],
      },
      {
        id: "2026-11-16-math1",
        subject: "Math1",
        topic: "Calculus: ลิมิตและความต่อเนื่องของฟังก์ชัน",
        duration: 60,
        type: "เปิดแคลคูลัส",
        subtasks: [
          {
            id: "2026-11-16-m-1",
            title: "ฝึกจัดรูป 0/0 โดยการแยกตัวประกอบและสังยุค",
          },
          { id: "2026-11-16-m-2", title: "ทำโจทย์ลิมิต 10 ข้อ" },
        ],
      },
    ],
  },
  {
    date: "2026-11-17",
    dayOfWeek: "Tuesday",
    dayThai: "อังคาร",
    phase: "Phase 2: พฤศจิกายน",
    week: 8,
    focus: "TPAT3 Mechanical & Physics Circular Motion",
    tasks: [
      {
        id: "2026-11-17-tpat3",
        subject: "TPAT3",
        topic: "Mechanical: ระบบของไหล ความดัน และหลักการแบร์นูลลี",
        duration: 60,
        type: "ของไหลเชิงวิศวกรรม",
        subtasks: [
          {
            id: "2026-11-17-tp-1",
            title: "ทำความเข้าใจความดัน P = ρgh และสมการความต่อเนื่อง",
          },
        ],
      },
      {
        id: "2026-11-17-physics",
        subject: "Physics",
        topic: "Circular Motion: การเคลื่อนที่แบบวงกลม",
        duration: 60,
        type: "แรงสู่ศูนย์กลาง",
        subtasks: [
          {
            id: "2026-11-17-ph-1",
            title: "สรุปสูตร Fc = mv²/r และการเลี้ยวโค้งของรถ",
          },
          {
            id: "2026-11-17-ph-2",
            title: "ทำโจทย์แกว่งกรวยกลมและดาวเทียม 6 ข้อ",
          },
        ],
      },
    ],
  },
  {
    date: "2026-11-23",
    dayOfWeek: "Monday",
    dayThai: "จันทร์",
    phase: "Phase 2: พฤศจิกายน",
    week: 9,
    focus: "TGAT1 Timed & Math Derivative",
    tasks: [
      {
        id: "2026-11-23-tgat1",
        subject: "TGAT1",
        topic: "Timed Text Completion & Situational Vocabulary",
        duration: 60,
        type: "ฝึกจำลองเวลา",
        subtasks: [
          {
            id: "2026-11-23-t1-1",
            title: "ทำโจทย์เติมคำและเช็กไวยากรณ์ 25 ข้อ",
          },
        ],
      },
      {
        id: "2026-11-23-math1",
        subject: "Math1",
        topic: "Calculus: อนุพันธ์ของฟังก์ชัน (Derivative) & กฎลูกโซ่",
        duration: 60,
        type: "ดิฟฟังก์ชัน",
        subtasks: [
          {
            id: "2026-11-23-m-1",
            title: "ฝึกดิฟผลคูณ ผลหาร และฟังก์ชันประกอบ f(g(x))",
          },
          { id: "2026-11-23-m-2", title: "ทำโจทย์ 10 ข้อ" },
        ],
      },
    ],
  },
  {
    date: "2026-11-24",
    dayOfWeek: "Tuesday",
    dayThai: "อังคาร",
    phase: "Phase 2: พฤศจิกายน",
    week: 9,
    focus: "TPAT3 Numerical Timed & Physics Electricity",
    tasks: [
      {
        id: "2026-11-24-tpat3",
        subject: "TPAT3",
        topic: "TPAT3 Numerical Timed Section",
        duration: 60,
        type: "โจทย์จับเวลา",
        subtasks: [
          { id: "2026-11-24-tp-1", title: "ทำโจทย์ตัวเลข 20 ข้อ 25 นาที" },
        ],
      },
      {
        id: "2026-11-24-physics",
        subject: "Physics",
        topic: "Current Electricity: วงจรตัวต้านทานและกฎของโอห์ม",
        duration: 60,
        type: "วงจรไฟฟ้า",
        subtasks: [
          {
            id: "2026-11-24-ph-1",
            title: "สรุปการต่อตัวต้านทานอนุกรม/ขนาน และบริดจ์สมดุล",
          },
          {
            id: "2026-11-24-ph-2",
            title: "ทำโจทย์หากระแสไฟฟ้ารวมและความต่างศักย์ 6 ข้อ",
          },
        ],
      },
    ],
  },
  {
    date: "2026-11-28",
    dayOfWeek: "Saturday",
    dayThai: "เสาร์",
    phase: "Phase 2: พฤศจิกายน",
    week: 9,
    focus: "TGAT Full Section Simulation",
    tasks: [
      {
        id: "2026-11-28-tgat-mock",
        subject: "TGAT2",
        topic: "TGAT Mock Examination (Full Timed Simulation)",
        duration: 120,
        type: "Full Mock Exam",
        subtasks: [
          { id: "2026-11-28-m-1", title: "ทำข้อสอบจำลองจับเวลาเสมือนจริง" },
          { id: "2026-11-28-m-2", title: "วิเคราะห์คะแนนและจุดอ่อนรายพาร์ต" },
        ],
      },
    ],
  },

  // ==========================================
  // DECEMBER 2026 (PHASE 3)
  // Main goal: 70% TGAT/TPAT3 practice + Full Mock exams on weekends
  // ==========================================
  {
    date: "2026-12-01",
    dayOfWeek: "Tuesday",
    dayThai: "อังคาร",
    phase: "Phase 3: ธันวาคม - Full Mock & ตะลุยโจทย์ 70%",
    week: 10,
    focus: "TPAT3 Numerical + Spatial & Physics Electricity",
    tasks: [
      {
        id: "2026-12-01-tpat3",
        subject: "TPAT3",
        topic: "Numerical & Spatial Reasoning: High-Speed Drills",
        duration: 75,
        type: "เน้นความเร็ว",
        subtasks: [
          { id: "2026-12-01-tp-1", title: "ทำโจทย์มิติสัมพันธ์ 15 ข้อ" },
          { id: "2026-12-01-tp-2", title: "ทำโจทย์คำนวณเร็ว 15 ข้อ" },
        ],
      },
      {
        id: "2026-12-01-physics",
        subject: "Physics",
        topic: "Current Electricity: กฎเคอร์ชอฟฟ์และวงจรหลายลูป",
        duration: 60,
        type: "ทำโจทย์วงจร",
        subtasks: [
          {
            id: "2026-12-01-ph-1",
            title: "ฝึกตั้งสมการ Kirchhoff ΣI=0 และ ΣV=0",
          },
          { id: "2026-12-01-ph-2", title: "ทำโจทย์ 4 ข้อ" },
        ],
      },
    ],
  },
  {
    date: "2026-12-05",
    dayOfWeek: "Saturday",
    dayThai: "เสาร์",
    phase: "Phase 3: ธันวาคม",
    week: 10,
    focus: "TPAT3 Full 180-minute Mock Exam",
    tasks: [
      {
        id: "2026-12-05-tpat3-mock",
        subject: "TPAT3",
        topic: "TPAT3 Full Mock Exam (180 นาที 70 ข้อ)",
        duration: 180,
        type: "Full Mock Exam",
        subtasks: [
          {
            id: "2026-12-05-tp-1",
            title: "จำลองบรรยากาศสอบจริง 180 นาทีไม่ลุกไปไหน",
          },
          { id: "2026-12-05-tp-2", title: "ตรวจคำตอบและจดคะแนน" },
          {
            id: "2026-12-05-tp-3",
            title: "บันทึกข้อผิดลง Error Log อย่างละเอียด",
          },
        ],
      },
    ],
  },
  {
    date: "2026-12-06",
    dayOfWeek: "Sunday",
    dayThai: "อาทิตย์",
    phase: "Phase 3: ธันวาคม",
    week: 10,
    focus: "TGAT Full Mock Exam",
    tasks: [
      {
        id: "2026-12-06-tgat-mock",
        subject: "TGAT1",
        topic: "TGAT Full Mock Exam (TGAT1 + TGAT2 + TGAT3)",
        duration: 180,
        type: "Full Mock Exam",
        subtasks: [
          {
            id: "2026-12-06-tg-1",
            title: "ทำข้อสอบจำลอง TGAT 200 ข้อ จับเวลารวม",
          },
          { id: "2026-12-06-tg-2", title: "วิเคราะห์ผลคะแนนรายพาร์ต" },
        ],
      },
    ],
  },
  {
    date: "2026-12-12",
    dayOfWeek: "Saturday",
    dayThai: "เสาร์",
    phase: "Phase 3: ธันวาคม",
    week: 11,
    focus: "TPAT3 Mock Exam & Section Analysis",
    tasks: [
      {
        id: "2026-12-12-tpat3-mock",
        subject: "TPAT3",
        topic: "TPAT3 Full Mock #2 (180 นาที)",
        duration: 180,
        type: "Full Mock Exam",
        subtasks: [
          { id: "2026-12-12-tp-1", title: "ทำข้อสอบชุดจำลองชุดที่ 2" },
          {
            id: "2026-12-12-tp-2",
            title: "วิเคราะห์สถิติความแม่นยำเทียบกับชุดแรก",
          },
        ],
      },
    ],
  },
  {
    date: "2026-12-13",
    dayOfWeek: "Sunday",
    dayThai: "อาทิตย์",
    phase: "Phase 3: ธันวาคม",
    week: 11,
    focus: "TGAT Full Mock #2",
    tasks: [
      {
        id: "2026-12-13-tgat-mock",
        subject: "TGAT2",
        topic: "TGAT Full Mock #2 (วิเคราะห์คะแนนเปรียบเทียบ)",
        duration: 180,
        type: "Full Mock Exam",
        subtasks: [
          { id: "2026-12-13-tg-1", title: "ทำข้อสอบจำลองชุดที่ 2" },
          { id: "2026-12-13-tg-2", title: "จดจุดผิดลงสมุด Error Log" },
        ],
      },
    ],
  },
  {
    date: "2026-12-19",
    dayOfWeek: "Saturday",
    dayThai: "เสาร์",
    phase: "Phase 3: ธันวาคม",
    week: 12,
    focus: "Full Mock Exam: TPAT3 Mock #3",
    tasks: [
      {
        id: "2026-12-19-tpat3-mock",
        subject: "TPAT3",
        topic: "TPAT3 Simulation #3: Speed & Strategy",
        duration: 180,
        type: "Full Mock Exam",
        subtasks: [
          {
            id: "2026-12-19-tp-1",
            title: "ฝึกเทคนิคการข้ามข้อที่ยากเกิน 2 นาที",
          },
          { id: "2026-12-19-tp-2", title: "สรุปบทเรียนและข้อสอบ" },
        ],
      },
    ],
  },
  {
    date: "2026-12-20",
    dayOfWeek: "Sunday",
    dayThai: "อาทิตย์",
    phase: "Phase 3: ธันวาคม",
    week: 12,
    focus: "Full Mock Exam: TGAT Mock #3",
    tasks: [
      {
        id: "2026-12-20-tgat-mock",
        subject: "TGAT3",
        topic: "TGAT Simulation #3: Master of Time",
        duration: 180,
        type: "Full Mock Exam",
        subtasks: [
          { id: "2026-12-20-tg-1", title: "ทำชุดข้อสอบ TGAT ชุดที่ 3" },
          { id: "2026-12-20-tg-2", title: "ทบทวนคำศัพท์และสำนวนใหม่" },
        ],
      },
    ],
  },
  {
    date: "2026-12-28",
    dayOfWeek: "Monday",
    dayThai: "จันทร์",
    phase: "Phase 3: ธันวาคม",
    week: 13,
    focus: "Fix Weak Areas: TGAT1 & Math Maintenance",
    tasks: [
      {
        id: "2026-12-28-tgat1",
        subject: "TGAT1",
        topic: "TGAT1 Weak Point Drill: Text Completion",
        duration: 60,
        type: "ซ่อมจุดอ่อน",
        subtasks: [
          { id: "2026-12-28-t1-1", title: "ทำโจทย์เติมคำ 20 ข้อ" },
          { id: "2026-12-28-t1-2", title: "ทบทวน Grammar Clues" },
        ],
      },
      {
        id: "2026-12-28-math1",
        subject: "Math1",
        topic: "Math Maintenance: แคลคูลัสและสถิติ 10 ข้อ",
        duration: 45,
        type: "บำรุงเนื้อหา A-Level",
        subtasks: [
          {
            id: "2026-12-28-m-1",
            title: "ทำโจทย์คณิตศาสตร์ 10 ข้อเพื่อไม่ให้ลืมเนื้อหา",
          },
        ],
      },
    ],
  },

  // ==========================================
  // JANUARY 1 - 16, 2027 (PHASE 4: PART 1)
  // TGAT/TPAT3 = 80%, Week 1: Accuracy, Week 2: Speed
  // ==========================================
  {
    date: "2027-01-04",
    dayOfWeek: "Monday",
    dayThai: "จันทร์",
    phase: "Phase 4: มกราคม - สปรินต์สู่สนามจริง TGAT/TPAT3",
    week: 14,
    focus: "Week 1: Accuracy (เน้นความแม่นยำ ไม่พลาดข้อหมู)",
    tasks: [
      {
        id: "2027-01-04-tgat1",
        subject: "TGAT1",
        topic: "TGAT1 Full Section & Error Analysis",
        duration: 75,
        type: "Full Section",
        subtasks: [
          { id: "2027-01-04-t1-1", title: "ทำข้อสอบ TGAT1 ครบ 60 ข้อ" },
          { id: "2027-01-04-t1-2", title: "วิเคราะห์ข้อผิดทันทีหลังตรวจ" },
        ],
      },
      {
        id: "2027-01-04-math1",
        subject: "Math1",
        topic: "Math Maintenance: ทบทวนสูตรสถิติและลำดับ",
        duration: 35,
        type: "บำรุงเนื้อหา",
        subtasks: [
          {
            id: "2027-01-04-m-1",
            title: "ทวนสูตรสถิติ 15 นาที + ทำโจทย์ 5 ข้อ",
          },
        ],
      },
    ],
  },
  {
    date: "2027-01-05",
    dayOfWeek: "Tuesday",
    dayThai: "อังคาร",
    phase: "Phase 4: มกราคม",
    week: 14,
    focus: "TPAT3 Numerical & Spatial Accuracy",
    tasks: [
      {
        id: "2027-01-05-tpat3-num",
        subject: "TPAT3",
        topic: "TPAT3 Numerical: ซ่อมจุดคำนวณผิดซ้ำ",
        duration: 60,
        type: "เน้นความแม่นยำ",
        subtasks: [
          {
            id: "2027-01-05-tp-1",
            title: "ทำโจทย์ตัวเลข 15 ข้อ ตรวจทานคำตอบทุกข้อ",
          },
        ],
      },
      {
        id: "2027-01-05-tpat3-spat",
        subject: "TPAT3",
        topic: "TPAT3 Spatial: คลี่กล่องและมองมุมตัด",
        duration: 60,
        type: "มิติสัมพันธ์",
        subtasks: [
          { id: "2027-01-05-sp-1", title: "ทำโจทย์ภาพคลี่ลูกบาศก์ 15 ข้อ" },
        ],
      },
    ],
  },
  {
    date: "2027-01-09",
    dayOfWeek: "Saturday",
    dayThai: "เสาร์",
    phase: "Phase 4: มกราคม",
    week: 14,
    focus: "TPAT3 Full Mock 180 min (Accuracy Test)",
    tasks: [
      {
        id: "2027-01-09-tpat3-mock",
        subject: "TPAT3",
        topic: "TPAT3 Full Mock Exam (180 นาที)",
        duration: 180,
        type: "Full Mock Exam",
        subtasks: [
          {
            id: "2027-01-09-tp-1",
            title: "ทำข้อสอบจำลอง TPAT3 70 ข้อ 180 นาที",
          },
          { id: "2027-01-09-tp-2", title: "จดข้อผิดลง Error Log" },
        ],
      },
    ],
  },
  {
    date: "2027-01-10",
    dayOfWeek: "Sunday",
    dayThai: "อาทิตย์",
    phase: "Phase 4: มกราคม",
    week: 14,
    focus: "TGAT Full Mock Exam",
    tasks: [
      {
        id: "2027-01-10-tgat-mock",
        subject: "TGAT2",
        topic: "TGAT Full Mock Exam (เสมือนจริง 100%)",
        duration: 180,
        type: "Full Mock Exam",
        subtasks: [
          { id: "2027-01-10-tg-1", title: "ทำข้อสอบจำลองครบทุกส่วน" },
          { id: "2027-01-10-tg-2", title: "วิเคราะห์ภาพรวมคะแนน" },
        ],
      },
    ],
  },
  {
    date: "2027-01-11",
    dayOfWeek: "Monday",
    dayThai: "จันทร์",
    phase: "Phase 4: มกราคม",
    week: 15,
    focus: "Week 2: Speed (ฝึกความเร็วและการตัดชอยส์)",
    tasks: [
      {
        id: "2027-01-11-tgat1",
        subject: "TGAT1",
        topic: "TGAT1 Speed Sprint (60 ข้อ 50 นาที)",
        duration: 60,
        type: "Speed Sprint",
        subtasks: [
          {
            id: "2027-01-11-t1-1",
            title: "ฝึกทำเร็วขึ้น 10 นาทีเพื่อมีเวลาตรวจทาน",
          },
          { id: "2027-01-11-t1-2", title: "ทบทวนข้อที่ตัดชอยส์ไม่ขาด" },
        ],
      },
    ],
  },
  {
    date: "2027-01-16",
    dayOfWeek: "Saturday",
    dayThai: "เสาร์",
    phase: "Phase 4: มกราคม",
    week: 15,
    focus: "TPAT3 Full Mock (Speed & Stamina)",
    tasks: [
      {
        id: "2027-01-16-tpat3-mock",
        subject: "TPAT3",
        topic: "TPAT3 Full Mock Exam (Final Full Length)",
        duration: 180,
        type: "Full Mock Exam",
        subtasks: [
          {
            id: "2027-01-16-tp-1",
            title: "ทำข้อสอบฉบับเต็มฉบับสุดท้ายก่อนสอบ",
          },
          {
            id: "2027-01-16-tp-2",
            title: "ประเมินจุดที่บริหารเวลาได้ดีและจุดที่ช้า",
          },
        ],
      },
    ],
  },

  // ==========================================
  // JANUARY 17 - 29, 2027 (PHASE 4: PART 2)
  // TGAT/TPAT3 = 90%, Reduce full mocks, short sets, Error Log, Sleep!
  // ==========================================
  {
    date: "2027-01-18",
    dayOfWeek: "Monday",
    dayThai: "จันทร์",
    phase: "Phase 4: โค้งสุดท้ายก่อนสอบ 2 สัปดาห์",
    week: 16,
    focus: "TGAT1 Short Sets & Error Log Review",
    tasks: [
      {
        id: "2027-01-18-tgat1",
        subject: "TGAT1",
        topic: "TGAT1 Error Log Review & Short Sets",
        duration: 60,
        type: "ทบทวนจุดพลาด",
        subtasks: [
          {
            id: "2027-01-18-t1-1",
            title: "เปิด Error Log ทบทวนคำศัพท์และสำนวนที่เคยผิด",
          },
          { id: "2027-01-18-t1-2", title: "ทำโจทย์สั้น 15 ข้อ" },
        ],
      },
    ],
  },
  {
    date: "2027-01-19",
    dayOfWeek: "Tuesday",
    dayThai: "อังคาร",
    phase: "Phase 4: โค้งสุดท้ายก่อนสอบ 2 สัปดาห์",
    week: 16,
    focus: "TPAT3 Numerical/Spatial Short Sets",
    tasks: [
      {
        id: "2027-01-19-tpat3",
        subject: "TPAT3",
        topic: "TPAT3 Short Sets: Formula & Quick Calculation",
        duration: 60,
        type: "ทบทวนสูตร",
        subtasks: [
          {
            id: "2027-01-19-tp-1",
            title: "ทบทวนสูตรคาน รอก เฟือง และการได้เปรียบเชิงกล",
          },
          { id: "2027-01-19-tp-2", title: "ทำโจทย์ตัวเลข 10 ข้อ" },
        ],
      },
    ],
  },
  {
    date: "2027-01-25",
    dayOfWeek: "Monday",
    dayThai: "จันทร์",
    phase: "Phase 4: สัปดาห์แห่งการสอบ (Final Week)",
    week: 17,
    focus: "Short Sets, Formulas, Error Log & Rest (ลดการทำ Mock เต็มชุด)",
    tasks: [
      {
        id: "2027-01-25-tgat",
        subject: "TGAT2",
        topic: "TGAT Light Practice & Pattern Recognition",
        duration: 45,
        type: "ทบทวนเบาๆ",
        subtasks: [
          { id: "2027-01-25-t-1", title: "มอง Pattern อนุกรมและภาพ 15 ข้อ" },
          { id: "2027-01-25-t-2", title: "อ่านทวนโจทย์ตรรกศาสตร์สั้นๆ" },
        ],
      },
    ],
  },
  {
    date: "2027-01-26",
    dayOfWeek: "Tuesday",
    dayThai: "อังคาร",
    phase: "Phase 4: สัปดาห์แห่งการสอบ (Final Week)",
    week: 17,
    focus: "TPAT3 Formula Recap & Confidence",
    tasks: [
      {
        id: "2027-01-26-tpat3",
        subject: "TPAT3",
        topic: "TPAT3 Mechanical & Engineering Awareness Recap",
        duration: 45,
        type: "สรุปประเด็น",
        subtasks: [
          {
            id: "2027-01-26-tp-1",
            title: "ทบทวนประเด็นเทคโนโลยีและสิ่งแวดล้อมปัจจุบัน",
          },
          { id: "2027-01-26-tp-2", title: "ทวนสูตรฟิสิกส์เชิงกล" },
        ],
      },
    ],
  },
  {
    date: "2027-01-27",
    dayOfWeek: "Wednesday",
    dayThai: "พุธ",
    phase: "Phase 4: สัปดาห์แห่งการสอบ (Final Week)",
    week: 17,
    focus: "TGAT3 Mindset & Decision Tree",
    tasks: [
      {
        id: "2027-01-27-tgat3",
        subject: "TGAT3",
        topic: "TGAT3 Mindset Refresh: 6-Step Decision Making",
        duration: 40,
        type: "ทวน Mindset",
        subtasks: [
          {
            id: "2027-01-27-t3-1",
            title: "ทบทวนหลักการเลือกตอบเชิงบวกและสร้างคุณค่า",
          },
        ],
      },
    ],
  },
  {
    date: "2027-01-28",
    dayOfWeek: "Thursday",
    dayThai: "พฤหัสบดี",
    phase: "Phase 4: สัปดาห์แห่งการสอบ (Final Week)",
    week: 17,
    focus: "Error Log Final Review (เปิดดูเฉพาะจุดที่เคยผิด)",
    tasks: [
      {
        id: "2027-01-28-error-log",
        subject: "TGAT1",
        topic: "Master Error Log Review (จุดระวังก่อนลงสนาม)",
        duration: 40,
        type: "อ่านสรุปข้อผิด",
        subtasks: [
          {
            id: "2027-01-28-err-1",
            title: "เปิดอ่าน Error Log ทุกวิชาที่จดไว้",
          },
          { id: "2027-01-28-err-2", title: "ย้ำเตือนตัวเองในจุดที่เคยสะเพร่า" },
        ],
      },
    ],
  },
  {
    date: "2027-01-29",
    dayOfWeek: "Friday",
    dayThai: "ศุกร์",
    phase: "Phase 4: วันก่อนสอบ 1 วัน",
    week: 17,
    focus: "Only Light Review — No Full Mock — พักผ่อนและเตรียมอุปกรณ์สอบ",
    tasks: [
      {
        id: "2027-01-29-light-review",
        subject: "TPAT3",
        topic: "Light Review Only: ผ่อนคลายสมองและตรวจเช็กอุปกรณ์",
        duration: 30,
        type: "เตรียมตัวสอบ",
        subtasks: [
          {
            id: "2027-01-29-prep-1",
            title: "ทบทวนสูตรสำคัญเบาๆ ไม่เกิน 30 นาที",
          },
          {
            id: "2027-01-29-prep-2",
            title: "ตรวจเช็กบัตรประชาชน ปากกา ดินสอ 2B ยางลบ กบเหลา",
          },
          {
            id: "2027-01-29-prep-3",
            title: "ตั้งนาฬิกาปลุก และเข้านอนก่อน 22:00 น.",
          },
        ],
      },
    ],
  },

  // ==========================================
  // JANUARY 30, 2027 (EXAM DAY: TGAT & TPAT3)
  // No study tasks scheduled! Special Exam Day screen!
  // ==========================================
  {
    date: "2027-01-30",
    dayOfWeek: "Saturday",
    dayThai: "เสาร์",
    isExamDay: true,
    examType: "TGAT & TPAT3",
    phase: "EXAM DAY: สนามสอบ TGAT & TPAT3",
    week: 17,
    focus: "วันสอบจริง! มั่นใจในทุกความพยายามที่ผ่านมา ทำให้เต็มที่",
    tasks: [], // No study tasks on Exam Day!
  },

  // ==========================================
  // JANUARY 31 - FEBRUARY 14, 2027 (PHASE 5: PART 1)
  // A-Level Takeover!
  // Math1 = 40%, Physics = 35%, English = 25%
  // TGAT/TPAT3 automatically disappear from schedules!
  // ==========================================
  {
    date: "2027-01-31",
    dayOfWeek: "Sunday",
    dayThai: "อาทิตย์",
    phase: "Phase 5: A-Level Takeover!",
    week: 18,
    focus: "Kick-off A-Level: Physics & English",
    tasks: [
      {
        id: "2027-01-31-physics",
        subject: "Physics",
        topic: "Kinematics & Newton’s Laws: รวมโจทย์ A-Level ฟิสิกส์กลศาสตร์",
        duration: 90,
        type: "A-Level Deep Dive",
        subtasks: [
          {
            id: "2027-01-31-p-1",
            title: "ทบทวนและทำข้อสอบฟิสิกส์กลศาสตร์ 15 ข้อ",
          },
          { id: "2027-01-31-p-2", title: "บันทึกสูตรและมุมมอง FBD ลงสมุด" },
        ],
      },
      {
        id: "2027-01-31-english",
        subject: "English",
        topic: "A-Level English: Reading Comprehension Techniques",
        duration: 45,
        type: "Reading & Vocab",
        subtasks: [
          { id: "2027-01-31-e-1", title: "ท่องศัพท์ A-Level 20 คำ" },
          {
            id: "2027-01-31-e-2",
            title: "ฝึกทำโจทย์ Reading Passage ขนาดยาว 2 เรื่อง",
          },
        ],
      },
    ],
  },
  {
    date: "2027-02-01",
    dayOfWeek: "Monday",
    dayThai: "จันทร์",
    phase: "Phase 5: A-Level Takeover!",
    week: 18,
    focus: "Math 2h & English 45m (Week 1 Topics)",
    tasks: [
      {
        id: "2027-02-01-math1",
        subject: "Math1",
        topic: "Function & Expo/Log: โจทย์ระดับข้อสอบ A-Level",
        duration: 120,
        type: "โจทย์เข้มข้น",
        subtasks: [
          {
            id: "2027-02-01-m-1",
            title: "ทำโจทย์ประยุกต์ฟังก์ชันและเอกซ์โพเนนเชียล 12 ข้อ",
          },
          { id: "2027-02-01-m-2", title: "จดเทคนิคตัดชอยส์และจัดรูปอสมการ" },
        ],
      },
      {
        id: "2027-02-01-english",
        subject: "English",
        topic: "Vocabulary & Text Completion Practice",
        duration: 45,
        type: "ท่องศัพท์และเติมคำ",
        subtasks: [
          {
            id: "2027-02-01-e-1",
            title: "ท่องศัพท์หมวด Science & Society 20 คำ",
          },
          { id: "2027-02-01-e-2", title: "ทำโจทย์ Text Completion 1 บทความ" },
        ],
      },
    ],
  },
  {
    date: "2027-02-02",
    dayOfWeek: "Tuesday",
    dayThai: "อังคาร",
    phase: "Phase 5: A-Level Takeover!",
    week: 18,
    focus: "Physics 2h & English 45m",
    tasks: [
      {
        id: "2027-02-02-physics",
        subject: "Physics",
        topic: "Energy, Momentum & Projectile Motion",
        duration: 120,
        type: "กลศาสตร์ประยุกต์",
        subtasks: [
          {
            id: "2027-02-02-p-1",
            title: "ทำโจทย์รวมกฎอนุรักษ์พลังงานและการชน 10 ข้อ",
          },
          { id: "2027-02-02-p-2", title: "ทำโจทย์โพรเจกไทล์บนพื้นเอียง 4 ข้อ" },
        ],
      },
      {
        id: "2027-02-02-english",
        subject: "English",
        topic: "A-Level Conversation & Situational Dialogue",
        duration: 45,
        type: "สนทนาวิชาการ",
        subtasks: [{ id: "2027-02-02-e-1", title: "ทำโจทย์ Dialogues 15 ข้อ" }],
      },
    ],
  },
  {
    date: "2027-02-03",
    dayOfWeek: "Wednesday",
    dayThai: "พุธ",
    phase: "Phase 5: A-Level Takeover!",
    week: 18,
    focus: "Math 2 - 2.5h (Sequence, Counting & Probability)",
    tasks: [
      {
        id: "2027-02-03-math1",
        subject: "Math1",
        topic: "Sequence, Series & Probability Deep Dive",
        duration: 150,
        type: "ทำโจทย์ข้อสอบจริง",
        subtasks: [
          {
            id: "2027-02-03-m-1",
            title: "ทำโจทย์อนุกรมอนันต์และโจทย์ดอกเบี้ยทบต้น 6 ข้อ",
          },
          {
            id: "2027-02-03-m-2",
            title: "ทำโจทย์ความน่าจะเป็นและการนับ 8 ข้อ",
          },
        ],
      },
    ],
  },
  {
    date: "2027-02-04",
    dayOfWeek: "Thursday",
    dayThai: "พฤหัสบดี",
    phase: "Phase 5: A-Level Takeover!",
    week: 18,
    focus: "Physics 2 - 2.5h (Equilibrium & Circular Motion)",
    tasks: [
      {
        id: "2027-02-04-physics",
        subject: "Physics",
        topic: "Equilibrium (สมดุลกล) & Circular Motion",
        duration: 150,
        type: "ทำโจทย์สมดุลและโมเมนต์",
        subtasks: [
          {
            id: "2027-02-04-p-1",
            title: "สรุปสมดุลต่อการหมุน ΣM = 0 และการเลื่อนที่",
          },
          { id: "2027-02-04-p-2", title: "ทำโจทย์คาน บันได และล้อ 8 ข้อ" },
        ],
      },
    ],
  },
  {
    date: "2027-02-05",
    dayOfWeek: "Friday",
    dayThai: "ศุกร์",
    phase: "Phase 5: A-Level Takeover!",
    week: 18,
    focus: "English 90m & Math/Physics Weak Point 60m",
    tasks: [
      {
        id: "2027-02-05-english",
        subject: "English",
        topic: "A-Level Reading Comprehension Intensive",
        duration: 90,
        type: "ทำ Passage ยาว",
        subtasks: [
          {
            id: "2027-02-05-e-1",
            title: "ทำข้อสอบ Reading A-Level 3 Passage ยาว",
          },
          {
            id: "2027-02-05-e-2",
            title: "วิเคราะห์ Tone และ Author’s Purpose",
          },
        ],
      },
      {
        id: "2027-02-05-weakpoint",
        subject: "Math1",
        topic: "Math/Physics Weak Point Drill",
        duration: 60,
        type: "ซ่อมจุดอ่อน",
        subtasks: [
          {
            id: "2027-02-05-w-1",
            title: "หยิบข้อที่เคยทำผิดในสัปดาห์นี้มาทำซ้ำให้ถูก",
          },
        ],
      },
    ],
  },
  {
    date: "2027-02-06",
    dayOfWeek: "Saturday",
    dayThai: "เสาร์",
    phase: "Phase 5: A-Level Takeover!",
    week: 18,
    focus: "Math 3h & English 1.5h",
    tasks: [
      {
        id: "2027-02-06-math1",
        subject: "Math1",
        topic: "Calculus Intensive: Limit, Derivative & Application",
        duration: 180,
        type: "แคลคูลัสเข้มข้น",
        subtasks: [
          {
            id: "2027-02-06-m-1",
            title: "ทำโจทย์อนุพันธ์ประยุกต์ค่าสูงสุด-ต่ำสุด 8 ข้อ",
          },
          {
            id: "2027-02-06-m-2",
            title: "ทำโจทย์ปริพันธ์ (Integration) หาพื้นที่ใต้กราฟ 6 ข้อ",
          },
        ],
      },
      {
        id: "2027-02-06-english",
        subject: "English",
        topic: "Paragraph Organization & Context Clues",
        duration: 90,
        type: "การจัดลำดับย่อหน้า",
        subtasks: [
          {
            id: "2027-02-06-e-1",
            title: "ฝึกทำโจทย์เรียงประโยค 5 ข้อ (เก็บเทคนิคหา Topic Sentence)",
          },
          { id: "2027-02-06-e-2", title: "ท่องศัพท์ 20 คำ" },
        ],
      },
    ],
  },
  {
    date: "2027-02-07",
    dayOfWeek: "Sunday",
    dayThai: "อาทิตย์",
    phase: "Phase 5: A-Level Takeover!",
    week: 18,
    focus: "Physics 3h & English 1.5h",
    tasks: [
      {
        id: "2027-02-07-physics",
        subject: "Physics",
        topic: "SHM, Current Electricity & Electrostatics",
        duration: 180,
        type: "ไฟฟ้าและคลื่นสั่น",
        subtasks: [
          {
            id: "2027-02-07-p-1",
            title: "สรุปสูตร SHM ลูกตุ้ม (T=2π√(L/g)) และสปริง (T=2π√(m/k))",
          },
          {
            id: "2027-02-07-p-2",
            title: "ทำโจทย์ไฟฟ้าสถิต แรงคูลอมบ์ และศักย์ไฟฟ้า 8 ข้อ",
          },
          { id: "2027-02-07-p-3", title: "ทำโจทย์วงจรไฟฟ้ากระแสตรง 6 ข้อ" },
        ],
      },
      {
        id: "2027-02-07-english",
        subject: "English",
        topic: "Vocabulary & Grammar Based on Mistakes",
        duration: 90,
        type: "ไวยากรณ์และศัพท์",
        subtasks: [
          {
            id: "2027-02-07-e-1",
            title: "ทบทวน Grammar จุดที่มักโดนหลอก (Subject-Verb, Participle)",
          },
          { id: "2027-02-07-e-2", title: "ทำแบบฝึกหัด 20 ข้อ" },
        ],
      },
    ],
  },
  {
    date: "2027-02-08",
    dayOfWeek: "Monday",
    dayThai: "จันทร์",
    phase: "Phase 5: A-Level Takeover!",
    week: 19,
    focus: "Math Statistics & Random Variables / English",
    tasks: [
      {
        id: "2027-02-08-math1",
        subject: "Math1",
        topic: "Statistics & Random Variables (ตัวแปรสุ่มและการแจกแจงปกติ)",
        duration: 120,
        type: "High-Yield Core",
        subtasks: [
          {
            id: "2027-02-08-m-1",
            title: "ทบทวนการเปิดตารางค่า Z และการแจกแจงทวินาม",
          },
          { id: "2027-02-08-m-2", title: "ทำโจทย์สถิติข้อสอบจริง 10 ข้อ" },
        ],
      },
      {
        id: "2027-02-08-english",
        subject: "English",
        topic: "A-Level Vocabulary 20 words + Reading Passages",
        duration: 45,
        type: "ศัพท์และการอ่าน",
        subtasks: [
          { id: "2027-02-08-e-1", title: "ท่องศัพท์ประจำวัน 20 คำ" },
          { id: "2027-02-08-e-2", title: "อ่านบทความสั้นและตอบคำถาม 1 ชุด" },
        ],
      },
    ],
  },

  // ==========================================
  // FEBRUARY 15 - 28, 2027 (PHASE 5: PART 2)
  // Finish all A-Level content by Feb 20-22, then Topic Tests!
  // ==========================================
  {
    date: "2027-02-15",
    dayOfWeek: "Monday",
    dayThai: "จันทร์",
    phase: "Phase 5: จบเนื้อหา A-Level & Topic Tests",
    week: 20,
    focus: "Math Topic Test & Analysis",
    tasks: [
      {
        id: "2027-02-15-math1",
        subject: "Math1",
        topic: "Math Topic Test: Analytic Geometry, Conics & Vectors",
        duration: 120,
        type: "Topic Test",
        subtasks: [
          {
            id: "2027-02-15-m-1",
            title: "ทำ Topic Test 15 ข้อเรื่องภาคตัดกรวยและเวกเตอร์",
          },
          { id: "2027-02-15-m-2", title: "วิเคราะห์จุดที่ทำผิดลง Error Log" },
        ],
      },
    ],
  },
  {
    date: "2027-02-16",
    dayOfWeek: "Tuesday",
    dayThai: "อังคาร",
    phase: "Phase 5: จบเนื้อหา A-Level & Topic Tests",
    week: 20,
    focus: "Physics Topic Test & Review",
    tasks: [
      {
        id: "2027-02-16-physics",
        subject: "Physics",
        topic: "Physics Topic Test: Waves, Sound & Light",
        duration: 120,
        type: "Topic Test",
        subtasks: [
          {
            id: "2027-02-16-p-1",
            title: "ทำข้อสอบเรื่องคลื่น เสียง และแสง 15 ข้อ",
          },
          {
            id: "2027-02-16-p-2",
            title: "ทบทวนสูตรดอปเปลอร์ และการแทรกสอดสลิต",
          },
        ],
      },
    ],
  },
  {
    date: "2027-02-20",
    dayOfWeek: "Saturday",
    dayThai: "เสาร์",
    phase: "Phase 5: จบเนื้อหา A-Level & Topic Tests",
    week: 20,
    focus: "Target: จบเนื้อหาครบทุกบท A-Level ภายในวันนี้!",
    tasks: [
      {
        id: "2027-02-20-math1",
        subject: "Math1",
        topic: "Math Full Syllabus Completion & Summary Check",
        duration: 150,
        type: "ตรวจเช็กลิสต์เนื้อหา",
        subtasks: [
          {
            id: "2027-02-20-m-1",
            title: "ทบทวน Matrix, Complex Numbers, Logic, Set",
          },
          { id: "2027-02-20-m-2", title: "เช็กความครบถ้วนของทั้ง 14 บท Math1" },
        ],
      },
      {
        id: "2027-02-20-physics",
        subject: "Physics",
        topic: "Physics Modern Topics: Heat, Gas, Fluid, Atomic & Nuclear",
        duration: 150,
        type: "จบเนื้อหาฟิสิกส์ 19 บท",
        subtasks: [
          {
            id: "2027-02-20-p-1",
            title: "สรุปสูตรแก๊ส PV=nRT, ความร้อน Q=mcΔT, ฟิสิกส์อะตอม",
          },
          {
            id: "2027-02-20-p-2",
            title: "ทำโจทย์ครึ่งชีวิตและโฟโตอิเล็กทริก 8 ข้อ",
          },
        ],
      },
    ],
  },
  {
    date: "2027-02-27",
    dayOfWeek: "Saturday",
    dayThai: "เสาร์",
    phase: "Phase 5: จบเนื้อหา A-Level & Topic Tests",
    week: 21,
    focus: "Math Full Test Simulation & Analysis",
    tasks: [
      {
        id: "2027-02-27-math1-full",
        subject: "Math1",
        topic: "Math1 Full Length Test (30 ข้อ 90 นาที)",
        duration: 150,
        type: "Full Test",
        subtasks: [
          { id: "2027-02-27-m-1", title: "ทำข้อสอบเสมือนจริง 30 ข้อ 90 นาที" },
          { id: "2027-02-27-m-2", title: "วิเคราะห์ตัดชอยส์และจัดกลุ่มคะแนน" },
        ],
      },
    ],
  },
  {
    date: "2027-02-28",
    dayOfWeek: "Sunday",
    dayThai: "อาทิตย์",
    phase: "Phase 5: จบเนื้อหา A-Level & Topic Tests",
    week: 21,
    focus: "Physics Full Test & English Test",
    tasks: [
      {
        id: "2027-02-28-physics-full",
        subject: "Physics",
        topic: "Physics Full Length Test (30 ข้อ 90 นาที)",
        duration: 150,
        type: "Full Test",
        subtasks: [
          { id: "2027-02-28-p-1", title: "ทำข้อสอบฟิสิกส์ฉบับเต็ม" },
          { id: "2027-02-28-p-2", title: "ตรวจข้อผิดและจดสูตรที่ลืม" },
        ],
      },
      {
        id: "2027-02-28-english-test",
        subject: "English",
        topic: "English Full Section Practice (80 ข้อ 90 นาที)",
        duration: 120,
        type: "Full Section",
        subtasks: [
          { id: "2027-02-28-e-1", title: "ทำข้อสอบจำลองภาษาอังกฤษ" },
          { id: "2027-02-28-e-2", title: "วิเคราะห์จุดที่ทำไม่ทัน" },
        ],
      },
    ],
  },

  // ==========================================
  // MARCH 1 - 7, 2027 (PHASE 6: PAST PAPER WEEK)
  // Do NOT introduce major new topics!
  // ==========================================
  {
    date: "2027-03-01",
    dayOfWeek: "Monday",
    dayThai: "จันทร์",
    phase: "Phase 6: Past Paper Week (ไม่ขึ้นเนื้อหาใหม่แล้ว)",
    week: 22,
    focus: "Math1 Full Mock (Past Paper)",
    tasks: [
      {
        id: "2027-03-01-math1",
        subject: "Math1",
        topic: "Math1 Past Paper Simulation & Deep Analysis",
        duration: 120,
        type: "Past Paper",
        subtasks: [
          { id: "2027-03-01-m-1", title: "ทำข้อสอบจริงปีย้อนหลัง 1 ชุดเต็ม" },
          { id: "2027-03-01-m-2", title: "วิเคราะห์ข้อผิดทันทีทุกข้อ" },
        ],
      },
    ],
  },
  {
    date: "2027-03-02",
    dayOfWeek: "Tuesday",
    dayThai: "อังคาร",
    phase: "Phase 6: Past Paper Week",
    week: 22,
    focus: "Physics Full Mock (Past Paper)",
    tasks: [
      {
        id: "2027-03-02-physics",
        subject: "Physics",
        topic: "Physics Past Paper Simulation & Error Log",
        duration: 120,
        type: "Past Paper",
        subtasks: [
          {
            id: "2027-03-02-p-1",
            title: "ทำข้อสอบฟิสิกส์จริงปีย้อนหลัง 1 ชุด",
          },
          { id: "2027-03-02-p-2", title: "สรุปประเด็นที่มักมองข้าม" },
        ],
      },
    ],
  },
  {
    date: "2027-03-03",
    dayOfWeek: "Wednesday",
    dayThai: "พุธ",
    phase: "Phase 6: Past Paper Week",
    week: 22,
    focus: "English Full Mock (Past Paper)",
    tasks: [
      {
        id: "2027-03-03-english",
        subject: "English",
        topic: "English Past Paper Simulation & Vocab Review",
        duration: 120,
        type: "Past Paper",
        subtasks: [
          {
            id: "2027-03-03-e-1",
            title: "ทำข้อสอบ A-Level ภาษาอังกฤษปีย้อนหลัง 1 ชุด",
          },
          { id: "2027-03-03-e-2", title: "สรุปคำศัพท์ที่ไม่รู้ทั้งหมด" },
        ],
      },
    ],
  },
  {
    date: "2027-03-04",
    dayOfWeek: "Thursday",
    dayThai: "พฤหัสบดี",
    phase: "Phase 6: Past Paper Week",
    week: 22,
    focus: "Math Weak Topics & Error Log",
    tasks: [
      {
        id: "2027-03-04-math1",
        subject: "Math1",
        topic: "Math Weak Topics: เก็บตกโจทย์คะแนนกลางและสถิติ",
        duration: 90,
        type: "เก็บตกจุดอ่อน",
        subtasks: [
          { id: "2027-03-04-m-1", title: "ทำโจทย์จุดที่ไม่มั่นใจ 10 ข้อ" },
          { id: "2027-03-04-m-2", title: "ทบทวนสมุดจด Error Log" },
        ],
      },
    ],
  },
  {
    date: "2027-03-05",
    dayOfWeek: "Friday",
    dayThai: "ศุกร์",
    phase: "Phase 6: Past Paper Week",
    week: 22,
    focus: "Physics Weak Topics & Formula Sheet",
    tasks: [
      {
        id: "2027-03-05-physics",
        subject: "Physics",
        topic: "Physics Formula Sheet Review & Weak Topics",
        duration: 90,
        type: "ทวนสูตรสรุป",
        subtasks: [
          { id: "2027-03-05-p-1", title: "อ่านแผ่นสรุปสูตรฟิสิกส์ทุกบท" },
          { id: "2027-03-05-p-2", title: "ซ่อมโจทย์เรื่องไฟฟ้าและคลื่น 6 ข้อ" },
        ],
      },
    ],
  },
  {
    date: "2027-03-06",
    dayOfWeek: "Saturday",
    dayThai: "เสาร์",
    phase: "Phase 6: Past Paper Week",
    week: 22,
    focus: "Math Full Mock & English Reading Practice",
    tasks: [
      {
        id: "2027-03-06-math1",
        subject: "Math1",
        topic: "Math1 Mock Exam Final Round",
        duration: 120,
        type: "Mock รอบสุดท้าย",
        subtasks: [
          { id: "2027-03-06-m-1", title: "จำลองทำข้อสอบคณิตศาสตร์ประยุกต์ 1" },
          { id: "2027-03-06-m-2", title: "เช็กความแม่นยำข้อที่ทำได้" },
        ],
      },
      {
        id: "2027-03-06-english",
        subject: "English",
        topic: "English Reading & Vocab Review",
        duration: 60,
        type: "อ่านทวนศัพท์",
        subtasks: [
          {
            id: "2027-03-06-e-1",
            title: "อ่านทวนลิสต์คำศัพท์ 100 คำที่จดมาตลอด",
          },
        ],
      },
    ],
  },
  {
    date: "2027-03-07",
    dayOfWeek: "Sunday",
    dayThai: "อาทิตย์",
    phase: "Phase 6: Past Paper Week",
    week: 22,
    focus: "Physics Full Mock & English Practice",
    tasks: [
      {
        id: "2027-03-07-physics",
        subject: "Physics",
        topic: "Physics Mock Exam Final Round",
        duration: 120,
        type: "Mock รอบสุดท้าย",
        subtasks: [
          { id: "2027-03-07-p-1", title: "จำลองทำข้อสอบฟิสิกส์ฉบับเต็ม" },
          { id: "2027-03-07-p-2", title: "สรุปข้อผิดและทำใจให้สบาย" },
        ],
      },
    ],
  },

  // ==========================================
  // MARCH 8 - 12, 2027 (FINAL REVIEW)
  // Light study only, formula recap, error log review, no full mocks!
  // ==========================================
  {
    date: "2027-03-08",
    dayOfWeek: "Monday",
    dayThai: "จันทร์",
    phase: "Phase 6: โค้งสุดท้ายสู่สนามสอบ A-Level",
    week: 23,
    focus: "Math: Probability, Statistics, Calculus & Function",
    tasks: [
      {
        id: "2027-03-08-math1",
        subject: "Math1",
        topic:
          "Math High-Yield Recap: สถิติ, ความน่าจะเป็น, แคลคูลัส, ฟังก์ชัน",
        duration: 90,
        type: "ทวนบทใหญ่",
        subtasks: [
          {
            id: "2027-03-08-m-1",
            title: "อ่านทบทวนนิยามและสูตร 4 บทใหญ่ที่ออกข้อสอบเยอะสุด",
          },
          { id: "2027-03-08-m-2", title: "ทำโจทย์ตัวอย่างบทละ 2 ข้อ" },
        ],
      },
    ],
  },
  {
    date: "2027-03-09",
    dayOfWeek: "Tuesday",
    dayThai: "อังคาร",
    phase: "Phase 6: โค้งสุดท้ายสู่สนามสอบ A-Level",
    week: 23,
    focus: "Physics: Kinematics, Newton, Energy, Momentum",
    tasks: [
      {
        id: "2027-03-09-physics",
        subject: "Physics",
        topic: "Physics Mechanics Recap: กฎนิวตัน, พลังงาน, โมเมนตัม",
        duration: 90,
        type: "ทวนกลศาสตร์",
        subtasks: [
          {
            id: "2027-03-09-p-1",
            title: "ทบทวนแผนภาพ FBD กฎอนุรักษ์พลังงาน และการชน",
          },
          {
            id: "2027-03-09-p-2",
            title: "ดูข้อสังเกตเรื่องหน่วยและทิศทางเวกเตอร์",
          },
        ],
      },
    ],
  },
  {
    date: "2027-03-10",
    dayOfWeek: "Wednesday",
    dayThai: "พุธ",
    phase: "Phase 6: โค้งสุดท้ายสู่สนามสอบ A-Level",
    week: 23,
    focus: "English Reading/Vocab & Physics Electricity",
    tasks: [
      {
        id: "2027-03-10-english",
        subject: "English",
        topic: "English Reading & Vocab Review",
        duration: 45,
        type: "ทบทวนคำศัพท์",
        subtasks: [
          { id: "2027-03-10-e-1", title: "อ่านทบทวนศัพท์และ Synonyms" },
        ],
      },
      {
        id: "2027-03-10-physics",
        subject: "Physics",
        topic: "Electricity & Magnetism Recap: ไฟฟ้าสถิตและวงจรไฟฟ้า",
        duration: 45,
        type: "ทวนสูตรไฟฟ้า",
        subtasks: [
          {
            id: "2027-03-10-p-1",
            title: "ทวนสูตรไฟฟ้าและกฎมือขวาสำหรับแม่เหล็ก",
          },
        ],
      },
    ],
  },
  {
    date: "2027-03-11",
    dayOfWeek: "Thursday",
    dayThai: "พฤหัสบดี",
    phase: "Phase 6: วันพักสมอง - No Full Mock",
    week: 23,
    focus: "Math: Formula Review & Error Log (No Full Mock)",
    tasks: [
      {
        id: "2027-03-11-math1",
        subject: "Math1",
        topic: "Math Formula Sheet & Error Log Review Only",
        duration: 45,
        type: "อ่านสรุปสูตร",
        subtasks: [
          { id: "2027-03-11-m-1", title: "เปิดอ่านสรุปสูตรคณิตศาสตร์ 1 แผ่น" },
          { id: "2027-03-11-m-2", title: "เปิดอ่าน Error Log ข้อควรระวัง" },
        ],
      },
    ],
  },
  {
    date: "2027-03-12",
    dayOfWeek: "Friday",
    dayThai: "ศุกร์",
    phase: "Phase 6: วันก่อนสอบ A-Level 1 วัน",
    week: 23,
    focus: "Physics Formula, Graphs, Units, FBD (Light study only)",
    tasks: [
      {
        id: "2027-03-12-physics",
        subject: "Physics",
        topic: "Physics Final Glimpse: Graphs, Units, FBD, Modern Physics",
        duration: 40,
        type: "อ่านเบาๆ ท่องสูตร",
        subtasks: [
          {
            id: "2027-03-12-p-1",
            title: "ทบทวนกราฟ การแปลงหน่วย และฟิสิกส์อะตอมเบาๆ",
          },
          {
            id: "2027-03-12-p-2",
            title: "เตรียมบัตรประชาชน ปากกา ดินสอ ยางลบ กบเหลา",
          },
          {
            id: "2027-03-12-p-3",
            title: "เข้านอนเร็ว ทำสมาธิ พักผ่อนให้สมองปลอดโปร่ง 100%",
          },
        ],
      },
    ],
  },

  // ==========================================
  // MARCH 13 - 14, 2027 (A-LEVEL EXAM DAYS)
  // ==========================================
  {
    date: "2027-03-13",
    dayOfWeek: "Saturday",
    dayThai: "เสาร์",
    isExamDay: true,
    examType: "A-Level Physics",
    phase: "EXAM DAY: A-Level Physics",
    week: 23,
    focus:
      "วันสอบ A-Level Physics เวลา 11:00–12:30 น. หลังสอบพักให้เต็มที่ แล้วทบทวน Math1 + English เบา ๆ สำหรับวันพรุ่งนี้",
    tasks: [
      {
        id: "2027-03-13-math1-after-physics",
        subject: "Math1",
        topic: "Final Light Review: Formula & Error Log",
        duration: 45,
        type: "After Exam Light Review",
        subtasks: [
          {
            id: "2027-03-13-math1-after-1",
            title:
              "เปิดสรุปสูตรเฉพาะหัวข้อสำคัญ: Function, Probability, Statistics และ Calculus",
          },
          {
            id: "2027-03-13-math1-after-2",
            title: "ทบทวน Error Log เฉพาะข้อที่เคยผิดซ้ำหรือมีจุดหลอกสำคัญ",
          },
          {
            id: "2027-03-13-math1-after-3",
            title:
              "ทำโจทย์ระดับกลาง 3-5 ข้อเพื่อเรียกความมั่นใจ ห้ามเปิด Full Mock ใหม่",
          },
        ],
      },

      {
        id: "2027-03-13-english-after-physics",
        subject: "English",
        topic: "Final Light Review: Vocabulary & Reading Strategy",
        duration: 30,
        type: "After Exam Light Review",
        subtasks: [
          {
            id: "2027-03-13-english-after-1",
            title: "ทบทวนศัพท์และ Collocation ที่จดไว้ประมาณ 15-20 คำ",
          },
          {
            id: "2027-03-13-english-after-2",
            title:
              "ทบทวนเทคนิค Main Idea, Inference, Reference และ Vocabulary in Context",
          },
          {
            id: "2027-03-13-english-after-3",
            title:
              "ดู Error Log ภาษาอังกฤษสั้น ๆ แล้วหยุดอ่าน เตรียมของและเข้านอนให้พอ",
          },
        ],
      },
    ],
  },
  {
    date: "2027-03-14",
    dayOfWeek: "Sunday",
    dayThai: "อาทิตย์",
    isExamDay: true,
    examType: "A-Level Math1 & English",
    phase: "EXAM DAY: A-Level Math1 & English",
    week: 23,
    focus:
      "วันสอบ Math1 เวลา 08:30–10:00 น. และ English เวลา 11:00–12:30 น. สนามสุดท้ายของ Roadmap!",
    tasks: [],
  },
];

const ROADMAP_START_DATE = "2026-09-28";
const ROADMAP_LAST_DATE = "2027-03-14";

const WEEKLY_STUDY_TARGETS = [
  // ช่วงเริ่มต้น
  {
    fromWeek: 1,
    toWeek: 5,
    totalMinutes: 1080, // 18 ชั่วโมง
    mix: {
      exam: 65,
      math: 15,
      physics: 15,
      english: 5,
    },
  },

  // พฤศจิกายน
  {
    fromWeek: 6,
    toWeek: 9,
    totalMinutes: 1080, // 18 ชั่วโมง
    mix: {
      exam: 60,
      math: 18,
      physics: 17,
      english: 5,
    },
  },

  // ธันวาคม
  {
    fromWeek: 10,
    toWeek: 13,
    totalMinutes: 1200, // 20 ชั่วโมง
    mix: {
      exam: 70,
      math: 12,
      physics: 12,
      english: 6,
    },
  },

  // มกราคมช่วงแรก
  {
    fromWeek: 14,
    toWeek: 16,
    totalMinutes: 1200,
    mix: {
      exam: 80,
      math: 8,
      physics: 8,
      english: 4,
    },
  },

  // Final TGAT / TPAT
  {
    fromWeek: 17,
    toWeek: 18,
    totalMinutes: 1200,
    mix: {
      exam: 90,
      math: 5,
      physics: 5,
      english: 0,
    },
  },

  // กุมภาพันธ์
  {
    fromWeek: 19,
    toWeek: 22,
    totalMinutes: 1380, // 23 ชั่วโมง
    mix: {
      exam: 0,
      math: 40,
      physics: 35,
      english: 25,
    },
  },

  // มีนาคม
  {
    fromWeek: 23,
    toWeek: 24,
    totalMinutes: 1200, // 20 ชั่วโมง
    mix: {
      exam: 0,
      math: 40,
      physics: 35,
      english: 25,
    },
  },
];

function getWeeklyStudyTarget(week) {
  return WEEKLY_STUDY_TARGETS.find(
    (target) => week >= target.fromWeek && week <= target.toWeek,
  );
}

function getSlotCountsForWeek(week) {
  // ก่อน Final TGAT
  if (week <= 13) {
    return {
      exam: 7,
      math: 2,
      physics: 3,
      english: 2,
    };
  }

  // มกราคมช่วง Accuracy / Speed
  if (week <= 16) {
    return {
      exam: 9,
      math: 2,
      physics: 2,
      english: 1,
    };
  }

  // Final TGAT / TPAT
  if (week <= 18) {
    return {
      exam: 9,
      math: 1,
      physics: 1,
      english: 0,
    };
  }

  // A-Level
  return {
    exam: 0,
    math: 4,
    physics: 3,
    english: 5,
  };
}

function roundToFive(value) {
  return Math.round(value / 5) * 5;
}

function calculateSlotDuration(totalMinutes, percentage, slots) {
  if (!percentage || !slots) {
    return 0;
  }

  const minutesForSubject = totalMinutes * (percentage / 100);

  return Math.max(5, roundToFive(minutesForSubject / slots));
}

function getDurationSet(week) {
  const target = getWeeklyStudyTarget(week);

  if (!target) {
    return {
      exam: 60,
      math: 60,
      physics: 60,
      english: 30,
    };
  }

  const slots = getSlotCountsForWeek(week);

  return {
    exam: calculateSlotDuration(
      target.totalMinutes,
      target.mix.exam,
      slots.exam,
    ),

    math: calculateSlotDuration(
      target.totalMinutes,
      target.mix.math,
      slots.math,
    ),

    physics: calculateSlotDuration(
      target.totalMinutes,
      target.mix.physics,
      slots.physics,
    ),

    english: calculateSlotDuration(
      target.totalMinutes,
      target.mix.english,
      slots.english,
    ),
  };
}

function parseLocalDate(dateStr) {
  const [year, month, day] = dateStr.split("-").map(Number);
  return new Date(year, month - 1, day);
}

function formatLocalISO(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
}

function getRoadmapWeek(dateStr) {
  const start = parseLocalDate(ROADMAP_START_DATE);
  const target = parseLocalDate(dateStr);

  const diffMs = target.getTime() - start.getTime();
  const diffDays = Math.floor(diffMs / 86400000);

  return Math.max(1, Math.floor(diffDays / 7) + 1);
}

function createGeneratedTask(
  dateStr,
  subject,
  topic,
  duration = 60,
  type = "Study",
) {
  const safeSubject = subject.toLowerCase().replace(/[^a-z0-9]/g, "-");

  const baseId = `${dateStr}-${safeSubject}-generated`;

  return {
    id: baseId,
    subject,
    topic,
    duration,
    type,
    subtasks: [
      {
        id: `${baseId}-concept`,
        title: `ทบทวน Concept / เทคนิคสำคัญของ ${topic}`,
      },
      {
        id: `${baseId}-practice`,
        title: "ทำโจทย์ตามหัวข้อและจับเวลา",
      },
      {
        id: `${baseId}-review`,
        title: "ตรวจคำตอบและวิเคราะห์ข้อผิด",
      },
      {
        id: `${baseId}-error-log`,
        title: "จดข้อที่ผิดหรือจุดที่ยังไม่แม่นลง Error Log",
      },
    ],
  };
}

function buildPreTgatTasks(dateStr, dayOfWeek, profile, week) {
  const duration = getDurationSet(week);

  switch (dayOfWeek) {
    // Monday
    case 1:
      return [
        createGeneratedTask(
          dateStr,
          "TGAT1",
          profile.tgat1,
          duration.exam,
          "TGAT1 Practice",
        ),
        createGeneratedTask(
          dateStr,
          "Math1",
          profile.math,
          duration.math,
          "A-Level Maintenance",
        ),
      ];

    // Tuesday
    case 2:
      return [
        createGeneratedTask(
          dateStr,
          "TPAT3",
          profile.tpat3,
          duration.exam,
          "TPAT3 Practice",
        ),
        createGeneratedTask(
          dateStr,
          "Physics",
          profile.physics,
          duration.physics,
          "Physics Foundation",
        ),
      ];

    // Wednesday
    case 3:
      return [
        createGeneratedTask(
          dateStr,
          "TGAT2",
          profile.tgat2,
          duration.exam,
          "TGAT2 Practice",
        ),
      ];

    // Thursday
    case 4:
      return [
        createGeneratedTask(
          dateStr,
          "TPAT3",
          profile.tpat3,
          duration.exam,
          "TPAT3 Practice",
        ),
        createGeneratedTask(
          dateStr,
          "Physics",
          profile.physics,
          duration.physics,
          "Physics Practice",
        ),
      ];

    // Friday
    case 5:
      return [
        createGeneratedTask(
          dateStr,
          "TGAT3",
          profile.tgat3,
          duration.exam,
          "TGAT3 Practice",
        ),
        createGeneratedTask(
          dateStr,
          "English",
          profile.english,
          duration.english,
          "English Maintenance",
        ),
      ];

    // Saturday
    case 6:
      return [
        createGeneratedTask(
          dateStr,
          "TPAT3",
          profile.tpat3,
          duration.exam,
          "Mixed / Mock Practice",
        ),
        createGeneratedTask(
          dateStr,
          "TGAT2",
          profile.tgat2,
          duration.exam,
          "Mixed Practice",
        ),
      ];

    // Sunday
    case 0:
      return [
        createGeneratedTask(
          dateStr,
          "Math1",
          profile.math,
          duration.math,
          "Weekly Review",
        ),
        createGeneratedTask(
          dateStr,
          "Physics",
          profile.physics,
          duration.physics,
          "Weekly Review",
        ),
        createGeneratedTask(
          dateStr,
          "English",
          profile.english,
          duration.english,
          "Vocabulary / Reading",
        ),
      ];

    default:
      return [];
  }
}

function buildFinalTgatTasks(dateStr, dayOfWeek, profile, week) {
  const duration = getDurationSet(week);
  const maintenanceMode = week <= 16;
  if (profile.mode === "final-tgat-light") {
    switch (dayOfWeek) {
      // Monday
      case 1:
        return [
          createGeneratedTask(
            dateStr,
            "TGAT1",
            profile.tgat1,
            duration.exam,
            "Timed Practice",
          ),

          createGeneratedTask(
            dateStr,
            "Math1",
            profile.math,
            duration.math,
            "A-Level Maintenance",
          ),
        ];

      // Tuesday
      case 2: {
        const tasks = [
          createGeneratedTask(
            dateStr,
            "TPAT3",
            profile.tpat3,
            duration.exam,
            "Timed Practice",
          ),
        ];

        if (maintenanceMode) {
          tasks.push(
            createGeneratedTask(
              dateStr,
              "Physics",
              profile.physics,
              duration.physics,
              "A-Level Maintenance",
            ),
          );
        }

        return tasks;
      }

      // Wednesday
      case 3:
        return [
          createGeneratedTask(
            dateStr,
            "TGAT2",
            profile.tgat2,
            duration.exam,
            "Timed Practice",
          ),

          createGeneratedTask(
            dateStr,
            "TGAT3",
            profile.tgat3,
            duration.exam,
            "Timed Practice",
          ),
        ];

      // Thursday
      case 4:
        return [
          createGeneratedTask(
            dateStr,
            "TPAT3",
            profile.tpat3,
            duration.exam,
            "Mechanical / Engineering",
          ),

          createGeneratedTask(
            dateStr,
            "Physics",
            profile.physics,
            duration.physics,
            "A-Level Maintenance",
          ),
        ];

      // Friday
      case 5: {
        const tasks = [
          createGeneratedTask(
            dateStr,
            "TGAT2",
            "Error Log & Weak Point Review",
            duration.exam,
            "Review",
          ),

          createGeneratedTask(
            dateStr,
            "TPAT3",
            "Formula & Weak Point Review",
            duration.exam,
            "Review",
          ),
        ];

        if (maintenanceMode) {
          tasks.push(
            createGeneratedTask(
              dateStr,
              "Math1",
              profile.math,
              duration.math,
              "A-Level Maintenance",
            ),
          );

          tasks.push(
            createGeneratedTask(
              dateStr,
              "English",
              profile.english,
              duration.english,
              "Light Review",
            ),
          );
        }

        return tasks;
      }

      // Saturday
      case 6:
        return [
          createGeneratedTask(
            dateStr,
            "TPAT3",
            "TPAT3 Full Mock",
            duration.exam,
            "Full Mock",
          ),
        ];

      // Sunday
      case 0:
        return [
          createGeneratedTask(
            dateStr,
            "TGAT1",
            "TGAT Full Mock",
            duration.exam,
            "Full Mock",
          ),
        ];

      default:
        return [];
    }
  }
  switch (dayOfWeek) {
    case 1:
      return [
        createGeneratedTask(
          dateStr,
          "TGAT1",
          profile.tgat1,
          duration.exam,
          "Timed Practice",
        ),
      ];

    case 2:
      return [
        createGeneratedTask(
          dateStr,
          "TPAT3",
          profile.tpat3,
          duration.exam,
          "Timed Practice",
        ),
      ];

    case 3:
      return [
        createGeneratedTask(
          dateStr,
          "TGAT2",
          profile.tgat2,
          duration.exam,
          "Timed Practice",
        ),
        createGeneratedTask(
          dateStr,
          "TGAT3",
          profile.tgat3,
          duration.exam,
          "Timed Practice",
        ),
      ];

    case 4:
      return [
        createGeneratedTask(
          dateStr,
          "TPAT3",
          profile.tpat3,
          duration.exam,
          "Mechanical / Engineering",
        ),
      ];

    case 5:
      return [
        createGeneratedTask(
          dateStr,
          "TGAT2",
          "Error Log & Weak Point Review",
          duration.exam,
          "Review",
        ),
        createGeneratedTask(
          dateStr,
          "TPAT3",
          "Formula & Weak Point Review",
          duration.exam,
          "Review",
        ),
      ];

    case 6:
      return [
        createGeneratedTask(
          dateStr,
          "TPAT3",
          "TPAT3 Full Mock",
          duration.exam,
          "Full Mock",
        ),
      ];

    case 0:
      return [
        createGeneratedTask(
          dateStr,
          "TGAT1",
          "TGAT Full Mock",
          duration.exam,
          "Full Mock",
        ),
      ];

    default:
      return [];
  }
}

function buildALevelTasks(dateStr, dayOfWeek, profile, week) {
  const duration = getDurationSet(week);
  switch (dayOfWeek) {
    // Monday
    case 1:
      return [
        createGeneratedTask(
          dateStr,
          "Math1",
          profile.math,
          duration.math,
          "Math Practice",
        ),
        createGeneratedTask(
          dateStr,
          "English",
          profile.english,
          duration.english,
          "English Practice",
        ),
      ];

    // Tuesday
    case 2:
      return [
        createGeneratedTask(
          dateStr,
          "Physics",
          profile.physics,
          duration.physics,
          "Physics Practice",
        ),
        createGeneratedTask(
          dateStr,
          "English",
          profile.english,
          duration.english,
          "English Practice",
        ),
      ];

    // Wednesday
    case 3:
      return [
        createGeneratedTask(
          dateStr,
          "Math1",
          profile.math,
          duration.math,
          "Topic Practice",
        ),
      ];

    // Thursday
    case 4:
      return [
        createGeneratedTask(
          dateStr,
          "Physics",
          profile.physics,
          duration.physics,
          "Topic Practice",
        ),
      ];

    // Friday
    case 5:
      return [
        createGeneratedTask(
          dateStr,
          "English",
          profile.english,
          duration.english,
          "English Practice",
        ),
        createGeneratedTask(
          dateStr,
          "Math1",
          `Weak Point: ${profile.math}`,
          duration.math,
          "Weak Point",
        ),
      ];

    // Saturday
    case 6:
      return [
        createGeneratedTask(
          dateStr,
          "Math1",
          profile.math,
          duration.math,
          "Topic Test / Mock",
        ),
        createGeneratedTask(
          dateStr,
          "English",
          profile.english,
          duration.english,
          "Reading",
        ),
      ];

    // Sunday
    case 0:
      return [
        createGeneratedTask(
          dateStr,
          "Physics",
          profile.physics,
          duration.physics,
          "Topic Test / Mock",
        ),
        createGeneratedTask(
          dateStr,
          "English",
          profile.english,
          duration.english,
          "Reading",
        ),
      ];

    default:
      return [];
  }
}

function generatePlanFromWeekProfile(dateStr) {
  const targetDate = parseLocalDate(dateStr);
  const dayOfWeek = targetDate.getDay();

  const dayNamesThai = [
    "อาทิตย์",
    "จันทร์",
    "อังคาร",
    "พุธ",
    "พฤหัสบดี",
    "ศุกร์",
    "เสาร์",
  ];

  const dayNamesEnglish = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const week = getRoadmapWeek(dateStr);
  const profile = WEEK_PROFILES[week];

  if (!profile) {
    return null;
  }

  let tasks = [];

  if (profile.mode === "pre-tgat" || profile.mode === "mock-tgat") {
    tasks = buildPreTgatTasks(dateStr, dayOfWeek, profile, week);
  }

  if (profile.mode === "final-tgat" || profile.mode === "final-tgat-light") {
    tasks = buildFinalTgatTasks(dateStr, dayOfWeek, profile, week);
  }

  if (
    profile.mode === "alevel" ||
    profile.mode === "past-paper" ||
    profile.mode === "final-alevel"
  ) {
    tasks = buildALevelTasks(dateStr, dayOfWeek, profile, week);
  }

  return {
    date: dateStr,
    dayOfWeek: dayNamesEnglish[dayOfWeek],
    dayThai: dayNamesThai[dayOfWeek],
    phase: profile.phase,
    week,
    focus: profile.focus,
    tasks,
  };
}

// Helper to look up a day's schedule
export function getPlanForDate(dateStr) {
  return DAILY_PLANS.find((p) => p.date === dateStr);
}

// Generate fallback schedule if date is between phases or template based
export function getSmartPlanForDate(dateStr) {
  const directPlan = getPlanForDate(dateStr);

  if (directPlan) {
    const normalizedPlan = {
      ...directPlan,
      week: getRoadmapWeek(dateStr),
    };

    // หลังสอบ TGAT / TPAT3 แล้ว
    // ไม่ควรมีงานของ TGAT1, TGAT2, TGAT3 หรือ TPAT3 เหลืออยู่
    if (dateStr > "2027-01-30") {
      return {
        ...normalizedPlan,
        tasks: normalizedPlan.tasks.filter(
          (task) =>
            !["TGAT1", "TGAT2", "TGAT3", "TPAT3"].includes(task.subject),
        ),
      };
    }

    return normalizedPlan;
  }

  // If outside explicit daily plans, generate appropriate weekly template based on phase
  const targetDate = new Date(dateStr);
  const dayOfWeek = targetDate.getDay(); // 0 is Sunday, 1 is Monday
  const dayNames = [
    "อาทิตย์",
    "จันทร์",
    "อังคาร",
    "พุธ",
    "พฤหัสบดี",
    "ศุกร์",
    "เสาร์",
  ];
  const dayEng = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  // หลังสอบทุกสนาม
  if (dateStr >= "2027-03-15") {
    return {
      date: dateStr,
      dayOfWeek: "",
      dayThai: "",
      isPostExam: true,
      phase: "เสร็จสิ้นเส้นทาง TCAS70",
      week: 24,
      focus: "🎉 จบ Roadmap TCAS70 แล้ว!",
      tasks: [],
    };
  }

  // วันสอบ TGAT / TPAT3
  if (dateStr === "2027-01-30") {
    return {
      date: dateStr,
      dayOfWeek: "Saturday",
      dayThai: "เสาร์",
      isExamDay: true,
      examType: "TGAT & TPAT3",
      phase: "EXAM DAY: TGAT & TPAT3",
      week: 18,
      focus: "วันสอบจริง! มั่นใจในทุกความพยายาม",
      tasks: [],
    };
  }

  // ถ้าอยู่ภายใน Roadmap ให้สร้างจากข้อมูลรายสัปดาห์
  if (dateStr >= ROADMAP_START_DATE && dateStr <= ROADMAP_LAST_DATE) {
    return generatePlanFromWeekProfile(dateStr);
  }

  // วันที่อยู่นอก Roadmap
  return {
    date: dateStr,
    dayOfWeek: "",
    dayThai: "",
    phase: "นอกช่วง Roadmap",
    week: 0,
    focus: "ยังไม่มีแผนการอ่านสำหรับวันนี้",
    tasks: [],
  };
}

function buildCompleteRoadmap() {
  const plans = [];

  const current = parseLocalDate(ROADMAP_START_DATE);
  const last = parseLocalDate(ROADMAP_LAST_DATE);

  while (current <= last) {
    const dateStr = formatLocalISO(current);

    const plan = getSmartPlanForDate(dateStr);

    if (plan) {
      plans.push(plan);
    }

    current.setDate(current.getDate() + 1);
  }

  return plans;
}

export const ALL_DAILY_PLANS = buildCompleteRoadmap();
