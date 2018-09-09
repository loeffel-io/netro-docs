module.exports = [
  {
    title: 'Getting Started',
    collapsable: false,
    children: [
      'installation',
    ],
  },
  {
    title: 'Resources',
    collapsable: true,
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
