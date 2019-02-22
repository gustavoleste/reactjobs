import React, {Component, Fragment} from 'react'
import {NetInfo, Modal} from 'react-native'
import {connect} from 'react-redux'
import {request} from '../../../redux/actions/api'
import {sendToBookmark, saveOnBookmark} from '../../../redux/actions/bookmark'
import CardMessage from '../../../components/CardMessage'
import JobsList from '../../../components/JobsList'
import Filters from '../../../components/Filters'
import {
        Container, 
        Fab,
        Icon,

} from 'native-base'

class Jobs extends Component{
        state ={
                isConnected: false,
                showFilter: false,
                showDetails: false
        }

        async componentDidMount(){
               await this.isConnected()
                if(this.state.isConnected){
                        this.props.request(1, '')
                }             
        }

        filterVisibility = () =>{
                this.setState(prevState =>(
                        {
                                showFilter: !prevState.showFilter
                        }
                ))
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
                                        {
                                                this.state.isConnected ? null : <CardMessage message='Sem conexão.'/>
                                        }
                                        {
                                                this.state.isConnected && this.props.data.jobs.length < 1 && !this.props.isFetching ? 
                                                <CardMessage message='Nenhuma vaga encontrada.'/> : null
                                        } 
                                        {
                                                this.props.data.jobs.length < 1 ? null :
                                                <JobsList data={this.props.data}/>
                                         }
                                         {
                                                 this.props.isFetching ? <CardMessage message='Carregando vagas...'/> : null
                                         }
                                         <Fab 
                                                onPress={this.filterVisibility}
                                                position='bottomRight' 
                                                active={false}>
                                                <Icon name='filter' type='FontAwesome'  color='#3F51B5'/>
                                        </Fab> 
                                        <Modal 
                                                animationType='slide'
                                                visible={this.state.showFilter}
                                                onRequestClose={this.filterVisibility}
                                        >
                                                <Filters close={this.filterVisibility}/>
                                        </Modal>                        
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
