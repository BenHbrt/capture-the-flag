import './Game.scss';

import { useState, useEffect } from 'react'

import Team from './Team';
import Button from './Button';

const Game = ({ teams, setTeams, setDisplayScore }) => {

    const [selectedTeam, setSelectedTeam] = useState(null)

    const scoreFunc = () => {
        setDisplayScore(true)
    }

    return (
        <div className="game">
            <div className="game_banner">
                {selectedTeam ? "Select a flag" : "Select a Team"}
            </div>
            <div className="game_teams">
            {
                teams.map((team, i) => {
                    return <Team team={team} selectedTeam={selectedTeam} setSelectedTeam={setSelectedTeam} teams={teams} setTeams={setTeams} key={i} />
                })
            }
            </div>
            <Button text={"Check Scores"} active={true} func={scoreFunc} />
        {/* <button onClick={() => console.log(selectedTeam)}>SelectedTeam</button> */}
        </div>
    )
}

export default Game