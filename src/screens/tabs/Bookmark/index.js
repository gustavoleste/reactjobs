import React, { Component } from 'react'
import {connect} from 'react-redux'
import {sendToBookmark} from '../../../redux/actions/bookmark'
import {
        Container, 
        Content, 
        List,
        ListItem, 
        Button,
        Text
} from 'native-base'

class Bookmark extends Component {        
       
        render() {
                return (
                        <Container>
                                <Content>
                                        <List>
                                               {        this.props.bookmark.length === 0 ?
                                                        <Text>Nada salvo</Text>:
                                                        this.props.bookmark.map(item => 
                                                                <ListItem key={item.id}>
                                                                        <Text>{item.id}</Text>
                                                                        <Button onPress={()=>this.props.remove(this.props.bookmark, item)}>
                                                                                <Text>Remover</Text>
                                                                        </Button>
                                                                </ListItem>
                                                         )
                                                }
                                        </List>
                                </Content>
                        </Container>
                )
        }
}

const mapStateToProps = state => ({
        bookmark: state.bookmark.bookmark
})

const mapDispatchToProps = dispatch =>({
        remove: (bookmark, item)=>dispatch(sendToBookmark(bookmark, item))
})

export default connect(mapStateToProps, mapDispatchToProps)(Bookmark)
