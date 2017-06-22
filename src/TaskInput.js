import React, {Component} from 'react';
import {View, TextInput} from 'react-native';
import {Form, Item, Input, Label, Button, Text} from 'native-base';

export default class TaskInput extends Component{
  constructor(props){
    super(props);
    this.state = {
      task: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleButtonPress = this.handleButtonPress.bind(this);
  }
  handleChange(text){
    this.setState({task:text});
  }
  handleButtonPress = () => {
    this.props.updateTaskList(this.state.task);
    this.setState({task: ""});
  }
  render(){
    return(
      <View style={{flexDirection: 'row'}}>
        <Form style={{flex:4}}>
          <Item floatingLabel>
            <Label> Task </Label>
            <Input value={this.state.task} onChangeText={this.handleChange}/>
          </Item>
        </Form>
        <Button danger style={{flex:2, marginTop: 30 }} onPress={this.handleButtonPress}>
          <Text>Add Task</Text>
        </Button>
      </View>
    );
  }
}
