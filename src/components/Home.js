import React, {useState} from 'react';
import Todo from './Todo';


const Home = () => {
   
    return (
        <div className="home">
        <h1 className="home__heading">Welcome</h1>
        <h2 className="home__create-todo">create Todo list</h2>
            <Todo />
        
        </div>
    )
}

export default Home;