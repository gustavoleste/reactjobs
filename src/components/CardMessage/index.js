import React from 'react'
import {
        Container,
        Content,
        Card,
        CardItem,
        Text,
} from  'native-base'
const cardMessage = ({message}) => (
                  <Container>
                        <Content>
                                <Card>
                                        <CardItem>
                                                <Text>{message}</Text>
                                        </CardItem>
                                </Card>
                        </Content>
                </Container>
)

export default cardMessage

