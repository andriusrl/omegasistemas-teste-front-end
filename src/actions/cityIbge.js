import axios from 'axios';
import { getVoucherFromIdCity } from './voucher';

const baseUrlIbge = "https://servicodados.ibge.gov.br/api/v1"

export const getCodeIbge = (city) => async (dispatch) => {
    try {
        const response = await axios.get(
            `${baseUrlIbge}/localidades/municipios/${city}`
        )
        console.log(response.data)
        dispatch(getVoucherFromIdCity(response.data.id))
    } catch (error) {
        alert("Por favor tente novamente")
    }
}