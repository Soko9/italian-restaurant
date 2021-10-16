import { Navbar } from 'reactstrap';
import './App.css';
import Menu from './components/Menu.js';

function App() {
  return (
    <div>
      <Navbar light color="warning">
        <div className="container">
          <p className="display-4">Restorante Con Fusion</p>
        </div>
      </Navbar>
      <Menu />
    </div>
  );
}

export default App;