import { useState, useEffect, useCallback } from "react";
import { formatDateToISO } from "../utils/dateUtils";
import { ALL_DAILY_PLANS } from "../data/studyPlan";
import { calculateStreak } from "../utils/progressUtils";

const STORAGE_KEYS = {
  SUBTASKS: "tcas70_subtasks",
  DAILY_NOTES: "tcas70_daily_notes",
  TASK_NOTES: "tcas70_task_notes",
  ERROR_LOGS: "tcas70_error_logs",
  SIMULATED_DATE: "tcas70_simulated_date",
  ONBOARDED: "tcas70_onboarded",
  STUDENT_NAME: "tcas70_student_name",
};

const EXAM_CHECKLIST_PREFIX = "tcas70_exam_checklist_";
const DEFAULT_ERROR_LOGS = [];

function loadFromStorage(key, fallback) {
  try {
    const item = localStorage.getItem(key);
    if (item !== null) {
      return JSON.parse(item);
    }
  } catch (e) {
    console.error(`Error loading ${key} from localStorage:`, e);
  }
  return fallback;
}

function saveToStorage(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (e) {
    console.error(`Error saving ${key} to localStorage:`, e);
  }
}

function collectExamChecklists() {
  const checklists = {};

  Object.keys(localStorage).forEach((key) => {
    if (!key.startsWith(EXAM_CHECKLIST_PREFIX)) {
      return;
    }

    const examDate = key.slice(EXAM_CHECKLIST_PREFIX.length);

    try {
      const saved = localStorage.getItem(key);

      if (saved) {
        checklists[examDate] = JSON.parse(saved);
      }
    } catch (error) {
      console.error(`Failed to export exam checklist ${examDate}:`, error);
    }
  });

  return checklists;
}

function restoreExamChecklists(checklists) {
  if (
    !checklists ||
    typeof checklists !== "object" ||
    Array.isArray(checklists)
  ) {
    return;
  }

  // ล้าง checklist ปัจจุบันก่อน
  Object.keys(localStorage).forEach((key) => {
    if (key.startsWith(EXAM_CHECKLIST_PREFIX)) {
      localStorage.removeItem(key);
    }
  });

  // คืนค่าจาก backup
  Object.entries(checklists).forEach(([examDate, checklist]) => {
    localStorage.setItem(
      `${EXAM_CHECKLIST_PREFIX}${examDate}`,
      JSON.stringify(checklist),
    );
  });
}

export function useStudyProgress() {
  // Real today date string with live timer
  const [realTodayStr, setRealTodayStr] = useState(() =>
    formatDateToISO(new Date()),
  );

  // Auto-lock today toggle (enabled by default to guarantee the day is always locked to real today)
  const [autoLockToday, setAutoLockToday] = useState(() => {
    try {
      const stored = localStorage.getItem("tcas70_auto_lock_today");
      return stored !== null ? stored === "true" : true;
    } catch {
      return true;
    }
  });

  // Keep realTodayStr strictly updated (detect midnight rollover automatically)
  useEffect(() => {
    const updateToday = () => {
      const current = formatDateToISO(new Date());
      setRealTodayStr((prev) => {
        if (prev !== current) {
          return current;
        }
        return prev;
      });
    };

    // Check immediately and every 10 seconds
    const interval = setInterval(updateToday, 10000);
    return () => clearInterval(interval);
  }, []);

  // State
  const [subtaskStates, setSubtaskStates] = useState(() =>
    loadFromStorage(STORAGE_KEYS.SUBTASKS, {}),
  );

  const [dailyNotes, setDailyNotes] = useState(() =>
    loadFromStorage(STORAGE_KEYS.DAILY_NOTES, {
      "2026-09-28":
        "วันแรกของการเริ่มลุย Roadmap TCAS70! ตั้งเป้าเก็บ TGAT1 และฟังก์ชันให้แม่นยำ",
    }),
  );

  const [taskNotes, setTaskNotes] = useState(() =>
    loadFromStorage(STORAGE_KEYS.TASK_NOTES, {}),
  );

  const [errorLogs, setErrorLogs] = useState(() =>
    loadFromStorage(STORAGE_KEYS.ERROR_LOGS, DEFAULT_ERROR_LOGS),
  );

  const [simulatedDate, setSimulatedDateState] = useState(() => {
    try {
      return localStorage.getItem(STORAGE_KEYS.SIMULATED_DATE) || null;
    } catch {
      return null;
    }
  });

  const [onboarded, setOnboardedState] = useState(() => {
    try {
      return localStorage.getItem(STORAGE_KEYS.ONBOARDED) === "true";
    } catch {
      return false;
    }
  });

  const [studentName, setStudentNameState] = useState(() => {
    try {
      return localStorage.getItem(STORAGE_KEYS.STUDENT_NAME) || "น้องเด็ก 70";
    } catch {
      return "น้องเด็ก 70";
    }
  });

  // Effective today: if autoLockToday is true, always strictly lock to realTodayStr!
  const activeToday = autoLockToday
    ? realTodayStr
    : simulatedDate || realTodayStr;

  // Persist handlers
  const toggleSubtask = useCallback((subtaskId) => {
    setSubtaskStates((prev) => {
      const next = { ...prev, [subtaskId]: !prev[subtaskId] };
      saveToStorage(STORAGE_KEYS.SUBTASKS, next);
      return next;
    });
  }, []);

  const setTaskComplete = useCallback((task, complete = true) => {
    setSubtaskStates((prev) => {
      const next = { ...prev };
      if (task.subtasks && task.subtasks.length > 0) {
        task.subtasks.forEach((st) => {
          next[st.id] = complete;
        });
      } else {
        next[task.id] = complete;
      }
      saveToStorage(STORAGE_KEYS.SUBTASKS, next);
      return next;
    });
  }, []);

  const saveDailyNote = useCallback((dateStr, note) => {
    setDailyNotes((prev) => {
      const next = { ...prev, [dateStr]: note };
      saveToStorage(STORAGE_KEYS.DAILY_NOTES, next);
      return next;
    });
  }, []);

  const saveTaskNote = useCallback((taskId, note) => {
    setTaskNotes((prev) => {
      const next = { ...prev, [taskId]: note };
      saveToStorage(STORAGE_KEYS.TASK_NOTES, next);
      return next;
    });
  }, []);

  const addErrorLog = useCallback(
    (logEntry) => {
      setErrorLogs((prev) => {
        const newEntry = {
          ...logEntry,
          id: `err-${Date.now()}`,
          date: logEntry.date || activeToday,
        };
        const next = [newEntry, ...prev];
        saveToStorage(STORAGE_KEYS.ERROR_LOGS, next);
        return next;
      });
    },
    [activeToday],
  );

  const deleteErrorLog = useCallback((id) => {
    setErrorLogs((prev) => {
      const next = prev.filter((item) => item.id !== id);
      saveToStorage(STORAGE_KEYS.ERROR_LOGS, next);
      return next;
    });
  }, []);

  const updateErrorLog = useCallback((id, updatedData) => {
    setErrorLogs((prev) => {
      const next = prev.map((item) =>
        item.id === id ? { ...item, ...updatedData } : item,
      );
      saveToStorage(STORAGE_KEYS.ERROR_LOGS, next);
      return next;
    });
  }, []);

  const setSimulatedDate = useCallback((dateStr) => {
    setSimulatedDateState(dateStr);
    if (dateStr) {
      setAutoLockToday(false);
      localStorage.setItem("tcas70_auto_lock_today", "false");
      localStorage.setItem(STORAGE_KEYS.SIMULATED_DATE, dateStr);
    } else {
      setAutoLockToday(true);
      localStorage.setItem("tcas70_auto_lock_today", "true");
      localStorage.removeItem(STORAGE_KEYS.SIMULATED_DATE);
    }
  }, []);

  const lockToRealToday = useCallback(() => {
    const today = formatDateToISO(new Date());
    setRealTodayStr(today);
    setAutoLockToday(true);
    setSimulatedDateState(null);
    localStorage.setItem("tcas70_auto_lock_today", "true");
    localStorage.removeItem(STORAGE_KEYS.SIMULATED_DATE);
  }, []);

  const setOnboarded = useCallback((val) => {
    setOnboardedState(val);
    localStorage.setItem(STORAGE_KEYS.ONBOARDED, String(val));
  }, []);

  const setStudentName = useCallback((name) => {
    setStudentNameState(name);
    localStorage.setItem(STORAGE_KEYS.STUDENT_NAME, name);
  }, []);

  // Reset today's progress
  const resetToday = useCallback(
    (dateStr = activeToday) => {
      setSubtaskStates((prev) => {
        const next = { ...prev };
        // Delete keys that start with dateStr
        Object.keys(next).forEach((k) => {
          if (k.startsWith(dateStr)) {
            delete next[k];
          }
        });
        saveToStorage(STORAGE_KEYS.SUBTASKS, next);
        return next;
      });
    },
    [activeToday],
  );

  // Reset all data
  const resetAll = useCallback(() => {
    setSubtaskStates({});
    setDailyNotes({});
    setTaskNotes({});
    setErrorLogs(DEFAULT_ERROR_LOGS);

    localStorage.removeItem(STORAGE_KEYS.SUBTASKS);
    localStorage.removeItem(STORAGE_KEYS.DAILY_NOTES);
    localStorage.removeItem(STORAGE_KEYS.TASK_NOTES);

    saveToStorage(STORAGE_KEYS.ERROR_LOGS, DEFAULT_ERROR_LOGS);

    // Reset exam-day checklists
    Object.keys(localStorage).forEach((key) => {
      if (
        key.startsWith("tcas70_exam_checklist_") ||
        key === "tcas70_exam_checklist"
      ) {
        localStorage.removeItem(key);
      }
    });
  }, []);

  // Export JSON
  const exportData = useCallback(
    (extraData = {}) => {
      const data = {
        version: "2.0",
        exportDate: new Date().toISOString(),

        studentName,
        subtaskStates,
        dailyNotes,
        taskNotes,
        errorLogs,

        examChecklists: collectExamChecklists(),

        ...extraData,
      };

      const blob = new Blob([JSON.stringify(data, null, 2)], {
        type: "application/json",
      });
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = `tcas70-study-data-${activeToday}.json`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
    },
    [studentName, subtaskStates, dailyNotes, taskNotes, errorLogs, activeToday],
  );

  // Import JSON
  const importData = useCallback((jsonData) => {
    try {
      if (jsonData.subtaskStates) {
        setSubtaskStates(jsonData.subtaskStates);
        saveToStorage(STORAGE_KEYS.SUBTASKS, jsonData.subtaskStates);
      }
      if (jsonData.dailyNotes) {
        setDailyNotes(jsonData.dailyNotes);
        saveToStorage(STORAGE_KEYS.DAILY_NOTES, jsonData.dailyNotes);
      }
      if (jsonData.taskNotes) {
        setTaskNotes(jsonData.taskNotes);
        saveToStorage(STORAGE_KEYS.TASK_NOTES, jsonData.taskNotes);
      }
      if (Array.isArray(jsonData.errorLogs)) {
        setErrorLogs(jsonData.errorLogs);
        saveToStorage(STORAGE_KEYS.ERROR_LOGS, jsonData.errorLogs);
      }
      if (jsonData.studentName) {
        setStudentNameState(jsonData.studentName);
        localStorage.setItem(STORAGE_KEYS.STUDENT_NAME, jsonData.studentName);
      }
      if (
        jsonData.examChecklists &&
        typeof jsonData.examChecklists === "object"
      ) {
        restoreExamChecklists(jsonData.examChecklists);
      }
      return { success: true };
    } catch (e) {
      console.error("Import failed:", e);
      return { success: false, error: e.message };
    }
  }, []);

  // Compute study streak
  const streak = calculateStreak(ALL_DAILY_PLANS, subtaskStates, activeToday);

  return {
    realTodayStr,
    activeToday,
    simulatedDate,
    autoLockToday,
    lockToRealToday,
    setSimulatedDate,
    studentName,
    setStudentName,
    onboarded,
    setOnboarded,
    subtaskStates,
    dailyNotes,
    taskNotes,
    errorLogs,
    streak,
    toggleSubtask,
    setTaskComplete,
    saveDailyNote,
    saveTaskNote,
    addErrorLog,
    deleteErrorLog,
    updateErrorLog,
    resetToday,
    resetAll,
    exportData,
    importData,
  };
}
