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
    collapsable: true,
    children: prefix('basics', [
      '',
      'types',
    ]),
  },
  {
    title: 'Digging Deeper',
    collapsable: true,
    children: prefix('deeper', [
      '',
      'commands'
    ]),
  },
]

function prefix(prefix, children) {
  return children.map(child => `${prefix}/${child}`)
}
