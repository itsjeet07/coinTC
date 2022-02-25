import React, { useEffect, useState } from 'react'
import './Trade_crypto.css'
import {  Button,Modal,Nav,ProgressBar,Tabs,Tab,Dropdown } from 'react-bootstrap';


import usdt_icon from '../../app-assets/images/icon/usdt.png';
import refresh_icon from '../../app-assets/images/page/creat-ad/refresh.png';
import bank_icon from '../../app-assets/images/icon/bank-icon.png';
import money_icon from '../../app-assets/images/icon/money.png';
import chat_icon from '../../app-assets/images/icon/chat-icon.png';

// import '@fortawesome/fontawesome-free/css/all.min.css';
// npm install --save-dev @fortawesome/fontawesome-free



 
export const Trade_crypto = () => {
    return (     
        <div className="Trade_crypto Orders"> 
            <section>
                <div className="container-fluid">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-md-10">
                                
                                <Tabs defaultActiveKey="buy-tab" id="buy-sell-tabs" className="buy-sell-tab mr-3">
                                    <Tab eventKey="buy-tab" title="BUY" >
                                        
                                        <Tabs defaultActiveKey="btc-tab" id="crypto-tabs">
                                            <Tab eventKey="btc-tab" title="BTC" >
                                                <div className="container overflow-x-auto">
                                                    <div className="row align-items-center justify-content-center py-3">
                                                        <div className="col-md-12 py-3">
                                                            <div className="row">
                                                                <div className="col-md-6 d-flex justify-content-around">
                                                                    <div className="coin">
                                                                        <div className="coin-title">
                                                                            <p>Money</p>
                                                                        </div>
                                                                        <Dropdown>
                                                                            <Dropdown.Toggle variant="" id="dropdown-basic">
                                                                            <img src={usdt_icon}/> USDT
                                                                            </Dropdown.Toggle>
                                                                            <Dropdown.Menu>
                                                                                <Dropdown.Item href="#"><img src={usdt_icon}/> USDT</Dropdown.Item>
                                                                                <Dropdown.Item href="#"><img src={usdt_icon}/> USDT</Dropdown.Item>
                                                                                <Dropdown.Item href="#"><img src={usdt_icon}/> USDT</Dropdown.Item>
                                                                            </Dropdown.Menu>
                                                                        </Dropdown>
                                                                    </div>

                                                                    <div className="coin">
                                                                        <div className="coin-title">
                                                                            <p>Payment Method</p>
                                                                        </div>
                                                                        <Dropdown>
                                                                            <Dropdown.Toggle variant="" id="dropdown-basic">
                                                                                All Payment
                                                                            </Dropdown.Toggle>
                                                                            <Dropdown.Menu>
                                                                                <Dropdown.Item href="#">All Payment</Dropdown.Item>
                                                                                <Dropdown.Item href="#">All Payment</Dropdown.Item>
                                                                                <Dropdown.Item href="#">All Payment</Dropdown.Item>
                                                                            </Dropdown.Menu>
                                                                        </Dropdown>
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-6 d-flex justify-content-end align-items-end">
                                                                    <div className="ad-bn">
                                                                        <a className="btn btn-ref font-weight-bold mr-2"><img src={refresh_icon} width="20" className="mr-2"/>Refresh</a>
                                                                        <a href="#" className="btn btn-outline-primary">+  Creat an AD</a>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <table id="dtBasicExample" className="table mt-3" cellspacing="0" width="100%">
                                                                <thead>
                                                                    <tr>
                                                                        <th className="th-sm">User</th>
                                                                        <th className="th-sm">Available/Limited</th>
                                                                        <th className="th-sm">Payment</th>
                                                                        <th className="th-sm">Price</th>
                                                                        <th className="th-sm">Transaction</th>
                                                                    </tr>
                                                                </thead>
                                                                <tbody>
                                                                    <tr>
                                                                        <td>
                                                                            <p className="text-primary mb-0">Xuhai8888</p>
                                                                            <p className="text-gray mb-0">106 order  |  98.1% Completion</p>
                                                                        </td>
                                                                        <td>
                                                                            <div className="ass-ty d-flex align-items-center">
                                                                                <div className="ass-ty-img pr-3">
                                                                                    <p className="mb-0">Available Limit</p>
                                                                                </div>
                                                                                <div className="ass-ty-content">
                                                                                    <p className="mb-0">1.65908675 BTC 50,000- 300,000 CNY</p>
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                        <td>
                                                                            <div className="price-icon">
                                                                                <a href="#"><img src={bank_icon} width="20"/></a>
                                                                                <a href="#"><img src={money_icon} width="20"/></a>
                                                                                <a href="#"><img src={chat_icon} width="20"/></a>
                                                                            </div>
                                                                        </td>
                                                                        <td>270,042.63 CNY</td>
                                                                        <td><a href="#" className="btn btn-primary">Buy BTC</a></td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>
                                                                            <p className="text-primary mb-0">Xuhai8888</p>
                                                                            <p className="text-gray mb-0">106 order  |  98.1% Completion</p>
                                                                        </td>
                                                                        <td>
                                                                            <div className="ass-ty d-flex align-items-center">
                                                                                <div className="ass-ty-img pr-3">
                                                                                    <p className="mb-0">Available Limit</p>
                                                                                </div>
                                                                                <div className="ass-ty-content">
                                                                                    <p className="mb-0">1.65908675 BTC 50,000- 300,000 CNY</p>
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                        <td>
                                                                            <div className="price-icon">
                                                                                <a href="#"><img src={bank_icon} width="20"/></a>
                                                                                <a href="#"><img src={money_icon} width="20"/></a>
                                                                                <a href="#"><img src={chat_icon} width="20"/></a>
                                                                            </div>
                                                                        </td>
                                                                        <td>270,042.63 CNY</td>
                                                                        <td><a href="#" className="btn btn-outline-secondary">Limited</a></td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>
                                                                            <p className="text-primary mb-0">Xuhai8888</p>
                                                                            <p className="text-gray mb-0">106 order  |  98.1% Completion</p>
                                                                        </td>
                                                                        <td>
                                                                            <div className="ass-ty d-flex align-items-center">
                                                                                <div className="ass-ty-img pr-3">
                                                                                    <p className="mb-0">Available Limit</p>
                                                                                </div>
                                                                                <div className="ass-ty-content">
                                                                                    <p className="mb-0">1.65908675 BTC 50,000- 300,000 CNY</p>
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                        <td>
                                                                            <div className="price-icon">
                                                                                <a href="#"><img src={bank_icon} width="20"/></a>
                                                                                <a href="#"><img src={money_icon} width="20"/></a>
                                                                                <a href="#"><img src={chat_icon} width="20"/></a>
                                                                            </div>
                                                                        </td>
                                                                        <td>270,042.63 CNY</td>
                                                                        <td><a href="#" className="btn btn-primary">Buy BTC</a></td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>
                                                                            <p className="text-primary mb-0">Xuhai8888</p>
                                                                            <p className="text-gray mb-0">106 order  |  98.1% Completion</p>
                                                                        </td>
                                                                        <td>
                                                                            <div className="ass-ty d-flex align-items-center">
                                                                                <div className="ass-ty-img pr-3">
                                                                                    <p className="mb-0">Available Limit</p>
                                                                                </div>
                                                                                <div className="ass-ty-content">
                                                                                    <p className="mb-0">1.65908675 BTC 50,000- 300,000 CNY</p>
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                        <td>
                                                                            <div className="price-icon">
                                                                                <a href="#"><img src={bank_icon} width="20"/></a>
                                                                                <a href="#"><img src={money_icon} width="20"/></a>
                                                                                <a href="#"><img src={chat_icon} width="20"/></a>
                                                                            </div>
                                                                        </td>
                                                                        <td>270,042.63 CNY</td>
                                                                        <td><a href="#" className="btn btn-primary">Buy BTC</a></td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>
                                                                            <p className="text-primary mb-0">Xuhai8888</p>
                                                                            <p className="text-gray mb-0">106 order  |  98.1% Completion</p>
                                                                        </td>
                                                                        <td>
                                                                            <div className="ass-ty d-flex align-items-center">
                                                                                <div className="ass-ty-img pr-3">
                                                                                    <p className="mb-0">Available Limit</p>
                                                                                </div>
                                                                                <div className="ass-ty-content">
                                                                                    <p className="mb-0">1.65908675 BTC 50,000- 300,000 CNY</p>
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                        <td>
                                                                            <div className="price-icon">
                                                                                <a href="#"><img src={bank_icon} width="20"/></a>
                                                                                <a href="#"><img src={money_icon} width="20"/></a>
                                                                                <a href="#"><img src={chat_icon} width="20"/></a>
                                                                            </div>
                                                                        </td>
                                                                        <td>270,042.63 CNY</td>
                                                                        <td><a href="#" className="btn btn-primary">Buy BTC</a></td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>
                                                                            <p className="text-primary mb-0">Xuhai8888</p>
                                                                            <p className="text-gray mb-0">106 order  |  98.1% Completion</p>
                                                                        </td>
                                                                        <td>
                                                                            <div className="ass-ty d-flex align-items-center">
                                                                                <div className="ass-ty-img pr-3">
                                                                                    <p className="mb-0">Available Limit</p>
                                                                                </div>
                                                                                <div className="ass-ty-content">
                                                                                    <p className="mb-0">1.65908675 BTC 50,000- 300,000 CNY</p>
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                        <td>
                                                                            <div className="price-icon">
                                                                                <a href="#"><img src={bank_icon} width="20"/></a>
                                                                                <a href="#"><img src={money_icon} width="20"/></a>
                                                                                <a href="#"><img src={chat_icon} width="20"/></a>
                                                                            </div>
                                                                        </td>
                                                                        <td>270,042.63 CNY</td>
                                                                        <td><a href="#" className="btn btn-primary">Buy BTC</a></td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                            <nav aria-label="Page navigation example">
                                                                <ul className="pagination d-flex justify-content-end">
                                                                    <li className="page-item"><a className="page-link" href="#">Previous</a></li>
                                                                    <li className="page-item"><a className="page-link" href="#">1</a></li>
                                                                    <li className="page-item"><a className="page-link" href="#">2</a></li>
                                                                    <li className="page-item"><a className="page-link" href="#">3</a></li>
                                                                    <li className="page-item"><a className="page-link" href="#">Next</a></li>
                                                                </ul>
                                                            </nav>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Tab>
                                            <Tab eventKey="eth-tab" title="ETH">
                                                <div className="container overflow-x-auto">
                                                    <div className="row align-items-center justify-content-center py-3">
                                                        <div className="col-md-12 py-3">
                                                            <div className="row">
                                                                <div className="col-md-6 d-flex justify-content-around">
                                                                    <div className="coin">
                                                                        <div className="coin-title">
                                                                            <p>Money</p>
                                                                        </div>
                                                                        <div className="dropdown">
                                                                            <button className="btn dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                                <img src={usdt_icon}/> USDT
                                                                            </button>

                                                                            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                                                                <a className="dropdown-item" href="#"><img src={usdt_icon}/> USDT</a>
                                                                                <a className="dropdown-item" href="#"><img src={usdt_icon}/> USDT</a>
                                                                                <a className="dropdown-item" href="#"><img src={usdt_icon}/> USDT</a>
                                                                            </div>
                                                                        </div>
                                                                    </div>

                                                                    <div className="coin">
                                                                        <div className="coin-title">
                                                                            <p>Payment Method</p>
                                                                        </div>
                                                                        <div className="dropdown">
                                                                            <button className="btn dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> All Payment
                                                                            </button>

                                                                            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                                                                <a className="dropdown-item" href="#">All Payment</a>
                                                                                <a className="dropdown-item" href="#">All Payment</a>
                                                                                <a className="dropdown-item" href="#">All Payment</a>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-6 d-flex justify-content-end align-items-end">
                                                                    <div className="ad-bn">
                                                                        <a className="btn btn-ref font-weight-bold mr-2"><img src={refresh_icon} width="20" className="mr-2"/>Refresh</a>
                                                                        <a href="#" className="btn btn-outline-primary">+  Creat an AD</a>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <table id="dtBasicExample" className="table mt-3" cellspacing="0" width="100%">
                                                                <thead>
                                                                    <tr>
                                                                        <th className="th-sm">User</th>
                                                                        <th className="th-sm">Available/Limited</th>
                                                                        <th className="th-sm">Payment</th>
                                                                        <th className="th-sm">Price</th>
                                                                        <th className="th-sm">Transaction</th>
                                                                    </tr>
                                                                </thead>
                                                                <tbody>
                                                                    <tr>
                                                                        <td>
                                                                            <p className="text-primary mb-0">Xuhai8888</p>
                                                                            <p className="text-gray mb-0">106 order  |  98.1% Completion</p>
                                                                        </td>
                                                                        <td>
                                                                            <div className="ass-ty d-flex align-items-center">
                                                                                <div className="ass-ty-img pr-3">
                                                                                    <p className="mb-0">Available Limit</p>
                                                                                </div>
                                                                                <div className="ass-ty-content">
                                                                                    <p className="mb-0">1.65908675 BTC 50,000- 300,000 CNY</p>
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                        <td>
                                                                            <div className="price-icon">
                                                                                <a href="#"><img src={bank_icon} width="20"/></a>
                                                                                <a href="#"><img src={money_icon} width="20"/></a>
                                                                                <a href="#"><img src={chat_icon} width="20"/></a>
                                                                            </div>
                                                                        </td>
                                                                        <td>270,042.63 CNY</td>
                                                                        <td><a href="#" className="btn btn-primary">Buy BTC</a></td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>
                                                                            <p className="text-primary mb-0">Xuhai8888</p>
                                                                            <p className="text-gray mb-0">106 order  |  98.1% Completion</p>
                                                                        </td>
                                                                        <td>
                                                                            <div className="ass-ty d-flex align-items-center">
                                                                                <div className="ass-ty-img pr-3">
                                                                                    <p className="mb-0">Available Limit</p>
                                                                                </div>
                                                                                <div className="ass-ty-content">
                                                                                    <p className="mb-0">1.65908675 BTC 50,000- 300,000 CNY</p>
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                        <td>
                                                                            <div className="price-icon">
                                                                                <a href="#"><img src={bank_icon} width="20"/></a>
                                                                                <a href="#"><img src={money_icon} width="20"/></a>
                                                                                <a href="#"><img src={chat_icon} width="20"/></a>
                                                                            </div>
                                                                        </td>
                                                                        <td>270,042.63 CNY</td>
                                                                        <td><a href="#" className="btn btn-primary">Buy BTC</a></td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>
                                                                            <p className="text-primary mb-0">Xuhai8888</p>
                                                                            <p className="text-gray mb-0">106 order  |  98.1% Completion</p>
                                                                        </td>
                                                                        <td>
                                                                            <div className="ass-ty d-flex align-items-center">
                                                                                <div className="ass-ty-img pr-3">
                                                                                    <p className="mb-0">Available Limit</p>
                                                                                </div>
                                                                                <div className="ass-ty-content">
                                                                                    <p className="mb-0">1.65908675 BTC 50,000- 300,000 CNY</p>
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                        <td>
                                                                            <div className="price-icon">
                                                                                <a href="#"><img src={bank_icon} width="20"/></a>
                                                                                <a href="#"><img src={money_icon} width="20"/></a>
                                                                                <a href="#"><img src={chat_icon} width="20"/></a>
                                                                            </div>
                                                                        </td>
                                                                        <td>270,042.63 CNY</td>
                                                                        <td><a href="#" className="btn btn-outline-secondary">Limited</a></td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>
                                                                            <p className="text-primary mb-0">Xuhai8888</p>
                                                                            <p className="text-gray mb-0">106 order  |  98.1% Completion</p>
                                                                        </td>
                                                                        <td>
                                                                            <div className="ass-ty d-flex align-items-center">
                                                                                <div className="ass-ty-img pr-3">
                                                                                    <p className="mb-0">Available Limit</p>
                                                                                </div>
                                                                                <div className="ass-ty-content">
                                                                                    <p className="mb-0">1.65908675 BTC 50,000- 300,000 CNY</p>
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                        <td>
                                                                            <div className="price-icon">
                                                                                <a href="#"><img src={bank_icon} width="20"/></a>
                                                                                <a href="#"><img src={money_icon} width="20"/></a>
                                                                                <a href="#"><img src={chat_icon} width="20"/></a>
                                                                            </div>
                                                                        </td>
                                                                        <td>270,042.63 CNY</td>
                                                                        <td><a href="#" className="btn btn-primary">Buy BTC</a></td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>
                                                                            <p className="text-primary mb-0">Xuhai8888</p>
                                                                            <p className="text-gray mb-0">106 order  |  98.1% Completion</p>
                                                                        </td>
                                                                        <td>
                                                                            <div className="ass-ty d-flex align-items-center">
                                                                                <div className="ass-ty-img pr-3">
                                                                                    <p className="mb-0">Available Limit</p>
                                                                                </div>
                                                                                <div className="ass-ty-content">
                                                                                    <p className="mb-0">1.65908675 BTC 50,000- 300,000 CNY</p>
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                        <td>
                                                                            <div className="price-icon">
                                                                                <a href="#"><img src={bank_icon} width="20"/></a>
                                                                                <a href="#"><img src={money_icon} width="20"/></a>
                                                                                <a href="#"><img src={chat_icon} width="20"/></a>
                                                                            </div>
                                                                        </td>
                                                                        <td>270,042.63 CNY</td>
                                                                        <td><a href="#" className="btn btn-primary">Buy BTC</a></td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>
                                                                            <p className="text-primary mb-0">Xuhai8888</p>
                                                                            <p className="text-gray mb-0">106 order  |  98.1% Completion</p>
                                                                        </td>
                                                                        <td>
                                                                            <div className="ass-ty d-flex align-items-center">
                                                                                <div className="ass-ty-img pr-3">
                                                                                    <p className="mb-0">Available Limit</p>
                                                                                </div>
                                                                                <div className="ass-ty-content">
                                                                                    <p className="mb-0">1.65908675 BTC 50,000- 300,000 CNY</p>
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                        <td>
                                                                            <div className="price-icon">
                                                                                <a href="#"><img src={bank_icon} width="20"/></a>
                                                                                <a href="#"><img src={money_icon} width="20"/></a>
                                                                                <a href="#"><img src={chat_icon} width="20"/></a>
                                                                            </div>
                                                                        </td>
                                                                        <td>270,042.63 CNY</td>
                                                                        <td><a href="#" className="btn btn-primary">Buy BTC</a></td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>

                                                            <nav aria-label="Page navigation example">
                                                                <ul className="pagination d-flex justify-content-end">
                                                                    <li className="page-item"><a className="page-link" href="#">Previous</a></li>
                                                                    <li className="page-item"><a className="page-link" href="#">1</a></li>
                                                                    <li className="page-item"><a className="page-link" href="#">2</a></li>
                                                                    <li className="page-item"><a className="page-link" href="#">3</a></li>
                                                                    <li className="page-item"><a className="page-link" href="#">Next</a></li>
                                                                </ul>
                                                            </nav>

                                                        </div>
                                                    </div>
                                                </div>
                                            </Tab>
                                            <Tab eventKey="usdt-tab" title="USDT">
                                                <div className="container overflow-x-auto">
                                                    <div className="row align-items-center justify-content-center py-3">
                                                        <div className="col-md-12 py-3">
                                                            <div className="row">
                                                                <div className="col-md-6 d-flex justify-content-around">
                                                                    <div className="coin">
                                                                        <div className="coin-title">
                                                                            <p>Money</p>
                                                                        </div>
                                                                        <div className="dropdown">
                                                                            <button className="btn dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                                <img src={usdt_icon}/> USDT
                                                                            </button>

                                                                            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                                                                <a className="dropdown-item" href="#"><img src={usdt_icon}/> USDT</a>
                                                                                <a className="dropdown-item" href="#"><img src={usdt_icon}/> USDT</a>
                                                                                <a className="dropdown-item" href="#"><img src={usdt_icon}/> USDT</a>
                                                                            </div>
                                                                        </div>
                                                                    </div>

                                                                    <div className="coin">
                                                                        <div className="coin-title">
                                                                            <p>Payment Method</p>
                                                                        </div>
                                                                        <div className="dropdown">
                                                                            <button className="btn dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> All Payment
                                                                            </button>

                                                                            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                                                                <a className="dropdown-item" href="#">All Payment</a>
                                                                                <a className="dropdown-item" href="#">All Payment</a>
                                                                                <a className="dropdown-item" href="#">All Payment</a>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-6 d-flex justify-content-end align-items-end">
                                                                    <div className="ad-bn">
                                                                        <a className="btn btn-ref font-weight-bold mr-2"><img src={refresh_icon} width="20" className="mr-2"/>Refresh</a>
                                                                        <a href="#" className="btn btn-outline-primary">+  Creat an AD</a>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <table id="dtBasicExample" className="table mt-3" cellspacing="0" width="100%">
                                                                <thead>
                                                                    <tr>
                                                                        <th className="th-sm">User</th>
                                                                        <th className="th-sm">Available/Limited</th>
                                                                        <th className="th-sm">Payment</th>
                                                                        <th className="th-sm">Price</th>
                                                                        <th className="th-sm">Transaction</th>
                                                                    </tr>
                                                                </thead>
                                                                <tbody>
                                                                    <tr>
                                                                        <td>
                                                                            <p className="text-primary mb-0">Xuhai8888</p>
                                                                            <p className="text-gray mb-0">106 order  |  98.1% Completion</p>
                                                                        </td>
                                                                        <td>
                                                                            <div className="ass-ty d-flex align-items-center">
                                                                                <div className="ass-ty-img pr-3">
                                                                                    <p className="mb-0">Available Limit</p>
                                                                                </div>
                                                                                <div className="ass-ty-content">
                                                                                    <p className="mb-0">1.65908675 BTC 50,000- 300,000 CNY</p>
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                        <td>
                                                                            <div className="price-icon">
                                                                                <a href="#"><img src={bank_icon} width="20"/></a>
                                                                                <a href="#"><img src={money_icon} width="20"/></a>
                                                                                <a href="#"><img src={chat_icon} width="20"/></a>
                                                                            </div>
                                                                        </td>
                                                                        <td>270,042.63 CNY</td>
                                                                        <td><a href="#" className="btn btn-primary">Buy BTC</a></td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>
                                                                            <p className="text-primary mb-0">Xuhai8888</p>
                                                                            <p className="text-gray mb-0">106 order  |  98.1% Completion</p>
                                                                        </td>
                                                                        <td>
                                                                            <div className="ass-ty d-flex align-items-center">
                                                                                <div className="ass-ty-img pr-3">
                                                                                    <p className="mb-0">Available Limit</p>
                                                                                </div>
                                                                                <div className="ass-ty-content">
                                                                                    <p className="mb-0">1.65908675 BTC 50,000- 300,000 CNY</p>
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                        <td>
                                                                            <div className="price-icon">
                                                                                <a href="#"><img src={bank_icon} width="20"/></a>
                                                                                <a href="#"><img src={money_icon} width="20"/></a>
                                                                                <a href="#"><img src={chat_icon} width="20"/></a>
                                                                            </div>
                                                                        </td>
                                                                        <td>270,042.63 CNY</td>
                                                                        <td><a href="#" className="btn btn-outline-secondary">Limited</a></td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>
                                                                            <p className="text-primary mb-0">Xuhai8888</p>
                                                                            <p className="text-gray mb-0">106 order  |  98.1% Completion</p>
                                                                        </td>
                                                                        <td>
                                                                            <div className="ass-ty d-flex align-items-center">
                                                                                <div className="ass-ty-img pr-3">
                                                                                    <p className="mb-0">Available Limit</p>
                                                                                </div>
                                                                                <div className="ass-ty-content">
                                                                                    <p className="mb-0">1.65908675 BTC 50,000- 300,000 CNY</p>
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                        <td>
                                                                            <div className="price-icon">
                                                                                <a href="#"><img src={bank_icon} width="20"/></a>
                                                                                <a href="#"><img src={money_icon} width="20"/></a>
                                                                                <a href="#"><img src={chat_icon} width="20"/></a>
                                                                            </div>
                                                                        </td>
                                                                        <td>270,042.63 CNY</td>
                                                                        <td><a href="#" className="btn btn-primary">Buy BTC</a></td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>
                                                                            <p className="text-primary mb-0">Xuhai8888</p>
                                                                            <p className="text-gray mb-0">106 order  |  98.1% Completion</p>
                                                                        </td>
                                                                        <td>
                                                                            <div className="ass-ty d-flex align-items-center">
                                                                                <div className="ass-ty-img pr-3">
                                                                                    <p className="mb-0">Available Limit</p>
                                                                                </div>
                                                                                <div className="ass-ty-content">
                                                                                    <p className="mb-0">1.65908675 BTC 50,000- 300,000 CNY</p>
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                        <td>
                                                                            <div className="price-icon">
                                                                                <a href="#"><img src={bank_icon} width="20"/></a>
                                                                                <a href="#"><img src={money_icon} width="20"/></a>
                                                                                <a href="#"><img src={chat_icon} width="20"/></a>
                                                                            </div>
                                                                        </td>
                                                                        <td>270,042.63 CNY</td>
                                                                        <td><a href="#" className="btn btn-primary">Buy BTC</a></td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>
                                                                            <p className="text-primary mb-0">Xuhai8888</p>
                                                                            <p className="text-gray mb-0">106 order  |  98.1% Completion</p>
                                                                        </td>
                                                                        <td>
                                                                            <div className="ass-ty d-flex align-items-center">
                                                                                <div className="ass-ty-img pr-3">
                                                                                    <p className="mb-0">Available Limit</p>
                                                                                </div>
                                                                                <div className="ass-ty-content">
                                                                                    <p className="mb-0">1.65908675 BTC 50,000- 300,000 CNY</p>
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                        <td>
                                                                            <div className="price-icon">
                                                                                <a href="#"><img src={bank_icon} width="20"/></a>
                                                                                <a href="#"><img src={money_icon} width="20"/></a>
                                                                                <a href="#"><img src={chat_icon} width="20"/></a>
                                                                            </div>
                                                                        </td>
                                                                        <td>270,042.63 CNY</td>
                                                                        <td><a href="#" className="btn btn-primary">Buy BTC</a></td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>
                                                                            <p className="text-primary mb-0">Xuhai8888</p>
                                                                            <p className="text-gray mb-0">106 order  |  98.1% Completion</p>
                                                                        </td>
                                                                        <td>
                                                                            <div className="ass-ty d-flex align-items-center">
                                                                                <div className="ass-ty-img pr-3">
                                                                                    <p className="mb-0">Available Limit</p>
                                                                                </div>
                                                                                <div className="ass-ty-content">
                                                                                    <p className="mb-0">1.65908675 BTC 50,000- 300,000 CNY</p>
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                        <td>
                                                                            <div className="price-icon">
                                                                                <a href="#"><img src={bank_icon} width="20"/></a>
                                                                                <a href="#"><img src={money_icon} width="20"/></a>
                                                                                <a href="#"><img src={chat_icon} width="20"/></a>
                                                                            </div>
                                                                        </td>
                                                                        <td>270,042.63 CNY</td>
                                                                        <td><a href="#" className="btn btn-primary">Buy BTC</a></td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                            <nav aria-label="Page navigation example">
                                                                <ul className="pagination d-flex justify-content-end">
                                                                    <li className="page-item"><a className="page-link" href="#">Previous</a></li>
                                                                    <li className="page-item"><a className="page-link" href="#">1</a></li>
                                                                    <li className="page-item"><a className="page-link" href="#">2</a></li>
                                                                    <li className="page-item"><a className="page-link" href="#">3</a></li>
                                                                    <li className="page-item"><a className="page-link" href="#">Next</a></li>
                                                                </ul>
                                                            </nav>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Tab>
                                            <Tab eventKey="xrp-tab" title="XRP">
                                                <div className="container overflow-x-auto">
                                                    <div className="row align-items-center justify-content-center py-3">
                                                        <div className="col-md-12 py-3">
                                                            <div className="row">
                                                                <div className="col-md-6 d-flex justify-content-around">
                                                                    <div className="coin">
                                                                        <div className="coin-title">
                                                                            <p>Money</p>
                                                                        </div>
                                                                        <div className="dropdown">
                                                                            <button className="btn dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                                <img src={usdt_icon}/> USDT
                                                                            </button>

                                                                            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                                                                <a className="dropdown-item" href="#"><img src={usdt_icon}/> USDT</a>
                                                                                <a className="dropdown-item" href="#"><img src={usdt_icon}/> USDT</a>
                                                                                <a className="dropdown-item" href="#"><img src={usdt_icon}/> USDT</a>
                                                                            </div>
                                                                        </div>
                                                                    </div>

                                                                    <div className="coin">
                                                                        <div className="coin-title">
                                                                            <p>Payment Method</p>
                                                                        </div>
                                                                        <div className="dropdown">
                                                                            <button className="btn dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> All Payment
                                                                            </button>

                                                                            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                                                                <a className="dropdown-item" href="#">All Payment</a>
                                                                                <a className="dropdown-item" href="#">All Payment</a>
                                                                                <a className="dropdown-item" href="#">All Payment</a>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-6 d-flex justify-content-end align-items-end">
                                                                    <div className="ad-bn">
                                                                        <a className="btn btn-ref font-weight-bold mr-2"><img src={refresh_icon} width="20" className="mr-2"/>Refresh</a>
                                                                        <a href="#" className="btn btn-outline-primary">+  Creat an AD</a>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <table id="dtBasicExample" className="table mt-3" cellspacing="0" width="100%">
                                                                <thead>
                                                                    <tr>
                                                                        <th className="th-sm">User</th>
                                                                        <th className="th-sm">Available/Limited</th>
                                                                        <th className="th-sm">Payment</th>
                                                                        <th className="th-sm">Price</th>
                                                                        <th className="th-sm">Transaction</th>
                                                                    </tr>
                                                                </thead>
                                                                <tbody>
                                                                    <tr>
                                                                        <td>
                                                                            <p className="text-primary mb-0">Xuhai8888</p>
                                                                            <p className="text-gray mb-0">106 order  |  98.1% Completion</p>
                                                                        </td>
                                                                        <td>
                                                                            <div className="ass-ty d-flex align-items-center">
                                                                                <div className="ass-ty-img pr-3">
                                                                                    <p className="mb-0">Available Limit</p>
                                                                                </div>
                                                                                <div className="ass-ty-content">
                                                                                    <p className="mb-0">1.65908675 BTC 50,000- 300,000 CNY</p>
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                        <td>
                                                                            <div className="price-icon">
                                                                                <a href="#"><img src={bank_icon} width="20"/></a>
                                                                                <a href="#"><img src={money_icon} width="20"/></a>
                                                                                <a href="#"><img src={chat_icon} width="20"/></a>
                                                                            </div>
                                                                        </td>
                                                                        <td>270,042.63 CNY</td>
                                                                        <td><a href="#" className="btn btn-primary">Buy BTC</a></td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>
                                                                            <p className="text-primary mb-0">Xuhai8888</p>
                                                                            <p className="text-gray mb-0">106 order  |  98.1% Completion</p>
                                                                        </td>
                                                                        <td>
                                                                            <div className="ass-ty d-flex align-items-center">
                                                                                <div className="ass-ty-img pr-3">
                                                                                    <p className="mb-0">Available Limit</p>
                                                                                </div>
                                                                                <div className="ass-ty-content">
                                                                                    <p className="mb-0">1.65908675 BTC 50,000- 300,000 CNY</p>
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                        <td>
                                                                            <div className="price-icon">
                                                                                <a href="#"><img src={bank_icon} width="20"/></a>
                                                                                <a href="#"><img src={money_icon} width="20"/></a>
                                                                                <a href="#"><img src={chat_icon} width="20"/></a>
                                                                            </div>
                                                                        </td>
                                                                        <td>270,042.63 CNY</td>
                                                                        <td><a href="#" className="btn btn-primary">Buy BTC</a></td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>
                                                                            <p className="text-primary mb-0">Xuhai8888</p>
                                                                            <p className="text-gray mb-0">106 order  |  98.1% Completion</p>
                                                                        </td>
                                                                        <td>
                                                                            <div className="ass-ty d-flex align-items-center">
                                                                                <div className="ass-ty-img pr-3">
                                                                                    <p className="mb-0">Available Limit</p>
                                                                                </div>
                                                                                <div className="ass-ty-content">
                                                                                    <p className="mb-0">1.65908675 BTC 50,000- 300,000 CNY</p>
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                        <td>
                                                                            <div className="price-icon">
                                                                                <a href="#"><img src={bank_icon} width="20"/></a>
                                                                                <a href="#"><img src={money_icon} width="20"/></a>
                                                                                <a href="#"><img src={chat_icon} width="20"/></a>
                                                                            </div>
                                                                        </td>
                                                                        <td>270,042.63 CNY</td>
                                                                        <td><a href="#" className="btn btn-outline-secondary">Limited</a></td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>
                                                                            <p className="text-primary mb-0">Xuhai8888</p>
                                                                            <p className="text-gray mb-0">106 order  |  98.1% Completion</p>
                                                                        </td>
                                                                        <td>
                                                                            <div className="ass-ty d-flex align-items-center">
                                                                                <div className="ass-ty-img pr-3">
                                                                                    <p className="mb-0">Available Limit</p>
                                                                                </div>
                                                                                <div className="ass-ty-content">
                                                                                    <p className="mb-0">1.65908675 BTC 50,000- 300,000 CNY</p>
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                        <td>
                                                                            <div className="price-icon">
                                                                                <a href="#"><img src={bank_icon} width="20"/></a>
                                                                                <a href="#"><img src={money_icon} width="20"/></a>
                                                                                <a href="#"><img src={chat_icon} width="20"/></a>
                                                                            </div>
                                                                        </td>
                                                                        <td>270,042.63 CNY</td>
                                                                        <td><a href="#" className="btn btn-primary">Buy BTC</a></td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>
                                                                            <p className="text-primary mb-0">Xuhai8888</p>
                                                                            <p className="text-gray mb-0">106 order  |  98.1% Completion</p>
                                                                        </td>
                                                                        <td>
                                                                            <div className="ass-ty d-flex align-items-center">
                                                                                <div className="ass-ty-img pr-3">
                                                                                    <p className="mb-0">Available Limit</p>
                                                                                </div>
                                                                                <div className="ass-ty-content">
                                                                                    <p className="mb-0">1.65908675 BTC 50,000- 300,000 CNY</p>
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                        <td>
                                                                            <div className="price-icon">
                                                                                <a href="#"><img src={bank_icon} width="20"/></a>
                                                                                <a href="#"><img src={money_icon} width="20"/></a>
                                                                                <a href="#"><img src={chat_icon} width="20"/></a>
                                                                            </div>
                                                                        </td>
                                                                        <td>270,042.63 CNY</td>
                                                                        <td><a href="#" className="btn btn-primary">Buy BTC</a></td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>
                                                                            <p className="text-primary mb-0">Xuhai8888</p>
                                                                            <p className="text-gray mb-0">106 order  |  98.1% Completion</p>
                                                                        </td>
                                                                        <td>
                                                                            <div className="ass-ty d-flex align-items-center">
                                                                                <div className="ass-ty-img pr-3">
                                                                                    <p className="mb-0">Available Limit</p>
                                                                                </div>
                                                                                <div className="ass-ty-content">
                                                                                    <p className="mb-0">1.65908675 BTC 50,000- 300,000 CNY</p>
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                        <td>
                                                                            <div className="price-icon">
                                                                                <a href="#"><img src={bank_icon} width="20"/></a>
                                                                                <a href="#"><img src={money_icon} width="20"/></a>
                                                                                <a href="#"><img src={chat_icon} width="20"/></a>
                                                                            </div>
                                                                        </td>
                                                                        <td>270,042.63 CNY</td>
                                                                        <td><a href="#" className="btn btn-primary">Buy BTC</a></td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>

                                                            <nav aria-label="Page navigation example">
                                                                <ul className="pagination d-flex justify-content-end">
                                                                    <li className="page-item"><a className="page-link" href="#">Previous</a></li>
                                                                    <li className="page-item"><a className="page-link" href="#">1</a></li>
                                                                    <li className="page-item"><a className="page-link" href="#">2</a></li>
                                                                    <li className="page-item"><a className="page-link" href="#">3</a></li>
                                                                    <li className="page-item"><a className="page-link" href="#">Next</a></li>
                                                                </ul>
                                                            </nav>

                                                        </div>
                                                    </div>
                                                </div>
                                            </Tab>
                                            <Tab eventKey="eos-tab" title="EOS">
                                                <div className="container overflow-x-auto">
                                                    <div className="row align-items-center justify-content-center py-3">
                                                        <div className="col-md-12 py-3">
                                                            <div className="row">
                                                                <div className="col-md-6 d-flex justify-content-around">
                                                                    <div className="coin">
                                                                        <div className="coin-title">
                                                                            <p>Money</p>
                                                                        </div>
                                                                        <div className="dropdown">
                                                                            <button className="btn dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                                <img src={usdt_icon}/> USDT
                                                                            </button>

                                                                            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                                                                <a className="dropdown-item" href="#"><img src={usdt_icon}/> USDT</a>
                                                                                <a className="dropdown-item" href="#"><img src={usdt_icon}/> USDT</a>
                                                                                <a className="dropdown-item" href="#"><img src={usdt_icon}/> USDT</a>
                                                                            </div>
                                                                        </div>
                                                                    </div>

                                                                    <div className="coin">
                                                                        <div className="coin-title">
                                                                            <p>Payment Method</p>
                                                                        </div>
                                                                        <div className="dropdown">
                                                                            <button className="btn dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> All Payment
                                                                            </button>

                                                                            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                                                                <a className="dropdown-item" href="#">All Payment</a>
                                                                                <a className="dropdown-item" href="#">All Payment</a>
                                                                                <a className="dropdown-item" href="#">All Payment</a>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-6 d-flex justify-content-end align-items-end">
                                                                    <div className="ad-bn">
                                                                        <a className="btn btn-ref font-weight-bold mr-2"><img src={refresh_icon} width="20" className="mr-2"/>Refresh</a>
                                                                        <a href="#" className="btn btn-outline-primary">+  Creat an AD</a>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <table id="dtBasicExample" className="table mt-3" cellspacing="0" width="100%">
                                                                <thead>
                                                                    <tr>
                                                                        <th className="th-sm">User</th>
                                                                        <th className="th-sm">Available/Limited</th>
                                                                        <th className="th-sm">Payment</th>
                                                                        <th className="th-sm">Price</th>
                                                                        <th className="th-sm">Transaction</th>
                                                                    </tr>
                                                                </thead>
                                                                <tbody>
                                                                    <tr>
                                                                        <td>
                                                                            <p className="text-primary mb-0">Xuhai8888</p>
                                                                            <p className="text-gray mb-0">106 order  |  98.1% Completion</p>
                                                                        </td>
                                                                        <td>
                                                                            <div className="ass-ty d-flex align-items-center">
                                                                                <div className="ass-ty-img pr-3">
                                                                                    <p className="mb-0">Available Limit</p>
                                                                                </div>
                                                                                <div className="ass-ty-content">
                                                                                    <p className="mb-0">1.65908675 BTC 50,000- 300,000 CNY</p>
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                        <td>
                                                                            <div className="price-icon">
                                                                                <a href="#"><img src={bank_icon} width="20"/></a>
                                                                                <a href="#"><img src={money_icon} width="20"/></a>
                                                                                <a href="#"><img src={chat_icon} width="20"/></a>
                                                                            </div>
                                                                        </td>
                                                                        <td>270,042.63 CNY</td>
                                                                        <td><a href="#" className="btn btn-primary">Buy BTC</a></td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>
                                                                            <p className="text-primary mb-0">Xuhai8888</p>
                                                                            <p className="text-gray mb-0">106 order  |  98.1% Completion</p>
                                                                        </td>
                                                                        <td>
                                                                            <div className="ass-ty d-flex align-items-center">
                                                                                <div className="ass-ty-img pr-3">
                                                                                    <p className="mb-0">Available Limit</p>
                                                                                </div>
                                                                                <div className="ass-ty-content">
                                                                                    <p className="mb-0">1.65908675 BTC 50,000- 300,000 CNY</p>
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                        <td>
                                                                            <div className="price-icon">
                                                                                <a href="#"><img src={bank_icon} width="20"/></a>
                                                                                <a href="#"><img src={money_icon} width="20"/></a>
                                                                                <a href="#"><img src={chat_icon} width="20"/></a>
                                                                            </div>
                                                                        </td>
                                                                        <td>270,042.63 CNY</td>
                                                                        <td><a href="#" className="btn btn-outline-secondary">Limited</a></td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>
                                                                            <p className="text-primary mb-0">Xuhai8888</p>
                                                                            <p className="text-gray mb-0">106 order  |  98.1% Completion</p>
                                                                        </td>
                                                                        <td>
                                                                            <div className="ass-ty d-flex align-items-center">
                                                                                <div className="ass-ty-img pr-3">
                                                                                    <p className="mb-0">Available Limit</p>
                                                                                </div>
                                                                                <div className="ass-ty-content">
                                                                                    <p className="mb-0">1.65908675 BTC 50,000- 300,000 CNY</p>
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                        <td>
                                                                            <div className="price-icon">
                                                                                <a href="#"><img src={bank_icon} width="20"/></a>
                                                                                <a href="#"><img src={money_icon} width="20"/></a>
                                                                                <a href="#"><img src={chat_icon} width="20"/></a>
                                                                            </div>
                                                                        </td>
                                                                        <td>270,042.63 CNY</td>
                                                                        <td><a href="#" className="btn btn-primary">Buy BTC</a></td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>
                                                                            <p className="text-primary mb-0">Xuhai8888</p>
                                                                            <p className="text-gray mb-0">106 order  |  98.1% Completion</p>
                                                                        </td>
                                                                        <td>
                                                                            <div className="ass-ty d-flex align-items-center">
                                                                                <div className="ass-ty-img pr-3">
                                                                                    <p className="mb-0">Available Limit</p>
                                                                                </div>
                                                                                <div className="ass-ty-content">
                                                                                    <p className="mb-0">1.65908675 BTC 50,000- 300,000 CNY</p>
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                        <td>
                                                                            <div className="price-icon">
                                                                                <a href="#"><img src={bank_icon} width="20"/></a>
                                                                                <a href="#"><img src={money_icon} width="20"/></a>
                                                                                <a href="#"><img src={chat_icon} width="20"/></a>
                                                                            </div>
                                                                        </td>
                                                                        <td>270,042.63 CNY</td>
                                                                        <td><a href="#" className="btn btn-primary">Buy BTC</a></td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>
                                                                            <p className="text-primary mb-0">Xuhai8888</p>
                                                                            <p className="text-gray mb-0">106 order  |  98.1% Completion</p>
                                                                        </td>
                                                                        <td>
                                                                            <div className="ass-ty d-flex align-items-center">
                                                                                <div className="ass-ty-img pr-3">
                                                                                    <p className="mb-0">Available Limit</p>
                                                                                </div>
                                                                                <div className="ass-ty-content">
                                                                                    <p className="mb-0">1.65908675 BTC 50,000- 300,000 CNY</p>
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                        <td>
                                                                            <div className="price-icon">
                                                                                <a href="#"><img src={bank_icon} width="20"/></a>
                                                                                <a href="#"><img src={money_icon} width="20"/></a>
                                                                                <a href="#"><img src={chat_icon} width="20"/></a>
                                                                            </div>
                                                                        </td>
                                                                        <td>270,042.63 CNY</td>
                                                                        <td><a href="#" className="btn btn-primary">Buy BTC</a></td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>
                                                                            <p className="text-primary mb-0">Xuhai8888</p>
                                                                            <p className="text-gray mb-0">106 order  |  98.1% Completion</p>
                                                                        </td>
                                                                        <td>
                                                                            <div className="ass-ty d-flex align-items-center">
                                                                                <div className="ass-ty-img pr-3">
                                                                                    <p className="mb-0">Available Limit</p>
                                                                                </div>
                                                                                <div className="ass-ty-content">
                                                                                    <p className="mb-0">1.65908675 BTC 50,000- 300,000 CNY</p>
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                        <td>
                                                                            <div className="price-icon">
                                                                                <a href="#"><img src={bank_icon} width="20"/></a>
                                                                                <a href="#"><img src={money_icon} width="20"/></a>
                                                                                <a href="#"><img src={chat_icon} width="20"/></a>
                                                                            </div>
                                                                        </td>
                                                                        <td>270,042.63 CNY</td>
                                                                        <td><a href="#" className="btn btn-primary">Buy BTC</a></td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                            <nav aria-label="Page navigation example">
                                                                <ul className="pagination d-flex justify-content-end">
                                                                    <li className="page-item"><a className="page-link" href="#">Previous</a></li>
                                                                    <li className="page-item"><a className="page-link" href="#">1</a></li>
                                                                    <li className="page-item"><a className="page-link" href="#">2</a></li>
                                                                    <li className="page-item"><a className="page-link" href="#">3</a></li>
                                                                    <li className="page-item"><a className="page-link" href="#">Next</a></li>
                                                                </ul>
                                                            </nav>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Tab>
                                        </Tabs>
                                    </Tab>
                                    <Tab eventKey="sell-tab" title="SELL">
                                    <Tabs defaultActiveKey="sell-btc-tab" id="crypto-tabs">
                                            <Tab eventKey="sell-btc-tab" title="BTC" >
                                                <div className="container overflow-x-auto">
                                                    <div className="row align-items-center justify-content-center py-3">
                                                        <div className="col-md-12 py-3">
                                                            <div className="row">
                                                                <div className="col-md-6 d-flex justify-content-around">
                                                                    <div className="coin">
                                                                        <div className="coin-title">
                                                                            <p>Money</p>
                                                                        </div>
                                                                        <div className="dropdown">
                                                                            <button className="btn dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                                <img src={usdt_icon}/> USDT
                                                                            </button>

                                                                            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                                                                <a className="dropdown-item" href="#"><img src={usdt_icon}/> USDT</a>
                                                                                <a className="dropdown-item" href="#"><img src={usdt_icon}/> USDT</a>
                                                                                <a className="dropdown-item" href="#"><img src={usdt_icon}/> USDT</a>
                                                                            </div>
                                                                        </div>
                                                                    </div>

                                                                    <div className="coin">
                                                                        <div className="coin-title">
                                                                            <p>Payment Method</p>
                                                                        </div>
                                                                        <div className="dropdown">
                                                                            <button className="btn dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> All Payment
                                                                            </button>

                                                                            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                                                                <a className="dropdown-item" href="#">All Payment</a>
                                                                                <a className="dropdown-item" href="#">All Payment</a>
                                                                                <a className="dropdown-item" href="#">All Payment</a>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-6 d-flex justify-content-end align-items-end">
                                                                    <div className="ad-bn">
                                                                        <a className="btn btn-ref font-weight-bold mr-2"><img src={refresh_icon} width="20" className="mr-2"/>Refresh</a>
                                                                        <a href="#" className="btn btn-outline-primary">+  Creat an AD</a>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <table id="dtBasicExample" className="table mt-3" cellspacing="0" width="100%">
                                                                <thead>
                                                                    <tr>
                                                                        <th className="th-sm">User</th>
                                                                        <th className="th-sm">Available/Limited</th>
                                                                        <th className="th-sm">Payment</th>
                                                                        <th className="th-sm">Price</th>
                                                                        <th className="th-sm">Transaction</th>
                                                                    </tr>
                                                                </thead>
                                                                <tbody>
                                                                    <tr>
                                                                        <td>
                                                                            <p className="text-primary mb-0">Xuhai8888</p>
                                                                            <p className="text-gray mb-0">106 order  |  98.1% Completion</p>
                                                                        </td>
                                                                        <td>
                                                                            <div className="ass-ty d-flex align-items-center">
                                                                                <div className="ass-ty-img pr-3">
                                                                                    <p className="mb-0">Available Limit</p>
                                                                                </div>
                                                                                <div className="ass-ty-content">
                                                                                    <p className="mb-0">1.65908675 BTC 50,000- 300,000 CNY</p>
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                        <td>
                                                                            <div className="price-icon">
                                                                                <a href="#"><img src={bank_icon} width="20"/></a>
                                                                                <a href="#"><img src={money_icon} width="20"/></a>
                                                                                <a href="#"><img src={chat_icon} width="20"/></a>
                                                                            </div>
                                                                        </td>
                                                                        <td>270,042.63 CNY</td>
                                                                        <td><a href="#" className="btn btn-primary">Buy BTC</a></td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>
                                                                            <p className="text-primary mb-0">Xuhai8888</p>
                                                                            <p className="text-gray mb-0">106 order  |  98.1% Completion</p>
                                                                        </td>
                                                                        <td>
                                                                            <div className="ass-ty d-flex align-items-center">
                                                                                <div className="ass-ty-img pr-3">
                                                                                    <p className="mb-0">Available Limit</p>
                                                                                </div>
                                                                                <div className="ass-ty-content">
                                                                                    <p className="mb-0">1.65908675 BTC 50,000- 300,000 CNY</p>
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                        <td>
                                                                            <div className="price-icon">
                                                                                <a href="#"><img src={bank_icon} width="20"/></a>
                                                                                <a href="#"><img src={money_icon} width="20"/></a>
                                                                                <a href="#"><img src={chat_icon} width="20"/></a>
                                                                            </div>
                                                                        </td>
                                                                        <td>270,042.63 CNY</td>
                                                                        <td><a href="#" className="btn btn-outline-secondary">Limited</a></td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>
                                                                            <p className="text-primary mb-0">Xuhai8888</p>
                                                                            <p className="text-gray mb-0">106 order  |  98.1% Completion</p>
                                                                        </td>
                                                                        <td>
                                                                            <div className="ass-ty d-flex align-items-center">
                                                                                <div className="ass-ty-img pr-3">
                                                                                    <p className="mb-0">Available Limit</p>
                                                                                </div>
                                                                                <div className="ass-ty-content">
                                                                                    <p className="mb-0">1.65908675 BTC 50,000- 300,000 CNY</p>
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                        <td>
                                                                            <div className="price-icon">
                                                                                <a href="#"><img src={bank_icon} width="20"/></a>
                                                                                <a href="#"><img src={money_icon} width="20"/></a>
                                                                                <a href="#"><img src={chat_icon} width="20"/></a>
                                                                            </div>
                                                                        </td>
                                                                        <td>270,042.63 CNY</td>
                                                                        <td><a href="#" className="btn btn-primary">Buy BTC</a></td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>
                                                                            <p className="text-primary mb-0">Xuhai8888</p>
                                                                            <p className="text-gray mb-0">106 order  |  98.1% Completion</p>
                                                                        </td>
                                                                        <td>
                                                                            <div className="ass-ty d-flex align-items-center">
                                                                                <div className="ass-ty-img pr-3">
                                                                                    <p className="mb-0">Available Limit</p>
                                                                                </div>
                                                                                <div className="ass-ty-content">
                                                                                    <p className="mb-0">1.65908675 BTC 50,000- 300,000 CNY</p>
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                        <td>
                                                                            <div className="price-icon">
                                                                                <a href="#"><img src={bank_icon} width="20"/></a>
                                                                                <a href="#"><img src={money_icon} width="20"/></a>
                                                                                <a href="#"><img src={chat_icon} width="20"/></a>
                                                                            </div>
                                                                        </td>
                                                                        <td>270,042.63 CNY</td>
                                                                        <td><a href="#" className="btn btn-primary">Buy BTC</a></td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>
                                                                            <p className="text-primary mb-0">Xuhai8888</p>
                                                                            <p className="text-gray mb-0">106 order  |  98.1% Completion</p>
                                                                        </td>
                                                                        <td>
                                                                            <div className="ass-ty d-flex align-items-center">
                                                                                <div className="ass-ty-img pr-3">
                                                                                    <p className="mb-0">Available Limit</p>
                                                                                </div>
                                                                                <div className="ass-ty-content">
                                                                                    <p className="mb-0">1.65908675 BTC 50,000- 300,000 CNY</p>
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                        <td>
                                                                            <div className="price-icon">
                                                                                <a href="#"><img src={bank_icon} width="20"/></a>
                                                                                <a href="#"><img src={money_icon} width="20"/></a>
                                                                                <a href="#"><img src={chat_icon} width="20"/></a>
                                                                            </div>
                                                                        </td>
                                                                        <td>270,042.63 CNY</td>
                                                                        <td><a href="#" className="btn btn-primary">Buy BTC</a></td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>
                                                                            <p className="text-primary mb-0">Xuhai8888</p>
                                                                            <p className="text-gray mb-0">106 order  |  98.1% Completion</p>
                                                                        </td>
                                                                        <td>
                                                                            <div className="ass-ty d-flex align-items-center">
                                                                                <div className="ass-ty-img pr-3">
                                                                                    <p className="mb-0">Available Limit</p>
                                                                                </div>
                                                                                <div className="ass-ty-content">
                                                                                    <p className="mb-0">1.65908675 BTC 50,000- 300,000 CNY</p>
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                        <td>
                                                                            <div className="price-icon">
                                                                                <a href="#"><img src={bank_icon} width="20"/></a>
                                                                                <a href="#"><img src={money_icon} width="20"/></a>
                                                                                <a href="#"><img src={chat_icon} width="20"/></a>
                                                                            </div>
                                                                        </td>
                                                                        <td>270,042.63 CNY</td>
                                                                        <td><a href="#" className="btn btn-primary">Buy BTC</a></td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                            <nav aria-label="Page navigation example">
                                                                <ul className="pagination d-flex justify-content-end">
                                                                    <li className="page-item"><a className="page-link" href="#">Previous</a></li>
                                                                    <li className="page-item"><a className="page-link" href="#">1</a></li>
                                                                    <li className="page-item"><a className="page-link" href="#">2</a></li>
                                                                    <li className="page-item"><a className="page-link" href="#">3</a></li>
                                                                    <li className="page-item"><a className="page-link" href="#">Next</a></li>
                                                                </ul>
                                                            </nav>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Tab>
                                            <Tab eventKey="sell-eth-tab" title="ETH">
                                                <div className="container overflow-x-auto">
                                                    <div className="row align-items-center justify-content-center py-3">
                                                        <div className="col-md-12 py-3">
                                                            <div className="row">
                                                                <div className="col-md-6 d-flex justify-content-around">
                                                                    <div className="coin">
                                                                        <div className="coin-title">
                                                                            <p>Money</p>
                                                                        </div>
                                                                        <div className="dropdown">
                                                                            <button className="btn dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                                <img src={usdt_icon}/> USDT
                                                                            </button>

                                                                            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                                                                <a className="dropdown-item" href="#"><img src={usdt_icon}/> USDT</a>
                                                                                <a className="dropdown-item" href="#"><img src={usdt_icon}/> USDT</a>
                                                                                <a className="dropdown-item" href="#"><img src={usdt_icon}/> USDT</a>
                                                                            </div>
                                                                        </div>
                                                                    </div>

                                                                    <div className="coin">
                                                                        <div className="coin-title">
                                                                            <p>Payment Method</p>
                                                                        </div>
                                                                        <div className="dropdown">
                                                                            <button className="btn dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> All Payment
                                                                            </button>

                                                                            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                                                                <a className="dropdown-item" href="#">All Payment</a>
                                                                                <a className="dropdown-item" href="#">All Payment</a>
                                                                                <a className="dropdown-item" href="#">All Payment</a>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-6 d-flex justify-content-end align-items-end">
                                                                    <div className="ad-bn">
                                                                        <a className="btn btn-ref font-weight-bold mr-2"><img src={refresh_icon} width="20" className="mr-2"/>Refresh</a>
                                                                        <a href="#" className="btn btn-outline-primary">+  Creat an AD</a>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <table id="dtBasicExample" className="table mt-3" cellspacing="0" width="100%">
                                                                <thead>
                                                                    <tr>
                                                                        <th className="th-sm">User</th>
                                                                        <th className="th-sm">Available/Limited</th>
                                                                        <th className="th-sm">Payment</th>
                                                                        <th className="th-sm">Price</th>
                                                                        <th className="th-sm">Transaction</th>
                                                                    </tr>
                                                                </thead>
                                                                <tbody>
                                                                    <tr>
                                                                        <td>
                                                                            <p className="text-primary mb-0">Xuhai8888</p>
                                                                            <p className="text-gray mb-0">106 order  |  98.1% Completion</p>
                                                                        </td>
                                                                        <td>
                                                                            <div className="ass-ty d-flex align-items-center">
                                                                                <div className="ass-ty-img pr-3">
                                                                                    <p className="mb-0">Available Limit</p>
                                                                                </div>
                                                                                <div className="ass-ty-content">
                                                                                    <p className="mb-0">1.65908675 BTC 50,000- 300,000 CNY</p>
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                        <td>
                                                                            <div className="price-icon">
                                                                                <a href="#"><img src={bank_icon} width="20"/></a>
                                                                                <a href="#"><img src={money_icon} width="20"/></a>
                                                                                <a href="#"><img src={chat_icon} width="20"/></a>
                                                                            </div>
                                                                        </td>
                                                                        <td>270,042.63 CNY</td>
                                                                        <td><a href="#" className="btn btn-primary">Buy BTC</a></td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>
                                                                            <p className="text-primary mb-0">Xuhai8888</p>
                                                                            <p className="text-gray mb-0">106 order  |  98.1% Completion</p>
                                                                        </td>
                                                                        <td>
                                                                            <div className="ass-ty d-flex align-items-center">
                                                                                <div className="ass-ty-img pr-3">
                                                                                    <p className="mb-0">Available Limit</p>
                                                                                </div>
                                                                                <div className="ass-ty-content">
                                                                                    <p className="mb-0">1.65908675 BTC 50,000- 300,000 CNY</p>
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                        <td>
                                                                            <div className="price-icon">
                                                                                <a href="#"><img src={bank_icon} width="20"/></a>
                                                                                <a href="#"><img src={money_icon} width="20"/></a>
                                                                                <a href="#"><img src={chat_icon} width="20"/></a>
                                                                            </div>
                                                                        </td>
                                                                        <td>270,042.63 CNY</td>
                                                                        <td><a href="#" className="btn btn-primary">Buy BTC</a></td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>
                                                                            <p className="text-primary mb-0">Xuhai8888</p>
                                                                            <p className="text-gray mb-0">106 order  |  98.1% Completion</p>
                                                                        </td>
                                                                        <td>
                                                                            <div className="ass-ty d-flex align-items-center">
                                                                                <div className="ass-ty-img pr-3">
                                                                                    <p className="mb-0">Available Limit</p>
                                                                                </div>
                                                                                <div className="ass-ty-content">
                                                                                    <p className="mb-0">1.65908675 BTC 50,000- 300,000 CNY</p>
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                        <td>
                                                                            <div className="price-icon">
                                                                                <a href="#"><img src={bank_icon} width="20"/></a>
                                                                                <a href="#"><img src={money_icon} width="20"/></a>
                                                                                <a href="#"><img src={chat_icon} width="20"/></a>
                                                                            </div>
                                                                        </td>
                                                                        <td>270,042.63 CNY</td>
                                                                        <td><a href="#" className="btn btn-outline-secondary">Limited</a></td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>
                                                                            <p className="text-primary mb-0">Xuhai8888</p>
                                                                            <p className="text-gray mb-0">106 order  |  98.1% Completion</p>
                                                                        </td>
                                                                        <td>
                                                                            <div className="ass-ty d-flex align-items-center">
                                                                                <div className="ass-ty-img pr-3">
                                                                                    <p className="mb-0">Available Limit</p>
                                                                                </div>
                                                                                <div className="ass-ty-content">
                                                                                    <p className="mb-0">1.65908675 BTC 50,000- 300,000 CNY</p>
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                        <td>
                                                                            <div className="price-icon">
                                                                                <a href="#"><img src={bank_icon} width="20"/></a>
                                                                                <a href="#"><img src={money_icon} width="20"/></a>
                                                                                <a href="#"><img src={chat_icon} width="20"/></a>
                                                                            </div>
                                                                        </td>
                                                                        <td>270,042.63 CNY</td>
                                                                        <td><a href="#" className="btn btn-primary">Buy BTC</a></td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>
                                                                            <p className="text-primary mb-0">Xuhai8888</p>
                                                                            <p className="text-gray mb-0">106 order  |  98.1% Completion</p>
                                                                        </td>
                                                                        <td>
                                                                            <div className="ass-ty d-flex align-items-center">
                                                                                <div className="ass-ty-img pr-3">
                                                                                    <p className="mb-0">Available Limit</p>
                                                                                </div>
                                                                                <div className="ass-ty-content">
                                                                                    <p className="mb-0">1.65908675 BTC 50,000- 300,000 CNY</p>
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                        <td>
                                                                            <div className="price-icon">
                                                                                <a href="#"><img src={bank_icon} width="20"/></a>
                                                                                <a href="#"><img src={money_icon} width="20"/></a>
                                                                                <a href="#"><img src={chat_icon} width="20"/></a>
                                                                            </div>
                                                                        </td>
                                                                        <td>270,042.63 CNY</td>
                                                                        <td><a href="#" className="btn btn-primary">Buy BTC</a></td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>
                                                                            <p className="text-primary mb-0">Xuhai8888</p>
                                                                            <p className="text-gray mb-0">106 order  |  98.1% Completion</p>
                                                                        </td>
                                                                        <td>
                                                                            <div className="ass-ty d-flex align-items-center">
                                                                                <div className="ass-ty-img pr-3">
                                                                                    <p className="mb-0">Available Limit</p>
                                                                                </div>
                                                                                <div className="ass-ty-content">
                                                                                    <p className="mb-0">1.65908675 BTC 50,000- 300,000 CNY</p>
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                        <td>
                                                                            <div className="price-icon">
                                                                                <a href="#"><img src={bank_icon} width="20"/></a>
                                                                                <a href="#"><img src={money_icon} width="20"/></a>
                                                                                <a href="#"><img src={chat_icon} width="20"/></a>
                                                                            </div>
                                                                        </td>
                                                                        <td>270,042.63 CNY</td>
                                                                        <td><a href="#" className="btn btn-primary">Buy BTC</a></td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>

                                                            <nav aria-label="Page navigation example">
                                                                <ul className="pagination d-flex justify-content-end">
                                                                    <li className="page-item"><a className="page-link" href="#">Previous</a></li>
                                                                    <li className="page-item"><a className="page-link" href="#">1</a></li>
                                                                    <li className="page-item"><a className="page-link" href="#">2</a></li>
                                                                    <li className="page-item"><a className="page-link" href="#">3</a></li>
                                                                    <li className="page-item"><a className="page-link" href="#">Next</a></li>
                                                                </ul>
                                                            </nav>

                                                        </div>
                                                    </div>
                                                </div>
                                            </Tab>
                                            <Tab eventKey="sell-usdt-tab" title="USDT">
                                                <div className="container overflow-x-auto">
                                                    <div className="row align-items-center justify-content-center py-3">
                                                        <div className="col-md-12 py-3">
                                                            <div className="row">
                                                                <div className="col-md-6 d-flex justify-content-around">
                                                                    <div className="coin">
                                                                        <div className="coin-title">
                                                                            <p>Money</p>
                                                                        </div>
                                                                        <div className="dropdown">
                                                                            <button className="btn dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                                <img src={usdt_icon}/> USDT
                                                                            </button>

                                                                            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                                                                <a className="dropdown-item" href="#"><img src={usdt_icon}/> USDT</a>
                                                                                <a className="dropdown-item" href="#"><img src={usdt_icon}/> USDT</a>
                                                                                <a className="dropdown-item" href="#"><img src={usdt_icon}/> USDT</a>
                                                                            </div>
                                                                        </div>
                                                                    </div>

                                                                    <div className="coin">
                                                                        <div className="coin-title">
                                                                            <p>Payment Method</p>
                                                                        </div>
                                                                        <div className="dropdown">
                                                                            <button className="btn dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> All Payment
                                                                            </button>

                                                                            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                                                                <a className="dropdown-item" href="#">All Payment</a>
                                                                                <a className="dropdown-item" href="#">All Payment</a>
                                                                                <a className="dropdown-item" href="#">All Payment</a>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-6 d-flex justify-content-end align-items-end">
                                                                    <div className="ad-bn">
                                                                        <a className="btn btn-ref font-weight-bold mr-2"><img src={refresh_icon} width="20" className="mr-2"/>Refresh</a>
                                                                        <a href="#" className="btn btn-outline-primary">+  Creat an AD</a>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <table id="dtBasicExample" className="table mt-3" cellspacing="0" width="100%">
                                                                <thead>
                                                                    <tr>
                                                                        <th className="th-sm">User</th>
                                                                        <th className="th-sm">Available/Limited</th>
                                                                        <th className="th-sm">Payment</th>
                                                                        <th className="th-sm">Price</th>
                                                                        <th className="th-sm">Transaction</th>
                                                                    </tr>
                                                                </thead>
                                                                <tbody>
                                                                    <tr>
                                                                        <td>
                                                                            <p className="text-primary mb-0">Xuhai8888</p>
                                                                            <p className="text-gray mb-0">106 order  |  98.1% Completion</p>
                                                                        </td>
                                                                        <td>
                                                                            <div className="ass-ty d-flex align-items-center">
                                                                                <div className="ass-ty-img pr-3">
                                                                                    <p className="mb-0">Available Limit</p>
                                                                                </div>
                                                                                <div className="ass-ty-content">
                                                                                    <p className="mb-0">1.65908675 BTC 50,000- 300,000 CNY</p>
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                        <td>
                                                                            <div className="price-icon">
                                                                                <a href="#"><img src={bank_icon} width="20"/></a>
                                                                                <a href="#"><img src={money_icon} width="20"/></a>
                                                                                <a href="#"><img src={chat_icon} width="20"/></a>
                                                                            </div>
                                                                        </td>
                                                                        <td>270,042.63 CNY</td>
                                                                        <td><a href="#" className="btn btn-primary">Buy BTC</a></td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>
                                                                            <p className="text-primary mb-0">Xuhai8888</p>
                                                                            <p className="text-gray mb-0">106 order  |  98.1% Completion</p>
                                                                        </td>
                                                                        <td>
                                                                            <div className="ass-ty d-flex align-items-center">
                                                                                <div className="ass-ty-img pr-3">
                                                                                    <p className="mb-0">Available Limit</p>
                                                                                </div>
                                                                                <div className="ass-ty-content">
                                                                                    <p className="mb-0">1.65908675 BTC 50,000- 300,000 CNY</p>
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                        <td>
                                                                            <div className="price-icon">
                                                                                <a href="#"><img src={bank_icon} width="20"/></a>
                                                                                <a href="#"><img src={money_icon} width="20"/></a>
                                                                                <a href="#"><img src={chat_icon} width="20"/></a>
                                                                            </div>
                                                                        </td>
                                                                        <td>270,042.63 CNY</td>
                                                                        <td><a href="#" className="btn btn-outline-secondary">Limited</a></td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>
                                                                            <p className="text-primary mb-0">Xuhai8888</p>
                                                                            <p className="text-gray mb-0">106 order  |  98.1% Completion</p>
                                                                        </td>
                                                                        <td>
                                                                            <div className="ass-ty d-flex align-items-center">
                                                                                <div className="ass-ty-img pr-3">
                                                                                    <p className="mb-0">Available Limit</p>
                                                                                </div>
                                                                                <div className="ass-ty-content">
                                                                                    <p className="mb-0">1.65908675 BTC 50,000- 300,000 CNY</p>
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                        <td>
                                                                            <div className="price-icon">
                                                                                <a href="#"><img src={bank_icon} width="20"/></a>
                                                                                <a href="#"><img src={money_icon} width="20"/></a>
                                                                                <a href="#"><img src={chat_icon} width="20"/></a>
                                                                            </div>
                                                                        </td>
                                                                        <td>270,042.63 CNY</td>
                                                                        <td><a href="#" className="btn btn-primary">Buy BTC</a></td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>
                                                                            <p className="text-primary mb-0">Xuhai8888</p>
                                                                            <p className="text-gray mb-0">106 order  |  98.1% Completion</p>
                                                                        </td>
                                                                        <td>
                                                                            <div className="ass-ty d-flex align-items-center">
                                                                                <div className="ass-ty-img pr-3">
                                                                                    <p className="mb-0">Available Limit</p>
                                                                                </div>
                                                                                <div className="ass-ty-content">
                                                                                    <p className="mb-0">1.65908675 BTC 50,000- 300,000 CNY</p>
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                        <td>
                                                                            <div className="price-icon">
                                                                                <a href="#"><img src={bank_icon} width="20"/></a>
                                                                                <a href="#"><img src={money_icon} width="20"/></a>
                                                                                <a href="#"><img src={chat_icon} width="20"/></a>
                                                                            </div>
                                                                        </td>
                                                                        <td>270,042.63 CNY</td>
                                                                        <td><a href="#" className="btn btn-primary">Buy BTC</a></td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>
                                                                            <p className="text-primary mb-0">Xuhai8888</p>
                                                                            <p className="text-gray mb-0">106 order  |  98.1% Completion</p>
                                                                        </td>
                                                                        <td>
                                                                            <div className="ass-ty d-flex align-items-center">
                                                                                <div className="ass-ty-img pr-3">
                                                                                    <p className="mb-0">Available Limit</p>
                                                                                </div>
                                                                                <div className="ass-ty-content">
                                                                                    <p className="mb-0">1.65908675 BTC 50,000- 300,000 CNY</p>
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                        <td>
                                                                            <div className="price-icon">
                                                                                <a href="#"><img src={bank_icon} width="20"/></a>
                                                                                <a href="#"><img src={money_icon} width="20"/></a>
                                                                                <a href="#"><img src={chat_icon} width="20"/></a>
                                                                            </div>
                                                                        </td>
                                                                        <td>270,042.63 CNY</td>
                                                                        <td><a href="#" className="btn btn-primary">Buy BTC</a></td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>
                                                                            <p className="text-primary mb-0">Xuhai8888</p>
                                                                            <p className="text-gray mb-0">106 order  |  98.1% Completion</p>
                                                                        </td>
                                                                        <td>
                                                                            <div className="ass-ty d-flex align-items-center">
                                                                                <div className="ass-ty-img pr-3">
                                                                                    <p className="mb-0">Available Limit</p>
                                                                                </div>
                                                                                <div className="ass-ty-content">
                                                                                    <p className="mb-0">1.65908675 BTC 50,000- 300,000 CNY</p>
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                        <td>
                                                                            <div className="price-icon">
                                                                                <a href="#"><img src={bank_icon} width="20"/></a>
                                                                                <a href="#"><img src={money_icon} width="20"/></a>
                                                                                <a href="#"><img src={chat_icon} width="20"/></a>
                                                                            </div>
                                                                        </td>
                                                                        <td>270,042.63 CNY</td>
                                                                        <td><a href="#" className="btn btn-primary">Buy BTC</a></td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                            <nav aria-label="Page navigation example">
                                                                <ul className="pagination d-flex justify-content-end">
                                                                    <li className="page-item"><a className="page-link" href="#">Previous</a></li>
                                                                    <li className="page-item"><a className="page-link" href="#">1</a></li>
                                                                    <li className="page-item"><a className="page-link" href="#">2</a></li>
                                                                    <li className="page-item"><a className="page-link" href="#">3</a></li>
                                                                    <li className="page-item"><a className="page-link" href="#">Next</a></li>
                                                                </ul>
                                                            </nav>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Tab>
                                            <Tab eventKey="sell-xrp-tab" title="XRP">
                                                <div className="container overflow-x-auto">
                                                    <div className="row align-items-center justify-content-center py-3">
                                                        <div className="col-md-12 py-3">
                                                            <div className="row">
                                                                <div className="col-md-6 d-flex justify-content-around">
                                                                    <div className="coin">
                                                                        <div className="coin-title">
                                                                            <p>Money</p>
                                                                        </div>
                                                                        <div className="dropdown">
                                                                            <button className="btn dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                                <img src={usdt_icon}/> USDT
                                                                            </button>

                                                                            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                                                                <a className="dropdown-item" href="#"><img src={usdt_icon}/> USDT</a>
                                                                                <a className="dropdown-item" href="#"><img src={usdt_icon}/> USDT</a>
                                                                                <a className="dropdown-item" href="#"><img src={usdt_icon}/> USDT</a>
                                                                            </div>
                                                                        </div>
                                                                    </div>

                                                                    <div className="coin">
                                                                        <div className="coin-title">
                                                                            <p>Payment Method</p>
                                                                        </div>
                                                                        <div className="dropdown">
                                                                            <button className="btn dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> All Payment
                                                                            </button>

                                                                            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                                                                <a className="dropdown-item" href="#">All Payment</a>
                                                                                <a className="dropdown-item" href="#">All Payment</a>
                                                                                <a className="dropdown-item" href="#">All Payment</a>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-6 d-flex justify-content-end align-items-end">
                                                                    <div className="ad-bn">
                                                                        <a className="btn btn-ref font-weight-bold mr-2"><img src={refresh_icon} width="20" className="mr-2"/>Refresh</a>
                                                                        <a href="#" className="btn btn-outline-primary">+  Creat an AD</a>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <table id="dtBasicExample" className="table mt-3" cellspacing="0" width="100%">
                                                                <thead>
                                                                    <tr>
                                                                        <th className="th-sm">User</th>
                                                                        <th className="th-sm">Available/Limited</th>
                                                                        <th className="th-sm">Payment</th>
                                                                        <th className="th-sm">Price</th>
                                                                        <th className="th-sm">Transaction</th>
                                                                    </tr>
                                                                </thead>
                                                                <tbody>
                                                                    <tr>
                                                                        <td>
                                                                            <p className="text-primary mb-0">Xuhai8888</p>
                                                                            <p className="text-gray mb-0">106 order  |  98.1% Completion</p>
                                                                        </td>
                                                                        <td>
                                                                            <div className="ass-ty d-flex align-items-center">
                                                                                <div className="ass-ty-img pr-3">
                                                                                    <p className="mb-0">Available Limit</p>
                                                                                </div>
                                                                                <div className="ass-ty-content">
                                                                                    <p className="mb-0">1.65908675 BTC 50,000- 300,000 CNY</p>
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                        <td>
                                                                            <div className="price-icon">
                                                                                <a href="#"><img src={bank_icon} width="20"/></a>
                                                                                <a href="#"><img src={money_icon} width="20"/></a>
                                                                                <a href="#"><img src={chat_icon} width="20"/></a>
                                                                            </div>
                                                                        </td>
                                                                        <td>270,042.63 CNY</td>
                                                                        <td><a href="#" className="btn btn-primary">Buy BTC</a></td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>
                                                                            <p className="text-primary mb-0">Xuhai8888</p>
                                                                            <p className="text-gray mb-0">106 order  |  98.1% Completion</p>
                                                                        </td>
                                                                        <td>
                                                                            <div className="ass-ty d-flex align-items-center">
                                                                                <div className="ass-ty-img pr-3">
                                                                                    <p className="mb-0">Available Limit</p>
                                                                                </div>
                                                                                <div className="ass-ty-content">
                                                                                    <p className="mb-0">1.65908675 BTC 50,000- 300,000 CNY</p>
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                        <td>
                                                                            <div className="price-icon">
                                                                                <a href="#"><img src={bank_icon} width="20"/></a>
                                                                                <a href="#"><img src={money_icon} width="20"/></a>
                                                                                <a href="#"><img src={chat_icon} width="20"/></a>
                                                                            </div>
                                                                        </td>
                                                                        <td>270,042.63 CNY</td>
                                                                        <td><a href="#" className="btn btn-primary">Buy BTC</a></td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>
                                                                            <p className="text-primary mb-0">Xuhai8888</p>
                                                                            <p className="text-gray mb-0">106 order  |  98.1% Completion</p>
                                                                        </td>
                                                                        <td>
                                                                            <div className="ass-ty d-flex align-items-center">
                                                                                <div className="ass-ty-img pr-3">
                                                                                    <p className="mb-0">Available Limit</p>
                                                                                </div>
                                                                                <div className="ass-ty-content">
                                                                                    <p className="mb-0">1.65908675 BTC 50,000- 300,000 CNY</p>
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                        <td>
                                                                            <div className="price-icon">
                                                                                <a href="#"><img src={bank_icon} width="20"/></a>
                                                                                <a href="#"><img src={money_icon} width="20"/></a>
                                                                                <a href="#"><img src={chat_icon} width="20"/></a>
                                                                            </div>
                                                                        </td>
                                                                        <td>270,042.63 CNY</td>
                                                                        <td><a href="#" className="btn btn-outline-secondary">Limited</a></td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>
                                                                            <p className="text-primary mb-0">Xuhai8888</p>
                                                                            <p className="text-gray mb-0">106 order  |  98.1% Completion</p>
                                                                        </td>
                                                                        <td>
                                                                            <div className="ass-ty d-flex align-items-center">
                                                                                <div className="ass-ty-img pr-3">
                                                                                    <p className="mb-0">Available Limit</p>
                                                                                </div>
                                                                                <div className="ass-ty-content">
                                                                                    <p className="mb-0">1.65908675 BTC 50,000- 300,000 CNY</p>
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                        <td>
                                                                            <div className="price-icon">
                                                                                <a href="#"><img src={bank_icon} width="20"/></a>
                                                                                <a href="#"><img src={money_icon} width="20"/></a>
                                                                                <a href="#"><img src={chat_icon} width="20"/></a>
                                                                            </div>
                                                                        </td>
                                                                        <td>270,042.63 CNY</td>
                                                                        <td><a href="#" className="btn btn-primary">Buy BTC</a></td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>
                                                                            <p className="text-primary mb-0">Xuhai8888</p>
                                                                            <p className="text-gray mb-0">106 order  |  98.1% Completion</p>
                                                                        </td>
                                                                        <td>
                                                                            <div className="ass-ty d-flex align-items-center">
                                                                                <div className="ass-ty-img pr-3">
                                                                                    <p className="mb-0">Available Limit</p>
                                                                                </div>
                                                                                <div className="ass-ty-content">
                                                                                    <p className="mb-0">1.65908675 BTC 50,000- 300,000 CNY</p>
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                        <td>
                                                                            <div className="price-icon">
                                                                                <a href="#"><img src={bank_icon} width="20"/></a>
                                                                                <a href="#"><img src={money_icon} width="20"/></a>
                                                                                <a href="#"><img src={chat_icon} width="20"/></a>
                                                                            </div>
                                                                        </td>
                                                                        <td>270,042.63 CNY</td>
                                                                        <td><a href="#" className="btn btn-primary">Buy BTC</a></td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>
                                                                            <p className="text-primary mb-0">Xuhai8888</p>
                                                                            <p className="text-gray mb-0">106 order  |  98.1% Completion</p>
                                                                        </td>
                                                                        <td>
                                                                            <div className="ass-ty d-flex align-items-center">
                                                                                <div className="ass-ty-img pr-3">
                                                                                    <p className="mb-0">Available Limit</p>
                                                                                </div>
                                                                                <div className="ass-ty-content">
                                                                                    <p className="mb-0">1.65908675 BTC 50,000- 300,000 CNY</p>
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                        <td>
                                                                            <div className="price-icon">
                                                                                <a href="#"><img src={bank_icon} width="20"/></a>
                                                                                <a href="#"><img src={money_icon} width="20"/></a>
                                                                                <a href="#"><img src={chat_icon} width="20"/></a>
                                                                            </div>
                                                                        </td>
                                                                        <td>270,042.63 CNY</td>
                                                                        <td><a href="#" className="btn btn-primary">Buy BTC</a></td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>

                                                            <nav aria-label="Page navigation example">
                                                                <ul className="pagination d-flex justify-content-end">
                                                                    <li className="page-item"><a className="page-link" href="#">Previous</a></li>
                                                                    <li className="page-item"><a className="page-link" href="#">1</a></li>
                                                                    <li className="page-item"><a className="page-link" href="#">2</a></li>
                                                                    <li className="page-item"><a className="page-link" href="#">3</a></li>
                                                                    <li className="page-item"><a className="page-link" href="#">Next</a></li>
                                                                </ul>
                                                            </nav>

                                                        </div>
                                                    </div>
                                                </div>
                                            </Tab>
                                            <Tab eventKey="sell-eos-tab" title="EOS">
                                                <div className="container overflow-x-auto">
                                                    <div className="row align-items-center justify-content-center py-3">
                                                        <div className="col-md-12 py-3">
                                                            <div className="row">
                                                                <div className="col-md-6 d-flex justify-content-around">
                                                                    <div className="coin">
                                                                        <div className="coin-title">
                                                                            <p>Money</p>
                                                                        </div>
                                                                        <div className="dropdown">
                                                                            <button className="btn dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                                <img src={usdt_icon}/> USDT
                                                                            </button>

                                                                            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                                                                <a className="dropdown-item" href="#"><img src={usdt_icon}/> USDT</a>
                                                                                <a className="dropdown-item" href="#"><img src={usdt_icon}/> USDT</a>
                                                                                <a className="dropdown-item" href="#"><img src={usdt_icon}/> USDT</a>
                                                                            </div>
                                                                        </div>
                                                                    </div>

                                                                    <div className="coin">
                                                                        <div className="coin-title">
                                                                            <p>Payment Method</p>
                                                                        </div>
                                                                        <div className="dropdown">
                                                                            <button className="btn dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> All Payment
                                                                            </button>

                                                                            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                                                                <a className="dropdown-item" href="#">All Payment</a>
                                                                                <a className="dropdown-item" href="#">All Payment</a>
                                                                                <a className="dropdown-item" href="#">All Payment</a>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-6 d-flex justify-content-end align-items-end">
                                                                    <div className="ad-bn">
                                                                        <a className="btn btn-ref font-weight-bold mr-2"><img src={refresh_icon} width="20" className="mr-2"/>Refresh</a>
                                                                        <a href="#" className="btn btn-outline-primary">+  Creat an AD</a>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <table id="dtBasicExample" className="table mt-3" cellspacing="0" width="100%">
                                                                <thead>
                                                                    <tr>
                                                                        <th className="th-sm">User</th>
                                                                        <th className="th-sm">Available/Limited</th>
                                                                        <th className="th-sm">Payment</th>
                                                                        <th className="th-sm">Price</th>
                                                                        <th className="th-sm">Transaction</th>
                                                                    </tr>
                                                                </thead>
                                                                <tbody>
                                                                    <tr>
                                                                        <td>
                                                                            <p className="text-primary mb-0">Xuhai8888</p>
                                                                            <p className="text-gray mb-0">106 order  |  98.1% Completion</p>
                                                                        </td>
                                                                        <td>
                                                                            <div className="ass-ty d-flex align-items-center">
                                                                                <div className="ass-ty-img pr-3">
                                                                                    <p className="mb-0">Available Limit</p>
                                                                                </div>
                                                                                <div className="ass-ty-content">
                                                                                    <p className="mb-0">1.65908675 BTC 50,000- 300,000 CNY</p>
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                        <td>
                                                                            <div className="price-icon">
                                                                                <a href="#"><img src={bank_icon} width="20"/></a>
                                                                                <a href="#"><img src={money_icon} width="20"/></a>
                                                                                <a href="#"><img src={chat_icon} width="20"/></a>
                                                                            </div>
                                                                        </td>
                                                                        <td>270,042.63 CNY</td>
                                                                        <td><a href="#" className="btn btn-primary">Buy BTC</a></td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>
                                                                            <p className="text-primary mb-0">Xuhai8888</p>
                                                                            <p className="text-gray mb-0">106 order  |  98.1% Completion</p>
                                                                        </td>
                                                                        <td>
                                                                            <div className="ass-ty d-flex align-items-center">
                                                                                <div className="ass-ty-img pr-3">
                                                                                    <p className="mb-0">Available Limit</p>
                                                                                </div>
                                                                                <div className="ass-ty-content">
                                                                                    <p className="mb-0">1.65908675 BTC 50,000- 300,000 CNY</p>
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                        <td>
                                                                            <div className="price-icon">
                                                                                <a href="#"><img src={bank_icon} width="20"/></a>
                                                                                <a href="#"><img src={money_icon} width="20"/></a>
                                                                                <a href="#"><img src={chat_icon} width="20"/></a>
                                                                            </div>
                                                                        </td>
                                                                        <td>270,042.63 CNY</td>
                                                                        <td><a href="#" className="btn btn-outline-secondary">Limited</a></td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>
                                                                            <p className="text-primary mb-0">Xuhai8888</p>
                                                                            <p className="text-gray mb-0">106 order  |  98.1% Completion</p>
                                                                        </td>
                                                                        <td>
                                                                            <div className="ass-ty d-flex align-items-center">
                                                                                <div className="ass-ty-img pr-3">
                                                                                    <p className="mb-0">Available Limit</p>
                                                                                </div>
                                                                                <div className="ass-ty-content">
                                                                                    <p className="mb-0">1.65908675 BTC 50,000- 300,000 CNY</p>
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                        <td>
                                                                            <div className="price-icon">
                                                                                <a href="#"><img src={bank_icon} width="20"/></a>
                                                                                <a href="#"><img src={money_icon} width="20"/></a>
                                                                                <a href="#"><img src={chat_icon} width="20"/></a>
                                                                            </div>
                                                                        </td>
                                                                        <td>270,042.63 CNY</td>
                                                                        <td><a href="#" className="btn btn-primary">Buy BTC</a></td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>
                                                                            <p className="text-primary mb-0">Xuhai8888</p>
                                                                            <p className="text-gray mb-0">106 order  |  98.1% Completion</p>
                                                                        </td>
                                                                        <td>
                                                                            <div className="ass-ty d-flex align-items-center">
                                                                                <div className="ass-ty-img pr-3">
                                                                                    <p className="mb-0">Available Limit</p>
                                                                                </div>
                                                                                <div className="ass-ty-content">
                                                                                    <p className="mb-0">1.65908675 BTC 50,000- 300,000 CNY</p>
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                        <td>
                                                                            <div className="price-icon">
                                                                                <a href="#"><img src={bank_icon} width="20"/></a>
                                                                                <a href="#"><img src={money_icon} width="20"/></a>
                                                                                <a href="#"><img src={chat_icon} width="20"/></a>
                                                                            </div>
                                                                        </td>
                                                                        <td>270,042.63 CNY</td>
                                                                        <td><a href="#" className="btn btn-primary">Buy BTC</a></td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>
                                                                            <p className="text-primary mb-0">Xuhai8888</p>
                                                                            <p className="text-gray mb-0">106 order  |  98.1% Completion</p>
                                                                        </td>
                                                                        <td>
                                                                            <div className="ass-ty d-flex align-items-center">
                                                                                <div className="ass-ty-img pr-3">
                                                                                    <p className="mb-0">Available Limit</p>
                                                                                </div>
                                                                                <div className="ass-ty-content">
                                                                                    <p className="mb-0">1.65908675 BTC 50,000- 300,000 CNY</p>
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                        <td>
                                                                            <div className="price-icon">
                                                                                <a href="#"><img src={bank_icon} width="20"/></a>
                                                                                <a href="#"><img src={money_icon} width="20"/></a>
                                                                                <a href="#"><img src={chat_icon} width="20"/></a>
                                                                            </div>
                                                                        </td>
                                                                        <td>270,042.63 CNY</td>
                                                                        <td><a href="#" className="btn btn-primary">Buy BTC</a></td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>
                                                                            <p className="text-primary mb-0">Xuhai8888</p>
                                                                            <p className="text-gray mb-0">106 order  |  98.1% Completion</p>
                                                                        </td>
                                                                        <td>
                                                                            <div className="ass-ty d-flex align-items-center">
                                                                                <div className="ass-ty-img pr-3">
                                                                                    <p className="mb-0">Available Limit</p>
                                                                                </div>
                                                                                <div className="ass-ty-content">
                                                                                    <p className="mb-0">1.65908675 BTC 50,000- 300,000 CNY</p>
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                        <td>
                                                                            <div className="price-icon">
                                                                                <a href="#"><img src={bank_icon} width="20"/></a>
                                                                                <a href="#"><img src={money_icon} width="20"/></a>
                                                                                <a href="#"><img src={chat_icon} width="20"/></a>
                                                                            </div>
                                                                        </td>
                                                                        <td>270,042.63 CNY</td>
                                                                        <td><a href="#" className="btn btn-primary">Buy BTC</a></td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                            <nav aria-label="Page navigation example">
                                                                <ul className="pagination d-flex justify-content-end">
                                                                    <li className="page-item"><a className="page-link" href="#">Previous</a></li>
                                                                    <li className="page-item"><a className="page-link" href="#">1</a></li>
                                                                    <li className="page-item"><a className="page-link" href="#">2</a></li>
                                                                    <li className="page-item"><a className="page-link" href="#">3</a></li>
                                                                    <li className="page-item"><a className="page-link" href="#">Next</a></li>
                                                                </ul>
                                                            </nav>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Tab>
                                        </Tabs>
                                    </Tab>
                                </Tabs>


                                {/* <Tab.Content>
        <Tab.Pane eventKey="buy-tab">
          AAA
        </Tab.Pane>
        <Tab.Pane eventKey="sell-tab">
         BBB
        </Tab.Pane>
      </Tab.Content> */}
                                
                                {/* <ul className="nav nav-tabs" id="myTab" role="tablist">
                                    <li className="nav-item">
                                        <a className="nav-link active font-weight-bold" id="btc-tab" data-toggle="tab" href="#btc" role="tab" aria-controls="btc" aria-selected="true">BTC</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link font-weight-bold" id="eth-tab" data-toggle="tab" href="#eth" role="tab" aria-controls="eth" aria-selected="false">ETH</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link font-weight-bold" id="usdt-tab" data-toggle="tab" href="#usdt" role="tab" aria-controls="usdt" aria-selected="false">USDT</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link font-weight-bold" id="xrp-tab" data-toggle="tab" href="#xrp" role="tab" aria-controls="xrp" aria-selected="false">XRP</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link font-weight-bold" id="eos-tab" data-toggle="tab" href="#eos" role="tab" aria-controls="eos" aria-selected="false">EOS</a>
                                    </li>
                                </ul> */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div> 
    )
}
