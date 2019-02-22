import React from 'react'
import {Card,CardItem, Text,Button,Body, H3} from 'native-base'
import Labels from './Labels'

const JobCard = ({data}) => {
        //console.log('data:',data.labels.length)
        return(
        <Card>
                <CardItem >
                        <H3>{data.title}</H3>                        
                </CardItem>
                <CardItem>
                        <Body>
                        {data.labels.length === 0 ? <Text>Labels:</Text> : <Labels data={data.labels} />}
                        </Body>                       
                </CardItem>
                <CardItem footer>
                        <Body>
                                <Button block  primary small><Text>detalhes</Text></Button>
                        </Body>
                </CardItem>
        </Card>

)
}
export default JobCard
