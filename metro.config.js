const { getDefaultConfig } = require('expo/metro-config');

const config = getDefaultConfig(__dirname);

// Keep some of your optimizations but remove restrictive configurations
config.maxWorkers = 1;

// Remove the restrictive watchFolders and nodeModulesPaths
// Let Metro use its default behavior for finding node_modules
delete config.watchFolders;

// Simplify resolver configuration
config.resolver = {
  ...config.resolver,
  sourceExts: [...config.resolver.sourceExts, 'jsx', 'js', 'ts', 'tsx'],
  platforms: ['ios', 'android', 'native', 'web'],
  // Remove nodeModulesPaths restriction - let Metro find modules naturally
};

// Keep your transformer configuration
config.transformer = {
  ...config.transformer,
  minifierConfig: {
    keep_fnames: true,
    mangle: {
      keep_fnames: true,
    },
  },
};

module.exports = config;