const fakeDatabase = {
    todos: [{
        id: 0,
        text: 'call mama',
        active: false
    }, {
        id: 1,
        text: 'fix a car',
        active: true
    }, {
        id: 2,
        text: 'find a girl',
        active: true
    }]
};

const delay = (ms) => {
    return new Promise(resolve => setTimeout(() => resolve(), ms));
}

export const fetchToDos = (filter) => {
    return delay(2000).then(() => {
        //if (Math.random() > 0.5)
        //    throw new Error('Runawaay!!');

        switch (filter) {
            case 'all':
                return fakeDatabase.todos;
            case 'active':
                return fakeDatabase.todos.filter((todo) => todo.active);
            case 'completed':
                return fakeDatabase.todos.filter((todo) => !todo.active);
            default:
                throw new Error(`Unknown filter type '${filter}'`);
        }
    });
}

export const addToDo = (text) => {
    return delay(2000).then(() => {
        const newToDo = {
            id: fakeDatabase.todos.length,
            text,
            active: true
        };

        fakeDatabase.todos.push(newToDo);

        return newToDo;
    });
};

export const toggleToDo = (id) => {
    return delay(1000).then(() => {
        const todo = fakeDatabase.todos.find(todo => todo.id === id);
        todo.active = !todo.active;
        return todo;
    });
};