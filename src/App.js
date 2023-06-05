import './App.scss';
import './global.scss';

import { useState } from 'react'

import { demoTeams } from './data/development'
import TeamSelect from './components/TeamSelect';
import Game from './components/Game';
import Scores from './components/Scores';

function App() {

  const [teams, setTeams] = useState(null)
  // const [teams, setTeams] = useState(demoTeams)
  const [displayScore, setDisplayScore] = useState(false)

  return (
    <div className="App">
      <h1>Capture the Flag</h1>
      <div className="mainContainer">
        {!displayScore && !teams ? <TeamSelect setTeams={setTeams} /> : null}
        {!displayScore && teams ? <Game teams={teams} setTeams={setTeams} setDisplayScore={setDisplayScore} /> : null}
        {displayScore ? <Scores teams={teams} displayScore={displayScore} /> : null}
      </div>
      <button onClick={() => console.table(teams)}>TeamsObj</button>
    </div>
  );
}

export default App;
