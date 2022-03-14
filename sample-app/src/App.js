import React from 'react';
import styles from './App.module.css';
import { List } from "./components/list.jsx";
import AnotherList from './components/AnotherList';
import logo from "./logo.svg";

function App() {


  const todos = ["Eat","sleep","Code","Sleep again"];


  const some = 1





  // inline style -- object of styles

  const inlinestyles = { color:"teal" , fontSize:"40px" };

  return (
    <div className={ styles.color }>
      <h1>Unordered List</h1>
      <List />
      <h1>Ordered list</h1>
      <AnotherList />
      <h1 style={inlinestyles}>Hello Bhavisha</h1>
      <img src={ logo } alt='react-logo' />



    {/* todo's */}

    <ul>

    {
      todos.map((task) => (
      <li><TodoItem task={task} /></li>
      )
      )}

      { some && <h1>render {some}</h1> }

    </ul>




    </div>
  );
}


function TodoItem({task}){
  return <li>{task}</li>
}


export default App;
