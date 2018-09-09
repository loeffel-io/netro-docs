module.exports = [
  {
    title: 'Getting Started',
    collapsable: false,
    children: [''].concat(prefix('getting-started', [])),
  },
  {
    title: 'Resources',
    collapsable: false,
    children: prefix('resources', [
      '',
      'types',
      'commands'
    ]),
  },
]

function prefix(prefix, children) {
  return children.map(child => `${prefix}/${child}`)
}
