export const quizData = {
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
          },
          {
            id: 4,
            question: 'Which attribute is used to provide a unique identifier for an HTML element?',
            options: ['class', 'name', 'id', 'key'],
            correctAnswer: 2,
            explanation: 'The "id" attribute provides a unique identifier for an HTML element.'
          },
          {
            id: 5,
            question: 'What is the correct HTML for creating a hyperlink?',
            options: [
              '<a url="http://example.com">Example</a>',
              '<a href="http://example.com">Example</a>',
              '<a link="http://example.com">Example</a>',
              '<link href="http://example.com">Example</link>'
            ],
            correctAnswer: 1,
            explanation: 'The correct syntax uses the href attribute: <a href="http://example.com">Example</a>'
          },
          {
            id: 6,
            question: 'Which HTML element is used to define important text?',
            options: ['<important>', '<b>', '<strong>', '<i>'],
            correctAnswer: 2,
            explanation: '<strong> is used to define important text with semantic meaning.'
          },
          {
            id: 7,
            question: 'What is the correct HTML for making a checkbox?',
            options: [
              '<input type="check">',
              '<input type="checkbox">',
              '<checkbox>',
              '<check>'
            ],
            correctAnswer: 1,
            explanation: '<input type="checkbox"> is the correct way to create a checkbox.'
          }
        ]
      },
      intermediate: {
        name: 'Intermediate',
        questions: [
          {
            id: 11,
            question: 'Which HTML5 element is used to specify independent, self-contained content?',
            options: ['<section>', '<article>', '<aside>', '<div>'],
            correctAnswer: 1,
            explanation: '<article> specifies independent, self-contained content that makes sense on its own.'
          },
          {
            id: 12,
            question: 'What is the purpose of the "data-*" attributes in HTML5?',
            options: [
              'To store database information',
              'To store custom data private to the page',
              'To define data types',
              'To create data tables'
            ],
            correctAnswer: 1,
            explanation: 'Data-* attributes allow you to store custom data private to the page or application.'
          },
          {
            id: 13,
            question: 'Which HTML5 input type is used for email addresses?',
            options: ['<input type="mail">', '<input type="email">', '<input type="e-mail">', '<input type="address">'],
            correctAnswer: 1,
            explanation: '<input type="email"> is the HTML5 input type for email addresses.'
          },
          {
            id: 14,
            question: 'What does the "defer" attribute do in a script tag?',
            options: [
              'Delays script execution until page is parsed',
              'Prevents script from running',
              'Makes script run faster',
              'Loads script asynchronously'
            ],
            correctAnswer: 0,
            explanation: 'The defer attribute delays script execution until the HTML document has been completely parsed.'
          },
          {
            id: 15,
            question: 'Which HTML element represents a container for introductory content?',
            options: ['<intro>', '<header>', '<top>', '<beginning>'],
            correctAnswer: 1,
            explanation: '<header> represents a container for introductory content or navigational aids.'
          },
          {
            id: 16,
            question: 'What is the correct way to make a text area not resizable?',
            options: [
              'style="resize: none"',
              'resize="false"',
              'resizable="no"',
              'noresize'
            ],
            correctAnswer: 0,
            explanation: 'Using CSS style="resize: none" makes a textarea not resizable.'
          },
          {
            id: 17,
            question: 'Which HTML5 element is used for navigation links?',
            options: ['<navigation>', '<nav>', '<menu>', '<links>'],
            correctAnswer: 1,
            explanation: '<nav> is the HTML5 element specifically designed for navigation links.'
          },
          {
            id: 18,
            question: 'What is the purpose of the "alt" attribute in img tags?',
            options: [
              'Alternative image source',
              'Image alignment',
              'Alternative text for accessibility',
              'Image altitude'
            ],
            correctAnswer: 2,
            explanation: 'The alt attribute provides alternative text for screen readers and when images fail to load.'
          },
          {
            id: 19,
            question: 'Which attribute is used to merge table cells horizontally?',
            options: ['rowspan', 'colspan', 'merge', 'span'],
            correctAnswer: 1,
            explanation: 'The colspan attribute is used to merge table cells horizontally.'
          },
          {
            id: 20,
            question: 'What does the "required" attribute do in form inputs?',
            options: [
              'Makes the input visible',
              'Makes the input mandatory',
              'Requires validation',
              'Requires formatting'
            ],
            correctAnswer: 1,
            explanation: 'The required attribute makes a form input mandatory before submission.'
          }
        ]
      },
      advanced: {
        name: 'Advanced',
        questions: [
          {
            id: 21,
            question: 'Which HTML5 API allows you to store data locally within the user\'s browser?',
            options: ['SessionStorage', 'LocalStorage', 'WebStorage', 'All of the above'],
            correctAnswer: 3,
            explanation: 'All three are part of the Web Storage API that allows local data storage.'
          },
          {
            id: 22,
            question: 'What is the purpose of the "srcset" attribute in img tags?',
            options: [
              'Set image source',
              'Provide responsive images',
              'Set image size',
              'Set image style'
            ],
            correctAnswer: 1,
            explanation: 'The srcset attribute provides responsive images for different screen sizes and resolutions.'
          },
          {
            id: 23,
            question: 'Which HTML5 element is used to display scalar values within a range?',
            options: ['<range>', '<meter>', '<gauge>', '<scale>'],
            correctAnswer: 1,
            explanation: '<meter> is used to display scalar values within a known range or gauge.'
          },
          {
            id: 24,
            question: 'What does the "contenteditable" attribute do?',
            options: [
              'Makes content selectable',
              'Makes content editable',
              'Makes content copyable',
              'Makes content deletable'
            ],
            correctAnswer: 1,
            explanation: 'The contenteditable attribute makes HTML elements editable by the user.'
          },
          {
            id: 25,
            question: 'Which HTML5 element is used for displaying progress of a task?',
            options: ['<meter>', '<progress>', '<status>', '<loading>'],
            correctAnswer: 1,
            explanation: '<progress> is specifically designed to show the progress of a task.'
          },
          {
            id: 26,
            question: 'What is the purpose of the "picture" element in HTML5?',
            options: [
              'Display pictures only',
              'Art direction and responsive images',
              'Picture gallery',
              'Image editing'
            ],
            correctAnswer: 1,
            explanation: 'The <picture> element provides art direction and responsive image solutions.'
          },
          {
            id: 27,
            question: 'Which attribute is used to specify that an input field must be filled before submitting?',
            options: ['mandatory', 'required', 'needed', 'must'],
            correctAnswer: 1,
            explanation: 'The "required" attribute specifies that an input field must be filled before submitting.'
          },
          {
            id: 28,
            question: 'What does the "download" attribute do in anchor tags?',
            options: [
              'Downloads the page',
              'Forces download of linked resource',
              'Downloads images',
              'Downloads scripts'
            ],
            correctAnswer: 1,
            explanation: 'The download attribute forces the browser to download the linked resource instead of navigating to it.'
          },
          {
            id: 29,
            question: 'Which HTML5 input type is used for selecting a date and time?',
            options: ['datetime', 'datetime-local', 'timestamp', 'time-date'],
            correctAnswer: 1,
            explanation: 'The datetime-local input type allows selection of date and time without timezone.'
          },
          {
            id: 30,
            question: 'What is the purpose of the "role" attribute in HTML?',
            options: [
              'Define user roles',
              'Accessibility and semantic meaning',
              'CSS styling',
              'JavaScript functionality'
            ],
            correctAnswer: 1,
            explanation: 'The role attribute provides accessibility information and semantic meaning to assistive technologies.'
          },
          {
            id: 31,
            question: 'Which HTML5 element is used to define a section in a document?',
            options: ['<div>', '<section>', '<article>', '<aside>'],
            correctAnswer: 1,
            explanation: '<section> represents a standalone section of a document with a specific theme.'
          },
          {
            id: 32,
            question: 'What does the "tabindex" attribute do?',
            options: [
              'Sets tab color',
              'Controls tab order for keyboard navigation',
              'Creates tabs',
              'Sets tab size'
            ],
            correctAnswer: 1,
            explanation: 'The tabindex attribute specifies the tab order of elements for keyboard navigation.'
          },
          {
            id: 33,
            question: 'Which HTML5 input type is used for color selection?',
            options: ['<input type="color">', '<input type="picker">', '<input type="rgb">', '<input type="palette">'],
            correctAnswer: 0,
            explanation: '<input type="color"> creates a color picker input field.'
          },
          {
            id: 34,
            question: 'What is the purpose of the "manifest" attribute in HTML5?',
            options: [
              'Defines app manifest',
              'Creates offline cache',
              'Sets app permissions',
              'Configures PWA settings'
            ],
            correctAnswer: 1,
            explanation: 'The manifest attribute was used to define cache manifest for offline applications (now deprecated).'
          },
          {
            id: 35,
            question: 'Which HTML5 element is used for machine-readable date/time?',
            options: ['<date>', '<time>', '<datetime>', '<timestamp>'],
            correctAnswer: 1,
            explanation: '<time> represents a specific period in time or a range of time.'
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
            id: 36,
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
            id: 37,
            question: 'Which CSS property is used to change the text color?',
            options: ['text-color', 'color', 'font-color', 'text-style'],
            correctAnswer: 1,
            explanation: 'The "color" property is used to change the text color in CSS.'
          },
          {
            id: 38,
            question: 'How do you select an element with id "header" in CSS?',
            options: ['.header', '#header', 'header', '*header'],
            correctAnswer: 1,
            explanation: 'The # symbol is used to select elements by their id attribute.'
          },
          {
            id: 39,
            question: 'Which CSS property is used to change the background color?',
            options: ['bg-color', 'background-color', 'bgcolor', 'background'],
            correctAnswer: 1,
            explanation: 'The background-color property sets the background color of an element.'
          },
          {
            id: 40,
            question: 'How do you make text bold in CSS?',
            options: [
              'font-weight: bold',
              'text-style: bold',
              'font-style: bold',
              'text-weight: bold'
            ],
            correctAnswer: 0,
            explanation: 'The font-weight property with value "bold" makes text bold.'
          },
          {
            id: 41,
            question: 'Which CSS property controls the text size?',
            options: ['text-size', 'font-size', 'text-style', 'size'],
            correctAnswer: 1,
            explanation: 'The font-size property controls the size of text.'
          },
          {
            id: 42,
            question: 'How do you select all <p> elements in CSS?',
            options: ['.p', '#p', 'p', '*p'],
            correctAnswer: 2,
            explanation: 'Element selectors use just the element name without any prefix.'
          }
        ]
      },
      intermediate: {
        name: 'Intermediate',
        questions: [
          {
            id: 43,
            question: 'What is the CSS Box Model?',
            options: [
              'A way to create boxes',
              'Content, padding, border, margin',
              'A layout method',
              'A design pattern'
            ],
            correctAnswer: 1,
            explanation: 'The CSS Box Model consists of content, padding, border, and margin areas.'
          },
          {
            id: 44,
            question: 'Which CSS property is used to create flexible layouts?',
            options: ['flexbox', 'display: flex', 'flex-layout', 'layout: flex'],
            correctAnswer: 1,
            explanation: 'The display: flex property creates flexible box layouts.'
          },
          {
            id: 45,
            question: 'What does "z-index" control in CSS?',
            options: [
              'Element size',
              'Element position',
              'Stacking order',
              'Element visibility'
            ],
            correctAnswer: 2,
            explanation: 'Z-index controls the stacking order of positioned elements.'
          },
          {
            id: 46,
            question: 'Which CSS unit is relative to the font size of the element?',
            options: ['px', 'em', 'pt', '%'],
            correctAnswer: 1,
            explanation: 'The "em" unit is relative to the font size of the element.'
          },
          {
            id: 47,
            question: 'What is the difference between "margin" and "padding"?',
            options: [
              'No difference',
              'Margin is inside, padding is outside',
              'Margin is outside, padding is inside',
              'Margin is for text, padding is for elements'
            ],
            correctAnswer: 2,
            explanation: 'Margin is space outside the border, padding is space inside the border.'
          },
          {
            id: 48,
            question: 'Which CSS property is used to make an element invisible but still take up space?',
            options: ['display: none', 'visibility: hidden', 'opacity: 0', 'hide: true'],
            correctAnswer: 1,
            explanation: 'visibility: hidden makes an element invisible but it still occupies space.'
          },
          {
            id: 49,
            question: 'What does the "position: absolute" property do?',
            options: [
              'Positions relative to parent',
              'Positions relative to viewport',
              'Positions relative to nearest positioned ancestor',
              'Positions relative to document'
            ],
            correctAnswer: 2,
            explanation: 'position: absolute positions an element relative to its nearest positioned ancestor.'
          },
          {
            id: 50,
            question: 'Which CSS pseudo-class selects the first child element?',
            options: [':first', ':first-child', ':child-first', ':first-element'],
            correctAnswer: 1,
            explanation: ':first-child selects the first child element of its parent.'
          },
          {
            id: 51,
            question: 'What is the purpose of CSS media queries?',
            options: [
              'Query databases',
              'Responsive design',
              'Media playback',
              'Image optimization'
            ],
            correctAnswer: 1,
            explanation: 'Media queries are used to create responsive designs for different screen sizes.'
          },
          {
            id: 52,
            question: 'Which CSS property is used to create rounded corners?',
            options: ['corner-radius', 'border-radius', 'round-corner', 'border-round'],
            correctAnswer: 1,
            explanation: 'The border-radius property creates rounded corners on elements.'
          }
        ]
      },
      advanced: {
        name: 'Advanced',
        questions: [
          {
            id: 53,
            question: 'What is CSS Grid Layout?',
            options: [
              'A table layout',
              'A two-dimensional layout system',
              'A flexbox alternative',
              'A positioning method'
            ],
            correctAnswer: 1,
            explanation: 'CSS Grid is a two-dimensional layout system for creating complex layouts.'
          },
          {
            id: 54,
            question: 'Which CSS function is used to create custom properties (variables)?',
            options: ['var()', 'custom()', 'prop()', 'variable()'],
            correctAnswer: 0,
            explanation: 'The var() function is used to access CSS custom properties (variables).'
          },
          {
            id: 55,
            question: 'What does the "transform" property do?',
            options: [
              'Changes element shape',
              'Applies 2D/3D transformations',
              'Transforms data',
              'Changes element type'
            ],
            correctAnswer: 1,
            explanation: 'The transform property applies 2D or 3D transformations to elements.'
          },
          {
            id: 56,
            question: 'Which CSS property is used for animations?',
            options: ['animate', 'animation', 'motion', 'transition'],
            correctAnswer: 1,
            explanation: 'The animation property is used to create CSS animations.'
          },
          {
            id: 57,
            question: 'What is the purpose of the "calc()" function in CSS?',
            options: [
              'Calculate colors',
              'Perform mathematical calculations',
              'Calculate animations',
              'Calculate positions'
            ],
            correctAnswer: 1,
            explanation: 'The calc() function allows you to perform mathematical calculations in CSS.'
          },
          {
            id: 58,
            question: 'Which CSS property controls the stacking context?',
            options: ['z-index', 'stack-order', 'layer', 'depth'],
            correctAnswer: 0,
            explanation: 'Z-index controls the stacking context and order of elements.'
          },
          {
            id: 59,
            question: 'What is the difference between "transition" and "animation"?',
            options: [
              'No difference',
              'Transition is for hover, animation is automatic',
              'Transition needs trigger, animation is self-running',
              'Transition is faster'
            ],
            correctAnswer: 2,
            explanation: 'Transitions need a trigger (like hover), while animations run automatically.'
          },
          {
            id: 60,
            question: 'Which CSS selector has the highest specificity?',
            options: ['Element selector', 'Class selector', 'ID selector', 'Inline styles'],
            correctAnswer: 3,
            explanation: 'Inline styles have the highest specificity, followed by IDs, classes, then elements.'
          },
          {
            id: 61,
            question: 'What does the "clip-path" property do?',
            options: [
              'Clips text',
              'Creates clipping regions',
              'Clips images',
              'Clips animations'
            ],
            correctAnswer: 1,
            explanation: 'The clip-path property creates clipping regions to show only parts of an element.'
          },
          {
            id: 62,
            question: 'Which CSS property is used for creating gradients?',
            options: [
              'gradient',
              'background-gradient',
              'linear-gradient()',
              'color-gradient'
            ],
            correctAnswer: 2,
            explanation: 'The linear-gradient() function (and radial-gradient()) creates gradients.'
          },
          {
            id: 63,
            question: 'What does the "will-change" property do?',
            options: [
              'Changes element color',
              'Optimizes for upcoming changes',
              'Changes element size',
              'Changes element position'
            ],
            correctAnswer: 1,
            explanation: 'The will-change property hints to browsers about what properties will change for optimization.'
          },
          {
            id: 64,
            question: 'Which CSS property controls text overflow?',
            options: ['text-overflow', 'overflow-text', 'text-wrap', 'word-break'],
            correctAnswer: 0,
            explanation: 'The text-overflow property specifies how overflowed content is signaled to users.'
          },
          {
            id: 65,
            question: 'What is the purpose of the "contain" property?',
            options: [
              'Contains elements',
              'Isolates subtree for performance',
              'Contains text',
              'Contains images'
            ],
            correctAnswer: 1,
            explanation: 'The contain property allows isolation of a subtree from the rest of the page for performance.'
          },
          {
            id: 66,
            question: 'Which CSS function creates a conic gradient?',
            options: ['conic-gradient()', 'cone-gradient()', 'circular-gradient()', 'radial-gradient()'],
            correctAnswer: 0,
            explanation: 'The conic-gradient() function creates a gradient that rotates around a center point.'
          },
          {
            id: 67,
            question: 'What does the "aspect-ratio" property do?',
            options: [
              'Sets image ratio',
              'Sets preferred aspect ratio for box',
              'Sets screen ratio',
              'Sets font ratio'
            ],
            correctAnswer: 1,
            explanation: 'The aspect-ratio property sets a preferred aspect ratio for the box.'
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
            id: 68,
            question: 'Which of the following is the correct way to declare a variable in JavaScript?',
            options: ['var myVar;', 'variable myVar;', 'v myVar;', 'declare myVar;'],
            correctAnswer: 0,
            explanation: 'var, let, or const are used to declare variables in JavaScript.'
          },
          {
            id: 69,
            question: 'What is the correct way to write a JavaScript array?',
            options: [
              'var colors = "red", "green", "blue"',
              'var colors = ["red", "green", "blue"]',
              'var colors = (1:"red", 2:"green", 3:"blue")',
              'var colors = 1 = ("red"), 2 = ("green"), 3 = ("blue")'
            ],
            correctAnswer: 1,
            explanation: 'Arrays in JavaScript are declared using square brackets [].'
          },
          {
            id: 70,
            question: 'How do you write "Hello World" in an alert box?',
            options: [
              'alertBox("Hello World");',
              'msg("Hello World");',
              'alert("Hello World");',
              'msgBox("Hello World");'
            ],
            correctAnswer: 2,
            explanation: 'The alert() function displays a message in a dialog box.'
          },
          {
            id: 71,
            question: 'Which operator is used to assign a value to a variable?',
            options: ['*', '=', 'x', '=='],
            correctAnswer: 1,
            explanation: 'The = operator is used for assignment in JavaScript.'
          },
          {
            id: 72,
            question: 'What will the following code return: Boolean(10 > 9)',
            options: ['true', 'false', 'NaN', 'undefined'],
            correctAnswer: 0,
            explanation: '10 > 9 is true, so Boolean(true) returns true.'
          },
          {
            id: 73,
            question: 'Which method is used to add an element to the end of an array?',
            options: ['push()', 'add()', 'append()', 'insert()'],
            correctAnswer: 0,
            explanation: 'The push() method adds elements to the end of an array.'
          },
          {
            id: 74,
            question: 'How do you create a function in JavaScript?',
            options: [
              'function = myFunction() {}',
              'function myFunction() {}',
              'create myFunction() {}',
              'def myFunction() {}'
            ],
            correctAnswer: 1,
            explanation: 'Functions are declared using the function keyword followed by the function name.'
          }
        ]
      },
      intermediate: {
        name: 'Intermediate',
        questions: [
          {
            id: 75,
            question: 'What is the difference between "==" and "===" in JavaScript?',
            options: [
              'No difference',
              '== checks value, === checks value and type',
              '=== is faster',
              '== is deprecated'
            ],
            correctAnswer: 1,
            explanation: '== performs type coercion, while === checks both value and type without coercion.'
          },
          {
            id: 76,
            question: 'What is a closure in JavaScript?',
            options: [
              'A way to close functions',
              'A function with access to outer scope',
              'A closed loop',
              'A function that returns nothing'
            ],
            correctAnswer: 1,
            explanation: 'A closure is a function that has access to variables in its outer (enclosing) scope.'
          },
          {
            id: 77,
            question: 'Which method is used to convert a string to uppercase?',
            options: ['toUpperCase()', 'upperCase()', 'toUpper()', 'upper()'],
            correctAnswer: 0,
            explanation: 'The toUpperCase() method converts a string to uppercase letters.'
          },
          {
            id: 78,
            question: 'What does the "this" keyword refer to in JavaScript?',
            options: [
              'The current function',
              'The current object',
              'The global object',
              'The previous object'
            ],
            correctAnswer: 1,
            explanation: 'The "this" keyword refers to the object that is executing the current function.'
          },
          {
            id: 79,
            question: 'Which method is used to join array elements into a string?',
            options: ['join()', 'concat()', 'merge()', 'combine()'],
            correctAnswer: 0,
            explanation: 'The join() method joins array elements into a string.'
          },
          {
            id: 80,
            question: 'What is the purpose of the "setTimeout" function?',
            options: [
              'Set system time',
              'Execute code after a delay',
              'Set timeout for requests',
              'Time function execution'
            ],
            correctAnswer: 1,
            explanation: 'setTimeout() executes a function after a specified delay in milliseconds.'
          },
          {
            id: 81,
            question: 'Which method is used to find an element in an array?',
            options: ['search()', 'find()', 'locate()', 'get()'],
            correctAnswer: 1,
            explanation: 'The find() method returns the first element that satisfies a testing function.'
          },
          {
            id: 82,
            question: 'What is the difference between "let" and "var"?',
            options: [
              'No difference',
              'let has block scope, var has function scope',
              'var is newer',
              'let is faster'
            ],
            correctAnswer: 1,
            explanation: 'let has block scope while var has function scope, and let prevents hoisting issues.'
          },
          {
            id: 83,
            question: 'Which method is used to remove elements from an array?',
            options: ['splice()', 'slice()', 'remove()', 'delete()'],
            correctAnswer: 0,
            explanation: 'The splice() method removes elements from an array and can also add new elements.'
          },
          {
            id: 84,
            question: 'What does JSON.parse() do?',
            options: [
              'Converts object to JSON',
              'Converts JSON string to object',
              'Parses HTML',
              'Parses CSS'
            ],
            correctAnswer: 1,
            explanation: 'JSON.parse() converts a JSON string into a JavaScript object.'
          }
        ]
      },
      advanced: {
        name: 'Advanced',
        questions: [
          {
            id: 85,
            question: 'What is the Event Loop in JavaScript?',
            options: [
              'A loop for events',
              'Mechanism for handling asynchronous operations',
              'A type of for loop',
              'Event handling system'
            ],
            correctAnswer: 1,
            explanation: 'The Event Loop is the mechanism that handles asynchronous operations in JavaScript.'
          },
          {
            id: 86,
            question: 'What is a Promise in JavaScript?',
            options: [
              'A guarantee',
              'An object representing eventual completion of async operation',
              'A type of function',
              'A variable type'
            ],
            correctAnswer: 1,
            explanation: 'A Promise represents the eventual completion (or failure) of an asynchronous operation.'
          },
          {
            id: 87,
            question: 'What does the "async/await" syntax do?',
            options: [
              'Makes code run faster',
              'Simplifies Promise-based code',
              'Creates asynchronous functions',
              'Waits for user input'
            ],
            correctAnswer: 1,
            explanation: 'async/await provides a cleaner syntax for working with Promises.'
          },
          {
            id: 88,
            question: 'What is destructuring in JavaScript?',
            options: [
              'Breaking code',
              'Extracting values from arrays/objects',
              'Destroying variables',
              'Removing properties'
            ],
            correctAnswer: 1,
            explanation: 'Destructuring allows extracting values from arrays or properties from objects into distinct variables.'
          },
          {
            id: 89,
            question: 'What is the purpose of the "bind" method?',
            options: [
              'Bind variables',
              'Set the "this" context of a function',
              'Bind events',
              'Connect functions'
            ],
            correctAnswer: 1,
            explanation: 'The bind() method creates a new function with a specific "this" context.'
          },
          {
            id: 90,
            question: 'What is a higher-order function?',
            options: [
              'A function with high priority',
              'A function that takes/returns other functions',
              'A complex function',
              'A function with many parameters'
            ],
            correctAnswer: 1,
            explanation: 'A higher-order function takes other functions as arguments or returns functions.'
          },
          {
            id: 91,
            question: 'What does the "spread operator" (...) do?',
            options: [
              'Spreads butter',
              'Expands iterables into individual elements',
              'Creates arrays',
              'Spreads objects'
            ],
            correctAnswer: 1,
            explanation: 'The spread operator expands iterables (arrays, strings, etc.) into individual elements.'
          },
          {
            id: 92,
            question: 'What is the difference between "call" and "apply" methods?',
            options: [
              'No difference',
              'call takes arguments separately, apply takes array',
              'apply is faster',
              'call is newer'
            ],
            correctAnswer: 1,
            explanation: 'call() takes arguments separately, while apply() takes arguments as an array.'
          },
          {
            id: 93,
            question: 'What is a generator function in JavaScript?',
            options: [
              'Generates random numbers',
              'Function that can pause and resume execution',
              'Creates other functions',
              'Generates HTML'
            ],
            correctAnswer: 1,
            explanation: 'Generator functions can pause and resume their execution, yielding multiple values.'
          },
          {
            id: 94,
            question: 'What is the purpose of "use strict" in JavaScript?',
            options: [
              'Makes code run faster',
              'Enables strict mode for better error checking',
              'Makes code more secure',
              'Enables new features'
            ],
            correctAnswer: 1,
            explanation: '"use strict" enables strict mode, which catches common coding mistakes and prevents certain actions.'
          },
          {
            id: 95,
            question: 'What is hoisting in JavaScript?',
            options: [
              'Moving code up',
              'Variable and function declarations moved to top',
              'Lifting objects',
              'Raising exceptions'
            ],
            correctAnswer: 1,
            explanation: 'Hoisting is JavaScript\'s behavior of moving declarations to the top of their scope.'
          },
          {
            id: 96,
            question: 'What is the difference between null and undefined?',
            options: [
              'No difference',
              'null is assigned, undefined is not declared',
              'undefined is assigned, null is not declared',
              'null is a string, undefined is a number'
            ],
            correctAnswer: 1,
            explanation: 'null is an assigned value representing no value, undefined means a variable has been declared but not assigned.'
          },
          {
            id: 97,
            question: 'What is a callback function?',
            options: [
              'A function that calls back',
              'A function passed as argument to another function',
              'A function that returns a value',
              'A recursive function'
            ],
            correctAnswer: 1,
            explanation: 'A callback function is passed as an argument to another function and executed later.'
          },
          {
            id: 98,
            question: 'What does the "typeof" operator return for an array?',
            options: [
              'array',
              'object',
              'list',
              'collection'
            ],
            correctAnswer: 1,
            explanation: 'The typeof operator returns "object" for arrays because arrays are objects in JavaScript.'
          },
          {
            id: 99,
            question: 'What is the purpose of the "new" keyword?',
            options: [
              'Creates new variables',
              'Creates new instances of objects',
              'Creates new functions',
              'Creates new arrays'
            ],
            correctAnswer: 1,
            explanation: 'The "new" keyword creates new instances of objects from constructor functions or classes.'
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
  return shuffled.slice(0, count);
};