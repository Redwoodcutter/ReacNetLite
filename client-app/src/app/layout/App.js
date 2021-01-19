import React, { useState, useEffect, Fragment } from 'react';
import axios from 'axios'
import {Container, List} from 'semantic-ui-react';
import NavBar from '../../features/nav/NavBar';


const App = () => {
  const [activities, setActivities] = useState([])
  useEffect(() => {
      axios
      .get('http://localhost:5000/api/activities')
      .then(response => {
          setActivities(response.data)
      });
  },[]);

// componentDidMount(){
//   axios.get('http://localhost:5000/api/activities')
//     .then((response) => {
//       this.state = 
//       this.setState({
//         activities: response.data
//       });
//     });
// }


    return (
      <Fragment>
        <NavBar></NavBar>
        <Container style={{marginTop: '7em'}}>
          <List>
            {activities.map((activities) => (
                <List.Item key={activities.id}>{activities.title}</List.Item>
              ))}
        </List>
        </Container>
      </Fragment>
    );
  }


export default App;
