import { Student } from "./Student"

export const StudentList = props => {
    const { data } = props
    const listOfStudent = data.map(student => student.name)
    
    return(
        <div className="student-container">
            {data.length && data.map(
                item => <Student
                    key={item.name }
                    name={item.name}
                    bio = {item.bio}
                />
            )}
        </div>
    )
}