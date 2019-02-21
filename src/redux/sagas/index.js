import {firstPageResponse, nextPageResponse} from '../actions/api'
import {saveOnBookmark} from '../actions/bookmark'
import {takeLatest, put, call} from 'redux-saga/effects'
import axios from 'axios'
const baseURL = 'https://api.github.com/repos/react-brasil/vagas/issues?per_page=4'

function* rootSaga(){
        yield takeLatest('REQUEST', sendRequest)
        yield takeLatest('SEND_TO_BOOKMARK', sagabookmark)
}

function* sendRequest(action){
        try{
                const {filters, page } = action
                const params = `${baseURL}&labels=${filters}&page=${page}`
                const response = yield call(axios.get, params)
                const {data: jobs, headers: {link} } = response
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

function* sagabookmark(action){
        const {bookmark, item} = action
        const checkItem = yield bookmark.filter( job=> job.id === item.id)
        if(checkItem.length === 0){
                return yield put(saveOnBookmark([...bookmark, item]))
        }
         const nexBookmark = bookmark.filter(job => job.id !== item.id)
         yield put(saveOnBookmark(nexBookmark))
}

export default rootSaga

const getLastPage = (link) =>{
        const getStringRegex = /page=\d*>; rel="last"/
        const getNumberRegex = /\d+/
        const lastPageString = String( link.match(getStringRegex))
        const lastPageNumber = lastPageString !== 'null' ? String(lastPageString.match(getNumberRegex)) : 1
        return Number(lastPageNumber)
}