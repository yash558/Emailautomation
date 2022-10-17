import React from 'react'
import contact from '../../assets/contact1.jpg'
import './Contact.css'
const Contact = () => {
    return (
        <div>
            <section id='contact'>
                <div className="container my-5 py-5">
                    <div className="row mb-5">
                        <div className="col-12">
                            <div className="fs-5 text-center mb-0">
                                Contact Us
                            </div>
                            <h1 className='display-6 text-center mb-4'>
                                Have Some <b>Question?</b>
                            </h1>
                            <hr className="w-25 mx-auto" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <img src={contact} alt="Contact" className="contact_img" height={700} width={700} />
                        </div>
                        <div className="col-md-6">
                            <form action="">
                                <div className="mb-3">
                                    <div class="mb-3">
                                        <label for="exampleFormControlInput1" class="form-label">Your Name</label>
                                        <input type="name" className="form-control" id="exampleFormControlInput1" placeholder="Yash Sharma ..." />
                                    </div>
                                    <div class="mb-3">
                                        <label for="exampleFormControlInput1" class="form-label">Email address</label>
                                        <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                                    </div>
                                    <div class="mb-3">
                                        <label for="exampleFormControlInput1" class="form-label">Phone Number</label>
                                        <input type="mobile" className="form-control" id="exampleFormControlInput1" placeholder="9288272...." />
                                    </div>
                                    <div class="mb-3">
                                        <label for="exampleFormControlTextarea1" class="form-label">Your Message</label>
                                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="8"></textarea>
                                    </div>
                                    <button type="submit" className='btn btn-outline-primary rounded-pill px-4'>Send Message <i className="fa fa-paper-plane ms-2"></i></button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

            </section>
        </div>
    )
}

export default Contact