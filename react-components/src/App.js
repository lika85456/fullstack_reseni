import logo from './logo.svg';
import './App.css';
import BulletList from './BulletList';
import CyclicClick from './CyclicClick';

function App() {
  return (
    <div className="App">
      <div className="horizontalContainer">
        <div className="verticalContainer"> 
          <div className="section">
            <h2>Bullet list</h2>
            <BulletList list={["první", "druhý", "třetí"]} />
          </div>
          <div className="section">
            <h2>CyclicClick</h2>
            <CyclicClick list={["první", "druhý", "třetí"]} />
          </div>
          <div className="section">
            <h2>React context</h2>
            Slouží k "propagování" props přes několik komponent, popř. pro všechny komponenty, např. light/dark theme, jazyk - to vše by se muselo zbytečně přidávat do props pro každou komponentu.
          </div>
        </div>
        <div className="verticalContainer">
          <div className="section">
            <h2>HTML & CSS</h2>
            <a href='​http://sprinx.cz​' className='link'>Sprinx</a>
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;
