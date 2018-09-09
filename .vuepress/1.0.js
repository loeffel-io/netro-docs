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
    collapsable: false,
    children: prefix('resources', [
      '',
      'types',
    ]),
  },
]

function prefix(prefix, children) {
  return children.map(child => `${prefix}/${child}`)
}
