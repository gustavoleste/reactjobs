import React, {Component} from 'react'
import {NetInfo} from 'react-native'
import {Container, Content,Text,Button} from 'native-base'
import {connect} from 'react-redux'
import {request} from '../../../redux/actions'

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
                                </Content>
                        </Container>
                )
        }
}

const mapStateToProps = state => ({
        data: state.data,
        isFetching: state.isFetching
})

const mapDispatchToProps = dispatch =>({
        request: (page, filters)=> dispatch(request(page, filters))
}) 

export default connect(mapStateToProps, mapDispatchToProps)(Jobs)
