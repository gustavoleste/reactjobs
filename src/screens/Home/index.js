import React from 'react'
import Jobs from '../tabs/Jobs'
import Bookmark from   '../tabs/Bookmark'
import {connect} from 'react-redux'
import {Container, Header, Tab, Tabs, Text,Title,Icon,TabHeading, Body} from 'native-base'

const Home = ({bookmarkItems}) => (
        <Container>
                <Header  hasTabs noLeft>
                        <Body>
                                <Title>React Jobs</Title>
                        </Body>                        
                </Header>
                <Tabs>
                        <Tab heading={<TabHeading><Icon name='work' type='MaterialIcons'/><Text>VAGAS</Text></TabHeading>}>
                                <Jobs />
                        </Tab>                       
                        <Tab heading={<TabHeading><Icon  name='ios-bookmark' type='Ionicons' /><Text>SALVOS ({bookmarkItems.length})</Text></TabHeading>}>
                              <Bookmark/>
                        </Tab>
                </Tabs>
        </Container>
)

const mapStateToProps = state => ({
        bookmarkItems: state.bookmark.bookmark
})

export default connect(mapStateToProps)(Home)
