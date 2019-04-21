import React, {useState, useEffect} from 'react';
// import { Prompt } from 'react-router-dom';
import TodoList from './TodoList';


const Todo = () => {
    
    const [todos, setTodo] = useState([
        {id: 1, content: "I will ..."},
        {id: 2, content: "I will ..."},
        {id: 3, content: "I will ..."},
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
        if ( (e.which === 13) && e.target.value) {
            //Get value from DOM target
            setValue(e.target.value)
            const newTodo = [...todos, {id: todos.length + 1,  content: value}]
            setTodo(newTodo);
            //SET VALUE and DOM target value BACK TO EMPTY STRING
            e.target.value="";
            setValue("")
         }
    }

    const handleReset = (e) => {
        let resetModal = document.getElementById("reset-modal__container");
        setReset(true)
        setTodo("");
        //(resetModal.style.display="none") 
        (resetModal.style.width= 0) 
    }
    const handleResetModal = (e)=> {
        let resetModal = document.getElementById("reset-modal__container");
        if (e.target.id === "reset__no") {
        // (resetModal.style.display="none") 
        (resetModal.style.width= 0) 
        } else if (e.target.id === "todo-reset") {
            // (resetModal.style.display="block") 
            (resetModal.style.width= "100%") 
            }
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
            handlechecked={handleChecked} 
            handleResetModal={handleResetModal}
            />
        </div>
    )
}


export default Todo;