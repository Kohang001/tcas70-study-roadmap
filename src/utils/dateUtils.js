// Date utility functions for Thai Buddhist Era and study planner calculations

const THAI_MONTHS_FULL = [
  'มกราคม', 'กุมภาพันธ์', 'มีนาคม', 'เมษายน', 'พฤษภาคม', 'มิถุนายน',
  'กรกฎาคม', 'สิงหาคม', 'กันยายน', 'ตุลาคม', 'พฤศจิกายน', 'ธันวาคม'
];

const THAI_MONTHS_SHORT = [
  'ม.ค.', 'ก.พ.', 'มี.ค.', 'เม.ย.', 'พ.ค.', 'มิ.ย.',
  'ก.ค.', 'ส.ค.', 'ก.ย.', 'ต.ค.', 'พ.ย.', 'ธ.ค.'
];

const THAI_DAYS = [
  'วันอาทิตย์', 'วันจันทร์', 'วันอังคาร', 'วันพุธ', 'วันพฤหัสบดี', 'วันศุกร์', 'วันเสาร์'
];

export function parseDate(dateInput) {
  if (!dateInput) return new Date();
  if (typeof dateInput === 'string') {
    const [y, m, d] = dateInput.split('-').map(Number);
    return new Date(y, m - 1, d);
  }
  return new Date(dateInput);
}

export function formatDateToISO(date) {
  const d = new Date(date);
  const year = d.getFullYear();
  const month = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

export function getBuddhistYear(date) {
  return date.getFullYear() + 543;
}

export function formatThaiDate(dateInput, includeDayName = true) {
  const d = parseDate(dateInput);
  const dayName = THAI_DAYS[d.getDay()];
  const day = d.getDate();
  const month = THAI_MONTHS_FULL[d.getMonth()];
  const year = getBuddhistYear(d);

  if (includeDayName) {
    return `${dayName}ที่ ${day} ${month} ${year}`;
  }
  return `${day} ${month} ${year}`;
}

export function formatShortThaiDate(dateInput) {
  const d = parseDate(dateInput);
  const day = d.getDate();
  const month = THAI_MONTHS_SHORT[d.getMonth()];
  const year = String(getBuddhistYear(d)).slice(-2);
  return `${day} ${month} ${year}`;
}

export function formatDayThai(dateInput) {
  const d = parseDate(dateInput);
  return THAI_DAYS[d.getDay()];
}

export function formatThaiMonth(year, month) {
  const monthName = THAI_MONTHS_FULL[month - 1];
  const beYear = year + 543;
  return `${monthName} ${beYear}`;
}

export function getDaysRemaining(targetDateInput, fromDateInput = new Date()) {
  const target = parseDate(targetDateInput);
  const from = parseDate(fromDateInput);
  
  // Set both to start of day
  target.setHours(0, 0, 0, 0);
  from.setHours(0, 0, 0, 0);

  const diffTime = target.getTime() - from.getTime();
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  return Math.max(0, diffDays);
}

export function addDays(dateInput, days) {
  const d = parseDate(dateInput);
  d.setDate(d.getDate() + days);
  return formatDateToISO(d);
}

// Get Monday of the week for given date
export function getMondayOfWeek(dateInput) {
  const d = parseDate(dateInput);
  const day = d.getDay();
  // day: 0 (Sun), 1 (Mon), 2 (Tue), ..., 6 (Sat)
  const diff = d.getDate() - day + (day === 0 ? -6 : 1);
  d.setDate(diff);
  return formatDateToISO(d);
}

// Returns 7 ISO dates (Mon -> Sun)
export function getDaysOfWeek(mondayStr) {
  const days = [];
  for (let i = 0; i < 7; i++) {
    days.push(addDays(mondayStr, i));
  }
  return days;
}

// Calculate week index from roadmap start (28 Sep 2026)
export function getWeekIndex(dateInput) {
  const start = new Date(2026, 8, 28); // 28 Sep 2026
  const target = parseDate(dateInput);
  const diffTime = target - start;
  const diffWeeks = Math.floor(diffTime / (7 * 24 * 60 * 60 * 1000));
  return Math.max(1, diffWeeks + 1);
}
