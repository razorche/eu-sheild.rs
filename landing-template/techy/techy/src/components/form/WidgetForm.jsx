import React, {Fragment} from 'react'

const WidgetForm = () => {

    const handleSubmit = (e) => {
        e.preventDefault();
    }
    return (
        <Fragment>
            <form action="#" onSubmit={handleSubmit}>
                <input type="text" placeholder="Enter Name"/>
                <input type="email" placeholder="Email"/>
                <textarea name="message" placeholder="Write Message" defaultValue={""}/>
                <button className="widget-btn mt-20">Contact Now</button>
            </form>
        </Fragment>
    )
}

export default WidgetForm