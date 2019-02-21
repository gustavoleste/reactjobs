const INITIAL_STATE ={        
        bookmark:[]
}

const bookmark = (state = INITIAL_STATE, action) => {
        switch(action.type){
                case 'SAVE_ON_BOOKMARK':
                        return{
                                ...state,
                                bookmark: action.bookmark
                        }                     
                default:
                        return state
        }
}

export default bookmark