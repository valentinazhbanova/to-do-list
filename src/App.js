import './App.css';
import image from './list.jpg'
import { ToDoList } from './ToDoList';

function App() {
  return (
    <div className="app">
<div className="container">
      <img src={ image } alt='To Do List' width='200px' />
      </div>
      <div className="container">
          <h1>Планирование дня</h1>
          </div>
          <ToDoList />
      </div>
  );
}

export default App;
