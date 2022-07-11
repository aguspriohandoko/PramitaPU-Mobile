import { GET_LIST_DOKTER } from "../actionsType";

const initialState = {
    loading: false,
    list: [],
    error: null
}

export default (state = initialState, actions) => {
    switch (actions.type) {
        case GET_LIST_DOKTER:
            return {
                ...state,
                loading: actions.loading,
                list: actions.list,
                error: actions.error
            }
        default:
            return state;
    }
}