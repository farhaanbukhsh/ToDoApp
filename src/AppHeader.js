import React, {Component} from 'react';
import {Header, Left, Button, Icon, Body, Title} from 'native-base';

export default class AppHeader extends Component{
  render(){
    return(
        <Header backgroundColor={this.props.bColor}>
          <Left>
            <Button transparent>
              <Icon name='menu'/>
            </Button>
          </Left>
          <Body>
            <Title>{this.props.title}</Title>
          </Body>
        </Header>
      );
  }
}
