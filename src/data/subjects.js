export const SUBJECTS = {
  tgat1: {
    id: 'tgat1',
    code: 'TGAT1',
    name: 'TGAT1 การสื่อสารภาษาอังกฤษ',
    nameEn: 'English Communication',
    category: 'TGAT',
    color: '#2563EB', // blue
    colorHover: '#1D4ED8',
    bgLight: 'rgba(37, 99, 235, 0.08)',
    badgeBg: '#EFF6FF',
    badgeText: '#1E40AF',
    borderColor: 'rgba(37, 99, 235, 0.25)',
    icon: 'MessageSquare',
    targetScore: '80+',
    focus: 'เน้นความคล่องแคล่วในการสนทนาและทักษะการอ่านเร็วเพื่อประหยัดเวลา',
    description: 'ครอบคลุมบทสนทนาสั้น-ยาว, การตอบคำถามเชิงสถานการณ์, เติมคำในบทความ และการอ่านจับใจความ',
    priorityTopics: [
      'Question-Response (โต้ตอบเร็ว)',
      'Short & Long Conversation',
      'Text Completion',
      'Reading Comprehension (จับใจความสำคัญ)',
      'Communication Functions (การขอร้อง, ข้อเสนอแนะ, ขอโทษ)'
    ],
    roadmap: [
      { order: 1, title: 'Question-Response', status: 'Core', desc: 'การตอบรับเชิงสถานการณ์ทันที' },
      { order: 2, title: 'Short Conversation', status: 'Core', desc: 'บทสนทนาชีวิตประจำวัน 2-4 รอบ' },
      { order: 3, title: 'Long Conversation', status: 'Core', desc: 'บทสนทนาบริบทโรงเรียน/มหาวิทยาลัย/บริการ' },
      { order: 4, title: 'Text Completion', status: 'Practice', desc: 'เติมคำและโครงสร้างไวยากรณ์ในบริบท' },
      { order: 5, title: 'Reading Comprehension', status: 'High', desc: 'อ่านประกาศ ข่าว บทความสั้น และอีเมล' },
      { order: 6, title: 'Speed Practice & Mock Exam', status: 'Final', desc: 'จำลองจับเวลาเสมือนจริง 60 นาที' }
    ],
    functions: [
      'Suggestion (การเสนอแนะ)',
      'Request (การขอร้อง/ร้องขอ)',
      'Agreement & Disagreement (ความเห็นพ้อง/ขัดแย้ง)',
      'Apology (การขอโทษอย่างสุภาพ)',
      'Invitation (การเชิญชวน)',
      'Asking Opinion (การถามความคิดเห็น)'
    ]
  },
  tgat2: {
    id: 'tgat2',
    code: 'TGAT2',
    name: 'TGAT2 การคิดอย่างมีเหตุผล',
    nameEn: 'Critical & Logical Thinking',
    category: 'TGAT',
    color: '#7C3AED', // purple
    colorHover: '#6D28D9',
    bgLight: 'rgba(124, 58, 237, 0.08)',
    badgeBg: '#F5F3FF',
    badgeText: '#5B21B6',
    borderColor: 'rgba(124, 58, 237, 0.25)',
    icon: 'Brain',
    targetScore: '75+',
    focus: 'เน้นความเร็วในการมอง Pattern และการวิเคราะห์ตัดชอยส์อย่างแม่นยำ',
    description: 'ครอบคลุมความสามารถทางตัวเลข, ภาษา, มิติสัมพันธ์ และการคิดเชิงตรรกะ',
    priorityTopics: [
      'Number Series (อนุกรมตัวเลข)',
      'Quantitative Comparison (เปรียบเทียบเชิงปริมาณ)',
      'Spatial 2D/3D & Cube Folding (คลี่ลูกเต๋าและหมุนภาพ)',
      'Figure Series (อนุกรมภาพ)',
      'Logical Deduction & Syllogism (ตรรกศาสตร์เชิงอนุมาน)'
    ],
    roadmap: [
      { order: 1, title: 'Number Series & Math Puzzles', status: 'High', desc: 'อนุกรมชั้นเดียว/หลายชั้น อนุกรมผสม' },
      { order: 2, title: 'Quantitative Comparison', status: 'High', desc: 'เปรียบเทียบคอลัมน์ A vs B vs ไม่พอ' },
      { order: 3, title: 'Data Sufficiency & Word Problems', status: 'Core', desc: 'ความเพียงพอของข้อมูลและโจทย์ปัญหา' },
      { order: 4, title: 'Verbal Reasoning', status: 'Core', desc: 'การสรุปความ สรุปเหตุผล การเปรียบเทียบคำ' },
      { order: 5, title: 'Spatial Reasoning (Cube/Folding/Rotation)', status: 'High', desc: 'การพับกล่อง มุมมอง และการหมุนภาพ 2D/3D' },
      { order: 6, title: 'Figure Series & Analogy', status: 'High', desc: 'อนุกรมภาพและภาพอุปมาอุปไมย' },
      { order: 7, title: 'Logical Deduction & Truth Statements', status: 'High', desc: 'ข้อความจริง/เท็จ เงื่อนไขทางตรรกะ' }
    ]
  },
  tgat3: {
    id: 'tgat3',
    code: 'TGAT3',
    name: 'TGAT3 สมรรถนะการทำงานในอนาคต',
    nameEn: 'Future Workforce Competencies',
    category: 'TGAT',
    color: '#DB2777', // pink
    colorHover: '#BE185D',
    bgLight: 'rgba(219, 39, 119, 0.08)',
    badgeBg: '#FDF2F8',
    badgeText: '#9D174D',
    borderColor: 'rgba(219, 39, 119, 0.25)',
    icon: 'Sparkles',
    targetScore: '80+',
    focus: 'เข้าใจ Mindset การทำงานยุคใหม่และการเลือก Action ที่สร้าง Value สูงสุด',
    description: 'ประเมิน 4 ด้าน: การสร้างคุณค่าและนวัตกรรม, การแก้ปัญหาที่ซับซ้อน, การบริหารอารมณ์ และการมีส่วนร่วมของพลเมือง',
    priorityTopics: [
      'Value Creation & Innovation (การสร้างคุณค่าและนวัตกรรม)',
      'Complex Problem Solving (การแก้ปัญหาที่ซับซ้อน)',
      'Emotional Management & Empathy (การบริหารจัดการอารมณ์)',
      'Civic Engagement (การมีส่วนร่วมและรับผิดชอบต่อสังคม)'
    ],
    roadmap: [
      { order: 1, title: 'Value Creation Mindset', status: 'Core', desc: 'เข้าใจความต้องการผู้ใช้และการต่อยอดไอเดีย' },
      { order: 2, title: 'Problem Solving Process', status: 'High', desc: 'ระบุปัญหา -> วิเคราะห์ข้อมูล -> ชั่งน้ำหนักทางเลือก' },
      { order: 3, title: 'Stakeholder Analysis & Negotiation', status: 'Core', desc: 'การประสานความร่วมมือระหว่างฝ่ายต่างๆ' },
      { order: 4, title: 'Emotional & Stress Regulation', status: 'Core', desc: 'EQ ในสถานที่ทำงานและการจัดการความขัดแย้ง' },
      { order: 5, title: 'Ethical & Civic Decision Making', status: 'Core', desc: 'ความรับผิดชอบต่อส่วนรวมและสิ่งแวดล้อม' },
      { order: 6, title: 'Full Situation-based Mock', status: 'Final', desc: 'ฝึกวิเคราะห์สถานการณ์จำลอง 60 ข้อ' }
    ],
    thinkingProcess: [
      'Problem (ระบุปัญหาแท้จริง)',
      'Available Information (ประเมินข้อมูลที่มี)',
      'Stakeholders (ผู้มีส่วนได้ส่วนเสียทุกคน)',
      'Possible Solutions (ทางเลือกที่เป็นไปได้ทั้งหมด)',
      'Best Action (เลือกแนวทางที่สร้างผลลัพธ์ยั่งยืนสุด)',
      'Evaluation (การติดตามผลและปรับปรุง)'
    ]
  },
  tpat3: {
    id: 'tpat3',
    code: 'TPAT3',
    name: 'TPAT3 ความถนัดวิทยาศาสตร์ เทคโนโลยี และวิศวกรรมศาสตร์',
    nameEn: 'Science, Technology & Engineering Aptitude',
    category: 'TPAT',
    color: '#EA580C', // orange
    colorHover: '#C2410C',
    bgLight: 'rgba(234, 88, 12, 0.08)',
    badgeBg: '#FFF7ED',
    badgeText: '#9A3412',
    borderColor: 'rgba(234, 88, 12, 0.25)',
    icon: 'Cog',
    targetScore: '70+',
    focus: 'ความเร็วในการคำนวณเชิงวิศวะ มิติสัมพันธ์ และความเข้าใจกลไกฟิสิกส์พื้นฐาน',
    description: 'ทดสอบการคิดเชิงตัวเลข, มิติสัมพันธ์, เหตุผลเชิงกลศาสตร์และฟิสิกส์, ความคิดเชิงวิทยาศาสตร์และเทคโนโลยี',
    priorityTopics: [
      'Mechanical Reasoning (คาน, รอก, เกียร์, แรง, งาน)',
      'Spatial Reasoning (หมุนรูป, พับกล่อง, มองภาพ 2D เป็น 3D)',
      'Numerical Reasoning (อัตราส่วน, ร้อยละ, สมการ, กราฟ)',
      'Engineering & Scientific Thinking (การออกแบบและแก้ปัญหา)',
      'Tech & Science Trends (เทคโนโลยีและสิ่งแวดล้อมปัจจุบัน)'
    ],
    roadmap: [
      { order: 1, title: 'Numerical Reasoning (Ratio, %, Equations)', status: 'High', desc: 'การคำนวณเร็ว อัตราส่วน เปอร์เซ็นต์ กราฟตาราง' },
      { order: 2, title: 'Spatial: Cube Folding & Rotation', status: 'High', desc: 'การพับกล่อง การหมุนวัตถุใน 3 มิติ' },
      { order: 3, title: 'Spatial: 2D to 3D & Mirror Projections', status: 'High', desc: 'ภาพฉาย Orthographic มุมมอง หน้า/บน/ข้าง' },
      { order: 4, title: 'Mechanical: Levers, Pulleys & Gears', status: 'High', desc: 'การได้เปรียบเชิงกล ทิศทางการหมุนของเฟือง' },
      { order: 5, title: 'Mechanical: Pressure, Fluid & Energy', status: 'Core', desc: 'ความดัน ของเหลว กฎการอนุรักษ์พลังงาน' },
      { order: 6, title: 'Scientific & Engineering Thinking', status: 'High', desc: 'กระบวนการออกแบบเชิงวิศวกรรม (EDP)' },
      { order: 7, title: 'Science & Tech Awareness', status: 'Core', desc: 'พลังงานสะอาด AI รถยนต์ไฟฟ้า เทคโนโลยีชีวภาพ' },
      { order: 8, title: 'Full 180-min Simulation', status: 'Final', desc: 'จำลองทำข้อสอบฉบับเต็ม 70 ข้อ 180 นาที' }
    ]
  },
  math1: {
    id: 'math1',
    code: 'Math1',
    name: 'A-Level คณิตศาสตร์ประยุกต์ 1',
    nameEn: 'Applied Mathematics 1',
    category: 'A-Level',
    color: '#DC2626', // red
    colorHover: '#B91C1C',
    bgLight: 'rgba(220, 38, 38, 0.08)',
    badgeBg: '#FEF2F2',
    badgeText: '#991B1B',
    borderColor: 'rgba(220, 38, 38, 0.25)',
    icon: 'Calculator',
    targetScore: '65+',
    focus: 'เก็บหัวข้อ High-Yield ให้ครบก่อน (สถิติ, ฟังก์ชัน, แคลคูลัส, ความน่าจะเป็น)',
    description: 'วิชาคัดกรองสำคัญของสายวิทย์และพาณิชย์ เน้นความแม่นยำและการประยุกต์โจทย์ซับซ้อน',
    priorityTopics: [
      'Function (ฟังก์ชัน)',
      'Statistics (สถิติและการกระจาย)',
      'Probability (ความน่าจะเป็นและการนับ)',
      'Calculus (ลิมิต อนุพันธ์ และปริพันธ์)',
      'Sequence & Series (ลำดับและอนุกรม)',
      'Analytic Geometry & Conic Sections (เรขาคณิตวิเคราะห์และภาคตัดกรวย)'
    ],
    roadmap: [
      { order: 1, title: 'Function', priority: 'High', desc: 'โดเมน เรนจ์ ฟังก์ชันผกผัน ฟังก์ชันประกอบ' },
      { order: 2, title: 'Exponential & Logarithm', priority: 'Medium', desc: 'สมการและอสมการ เอกซ์โพเนนเชียลและลอการิทึม' },
      { order: 3, title: 'Sequence & Series', priority: 'High', desc: 'เลขคณิต เรขาคณิต อนุกรมอนันต์ ดอกเบี้ยทบต้น' },
      { order: 4, title: 'Statistics', priority: 'High', desc: 'ค่ากลาง ตำแหน่งที่ การกระจายตัว และการแจกแจงปกติ' },
      { order: 5, title: 'Counting Principles', priority: 'High', desc: 'กฎการบวก-คูณ การจัดเรียงสับเปลี่ยน การจัดหมู่' },
      { order: 6, title: 'Probability & Random Variables', priority: 'High', desc: 'ความน่าจะเป็น ทฤษฎีบททวินาม ตัวแปรสุ่ม' },
      { order: 7, title: 'Calculus', priority: 'High', desc: 'ลิมิต อนุพันธ์ การประยุกต์ค่าสูงสุดต่ำสุด ปริพันธ์' },
      { order: 8, title: 'Analytic Geometry & Conics', priority: 'High', desc: 'เส้นตรง วงกลม วงรี พาราโบลา ไฮเพอร์โบลา' },
      { order: 9, title: 'Trigonometry', priority: 'Medium', desc: 'เอกลักษณ์ กฎของไซน์และโคไซน์ ฟังก์ชันตรีโกณ' },
      { order: 10, title: 'Vector in 2D & 3D', priority: 'Medium', desc: 'ดอทและครอสเวกเตอร์ ภาพฉายและการประยุกต์' },
      { order: 11, title: 'Matrix & System of Equations', priority: 'Medium', desc: 'ดีเทอร์มิแนนต์ อินเวอร์ส กฎของคราเมอร์' },
      { order: 12, title: 'Complex Numbers', priority: 'Medium', desc: 'จำนวนเชิงซ้อนในรูปเชิงขั้ว กราฟและรากที่ n' },
      { order: 13, title: 'Logic', priority: 'Standard', desc: 'ประพจน์ ตัวเชื่อม สัจนิรันดร์ ตัวบ่งปริมาณ' },
      { order: 14, title: 'Set & Real Number System', priority: 'Standard', desc: 'แผนภาพเวนน์ ช่วงและอสมการ ค่าสัมบูรณ์' }
    ]
  },
  physics: {
    id: 'physics',
    code: 'Physics',
    name: 'A-Level ฟิสิกส์',
    nameEn: 'Physics',
    category: 'A-Level',
    color: '#0284C7', // cyan / blue
    colorHover: '#0369A1',
    bgLight: 'rgba(2, 132, 199, 0.08)',
    badgeBg: '#F0F9FF',
    badgeText: '#075985',
    borderColor: 'rgba(2, 132, 199, 0.25)',
    icon: 'Atom',
    targetScore: '65+',
    focus: 'เข้าใจ Concept หลัก วาด Free Body Diagram ให้แม่นยำ และมองภาพกราฟออก',
    description: 'ครอบคลุมกลศาสตร์ ไฟฟ้า คลื่น แสง เสียง ความร้อน และฟิสิกส์ยุคใหม่',
    priorityTopics: [
      'Kinematics (การเคลื่อนที่แนวตรงและกราฟ)',
      'Newton’s Laws of Motion (กฎนิวตันและ FBD)',
      'Work, Energy & Power (งานและพลังงาน)',
      'Momentum & Collision (โมเมนตัมและการชน)',
      'Current Electricity (ไฟฟ้ากระแสตรง วงจรไฟฟ้า)',
      'Electrostatics & Magnetism (ไฟฟ้าสถิตและแม่เหล็ก)',
      'Waves & Light (คลื่นและแสงเชิงคลื่น/ทัศนศาสตร์)'
    ],
    roadmap: [
      { order: 1, title: 'Kinematics', priority: 'High', desc: '5 สูตรการเคลื่อนที่ กราฟ x-t, v-t, a-t การตกอิสระ' },
      { order: 2, title: 'Newton’s Laws of Motion', priority: 'High', desc: 'กฎ 3 ข้อ Free Body Diagram แรงเสียดทาน แรงดึง' },
      { order: 3, title: 'Work, Energy & Power', priority: 'High', desc: 'กฎอนุรักษ์พลังงาน งานจากแรงคงที่/ไม่คงที่' },
      { order: 4, title: 'Momentum & Collision', priority: 'High', desc: 'การดล อนุรักษ์โมเมนตัม การชนแบบยืดหยุ่น/ไม่ยืดหยุ่น' },
      { order: 5, title: 'Equilibrium', priority: 'High', desc: 'สมดุลต่อการเลื่อนที่ สมดุลต่อการหมุน โมเมนต์' },
      { order: 6, title: 'Projectile Motion', priority: 'Medium', desc: 'การเคลื่อนที่ 2 มิติวิถีโค้ง ความเร็วต้นและมุม' },
      { order: 7, title: 'Circular Motion', priority: 'Medium', desc: 'แรงสู่ศูนย์กลาง การเลี้ยวโค้งของรถ ดาวเทียม' },
      { order: 8, title: 'Simple Harmonic Motion (SHM)', priority: 'Medium', desc: 'ลูกตุ้ม สปริง การสั่น แอมพลิจูด คาบ' },
      { order: 9, title: 'Current Electricity', priority: 'High', desc: 'กฎของโอห์ม วงจรตัวต้านทาน กำลังไฟฟ้า กฎเคอร์ชอฟฟ์' },
      { order: 10, title: 'Electrostatics', priority: 'High', desc: 'กฎคูลอมบ์ สนามไฟฟ้า ศักย์ไฟฟ้า ตัวเก็บประจุ' },
      { order: 11, title: 'Magnetism & Induction', priority: 'High', desc: 'แรงแม่เหล็ก กฎมือขวา มอเตอร์และเครื่องกำเนิด' },
      { order: 12, title: 'Waves', priority: 'High', desc: 'สมบัติของคลื่น การสะท้อน หักเห แทรกสอด เลี้ยวเบน' },
      { order: 13, title: 'Light & Optics', priority: 'High', desc: 'การสะท้อนกระจก การหักเหเลนส์ การแทรกสอดสลิต' },
      { order: 14, title: 'Sound', priority: 'Medium', desc: 'ความเข้มและระดับเสียง ปรากฏการณ์ดอปเปลอร์ การสั่นพ้อง' },
      { order: 15, title: 'Heat & Thermodynamics', priority: 'Medium', desc: 'ความร้อนจำเพาะ การเปลี่ยนสถานะ กฎข้อที่ 1' },
      { order: 16, title: 'Gas Laws & Kinetic Theory', priority: 'Medium', desc: 'PV=nRT พลังงานจลน์เฉลี่ยของแก๊ส' },
      { order: 17, title: 'Fluid Mechanics', priority: 'Medium', desc: 'ความหนาแน่น แรงพยุง กฎแบร์นูลลี' },
      { order: 18, title: 'Atomic Physics', priority: 'Medium', desc: 'โฟโตอิเล็กทริก แบบจำลองอะตอมบอห์ร ทฤษฎีควอนตัม' },
      { order: 19, title: 'Nuclear Physics', priority: 'Medium', desc: 'กัมมันตภาพรังสี ครึ่งชีวิต ฟิชชัน ฟิวชัน พลังงานยึดเหนี่ยว' }
    ]
  },
  english: {
    id: 'english',
    code: 'English',
    name: 'A-Level ภาษาอังกฤษ',
    nameEn: 'English',
    category: 'A-Level',
    color: '#059669', // green
    colorHover: '#047857',
    bgLight: 'rgba(5, 150, 105, 0.08)',
    badgeBg: '#ECFDF5',
    badgeText: '#065F46',
    borderColor: 'rgba(5, 150, 105, 0.25)',
    icon: 'BookOpen',
    targetScore: '75+',
    focus: 'เก็บศัพท์วันละ 15-20 คำ อ่านจับใจความรวดเร็ว และเข้าใจการเชื่อมโยง Paragraph',
    description: 'เน้น Reading Comprehension เชิงวิชาการ, Vocabulary ในบริบท, Text Completion และ Paragraph Organization',
    priorityTopics: [
      'Reading Comprehension Skills (Main Idea, Detail, Inference)',
      'Academic Vocabulary (ศัพท์ 15-20 คำ/วัน)',
      'Text Completion & Clues',
      'Paragraph Organization (จัดลำดับย่อหน้า)',
      'Situational Conversation & Tone'
    ],
    roadmap: [
      { order: 1, title: 'Daily Vocabulary Habit', priority: 'High', desc: 'ท่องศัพท์วันละ 15-20 คำ พร้อมคำพ้อง (Synonyms)' },
      { order: 2, title: 'Main Idea & Paragraph Topic', priority: 'High', desc: 'หาใจความสำคัญเร็วจาก Topic Sentence' },
      { order: 3, title: 'Inference & Author’s Tone', priority: 'High', desc: 'การตีความความหมายแฝง ทัศนคติ และน้ำเสียงของผู้เขียน' },
      { order: 4, title: 'Reference & Vocabulary in Context', priority: 'High', desc: 'การหาคำอ้างอิง pronoun และเดาศัพท์จาก Context Clues' },
      { order: 5, title: 'Conversation & Dialogue Completion', priority: 'Medium', desc: 'บทสนทนาสถานการณ์วิชาการและสังคม' },
      { order: 6, title: 'Text Completion & Grammar in Context', priority: 'High', desc: 'เติมคำและโครงสร้างประโยคไวยากรณ์' },
      { order: 7, title: 'Paragraph Organization', priority: 'High', desc: 'การเรียงประโยค 1-5 ตามตรรกะและตัวเชื่อม (Transition)' },
      { order: 8, title: 'Timed Full Mock Exam', priority: 'Final', desc: 'ฝึกทำข้อสอบ 80 ข้อ 90 นาที' }
    ],
    vocabTarget: '15-20 คำต่อวัน'
  }
};

export const SUBJECT_LIST = Object.values(SUBJECTS);
