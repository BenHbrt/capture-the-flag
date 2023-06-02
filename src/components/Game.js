import './Game.scss';

import { useState } from 'react'

import Team from './Team';

const Game = ({ teams, setTeams }) => {

    const [selectedTeam, setSelectedTeam] = useState(null)

    return (
        <div className="game">
            <div className="game_banner">
                {selectedTeam ? "Select a flag" : "Select a Team"}
            </div>
            {
                teams.map((team, i) => {
                    return <Team team={team} selectedTeam={selectedTeam} setSelectedTeam={setSelectedTeam} teams={teams} setTeams={setTeams} key={i} />
                })
            }
        <button onClick={() => console.log(selectedTeam)}>SelectedTeam</button>
        </div>
    )
}

export default Game