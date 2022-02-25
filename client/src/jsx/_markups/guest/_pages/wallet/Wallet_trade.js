import React, { useEffect, useState, useRef } from 'react';
import { Button, Modal, Nav, ProgressBar, Tabs, Tab, Dropdown, Overlay, Tooltip, OverlayTrigger, Image } from 'react-bootstrap';


import bank_icon from '../../app-assets/images/icon/bank-icon.png';

function BankTooltip() {
    const [show, setShow] = useState(true);
    const target = useRef(null);
    // setShow(show)
    return (
        <>
            <OverlayTrigger key={'bottom'} placement={'bottom'}
                overlay={
                    <Tooltip id={`tooltip-${'bottom'}`} className="tooltip-bank-transfer"> Bank Transfer </Tooltip>
                }
            >
                <Button variant="transparent" className="align-items-center bg-transparent d-inline-flex p-0 mr-1">
                    <Image src={bank_icon} width={20} />
                </Button>
            </OverlayTrigger>
        </>
    );
}

const table_data = {
    buy_data: {
        'btc': [
            {
                first_char: "A",
                name: "Auhai8888",
                isVarified: true,
                order_count: "106",
                order_text: "주문",
                percentage: "98.1",
                status: "완료",
                availability: "사용가능",
                payment: "1.65908675 BTC",
                is_limited: "한도",
                payment_range: "50,000 - 300,000 CNY",
                price: "270,042.63 CNY",
                button_text: "Buy BTC",
                button_url: "/wallet_verification",
                button_class: "btn_buy"
            },
            {
                first_char: "B",
                name: "Buhai8888",
                isVarified: true,
                order_count: "106",
                order_text: "주문",
                percentage: "98.1",
                status: "완료",
                availability: "사용가능",
                payment: "1.65908675 BTC",
                is_limited: "한도",
                payment_range: "50,000 - 300,000 CNY",
                price: "270,042.63 CNY",
                button_text: "Limited",
                button_url: "/wallet_verification",
                button_class: "btn_limited"
            }, {
                first_char: "C",
                name: "Cuhai8888",
                isVarified: false,
                order_count: "106",
                order_text: "주문",
                percentage: "98.1",
                status: "완료",
                availability: "사용가능",
                payment: "1.65908675 BTC",
                is_limited: "한도",
                payment_range: "50,000 - 300,000 CNY",
                price: "270,042.63 CNY",
                button_text: "Buy BTC",
                button_url: "/wallet_verification",
                button_class: "btn_buy"
            }, {
                first_char: "D",
                name: "Duhai8888",
                isVarified: true,
                order_count: "106",
                order_text: "주문",
                percentage: "98.1",
                status: "완료",
                availability: "사용가능",
                payment: "1.65908675 BTC",
                is_limited: "한도",
                payment_range: "50,000 - 300,000 CNY",
                price: "270,042.63 CNY",
                button_text: "Buy BTC",
                button_url: "/wallet_verification",
                button_class: "btn_buy"
            }, {
                first_char: "E",
                name: "Euhai8888",
                isVarified: false,
                order_count: "106",
                order_text: "주문",
                percentage: "98.1",
                status: "완료",
                availability: "사용가능",
                payment: "1.65908675 BTC",
                is_limited: "한도",
                payment_range: "50,000 - 300,000 CNY",
                price: "270,042.63 CNY",
                button_text: "Buy BTC",
                button_url: "/wallet_verification",
                button_class: "btn_buy"
            }, {
                first_char: "F",
                name: "Fuhai8888",
                isVarified: false,
                order_count: "106",
                order_text: "주문",
                percentage: "98.1",
                status: "완료",
                availability: "사용가능",
                payment: "1.65908675 BTC",
                is_limited: "한도",
                payment_range: "50,000 - 300,000 CNY",
                price: "270,042.63 CNY",
                button_text: "Buy BTC",
                button_url: "/wallet_verification",
                button_class: "btn_buy"
            }, {
                first_char: "G",
                name: "Guhai8888",
                isVarified: false,
                order_count: "106",
                order_text: "주문",
                percentage: "98.1",
                status: "완료",
                availability: "사용가능",
                payment: "1.65908675 BTC",
                is_limited: "한도",
                payment_range: "50,000 - 300,000 CNY",
                price: "270,042.63 CNY",
                button_text: "Buy BTC",
                button_url: "/wallet_verification",
                button_class: "btn_buy"
            }, {
                first_char: "H",
                name: "Huhai8888",
                isVarified: false,
                order_count: "106",
                order_text: "주문",
                percentage: "98.1",
                status: "완료",
                availability: "사용가능",
                payment: "1.65908675 BTC",
                is_limited: "한도",
                payment_range: "50,000 - 300,000 CNY",
                price: "270,042.63 CNY",
                button_text: "Buy BTC",
                button_url: "/wallet_verification",
                button_class: "btn_buy"
            }, {
                first_char: "I",
                name: "Iuhai8888",
                isVarified: false,
                order_count: "106",
                order_text: "주문",
                percentage: "98.1",
                status: "완료",
                availability: "사용가능",
                payment: "1.65908675 BTC",
                is_limited: "한도",
                payment_range: "50,000 - 300,000 CNY",
                price: "270,042.63 CNY",
                button_text: "Buy BTC",
                button_url: "/wallet_verification",
                button_class: "btn_buy"
            }, {
                first_char: "J",
                name: "Juhai8888",
                isVarified: false,
                order_count: "106",
                order_text: "주문",
                percentage: "98.1",
                status: "완료",
                availability: "사용가능",
                payment: "1.65908675 BTC",
                is_limited: "한도",
                payment_range: "50,000 - 300,000 CNY",
                price: "270,042.63 CNY",
                button_text: "Buy BTC",
                button_url: "/wallet_verification",
                button_class: "btn_buy"
            }, {
                first_char: "F",
                name: "Fuhai8888",
                isVarified: false,
                order_count: "106",
                order_text: "주문",
                percentage: "98.1",
                status: "완료",
                availability: "사용가능",
                payment: "1.65908675 BTC",
                is_limited: "한도",
                payment_range: "50,000 - 300,000 CNY",
                price: "270,042.63 CNY",
                button_text: "Buy BTC",
                button_url: "/wallet_verification",
                button_class: "btn_buy"
            }, {
                first_char: "L",
                name: "Luhai8888",
                isVarified: false,
                order_count: "106",
                order_text: "주문",
                percentage: "98.1",
                status: "완료",
                availability: "사용가능",
                payment: "1.65908675 BTC",
                is_limited: "한도",
                payment_range: "50,000 - 300,000 CNY",
                price: "270,042.63 CNY",
                button_text: "Buy BTC",
                button_url: "/wallet_verification",
                button_class: "btn_buy"
            }, {
                first_char: "M",
                name: "Muhai8888",
                isVarified: false,
                order_count: "106",
                order_text: "주문",
                percentage: "98.1",
                status: "완료",
                availability: "사용가능",
                payment: "1.65908675 BTC",
                is_limited: "한도",
                payment_range: "50,000 - 300,000 CNY",
                price: "270,042.63 CNY",
                button_text: "Buy BTC",
                button_url: "/wallet_verification",
                button_class: "btn_buy"
            }],
        'eth': [
            {
                first_char: "A",
                name: "Auhai8888",
                isVarified: true,
                order_count: "106",
                order_text: "주문",
                percentage: "98.1",
                status: "완료",
                availability: "사용가능",
                payment: "1.65908675 BTC",
                is_limited: "한도",
                payment_range: "50,000 - 300,000 CNY",
                price: "270,042.63 CNY",
                button_text: "Buy ETH",
                button_url: "/wallet_verification",
                button_class: "btn_buy"
            },
            {
                first_char: "B",
                name: "Buhai8888",
                isVarified: true,
                order_count: "106",
                order_text: "주문",
                percentage: "98.1",
                status: "완료",
                availability: "사용가능",
                payment: "1.65908675 BTC",
                is_limited: "한도",
                payment_range: "50,000 - 300,000 CNY",
                price: "270,042.63 CNY",
                button_text: "Limited",
                button_url: "/wallet_verification",
                button_class: "btn_limited"
            }, {
                first_char: "C",
                name: "Cuhai8888",
                isVarified: false,
                order_count: "106",
                order_text: "주문",
                percentage: "98.1",
                status: "완료",
                availability: "사용가능",
                payment: "1.65908675 BTC",
                is_limited: "한도",
                payment_range: "50,000 - 300,000 CNY",
                price: "270,042.63 CNY",
                button_text: "Buy ETH",
                button_url: "/wallet_verification",
                button_class: "btn_buy"
            }, {
                first_char: "D",
                name: "Duhai8888",
                isVarified: true,
                order_count: "106",
                order_text: "주문",
                percentage: "98.1",
                status: "완료",
                availability: "사용가능",
                payment: "1.65908675 BTC",
                is_limited: "한도",
                payment_range: "50,000 - 300,000 CNY",
                price: "270,042.63 CNY",
                button_text: "Buy ETH",
                button_url: "/wallet_verification",
                button_class: "btn_buy"
            }, {
                first_char: "E",
                name: "Euhai8888",
                isVarified: false,
                order_count: "106",
                order_text: "주문",
                percentage: "98.1",
                status: "완료",
                availability: "사용가능",
                payment: "1.65908675 BTC",
                is_limited: "한도",
                payment_range: "50,000 - 300,000 CNY",
                price: "270,042.63 CNY",
                button_text: "Buy ETH",
                button_url: "/wallet_verification",
                button_class: "btn_buy"
            }, {
                first_char: "F",
                name: "Fuhai8888",
                isVarified: false,
                order_count: "106",
                order_text: "주문",
                percentage: "98.1",
                status: "완료",
                availability: "사용가능",
                payment: "1.65908675 BTC",
                is_limited: "한도",
                payment_range: "50,000 - 300,000 CNY",
                price: "270,042.63 CNY",
                button_text: "Buy ETH",
                button_url: "/wallet_verification",
                button_class: "btn_buy"
            }, {
                first_char: "G",
                name: "Guhai8888",
                isVarified: false,
                order_count: "106",
                order_text: "주문",
                percentage: "98.1",
                status: "완료",
                availability: "사용가능",
                payment: "1.65908675 BTC",
                is_limited: "한도",
                payment_range: "50,000 - 300,000 CNY",
                price: "270,042.63 CNY",
                button_text: "Buy ETH",
                button_url: "/wallet_verification",
                button_class: "btn_buy"
            }, {
                first_char: "H",
                name: "Huhai8888",
                isVarified: false,
                order_count: "106",
                order_text: "주문",
                percentage: "98.1",
                status: "완료",
                availability: "사용가능",
                payment: "1.65908675 BTC",
                is_limited: "한도",
                payment_range: "50,000 - 300,000 CNY",
                price: "270,042.63 CNY",
                button_text: "Buy ETH",
                button_url: "/wallet_verification",
                button_class: "btn_buy"
            }, {
                first_char: "I",
                name: "Iuhai8888",
                isVarified: false,
                order_count: "106",
                order_text: "주문",
                percentage: "98.1",
                status: "완료",
                availability: "사용가능",
                payment: "1.65908675 BTC",
                is_limited: "한도",
                payment_range: "50,000 - 300,000 CNY",
                price: "270,042.63 CNY",
                button_text: "Buy ETH",
                button_url: "/wallet_verification",
                button_class: "btn_buy"
            }, {
                first_char: "J",
                name: "Juhai8888",
                isVarified: false,
                order_count: "106",
                order_text: "주문",
                percentage: "98.1",
                status: "완료",
                availability: "사용가능",
                payment: "1.65908675 BTC",
                is_limited: "한도",
                payment_range: "50,000 - 300,000 CNY",
                price: "270,042.63 CNY",
                button_text: "Buy ETH",
                button_url: "/wallet_verification",
                button_class: "btn_buy"
            }, {
                first_char: "F",
                name: "Fuhai8888",
                isVarified: false,
                order_count: "106",
                order_text: "주문",
                percentage: "98.1",
                status: "완료",
                availability: "사용가능",
                payment: "1.65908675 BTC",
                is_limited: "한도",
                payment_range: "50,000 - 300,000 CNY",
                price: "270,042.63 CNY",
                button_text: "Buy ETH",
                button_url: "/wallet_verification",
                button_class: "btn_buy"
            }, {
                first_char: "L",
                name: "Luhai8888",
                isVarified: false,
                order_count: "106",
                order_text: "주문",
                percentage: "98.1",
                status: "완료",
                availability: "사용가능",
                payment: "1.65908675 BTC",
                is_limited: "한도",
                payment_range: "50,000 - 300,000 CNY",
                price: "270,042.63 CNY",
                button_text: "Buy ETH",
                button_url: "/wallet_verification",
                button_class: "btn_buy"
            }, {
                first_char: "M",
                name: "Muhai8888",
                isVarified: false,
                order_count: "106",
                order_text: "주문",
                percentage: "98.1",
                status: "완료",
                availability: "사용가능",
                payment: "1.65908675 BTC",
                is_limited: "한도",
                payment_range: "50,000 - 300,000 CNY",
                price: "270,042.63 CNY",
                button_text: "Buy ETH",
                button_url: "/wallet_verification",
                button_class: "btn_buy"
            }],
        'usdt': [
            {
                first_char: "A",
                name: "Auhai8888",
                order_count: "106",
                order_text: "주문",
                percentage: "98.1",
                status: "완료",
                availability: "사용가능",
                payment: "1.65908675 BTC",
                is_limited: "한도",
                payment_range: "50,000 - 300,000 CNY",
                price: "270,042.63 CNY",
                button_text: "Buy USDT",
                button_url: "/wallet_verification",
                button_class: "btn_buy"
            },
            {
                first_char: "B",
                name: "Buhai8888",
                isVarified: true,
                order_count: "106",
                order_text: "주문",
                percentage: "98.1",
                status: "완료",
                availability: "사용가능",
                payment: "1.65908675 BTC",
                is_limited: "한도",
                payment_range: "50,000 - 300,000 CNY",
                price: "270,042.63 CNY",
                button_text: "Limited",
                button_url: "/wallet_verification",
                button_class: "btn_limited"
            }, {
                first_char: "C",
                name: "Cuhai8888",
                isVarified: true,
                order_count: "106",
                order_text: "주문",
                percentage: "98.1",
                status: "완료",
                availability: "사용가능",
                payment: "1.65908675 BTC",
                is_limited: "한도",
                payment_range: "50,000 - 300,000 CNY",
                price: "270,042.63 CNY",
                button_text: "Buy USDT",
                button_url: "/wallet_verification",
                button_class: "btn_buy"
            }, {
                first_char: "D",
                name: "Duhai8888",
                isVarified: false,
                order_count: "106",
                order_text: "주문",
                percentage: "98.1",
                status: "완료",
                availability: "사용가능",
                payment: "1.65908675 BTC",
                is_limited: "한도",
                payment_range: "50,000 - 300,000 CNY",
                price: "270,042.63 CNY",
                button_text: "Buy USDT",
                button_url: "/wallet_verification",
                button_class: "btn_buy"
            }, {
                first_char: "E",
                name: "Euhai8888",
                isVarified: true,
                order_count: "106",
                order_text: "주문",
                percentage: "98.1",
                status: "완료",
                availability: "사용가능",
                payment: "1.65908675 BTC",
                is_limited: "한도",
                payment_range: "50,000 - 300,000 CNY",
                price: "270,042.63 CNY",
                button_text: "Buy USDT",
                button_url: "/wallet_verification",
                button_class: "btn_buy"
            }, {
                first_char: "F",
                name: "Fuhai8888",
                isVarified: false,
                order_count: "106",
                order_text: "주문",
                percentage: "98.1",
                status: "완료",
                availability: "사용가능",
                payment: "1.65908675 BTC",
                is_limited: "한도",
                payment_range: "50,000 - 300,000 CNY",
                price: "270,042.63 CNY",
                button_text: "Buy USDT",
                button_url: "/wallet_verification",
                button_class: "btn_buy"
            }, {
                first_char: "G",
                name: "Guhai8888",
                isVarified: false,
                order_count: "106",
                order_text: "주문",
                percentage: "98.1",
                status: "완료",
                availability: "사용가능",
                payment: "1.65908675 BTC",
                is_limited: "한도",
                payment_range: "50,000 - 300,000 CNY",
                price: "270,042.63 CNY",
                button_text: "Buy USDT",
                button_url: "/wallet_verification",
                button_class: "btn_buy"
            }, {
                first_char: "H",
                name: "Huhai8888",
                isVarified: false,
                order_count: "106",
                order_text: "주문",
                percentage: "98.1",
                status: "완료",
                availability: "사용가능",
                payment: "1.65908675 BTC",
                is_limited: "한도",
                payment_range: "50,000 - 300,000 CNY",
                price: "270,042.63 CNY",
                button_text: "Buy USDT",
                button_url: "/wallet_verification",
                button_class: "btn_buy"
            }, {
                first_char: "I",
                name: "Iuhai8888",
                isVarified: false,
                order_count: "106",
                order_text: "주문",
                percentage: "98.1",
                status: "완료",
                availability: "사용가능",
                payment: "1.65908675 BTC",
                is_limited: "한도",
                payment_range: "50,000 - 300,000 CNY",
                price: "270,042.63 CNY",
                button_text: "Buy USDT",
                button_url: "/wallet_verification",
                button_class: "btn_buy"
            }, {
                first_char: "J",
                name: "Juhai8888",
                isVarified: false,
                order_count: "106",
                order_text: "주문",
                percentage: "98.1",
                status: "완료",
                availability: "사용가능",
                payment: "1.65908675 BTC",
                is_limited: "한도",
                payment_range: "50,000 - 300,000 CNY",
                price: "270,042.63 CNY",
                button_text: "Buy USDT",
                button_url: "/wallet_verification",
                button_class: "btn_buy"
            }, {
                first_char: "F",
                name: "Fuhai8888",
                isVarified: false,
                order_count: "106",
                order_text: "주문",
                percentage: "98.1",
                status: "완료",
                availability: "사용가능",
                payment: "1.65908675 BTC",
                is_limited: "한도",
                payment_range: "50,000 - 300,000 CNY",
                price: "270,042.63 CNY",
                button_text: "Buy USDT",
                button_url: "/wallet_verification",
                button_class: "btn_buy"
            }, {
                first_char: "L",
                name: "Luhai8888",
                isVarified: false,
                order_count: "106",
                order_text: "주문",
                percentage: "98.1",
                status: "완료",
                availability: "사용가능",
                payment: "1.65908675 BTC",
                is_limited: "한도",
                payment_range: "50,000 - 300,000 CNY",
                price: "270,042.63 CNY",
                button_text: "Buy USDT",
                button_url: "/wallet_verification",
                button_class: "btn_buy"
            }, {
                first_char: "M",
                name: "Muhai8888",
                isVarified: false,
                order_count: "106",
                order_text: "주문",
                percentage: "98.1",
                status: "완료",
                availability: "사용가능",
                payment: "1.65908675 BTC",
                is_limited: "한도",
                payment_range: "50,000 - 300,000 CNY",
                price: "270,042.63 CNY",
                button_text: "Buy USDT",
                button_url: "/wallet_verification",
                button_class: "btn_buy"
            }],
        'xrp': [
            {
                first_char: "A",
                name: "Auhai8888",
                isVarified: true,
                order_count: "106",
                order_text: "주문",
                percentage: "98.1",
                status: "완료",
                availability: "사용가능",
                payment: "1.65908675 BTC",
                is_limited: "한도",
                payment_range: "50,000 - 300,000 CNY",
                price: "270,042.63 CNY",
                button_text: "Buy XRP",
                button_url: "/wallet_verification",
                button_class: "btn_buy"
            },
            {
                first_char: "B",
                name: "Buhai8888",
                isVarified: true,
                order_count: "106",
                order_text: "주문",
                percentage: "98.1",
                status: "완료",
                availability: "사용가능",
                payment: "1.65908675 BTC",
                is_limited: "한도",
                payment_range: "50,000 - 300,000 CNY",
                price: "270,042.63 CNY",
                button_text: "Limited",
                button_url: "/wallet_verification",
                button_class: "btn_limited"
            }, {
                first_char: "C",
                name: "Cuhai8888",
                isVarified: false,
                order_count: "106",
                order_text: "주문",
                percentage: "98.1",
                status: "완료",
                availability: "사용가능",
                payment: "1.65908675 BTC",
                is_limited: "한도",
                payment_range: "50,000 - 300,000 CNY",
                price: "270,042.63 CNY",
                button_text: "Buy XRP",
                button_url: "/wallet_verification",
                button_class: "btn_buy"
            }, {
                first_char: "D",
                name: "Duhai8888",
                isVarified: true,
                order_count: "106",
                order_text: "주문",
                percentage: "98.1",
                status: "완료",
                availability: "사용가능",
                payment: "1.65908675 BTC",
                is_limited: "한도",
                payment_range: "50,000 - 300,000 CNY",
                price: "270,042.63 CNY",
                button_text: "Buy XRP",
                button_url: "/wallet_verification",
                button_class: "btn_buy"
            }, {
                first_char: "E",
                name: "Euhai8888",
                isVarified: false,
                order_count: "106",
                order_text: "주문",
                percentage: "98.1",
                status: "완료",
                availability: "사용가능",
                payment: "1.65908675 BTC",
                is_limited: "한도",
                payment_range: "50,000 - 300,000 CNY",
                price: "270,042.63 CNY",
                button_text: "Buy XRP",
                button_url: "/wallet_verification",
                button_class: "btn_buy"
            }, {
                first_char: "F",
                name: "Fuhai8888",
                isVarified: false,
                order_count: "106",
                order_text: "주문",
                percentage: "98.1",
                status: "완료",
                availability: "사용가능",
                payment: "1.65908675 BTC",
                is_limited: "한도",
                payment_range: "50,000 - 300,000 CNY",
                price: "270,042.63 CNY",
                button_text: "Buy XRP",
                button_url: "/wallet_verification",
                button_class: "btn_buy"
            }, {
                first_char: "G",
                name: "Guhai8888",
                isVarified: false,
                order_count: "106",
                order_text: "주문",
                percentage: "98.1",
                status: "완료",
                availability: "사용가능",
                payment: "1.65908675 BTC",
                is_limited: "한도",
                payment_range: "50,000 - 300,000 CNY",
                price: "270,042.63 CNY",
                button_text: "Buy XRP",
                button_url: "/wallet_verification",
                button_class: "btn_buy"
            }, {
                first_char: "H",
                name: "Huhai8888",
                isVarified: false,
                order_count: "106",
                order_text: "주문",
                percentage: "98.1",
                status: "완료",
                availability: "사용가능",
                payment: "1.65908675 BTC",
                is_limited: "한도",
                payment_range: "50,000 - 300,000 CNY",
                price: "270,042.63 CNY",
                button_text: "Buy XRP",
                button_url: "/wallet_verification",
                button_class: "btn_buy"
            }, {
                first_char: "I",
                name: "Iuhai8888",
                isVarified: false,
                order_count: "106",
                order_text: "주문",
                percentage: "98.1",
                status: "완료",
                availability: "사용가능",
                payment: "1.65908675 BTC",
                is_limited: "한도",
                payment_range: "50,000 - 300,000 CNY",
                price: "270,042.63 CNY",
                button_text: "Buy XRP",
                button_url: "/wallet_verification",
                button_class: "btn_buy"
            }, {
                first_char: "J",
                name: "Juhai8888",
                isVarified: false,
                order_count: "106",
                order_text: "주문",
                percentage: "98.1",
                status: "완료",
                availability: "사용가능",
                payment: "1.65908675 BTC",
                is_limited: "한도",
                payment_range: "50,000 - 300,000 CNY",
                price: "270,042.63 CNY",
                button_text: "Buy XRP",
                button_url: "/wallet_verification",
                button_class: "btn_buy"
            }, {
                first_char: "F",
                name: "Fuhai8888",
                isVarified: false,
                order_count: "106",
                order_text: "주문",
                percentage: "98.1",
                status: "완료",
                availability: "사용가능",
                payment: "1.65908675 BTC",
                is_limited: "한도",
                payment_range: "50,000 - 300,000 CNY",
                price: "270,042.63 CNY",
                button_text: "Buy XRP",
                button_url: "/wallet_verification",
                button_class: "btn_buy"
            }, {
                first_char: "L",
                name: "Luhai8888",
                isVarified: false,
                order_count: "106",
                order_text: "주문",
                percentage: "98.1",
                status: "완료",
                availability: "사용가능",
                payment: "1.65908675 BTC",
                is_limited: "한도",
                payment_range: "50,000 - 300,000 CNY",
                price: "270,042.63 CNY",
                button_text: "Buy XRP",
                button_url: "/wallet_verification",
                button_class: "btn_buy"
            }, {
                first_char: "M",
                name: "Muhai8888",
                isVarified: false,
                order_count: "106",
                order_text: "주문",
                percentage: "98.1",
                status: "완료",
                availability: "사용가능",
                payment: "1.65908675 BTC",
                is_limited: "한도",
                payment_range: "50,000 - 300,000 CNY",
                price: "270,042.63 CNY",
                button_text: "Buy XRP",
                button_url: "/wallet_verification",
                button_class: "btn_buy"
            }],
        'eos': [
            {
                first_char: "A",
                name: "Auhai8888",
                isVarified: true,
                order_count: "106",
                order_text: "주문",
                percentage: "98.1",
                status: "완료",
                availability: "사용가능",
                payment: "1.65908675 BTC",
                is_limited: "한도",
                payment_range: "50,000 - 300,000 CNY",
                price: "270,042.63 CNY",
                button_text: "Buy EOS",
                button_url: "/wallet_verification",
                button_class: "btn_buy"
            },
            {
                first_char: "B",
                name: "Buhai8888",
                isVarified: true,
                order_count: "106",
                order_text: "주문",
                percentage: "98.1",
                status: "완료",
                availability: "사용가능",
                payment: "1.65908675 BTC",
                is_limited: "한도",
                payment_range: "50,000 - 300,000 CNY",
                price: "270,042.63 CNY",
                button_text: "Limited",
                button_url: "/wallet_verification",
                button_class: "btn_limited"
            }, {
                first_char: "C",
                name: "Cuhai8888",
                isVarified: false,
                order_count: "106",
                order_text: "주문",
                percentage: "98.1",
                status: "완료",
                availability: "사용가능",
                payment: "1.65908675 BTC",
                is_limited: "한도",
                payment_range: "50,000 - 300,000 CNY",
                price: "270,042.63 CNY",
                button_text: "Buy EOS",
                button_url: "/wallet_verification",
                button_class: "btn_buy"
            }, {
                first_char: "D",
                name: "Duhai8888",
                isVarified: true,
                order_count: "106",
                order_text: "주문",
                percentage: "98.1",
                status: "완료",
                availability: "사용가능",
                payment: "1.65908675 BTC",
                is_limited: "한도",
                payment_range: "50,000 - 300,000 CNY",
                price: "270,042.63 CNY",
                button_text: "Buy EOS",
                button_url: "/wallet_verification",
                button_class: "btn_buy"
            }, {
                first_char: "E",
                name: "Euhai8888",
                isVarified: false,
                order_count: "106",
                order_text: "주문",
                percentage: "98.1",
                status: "완료",
                availability: "사용가능",
                payment: "1.65908675 BTC",
                is_limited: "한도",
                payment_range: "50,000 - 300,000 CNY",
                price: "270,042.63 CNY",
                button_text: "Buy EOS",
                button_url: "/wallet_verification",
                button_class: "btn_buy"
            }, {
                first_char: "F",
                name: "Fuhai8888",
                isVarified: false,
                order_count: "106",
                order_text: "주문",
                percentage: "98.1",
                status: "완료",
                availability: "사용가능",
                payment: "1.65908675 BTC",
                is_limited: "한도",
                payment_range: "50,000 - 300,000 CNY",
                price: "270,042.63 CNY",
                button_text: "Buy EOS",
                button_url: "/wallet_verification",
                button_class: "btn_buy"
            }, {
                first_char: "G",
                name: "Guhai8888",
                isVarified: false,
                order_count: "106",
                order_text: "주문",
                percentage: "98.1",
                status: "완료",
                availability: "사용가능",
                payment: "1.65908675 BTC",
                is_limited: "한도",
                payment_range: "50,000 - 300,000 CNY",
                price: "270,042.63 CNY",
                button_text: "Buy EOS",
                button_url: "/wallet_verification",
                button_class: "btn_buy"
            }, {
                first_char: "H",
                name: "Huhai8888",
                isVarified: false,
                order_count: "106",
                order_text: "주문",
                percentage: "98.1",
                status: "완료",
                availability: "사용가능",
                payment: "1.65908675 BTC",
                is_limited: "한도",
                payment_range: "50,000 - 300,000 CNY",
                price: "270,042.63 CNY",
                button_text: "Buy EOS",
                button_url: "/wallet_verification",
                button_class: "btn_buy"
            }, {
                first_char: "I",
                name: "Iuhai8888",
                isVarified: false,
                order_count: "106",
                order_text: "주문",
                percentage: "98.1",
                status: "완료",
                availability: "사용가능",
                payment: "1.65908675 BTC",
                is_limited: "한도",
                payment_range: "50,000 - 300,000 CNY",
                price: "270,042.63 CNY",
                button_text: "Buy EOS",
                button_url: "/wallet_verification",
                button_class: "btn_buy"
            }, {
                first_char: "J",
                name: "Juhai8888",
                isVarified: false,
                order_count: "106",
                order_text: "주문",
                percentage: "98.1",
                status: "완료",
                availability: "사용가능",
                payment: "1.65908675 BTC",
                is_limited: "한도",
                payment_range: "50,000 - 300,000 CNY",
                price: "270,042.63 CNY",
                button_text: "Buy EOS",
                button_url: "/wallet_verification",
                button_class: "btn_buy"
            }, {
                first_char: "F",
                name: "Fuhai8888",
                isVarified: false,
                order_count: "106",
                order_text: "주문",
                percentage: "98.1",
                status: "완료",
                availability: "사용가능",
                payment: "1.65908675 BTC",
                is_limited: "한도",
                payment_range: "50,000 - 300,000 CNY",
                price: "270,042.63 CNY",
                button_text: "Buy EOS",
                button_url: "/wallet_verification",
                button_class: "btn_buy"
            }, {
                first_char: "L",
                name: "Luhai8888",
                isVarified: false,
                order_count: "106",
                order_text: "주문",
                percentage: "98.1",
                status: "완료",
                availability: "사용가능",
                payment: "1.65908675 BTC",
                is_limited: "한도",
                payment_range: "50,000 - 300,000 CNY",
                price: "270,042.63 CNY",
                button_text: "Buy EOS",
                button_url: "/wallet_verification",
                button_class: "btn_buy"
            }, {
                first_char: "M",
                name: "Muhai8888",
                isVarified: false,
                order_count: "106",
                order_text: "주문",
                percentage: "98.1",
                status: "완료",
                availability: "사용가능",
                payment: "1.65908675 BTC",
                is_limited: "한도",
                payment_range: "50,000 - 300,000 CNY",
                price: "270,042.63 CNY",
                button_text: "Buy EOS",
                button_url: "/wallet_verification",
                button_class: "btn_buy"
            }]
    },
    sell_data: {
        'btc': [
            {
                first_char: "A",
                name: "Auhai8888",
                isVarified: true,
                order_count: "106",
                order_text: "주문",
                percentage: "98.1",
                status: "완료",
                availability: "사용가능",
                payment: "1.65908675 BTC",
                is_limited: "한도",
                payment_range: "50,000 - 300,000 CNY",
                price: "270,042.63 CNY",
                button_text: "Sell BTC",
                button_url: "/wallet_verification",
                button_class: "btn_buy"
            },
            {
                first_char: "B",
                name: "Buhai8888",
                isVarified: true,
                order_count: "106",
                order_text: "주문",
                percentage: "98.1",
                status: "완료",
                availability: "사용가능",
                payment: "1.65908675 BTC",
                is_limited: "한도",
                payment_range: "50,000 - 300,000 CNY",
                price: "270,042.63 CNY",
                button_text: "Limited",
                button_url: "/wallet_verification",
                button_class: "btn_limited"
            }, {
                first_char: "C",
                name: "Cuhai8888",
                isVarified: false,
                order_count: "106",
                order_text: "주문",
                percentage: "98.1",
                status: "완료",
                availability: "사용가능",
                payment: "1.65908675 BTC",
                is_limited: "한도",
                payment_range: "50,000 - 300,000 CNY",
                price: "270,042.63 CNY",
                button_text: "Sell BTC",
                button_url: "/wallet_verification",
                button_class: "btn_buy"
            }, {
                first_char: "D",
                name: "Duhai8888",
                isVarified: true,
                order_count: "106",
                order_text: "주문",
                percentage: "98.1",
                status: "완료",
                availability: "사용가능",
                payment: "1.65908675 BTC",
                is_limited: "한도",
                payment_range: "50,000 - 300,000 CNY",
                price: "270,042.63 CNY",
                button_text: "Sell BTC",
                button_url: "/wallet_verification",
                button_class: "btn_buy"
            }, {
                first_char: "E",
                name: "Euhai8888",
                isVarified: false,
                order_count: "106",
                order_text: "주문",
                percentage: "98.1",
                status: "완료",
                availability: "사용가능",
                payment: "1.65908675 BTC",
                is_limited: "한도",
                payment_range: "50,000 - 300,000 CNY",
                price: "270,042.63 CNY",
                button_text: "Sell BTC",
                button_url: "/wallet_verification",
                button_class: "btn_buy"
            }, {
                first_char: "F",
                name: "Fuhai8888",
                isVarified: false,
                order_count: "106",
                order_text: "주문",
                percentage: "98.1",
                status: "완료",
                availability: "사용가능",
                payment: "1.65908675 BTC",
                is_limited: "한도",
                payment_range: "50,000 - 300,000 CNY",
                price: "270,042.63 CNY",
                button_text: "Sell BTC",
                button_url: "/wallet_verification",
                button_class: "btn_buy"
            }, {
                first_char: "G",
                name: "Guhai8888",
                isVarified: false,
                order_count: "106",
                order_text: "주문",
                percentage: "98.1",
                status: "완료",
                availability: "사용가능",
                payment: "1.65908675 BTC",
                is_limited: "한도",
                payment_range: "50,000 - 300,000 CNY",
                price: "270,042.63 CNY",
                button_text: "Sell BTC",
                button_url: "/wallet_verification",
                button_class: "btn_buy"
            }, {
                first_char: "H",
                name: "Huhai8888",
                isVarified: false,
                order_count: "106",
                order_text: "주문",
                percentage: "98.1",
                status: "완료",
                availability: "사용가능",
                payment: "1.65908675 BTC",
                is_limited: "한도",
                payment_range: "50,000 - 300,000 CNY",
                price: "270,042.63 CNY",
                button_text: "Sell BTC",
                button_url: "/wallet_verification",
                button_class: "btn_buy"
            }, {
                first_char: "I",
                name: "Iuhai8888",
                isVarified: false,
                order_count: "106",
                order_text: "주문",
                percentage: "98.1",
                status: "완료",
                availability: "사용가능",
                payment: "1.65908675 BTC",
                is_limited: "한도",
                payment_range: "50,000 - 300,000 CNY",
                price: "270,042.63 CNY",
                button_text: "Sell BTC",
                button_url: "/wallet_verification",
                button_class: "btn_buy"
            }, {
                first_char: "J",
                name: "Juhai8888",
                isVarified: false,
                order_count: "106",
                order_text: "주문",
                percentage: "98.1",
                status: "완료",
                availability: "사용가능",
                payment: "1.65908675 BTC",
                is_limited: "한도",
                payment_range: "50,000 - 300,000 CNY",
                price: "270,042.63 CNY",
                button_text: "Sell BTC",
                button_url: "/wallet_verification",
                button_class: "btn_buy"
            }, {
                first_char: "F",
                name: "Fuhai8888",
                isVarified: false,
                order_count: "106",
                order_text: "주문",
                percentage: "98.1",
                status: "완료",
                availability: "사용가능",
                payment: "1.65908675 BTC",
                is_limited: "한도",
                payment_range: "50,000 - 300,000 CNY",
                price: "270,042.63 CNY",
                button_text: "Sell BTC",
                button_url: "/wallet_verification",
                button_class: "btn_buy"
            }, {
                first_char: "L",
                name: "Luhai8888",
                isVarified: false,
                order_count: "106",
                order_text: "주문",
                percentage: "98.1",
                status: "완료",
                availability: "사용가능",
                payment: "1.65908675 BTC",
                is_limited: "한도",
                payment_range: "50,000 - 300,000 CNY",
                price: "270,042.63 CNY",
                button_text: "Sell BTC",
                button_url: "/wallet_verification",
                button_class: "btn_buy"
            }, {
                first_char: "M",
                name: "Muhai8888",
                isVarified: false,
                order_count: "106",
                order_text: "주문",
                percentage: "98.1",
                status: "완료",
                availability: "사용가능",
                payment: "1.65908675 BTC",
                is_limited: "한도",
                payment_range: "50,000 - 300,000 CNY",
                price: "270,042.63 CNY",
                button_text: "Sell BTC",
                button_url: "/wallet_verification",
                button_class: "btn_buy"
            }],
        'eth': [
            {
                first_char: "A",
                name: "Auhai8888",
                isVarified: true,
                order_count: "106",
                order_text: "주문",
                percentage: "98.1",
                status: "완료",
                availability: "사용가능",
                payment: "1.65908675 BTC",
                is_limited: "한도",
                payment_range: "50,000 - 300,000 CNY",
                price: "270,042.63 CNY",
                button_text: "Sell ETH",
                button_url: "/wallet_verification",
                button_class: "btn_buy"
            },
            {
                first_char: "B",
                name: "Buhai8888",
                isVarified: true,
                order_count: "106",
                order_text: "주문",
                percentage: "98.1",
                status: "완료",
                availability: "사용가능",
                payment: "1.65908675 BTC",
                is_limited: "한도",
                payment_range: "50,000 - 300,000 CNY",
                price: "270,042.63 CNY",
                button_text: "Limited",
                button_url: "/wallet_verification",
                button_class: "btn_limited"
            }, {
                first_char: "C",
                name: "Cuhai8888",
                isVarified: false,
                order_count: "106",
                order_text: "주문",
                percentage: "98.1",
                status: "완료",
                availability: "사용가능",
                payment: "1.65908675 BTC",
                is_limited: "한도",
                payment_range: "50,000 - 300,000 CNY",
                price: "270,042.63 CNY",
                button_text: "Sell ETH",
                button_url: "/wallet_verification",
                button_class: "btn_buy"
            }, {
                first_char: "D",
                name: "Duhai8888",
                isVarified: true,
                order_count: "106",
                order_text: "주문",
                percentage: "98.1",
                status: "완료",
                availability: "사용가능",
                payment: "1.65908675 BTC",
                is_limited: "한도",
                payment_range: "50,000 - 300,000 CNY",
                price: "270,042.63 CNY",
                button_text: "Sell ETH",
                button_url: "/wallet_verification",
                button_class: "btn_buy"
            }, {
                first_char: "E",
                name: "Euhai8888",
                isVarified: false,
                order_count: "106",
                order_text: "주문",
                percentage: "98.1",
                status: "완료",
                availability: "사용가능",
                payment: "1.65908675 BTC",
                is_limited: "한도",
                payment_range: "50,000 - 300,000 CNY",
                price: "270,042.63 CNY",
                button_text: "Sell ETH",
                button_url: "/wallet_verification",
                button_class: "btn_buy"
            }, {
                first_char: "F",
                name: "Fuhai8888",
                isVarified: false,
                order_count: "106",
                order_text: "주문",
                percentage: "98.1",
                status: "완료",
                availability: "사용가능",
                payment: "1.65908675 BTC",
                is_limited: "한도",
                payment_range: "50,000 - 300,000 CNY",
                price: "270,042.63 CNY",
                button_text: "Sell ETH",
                button_url: "/wallet_verification",
                button_class: "btn_buy"
            }, {
                first_char: "G",
                name: "Guhai8888",
                isVarified: false,
                order_count: "106",
                order_text: "주문",
                percentage: "98.1",
                status: "완료",
                availability: "사용가능",
                payment: "1.65908675 BTC",
                is_limited: "한도",
                payment_range: "50,000 - 300,000 CNY",
                price: "270,042.63 CNY",
                button_text: "Sell ETH",
                button_url: "/wallet_verification",
                button_class: "btn_buy"
            }, {
                first_char: "H",
                name: "Huhai8888",
                isVarified: false,
                order_count: "106",
                order_text: "주문",
                percentage: "98.1",
                status: "완료",
                availability: "사용가능",
                payment: "1.65908675 BTC",
                is_limited: "한도",
                payment_range: "50,000 - 300,000 CNY",
                price: "270,042.63 CNY",
                button_text: "Sell ETH",
                button_url: "/wallet_verification",
                button_class: "btn_buy"
            }, {
                first_char: "I",
                name: "Iuhai8888",
                isVarified: false,
                order_count: "106",
                order_text: "주문",
                percentage: "98.1",
                status: "완료",
                availability: "사용가능",
                payment: "1.65908675 BTC",
                is_limited: "한도",
                payment_range: "50,000 - 300,000 CNY",
                price: "270,042.63 CNY",
                button_text: "Sell ETH",
                button_url: "/wallet_verification",
                button_class: "btn_buy"
            }, {
                first_char: "J",
                name: "Juhai8888",
                isVarified: false,
                order_count: "106",
                order_text: "주문",
                percentage: "98.1",
                status: "완료",
                availability: "사용가능",
                payment: "1.65908675 BTC",
                is_limited: "한도",
                payment_range: "50,000 - 300,000 CNY",
                price: "270,042.63 CNY",
                button_text: "Sell ETH",
                button_url: "/wallet_verification",
                button_class: "btn_buy"
            }, {
                first_char: "F",
                name: "Fuhai8888",
                isVarified: false,
                order_count: "106",
                order_text: "주문",
                percentage: "98.1",
                status: "완료",
                availability: "사용가능",
                payment: "1.65908675 BTC",
                is_limited: "한도",
                payment_range: "50,000 - 300,000 CNY",
                price: "270,042.63 CNY",
                button_text: "Sell ETH",
                button_url: "/wallet_verification",
                button_class: "btn_buy"
            }, {
                first_char: "L",
                name: "Luhai8888",
                isVarified: false,
                order_count: "106",
                order_text: "주문",
                percentage: "98.1",
                status: "완료",
                availability: "사용가능",
                payment: "1.65908675 BTC",
                is_limited: "한도",
                payment_range: "50,000 - 300,000 CNY",
                price: "270,042.63 CNY",
                button_text: "Sell ETH",
                button_url: "/wallet_verification",
                button_class: "btn_buy"
            }, {
                first_char: "M",
                name: "Muhai8888",
                isVarified: false,
                order_count: "106",
                order_text: "주문",
                percentage: "98.1",
                status: "완료",
                availability: "사용가능",
                payment: "1.65908675 BTC",
                is_limited: "한도",
                payment_range: "50,000 - 300,000 CNY",
                price: "270,042.63 CNY",
                button_text: "Sell ETH",
                button_url: "/wallet_verification",
                button_class: "btn_buy"
            }],
        'usdt': [
            {
                first_char: "A",
                name: "Auhai8888",
                order_count: "106",
                order_text: "주문",
                percentage: "98.1",
                status: "완료",
                availability: "사용가능",
                payment: "1.65908675 BTC",
                is_limited: "한도",
                payment_range: "50,000 - 300,000 CNY",
                price: "270,042.63 CNY",
                button_text: "Sell USDT",
                button_url: "/wallet_verification",
                button_class: "btn_buy"
            },
            {
                first_char: "B",
                name: "Buhai8888",
                isVarified: true,
                order_count: "106",
                order_text: "주문",
                percentage: "98.1",
                status: "완료",
                availability: "사용가능",
                payment: "1.65908675 BTC",
                is_limited: "한도",
                payment_range: "50,000 - 300,000 CNY",
                price: "270,042.63 CNY",
                button_text: "Limited",
                button_url: "/wallet_verification",
                button_class: "btn_limited"
            }, {
                first_char: "C",
                name: "Cuhai8888",
                isVarified: true,
                order_count: "106",
                order_text: "주문",
                percentage: "98.1",
                status: "완료",
                availability: "사용가능",
                payment: "1.65908675 BTC",
                is_limited: "한도",
                payment_range: "50,000 - 300,000 CNY",
                price: "270,042.63 CNY",
                button_text: "Sell USDT",
                button_url: "/wallet_verification",
                button_class: "btn_buy"
            }, {
                first_char: "D",
                name: "Duhai8888",
                isVarified: false,
                order_count: "106",
                order_text: "주문",
                percentage: "98.1",
                status: "완료",
                availability: "사용가능",
                payment: "1.65908675 BTC",
                is_limited: "한도",
                payment_range: "50,000 - 300,000 CNY",
                price: "270,042.63 CNY",
                button_text: "Sell USDT",
                button_url: "/wallet_verification",
                button_class: "btn_buy"
            }, {
                first_char: "E",
                name: "Euhai8888",
                isVarified: true,
                order_count: "106",
                order_text: "주문",
                percentage: "98.1",
                status: "완료",
                availability: "사용가능",
                payment: "1.65908675 BTC",
                is_limited: "한도",
                payment_range: "50,000 - 300,000 CNY",
                price: "270,042.63 CNY",
                button_text: "Sell USDT",
                button_url: "/wallet_verification",
                button_class: "btn_buy"
            }, {
                first_char: "F",
                name: "Fuhai8888",
                isVarified: false,
                order_count: "106",
                order_text: "주문",
                percentage: "98.1",
                status: "완료",
                availability: "사용가능",
                payment: "1.65908675 BTC",
                is_limited: "한도",
                payment_range: "50,000 - 300,000 CNY",
                price: "270,042.63 CNY",
                button_text: "Sell USDT",
                button_url: "/wallet_verification",
                button_class: "btn_buy"
            }, {
                first_char: "G",
                name: "Guhai8888",
                isVarified: false,
                order_count: "106",
                order_text: "주문",
                percentage: "98.1",
                status: "완료",
                availability: "사용가능",
                payment: "1.65908675 BTC",
                is_limited: "한도",
                payment_range: "50,000 - 300,000 CNY",
                price: "270,042.63 CNY",
                button_text: "Sell USDT",
                button_url: "/wallet_verification",
                button_class: "btn_buy"
            }, {
                first_char: "H",
                name: "Huhai8888",
                isVarified: false,
                order_count: "106",
                order_text: "주문",
                percentage: "98.1",
                status: "완료",
                availability: "사용가능",
                payment: "1.65908675 BTC",
                is_limited: "한도",
                payment_range: "50,000 - 300,000 CNY",
                price: "270,042.63 CNY",
                button_text: "Sell USDT",
                button_url: "/wallet_verification",
                button_class: "btn_buy"
            }, {
                first_char: "I",
                name: "Iuhai8888",
                isVarified: false,
                order_count: "106",
                order_text: "주문",
                percentage: "98.1",
                status: "완료",
                availability: "사용가능",
                payment: "1.65908675 BTC",
                is_limited: "한도",
                payment_range: "50,000 - 300,000 CNY",
                price: "270,042.63 CNY",
                button_text: "Sell USDT",
                button_url: "/wallet_verification",
                button_class: "btn_buy"
            }, {
                first_char: "J",
                name: "Juhai8888",
                isVarified: false,
                order_count: "106",
                order_text: "주문",
                percentage: "98.1",
                status: "완료",
                availability: "사용가능",
                payment: "1.65908675 BTC",
                is_limited: "한도",
                payment_range: "50,000 - 300,000 CNY",
                price: "270,042.63 CNY",
                button_text: "Sell USDT",
                button_url: "/wallet_verification",
                button_class: "btn_buy"
            }, {
                first_char: "F",
                name: "Fuhai8888",
                isVarified: false,
                order_count: "106",
                order_text: "주문",
                percentage: "98.1",
                status: "완료",
                availability: "사용가능",
                payment: "1.65908675 BTC",
                is_limited: "한도",
                payment_range: "50,000 - 300,000 CNY",
                price: "270,042.63 CNY",
                button_text: "Sell USDT",
                button_url: "/wallet_verification",
                button_class: "btn_buy"
            }, {
                first_char: "L",
                name: "Luhai8888",
                isVarified: false,
                order_count: "106",
                order_text: "주문",
                percentage: "98.1",
                status: "완료",
                availability: "사용가능",
                payment: "1.65908675 BTC",
                is_limited: "한도",
                payment_range: "50,000 - 300,000 CNY",
                price: "270,042.63 CNY",
                button_text: "Sell USDT",
                button_url: "/wallet_verification",
                button_class: "btn_buy"
            }, {
                first_char: "M",
                name: "Muhai8888",
                isVarified: false,
                order_count: "106",
                order_text: "주문",
                percentage: "98.1",
                status: "완료",
                availability: "사용가능",
                payment: "1.65908675 BTC",
                is_limited: "한도",
                payment_range: "50,000 - 300,000 CNY",
                price: "270,042.63 CNY",
                button_text: "Sell USDT",
                button_url: "/wallet_verification",
                button_class: "btn_buy"
            }],
        'xrp': [
            {
                first_char: "A",
                name: "Auhai8888",
                isVarified: true,
                order_count: "106",
                order_text: "주문",
                percentage: "98.1",
                status: "완료",
                availability: "사용가능",
                payment: "1.65908675 BTC",
                is_limited: "한도",
                payment_range: "50,000 - 300,000 CNY",
                price: "270,042.63 CNY",
                button_text: "Sell XRP",
                button_url: "/wallet_verification",
                button_class: "btn_buy"
            },
            {
                first_char: "B",
                name: "Buhai8888",
                isVarified: true,
                order_count: "106",
                order_text: "주문",
                percentage: "98.1",
                status: "완료",
                availability: "사용가능",
                payment: "1.65908675 BTC",
                is_limited: "한도",
                payment_range: "50,000 - 300,000 CNY",
                price: "270,042.63 CNY",
                button_text: "Limited",
                button_url: "/wallet_verification",
                button_class: "btn_limited"
            }, {
                first_char: "C",
                name: "Cuhai8888",
                isVarified: false,
                order_count: "106",
                order_text: "주문",
                percentage: "98.1",
                status: "완료",
                availability: "사용가능",
                payment: "1.65908675 BTC",
                is_limited: "한도",
                payment_range: "50,000 - 300,000 CNY",
                price: "270,042.63 CNY",
                button_text: "Sell XRP",
                button_url: "/wallet_verification",
                button_class: "btn_buy"
            }, {
                first_char: "D",
                name: "Duhai8888",
                isVarified: true,
                order_count: "106",
                order_text: "주문",
                percentage: "98.1",
                status: "완료",
                availability: "사용가능",
                payment: "1.65908675 BTC",
                is_limited: "한도",
                payment_range: "50,000 - 300,000 CNY",
                price: "270,042.63 CNY",
                button_text: "Sell XRP",
                button_url: "/wallet_verification",
                button_class: "btn_buy"
            }, {
                first_char: "E",
                name: "Euhai8888",
                isVarified: false,
                order_count: "106",
                order_text: "주문",
                percentage: "98.1",
                status: "완료",
                availability: "사용가능",
                payment: "1.65908675 BTC",
                is_limited: "한도",
                payment_range: "50,000 - 300,000 CNY",
                price: "270,042.63 CNY",
                button_text: "Sell XRP",
                button_url: "/wallet_verification",
                button_class: "btn_buy"
            }, {
                first_char: "F",
                name: "Fuhai8888",
                isVarified: false,
                order_count: "106",
                order_text: "주문",
                percentage: "98.1",
                status: "완료",
                availability: "사용가능",
                payment: "1.65908675 BTC",
                is_limited: "한도",
                payment_range: "50,000 - 300,000 CNY",
                price: "270,042.63 CNY",
                button_text: "Sell XRP",
                button_url: "/wallet_verification",
                button_class: "btn_buy"
            }, {
                first_char: "G",
                name: "Guhai8888",
                isVarified: false,
                order_count: "106",
                order_text: "주문",
                percentage: "98.1",
                status: "완료",
                availability: "사용가능",
                payment: "1.65908675 BTC",
                is_limited: "한도",
                payment_range: "50,000 - 300,000 CNY",
                price: "270,042.63 CNY",
                button_text: "Sell XRP",
                button_url: "/wallet_verification",
                button_class: "btn_buy"
            }, {
                first_char: "H",
                name: "Huhai8888",
                isVarified: false,
                order_count: "106",
                order_text: "주문",
                percentage: "98.1",
                status: "완료",
                availability: "사용가능",
                payment: "1.65908675 BTC",
                is_limited: "한도",
                payment_range: "50,000 - 300,000 CNY",
                price: "270,042.63 CNY",
                button_text: "Sell XRP",
                button_url: "/wallet_verification",
                button_class: "btn_buy"
            }, {
                first_char: "I",
                name: "Iuhai8888",
                isVarified: false,
                order_count: "106",
                order_text: "주문",
                percentage: "98.1",
                status: "완료",
                availability: "사용가능",
                payment: "1.65908675 BTC",
                is_limited: "한도",
                payment_range: "50,000 - 300,000 CNY",
                price: "270,042.63 CNY",
                button_text: "Sell XRP",
                button_url: "/wallet_verification",
                button_class: "btn_buy"
            }, {
                first_char: "J",
                name: "Juhai8888",
                isVarified: false,
                order_count: "106",
                order_text: "주문",
                percentage: "98.1",
                status: "완료",
                availability: "사용가능",
                payment: "1.65908675 BTC",
                is_limited: "한도",
                payment_range: "50,000 - 300,000 CNY",
                price: "270,042.63 CNY",
                button_text: "Sell XRP",
                button_url: "/wallet_verification",
                button_class: "btn_buy"
            }, {
                first_char: "F",
                name: "Fuhai8888",
                isVarified: false,
                order_count: "106",
                order_text: "주문",
                percentage: "98.1",
                status: "완료",
                availability: "사용가능",
                payment: "1.65908675 BTC",
                is_limited: "한도",
                payment_range: "50,000 - 300,000 CNY",
                price: "270,042.63 CNY",
                button_text: "Sell XRP",
                button_url: "/wallet_verification",
                button_class: "btn_buy"
            }, {
                first_char: "L",
                name: "Luhai8888",
                isVarified: false,
                order_count: "106",
                order_text: "주문",
                percentage: "98.1",
                status: "완료",
                availability: "사용가능",
                payment: "1.65908675 BTC",
                is_limited: "한도",
                payment_range: "50,000 - 300,000 CNY",
                price: "270,042.63 CNY",
                button_text: "Sell XRP",
                button_url: "/wallet_verification",
                button_class: "btn_buy"
            }, {
                first_char: "M",
                name: "Muhai8888",
                isVarified: false,
                order_count: "106",
                order_text: "주문",
                percentage: "98.1",
                status: "완료",
                availability: "사용가능",
                payment: "1.65908675 BTC",
                is_limited: "한도",
                payment_range: "50,000 - 300,000 CNY",
                price: "270,042.63 CNY",
                button_text: "Sell XRP",
                button_url: "/wallet_verification",
                button_class: "btn_buy"
            }],
        'eos': [
            {
                first_char: "A",
                name: "Auhai8888",
                isVarified: true,
                order_count: "106",
                order_text: "주문",
                percentage: "98.1",
                status: "완료",
                availability: "사용가능",
                payment: "1.65908675 BTC",
                is_limited: "한도",
                payment_range: "50,000 - 300,000 CNY",
                price: "270,042.63 CNY",
                button_text: "Sell EOS",
                button_url: "/wallet_verification",
                button_class: "btn_buy"
            },
            {
                first_char: "B",
                name: "Buhai8888",
                isVarified: true,
                order_count: "106",
                order_text: "주문",
                percentage: "98.1",
                status: "완료",
                availability: "사용가능",
                payment: "1.65908675 BTC",
                is_limited: "한도",
                payment_range: "50,000 - 300,000 CNY",
                price: "270,042.63 CNY",
                button_text: "Limited",
                button_url: "/wallet_verification",
                button_class: "btn_limited"
            }, {
                first_char: "C",
                name: "Cuhai8888",
                isVarified: false,
                order_count: "106",
                order_text: "주문",
                percentage: "98.1",
                status: "완료",
                availability: "사용가능",
                payment: "1.65908675 BTC",
                is_limited: "한도",
                payment_range: "50,000 - 300,000 CNY",
                price: "270,042.63 CNY",
                button_text: "Sell EOS",
                button_url: "/wallet_verification",
                button_class: "btn_buy"
            }, {
                first_char: "D",
                name: "Duhai8888",
                isVarified: true,
                order_count: "106",
                order_text: "주문",
                percentage: "98.1",
                status: "완료",
                availability: "사용가능",
                payment: "1.65908675 BTC",
                is_limited: "한도",
                payment_range: "50,000 - 300,000 CNY",
                price: "270,042.63 CNY",
                button_text: "Sell EOS",
                button_url: "/wallet_verification",
                button_class: "btn_buy"
            }, {
                first_char: "E",
                name: "Euhai8888",
                isVarified: false,
                order_count: "106",
                order_text: "주문",
                percentage: "98.1",
                status: "완료",
                availability: "사용가능",
                payment: "1.65908675 BTC",
                is_limited: "한도",
                payment_range: "50,000 - 300,000 CNY",
                price: "270,042.63 CNY",
                button_text: "Sell EOS",
                button_url: "/wallet_verification",
                button_class: "btn_buy"
            }, {
                first_char: "F",
                name: "Fuhai8888",
                isVarified: false,
                order_count: "106",
                order_text: "주문",
                percentage: "98.1",
                status: "완료",
                availability: "사용가능",
                payment: "1.65908675 BTC",
                is_limited: "한도",
                payment_range: "50,000 - 300,000 CNY",
                price: "270,042.63 CNY",
                button_text: "Sell EOS",
                button_url: "/wallet_verification",
                button_class: "btn_buy"
            }, {
                first_char: "G",
                name: "Guhai8888",
                isVarified: false,
                order_count: "106",
                order_text: "주문",
                percentage: "98.1",
                status: "완료",
                availability: "사용가능",
                payment: "1.65908675 BTC",
                is_limited: "한도",
                payment_range: "50,000 - 300,000 CNY",
                price: "270,042.63 CNY",
                button_text: "Sell EOS",
                button_url: "/wallet_verification",
                button_class: "btn_buy"
            }, {
                first_char: "H",
                name: "Huhai8888",
                isVarified: false,
                order_count: "106",
                order_text: "주문",
                percentage: "98.1",
                status: "완료",
                availability: "사용가능",
                payment: "1.65908675 BTC",
                is_limited: "한도",
                payment_range: "50,000 - 300,000 CNY",
                price: "270,042.63 CNY",
                button_text: "Sell EOS",
                button_url: "/wallet_verification",
                button_class: "btn_buy"
            }, {
                first_char: "I",
                name: "Iuhai8888",
                isVarified: false,
                order_count: "106",
                order_text: "주문",
                percentage: "98.1",
                status: "완료",
                availability: "사용가능",
                payment: "1.65908675 BTC",
                is_limited: "한도",
                payment_range: "50,000 - 300,000 CNY",
                price: "270,042.63 CNY",
                button_text: "Sell EOS",
                button_url: "/wallet_verification",
                button_class: "btn_buy"
            }, {
                first_char: "J",
                name: "Juhai8888",
                isVarified: false,
                order_count: "106",
                order_text: "주문",
                percentage: "98.1",
                status: "완료",
                availability: "사용가능",
                payment: "1.65908675 BTC",
                is_limited: "한도",
                payment_range: "50,000 - 300,000 CNY",
                price: "270,042.63 CNY",
                button_text: "Sell EOS",
                button_url: "/wallet_verification",
                button_class: "btn_buy"
            }, {
                first_char: "F",
                name: "Fuhai8888",
                isVarified: false,
                order_count: "106",
                order_text: "주문",
                percentage: "98.1",
                status: "완료",
                availability: "사용가능",
                payment: "1.65908675 BTC",
                is_limited: "한도",
                payment_range: "50,000 - 300,000 CNY",
                price: "270,042.63 CNY",
                button_text: "Sell EOS",
                button_url: "/wallet_verification",
                button_class: "btn_buy"
            }, {
                first_char: "L",
                name: "Luhai8888",
                isVarified: false,
                order_count: "106",
                order_text: "주문",
                percentage: "98.1",
                status: "완료",
                availability: "사용가능",
                payment: "1.65908675 BTC",
                is_limited: "한도",
                payment_range: "50,000 - 300,000 CNY",
                price: "270,042.63 CNY",
                button_text: "Sell EOS",
                button_url: "/wallet_verification",
                button_class: "btn_buy"
            }, {
                first_char: "M",
                name: "Muhai8888",
                isVarified: false,
                order_count: "106",
                order_text: "주문",
                percentage: "98.1",
                status: "완료",
                availability: "사용가능",
                payment: "1.65908675 BTC",
                is_limited: "한도",
                payment_range: "50,000 - 300,000 CNY",
                price: "270,042.63 CNY",
                button_text: "Sell EOS",
                button_url: "/wallet_verification",
                button_class: "btn_buy"
            }]
    },
};
function renderTableData(data) {
    return (
        <tr>
            <td className="user">
                <p>
                    <span>{data.first_char}</span><a href="/me-2" className="user-name">{data.name}</a>   
                    {data.isVarified===true?<i className="fas fa-check-circle"></i>:''}
                    
                </p>
                <ul className="clear">
                    <li><span>{data.order_count}</span>{data.order_text}</li>
                    <li><span>{data.percentage}</span>% {data.status}</li>
                </ul>
            </td>
            <td className="available_limit">
                <dl className="available clear">
                    <dt>{data.availability}</dt>
                    <dd>{data.payment}</dd>
                </dl>
                <dl className="limit clear">
                    <dt>{data.is_limited}</dt>
                    <dd>{data.payment_range}</dd>
                </dl>
            </td>
            <td className="payment">
                <span className="icon_method01"></span>
                <span className="icon_method02"></span>
                <span className="icon_method03"></span>
            </td>
            <td className="price">{data.price}</td>
            <td className="transaction"><a href={data.button_url} className={data.button_class}>{data.button_text}</a></td>
        </tr>
    )
}
const BuyTabContent = function (props) {
    var activeSubTab = props.valueFromParent;
    return (
        <>
            <div className="tab-content">
                <div className={"tab-pane " + (activeSubTab === "buy-btc-tab" ? "active" : "")} id="buy-btc-tab-pane" role="tabpanel" aria-labelledby="buy-btc-tab">
                    <div className="row">
                        <div className="col-12">
                            <div className="table_container wow fadeInUp" data-wow-delay="0.6s">
                                <table>
                                    <thead>
                                        <tr>
                                            <th>user</th>
                                            <th>Available/Limited</th>
                                            <th>payment</th>
                                            <th>price</th>
                                            <th>transaction</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {table_data.buy_data.btc.map(data => (renderTableData(data)))}
                                    </tbody>
                                </table>
                            </div>
                            <div className="indicator">
                                <button type="button" className="btn_prev" disabled><i className="fal fa-chevron-left"></i></button>
                                <span className="on">1</span>
                                <span>2</span>
                                <span>3</span>
                                <span style={{ "cursor": "default" }}>...</span>
                                <span>40</span>
                                <button type="button" className="btn_next"><i className="fal fa-chevron-right"></i></button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={"tab-pane " + (activeSubTab === "buy-eth-tab" ? "active" : "")} id="buy-eth-tab-pane" role="tabpanel" aria-labelledby="buy-eth-tab">
                    <div className="row">
                        <div className="col-12">
                            <div className="table_container wow fadeInUp" data-wow-delay="0.6s">
                                <table>
                                    <thead>
                                        <tr>
                                            <th>user</th>
                                            <th>Available/Limited</th>
                                            <th>payment</th>
                                            <th>price</th>
                                            <th>transaction</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {table_data.buy_data.eth.map(data => (renderTableData(data)))}
                                    </tbody>
                                </table>
                            </div>
                            <div className="indicator">
                                <button type="button" className="btn_prev" disabled><i className="fal fa-chevron-left"></i></button>
                                <span className="on">1</span>
                                <span>2</span>
                                <span>3</span>
                                <span style={{ "cursor": "default" }}>...</span>
                                <span>40</span>
                                <button type="button" className="btn_next"><i className="fal fa-chevron-right"></i></button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={"tab-pane " + (activeSubTab === "buy-usdt-tab" ? "active" : "")} id="buy-usdt-tab-pane" role="tabpanel" aria-labelledby="buy-usdt-tab">
                    <div className="row">
                        <div className="col-12">
                            <div className="table_container wow fadeInUp" data-wow-delay="0.6s">
                                <table>
                                    <thead>
                                    <tr>
                                        <th>user</th>
                                        <th>Available/Limited</th>
                                        <th>payment</th>
                                        <th>price</th>
                                        <th>transaction</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                        {table_data.buy_data.usdt.map(data => (renderTableData(data)))}
                                    </tbody>
                                </table>
                            </div>
                            <div className="indicator">
                                <button type="button" className="btn_prev" disabled><i className="fal fa-chevron-left"></i></button>
                                <span className="on">1</span>
                                <span>2</span>
                                <span>3</span>
                                <span style={{ "cursor": "default" }}>...</span>
                                <span>40</span>
                                <button type="button" className="btn_next"><i className="fal fa-chevron-right"></i></button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={"tab-pane " + (activeSubTab === "buy-xrp-tab" ? "active" : "")} id="buy-xrp-tab-pane" role="tabpanel" aria-labelledby="buy-xrp-tab">
                    <div className="row">
                        <div className="col-12">
                            <div className="table_container wow fadeInUp" data-wow-delay="0.6s">
                                <table>
                                    <thead>
                                    <tr>
                                        <th>user</th>
                                        <th>Available/Limited</th>
                                        <th>payment</th>
                                        <th>price</th>
                                        <th>transaction</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                        {table_data.buy_data.xrp.map(data => (renderTableData(data)))}
                                    </tbody>
                                </table>
                            </div>
                            <div className="indicator">
                                <button type="button" className="btn_prev" disabled><i className="fal fa-chevron-left"></i></button>
                                <span className="on">1</span>
                                <span>2</span>
                                <span>3</span>
                                <span style={{ "cursor": "default" }}>...</span>
                                <span>40</span>
                                <button type="button" className="btn_next"><i className="fal fa-chevron-right"></i></button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={"tab-pane " + (activeSubTab === "buy-eos-tab" ? "active" : "")} id="buy-eos-tab-pane" role="tabpanel" aria-labelledby="buy-eos-tab">
                    <div className="row">
                        <div className="col-12">
                            <div className="table_container wow fadeInUp" data-wow-delay="0.6s">
                                <table>
                                    <thead>
                                    <tr>
                                        <th>user</th>
                                        <th>Available/Limited</th>
                                        <th>payment</th>
                                        <th>price</th>
                                        <th>transaction</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                        {table_data.buy_data.eos.map(data => (renderTableData(data)))}
                                    </tbody>
                                </table>
                            </div>
                            <div className="indicator">
                                <button type="button" className="btn_prev" disabled><i className="fal fa-chevron-left"></i></button>
                                <span className="on">1</span>
                                <span>2</span>
                                <span>3</span>
                                <span style={{ "cursor": "default" }}>...</span>
                                <span>40</span>
                                <button type="button" className="btn_next"><i className="fal fa-chevron-right"></i></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
const SellTabContent = function (props) {
    var activeSubTab = props.valueFromParent;
    return (
        <>
            <div className="tab-content">
                <div className={"tab-pane " + (activeSubTab === "sell-btc-tab" ? "active" : "")} id="sell-btc-tab-pane" role="tabpanel" aria-labelledby="sell-btc-tab">
                    <div className="row">
                        <div className="col-12">
                            <div className="table_container wow fadeInUp" data-wow-delay="0.6s">
                                <table>
                                    <thead>
                                    <tr>
                                        <th>user</th>
                                        <th>Available/Limited</th>
                                        <th>payment</th>
                                        <th>price</th>
                                        <th>transaction</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                        {table_data.sell_data.btc.map(data => (renderTableData(data)))}
                                    </tbody>
                                </table>
                            </div>
                            <div className="indicator">
                                <button type="button" className="btn_prev" disabled><i className="fal fa-chevron-left"></i></button>
                                <span className="on">1</span>
                                <span>2</span>
                                <span>3</span>
                                <span style={{ "cursor": "default" }}>...</span>
                                <span>40</span>
                                <button type="button" className="btn_next"><i className="fal fa-chevron-right"></i></button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={"tab-pane " + (activeSubTab === "sell-eth-tab" ? "active" : "")} id="sell-eth-tab-pane" role="tabpanel" aria-labelledby="sell-eth-tab">
                    <div className="row">
                        <div className="col-12">
                            <div className="table_container wow fadeInUp" data-wow-delay="0.6s">
                                <table>
                                    <thead>
                                    <tr>
                                        <th>user</th>
                                        <th>Available/Limited</th>
                                        <th>payment</th>
                                        <th>price</th>
                                        <th>transaction</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                        {table_data.sell_data.eth.map(data => (renderTableData(data)))}
                                    </tbody>
                                </table>
                            </div>
                            <div className="indicator">
                                <button type="button" className="btn_prev" disabled><i className="fal fa-chevron-left"></i></button>
                                <span className="on">1</span>
                                <span>2</span>
                                <span>3</span>
                                <span style={{ "cursor": "default" }}>...</span>
                                <span>40</span>
                                <button type="button" className="btn_next"><i className="fal fa-chevron-right"></i></button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={"tab-pane " + (activeSubTab === "sell-usdt-tab" ? "active" : "")} id="sell-usdt-tab-pane" role="tabpanel" aria-labelledby="sell-usdt-tab">
                    <div className="row">
                        <div className="col-12">
                            <div className="table_container wow fadeInUp" data-wow-delay="0.6s">
                                <table>
                                    <thead>
                                    <tr>
                                        <th>user</th>
                                        <th>Available/Limited</th>
                                        <th>payment</th>
                                        <th>price</th>
                                        <th>transaction</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                        {table_data.sell_data.usdt.map(data => (renderTableData(data)))}
                                    </tbody>
                                </table>
                            </div>
                            <div className="indicator">
                                <button type="button" className="btn_prev" disabled><i className="fal fa-chevron-left"></i></button>
                                <span className="on">1</span>
                                <span>2</span>
                                <span>3</span>
                                <span style={{ "cursor": "default" }}>...</span>
                                <span>40</span>
                                <button type="button" className="btn_next"><i className="fal fa-chevron-right"></i></button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={"tab-pane " + (activeSubTab === "sell-xrp-tab" ? "active" : "")} id="sell-xrp-tab-pane" role="tabpanel" aria-labelledby="sell-xrp-tab">
                    <div className="row">
                        <div className="col-12">
                            <div className="table_container wow fadeInUp" data-wow-delay="0.6s">
                                <table>
                                    <thead>
                                    <tr>
                                        <th>user</th>
                                        <th>Available/Limited</th>
                                        <th>payment</th>
                                        <th>price</th>
                                        <th>transaction</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                        {table_data.sell_data.xrp.map(data => (renderTableData(data)))}
                                    </tbody>
                                </table>
                            </div>
                            <div className="indicator">
                                <button type="button" className="btn_prev" disabled><i className="fal fa-chevron-left"></i></button>
                                <span className="on">1</span>
                                <span>2</span>
                                <span>3</span>
                                <span style={{ "cursor": "default" }}>...</span>
                                <span>40</span>
                                <button type="button" className="btn_next"><i className="fal fa-chevron-right"></i></button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={"tab-pane " + (activeSubTab === "sell-eos-tab" ? "active" : "")} id="sell-eos-tab-pane" role="tabpanel" aria-labelledby="sell-eos-tab">
                    <div className="row">
                        <div className="col-12">
                            <div className="table_container wow fadeInUp" data-wow-delay="0.6s">
                                <table>
                                    <thead>
                                    <tr>
                                        <th>user</th>
                                        <th>Available/Limited</th>
                                        <th>payment</th>
                                        <th>price</th>
                                        <th>transaction</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                        {table_data.sell_data.eos.map(data => (renderTableData(data)))}
                                    </tbody>
                                </table>
                            </div>
                            <div className="indicator">
                                <button type="button" className="btn_prev" disabled><i className="fal fa-chevron-left"></i></button>
                                <span className="on">1</span>
                                <span>2</span>
                                <span>3</span>
                                <span style={{ "cursor": "default" }}>...</span>
                                <span>40</span>
                                <button type="button" className="btn_next"><i className="fal fa-chevron-right"></i></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export const Wallet_trade = () => {
    const [activeTab, setActiveTab] = useState("buy-tab");
    const [activeBuyTab, setActiveBuyTab] = useState("buy-btc-tab");
    const [activeSellTab, setActiveSellTab] = useState("sell-btc-tab");
    const handleTab = (tab) => {
        setActiveTab(tab);
    };
    const handleBuyTab = (tab) => {
        setActiveBuyTab(tab);
    };
    const handleSellTab = (tab) => {
        setActiveSellTab(tab);
    };

    return (
        <div className="content">
            <section id="mainTop">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h3 className="wow animate__animated fadeInDown" data-wow-delay="0.3s">P2P Trade</h3>
                        </div>
                    </div>
                </div>
            </section>

            <section id="lnb">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <ul className="buy_sell clear">
                                <li className={(activeTab === "buy-tab" ? "on" : "")}><a href="#" onClick={() => handleTab("buy-tab")}>Buy</a></li>
                                <li className={(activeTab === "sell-tab" ? "on" : "")}><a href="#" onClick={() => handleTab("sell-tab")}>Sell</a></li>
                            </ul>
                            {activeTab === "buy-tab" ? (
                                <ul className="coin_name clear">
                                    <li className={activeBuyTab === "buy-btc-tab" ? "on" : ""}><a href="#" onClick={() => handleBuyTab("buy-btc-tab")}>BTC</a></li>
                                    <li className={activeBuyTab === "buy-eth-tab" ? "on" : ""}><a href="#" onClick={() => handleBuyTab("buy-eth-tab")}>ETH</a></li>
                                    <li className={activeBuyTab === "buy-usdt-tab" ? "on" : ""}><a href="#" onClick={() => handleBuyTab("buy-usdt-tab")}>USDT</a></li>
                                    <li className={activeBuyTab === "buy-xrp-tab" ? "on" : ""}><a href="#" onClick={() => handleBuyTab("buy-xrp-tab")}>XRP</a></li>
                                    <li className={activeBuyTab === "buy-eos-tab" ? "on" : ""}><a href="#" onClick={() => handleBuyTab("buy-eos-tab")}>EOS</a></li>
                                </ul>
                            ) : (
                                <ul className="coin_name clear">
                                    <li className={activeSellTab === "sell-btc-tab" ? "on" : ""}><a href="#" onClick={() => handleSellTab("sell-btc-tab")}>BTC</a></li>
                                    <li className={activeSellTab === "sell-eth-tab" ? "on" : ""}><a href="#" onClick={() => handleSellTab("sell-eth-tab")}>ETH</a></li>
                                    <li className={activeSellTab === "sell-usdt-tab" ? "on" : ""}><a href="#" onClick={() => handleSellTab("sell-usdt-tab")}>USDT</a></li>
                                    <li className={activeSellTab === "sell-xrp-tab" ? "on" : ""}><a href="#" onClick={() => handleSellTab("sell-xrp-tab")}>XRP</a></li>
                                    <li className={activeSellTab === "sell-eos-tab" ? "on" : ""}><a href="#" onClick={() => handleSellTab("sell-eos-tab")}>EOS</a></li>
                                </ul>
                            )}
                        </div>

                    </div>
                </div>
            </section>

            <section id="setting">
                <div className="container">

                    <div className="row">
                        <div className="col-12">
                            <dl className="money">
                                <dt>money</dt>
                                <dd>
                                    <select name="" id="">
                                        <option value="CNY">CNY</option>
                                        <option value="AED">AED</option>
                                        <option value="AMD">AMD</option>
                                        <option value="ARS">ARS</option>
                                        <option value="AUD">AUD</option>
                                        <option value="BDT">BDT</option>
                                        <option value="BHD">BHD</option>
                                    </select>
                                </dd>
                            </dl>
                            <dl className="method">
                                <dt>Payment Method</dt>
                                <dd>
                                    <select name="" id="">
                                        <option value="all_payment">All payments</option>
                                        <option value="bank_transfer">Bank Transfer</option>
                                        <option value="wechat">WeChat</option>
                                        <option value="alipay">Alipay</option>
                                        <option value="cash_deposit">Cash Deposit to Bank</option>
                                    </select>
                                </dd>
                            </dl>
                            <a href="#" className="btn_creat"><i className="fas fa-plus-square"></i>Creat an AD</a>
                        </div>
                    </div>
                </div>
            </section>

            <section id="trade">
                <div className="container">
                    <div className="tab-content">
                        <div className={"tab-pane " + (activeTab === "buy-tab" ? "active" : "")}>
                            <BuyTabContent valueFromParent={activeBuyTab} />
                        </div>
                        <div className={"tab-pane " + (activeTab === "sell-tab" ? "active" : "")}>
                            <SellTabContent valueFromParent={activeSellTab} />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
