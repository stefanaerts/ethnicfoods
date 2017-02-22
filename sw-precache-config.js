module.exports = {
  navigateFallback: '/index.html',
  stripPrefix: 'dist',
  root: 'dist/',
 // options: {
 //   cache: {
      maximumFileSizeToCacheInBytes: 3220000,
 //   }
 // },
  staticFileGlobs: [
    'dist/index.html',
    'dist/**.js',
    'dist/**.css',
    'dist/**.woff',
    'dist/**.woff2',
    'dist/assets/**.css',
    'dist/assets/**.woff2',
    'dist/assets/**.woff',
    'dist/assets/**.jpg',
  ]
};
