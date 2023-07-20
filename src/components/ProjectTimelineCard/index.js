// Write your code here
import {AiFillCalendar} from 'react-icons/ai'
import './index.css'

const ProjectTimeLineCard = props => {
  const {data} = props

  return (
    <div className="project-line-container">
      <img src={data.imageUrl} alt="project" className="project-image" />
      <div className="title-container">
        <h1 className="title">{data.projectTitle}</h1>
        <div className="duration-container">
          <AiFillCalendar />
          <p className="duration">{data.duration}</p>
        </div>
      </div>
      <p className="description">{data.description}</p>
      <div>
        <a href={data.projectUrl}>Visit</a>
      </div>
    </div>
  )
}
export default ProjectTimeLineCard
