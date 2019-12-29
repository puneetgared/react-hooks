import React from "react";
export class Todo extends React.Component {
    input;
    constructor(props) {
        super(props);
        this.state = {
            todos: ['Puneet', 'saloni']
        }

        this.addTodo = this.addTodo.bind(this);
        this.removeTodo = this.removeTodo.bind(this);

    }

    componentDidMount() {

    }

    componentDidUpdate() {

    }

    render() {
        return (

            <div>
                <h1>Todo List</h1>
                <div>
                    Todo  Item: <input type="text" ref={node=> this.input=node} ></input>
                    <button onClick={this.addTodo}>Add</button>
                </div>

                {this.state.todos.map((todo, index) =>
                    <TodoItem key={index} index={index} item={todo} removeTodo={this.removeTodo}></TodoItem>)
                }
            </div>
        );
    }

    addTodo() {
        this.setState((prevState) => {
            const localState = [...prevState.todos];
            localState.push(this.input.value);
            console.log('local state', localState);
            this.input.value = '';
            return {todos: localState}
        });
    }
    
    removeTodo(index) {
        this.setState((prevState, props) => {
            const todoState = [...prevState.todos];
            todoState.splice(index,1);
            return {todos: todoState};
        })
    }
}

function TodoItem(props) {
    return <div key={props.index}>
        {props.item}   <button onClick={()=> props.removeTodo(props.index)}>Delete</button>
    </div>;
}

