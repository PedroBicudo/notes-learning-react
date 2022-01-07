import logo from './logo.svg';
import './App.css';
import LightSwitchControl from './light-switch/LightSwitchControl';
import MessageAlert from './message-alert/MessageAlert';

function App() {
  return (
    <div>
      <LightSwitchControl />
      <MessageAlert />
    </div>
  );
}

export default App;
