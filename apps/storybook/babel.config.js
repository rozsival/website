export default {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: { esmodules: true },
      },
    ],
    '@babel/preset-typescript',
    '@babel/preset-react',
  ],
  plugins: ['babel-plugin-react-docgen-typescript'],
  sourceType: 'module',
};
