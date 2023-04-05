import './App.css';
import Buttons from './components/Buttons';

function App() {
  return (
    <div className='App'>
      <div id='container'>
      <div id='calcTop'>
        <br></br>
      </div>
      <div id='calcBase'>
        
        <Buttons id='buttonNumb'></Buttons>
      </div>
      <div id='calcBottom'></div>
      </div>
    </div>
  );
};

export default App;