const initialState = {
    voucherData: undefined
}

const VoucherData = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_VOUCHER': {
            return {
                voucherData: action.newValue
            }
        };
        default:
            return state;
    }
}