import axios from 'axios';

const baseUrlIbge = "https://servicodados.ibge.gov.br/api/v1"

export const setVoucher = value => ({
    type: 'SET_VOUCHER',
    newValue: value
});

export const getCodeIbge = (city) => async (dispatch) => {
    try {
        const response = await axios.get(
            `${baseUrlIbge}/localidades/municipios/${city}`
        )
        console.log(response.data)
    } catch (error) {
        alert("Por favor tente novamente")
    }
}