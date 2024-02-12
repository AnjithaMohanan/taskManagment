import './App.css';

// components
import Header from './compoents/Header';
import TodoForm from './compoents/TodoForm';
import Todos from './compoents/Todos';


function App() {
  return (
    <div>
      <Header />
      <TodoForm />
      <Todos />
    </div>
  );
}

export default App;