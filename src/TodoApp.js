
import React, { Component } from 'react';
import {AppRegistry} from 'react-native';
import { Container, Button, Text, Right } from 'native-base';

import TaskInput from './TaskInput';
import AppHeader from './AppHeader';
import TaskListDisplay from './TaskListDisplay';
import Styles from './Style';

export default class TodoApp extends Component {
  constructor(props){
    super(props);
    this.state = {
      taskList: []
    };
    this.updateTaskList = this.updateTaskList.bind(this);
    this.changeStatus = this.changeStatus.bind(this);
  }
  updateTaskList = (task) => {
    taskObj={"text": task, "index": this.state.taskList.length, "status": false};
    this.setState({taskList:[ ...this.state.taskList, taskObj]});
  }
  changeStatus = (TaskIndex) => {
    this.state.taskList.filter((task, index) => {
        if(task.index === TaskIndex){
          let newTaskArray = this.state.taskList;
          newTaskObj = {"text": task.text, "index": task.index, "status": !task.status};
          newTaskArray[index] = newTaskObj;
          this.setState({taskList: newTaskArray});
          //task.status = !task.status; //TODO: It should go through setState
        }
    });
  }
  handleDelete = (TaskIndex) =>{
    this.state.taskList.filter((task, index) => {
        if(task.index === TaskIndex){
          let newTaskArray = this.state.taskList;
          newTaskArray.splice(index, 1);
          this.setState({taskList: newTaskArray});
        }
    });
  }
  render() {
    return (
      <Container style={{flex:1}}>
        <AppHeader title={"TodoApp"} bColor={"red"}/>
        <TaskInput updateTaskList={this.updateTaskList}/>
        <TaskListDisplay taskList={this.state.taskList} changeStatus={this.changeStatus} handleDelete={this.handleDelete}/>
      </Container>
    );
  }
}

AppRegistry.registerComponent('TodoApp', () => TodoApp);
