import React from 'react'
import './Ad_contract.css'
import { Form } from 'react-bootstrap';

export const Ad_contract = () => {
    return (
        <div className="content">
            <section id="mainTop">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h3 className="wow animate__animated fadeInDown" data-wow-delay="0.3s">Create an AD</h3>
                        </div>
                    </div>
                </div>
            </section>


            <section id="createAdsTop">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 mx-auto p-0">
                            <div className="timeline-title">
                                <h5>Advertisement Create an ad</h5>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-md-12 d-flex justify-content-center my-5">
                            <ul className="timeline my-timeline">
                                <li className>Set price and type</li>
                                <li className>Set up your trading method</li>
                                <li className="active">Enter contract terms</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>


            <section className="create-3">
                <div className="container">
                    <div className="row justify-content-center mb-5">
                        <div className="col-md-6 sell-buy py-4">
                            <div className="row justify-content-center">
                                <div className="col-12">
                                    <div>
                                        <div className="info-title">
                                            <p>Contract conditions</p>
                                        </div>
                                        <div className="tearm-details">
                                            <p>
                                                Hello, if you send me a message or phone call after making a deposit using the payment information I registered, I will process the transaction completion. My contact number is 010-8749-8090. thank you.
                                            </p>
                                        </div>
                                    </div>


                                    <hr className="hr-dash" />


                                    <div className="col-12">
                                        <div className="label-verify">
                                            <label for="verify">Identity verified</label>
                                        </div>
                                        <div key={`inline-radio`} className="mb-3">
                                            <Form.Check inline label="ON" name="same" type="radio" id={`inline-radio-1`} />
                                            <Form.Check inline label="OFF" name="same" type="radio" checked id={`inline-radio-2`} />
                                        </div>
                                    </div>

                                    <div className="col-12 d-flex justify-content-end">
                                        <a href="#" className="btn btn-primary">Submit</a>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}
