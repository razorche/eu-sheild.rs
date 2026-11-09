import React, {Fragment} from 'react'

const handleSubmit = (e) => {
    e.preventDefault();
}

const CommentForm = () => {
    return (
        <Fragment>
            <form className="contact-form" action="#" onSubmit={handleSubmit}>
                <div className="row">
                    <div className="col-lg-6">
                        <div className="input-box mb-40">
                            <label>Name</label>
                            <input type="email" placeholder="Enter Name"/>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="input-box mail-input mb-40">
                            <label>Email Id</label>
                            <input type="text" placeholder="Email Address"/>
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="input-box text-input mb-60">
                            <label>Comments</label>
                            <textarea
                                name="message"
                                cols={30}
                                rows={10}
                                placeholder="Write Your Comments"
                                defaultValue={""}/>
                        </div>
                    </div>
                    <div className="col-12">
                        <button className="theme_btn">Post Comment</button>
                    </div>
                </div>
            </form>
        </Fragment>
    )
}

export default CommentForm