module.exports = {
  presets: [
    ['@babel/preset-env', { targets: { node: 'current' }}],
    '@babel/preset-typescript'
  ],
  plugins: [
    ['module-resolver', {
      alias: {
        "@adapters": "./src/adapters",
        "@infra": "./src/infra",
        "@main": "./src/main",
        "@modules": "./src/modules",
        "@presentation": "./src/presentation",
        "@tests": "./tests"
      }
    }],
    "babel-plugin-transform-typescript-metadata",
    ["@babel/plugin-proposal-decorators", { "legacy": true}],
    ["@babel/plugin-proposal-class-properties", { "loose": true}],
    ["@babel/plugin-transform-typescript", { "allowNamespaces": true}]
  ]
}