import * as actionTypes from '../actions/actionTypes';

const initialState = {
    isFirstTimeLoading: true
};

export default function introWizard(state = initialState, action) {
    switch(action.type) {
        case actionTypes.LAUNCH_APP: {
            const launched = localStorage.getItem('appLaunched');
            let isFirstTimeLoading = true;
            if(launched) isFirstTimeLoading = false;

            return {
                ...state,
                isFirstTimeLoading
            }
        }
        default: 
            return state;
    }
}