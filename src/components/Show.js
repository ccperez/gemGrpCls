import React, { Component } from 'react';
import { Link, withRouter  } from 'react-router-dom';
import axios from 'axios';


class Show extends Component {

  constructor(props) {
    super(props);
    this.state = { user: {} };
  }

  componentDidMount() {
    const id = this.props.match.params.id;
    axios.get('/api/user/'+id).then(res => {
      this.setState({ user: res.data });
      // console.log(this.state.user);
    });
  }

  delete(id) {
    // console.log(id);
    if (window.confirm("Are you sure need to delete this item?")) { 
      axios.delete('/api/user/'+id).then((result) => {
        this.props.history.push("/")
      });
    }
  }  

  render() {
    const history = this.props.history;
    const user = this.state.user;
    return (
      <div className="container">
        <div className="panel panel-default">
          <div className="panel-heading">
            <h3 className="panel-title">SHOW USER</h3>
          </div>
          <div className="panel-body">
            <h4><Link to="/"><span className="glyphicon glyphicon-th-list" aria-hidden="true"></span> User List</Link></h4>
            <dl>
              <dt>Name:</dt>
              <dd>{user.name}</dd>
              <dt>Email:</dt>
              <dd>{user.email}</dd>
              <dt>Age:</dt>
              <dd>{user.age}</dd>
            </dl>
            <Link to={`/edit/${user.id}`} className="btn btn-success">Edit</Link>&nbsp;
            <button onClick={this.delete.bind(this, user.id)} className="btn btn-danger">DELETE</button>
          </div>
        </div>
      </div>         
    );
  }
}

export default withRouter(Show);
