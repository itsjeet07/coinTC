import React from 'react'
import './Ad_payment_method.css'
import { Dropdown } from 'react-bootstrap';
// import { Link } from 'react-router-dom'

import refresh_icon from '../../app-assets/images/icon/refresh.png';

export const Ad_payment_method = () => {
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
                            <li className="">Set price and type</li>
                            <li className="active">Set up your trading method</li>
                            <li>Enter contract terms</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section id="createAds">
                <div className="container">
                    <div className="row justify-content-center wow fadeInUp" data-wow-delay="0.7s">
                        <div className="col-sm-12 col-md-6 craeat-main-box clear">
                            <h4>Payment method (up to 3)</h4>
                            <ul className="clear">
                                <li><a href="#">+ Add Bank</a></li>
                            </ul>
                            <div className="table_container">
                                <table>
                                    <thead>
                                        <tr>
                                            <th>Bank price</th>
                                            <th>hamsinseung</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="bitcoin">
                                            <td className="coin clear">Name</td>
                                            <td className="available">Add payment ham sinseung ham sinseung</td>
                                        </tr>
                                        <tr className="bitcoin">
                                            <td className="coin clear">Bank acount/card</td>
                                            <td className="available">1103253636748</td>
                                        </tr>
                                        <tr className="bitcoin">
                                            <td className="coin clear">Bank name</td>
                                            <td className="available">Shin Han</td>
                                        </tr>
                                        <tr>
                                            <td></td>
                                            <td className="text-right">
                                                <a href="#" className="btn btn-delete">Delete</a>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="table_container">
                                <table>
                                    <thead>
                                        <tr>
                                            <th>wechat</th>
                                            <th>Ham sinseung</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="bitcoin">
                                            <td className="coin clear">Name</td>
                                            <td className="available">Ham sinseung</td>
                                        </tr>
                                        <tr className="bitcoin">
                                            <td className="coin clear">Widget account</td>
                                            <td className="available">Blockdaon</td>
                                        </tr>
                                        <tr>
                                            <td></td>
                                            <td className="text-right"><a href="#" className="btn btn-delete">Delete</a></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="mt-5 banktransfer">
                                <h4>BankTransfer</h4>
                                <div className="row">
                                    <div className="col-sm-12 col-md-4">
                                        <form>
                                            <div className="form-group">
                                                <label for="exampleInputEmail1">Name</label>
                                                <input type="text" className="form-control" id="name"/>
                                            </div>
                                        </form>
                                    </div>
                                    <div className="col-sm-12 col-md-4">
                                        <form>
                                            <div className="form-group">
                                                <label for="exampleInputEmail1">Bank account number</label>
                                                <input type="text" className="form-control" id="name"/>
                                            </div>
                                        </form>
                                    </div>
                                    <div className="col-sm-12 col-md-4">
                                        <form>
                                            <div className="form-group">
                                                <label for="exampleInputEmail1">Bank name</label>
                                                <input type="text" className="form-control" id="name"/>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <div className="btnsave text-right">
                                    <a href="#" className="btn save-btn text-right">Save</a>
                                </div>
                            </div>

                            <hr className="hr-dash"/>

                            <div className="row mt-2">
                                <div className="col-md-6">
                                    <div className="pwt">
                                        <div className="pwt-title">
                                            <p>Payment waiting time</p>
                                        </div>
                                        <Dropdown>
                                            <Dropdown.Toggle variant="" id="dropdown-basic">
                                                 15
                                            </Dropdown.Toggle>

                                            <Dropdown.Menu>
                                                <Dropdown.Item href="#"> 16</Dropdown.Item>
                                                <Dropdown.Item href="#"> 17</Dropdown.Item>
                                                <Dropdown.Item href="#"> 18</Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </div>
                                </div>
                            </div>
                            <div className="row mt-4">
                                <div className="col-md-6">
                                    <a className="btn btn-ref font-weight-bold"><img src={refresh_icon} width="20" className="mr-2"/>Refresh</a>
                                </div>
                                <div className="col-md-6 d-flex justify-content-end">
                                    <a href="/ad_contract" className="btn btn-primary font-weight-bold">next stage</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div> 
    )
}
