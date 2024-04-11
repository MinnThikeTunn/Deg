
import './App.css';
import Nav from './Nav';
import Headline from './Headline';
import MainSec from './MainSec';
import Trivia from './Trivia';
import Image from './Image';
import Text from './Text';

function App() {

  return (
    <>
      <div className="main px-2">
      
      <Headline />
      <Image />
      <Text />
      <MainSec />
      <Trivia />
      
    </div>
    </>
    
  );
}

export default App;
