import './Team.scss'

const Team = ({ team, teams, setTeams, selectedTeam, setSelectedTeam }) => {

    const handleFlagClick = (i) => {
        const newSelectedTeam = {teamName: selectedTeam.teamName, flags: selectedTeam.flags.concat([team.flags[i]])}
        const newTeam = {teamName: team.teamName, flags: team.flags.slice(0, i).concat(team.flags.slice(i + 1))}
        const newTeams = []
        teams.forEach((team) => {
            if (team.teamName === newSelectedTeam.teamName) {
                newTeams.push(newSelectedTeam)
            } else if (team.teamName === newTeam.teamName) {
                newTeams.push(newTeam)
            } else {
                newTeams.push(team)
            }
        })
        setTeams(newTeams)
        setSelectedTeam(null)
    }

    return (
        <div className={`team ${selectedTeam ? (selectedTeam.teamName === team.teamName ? "selected" : "notSelected") : "available"}`} onClick={() => !selectedTeam ? setSelectedTeam(team) : null}>
            <div className="team_name">{team.teamName}</div>
            <div className="team_flags">
                {
                    team.flags.map((flag, i) => {
                        return <img src={require(`../img/flags/${flag}_40.png`)} alt={i} key={i} onClick={() => (selectedTeam && selectedTeam.teamName !== team.teamName) ? handleFlagClick(i, team) : null}/>
                    })
                }
            </div>
        </div>
    )
}

export default Team