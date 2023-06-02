import './App.scss';
import './global.scss';

import { useState } from 'react'

import { getPoints } from './data/points'
import TeamSelect from './components/TeamSelect';

function App() {

  const [pointsObj, setPointsObj] = useState(getPoints())
  const [teams, setTeams] = useState(null)

  return (
    <div className="App">
      <h1>Capture the Flag</h1>
      <div className="mainContainer">
        {teams ? null : <TeamSelect setTeams={setTeams} />}
      </div>
      <button onClick={() => console.table(teams)}>TeamsObj</button>
    </div>
  );
}

export default App;
