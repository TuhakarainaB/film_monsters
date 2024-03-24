import './App.css';
import Menu from './Menu';
import Monster from './Monster';
import {useState, useEffect} from 'react';

// fetch our data from supplied URL
function fetchData()
{
  return fetch("https://tuhakarainab.github.io/content_hosting/monsters.json")
  .then(response => response.json())
}

function App() {

  const [monsters, setMonsters] = useState([]);
  const [selectedMonster, setSelectedMonster] = useState(null);

  useEffect(
    () => {
      fetchData().then(data => setMonsters(data))
    }, []
  );

  return (
   <div className='app-container'>
    <Menu monsters={monsters} onSelect={setSelectedMonster} />
    <h1>Film Monster React Application</h1>
    {selectedMonster && <Monster selectedMonster={selectedMonster} />}
   </div>
  );
}

export default App;
