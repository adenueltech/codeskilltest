import React, { createContext, useContext, useReducer, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AppContext = createContext();

const initialState = {
  progress: {
    html: {
      beginner: { completed: false, score: 0, attempts: 0 },
      intermediate: { completed: false, score: 0, attempts: 0 },
      advanced: { completed: false, score: 0, attempts: 0 },
    },
    css: {
      beginner: { completed: false, score: 0, attempts: 0 },
      intermediate: { completed: false, score: 0, attempts: 0 },
      advanced: { completed: false, score: 0, attempts: 0 },
    },
    javascript: {
      beginner: { completed: false, score: 0, attempts: 0 },
      intermediate: { completed: false, score: 0, attempts: 0 },
      advanced: { completed: false, score: 0, attempts: 0 },
    },
  },
  badges: [],
  totalScore: 0,
  totalQuizzes: 0,
};

const appReducer = (state, action) => {
  switch (action.type) {
    case 'LOAD_DATA':
      return { ...state, ...action.payload };
    
    case 'UPDATE_PROGRESS':
      const { technology, level, score, totalQuestions } = action.payload;
      const newProgress = {
        ...state.progress,
        [technology]: {
          ...state.progress[technology],
          [level]: {
            completed: true,
            score: score,
            attempts: state.progress[technology][level].attempts + 1,
            bestScore: Math.max(state.progress[technology][level].score || 0, score),
          },
        },
      };
      
      return {
        ...state,
        progress: newProgress,
        totalScore: state.totalScore + score,
        totalQuizzes: state.totalQuizzes + 1,
      };
    
    case 'ADD_BADGE':
      const badgeExists = state.badges.some(badge => 
        badge.technology === action.payload.technology && 
        badge.level === action.payload.level
      );
      
      if (badgeExists) {
        return {
          ...state,
          badges: state.badges.map(badge =>
            badge.technology === action.payload.technology && 
            badge.level === action.payload.level
              ? { ...badge, ...action.payload }
              : badge
          ),
        };
      }
      
      return {
        ...state,
        badges: [...state.badges, action.payload],
      };
    
    case 'RESET_PROGRESS':
      return initialState;
    
    default:
      return state;
  }
};

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  // Load data from AsyncStorage on app start
  useEffect(() => {
    loadData();
  }, []);

  // Save data to AsyncStorage whenever state changes
  useEffect(() => {
    saveData();
  }, [state]);

  const loadData = async () => {
    try {
      const savedData = await AsyncStorage.getItem('codeSkillTestData');
      if (savedData) {
        const parsedData = JSON.parse(savedData);
        dispatch({ type: 'LOAD_DATA', payload: parsedData });
      }
    } catch (error) {
      console.error('Error loading data:', error);
    }
  };

  const saveData = async () => {
    try {
      await AsyncStorage.setItem('codeSkillTestData', JSON.stringify(state));
    } catch (error) {
      console.error('Error saving data:', error);
    }
  };

  const updateProgress = (technology, level, score, totalQuestions) => {
    dispatch({
      type: 'UPDATE_PROGRESS',
      payload: { technology, level, score, totalQuestions },
    });
  };

  const addBadge = (badge) => {
    dispatch({ type: 'ADD_BADGE', payload: badge });
  };

  const resetProgress = () => {
    dispatch({ type: 'RESET_PROGRESS' });
  };

  const getProgressPercentage = () => {
    const totalLevels = 9; // 3 technologies × 3 levels each
    const completedLevels = Object.values(state.progress).reduce((total, tech) => {
      return total + Object.values(tech).filter(level => level.completed).length;
    }, 0);
    
    return Math.round((completedLevels / totalLevels) * 100);
  };

  const getTechnologyProgress = (technology) => {
    const techProgress = state.progress[technology];
    const completed = Object.values(techProgress).filter(level => level.completed).length;
    const total = Object.keys(techProgress).length;
    return { completed, total, percentage: Math.round((completed / total) * 100) };
  };

  const getBestScore = (technology, level) => {
    return state.progress[technology]?.[level]?.bestScore || 0;
  };

  const isLevelCompleted = (technology, level) => {
    return state.progress[technology]?.[level]?.completed || false;
  };

  const getAttempts = (technology, level) => {
    return state.progress[technology]?.[level]?.attempts || 0;
  };

  const value = {
    ...state,
    updateProgress,
    addBadge,
    resetProgress,
    getProgressPercentage,
    getTechnologyProgress,
    getBestScore,
    isLevelCompleted,
    getAttempts,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};