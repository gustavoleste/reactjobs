import React from 'react'
import {
        Container,
        Content,
        Card,
        CardItem,
        Text,
        Icon
} from  'native-base'
const ConectionCard = () => (
                  <Container>
                        <Content>
                                <Card>
                                        <CardItem>
                                                <Text>Sem conexão. <Icon name='emoji-sad' type='Entypo' /></Text>
                                        </CardItem>
                                </Card>
                        </Content>
                </Container>
)

export default ConectionCard;

