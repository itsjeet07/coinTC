import React, { useEffect, useState } from 'react'
import './wallet-asset.css'
import { Container, Row, Col, Modal, Button,Div,Dropdown,Tabs,Tab,Sonnet } from 'react-bootstrap';
// import { Link } from 'react-router-dom'
// import { Carousel } from 'react-responsive-carousel';
// import "react-responsive-carousel/lib/styles/carousel.min.css";

import bnb_icon from '../../app-assets/images/icon/bnb.png';
import eth_icon from '../../app-assets/images/icon/eth.png';
import usdt_icon from '../../app-assets/images/icon/usdt.png';
import xrp_icon from '../../app-assets/images/icon/xrp.png';
import eos_icon from '../../app-assets/images/icon/eos.png';

import qr_code_icon from '../../app-assets/images/page/wallet/qr-code.png';


import { Wallet_deposit } from './Wallet_deposit';

function Wallet_deposit_modal() {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
        <a href="#" variant="primary" className="mt-2 mr-1" onClick={handleShow}>
		Deposit
        </a>
        
        <Modal show={show} onHide={handleClose} size="lg">
          <Modal.Body>
			<section id="withdrawCrypto" className="p-3">
				<div className="row">
					<div className="col col-sm-12 col-md-12 main-bg">
						<h4> Deposit Crypto </h4>
						<form>
							<div className="form-group row justify-content-between mb-0 py-2">
								<label className="col-sm-4 col-form-label">Select Coin</label>
								<div className="col-sm-10  col-md-6 select-coin-input">
									<select id="coin" className="form-control text-center">
										<option value="usdt">USDT</option>
										<option value="sdt">SDT</option>
									</select>
								</div>
							</div>

							<div className="form-group row justify-content-between mb-0 py-2">
								<label className="col-sm-2 col-form-label">Network</label>
								<div className="col-sm-10  col-md-6 network-input">
									<input type="text" className="form-control-plaintext text-md-right"  value="Ethreum ERC20"/>
								</div>
							</div>

							<div className="form-group row justify-content-between mb-0 py-2">
								<label for="inputPassword" className="col-sm-4 col-form-label"> Deposit Address </label>	
							</div>

							<div className="col-md-8 mx-auto deposit-address-img">
								<div className="card border-0">
									<img className="card-img-top w-25 mx-auto" src={qr_code_icon} alt="Card image cap"/>
									<div className="card-body text-center">
										<p className="card-text">0x7790a6DAe3174A60E171A25a040f913b5d6054d4</p>
										<a href="#" className="btn btn-primary mr-1">Share</a>
										<a href="#" className="btn btn-primary mr-1">Copy</a>
										<p className="card-text-p card-text mt-3">최소입금금액은 2 USDT 입니다.2 USDT 미만 입금 시 잔고 반영이 불가능합니다.</p>
									</div>
								</div>
							</div>	  	

							<hr className="form-hr-bottom" />

							<div className="wd-info col-12">
								<p><i className="fa fa-info-circle mr-2"></i>Deposit information</p>
								<ul>
									<li>위 입금 주소는 USDT만 입금이 가능합니다. 네트워크가 Ethreum ERC20인지 반드시 확인해주세요.</li>
									<li>  USDT 외 다른 암호화폐 입금 시 복구가 불가하오니 주의해 주시기 바랍니다.</li>
									<li>컨트랙트 입금의 경우 입금과 자산 반영에 지연이 발생할 수 있습니다.</li>
									<li> 디지털 자산 명칭은 동일하나 전송 방식(네트워크)가 다른 경우에 입금 및 복구가 불가능합니다.</li>
									<li>48번의 Confirmation이 발생한 이후, 입금 프로세스를 거쳐 잔고에 반영되며, 네트워크 상황에 따라 소요 시간이 달라질 수 있습니다.</li>
								</ul>
							</div>

							<div className="wd-btn mt-4">
								<a href="#" className="btn btn-primary w-100">Withdraw</a>
							</div>
						</form>
					</div>
				</div>
			</section>
          </Modal.Body>
        </Modal>
      </>
    );
}
function Wallet_withdraw_modal() {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
        <a href="#" variant="primary" className="mt-2 mr-1" onClick={handleShow}>
		Withdraw
        </a>
        
        <Modal show={show} onHide={handleClose} size="lg">
          <Modal.Body>
			<section id="withdrawCrypto" className="p-3">
				<div className="row">
					<div className="col col-sm-12 col-md-12 main-bg">
						<h4>Withdraw Crypto</h4>
						<form>
							<div className="form-group row justify-content-between mb-0 py-2">
								<label className="col-sm-4 col-form-label">Select Coin</label>
								<div className="col-sm-10  col-md-6 select-coin-input">
									<select id="coin" className="form-control text-center">
										<option value="usdt">USDT</option>
										<option value="sdt">SDT</option>
									</select>
								</div>
							</div>

							<div className="form-group row justify-content-between mb-0 py-2">
								<label className="col-sm-2 col-form-label">Network</label>
								<div className="col-sm-10  col-md-6 network-input">
									<input type="text" className="form-control-plaintext text-md-right"  value="Ethreum ERC20"/>
								</div>
							</div>

							<div className="form-group row justify-content-between mb-0 py-2">
								<label for="inputPassword" className="col-sm-4 col-form-label">Withdraw Address</label>
								<div className="col-sm-10  col-md-7 address-input">
									<input type="text" className="form-control" value="0x7790a6DAe3174A60E171A25a040f913b5d6054d4" />
								</div>
							</div>

							<div className="form-group row justify-content-between mb-0 py-2">
								<label for="inputPassword" className="col-sm-4 col-form-label">Withdraw Amount</label>
								<div className="col-sm-10  col-md-6 amount-input">
									<div className="input-group">
										<input type="text" className="form-control"/>
										<div className="input-group-append">
											<span className="input-group-text" id="basic-addon2">1000 | <span className="pl-2">USDT</span></span>
										</div>
									</div>
									<p className="mb-0 text-right mt-2">사용 가능 : 1,000 USDT <span>전체</span></p>
								</div>
							</div>

							<div className="form-group row justify-content-between mb-0 py-2 wa-icon">
								<label className="col-sm-3 col-form-label postion-relative">Withdrawal <span></span> <span className="d-block">Available</span></label>
								<div className="col-sm-10  col-md-6 fee-input">
									<input type="text" className="form-control-plaintext text-md-right font-weight-bold"  value="999.000000 USDT"/>
								</div>
							</div>

							<hr className="form-hr-bottom" />

							<div className="form-group row justify-content-between mb-0 py-2">
								<label className="col-sm-2 col-form-label">Fee</label>
								<div className="col-sm-10  col-md-6 fee-input">
									<input type="text" className="form-control-plaintext text-md-right"  value="1 USDT"/>
								</div>
							</div>

							<div className="form-group row justify-content-between mb-0 py-2">
								<label className="col-sm-4 col-form-label">Receive Amount</label>
								<div className="col-sm-10  col-md-6 fee-input">
									<input type="text" className="form-control-plaintext text-md-right font-weight-bold"  value="999.000000 USDT"/>
								</div>
							</div>

							<div className="wd-info pt-5 col-9">
								<p><i className="fa fa-info-circle mr-2"></i>withdrawal information</p>
								<ul>
									<li>Minimum withdrawal amount: 2 USDT.</li>
									<li> The network fee is 1 USDT，which may be adjusted by network congestion.</li>
									<li>Internal withdrawal is real-time. Exceeding the free transfer amount will be charged at the same rate as regular withdrawals.</li>
								</ul>
							</div>

							<div className="wd-btn mt-4">
								<a href="#" className="btn btn-primary w-100">Withdraw</a>
							</div>

						</form>
					</div>
				</div>
			</section>
          </Modal.Body>
        </Modal>
      </>
    );
}

export const Wallet = () => {
    return (     
        <div className="Wallet"> 
            <section id="progress">
            <div className="container">
                <div className="row mx-0">
                    <div className="col-12 progress-top">
                        <dl>
                            <dt>My Wallet</dt>
                        </dl>
                        <dl>
                            <dt className="float-left progress-total">Total Balance:</dt>
                            <dd className="progress-income"><span className="pl-2">167.71 USD</span> ≈ $0.0003624 BTC</dd>
                        </dl>
                        <ul>
                            <li>자산은 코인마켓캡의 실시간 코인 가격을 통해 추정 가치로 변환되며 참조용으로만 사용됩니다.</li>
                            <li>실제 자산은 각 암호화폐의 보유 수량에 근거해야 합니다.</li>
                            <li>Assets are converted to estimated value through the real-time coin price of a coin market cap and are used for reference only.</li>
                            <li>Actual assets must be based on the amount of each cryptocurrency held.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
        
        <section id="asset">
            <div className="container">
                <div className="row mx-0">
                	<div className="col-12 clearfix">
                		<h4>Asset</h4>
                		<ul>
                			<li className="on"><a href="#">Asset</a></li>
                			<li><a href="/wallet_th">History</a></li>
                		</ul>
                		<div className="table_container overflow-auto">
                			<table className="w-100">
                				<thead>
                					<tr>
                						<th>Coin</th>
                						<th>Available</th>
                						<th>In Order</th>
                						<th>USD Value</th>
                						<th>Action</th>
                					</tr>
                				</thead>
                				<tbody>
                					<tr className="bitcoin">
                						<td className="coin clearfix">
                							<img src={bnb_icon}/>
                							<dl className="mb-0">
                								<dt>Bitcoin</dt>
                								<dd className="mb-0">BTC</dd>
                							</dl>
                						</td>
                						<td className="available">0.67574356</td>
                						<td className="order">0.67574356</td>
                						<td className="value">＄27,170.5</td>
                						<td className="action">
											<a href="/wallet_deposit">Deposit</a>
                							<a href="/wallet_withdraw">Withdraw</a>
                							<a href="#">Trade</a>
                						</td>
                					</tr>
                					<tr className="ethereum">
                						<td className="coin clearfix">
                							<img src={eth_icon}/>
                							<dl className="mb-0">
                								<dt>Ethereum </dt>
                								<dd className="mb-0">ETH</dd>
                							</dl>
                						</td>
                						<td className="available">160,867.5</td>
                						<td className="order">160,867.5</td>
                						<td className="value">＄27,170.5</td>
                						<td className="action">
											<a href="/wallet_deposit">Deposit</a>
                							<a href="/wallet_withdraw">Withdraw</a>
                							<a href="#">Trade</a>
                						</td>
                					</tr>
                					<tr className="tether">
                						<td className="coin clearfix">
                							<img src={usdt_icon}/>
                							<dl className="mb-0">
                								<dt>Tether</dt>
                								<dd className="mb-0">USDT</dd>
                							</dl>
                						</td>
                						<td className="available">160,867.5</td>
                						<td className="order">160,867.5</td>
                						<td className="value">＄27,170.5</td>
                						<td className="action">
											<a href="/wallet_deposit">Deposit</a>
                							<a href="/wallet_withdraw">Withdraw</a>
                							<a href="#">Trade</a>
                						</td>
                					</tr>
                					<tr className="ripple">
                						<td className="coin clearfix">
                							<img src={xrp_icon}/>
                							<dl className="mb-0">
                								<dt>Ripple</dt>
                								<dd className="mb-0">XRP</dd>
                							</dl>
                						</td>
                						<td className="available">1.908675</td>
                						<td className="order">1.908675</td>
                						<td className="value">＄27,170.5</td>
                						<td className="action">
											<a href="/wallet_deposit">Deposit</a>
                							<a href="/wallet_withdraw">Withdraw</a>
                							<a href="#">Trade</a>
                						</td>
                					</tr>
                					<tr className="eos">
                						<td className="coin clearfix">
                							<img src={eos_icon}/>
                							<dl className="mb-0">
                								<dt>EOS</dt>
                								<dd className="mb-0">EOS</dd>
                							</dl>
                						</td>
                						<td className="available">200.000000</td>
                						<td className="order">200.000000</td>
                						<td className="value">＄27,170.5</td>
                						<td className="action">
											<a href="/wallet_deposit">Deposit</a>
                							<a href="/wallet_withdraw">Withdraw</a>
                							<a href="#">Trade</a>
                						</td>
                					</tr>
                				</tbody>
                			</table>
                		</div>
                	</div>
                </div>
            </div>
        </section>
        </div> 
    )
}
