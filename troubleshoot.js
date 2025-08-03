#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('🔧 CodeSkill Test Troubleshooting Script');
console.log('=====================================\n');

// Check if we're in the right directory
if (!fs.existsSync('package.json')) {
  console.error('❌ Please run this script from the CodeSkillTest directory');
  process.exit(1);
}

console.log('1. Checking project structure...');
const requiredFiles = [
  'App.js',
  'package.json',
  'metro.config.js',
  'src/navigation/AppNavigator.js',
  'src/context/AppContext.js',
  'src/data/sampleQuestions.js'
];

let allFilesExist = true;
requiredFiles.forEach(file => {
  if (fs.existsSync(file)) {
    console.log(`   ✅ ${file}`);
  } else {
    console.log(`   ❌ ${file} - MISSING`);
    allFilesExist = false;
  }
});

if (!allFilesExist) {
  console.log('\n❌ Some required files are missing. Please check the project structure.');
  process.exit(1);
}

console.log('\n2. Clearing caches...');
try {
  // Clear npm cache
  console.log('   Clearing npm cache...');
  execSync('npm cache clean --force', { stdio: 'inherit' });
  
  // Clear Metro cache
  console.log('   Clearing Metro cache...');
  if (fs.existsSync('node_modules/.cache')) {
    execSync('rm -rf node_modules/.cache', { stdio: 'inherit' });
  }
  
  // Clear Expo cache
  console.log('   Clearing Expo cache...');
  execSync('npx expo start --clear', { stdio: 'inherit', timeout: 5000 });
  
} catch (error) {
  console.log('   ⚠️  Cache clearing completed with warnings');
}

console.log('\n3. Checking dependencies...');
try {
  execSync('npm list --depth=0', { stdio: 'pipe' });
  console.log('   ✅ Dependencies look good');
} catch (error) {
  console.log('   ⚠️  Some dependency issues detected');
  console.log('   💡 Try running: npm install');
}

console.log('\n🎯 Troubleshooting Complete!');
console.log('\nNext steps:');
console.log('1. Try: npm run start-clear');
console.log('2. If that fails, try: npm run start-memory');
console.log('3. If still having issues, try: npm install && npm start');
console.log('\n📱 The app uses sample data to avoid memory issues.');
console.log('📖 Check README.md for more troubleshooting tips.');