import React from 'react';
import styled from 'styled-components';

const Footer = () => (
<Main>
    <Container>
        <Header>Location</Header>
    </Container>
    <div>

    </div>
    <div>

    </div>
</Main>
);

export default Footer;

const Main = styled.div`
height: 200px;
background-color: grey;
`
const Container = styled.div`
    margin: 25px;
    padding: 30px;
    color: white;
`
const Header = styled.h1`
font-size: 20px !important;
font-decoration: underlined
`