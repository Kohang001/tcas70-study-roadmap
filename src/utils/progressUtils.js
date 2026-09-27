// Utilities for computing task completion, percentages, and streaks

export function getTaskProgress(task, subtaskStates = {}) {
  if (!task || !task.subtasks || task.subtasks.length === 0) {
    // If no subtasks, check direct task completion
    const isDone = !!subtaskStates[task.id];
    return {
      totalSubtasks: 1,
      completedSubtasks: isDone ? 1 : 0,
      percent: isDone ? 100 : 0,
      isCompleted: isDone,
      status: isDone ? 'completed' : 'not_started'
    };
  }

  const total = task.subtasks.length;
  const completed = task.subtasks.filter(st => !!subtaskStates[st.id]).length;
  const percent = total > 0 ? Math.round((completed / total) * 100) : 0;
  const isCompleted = total > 0 && completed === total;
  
  let status = 'not_started';
  if (isCompleted) {
    status = 'completed';
  } else if (completed > 0) {
    status = 'in_progress';
  }

  return {
    totalSubtasks: total,
    completedSubtasks: completed,
    percent,
    isCompleted,
    status
  };
}

export function getDayProgress(tasks = [], subtaskStates = {}) {
  if (!tasks || tasks.length === 0) {
    return {
      totalTasks: 0,
      completedTasks: 0,
      totalSubtasks: 0,
      completedSubtasks: 0,
      percent: 0,
      isAllCompleted: false
    };
  }

  let totalSub = 0;
  let compSub = 0;
  let compTasks = 0;

  tasks.forEach(task => {
    const prog = getTaskProgress(task, subtaskStates);
    totalSub += prog.totalSubtasks;
    compSub += prog.completedSubtasks;
    if (prog.isCompleted) {
      compTasks += 1;
    }
  });

  const percent = totalSub > 0 ? Math.round((compSub / totalSub) * 100) : 0;
  const isAllCompleted = tasks.length > 0 && compTasks === tasks.length;

  return {
    totalTasks: tasks.length,
    completedTasks: compTasks,
    totalSubtasks: totalSub,
    completedSubtasks: compSub,
    percent,
    isAllCompleted
  };
}

export function getWeekProgress(daysPlans = [], subtaskStates = {}) {
  let totalTasks = 0;
  let completedTasks = 0;
  let totalSubtasks = 0;
  let completedSubtasks = 0;

  daysPlans.forEach(day => {
    if (day && day.tasks) {
      const p = getDayProgress(day.tasks, subtaskStates);
      totalTasks += p.totalTasks;
      completedTasks += p.completedTasks;
      totalSubtasks += p.totalSubtasks;
      completedSubtasks += p.completedSubtasks;
    }
  });

  const percent = totalSubtasks > 0 ? Math.round((completedSubtasks / totalSubtasks) * 100) : 0;

  return {
    totalTasks,
    completedTasks,
    totalSubtasks,
    completedSubtasks,
    percent
  };
}

export function getSubjectProgress(subjectCode, dailyPlans = [], subtaskStates = {}) {
  const normCode = subjectCode.toUpperCase();
  let totalTasks = 0;
  let completedTasks = 0;
  let totalSubtasks = 0;
  let completedSubtasks = 0;

  dailyPlans.forEach(day => {
    if (day && day.tasks) {
      day.tasks.forEach(task => {
        if (task.subject.toUpperCase() === normCode) {
          totalTasks += 1;
          const prog = getTaskProgress(task, subtaskStates);
          totalSubtasks += prog.totalSubtasks;
          completedSubtasks += prog.completedSubtasks;
          if (prog.isCompleted) {
            completedTasks += 1;
          }
        }
      });
    }
  });

  const percent = totalSubtasks > 0 ? Math.round((completedSubtasks / totalSubtasks) * 100) : 0;

  return {
    totalTasks,
    completedTasks,
    totalSubtasks,
    completedSubtasks,
    remainingTasks: Math.max(0, totalTasks - completedTasks),
    percent
  };
}

// Calculate study streak based on days with at least 1 completed task
export function calculateStreak(dailyPlans = [], subtaskStates = {}, activeTodayStr) {
  // Map of date string to hasAnyCompleted
  const activeDays = new Set();

  dailyPlans.forEach(day => {
    if (day && day.tasks && day.tasks.length > 0) {
      const hasCompleted = day.tasks.some(task => {
        const prog = getTaskProgress(task, subtaskStates);
        return prog.completedSubtasks > 0;
      });
      if (hasCompleted) {
        activeDays.add(day.date);
      }
    }
  });

  let streak = 0;
  const current = new Date(activeTodayStr);

  // Check if today was completed
  const todayStr = activeTodayStr;
  const isTodayActive = activeDays.has(todayStr);

  // Start from today or yesterday
  const checkDate = new Date(current);
  if (!isTodayActive) {
    // Check if yesterday was active to keep streak alive
    checkDate.setDate(checkDate.getDate() - 1);
  }

  while (true) {
    const year = checkDate.getFullYear();
    const month = String(checkDate.getMonth() + 1).padStart(2, '0');
    const day = String(checkDate.getDate()).padStart(2, '0');
    const dStr = `${year}-${month}-${day}`;

    if (activeDays.has(dStr)) {
      streak += 1;
      checkDate.setDate(checkDate.getDate() - 1);
    } else {
      break;
    }
  }

  // Base friendly starting streak for demo/feel if 0
  return streak;
}
