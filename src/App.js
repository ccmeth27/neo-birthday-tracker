import BodyContainer from './BodyContainer'
import './App.css';
import bgimg from './assets/neo-bg.jpeg'

function App() {
  return (
    <div class="App">
        <img src={bgimg} class="img-fluid" alt="bg"></img>
        <div class='Nav'>
          <h1 class="display-5">
            NEO Birthday Tracker
          </h1>
        </div>
          <BodyContainer/>
    </div>
  );
}

export default App;
