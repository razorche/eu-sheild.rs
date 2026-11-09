import React, {Fragment} from 'react'

const handleSubmit = (e) =>{
    e.preventDefault();
}

export const SubscribeFormOne = () => {
    return (
        <Fragment>
            <form className="sub-form" action="#" onSubmit={handleSubmit}>
                <input type="text" placeholder="Email"/>
                <button type="submit"><i className="bi bi-arrow-right"/></button>
            </form>
        </Fragment>
    )
}
