import React, { Component } from 'react';

import { FlatList, View, Text } from 'react-native';
//import { ListItem } from "react-native-elements";


import api from '../../services/api';

import {
  Container,
  Header,
  HeaderText, 
  Scroll, 
  Footer, 
  FooterInput,
  Button,
  ButtonText,
  ErrorMessage,
  WarningMessage, 
  SuccessMessage
} from './styles';

export default class Main extends Component {
  
  state = { 
    title: '', 
    tasks: [], 
    error: '', 
    warning: '', 
    success: '',
    refreshing: false,
    loading: false
  };

  handleTitleChange = (title) => {
    this.setState({ title });
  };

  handleAddTask = async () => {
    if (this.state.title.length === 0) {
      this.setState({ error: 'Preencha um nome para a tarefa!' }, () => false);
    } else {
      try {
        const response = await api.post('/tasks', {
          title: this.state.title
        });

        this.handleRefresh()
      } catch (_err) {
        this.setState({ error: 'Houve um problema com a criação da tarefa' });
      }
    }
  };

  handleRefresh = () => {
    this.setState(
      {
        refreshing: true
      },
      () => {
        this.getTasks();
      }
    );
  };

  getTasks = async () => {
    this.setState({ loading: true })
    try {
      const response = await api.get('/tasks');
      this.setState({
        tasks: response.data,
        loading: false,
        refreshing: false
      });
    } catch(err) {
      this.setState({ error: 'Houve um problema para carregar as tarefas', loading: false });;
    }
  }

  componentDidMount() {
    this.getTasks()
  }
  
  render() {
    return (
      <Container>
        <Header>
          <HeaderText>- TASKS -</HeaderText>
        </Header>

        <Scroll>

          {this.state.success.length !== 0 && <SuccessMessage>{this.state.success}</SuccessMessage>}
          {this.state.error.length !== 0 && <ErrorMessage>{this.state.error}</ErrorMessage>}
          {this.state.warning.length !== 0 && <WarningMessage>{this.state.warning}</WarningMessage>}
        </Scroll>
        <FlatList
          data={this.state.tasks}
          renderItem={({ item }) => (
            <View>
              <Text>{item.title}</Text> 
            </View>          

          )}
          keyExtractor={item => item.id}
          onRefresh={this.handleRefresh}
          refreshing={this.state.refreshing}
          onEndReachedThreshold={50}
        />
        <Footer>
          <FooterInput
            placeholder='> task'
            value={this.state.title}
            onChangeText={this.handleTitleChange}
            placeholderTextColor='white'
            underlineColorAndroid='transparent'
            >
          </FooterInput>
        </Footer>

        <Button onPress={this.handleAddTask}>
          <ButtonText>+</ButtonText>
        </Button>
      </Container>
    );
  }
}