import { Scores } from "./Scores"

export const ScoresList = props => {
    const { data } = props
    return(
        <div>
            {data.length && data.map(items =>{
                const studentName = items.name
                return items.scores.map(item => <Scores
                    key={item.date}
                    date={item.date}
                    score={item.score}
                    studentName={studentName}
                />)
            })}
        </div>
    )
}