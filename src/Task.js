import React, {Component} from 'react';
import {ListItem, CheckBox, Text, Icon, Right} from 'native-base';

export default class Task extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: this.props.task.status,
      index: this.props.task.index,
    };
    this.handleToggle = this.handleToggle.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }
  handleToggle = () => {
    this.setState({status: !this.state.status});
    this.props.changeStatus(this.state.index);
  }
  handleDelete = () =>{
    this.props.handleDelete(this.state.index);
  }
  render(){
    return(
      <ListItem key={this.props.task.index}>
        <CheckBox checked={this.state.status} onPress={this.handleToggle}/>
        <Text>{this.props.task.text}</Text>
        <Right>
          <Icon name="close" onPress={this.handleDelete}/>
        </Right>
      </ListItem>
    );
  }
}
