import React, { useState, useEffect } from 'react';
import axios from 'axios'
import {Header, Icon, List} from 'semantic-ui-react';
import Navbar from '../../features/nav/Navbar';


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
      <div>
        <Navbar />
       <List>
          {activities.map((activities) => (
              <List.Item key={activities.id}>{activities.title}</List.Item>
            ))}
       </List>
      </div>
    );
  }


export default App;
