module.exports = function (api) {
  api.cache(true)
  const presets = [
    ['@babel/preset-typescript'],
    [
      '@babel/preset-env',
      {
        targets: {
          ie: '11',
        },
      },
    ],
  ]
  return {
    presets,
  }
}
