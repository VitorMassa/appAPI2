import React, {Component} from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

//Import dos arquivos.
import api from './src/services/api';
import Filmes from './src/Filmes';

class App extends Component{
    constructor(props){
      //Assim ele pode ter acesso as propriedades.
      super(props); 
      //Estado é o lugar onde iremos armazenar os filmes para exibir na tela.
      this.state= {
        filmes: []
      }
    }
    //Declara o comportamento de rodar o código, dentro dele, ao iniciar o app.
    //Por poder demorar, esse método será "async", assim podendo utilizar o await.
    async componentDidMount(){
      //Irá requisitar esse endereço na API, junto com o baseURL no api.js.
      const response = await api.get('r-api/?api=filmes');
      //Irá pegar toda a informação da requisição e armazenar na tabela filmes.
      this.setState({
        filmes: response.data,

      })

    }

    render(){
      return(
        <View style={styles.container}>
          <FlatList 
          data={this.state.filmes}
          keyExtractor={item => item.id.toString()}
          renderItem={ ({item}) => <Filmes data ={item}/>}
          />
        </View>
      );
    }
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#8800FF',
    margin: 50,
    
  },
});

