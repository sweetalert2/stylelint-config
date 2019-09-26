module.exports = {
  debug: true,
  branch: 'master',
  verifyConditions: [
    '@semantic-release/changelog',
    '@semantic-release/npm',
    '@semantic-release/github',
  ],
  prepare: [
    '@semantic-release/changelog',
    '@semantic-release/npm',
    '@semantic-release/git',
  ],
  publish: [
    '@semantic-release/npm',
    {
      path: '@semantic-release/exec',
      cmd: "./tools/publish-to-github-registry.sh"
    },
    '@semantic-release/github',
  ],
  success: [
    '@semantic-release/github',
  ]
}
