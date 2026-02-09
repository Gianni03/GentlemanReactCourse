
import './App.css';
import { Button, ColorRed } from './components';

function App() {

  const handleClick = () => {
    console.log('Button clicked!');
  };

  return (
    <Button parentMethod={handleClick}>
      <ColorRed><div>Mi boton</div></ColorRed>
    </Button>
  );
}

export default App;
