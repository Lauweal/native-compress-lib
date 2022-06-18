// react-native.config.js
module.exports = {
  dependency: {
    platforms: {
      macos: null, // disable Android platform, other platforms will still autolink if provided
      windows: null
    },
  },
};
