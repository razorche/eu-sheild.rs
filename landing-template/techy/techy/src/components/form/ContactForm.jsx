import React, {Fragment} from 'react'
import {useForm} from 'react-hook-form'
import {yupResolver} from '@hookform/resolvers/yup'
import * as Yup from 'yup'


const ContactForm = () => {

        //for validation
        const validationSchema = Yup
        .object()
        .shape({
            name:Yup
                .string()
                .required("Name is Required"),
            email:Yup
                .string()
                .required("Email is Required")
                .email("Entered value does not match email format"),
            sendMessage:Yup.string().required("Please, leave us a message.")
        });

    const formOptions = {
        resolver: yupResolver(validationSchema)
    };
    // get functions to build form with useForm() hook
    const {register, handleSubmit, formState} = useForm(formOptions);
    const {errors} = formState;

    function onSubmit(data, e) {
        //display form data on success
        console.log("Message submited: " + JSON.stringify(data));
        e.target.reset();
    }
    return (
        <Fragment>
            <form className="widget-form" action="#" onSubmit={handleSubmit(onSubmit)}>
                <div className="row gx-4 gx-xxl-5 px-0">
                    <div className="col-md-6 mb-10">
                       <div className="form-input-box">
                        <label className="fs-16 text-white">Name</label>
                            <input type="text" name="name" placeholder="Enter Name" {...register("name")}
                                className={`${errors.name ? "is-invalid" : ""}`}
                            />
                            {errors.name && (
                            <div className="invalid-feedback">{errors.name ?.message}</div> )}
                       </div>
                    </div>
                    <div className="col-md-6 mb-10">
                        <div className="form-input-box">
                            <label className="fs-16 text-white">Email Id</label>
                            <input type="email" name="email" placeholder="Email" {...register("email")}
                                className={`${errors.email ? "is-invalid" : ""}`}
                            />
                            {errors.name && (
                            <div className="invalid-feedback">{errors.email ?.message}</div> )}
                            </div>
                        </div>
                    <div className="col-md-12 mb-20">
                        <div className="form-input-box">
                            <label className="fs-16 text-white">Comments</label>
                            <textarea name="message" placeholder="Write Message" defaultValue={""} {...register("message")}  className={`${errors.sendMessage ? "is-invalid" : ""}`}/>
                            {errors.sendMessage && (
                            <div className="invalid-feedback">{errors.sendMessage ?.message}</div> )}
                        </div>
                    </div>
                    <div className="col-12">
                        <button className="theme_btn">Submit Now</button>
                    </div>
                </div>
            </form>
        </Fragment>
    )
}

export default ContactForm