import React, { Component}from 'react'
import {request} from '../../redux/actions/api'
import {connect} from 'react-redux'
import {
         Content, 
        ListItem, 
        CheckBox, 
        Body,
        Text, 
        Fab, 
        Icon, 
        Container,
        Header,
        Left,
        Title,
        Button
} from 'native-base'

class Filters  extends Component{
        state ={
                labels: [
                        { name: 'alocação/Em-Aberto', show: false},
                        { name: 'alocação/Flexível', show: false},
                        { name: 'alocação/Fora-do-país', show: false},
                        { name: 'alocação/Presencial', show: false},
                        { name: 'alocação/Remoto', show: false},
                        { name: 'experiência/Em-Aberto', show: false},
                        { name: 'experiência/estágio', show: false},
                        { name: 'experiência/Júnior', show: false},
                        { name: 'experiência/Pleno', show: false},
                        { name: 'experiência/Senior', show: false},
                        { name: 'regime/A-Combinar', show: false},
                        { name: 'regime/CLT', show: false},
                        { name: 'regime/Estágio', show: false},
                        { name: 'regime/Freela', show: false},
                        { name: 'regime/Outros', show: false},
                        { name: 'regime/PJ', show: false}
                ],
                pages: {
                        current: 1,
                        next: 2,
                        last:1
                }
        }

        changeCheck = index =>{
                this.setState( prevState => {
                        const {name, show} = prevState.labels[index]
                        const newState = {...prevState}
                        newState.labels[index] = {name, show: !show}
                        return newState
                })
        }

        updateFilters = () =>{
                const labels = this.state.labels.filter( label => label.show === true)
                const labelsName = labels.map( label => label.name)
                const filters = labelsName.join(',')
                this.props.request(1,filters)
                this.props.close()
        }

        render(){
                return(
                        <Container>
                                <Header>
                                        <Left>                                                
                                                <Button transparent onPress={()=>this.props.close()}>
                                                        <Icon name='close' type='AntDesign'/>
                                                </Button>                                                
                                        </Left>
                                        <Body>
                                                <Title>FILTROS</Title>
                                        </Body>
                                </Header>
                                <Content>
                                        <ListItem>
                                                <CheckBox  checked={this.state.labels[0].show} color='#1ab2ff' onPress={()=> this.changeCheck(0)} />
                                                <Body>
                                                        <Text>alocação/Em-Aberto</Text>
                                                </Body>
                                        </ListItem>
                                        <ListItem>
                                                <CheckBox  checked={this.state.labels[1].show} color='#1ab2ff' onPress={()=> this.changeCheck(1)} />
                                                <Body>
                                                        <Text>alocação/Flexível</Text>
                                                </Body>
                                        </ListItem>
                                        <ListItem>
                                                <CheckBox  checked={this.state.labels[2].show} color='#1ab2ff' onPress={()=> this.changeCheck(2)} />
                                                <Body>
                                                        <Text>alocação/Fora-do-país</Text>
                                                </Body>
                                        </ListItem>
                                        <ListItem>
                                                <CheckBox  checked={this.state.labels[3].show} color='#1ab2ff' onPress={()=> this.changeCheck(3)} />
                                                <Body>
                                                        <Text>alocação/Presencial</Text>
                                                </Body>
                                        </ListItem>
                                        <ListItem>
                                                <CheckBox  checked={this.state.labels[4].show} color='#1ab2ff' onPress={()=> this.changeCheck(4)} />
                                                <Body>
                                                        <Text>alocação/Remoto</Text>
                                                </Body>
                                        </ListItem>                
                                        <ListItem>
                                                <CheckBox  checked={this.state.labels[5].show} color='#990000' onPress={()=> this.changeCheck(5)} />
                                                <Body>
                                                        <Text>experiência/Em-Aberto</Text>
                                                </Body>
                                        </ListItem>
                                        <ListItem>
                                                <CheckBox  checked={this.state.labels[6].show} color='#990000' onPress={()=> this.changeCheck(6)} />
                                                <Body>
                                                        <Text>experiência/estágio</Text>
                                                </Body>
                                        </ListItem>
                                        <ListItem>
                                                <CheckBox  checked={this.state.labels[7].show} color='#990000' onPress={()=> this.changeCheck(7)} />
                                                <Body>
                                                        <Text>experiência/Júnior</Text>
                                                </Body>
                                        </ListItem>
                                        <ListItem>
                                                <CheckBox  checked={this.state.labels[8].show} color='#990000' onPress={()=> this.changeCheck(8)} />
                                                <Body>
                                                        <Text>experiência/Pleno</Text>
                                                </Body>
                                        </ListItem>
                                        <ListItem>
                                                <CheckBox  checked={this.state.labels[9].show} color='#990000' onPress={()=> this.changeCheck(9)} />
                                                <Body>
                                                        <Text>experiência/Senior</Text>
                                                </Body>
                                        </ListItem>
                                <ListItem>
                                                <CheckBox  checked={this.state.labels[10].show} color='#00cc00' onPress={()=> this.changeCheck(10)} />
                                                <Body>
                                                        <Text>regime/A-Combinar</Text>
                                                </Body>
                                        </ListItem>
                                        <ListItem>
                                                <CheckBox  checked={this.state.labels[11].show} color='#00cc00' onPress={()=> this.changeCheck(11)} />
                                                <Body>
                                                        <Text>regime/CLT</Text>
                                                </Body>
                                        </ListItem>
                                        <ListItem>
                                                <CheckBox  checked={this.state.labels[12].show} color='#00cc00' onPress={()=> this.changeCheck(12)} />
                                                <Body>
                                                        <Text>regime/Estágio</Text>
                                                </Body>
                                        </ListItem>
                                        <ListItem>
                                                <CheckBox  checked={this.state.labels[13].show} color='#00cc00' onPress={()=> this.changeCheck(13)} />
                                                <Body>
                                                        <Text>regime/Freela</Text>
                                                </Body>
                                        </ListItem>
                                        <ListItem>
                                                <CheckBox  checked={this.state.labels[14].show} color='#00cc00' onPress={()=> this.changeCheck(14)} />
                                                <Body>
                                                        <Text>regime/Outros</Text>
                                                </Body>
                                        </ListItem>
                                        <ListItem>
                                                <CheckBox  checked={this.state.labels[15].show} color='#00cc00' onPress={()=> this.changeCheck(15)}/>
                                                <Body>
                                                        <Text>regime/PJ</Text>
                                                </Body>
                                        </ListItem>                                        
                                </Content>
                                <Fab onPress={()=> this.updateFilters()} active={false} position="bottomRight"  style={{ backgroundColor: '#3F51B5' }}>
                                                <Icon name='check' type='FontAwesome' />
                                </Fab>
                        </Container>
                )
        }
}

const mapDispatchToProps = dispatch =>({
        request: (page, filters)=> dispatch(request(page, filters))
})

export default connect(null, mapDispatchToProps)(Filters)