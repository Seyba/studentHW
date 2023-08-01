export const Scores = props => {
    const {score, date, studentName} = props
    return(
        <div>
            <div className="row justify-content-between">
                <div className="col-4">
                    <h4>Date: {date}</h4>
                </div>
                <div className="col-4">
                    <h4>Score: {score}</h4> 
                </div>
            </div>         
        </div>
    )
}