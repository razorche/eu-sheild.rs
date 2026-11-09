import React, {Fragment} from 'react'
import {Link} from 'react-router-dom'


const handleSubmit =(e)=>{
    e.preventDefault();
}

const Login = () => {
    return (
        <Fragment>
            <form className="widget-form p-0" action="#" onSubmit={handleSubmit}>
                <div className="input-box mb-30">
                    <input type="text" placeholder="Username"/>
                </div>
                <div className="input-box mail mb-30">
                    <input type="email" placeholder="Email Name"/>
                </div>
                <div className="input-box pass mb-30">
                    <input type="text" placeholder="Password"/>
                </div>
                <div className="col-12 text-center">
                    <button className="theme_btn">Log In Now</button>
                    <span className="divider">OR</span>
                    <button className="theme_btn signup-btn"><img className="mr-20" src="assets/img/icon/google.svg" alt="icon" /> Log In With Google</button>
                    <p className="text-white fw-regular mt-40 mb-10">Don’t have an account ?  <Link to="/signup" className="fw-semi">Sign up Today</Link></p>
                    <a href="#" className="fw-semi text-white fw-semi">Forgot password</a>
                </div>
            </form>
        </Fragment>
    )
}

export default Login