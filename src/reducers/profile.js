export default function(state = {}, action) {
    switch(action.type) {
        case 'SCAN_DATA_SUCCESS':
            return {
                ...state,
                ...action.data
            };
            
        default: 
            return state;
    }
}