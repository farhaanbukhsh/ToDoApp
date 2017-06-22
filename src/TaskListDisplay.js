import React, {Component} from 'react';
import { Container, Content, List, ListItem, Text, CheckBox } from 'native-base';

import Task from './Task';

export default class TaskListDisplay extends Component{
  constructor(props){
    super(props);
  }
  render(){
    let tasks = this.props.taskList.map((task) => {
      return(
        <Task  key={task.index} task={task} changeStatus={this.props.changeStatus} handleDelete={this.props.handleDelete}/>
      );
    })
    return (
     <Container>
         <Content>
             <List>
              {tasks}
             </List>
         </Content>
     </Container>
   );
  }
}
