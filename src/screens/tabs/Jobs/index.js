import React, {Component} from 'react'
import {NetInfo} from 'react-native'
import {connect} from 'react-redux'
import {request} from '../../../redux/actions/api'
import {sendToBookmark} from '../../../redux/actions/bookmark'
import {
        Container, 
        Content,
        Text,
        Button,
        List,
        ListItem
} from 'native-base'

class Jobs extends Component{
        state ={
                isConnected: false
        }

        async componentDidMount(){
               await this.isConnected()
                if(this.state.isConnected){
                        return this.props.request(1, '')
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
                                <Content>                                        
                                        <Text>Is fetching: {this.props.isFetching ? 'yes' : 'no'}</Text>
                                        <Text>current page: {this.props.data.pages.current}</Text>
                                        <Text>next page: {this.props.data.pages.next}</Text>
                                        <Text>last page: {this.props.data.pages.last}</Text>
                                        <Button onPress={()=>this.props.request(this.props.data.pages.next,'')}>
                                                <Text>next page</Text>
                                        </Button>
                                        <Button onPress={()=>this.props.request(1,'alocação/Presencial')}>
                                        <Text>filters</Text>
                                </Button>
                                <List>
                                {       this.props.data.jobs.length === 0 ? 
                                        null :
                                        this.props.data.jobs.map( item =>{
                                                                                                        const salvo = this.props.bookmark.filter( job => job.id === item.id)
                                                                                                        return(
                                                                                                                <ListItem key={item.id}>
                                                                                                                <Text>{item.id}</Text>
                                                                                                                <Button
                                                                                                                        onPress={()=>this.props.savebookmark(this.props.bookmark, item)}
                                                                                                                >
                                                                                                                        <Text>{salvo.length === 0 ? 'salvar': 'remover'}</Text>
                                                                                                                </Button>
                                                                                                        </ListItem>    
                                                                                                        )}
                                                                                                        
                                                                                                )
                                }
                                </List>
                                </Content>
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
       savebookmark: (bookmark, item)=> dispatch(sendToBookmark(bookmark, item))
}) 

export default connect(mapStateToProps, mapDispatchToProps)(Jobs)
