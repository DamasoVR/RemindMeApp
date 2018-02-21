import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet
} from 'react-native';

export default class TasksScreen extends Component{

  constructor(props){
    super(props);
    this.state = {
      tasks: [
        {id: 1, title: 'comprar leche', completed: false},
        {id: 2, title: 'sacar la basura', completed: false},
        {id: 3, title: 'lavar los platos', completed: false},
        {id: 4, title: 'hacer una peda', completed: false},
        {id: 5, title: 'quitarme la cruda', completed: false},
        {id: 6, title: 'netflix and chill', completed: false}
      ]
    }
  }

  render(){
    return (
      <View style={styles.container}>
          <View style={styles.headerContainer}>
                <Image style={styles.userAvatar} source={require('./../images/user-avatar.png')} />
                <Text style={styles.pendingTasksText}>6 Pendientes</Text>
                <Text style={styles.dayText}>Sábado 27 de ENERO 2018</Text>
          </View>

      <View style={styles.tasksContainer}>

        <View style={styles.tasksContainer}>
          <Image style={styles.taskIcon} source={require('./../images/icon-circle.png')} />
          <Text style={styles.taskText}>Ajustar Estilos</Text>
        </View>

      </View>
    </View>
      )
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
  },
  headerContainer:{
    backgroundColor: 'red',
    flex:1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  userAvatar: {
    width:130,
    height:130,
    borderRadius:65
  },
  pendingTasksText:{
    fontSize:36,
    color:'white',
    marginTop:25
  },
  dayText: {
    fontSize:16,
    color:'#A0A0A0',
    marginTop:8
  },
  tasksContainer:{
    backgroundColor: 'green',
    flex:1
  },
  taskContainer: {
    flex:1,
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    padding:10,
    borderStyle: 'solid',
    borderBottomWidth: 2,
    borderColor: '#E7E7E7'
  },
  taskIcon:{
    width:25,
    height:25
  },
  taskText:{
    fontSize:21
  }
});
