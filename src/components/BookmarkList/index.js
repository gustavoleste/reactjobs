import React  from 'react'
import { FlatList } from 'react-native'
import JobCard from '../JobCard'

const  BookmarkList = ({data, selectItem}) => (
        <FlatList 
                data={data}
                renderItem={ ({item})=>  <JobCard data={item} selectItem={selectItem}/>}
                keyExtractor={item => String(item.id)}                        
        />
)

export default BookmarkList