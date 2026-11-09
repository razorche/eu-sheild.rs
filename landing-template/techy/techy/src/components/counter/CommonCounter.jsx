import React from 'react'
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';

const CommonCounter = (props) => {
    return (
        <CountUp start={0} end={props.value} duration={2}>
            {({countUpRef, start}) => (
                <VisibilitySensor onChange={start}>
                    <span ref={countUpRef}/>
                </VisibilitySensor>
            )}
        </CountUp>
    )
}

export default CommonCounter