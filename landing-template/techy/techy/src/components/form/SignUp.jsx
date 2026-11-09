import React, {Fragment} from 'react'
import {Link} from 'react-router-dom'


const handleSubmit =(e)=>{
    e.preventDefault();
}

const SignUp = () => {
    return (
        <Fragment>
            <form className="widget-form p-0" action="#" onSubmit={handleSubmit}>
                <div className="input-box mb-30">
                    <input type="text" placeholder="Username"/>
                </div>
                <div className="input-box mail mb-30">
                    <input type="email" placeholder="Email Name"/>
                </div>
                <div className="input-box phone mb-30">
                    <input type="text" placeholder="Phone Number"/>
                </div>
                <div className="input-box pass mb-30">
                    <input type="text" placeholder="Password"/>
                </div>
                <div className="input-box pass mb-30">
                    <input type="text" placeholder="Confirm Password"/>
                </div>
                <div className="input-check mb-30">
                    <input type="checkbox"/>
                    <span>Agree to the Terms & Conditions</span>
                </div>
                <div className="col-12">
                    <button className="theme_btn">Submit Now</button>
                    <span className="divider">OR</span>
                    <button className="theme_btn signup-btn"><img className="mr-20" src="assets/img/icon/google.svg" alt="icon"/>
                        Sign Up With Google</button>
                    <p className="text-center mt-4">Already you have an account ? <Link to="/login">Login</Link></p>
                </div>
            </form>
        </Fragment>
    )
}

export default SignUp