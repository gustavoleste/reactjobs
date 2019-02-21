import {firstPageResponse, nextPageResponse} from '../actions'
import {takeLatest, put, call} from 'redux-saga/effects'
import axios from 'axios'
const baseURL = 'https://api.github.com/repos/react-brasil/vagas/issues?per_page=10'

function* rootSaga(){
        yield takeLatest('REQUEST', sendRequest)
}

function* sendRequest(action){
        try{
                const {filters, page } = action
                const params = `${baseURL}&labels=${filters}&page=${page}`
                const response = yield call(axios.get, params)
                const {data: jobs, headers: {link} } = response
                console.log('link', link)
                const last = link ?  getLastPage(link) : 1
                const pages = {
                                current: page,
                                next: page + 1,
                                last
                }
                if(page ===1){
                        return yield put(firstPageResponse(jobs, pages, filters))
                }else{
                        return yield put(nextPageResponse(jobs, pages, filters))
                } 
        }catch(error){
                console.log(error)
        }
}

export default rootSaga

const getLastPage = (link) =>{
        const getStringRegex = /page=\d*>; rel="last"/
        const getNumberRegex = /\d+/
        const lastPageString = String( link.match(getStringRegex))
        console.log(  'String', lastPageString )
        const lastPageNumber = lastPageString !== 'null' ? String(lastPageString.match(getNumberRegex)) : 1
        return Number(lastPageNumber)
}