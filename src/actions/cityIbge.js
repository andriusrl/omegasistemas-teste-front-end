import axios from 'axios';
import { push } from "connected-react-router";
import { routes } from '../containers/Router'
import { getVoucherFromIdCity } from './voucher';

const baseUrlIbge = "https://servicodados.ibge.gov.br/api/v1"

export const getCodeIbge = (city) => async (dispatch) => {
    try {
        const response = await axios.get(
            `${baseUrlIbge}/localidades/municipios/${city}`
        )
        console.log(response.data)
        response.data.id !== undefined ?
            dispatch(getVoucherFromIdCity(response.data.id)) : 
            alert("Cidade não encontrada, tente outra")
        
    } catch (error) {
        alert("Por favor tente novamente")
    }
}