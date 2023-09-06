const todoList = {
  items: [
    {
      text: "Завершить текущий челлендж",
      completed: false,
    },
    {
      text: "Отдохнуть во время перерыва",
      completed: false,
    },
    {
      text: "Помочь напарнику понять код",
      completed: false,
    },
    {
      text: "Выиграть в мафию",
      completed: true,
    },
  ],

  printAll: function () {
    for (let i = 0; i < this.items.length; i++) {
      console.log(this.items[i].text);
    }
  },

  add: function (text) {
    this.items.unshift({
      text: text,
    });
  },

  remove: function (index) {
    this.items.splice(index, 1);
  },

  print: function (index) {
    console.log(this.items[index].text);
  },

  complete: function (index) {
    this.items[index].completed = true;
  },
};

todoList.printAll();
todoList.add("добавить");
todoList.remove(2);
todoList.print(0);
todoList.complete(2);
