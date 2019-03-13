module.exports = [
  {
    title: 'Getting Started',
    collapsable: false,
    children: [
      'installation',
    ],
  },
  {
    title: 'The Basics',
    collapsable: false,
    children: prefix('basics', [
      'frontend',
      'types',
      'helpers',
    ]),
  },
  {
    title: 'Digging Deeper',
    collapsable: false,
    children: prefix('deeper', [
      'mail',
      'commands'
    ]),
  },
]

function prefix(prefix, children) {
  return children.map(child => `${prefix}/${child}`)
}
