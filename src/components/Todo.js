import React, {useState, useEffect} from 'react';
// import { Prompt } from 'react-router-dom';
import TodoList from './TodoList';


const Todo = () => {
    const [todos, setTodo] = useState([
        {id: 1, content: "I will go to church"},
        {id: 2, content: "I will go to market"},
        {id: 3, content: "I will go to school"},
    ]);
    const [reset, setReset] = useState(false)

    const [value, setValue] = useState("");

    const [checked, setChecked] = useState(false);

    const handleChecked = (index, e)=> {
        const content = document.getElementById(`todo__${index}`)
        setChecked(e.target.checked)

        if (e.target.checked === true) {
            content.style.textDecoration= "line-through"; 
            content.style.color= "red"; 
        } else{ 
        content.style.textDecoration= "none"; 
            content.style.color= "currentColor"; 
    }
    setChecked(false)
    }

    useEffect( () => {
        //return () => {setChecked(false)}
    }

    )

    const handleClick = (id) => {
        const Todo = [...todos];
        const newTodo =  Todo.filter( (item)=> {
            return item.id !== id;
        })
        setTodo(newTodo)
    }

    const handleChange = (e) => {
        setValue(e.target.value)
    }
    const handleKeyPress = (e)=> {
        if (e.which === 13) {
            setValue(e.target.value)
            const newTodo = [...todos, {id: todos.length + 1,  content: value}]
            setTodo(newTodo);
            e.target.value="";
         }
    }

    const handleReset = (e) => {
        setReset(true)
        setTodo("")
    }

    return (
        <div>
        
            <TodoList todos={todos}
            handleChange={handleChange}
            handleClick={handleClick}
            handleKeyPress={handleKeyPress}
            val={value}
            handleReset={handleReset}
            checked={checked}
            handlechecked={handleChecked} />
        </div>
    )
}


export default Todo;