import axios from "axios";

const APP_URL = "http://207.148.118.105";

export const LoginApi = async (api, body) => {
    try {
        const resp = await axios.post(`${APP_URL}${api}`, body, { headers: { "Content-Type": "application/json" } })
        if (resp.status == 404) {
            console.log("Something wrong")
        } else {
            return resp.data;
        }
    } catch (e) {
        console.log("Something went wrong")
    }
}

export const RegisterApi = async (api, body) => {
    const resp = await axios.post(`${APP_URL}${api}`, body, { headers: { "Content-Type": "application/json" } })
    console.log(resp.data)
    return resp.data;
}