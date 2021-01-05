import axios from 'axios';

const url = 'http://jsonplaceholder.typicode.com/todos/2';

interface Todo {
    id: number;
    title: string;
    completed: boolean;
}
axios.get(url).then(response => {
    const todo = response.data as Todo;
    var id = todo.id;
    var title = todo.title;
    var finished = todo.completed;

    logTodo(id, title, finished)
    
});

const logTodo = (id: number, title:string, finished:boolean) => {
    console.log(`The Todo with ID : ${id} 
    Has a title of ${title} 
    Is it finished? ${finished}`);
}


