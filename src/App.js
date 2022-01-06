import logo from './logo.svg';
import './App.css';
import Teste from './Teste/Teste.component';
import UserCard from './UserCard/UserCard';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Teste />
        <UserCard />
      </header>
    </div>
  );
}

export default App;
