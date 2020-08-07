import axios from "axios";
import { push } from "connected-react-router";
import { routes } from '../containers/Router'

const baseUrlVoucher = "https://cors-anywhere.herokuapp.com/http://www.portaltransparencia.gov.br/api-de-dados"

export const setVoucher = value => {
    return {
        type: 'SET_VOUCHER',
        payload: {
            value
        }
    }
}

export const getVoucherFromIdCity = (id) => async (dispatch) => {
    try{
        const promise2 = new Promise((resolve, reject)=>{
            const response = axios.get(
                `${baseUrlVoucher}/bolsa-familia-por-municipio?mesAno=202006&codigoIbge=${id}&pagina=1`,
                { headers: {
                    "chave-api-dados": "d9d91250ec5324cdc21ec7e2dc6c5099",
                }}
            )
            resolve(response)
        })

        const promise3 = new Promise((resolve, reject)=>{
            const response = axios.get(
                `${baseUrlVoucher}/bolsa-familia-por-municipio?mesAno=202005&codigoIbge=${id}&pagina=1`,
                { headers: {
                    "chave-api-dados": "d9d91250ec5324cdc21ec7e2dc6c5099",
                }}
            )
            resolve(response)
        })

        const promise4 = new Promise((resolve, reject)=>{
            const response = axios.get(
                `${baseUrlVoucher}/bolsa-familia-por-municipio?mesAno=202004&codigoIbge=${id}&pagina=1`,
                { headers: {
                    "chave-api-dados": "d9d91250ec5324cdc21ec7e2dc6c5099",
                }}
            )
            resolve(response)
        })

        Promise.all([promise2, promise3, promise4]).then((values=>{
            // console.log("entrou aqui")
            // console.log(values)
            dispatch(setVoucher(values))
            dispatch(push(routes.result))
        }))
        // console.log(response.data)
    } catch (error) {
        alert('Por favor, tente novamente')
    }
}