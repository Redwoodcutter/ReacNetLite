import React, { Component } from 'react';
import axios from 'axios'
import {Header, Icon, List} from 'semantic-ui-react';


class App extends Component{

state = {
  activities: []
}

componentDidMount(){
  axios.get('http://localhost:5000/api/activities')
    .then((response) => {
      this.state = 
      this.setState({
        activities: response.data
      });
    });
}

  render(){
    return (
      <div>
       <Header as='h2'>
         <Icon name='users' />
           <Header.Content>ReactNetLite</Header.Content>
       </Header>
       <List>
          {this.state.activities.map((activities) => (
              <List.Item key={activities.id}>{activities.title}</List.Item>
            ))}
       </List>
      </div>
    );
  }
}

export default App;
