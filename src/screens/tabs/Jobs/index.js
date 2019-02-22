import React, {Component} from 'react'
import {NetInfo, AsyncStorage} from 'react-native'
import {connect} from 'react-redux'
import {request} from '../../../redux/actions/api'
import {sendToBookmark, saveOnBookmark} from '../../../redux/actions/bookmark'
import ConectionCard from '../../../components/ConectionCard'
import JobsList from '../../../components/JobsList'
import {
        Container, 
        Content,
        Text,
        Button,
        List,
        ListItem,
        Card
} from 'native-base'

class Jobs extends Component{
        state ={
                isConnected: false
        }

        async componentDidMount(){
               await this.isConnected()
                if(this.state.isConnected){
                        this.props.request(1, '')
                }             
        }

        isConnected = async () => {
                try{
                        const isConnected = await NetInfo.isConnected.fetch()
                        this.setState({isConnected})
                }catch(error){
                        console.log(error)
                }
        }
       
        render(){
                return(
                        <Container>
                                        {this.state.isConnected ? null : <ConectionCard/>}
                                        {this.props.data.jobs.length === 0 ? null : <JobsList data={this.props.data} />}                                
                        </Container>
                )
        }
}

const mapStateToProps = state => ({
        data: state.api.data,
        isFetching: state.api.isFetching,
        bookmark: state.bookmark.bookmark
})

const mapDispatchToProps = dispatch =>({
       request: (page, filters)=> dispatch(request(page, filters)),
       savebookmark: (bookmark, item)=> dispatch(sendToBookmark(bookmark, item)),
       syncBookmark: (bookmark)=> dispatch(saveOnBookmark(bookmark))
}) 

export default connect(mapStateToProps, mapDispatchToProps)(Jobs)
