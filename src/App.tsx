
import './App.css';
import { styled } from '@stitches/react';
import AddTodo from './components/AddTodo';

function App() {

  //return 100 task components

  return (
    <StyledDiv className="App">
      <Title>Velkommen til React kurs!</Title>
      <AddTodo />
    </StyledDiv>
  );
}

const StyledDiv = styled('div', {
  marginTop: '10vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
});

const Title = styled('p', {
  fontSize: '40px',
  fontWeight: 'bold',
  marginBottom: '40px',
  textShadow: "1px 2px 3px #ffffff",
});

export default App;
