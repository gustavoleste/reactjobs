const INITIAL_STATE ={
        isFetching: false,
        error: false,
        errorMsg: null,
        data:{
                jobs:[],
                pages: {
                        current: 1,
                        next:2,
                        last: 1
                },
                filters: ''
        }
}

const api = (state = INITIAL_STATE, action) => {
        switch(action.type){
                case 'REQUEST':
                        return{
                                ...state,
                                isFetching: action.isFetching
                        }
                case 'FIRST_PAGE_RESPONSE':
                   return{
                           ...state,
                           isFetching: action.isFetching,
                           data: {
                                   jobs:[...action.jobs],
                                   pages: action.pages,
                                   filters: action.filters
                           }
                   }
                   case 'NEXT_PAGE_RESPONSE':
                   return{
                           ...state,
                           isFetching: action.isFetching,
                           data: {
                                   jobs:[...state.data.jobs, ...action.jobs],
                                   pages: action.pages,
                                   filters: action.filters
                           }
                   }       
                default:
                        return state
        }
}

export default api