// import logo from './logo.svg';
import './App.css';
import Form from './components/Form';
import TodoItem from './components/TodoItem';
import { Container } from "@mui/material";

function App() {
  return (
    <div>
    <Container maxWidth="xs" />
      <Form />
      <TodoItem />

    </div>
    );
}

export default App;
