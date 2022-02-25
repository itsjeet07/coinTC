import React from 'react'
import './Wallet_verification.css'
import { Container, Row, Col, Form, Button,Div,Dropdown,Tabs,Tab,Sonnet } from 'react-bootstrap';
// import { Link } from 'react-router-dom'
// import { Carousel } from 'react-responsive-carousel';
// import "react-responsive-carousel/lib/styles/carousel.min.css";


import usdt_icon from '../../app-assets/images/coin/usdt.png';


export const Wallet_verification2 = () => {
    return (     
        <div className="content">
            <section id="mainTop">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h3 className="wow animate__animated fadeInDown" data-wow-delay="0.3s">Wallet</h3>
                        </div>
                    </div>
                </div>
            </section>
            
            <section id="walletVerification">
                <div className="container">
                    <div className="row" data-wow-delay="0.2s">
                        <div className="col-12 col-md-6 mx-auto walletVerification-row wow animate__animated fadeInDown">
                            <h4>Verification</h4>
                            <div className="table_container wow fadeInUp" data-wow-delay="0.6s">
                                <table className="w-100">
                                    <thead>
                                        <tr>
                                            <th></th>
                                            <th></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Coin/Network</td>
                                            <td className="network">
                                                <img src={usdt_icon}/>
                                                USDT/Ethreum ERC20
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Address</td>
                                            <td className="network">
                                                0x7790a6DAe3174A60E171A25a040f913b5d6054d4
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Amount</td>
                                            <td className="network">
                                                999.0000000 USDT (Fee 1 USDT)
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <form>
                                <div className="form-group">
                                    <label for="exampleInputEmail1 mb-1">Email address</label>
                                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                    <small id="emailHelp" className="form-text text-muted">Enter the 6 digit code received by ema***@gmail.com.</small>
                                </div>

                                <div className="mb-4">
                                    <ul className="valid-time my-5">
                                        <li className="valid">Valid time</li>
                                        <li className="time">03:00</li>
                                    </ul>
                                </div>

                                <div className="btn-next">
                                    <button className="btn btn_next">Submit</button>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}
