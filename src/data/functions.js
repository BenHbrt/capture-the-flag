export const checkTeams = (teamsArray) => {
    let teamCount = teamsArray.filter(Boolean).length
    return teamCount
}