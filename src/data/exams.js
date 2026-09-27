export const EXAMS = [
  {
    id: 'tgat-tpat3',
    name: 'TPAT3 + TGAT',
    shortName: 'TGAT / TPAT3',
    date: '2027-01-30',
    thaiDate: '30 มกราคม 2570',
    subjects: ['TGAT1', 'TGAT2', 'TGAT3', 'TPAT3'],
    color: '#7C3AED',
    bgLight: 'rgba(124, 58, 237, 0.08)',
    desc: 'การสอบวัดความถนัดทั่วไป และความถนัดทางวิทยาศาสตร์ เทคโนโลยี วิศวกรรมศาสตร์'
  },
  {
    id: 'alevel',
    name: 'A-Level',
    shortName: 'A-Level',
    date: '2027-03-13',
    endDate: '2027-03-14',
    thaiDate: '13-14 มีนาคม 2570',
    subjects: ['Physics', 'Math1', 'English'],
    color: '#DC2626',
    bgLight: 'rgba(220, 38, 38, 0.08)',
    desc: 'A-Level Physics วันที่ 13 มี.ค. และ Math1 + English วันที่ 14 มี.ค.'
  }
];

export const EXAM_DAY_CHECKLIST = [
  { id: 'exam-id-card', title: 'บัตรประจำตัวประชาชน หรือเอกสารยืนยันตัวตนตัวจริง' },
  { id: 'exam-tools', title: 'อุปกรณ์สอบ (ดินสอ 2B 2-3 แท่ง, ยางลบสะอาด, ปากกาน้ำเงิน, กบเหลา)' },
  { id: 'exam-location', title: 'ตรวจสอบสถานที่สอบ ตึกสอบ ห้องสอบ และเลขที่นั่งสอบให้ชัดเจน' },
  { id: 'exam-alarm', title: 'ตั้งนาฬิกาปลุก และวางแผนการเดินทางเผื่อเวลาอย่างน้อย 1-2 ชั่วโมง' },
  { id: 'exam-supplies', title: 'เตรียมน้ำดื่ม เสื้อกันหนาว และของว่างเติมพลังงานช่วงพัก' },
  { id: 'exam-sleep', title: 'เข้านอนแต่หัวค่ำ พักผ่อนให้สมองปลอดโปร่ง ไม่หักโหมทบทวนดึก' }
];

export const TGAT_TPAT3_EXAM_DATE = '2027-01-30';
export const ALEVEL_START_DATE = '2027-03-13';
export const ALEVEL_END_DATE = '2027-03-14';
export const ROADMAP_END_DATE = '2027-03-15';