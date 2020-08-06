import axios from "axios";

const baseUrlVoucher = "https://cors-anywhere.herokuapp.com/http://www.portaltransparencia.gov.br/api-de-dados"

export const setVoucher = value => ({
    type: 'SET_VOUCHER',
    newValue: value
});

export const getVoucherFromIdCity = (id) => async (dispatch) => {
    try{
        const response = await axios.get(
            `${baseUrlVoucher}/bolsa-familia-por-municipio?mesAno=202004&codigoIbge=${id}&pagina=1`,
            { headers: {
                "chave-api-dados": "d9d91250ec5324cdc21ec7e2dc6c5099",
            }}
        )
        console.log(response.data)
    } catch (error) {
        alert('Por favor, tente novamente')
    }
}