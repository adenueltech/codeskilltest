# 🚀 CodeSkill Test

A modern, interactive mobile quiz application built with React Native and Expo to test your front-end development skills in HTML, CSS, and JavaScript.

![CodeSkill Test](https://img.shields.io/badge/React%20Native-0.79.5-blue.svg)
![Expo](https://img.shields.io/badge/Expo-~53.0.20-black.svg)
![License](https://img.shields.io/badge/License-MIT-green.svg)

## 📱 Features

### 🎯 **Quiz System**
- **Multiple Technologies**: HTML, CSS, and JavaScript quizzes
- **Difficulty Levels**: Beginner (7 questions), Intermediate (10 questions), Advanced (15 questions)
- **Interactive Questions**: Multiple choice with detailed explanations
- **Real-time Scoring**: Instant feedback and progress tracking

### 🏆 **Gamification**
- **Badge System**: Earn badges based on performance (Novice, Competent, Proficient, Expert, Master)
- **Progress Tracking**: Visual progress indicators for each technology
- **Achievement Levels**: Track completion across all difficulty levels

### 📊 **Analytics & Progress**
- **Overall Progress**: Combined progress across all technologies
- **Individual Technology Progress**: Detailed breakdown per technology
- **Performance History**: Track your best scores and attempts
- **Visual Indicators**: Progress bars and completion percentages

### 🎨 **Modern UI/UX**
- **Mobile-First Design**: Optimized for mobile devices
- **Bottom Tab Navigation**: Easy navigation between Home, Progress, and Badges
- **Gradient Themes**: Beautiful color schemes for each technology
- **Responsive Layout**: Adapts to different screen sizes
- **Smooth Animations**: Enhanced user experience with transitions

## 🛠️ Technology Stack

- **Framework**: React Native 0.79.5
- **Platform**: Expo ~53.0.20
- **Navigation**: React Navigation 7.x with Bottom Tabs
- **UI Components**: React Native built-in components
- **Styling**: StyleSheet with custom theme system
- **Gradients**: Expo Linear Gradient
- **Storage**: AsyncStorage for persistence
- **State Management**: React Context API

## 📋 Prerequisites

Before running this application, make sure you have the following installed:

- **Node.js** (v16 or higher)
- **npm** or **yarn**
- **Expo CLI**: `npm install -g @expo/cli`
- **Expo Go app** on your mobile device (for testing)

## 🚀 Installation & Setup

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd CodeSkillTest
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   # or
   expo start
   ```

4. **Run on device/simulator**
   - **iOS**: Press `i` in terminal or scan QR code with Camera app
   - **Android**: Press `a` in terminal or scan QR code with Expo Go app
   - **Web**: Press `w` in terminal

## 📱 Available Scripts

- `npm start` - Start the Expo development server
- `npm run start-clear` - Start with cleared cache
- `npm run start-memory` - Start with increased memory allocation
- `npm run start-optimized` - Start with optimized settings and cleared cache
- `npm run android` - Start and open on Android
- `npm run ios` - Start and open on iOS
- `npm run web` - Start and open in web browser
- `npm run reset` - Reset node_modules and restart with clear cache

## 🚀 Deployment Guide

### 📋 Prerequisites for Deployment

Before deploying your app, ensure you have:

1. **Expo Account**: Create a free account at [expo.dev](https://expo.dev)
2. **EAS CLI**: Install Expo Application Services CLI
   ```bash
   npm install -g @expo/eas-cli
   ```
3. **Expo CLI**: Ensure you have the latest version
   ```bash
   npm install -g @expo/cli
   ```

### 🔐 Authentication

1. **Login to Expo**
   ```bash
   eas login
   ```
   Enter your Expo account credentials when prompted.

2. **Verify Authentication**
   ```bash
   eas whoami
   ```

### 📱 Building for Production

#### 🤖 **Android Deployment**

1. **Configure EAS Build**
   ```bash
   eas build:configure
   ```
   This creates an `eas.json` file with build configurations.

2. **Build APK for Testing**
   ```bash
   eas build --platform android --profile preview
   ```

3. **Build AAB for Google Play Store**
   ```bash
   eas build --platform android --profile production
   ```

4. **Download and Install APK**
   - After build completion, download the APK from the provided link
   - Install on Android device for testing

#### 🍎 **iOS Deployment**

1. **Build for iOS Simulator**
   ```bash
   eas build --platform ios --profile preview
   ```

2. **Build for App Store**
   ```bash
   eas build --platform ios --profile production
   ```

3. **Requirements for iOS**
   - Apple Developer Account ($99/year)
   - Proper provisioning profiles and certificates

### 🌐 **Web Deployment**

#### **Deploy to Netlify**

1. **Build for Web**
   ```bash
   expo export --platform web
   ```

2. **Deploy to Netlify**
   ```bash
   # Install Netlify CLI
   npm install -g netlify-cli
   
   # Deploy
   netlify deploy --dir=dist --prod
   ```

#### **Deploy to Vercel**

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Deploy**
   ```bash
   expo export --platform web
   vercel --prod
   ```

### 📦 **Publishing Updates with EAS Update**

1. **Configure EAS Update**
   ```bash
   eas update:configure
   ```

2. **Publish Update**
   ```bash
   eas update --branch production --message "Your update message"
   ```

3. **Preview Update**
   ```bash
   eas update --branch preview --message "Preview update"
   ```

### 🏪 **Store Submission**

#### **Google Play Store**

1. **Create Google Play Console Account**
   - Visit [Google Play Console](https://play.google.com/console)
   - Pay one-time $25 registration fee

2. **Upload AAB File**
   - Create new app in Play Console
   - Upload the AAB file built with EAS
   - Fill in app details, screenshots, and descriptions

3. **App Review Process**
   - Submit for review (usually takes 1-3 days)
   - Address any feedback from Google

#### **Apple App Store**

1. **Apple Developer Account**
   - Enroll in Apple Developer Program ($99/year)
   - Create App Store Connect account

2. **App Store Connect Setup**
   - Create new app in App Store Connect
   - Upload build using Xcode or Transporter
   - Fill in app metadata and screenshots

3. **App Review Process**
   - Submit for review (usually takes 1-7 days)
   - Address any feedback from Apple

### ⚙️ **EAS Configuration (eas.json)**

Here's a sample `eas.json` configuration:

```json
{
  "cli": {
    "version": ">= 5.9.0"
  },
  "build": {
    "development": {
      "developmentClient": true,
      "distribution": "internal"
    },
    "preview": {
      "distribution": "internal",
      "android": {
        "buildType": "apk"
      }
    },
    "production": {
      "android": {
        "buildType": "aab"
      }
    }
  },
  "submit": {
    "production": {}
  }
}
```

### 📊 **Monitoring and Analytics**

1. **Expo Analytics**
   - View app usage in Expo dashboard
   - Monitor crash reports and performance

2. **EAS Insights**
   ```bash
   eas analytics
   ```

### 🔧 **Deployment Troubleshooting**

#### **Common Build Issues**

1. **Build Fails**
   ```bash
   # Clear cache and retry
   eas build --clear-cache --platform android
   ```

2. **Dependency Issues**
   ```bash
   # Update dependencies
   npm update
   expo install --fix
   ```

3. **Memory Issues**
   - Use `--resource-class large` for builds requiring more memory
   ```bash
   eas build --platform android --resource-class large
   ```

#### **Update Issues**

1. **Update Not Appearing**
   - Check branch configuration
   - Ensure app is connected to correct update branch

2. **Runtime Version Mismatch**
   - Update `runtimeVersion` in app.json/app.config.js
   - Rebuild the app if native dependencies changed

### 💡 **Best Practices**

1. **Version Management**
   - Update version in `app.json` before each build
   - Use semantic versioning (e.g., 1.0.0, 1.0.1, 1.1.0)

2. **Testing**
   - Always test preview builds before production
   - Use internal distribution for team testing

3. **Updates**
   - Use EAS Update for JavaScript-only changes
   - Rebuild for native dependency changes

4. **Environment Variables**
   - Use different configurations for development/production
   - Store sensitive data in EAS Secrets

### 📱 **Quick Deployment Commands**

```bash
# Complete deployment workflow
eas login
eas build:configure
eas build --platform android --profile production
eas submit --platform android

# For updates only
eas update --branch production --message "Bug fixes and improvements"
```

## 🏗️ Project Structure

```
CodeSkillTest/
├── src/
│   ├── components/          # Reusable UI components
│   ├── context/            # React Context for state management
│   │   └── AppContext.js   # Main app context
│   ├── data/               # Quiz data and configurations
│   │   ├── quizData.js     # Main quiz questions database
│   │   └── sampleQuestions.js # Sample/test data
│   ├── navigation/         # Navigation configuration
│   │   └── AppNavigator.js # Main navigation setup
│   ├── screens/            # Application screens
│   │   ├── HomeScreen.js   # Main dashboard
│   │   ├── TechnologyScreen.js # Technology selection
│   │   ├── LevelScreen.js  # Difficulty level selection
│   │   ├── QuizScreen.js   # Quiz interface
│   │   ├── ResultScreen.js # Quiz results
│   │   ├── ProgressScreen.js # Progress tracking
│   │   └── BadgesScreen.js # Achievements display
│   ├── styles/             # Styling and themes
│   │   └── theme.js        # Global theme configuration
│   └── utils/              # Utility functions
├── assets/                 # Static assets (images, icons)
├── App.js                  # Root component
├── index.js               # Entry point
└── package.json           # Dependencies and scripts
```

## 🎮 How to Use

### 🏠 **Home Screen**
- View overall progress across all technologies
- Quick access to Badges and Progress screens
- Select a technology (HTML, CSS, JavaScript) to start learning

### 📚 **Technology Selection**
- Choose your preferred technology
- View technology-specific progress
- Access different difficulty levels

### 🎯 **Taking a Quiz**
1. Select difficulty level (Beginner/Intermediate/Advanced)
2. Review quiz details and rules
3. Answer questions one by one
4. Get instant feedback with explanations
5. View final results and earned badges

### 📊 **Progress Tracking**
- Monitor your progress across all technologies
- View detailed statistics and performance metrics
- Track improvement over time

### 🏆 **Badges & Achievements**
- Earn badges based on quiz performance:
  - **Novice** (📚): < 60%
  - **Competent** (🥉): 60-69%
  - **Proficient** (🥈): 70-79%
  - **Expert** (🥇): 80-89%
  - **Master** (🏆): 90%+

## 🎨 Customization

### Adding New Technologies
1. Update `src/data/quizData.js` with new technology data
2. Follow the existing structure for questions and levels
3. Add appropriate icons and colors

### Modifying Questions
- Edit questions in `src/data/quizData.js`
- Each question requires: id, question, options, correctAnswer, explanation
- Maintain the difficulty level structure (beginner/intermediate/advanced)

### Styling Changes
- Modify `src/styles/theme.js` for global theme changes
- Update individual screen styles in their respective files
- Customize colors, fonts, and spacing

## 🔧 Troubleshooting

### Common Issues

1. **Metro bundler fails to start**
   ```bash
   npm run start-clear
   ```

2. **Babel dependency errors**
   ```bash
   npm install @babel/helper-globals @babel/traverse @babel/types
   ```

3. **Cache issues**
   ```bash
   expo start --clear
   ```

4. **Memory issues**
   ```bash
   npm run start-memory
   ```

### Performance Optimization
- Use `npm run start-optimized` for better performance
- Clear cache regularly during development
- Monitor memory usage with large question sets

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Contribution Guidelines
- Follow the existing code style and structure
- Add appropriate comments and documentation
- Test your changes thoroughly
- Update README if necessary

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **React Native Community** for the amazing framework
- **Expo Team** for the development platform
- **React Navigation** for navigation solutions
- **Contributors** who help improve this project

## 📞 Support

If you encounter any issues or have questions:

1. Check the [Troubleshooting](#-troubleshooting) section
2. Search existing issues in the repository
3. Create a new issue with detailed information
4. Contact the development team

## 🔮 Future Enhancements

- [ ] Add more programming languages (Python, Java, etc.)
- [ ] Implement user authentication
- [ ] Add social features (leaderboards, sharing)
- [ ] Include code snippet questions
- [ ] Add offline mode support
- [ ] Implement push notifications
- [ ] Add dark mode theme
- [ ] Include accessibility improvements

---

**Made with ❤️ for developers who love to learn and grow!**

*Happy Coding! 🚀*