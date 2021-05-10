class MakeTodoList {
  constructor(list) {
    this.todoList = list;
    this.todos = [];//toshow
  }

  static addtoList(text) {
    let list = document.getElementById("todo-list");
    var p = document.createElement("p");
    p.textContent = text;
    list.appendChild(p);
    return p;
  }

  static removeFromList(text) {
    let list = document.getElementById("todo-list");
    let childs = Array.from(list.childNodes);
    let item = childs.find(i => i.innerText === text);
    return item;
  }

  addTodo(text) {
    this.todos.push(text);
    this.todoList.appendChild(MakeTodoList.addtoList(text));
  }

  removeTodo(text) {
    let filter = this.todos.filter(i => i !== text);
    this.todoList.removeChild(MakeTodoList.removeFromList(text));
    this.todos = filter;
  }

  get getList() {
    return this.todos;
  }
}
