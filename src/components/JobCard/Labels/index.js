import React from 'react'
import {Card} from 'native-base'
import {View, StyleSheet, Text} from 'react-native'

const Labels = ({data}) => (
        <Card transparent> 
        <Text style={styles.labels}>Labels:</Text>
        <View style={styles.container}>
                {data.map(item => <Text key={item.id}  style={styles.item} >{item.name}</Text>)} 
        </View>                  
        </Card>
)

export default Labels

const styles = StyleSheet.create({
        container: {
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap',
                alignItems: 'center'
        },
        item:{
                padding: 2,
                margin: 2,
                borderRadius: 3,
                borderWidth: 2,
                borderColor: '#3F51B5',
                color: '#3F51B5',
                textAlign: 'center'
        },
        labels: {
                color: '#000'
        }
})