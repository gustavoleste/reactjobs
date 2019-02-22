import React from 'react'
import { FlatList } from 'react-native'
import {Spinner} from 'native-base'
import JobCard from '../JobCard'
import {connect} from 'react-redux'
import {request} from '../../redux/actions/api'

const JobsList = ({data, request, isFetching, selectItem}) => {
        //console.log('select:', selectItem)
        return(
                <FlatList 
                        data={data.jobs}
                        renderItem={ ({item})=>  <JobCard data={item} selectItem={selectItem}/>}
                        keyExtractor={item => String(item.id)}
                        onEndReachedThreshold={0.01}
                        onEndReached={()=> data.pages.next > data.pages.last ? null : request(data.pages.next, data.filters)}
                        ListFooterComponent={()=> isFetching ? <Spinner color='#3F51B5'/> : null}
                />
        )
}

const mapStateToProps = state => ({
        isFetching: state.api.isFetching
})

const mapDispatchToProps = dispatch =>({
        request: (pages, filters)=> dispatch(request(pages, filters))
})

export default connect(mapStateToProps, mapDispatchToProps)(JobsList)
