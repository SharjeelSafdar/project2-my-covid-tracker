export default function reducerFunc (state, action) {
    switch (action.type) {
        case 'SET_COUNTRY':
            return {
                ...state,
                countrySelected: action.payload
            }
        default:
            return state;
    }
}