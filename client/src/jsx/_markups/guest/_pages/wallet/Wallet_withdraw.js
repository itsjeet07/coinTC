import React from 'react'
// import './wallet-asset.css'
// import { Container, Row, Col, Form, Button, Div, Dropdown, Tabs, Tab, Sonnet } from 'react-bootstrap';
// import { Link } from 'react-router-dom'
// import { Carousel } from 'react-responsive-carousel';
// import "react-responsive-carousel/lib/styles/carousel.min.css";


// import usdt_icon from '../../app-assets/images/icon/usdt.png';
// import cont_icon from '../../app-assets/images/page/order/cont.png';

// import bnb_icon from '../../app-assets/images/icon/bnb.png';
// import eth_icon from '../../app-assets/images/icon/eth.png';
// import usdt_icon from '../../app-assets/images/icon/usdt.png';
// import xrp_icon from '../../app-assets/images/icon/xrp.png';
// import eos_icon from '../../app-assets/images/icon/eos.png';
// import wallet_qrcode_icon from '../../app-assets/images/page/wallet-qrcode.png';
import useQuery from '../../../../_hooks/query.hook';
import useServiceContextHook from '../../../../_hooks/service.context.hook';
import { toast } from "react-toastify";
import { useFormik } from 'formik';
import * as Yup from 'yup'


const initialValues = {
    amount:0,
    address:'',
    currency:"USDT"
}

const validationSchema = Yup.object().shape({
    amount:Yup.number("only number is allowed").min(0).notOneOf([0],"value is has to be grater than 0").required("amount is required"),
    address:Yup.string().required("address is required"),
    currency:Yup.string().required("select currency")
})


export const Wallet_withdraw = () => {
    const {address} = useQuery()
    const [currencies, setCurrencies] = React.useState()
    const [wallet, setwallet] = React.useState()
    
    const {
        services:{
            wallet:walletService,
            type
        }
    } = useServiceContextHook()

    const {getFieldProps,errors,touched} = useFormik({
        initialValues,
        validationSchema,
        onSubmit(values,actions){
            // submit form
            const {availableBalance} = wallet?wallet.account.balance:{}
            if(Number(values.amount)>Number(availableBalance)){
                actions.setErrors({amount:"insufficient amount"})
                return 
            }

            // proceed to withdraw
        }
    })


    

    React.useMemo(()=>{
        type.findByName("CRYPTO_CURRENCIES")
        .then(({error,data,message})=>{
        if(error){
            return
        }
        setCurrencies(data)
        
        })
    },[])
    
    React.useEffect(() => {

        address&&walletService.findByAddress(address,{fake:true})
        .then(({error,data,message})=>{
            if(error){
                toast.error(message)
                
            }else{
                
                setwallet(data)
            }
        })
                
    }, [address])
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

            <section id="withdrawCrypto">
                <div className="container">
                    <div className="row justify-content-center" data-wow-delay="0.2s">
                        <div className="col col-sm-12 col-md-6 main-bg wow animate__animated fadeInDown">
                            <h4>Withdraw Crypto</h4>
                            <form id="walletModal">
                                <div className="form-group row justify-content-between mb-0 py-2">
                                    <label className="col-sm-4 col-form-label">Select Coin</label>
                                    <div className="col-sm-10  col-md-6 select-coin-input">
                                        <select id="coin" {...getFieldProps("currency")} className="form-control text-center">
                                            <option value="usdt">USDT</option>
                                            {/* <option value="sdt">SDT</option> */}
                                        </select>
                                        {errors.currency && touched.currency ? (
                                            <div className="text-danger">{errors.currency}</div>
                                        ) : null}
                                    </div>
                                </div>

                                <div className="form-group row justify-content-between mb-0 py-2">
                                    <label className="col-sm-2 col-form-label">Network</label>
                                    <div className="col-sm-10  col-md-6 network-text text-right">
                                        <p>{currencies&&wallet?currencies[wallet?.currency]:''}</p>
                                    </div>
                                </div>

                                <div className="form-group row justify-content-between mb-0 py-2">
                                    <label for="inputPassword" className="col-sm-4 col-form-label">Withdraw Address</label>
                                    <div className="col-sm-10  col-md-7 address-input">
                                        <input type="text" className="form-control" {...getFieldProps("address")} />
                                        {errors.address && touched.address ? (
                                            <div className="text-danger">{errors.address}</div>
                                        ) : null}
                                    </div>
                                    
                                </div>

                                <div className="form-group row justify-content-between mb-0 py-2">
                                    <label for="inputPassword" className="col-sm-4 col-form-label">Withdraw Amount</label>
                                    <div className="col-sm-10  col-md-6 amount-input">
                                        <div className="input-group">
                                            <input type="number" className="form-control" {...getFieldProps("amount")} />
                                            <div className="input-group-append">
                                                <span className="input-group-text" id="basic-addon2">{wallet?wallet.usd_value:0} | <span className="pl-2">USDT</span></span>
                                            </div>
                                        </div>
                                        {errors.amount && touched.amount ? (
                                            <div className="text-danger">{errors.amount}</div>
                                        ) : null}
                                        <p className="mb-0 text-right mt-2">사용 가능 : 1,000 USDT <span>전체</span></p>
                                    </div>
                                </div>

                                <div className="form-group row justify-content-between mb-0 py-2 wa-icon">
                                    <label className="col-sm-3 col-form-label postion-relative">Withdrawal <span></span> <span className="d-block">Available</span></label>
                                    <div className="col-sm-10  col-md-6 fee-input">
                                        <input type="text" className="form-control-plaintext text-md-right font-weight-bold" onChange={()=>null} value={`${wallet?wallet.usd_value:0} USDT`} />
                                    </div>
                                </div>

                                <hr className="form-hr-bottom" />

                                <div className="form-group row justify-content-between mb-0">
                                    <label className="col-sm-2 col-form-label">Fee</label>
                                    <div className="col-sm-10  col-md-6 fee-input">
                                        <input type="text" className="form-control-plaintext text-md-right" value="1 USDT" />
                                    </div>
                                </div>

                                <div className="form-group row justify-content-between mb-0">
                                    <label className="col-sm-4 col-form-label">Receive Amount</label>
                                    <div className="col-sm-10  col-md-6 fee-input">
                                        <input type="text" className="form-control-plaintext text-md-right font-weight-bold" value="999.000000 USDT" />
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
                </div>
            </section>
        </div>
    )
}
