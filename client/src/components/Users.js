import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { Card } from 'semantic-ui-react'
import { Link } from 'react-router-dom';

class Users extends React.Component {
    state = { users: [],  }

    componentDidMount(){
        axios.get('/api/users')
        .then( res => {
            this.setState({users: res.data})
        } )
    }

    updateUser = id => {
        axios.put(`/api/users/${id}`)
        .then(({data}) => {
            const users = this.state.users.map( user => {
                if (user.id === id)
                    return data
                return user
            })
            this.setState({users})
        })
    }

    render(){
        const { users } = this.state
        return(
            <Main>
            <Card.Group itemsPerRow={4}>
            { users.map( user => 
                <Card key={user.id}>
                <Card.Content>
                <Link to={`/users/${user.id}`}>
                    <Card.Header>{user.email}</Card.Header>
                </Link>
                </Card.Content>
                <Card.Content onClick={() => this.updateUser(user.id)}>
                <NewStyle>
                    { user.admin ? <AdminStyle>Admin</AdminStyle> : <ApprovalNeeded>Needs Approval</ApprovalNeeded> }
                </NewStyle>
                </Card.Content>
                </Card>
                ) }
            </Card.Group>
            </Main>
        )
    }
}
const Main = styled.div`
`
const NewStyle = styled.div`
    margin: 10px;
    float: left;
`
const AdminStyle = styled.p`
    color: green;
`
const ApprovalNeeded = styled.p`
    color: red;
`


export default Users;