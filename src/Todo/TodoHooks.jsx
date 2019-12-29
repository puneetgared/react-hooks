import React, { useState } from "react";

export function Todo(props) {
    const [todos, setTodos] = useState(['Puneet', 'Saloni'])
    let input;
    return (
        <div>
            <h1>Todo List</h1>
            <div>
                Todo  Item: <input type="text" ref={node => input = node} ></input>
                <button onClick={addTodo}>Add</button>
            </div>

            {todos.map((todo, index) =>
                <TodoItem key={index} index={index} item={todo} removeTodo={removeTodo}></TodoItem>)
            }
        </div>
    );

    function addTodo() {
        const localTodos = [...todos]
        localTodos.push(input.value);
        setTodos(localTodos);
    }
    
    function removeTodo(index) {
        const localTodos = [...todos]
        localTodos.splice(index, 1);
        setTodos(localTodos);
    }
}

function TodoItem(props) {
    return <div key={props.index}>
        {props.item}   <button onClick={() => props.removeTodo(props.index)}>Delete</button>
    </div>;
}

