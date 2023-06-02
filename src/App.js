import './App.scss';
import './global.scss';

import { useState } from 'react'

import { getPoints } from './data/points'
import { demoTeams } from './data/development'
import TeamSelect from './components/TeamSelect';
import Game from './components/Game';

function App() {

  const [pointsObj, setPointsObj] = useState(getPoints())
  // const [teams, setTeams] = useState(null)
  const [teams, setTeams] = useState(demoTeams)

  return (
    <div className="App">
      <h1>Capture the Flag</h1>
      <div className="mainContainer">
        {teams ? null : <TeamSelect setTeams={setTeams} />}
        {teams ? <Game teams={teams} setTeams={setTeams} /> : null}
      </div>
      <button onClick={() => console.table(teams)}>TeamsObj</button>
    </div>
  );
}

export default App;
