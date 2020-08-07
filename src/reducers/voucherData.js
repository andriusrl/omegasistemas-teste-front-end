const initialState = {
    voucherData: "Vazio"
}

const VoucherData = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_VOUCHER': {
            // console.log("entrei no redux com o valor")
            // console.log(action.payload.value)
            return {
                voucherData: action.payload.value.map(
                    value=>{return {
                        dataReferencia: value.data[0].dataReferencia,
                        quantidadeBeneficiados: value.data[0].quantidadeBeneficiados,
                        valor: value.data[0].valor
                    }}
                )
            }
        };
        default:
            return state;
    }
}

export default VoucherData;