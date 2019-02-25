import React, { Component } from 'react'
import {connect} from 'react-redux'
import {sendToBookmark} from '../../../redux/actions/bookmark'
import CardMessage from '../../../components/CardMessage'
import BookmarkList from '../../../components/BookmarkList'
import Details from '../../../components/Details'
import {Modal} from 'react-native'
import {
        Container
} from 'native-base'

class Bookmark extends Component { 

        state ={
                showDetails: false,
                item: {}
        }

        detailsVisibility = () =>{
                this.setState(prevState =>(
                        {
                                showDetails: !prevState.showDetails
                        }
                ))
        }

        selectItem = item =>{
                this.setState({item})
                this.detailsVisibility()
        }      
       
        render() {
                return (
                        <Container>
                                {this.props.bookmark.length < 1 ?
                                <CardMessage message='Nenhum item salvo.'/> : 
                                <BookmarkList data={this.props.bookmark} selectItem={this.selectItem}/>
                                }
                                <Modal 
                                        animationType='slide'
                                        visible={this.state.showDetails}
                                        onRequestClose={this.detailsVisibility}
                                >
                                        <Details close={this.detailsVisibility} item={this.state.item} />
                                </Modal>
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
