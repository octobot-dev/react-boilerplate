module.exports = {
  stories: ['../app/**/*.stories.js'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials'
  ],
  webpackFinal: async config => {
    config.resolve = {
      modules: ['node_modules', 'app'],
      extensions: ['.js', '.jsx', '.react.js'],
      mainFields: ['browser', 'jsnext:main', 'main'],
    };

    return config;
  },
}
