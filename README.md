# TCAS70 Study Roadmap 🚀

เว็บแอปพลิเคชันวางแผนอ่านหนังสือเตรียมสอบ **TCAS70** สำหรับนักเรียนชั้นมัธยมศึกษาปีที่ 6 ครอบคลุม TGAT, TPAT3 และ A-Level พร้อม Roadmap รายวัน ระบบติดตามความคืบหน้า Error Log เป้าหมายคะแนน และระบบสำรองข้อมูลผ่าน `localStorage`

Roadmap หลักครอบคลุม **168 วัน / 24 สัปดาห์** ตั้งแต่ **28 กันยายน 2569 ถึง 14 มีนาคม 2570**

---

## 🎯 วิชาที่ครอบคลุม

- **TGAT1** — English Communication
- **TGAT2** — Critical & Logical Thinking
- **TGAT3** — Future Workforce Competencies
- **TPAT3** — ความถนัดวิทยาศาสตร์ เทคโนโลยี และวิศวกรรมศาสตร์
- **A-Level Math1** — คณิตศาสตร์ประยุกต์ 1
- **A-Level Physics** — ฟิสิกส์
- **A-Level English** — ภาษาอังกฤษ

---

## 🗓️ วันสอบที่ใช้ใน Roadmap

### TGAT / TPAT3

**30 มกราคม 2570**

หลังวันที่ 30 มกราคม ระบบจะหยุดสร้างงาน TGAT1, TGAT2, TGAT3 และ TPAT3 และเข้าสู่ช่วง **A-Level Takeover**

### A-Level

- **13 มีนาคม 2570** — Physics
- **14 มีนาคม 2570** — Math1 + English

หลังสอบ Physics วันที่ 13 มีนาคม มีเฉพาะ Light Review ของ Math1 และ English สำหรับเตรียมสอบวันถัดไป

Roadmap การอ่านสิ้นสุดวันที่ **14 มีนาคม 2570** และวันที่ **15 มีนาคม 2570** ใช้เป็นสถานะหลังจบสนามสอบ

---

## 💻 Tech Stack

- **React 19**
- **JavaScript**
- **Vite 8**
- **React Router**
- **HashRouter**
- **Vanilla CSS + CSS Custom Properties**
- **localStorage**
- **lucide-react**
- **canvas-confetti**
- **Oxlint**

---

# ✨ ฟีเจอร์หลัก

## 1. Dashboard

- แสดงงานของวันที่กำลังใช้งาน
- Exam Countdown
- Streak การอ่านหนังสือ
- Mini Calendar
- เช็กลิสต์งานย่อย
- แสดง Progress ของวัน
- รองรับ Exam Day Screen
- เพิ่ม Error Log จาก Task ได้โดยตรง

---

## 2. Today Plan

ดูรายละเอียดแผนการอ่านในแต่ละวัน พร้อม:

- เลื่อนไปวันก่อนหน้าและวันถัดไป
- เช็กลิสต์ย่อยของแต่ละ Task
- แสดงเวลาที่แนะนำ
- Filter ตามวิชาและสถานะ
- Task Notes
- Daily Notes
- เพิ่ม Error Log จาก Task
- รองรับแผนหลังสอบแบบ Light Review

---

## 3. Weekly Plan

Roadmap แบ่งเป็นทั้งหมด **24 สัปดาห์**

แต่ละสัปดาห์มีข้อมูล:

- Phase
- Focus หลัก
- TGAT / TPAT Topics
- Math Topics
- Physics Topics
- English Topics
- ตารางอ่าน 7 วัน

ระบบจำกัด Weekly Plan ให้อยู่ภายใน Week 1–24 และไม่หลุดไป Week 25 หลังจบ Roadmap

---

## 4. Monthly Plan

แสดงภาพรวมตั้งแต่:

**กันยายน 2569 – มีนาคม 2570**

ประกอบด้วย:

- เป้าหมายรายเดือน
- สัดส่วนการอ่านโดยประมาณ
- จำนวนงาน
- Progress รายเดือน
- Phase ของ Roadmap

สัดส่วนเวลาเป็นแนวทางโดยประมาณ เนื่องจากบางวัน เช่น Full Mock หรือ Exam Simulation อาจใช้เวลามากกว่าแผนเฉลี่ย

---

## 5. Subjects

แสดงสถิติรายวิชา:

- งานทั้งหมด
- งานที่ทำเสร็จ
- งานที่เหลือ
- Progress %
- คะแนนเป้าหมาย

คะแนนเป้าหมายสามารถแก้ไขได้จาก Settings และจะถูกบันทึกลง `localStorage`

---

## 6. Custom Target Scores 🎯

ผู้ใช้สามารถตั้งคะแนนเป้าหมายของแต่ละวิชาได้เอง เช่น:

```text
TGAT1
TGAT2
TGAT3
TPAT3
Math1
Physics
English
```

คะแนนอยู่ในช่วง:

```text
0–100
```

ค่าเริ่มต้นอยู่ใน:

```text
src/data/targetScores.js
```

และจัดการ state ผ่าน:

```text
src/hooks/useTargetScores.js
```

---

## 7. Error Log / Mistake Journal

ระบบบันทึกข้อผิดพลาดจากการทำโจทย์ โดยสามารถเก็บ:

- วิชา
- ประเภทความผิด
- หัวข้อ
- ลักษณะโจทย์
- สาเหตุที่ผิด
- วิธีแก้ / จุดที่ต้องจำ
- วันที่

### Error Categories

- 🧠 Concept
- 📐 Formula
- 🧮 Calculation
- 📖 Reading
- ⏱️ Time
- ⚠️ Careless
- 📝 Other

ระบบสามารถ:

- Search Error Log
- Filter ตามวิชา
- Filter ตามประเภท
- Edit
- Delete
- สรุปจำนวนข้อผิดแต่ละประเภท
- แสดงประเภทที่พลาดบ่อยที่สุด

---

## 8. Progress

แสดงภาพรวมความคืบหน้า เช่น:

- Overall Progress
- Streak
- Progress รายวิชา
- จำนวนงานที่ทำเสร็จ
- คะแนนเป้าหมายของแต่ละวิชา

Progress การอ่านและ Target Score เป็นข้อมูลคนละประเภทและไม่ได้ใช้แทนกัน

---

## 9. Exam Day Screen

ในวันสอบระบบจะแสดงหน้าจอพิเศษ พร้อม Exam Checklist เช่น:

- เอกสารยืนยันตัวตน
- อุปกรณ์สอบ
- ตรวจสถานที่สอบ
- วางแผนการเดินทาง
- เตรียมน้ำ / ของใช้
- พักผ่อนให้เพียงพอ

Checklist ถูกแยกตามวันสอบ เช่น:

```text
tcas70_exam_checklist_2027-01-30
tcas70_exam_checklist_2027-03-13
tcas70_exam_checklist_2027-03-14
```

จึงไม่ใช้สถานะร่วมกันระหว่างแต่ละสนามสอบ

---

## 10. Date Simulator

Settings มีระบบจำลองวันที่เพื่อใช้ตรวจ Roadmap เช่น:

- เริ่มต้น Roadmap
- ช่วง Full Mock
- TGAT / TPAT3 Exam Day
- A-Level Takeover
- Physics Exam Day
- Math1 + English Exam Day
- หลังจบ Roadmap

สามารถกลับสู่วันที่จริงได้ตลอดเวลา

---

## 11. Backup / Restore v2

สามารถ Export ข้อมูลออกเป็น JSON และ Import กลับเข้าสู่ระบบได้

Backup ปัจจุบันรองรับ:

- Student Name
- Checklist Progress
- Daily Notes
- Task Notes
- Error Logs
- Target Scores
- Exam Day Checklists

Backup ใช้ schema:

```json
{
  "version": "2.0"
}
```

และยังรองรับการ Import backup รุ่นเก่าที่ไม่มี Target Scores หรือ Exam Checklists โดยไม่ทำให้ระบบ crash

---

# 📁 Project Structure

```text
src/
├── components/
│   ├── CalendarView.jsx
│   ├── EmptyState.jsx
│   ├── ErrorModal.jsx
│   ├── ExamCountdown.jsx
│   ├── ExamDayScreen.jsx
│   ├── Header.jsx
│   ├── MobileNav.jsx
│   ├── MonthCard.jsx
│   ├── OnboardingModal.jsx
│   ├── ProgressBar.jsx
│   ├── Sidebar.jsx
│   ├── SubjectBadge.jsx
│   ├── TaskCard.jsx
│   ├── TodayCard.jsx
│   └── WeekCard.jsx
│
├── data/
│   ├── errorTypes.js
│   ├── exams.js
│   ├── studyPlan.js
│   ├── subjects.js
│   ├── targetScores.js
│   └── weekProfiles.js
│
├── hooks/
│   ├── useStudyProgress.js
│   └── useTargetScores.js
│
├── pages/
│   ├── Dashboard.jsx
│   ├── ErrorLogPage.jsx
│   ├── MonthlyPlan.jsx
│   ├── Progress.jsx
│   ├── Settings.jsx
│   ├── Subjects.jsx
│   ├── Today.jsx
│   └── WeeklyPlan.jsx
│
├── styles/
│   ├── App.css
│   └── index.css
│
├── utils/
│   ├── dateUtils.js
│   └── progressUtils.js
│
├── App.jsx
├── index.css
└── main.jsx
```

---

# 🧠 Roadmap Architecture

ข้อมูล Daily Plan มี 2 แหล่งหลัก:

### Explicit Plans

แผนที่กำหนดไว้โดยตรงสำหรับวันสำคัญ เช่น:

- Full Mock
- Exam Simulation
- Exam Day
- Final Review
- Post-Exam Light Review

### Generated Plans

วันที่ไม่ได้ระบุ Explicit Plan จะสร้างจาก:

```text
WEEK_PROFILES
+
WEEKLY_STUDY_TARGETS
+
วันที่ในสัปดาห์
```

ระบบรวมข้อมูลทั้งหมดเป็น:

```js
ALL_DAILY_PLANS;
```

ทำให้ Progress, Subjects, Monthly Plan และ Streak ใช้ Roadmap ชุดเดียวกัน

---

# 💾 Data Storage

ข้อมูลถูกเก็บใน browser ผ่าน `localStorage`

ตัวอย่าง keys:

```text
tcas70_subtasks
tcas70_daily_notes
tcas70_task_notes
tcas70_error_logs
tcas70_student_name
tcas70_simulated_date
tcas70_auto_lock_today
tcas70_target_scores
tcas70_exam_checklist_YYYY-MM-DD
```

ข้อมูลยังไม่ได้ sync ผ่าน Cloud Database ดังนั้นหากล้าง Browser Data ข้อมูลในเครื่องจะหาย ควรใช้ Export JSON สำหรับสำรองข้อมูลเป็นระยะ

---

# 🚀 Installation

## 1. Clone repository

```bash
git clone <repository-url>
cd tcas70-study-roadmap
```

## 2. Install dependencies

ถ้ามี `package-lock.json` แนะนำ:

```bash
npm ci
```

หรือ:

```bash
npm install
```

## 3. Start development server

```bash
npm run dev
```

เปิด:

```text
http://localhost:5173
```

---

# ✅ Quality Checks

## Lint

```bash
npm run lint
```

เป้าหมาย:

```text
0 warnings
0 errors
```

## Production Build

```bash
npm run build
```

ไฟล์ Production จะถูกสร้างใน:

```text
dist/
```

## Preview Production Build

```bash
npm run preview
```

---

# 🌐 Deployment

โปรเจกต์นี้เป็น Static React/Vite application

ค่าหลักสำหรับ deployment:

```text
Build Command: npm run build
Output Directory: dist
```

โปรเจกต์ใช้ `HashRouter` ดังนั้น URL ภายในจะมีรูปแบบเช่น:

```text
/#/today
/#/weekly
/#/progress
```

ทำให้สามารถใช้งานบน static hosting ได้โดยไม่ต้องพึ่ง server-side routing สำหรับแต่ละหน้า

---

# 📜 Available Commands

```bash
npm run dev
npm run lint
npm run build
npm run preview
```

---

# ⚠️ หมายเหตุ

- ข้อมูลทั้งหมดอยู่ใน Browser `localStorage`
- การเปิดเว็บจาก Browser หรือ Device อื่นจะไม่มี Progress เดิมจนกว่าจะ Import Backup
- Full Mock และวันสำคัญบางวันอาจมีเวลาอ่านสูงกว่าสัดส่วนรายเดือนโดยประมาณ
- Bundle production ปัจจุบันอาจมีคำเตือนเรื่อง JavaScript chunk เกิน 500 kB แต่ไม่ถือเป็น build failure
- สามารถเพิ่ม route-level code splitting ในอนาคตเพื่อลด initial bundle size ได้
