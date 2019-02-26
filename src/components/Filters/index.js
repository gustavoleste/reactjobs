import React, { Component}from 'react'
import {request} from '../../redux/actions/api'
import {connect} from 'react-redux'
import LabelBox from './LabelBox'
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
        Button,
        Right
} from 'native-base'

class Filters  extends Component{
        state ={
                labels: [
                        { name: 'alocação/Em-Aberto', color:'#1ab2ff',checked: false},
                        { name: 'alocação/Flexível', color:'#1ab2ff',checked: false},
                        { name: 'alocação/Fora-do-país', color:'#1ab2ff',checked: false},
                        { name: 'alocação/Presencial', color:'#1ab2ff',checked: false},
                        { name: 'alocação/Remoto', color:'#1ab2ff',checked: false},
                        { name: 'experiência/Em-Aberto', color:'#990000',checked: false},
                        { name: 'experiência/estágio', color:'#990000',checked: false},
                        { name: 'experiência/Júnior', color:'#990000',checked: false},
                        { name: 'experiência/Pleno', color:'#990000',checked: false},
                        { name: 'experiência/Senior', color:'#990000',checked: false},
                        { name: 'regime/A-Combinar', color:'#00cc00',checked: false},
                        { name: 'regime/CLT', color:'#00cc00',checked: false},
                        { name: 'regime/Estágio', color:'#00cc00',checked: false},
                        { name: 'regime/Freela', color:'#00cc00',checked: false},
                        { name: 'regime/Outros', color:'#00cc00',checked: false},
                        { name: 'regime/PJ', color:'#00cc00',checked: false}
                ],
                pages: {
                        current: 1,
                        next: 2,
                        last:1
                }
        }

        componentDidMount(){
                this.syncLabels(this.props.filters)
        }

        changeCheck = item =>{
                const { name, color, checked} = item
                const index = this.state.labels.indexOf(item)
                const newLabels = [...this.state.labels]
                newLabels[index] = {name, color, checked: !checked }
                this.setState({
                        labels: newLabels
                })
        }

        clearFilters = () =>{
                const newLabels = this.state.labels
                newLabels.map( label => label.checked = false)
                this.setState({
                        labels: newLabels
                })
        }

        syncLabels = filters =>{
                if(filters.trim() === ''){
                        return console.log('vazio')
                }
                const filtersCheckedTrue = filters.split(',')
                const filtersNames = this.state.labels.map(item => item.name)
                const filtersIndex = filtersCheckedTrue.map( item => filtersNames.indexOf(item))
                const newLabels = [...this.state.labels]
                filtersIndex.map( item => {
                        const {name, color, checked} = newLabels[item]
                        newLabels[item] = {name, color, checked: !checked}
                })
                this.setState({
                        labels: newLabels
                })
                
        }

        updateFilters = () =>{
                const labels = this.state.labels.filter( label => label.checked === true)
                const labelsName = labels.map( label => label.name)
                const filters = labelsName.join(',')
                this.props.request(1,filters)
                this.props.close()
        }

        render(){
                console.log(this.props.filters)
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
                                        <Right>
                                                <Button hasText transparent onPress={this.clearFilters}>
                                                        <Text>Limpar Filtros</Text>
                                                </Button>
                                        </Right>
                                </Header>
                                <Content>
                                        {this.state.labels.map(label => <LabelBox  key={label.name} item={label} changeCheck={this.changeCheck} /> )}                                        
                                </Content>
                                <Fab onPress={()=> this.updateFilters()} active={false} position="bottomRight"  style={{ backgroundColor: '#3F51B5' }}>
                                                <Icon name='check' type='FontAwesome' />
                                </Fab>
                        </Container>
                )
        }
}

const mapStateToProps = state => ({
        filters: state.api.data.filters
})

const mapDispatchToProps = dispatch =>({
        request: (page, filters)=> dispatch(request(page, filters))
})

export default connect(mapStateToProps, mapDispatchToProps)(Filters)