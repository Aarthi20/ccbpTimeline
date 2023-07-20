// Write your code here
import {AiFillClockCircle} from 'react-icons/ai'
import './index.css'

const CourseTimeLineCard = props => {
  const {data} = props

  return (
    <div className="course-card-container">
      <div className="title-line">
        <h1 className="title">{data.courseTitle}</h1>
        <div className="duration-container">
          <AiFillClockCircle />
          <p className="duration">{data.duration}</p>
        </div>
      </div>
      <p className="description">{data.description}</p>
      <div className="tags-container">
        {data.tagsList.map(eachItem => (
          <p className="tag-item">{eachItem.name}</p>
        ))}
      </div>
    </div>
  )
}
export default CourseTimeLineCard
