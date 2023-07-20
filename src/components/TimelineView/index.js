// Write your code here
import {Chrono} from 'react-chrono'
import CourseTimeLineCard from '../CourseTimelineCard'
import ProjectTimeLineCard from '../ProjectTimelineCard'

import './index.css'

const TimelineView = props => {
  const {timelineItemsList} = props

  return (
    <div className="time-line-container">
      <h1>
        MY JOURNEY OF <hr />
        CCBP 4.0
      </h1>
      <div className="chrono-container">
        <Chrono
          mode="VERTICAL_ALTERNATING"
          items={timelineItemsList}
          theme={{
            secondary: 'white',
          }}
        >
          {timelineItemsList.map(eachItem => {
            if (eachItem.categoryId === 'COURSE') {
              return <CourseTimeLineCard data={eachItem} />
            }
            return <ProjectTimeLineCard data={eachItem} />
          })}
        </Chrono>
      </div>
    </div>
  )
}
export default TimelineView
