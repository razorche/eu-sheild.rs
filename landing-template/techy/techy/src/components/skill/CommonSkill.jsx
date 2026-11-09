import React, { Fragment } from 'react'
import { CircularProgressbar,buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const CommonSkill = (props) => {
  return (
    <Fragment>
        <CircularProgressbar 
            className="chart"
            value={props.number}
            text={`${props.number}%`}
            strokeWidth={7}
            
            styles={buildStyles({
              rotation:0.25,
              trailWidth:"2",
              textColor: "#fff",
              pathColor: "#913BFF",
              trailColor: "#887878",
              pathTransitionDuration: 1,
            })}
        />
    </Fragment>
  )
}

export default CommonSkill