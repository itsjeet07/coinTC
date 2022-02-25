import React from 'react'
import './Frame01.css'
import { Container, Row, Col, Form, Button,Div,Dropdown,Tabs,Tab,Sonnet } from 'react-bootstrap';
// import { Link } from 'react-router-dom'
// import { Carousel } from 'react-responsive-carousel';
// import "react-responsive-carousel/lib/styles/carousel.min.css";


import usdt_icon from '../../app-assets/images/icon/usdt.png';
import cont_icon from '../../app-assets/images/page/order/cont.png';


export const Frame01 = () => {
    return (     
        <div className="Frame01"> 
            <section id="allPayment">
                <div className="container-fluid">
                    <div className="container">
                        <div className="row">
                            <div className="col col-sm-12 col-md-8">
                                <div className="all-payment-header d-flex justify-content-between pt-4">
                                    <div className="all-payment-header-left">
                                        <h3>All Payment Methods</h3>
                                    </div>
                                    <div className="all-payment-header-right">
                                        <div className="input-group mb-3">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text border-top-0 border-right-0 border-left-0  bg-transparent"><i className="fa fa-search" aria-hidden="true"></i></span>
                                            </div>
                                            <input type="text" className="form-control border-top-0 border-right-0 border-left-0" placeholder="Search"/>
                                        </div>
                                    </div>
                                </div>

                                <div className="all-payment-nav pb-4">
                                    <div className="all-payment-nav-btn d-flex align-items-center">
                                        <button className="btn btn-primary">ALL</button>
                                        <p className="mb-0 pl-3">A B C D E F G H I J K L M N O P Q R S T U V W X Y Z</p>
                                    </div>
                                </div>

                                <div className="all-payment-body mt-4">
                                    <table className="w-75">
                                        <thead>
                                            <tr>
                                                <th></th>
                                                <th></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td className="position-relative orange"><h5>7-Eleven</h5></td>
                                                <td className="position-relative light-green"><h5>A-Bank</h5></td>
                                            </tr>
                                            <tr>
                                                <td className="position-relative dark-green"><h5>ABA Bank</h5></td>
                                                <td className="position-relative dark-green"><h5>ABN AMRO</h5></td>
                                            </tr>
                                            <tr>
                                                <td className="position-relative red"><h5>Absolut Bank</h5></td>
                                                <td className="position-relative green"><h5>Advcash</h5></td>
                                            </tr>
                                            <tr>
                                                <td className="position-relative green"><h5>Agrebank</h5></td>
                                                <td className="position-relative blue"><h5>AirTM</h5></td>
                                            </tr>
                                            <tr>
                                                <td className="position-relative green"><h5>Ak Bars Bank</h5></td>
                                                <td className="position-relative red"><h5>Alfa-bank</h5></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div> 
    )
}
