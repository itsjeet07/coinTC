import React,{useEffect} from 'react'
// import './wallet-asset.css'
import useQuery from '../../../../_hooks/query.hook'
import useServiceContextHook from '../../../../_hooks/service.context.hook'
import qr_code_icon from '../../app-assets/images/qr-code.png';
import { toast } from "react-toastify";
import QRCode from "react-qr-code";
import {CopyToClipboard} from 'react-copy-to-clipboard';



export const Wallet_deposit = () => {
    const {address} = useQuery()
    const [currencies, setCurrencies] = React.useState()
    const [wallet, setwallet] = React.useState()
    const {
        services:{
            wallet:walletService,
            type
        }
    } = useServiceContextHook()

    React.useMemo(()=>{
        type.findByName("CRYPTO_CURRENCIES")
        .then(({error,data,message})=>{
        if(error){
            return
        }
        setCurrencies(data)
        
        })
    },[])
    
    useEffect(() => {

        address&&walletService.findByAddress(address,{fake:true})
        .then(({error,data,message})=>{
            if(error){
                toast.error(message)
                
            }else{
                console.log('single data',data)
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
                    <div className="row justify-content-center">
                        <div className="col col-sm-12 col-md-6 main-bg">
                            <h4> Deposit Crypto </h4>
                            <form id="walletModal">
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
                                        <input type="text" onChange={()=>null} className="form-control-plaintext text-md-right" value={currencies&&wallet?currencies[wallet?.currency]:''} />
                                    </div>
                                </div>

                                <div className="form-group row justify-content-between mb-0 py-2">
                                    <label htmlFor="inputPassword" className="col-sm-4 col-form-label"> Deposit Address </label>
                                </div>

                                <div className="col-md-8 mx-auto deposit-address-img">
                                    <div className="card">
                                        {/* <img className="card-img-top w-25 mx-auto" src={qr_code_icon} alt="QR Code" /> */}
                                        <div className="card-img-top w-25 mx-auto">
                                            {
                                                address&&(
                                                    <QRCode value={address} size={100} />
                                                )
                                            }
                                        </div>
                                        <div className="card-body text-center">
                                            <p className="card-text">{address}</p>
                                            <a href="#" className="btn btn-primary mr-1">Share</a>
                                            <CopyToClipboard text={address}
                                            onCopy={() => toast.success("address copied to clipboard")}>
                                                <a href="#" className="btn btn-primary">Copy</a>
                                            </CopyToClipboard>
                                            <p className="card-text-p card-text mt-3">????????????????????? 2 USDT ?????????.2 USDT ?????? ?????? ??? ?????? ????????? ??????????????????.</p>
                                        </div>
                                    </div>
                                </div>

                                <hr className="form-hr-bottom" />

                                <div className="wd-info col-12">
                                    <p><i className="fa fa-info-circle mr-2"></i>Deposit information</p>
                                    <ul className="mt-3">
                                        <li>??? ?????? ????????? USDT??? ????????? ???????????????. ??????????????? Ethreum ERC20?????? ????????? ??????????????????.</li>
                                        <li>  USDT ??? ?????? ???????????? ?????? ??? ????????? ??????????????? ????????? ????????? ????????????.</li>
                                        <li>???????????? ????????? ?????? ????????? ?????? ????????? ????????? ????????? ??? ????????????.</li>
                                        <li> ????????? ?????? ????????? ???????????? ?????? ??????(????????????)??? ?????? ????????? ?????? ??? ????????? ??????????????????.</li>
                                        <li>48?????? Confirmation??? ????????? ??????, ?????? ??????????????? ?????? ????????? ????????????, ???????????? ????????? ?????? ?????? ????????? ????????? ??? ????????????.</li>
                                    </ul>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
