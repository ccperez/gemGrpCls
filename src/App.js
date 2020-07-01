import React, { Component } from 'react';
import axios from 'axios';

import { Link } from 'react-router-dom';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { users: [] };
  }

  componentDidMount() {
    axios.get('/api/user').then(res => {
      this.setState({ users: res.data });
    });
  }

  delete(id) {
    // console.log(id);
    if (window.confirm("Are you sure need to delete this item?")) { 
      axios.delete('/api/user/'+id).then(() => {
        document.getElementById('user-'+id).remove();
      });
    }
  }  

  render() {
    const users = this.state.users;
    return (
      <div className="container"> 
        <div className="panel panel-default">
          <div className="panel-heading">
            <h3 className="panel-title">USER LIST</h3>
          </div>
          <div className="panel-body">
            <h4><Link to="/create"><span className="glyphicon glyphicon-plus-sign" aria-hidden="true"></span> New User</Link></h4>
            <table className="table table-hover">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Age</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {users.map(user =>
                  <tr key={user.id} id={`user-${user.id}`}>
                    <td><Link to={`/show/${user.id}`}>{user.name}</Link></td>
                    <td>{user.email}</td>
                    <td>{user.age}</td>
                    <td><Link to={`/edit/${user.id}`}>Edit</Link> | <a href="#" onClick={this.delete.bind(this, user.id)}>Delete</a></td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>  
        </div>
      </div>          
    );
  }
}

export default App;