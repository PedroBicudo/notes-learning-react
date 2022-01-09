import logo from './logo.svg';
import './App.css';
import {Flex, FlexRow, FlexColumn} from './Flex/Flex';

function App() {
  return (
    <>
      <Flex direction="column" justify="center" align="center">
        <h1>teste</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae, deserunt!</p>
      </Flex>

      <FlexRow justify="flex-end" align="center" gap="2em">
        <h1>teste</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae, deserunt!</p>
      </FlexRow>

      <FlexColumn justify="center" align="center">
        <h1>teste</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae, deserunt!</p>
      </FlexColumn>

    </>
  );
}

export default App;
