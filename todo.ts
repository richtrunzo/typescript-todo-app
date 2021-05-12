let $body = document.querySelector('body')
let $form = document.querySelector('#new-todo');


// type Todo = {
//   readonly id: number,
//   readonly text: string,
//   readonly done: boolean
// }

const Todos = [
  {
    id: 1,
    text: 'Workout',
    done: false
  },
   {
    id: 2,
    text: 'Eat healthy',
    done: false
  },
   {
    id: 3,
    text: 'Code',
    done: false
  }
]

// let current = Todos[Todos.length - 1].id



// function toggleTodo(todo: Todo): Todo {
//   todo.done = !todo.done
//   return todo
// }

window.addEventListener('load', function() {
  for(let i = 0; i < Todos.length; i++) {
    let nexttodo = appendTodos(Todos[i])
    $body.appendChild(nexttodo)
  }
})

function appendTodos(todo) {
  let $div = document.createElement("div");
  $div.className = "todo-div";
  let $text = document.createElement("p");
  let $check = document.createElement("input")
  $check.setAttribute("type", "checkbox");

  let $innertext = document.createTextNode(todo.text);
  $text.appendChild($innertext);
  $div.appendChild($check)
  $div.appendChild($text);

  return $div;

}
