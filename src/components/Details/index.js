import React,{Component} from 'react'
import Markdown from 'react-native-markdown-renderer'
import {sendToBookmark} from '../../redux/actions/bookmark'
import {connect} from 'react-redux'
import {ToastAndroid} from 'react-native'
import { 
        Icon, 
        Content,
        Container,
        Card,
        Body,
        CardItem,
        Button,
        Header,
        Left,
        Right,
        Title
} from 'native-base'

class Details extends Component {
        state ={
                saved: false
        }

        componentDidMount(){
                this.checkBookmark()                
        }
 
        checkBookmark = () =>{
                const isSaved = this.props.bookmark.filter( job=> job.id === this.props.item.id)
                if(isSaved.length > 0){
                        this.setState({saved: true})
                }
        }

        changeBookmark = async () =>{
                await this.setState(prevState=>(
                        {
                                saved: !prevState.saved
                        }
                ))
                this.props.sendToBookmark(this.props.bookmark, this.props.item)

                if(this.state.saved){
                        return ToastAndroid.showWithGravity('Vaga salva com secesso!', 4000 , ToastAndroid.BOTTOM)
                }else{
                        return ToastAndroid.showWithGravity('Vaga removida com sucesso!', 4000 , ToastAndroid.BOTTOM)
                }
        }

        render(){
                const bookmarkColor = this.state.saved ? '#ff9900' : '#fff'
                return(
                        <Container> 
                                <Header>
                                <Left>
                                        <Button transparent onPress={this.props.close}>
                                                <Icon name='close' type='AntDesign'/>
                                        </Button>
                                </Left>
                                <Body><Title>{this.props.item.title}</Title></Body>
                                <Right>
                                        <Button transparent onPress={()=>this.changeBookmark(this.props.bookmark, this.props.item)}>
                                                <Icon  name='bookmark' type='FontAwesome' style={{color: bookmarkColor}}/>
                                        </Button>
                                </Right>
                                </Header>
                                <Content>
                                        <Card transparent>
                                                <CardItem>
                                                        <Body>
                                                                <Markdown>{this.props.item.body}</Markdown> 
                                                        </Body> 
                                                </CardItem>                                                                                   
                                        </Card>                         
                                </Content>          
                        </Container>
                )
        }
}

const mapStateToProps = state => ({
        bookmark: state.bookmark.bookmark
})

const mapDispatchToProps = dispatch =>({
        sendToBookmark: (bookmark, item)=> dispatch(sendToBookmark(bookmark, item))
})
export default connect(mapStateToProps, mapDispatchToProps)(Details)