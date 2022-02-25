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
                                            <p className="card-text-p card-text mt-3">최소입금금액은 2 USDT 입니다.2 USDT 미만 입금 시 잔고 반영이 불가능합니다.</p>
                                        </div>
                                    </div>
                                </div>

                                <hr className="form-hr-bottom" />

                                <div className="wd-info col-12">
                                    <p><i className="fa fa-info-circle mr-2"></i>Deposit information</p>
                                    <ul className="mt-3">
                                        <li>위 입금 주소는 USDT만 입금이 가능합니다. 네트워크가 Ethreum ERC20인지 반드시 확인해주세요.</li>
                                        <li>  USDT 외 다른 암호화폐 입금 시 복구가 불가하오니 주의해 주시기 바랍니다.</li>
                                        <li>컨트랙트 입금의 경우 입금과 자산 반영에 지연이 발생할 수 있습니다.</li>
                                        <li> 디지털 자산 명칭은 동일하나 전송 방식(네트워크)가 다른 경우에 입금 및 복구가 불가능합니다.</li>
                                        <li>48번의 Confirmation이 발생한 이후, 입금 프로세스를 거쳐 잔고에 반영되며, 네트워크 상황에 따라 소요 시간이 달라질 수 있습니다.</li>
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
