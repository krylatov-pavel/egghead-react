const fakeDatabase = {
    todos: [{
        id: 0,
        text: 'call mama',
        active: false
    }, {
        id: 2,
        text: 'fix a car',
        active: true
    }, {
        id: 3,
        text: 'find a girl',
        active: true
    }]
};

const delay = (ms) => {
    return new Promise(resolve => setTimeout(() => resolve(), ms));
}

export const fetchToDos = (filter) => {
    return delay(5000).then(() => {
        if (Math.random() > 0.5)
            throw new Error('Runawaay!!');

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