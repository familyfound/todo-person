
var TodoPerson = require('todoperson')
  , d = React.DOM

function render(id, what) {
  React.renderComponent(what, document.getElementById(id))
}

render('simple', TodoPerson({
  person: {
    rels: {
      display: {
        gender: 'Male',
        name: 'Awesome things',
        lifespan: '1900-1930'
      },
      multipleParents: false,
      parents: [10, 12, 14],
      children: [15, 16, 17, 18, 19],
      spouses: [11, 13],
      mother: 0,
      father: 0,
      families: {
        11: [15, 16],
        13: [17, 18, 19]
      }
    },
    more: {
      sources: [
        "One awesome",
        "Other things",
        "Things here"
      ],
      duplicates: [
        {score: .9, title: 'Me'},
        {score: .8, title: 'You'}
      ]
    },
    data: {
      user: 5,
      starred: false,
      modified: new Date(),
      todos: [{
        type: 'find mother',
        created: new Date(),
        completed: null,
        hard: false,
        retired: null
      }, {
        type: 'resolve duplicate parents',
        created: new Date(),
        completed: new Date(),
        hard: true,
        retired: null
      }],
      custom_todos: [{
        title: 'Things are awesome',
        created: new Date(),
        completed: null,
        hard: false
      }]
    }
  }
})

document.getElementById('go').addEventListener('click', go)

