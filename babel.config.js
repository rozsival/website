const muiImport = ([library, module]) => [
  'import',
  {
    libraryName: `@mui/${library}`,
    libraryDirectory: '',
    camel2DashComponentName: false,
  },
  module,
];

const muiPlugins = [
  ['material', 'core'],
  ['icons-material', 'icons'],
].map(muiImport);

module.exports = (api) => {
  api.cache(true);
  return {
    presets: ['next/babel'],
    plugins: ['@emotion', ...muiPlugins],
  };
};
