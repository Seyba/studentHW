import {useState, useEffect} from 'react'
import { studentData } from "./utils/studentData"
import { StudentList } from './components/StudentList'
import {ScoresList} from './components/ScoresList'

export const App = () => {
  const [data, setData] = useState(studentData)
  
  return(
    <div>
      <div className="row">
        <div className="col-md-1"></div>
        <div className="col-md-10">
          <h1>Student App</h1>
          <StudentList
            data={data}
          />
          <ScoresList
            data={data}
          />
        </div>
        <div className="col-md-1"></div>
      </div>
    </div>
  )
}