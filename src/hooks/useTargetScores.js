import { useCallback, useState } from 'react';
import { DEFAULT_TARGET_SCORES } from '../data/targetScores';

const STORAGE_KEY = 'tcas70_target_scores';

function loadTargetScores() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);

    if (!saved) {
      return DEFAULT_TARGET_SCORES;
    }

    const parsed = JSON.parse(saved);

    return {
      ...DEFAULT_TARGET_SCORES,
      ...parsed,
    };
  } catch (error) {
    console.error('Failed to load target scores:', error);
    return DEFAULT_TARGET_SCORES;
  }
}

export default function useTargetScores() {
  const [targetScores, setTargetScores] =
    useState(loadTargetScores);

  const updateTargetScore = useCallback(
    (subject, score) => {
      const numericScore = Number(score);

      if (Number.isNaN(numericScore)) {
        return;
      }

      const safeScore = Math.min(
        100,
        Math.max(0, numericScore)
      );

      setTargetScores((prev) => {
        const next = {
          ...prev,
          [subject]: safeScore,
        };

        localStorage.setItem(
          STORAGE_KEY,
          JSON.stringify(next)
        );

        return next;
      });
    },
    []
  );

  const resetTargetScores = useCallback(() => {
    const defaults = {
      ...DEFAULT_TARGET_SCORES,
    };

    setTargetScores(defaults);

    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify(defaults)
    );
  }, []);

  return {
    targetScores,
    updateTargetScore,
    resetTargetScores,
  };
}