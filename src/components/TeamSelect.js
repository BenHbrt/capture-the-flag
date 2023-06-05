import './TeamSelect.scss'

import { checkTeams } from '../data/functions'
import { getRandomFlags } from '../data/points'
import { useState } from 'react'

import Button from './Button'

const TeamSelect = ({ setTeams }) => {

    const [teamsArray, setTeamsArray] = useState(["", "", "", "", "", ""])

    const teamsLength = checkTeams(teamsArray)

    const updateTeamsArray = (e) => {
        const newArray = [ ...teamsArray ]
        newArray[e.target.name] = e.target.value
        setTeamsArray(newArray)
    }

    const buttonFunc = () => {
        const teamsObjArray = []
        teamsArray.forEach((team) => {
            if (team) {
                teamsObjArray.push({teamName: team, flags: getRandomFlags()})
                
            }
        })
        setTeams(teamsObjArray)
    }

    return (
        <div className="teamSelect">
            <div>Please enter up to 6 team names:</div>
            <div className="teamSelect_input">
                <input type="text" name="0" placeholder="Team name..." onChange={updateTeamsArray} />
                <input type="text" name="1" placeholder="Team name..." onChange={updateTeamsArray}/>
                <input type="text" name="2" placeholder="Team name..." onChange={updateTeamsArray}/>
                <input type="text" name="3" placeholder="Team name..." onChange={updateTeamsArray}/>
                <input type="text" name="4" placeholder="Team name..." onChange={updateTeamsArray}/>
                <input type="text" name="5" placeholder="Team name..." onChange={updateTeamsArray}/>
            </div>
            <div className="teamSelect_submit">
                <div className={`${teamsLength > 1 ? "hidden" : ""}`}>You need to enter at least 2 teams names to play.</div>
                <Button text={"Enter"} func={buttonFunc} active={teamsLength > 1} />
            </div>
            {/* <button onClick={() => console.log(teamsArray)}>Teams</button> */}
        </div>
    )
}

export default TeamSelect