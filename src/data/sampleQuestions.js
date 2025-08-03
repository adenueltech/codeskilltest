// Smaller sample dataset for testing
export const sampleQuizData = {
  html: {
    name: 'HTML',
    icon: '🌐',
    color: '#e34c26',
    levels: {
      beginner: {
        name: 'Beginner',
        questions: [
          {
            id: 1,
            question: 'What does HTML stand for?',
            options: [
              'Hyper Text Markup Language',
              'High Tech Modern Language',
              'Home Tool Markup Language',
              'Hyperlink and Text Markup Language'
            ],
            correctAnswer: 0,
            explanation: 'HTML stands for Hyper Text Markup Language, which is the standard markup language for creating web pages.'
          },
          {
            id: 2,
            question: 'Which HTML element is used for the largest heading?',
            options: ['<h6>', '<h1>', '<heading>', '<header>'],
            correctAnswer: 1,
            explanation: '<h1> is used for the largest heading, with <h6> being the smallest.'
          },
          {
            id: 3,
            question: 'What is the correct HTML element for inserting a line break?',
            options: ['<break>', '<br>', '<lb>', '<newline>'],
            correctAnswer: 1,
            explanation: '<br> is the correct HTML element for inserting a line break.'
          }
        ]
      },
      intermediate: {
        name: 'Intermediate',
        questions: [
          {
            id: 4,
            question: 'Which HTML5 element is used to specify independent, self-contained content?',
            options: ['<section>', '<article>', '<aside>', '<div>'],
            correctAnswer: 1,
            explanation: '<article> specifies independent, self-contained content that makes sense on its own.'
          },
          {
            id: 5,
            question: 'What is the purpose of the "data-*" attributes in HTML5?',
            options: [
              'To store database information',
              'To store custom data private to the page',
              'To define data types',
              'To create data tables'
            ],
            correctAnswer: 1,
            explanation: 'Data-* attributes allow you to store custom data private to the page or application.'
          }
        ]
      },
      advanced: {
        name: 'Advanced',
        questions: [
          {
            id: 6,
            question: 'Which HTML5 API allows you to store data locally within the user\'s browser?',
            options: ['SessionStorage', 'LocalStorage', 'WebStorage', 'All of the above'],
            correctAnswer: 3,
            explanation: 'All three are part of the Web Storage API that allows local data storage.'
          }
        ]
      }
    }
  },
  css: {
    name: 'CSS',
    icon: '🎨',
    color: '#1572b6',
    levels: {
      beginner: {
        name: 'Beginner',
        questions: [
          {
            id: 7,
            question: 'What does CSS stand for?',
            options: [
              'Creative Style Sheets',
              'Cascading Style Sheets',
              'Computer Style Sheets',
              'Colorful Style Sheets'
            ],
            correctAnswer: 1,
            explanation: 'CSS stands for Cascading Style Sheets, used for styling HTML documents.'
          },
          {
            id: 8,
            question: 'Which CSS property is used to change the text color?',
            options: ['text-color', 'color', 'font-color', 'text-style'],
            correctAnswer: 1,
            explanation: 'The "color" property is used to change the text color in CSS.'
          }
        ]
      },
      intermediate: {
        name: 'Intermediate',
        questions: [
          {
            id: 9,
            question: 'What is the CSS Box Model?',
            options: [
              'A way to create boxes',
              'Content, padding, border, margin',
              'A layout method',
              'A design pattern'
            ],
            correctAnswer: 1,
            explanation: 'The CSS Box Model consists of content, padding, border, and margin areas.'
          }
        ]
      },
      advanced: {
        name: 'Advanced',
        questions: [
          {
            id: 10,
            question: 'What is CSS Grid Layout?',
            options: [
              'A table layout',
              'A two-dimensional layout system',
              'A flexbox alternative',
              'A positioning method'
            ],
            correctAnswer: 1,
            explanation: 'CSS Grid is a two-dimensional layout system for creating complex layouts.'
          }
        ]
      }
    }
  },
  javascript: {
    name: 'JavaScript',
    icon: '⚡',
    color: '#f7df1e',
    levels: {
      beginner: {
        name: 'Beginner',
        questions: [
          {
            id: 11,
            question: 'Which of the following is the correct way to declare a variable in JavaScript?',
            options: ['var myVar;', 'variable myVar;', 'v myVar;', 'declare myVar;'],
            correctAnswer: 0,
            explanation: 'var, let, or const are used to declare variables in JavaScript.'
          },
          {
            id: 12,
            question: 'How do you write "Hello World" in an alert box?',
            options: [
              'alertBox("Hello World");',
              'msg("Hello World");',
              'alert("Hello World");',
              'msgBox("Hello World");'
            ],
            correctAnswer: 2,
            explanation: 'The alert() function displays a message in a dialog box.'
          }
        ]
      },
      intermediate: {
        name: 'Intermediate',
        questions: [
          {
            id: 13,
            question: 'What is the difference between "==" and "===" in JavaScript?',
            options: [
              'No difference',
              '== checks value, === checks value and type',
              '=== is faster',
              '== is deprecated'
            ],
            correctAnswer: 1,
            explanation: '== performs type coercion, while === checks both value and type without coercion.'
          }
        ]
      },
      advanced: {
        name: 'Advanced',
        questions: [
          {
            id: 14,
            question: 'What is a Promise in JavaScript?',
            options: [
              'A guarantee',
              'An object representing eventual completion of async operation',
              'A type of function',
              'A variable type'
            ],
            correctAnswer: 1,
            explanation: 'A Promise represents the eventual completion (or failure) of an asynchronous operation.'
          }
        ]
      }
    }
  }
};

export const getBadgeForScore = (score, totalQuestions) => {
  const percentage = (score / totalQuestions) * 100;
  
  if (percentage >= 90) {
    return {
      name: 'Master',
      icon: '🏆',
      color: '#FFD700',
      description: 'Outstanding performance!'
    };
  } else if (percentage >= 80) {
    return {
      name: 'Expert',
      icon: '🥇',
      color: '#C0C0C0',
      description: 'Excellent work!'
    };
  } else if (percentage >= 70) {
    return {
      name: 'Proficient',
      icon: '🥈',
      color: '#CD7F32',
      description: 'Good job!'
    };
  } else if (percentage >= 60) {
    return {
      name: 'Competent',
      icon: '🥉',
      color: '#8B4513',
      description: 'Keep practicing!'
    };
  } else {
    return {
      name: 'Novice',
      icon: '📚',
      color: '#808080',
      description: 'Study more and try again!'
    };
  }
};

export const getRandomQuestions = (questions, count = 10) => {
  const shuffled = [...questions].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, Math.min(count, questions.length));
};