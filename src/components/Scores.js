import './Scores.scss'

import { getPoints } from '../data/points'

import Team from './Team'

const Scores = ({ teams, displayScore }) => {

    const points = getPoints()

    const preScores = []
    teams.forEach((team) => {
        let score = 0
        team.flags.forEach((flag) => {
            score += points[flag]
        })
        preScores.push({teamName: team.teamName, score: score})
    })
    // let scoreList = []
    // preScores.forEach((score) => {
    //     scoreList.push(score.score)
    // })
    // scoreList.sort()
    // const scores = []
    // scoreList.forEach((score) => {
    //     Object.keys(preScores).forEach((key) => {
    //         if (preScores[key] === score) {
    //             scores.push({teamName: key, score: score})
    //         }
    //     })
    // })
    console.log(preScores)

    return (
        <div className="scores">
            <div className="scores_points">
                {
                    Object.keys(points).map((key) => {
                        return <div>{key} = {points[key]}</div>
                    })
                }
            </div>
            <div className="scores_teams">
            {
                teams.map((team, i) => {
                    return <Team team={team} displayScore={displayScore} key={i} />
                })
            }
            </div>
            <div className="scores_scores">
                {
                    preScores.map((score) => {
                        return <div>{score.teamName}: {score.score}</div>
                    })
                }
            </div>
        </div>
    )
}

export default Scores