/*
*TaskScreen
*/
import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet
} from 'react-native';

import TasksHeader from './../Components/TasksHeader';
import TaskList from './../Components/TaskList';

export default class TasksScreen extends Component {
  constructor(props){
    super(props);
    this.state = {
      tasks: [
        { id: 1, title:'Comprar leche', completed: false },
        { id: 2, title:'Sacar la basura', completed: false },
        { id: 3, title:'Lavar los platos', completed: true },
        { id: 4, title:'Hacer una peda', completed: false },
        { id: 5, title:'Quitarme la cruda', completed: false },
        {id: 6, title: 'Netflix and chill', completed: false}
      ]
    }
  }


  render(){
    return (
      <View style={ styles.container }>
        <TasksHeader />
        <View style={ styles.tasksContainer }>
          <TaskList tasks={this.state.tasks}/>
        </View>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1
  },tasksContainer: {
    backgroundColor: 'white',
    flex: 1
  }
});
