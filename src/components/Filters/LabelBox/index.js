import React from 'react'
import {ListItem, CheckBox, Body,Text} from 'native-base'

const LabelBox = ({item, changeCheck}) => (
        <ListItem>
                <CheckBox  checked={item.checked} color={item.color } onPress={()=> {changeCheck(item)}}/>
                <Body>
                        <Text>{item.name}</Text>
                </Body>
        </ListItem>
)

export default LabelBox
