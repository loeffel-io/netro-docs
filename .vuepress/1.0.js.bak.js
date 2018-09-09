module.exports = [
  {
    title: 'Getting Started',
    collapsable: false,
    children: [''].concat(prefix('getting-started', [])),
  },
  {
    title: 'The Basics',
    collapsable: false,
    children: prefix('basics', [
      '',
      'types',
    ]),
  },
  {
    title: 'Digging Deeper',
    collapsable: false,
    children: prefix('deeper', [
      '',
      'commands',
    ]),
  },
]

function prefix(prefix, children) {
  return children.map(child => `${prefix}/${child}`)
}
