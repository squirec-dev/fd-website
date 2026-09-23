module.exports = {
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.[jt]sx?$': ['babel-jest', {
      presets: [
        ['next/babel', {
          'preset-react': {
            runtime: 'automatic',
          },
        }],
      ],
    }],
  },
};
