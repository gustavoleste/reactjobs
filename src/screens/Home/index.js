import React from 'react'
import Jobs from '../tabs/Jobs'
import {Container, Header, Tab, Tabs, Text,Title,Icon,TabHeading, Body} from 'native-base'

const Home = () => (
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
                        <Tab heading={<TabHeading><Icon  name='ios-bookmark' type='Ionicons' /><Text>SALVOS (0)</Text></TabHeading>}>
                              
                        </Tab>
                </Tabs>
        </Container>
)

export default Home
