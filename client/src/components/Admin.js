import React from 'react';
import { AuthConsumer } from '../providers/AuthProvider';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';
import { Segment, Container, Button} from 'semantic-ui-react';
import axios from 'axios';
import Users from './Users';
import Reservations from './Reservations'
import Taxnfees from './TaxnFees'

class Admin extends React.Component {
    state = { users: [],  reservations: [], }

    componentDidMount(){
        axios.get('/api/users')
        .then( res => {
            this.setState({users: res.data})
        } );
        axios.get('/api/reservations')
        .then(res => {
            this.setState({reservations: res.data})
        })
    }
    
    render() {
        const { auth: {handleLogout} } = this.props
        
        return(
              <Container style={{marginTop:"10%"}}>
                <div>
                <Main>
                    <h1>Welcome to the Admin Page</h1>
                    {/* <div>
                        <h2>Orders</h2>
                        <Segment style={{margin: '15px'}}></Segment>
                    </div> */}
                    <div>
                        <h2>Reservations</h2>
                        <Segment style={{margin: '15px'}}>
                        <Reservations />
                        </Segment>
                    </div>
                    <div>
                        <h2>
                            Menu Options
                            <Segment style={{margin: '15px'}}>
                                <Button>
                            <Link to={'/create-new-menu'}>
                                Menus
                            </Link>
                                </Button>
                            <Link to={'/create-new-menu'}>
                            <Button>
                            Create New Menu
                            </Button>
                            </Link>
                            </Segment>
                            Settings 
                            <Segment>
                              <Taxnfees />
                            </Segment>
                        </h2>
                    </div>
                    <div>
                        <h2>Update Users</h2>
                        <Segment style={{margin: '15px'}}>
                        <Users />
                        </Segment>
                    </div>
                <ButtonLink onClick={() => handleLogout(this.props.history)}>Logout</ButtonLink>
                </Main>
                <br/>
                <br/>
                <br/>
            </div>
          </Container>
        )}
}

export class ConnectedAdmin extends React.Component {
    render() {
        return(
            <AuthConsumer>{
                auth => 
                <Admin {...this.props} auth={auth}/>
            }</AuthConsumer>
        )
    }
}

export default withRouter(ConnectedAdmin);

const Main = styled.div`
text-align: center;
margin: 75px 0px 25px 0px
`
const ButtonLink = styled.p`
    color: black !important;
    background-color: #dfd22f !important;
    font-size: 20px !important;
    cursor: pointer;
    display: inline-block;
    min-height: 1em;
    outline: 0;
    border: none;
    vertical-align: baseline;
    background: #e0e1e2 none;
    font-family: Lato,'Helvetica Neue',Arial,Helvetica,sans-serif;
    margin: 0 .25em 0 0;
    padding: .78571429em 1.5em .78571429em;
    text-transform: none;
    text-shadow: none;
    font-weight: 700;
    line-height: 1em;
    font-style: normal;
    text-align: center;
    text-decoration: none;
    border-radius: .28571429rem;
    box-shadow: 0 0 0 1px transparent inset, 0 0 0 0 rgba(34,36,38,.15) inset;
`