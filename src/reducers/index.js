import { ADD_FRIEND, DEACTIVATE_FRIEND, DELETE_FRIEND , BLOCK_FRIEND } from '../actions/index'


const initialState = [];


const rootReducer = (state = initialState, action) =>{

    switch (action.type) {
        case ADD_FRIEND:

            return [...state, action.payload];

        case DEACTIVATE_FRIEND:

            return state.map(s =>{
                if(s.id === action.payload){
                    s.status = 'Inactive';
                }
                return s;
            });

        case BLOCK_FRIEND:

            return state.map(s =>{
                if(s.id === action.payload){
                    s.status = 'Blocked';
                }
                return s;
            });


        case DELETE_FRIEND:

            return state.filter(s => s.id !== action.payload);


        default:
            return state

    }

}
export default rootReducer;