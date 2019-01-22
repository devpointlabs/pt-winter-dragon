import React from 'react';
import axios from 'axios';
import {Header} from 'semantic-ui-react'


class User extends React.Component {
    state = { user: {} }

    componentDidMount(){
        axios.get(`/api/users/${this.props.match.params.id}`)
        .then( res => {
            this.setState({user: res.data})
        } )
    }

    handleApproval = (user) => {
        axios.post('/api/users', { user })
        .then( res => {
            this.setState({users: [res.data, ...this.state.users]})
        })
    }

    deleteDepartment = (id) => {
        axios.delete(`/api/users/${id}`)
            .then(res => {
              const {users} = this.state;
              this.setState({users: users.filter(t => t.id !== id)})
            });
      };
    showUser = () => {
        return (
                <div style={{margin: '150px'}}>
                  <Header>User: {this.state.email}</Header>
                  { this.state.admin ? <p>Admin</p> : <p>Needs Approval</p> }
                </div>
        )
    }

      render(){
          return (
              <div>
                  {this.showUser()}
              </div>
          )
      }
    
    
};

export default User;

