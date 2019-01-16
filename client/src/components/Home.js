import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Grid, Card } from 'semantic-ui-react';
import styled from 'styled-components';

const Home = () => (
    <div>
        <div>
            <Hero>
                <img src='hero_img' alt='hero_img'/>
                <h1 style={{fontSize: '50px', fontStyle: 'bold'}}>NEW GOLDEN DRAGON</h1>
                <h5 style={{fontSize: '20px'}}>TRADITION NEVER TASTED SO GOOD</h5>
            </Hero>
            <Section>
                <h1 style={{fontSize: '50px', fontStyle: 'bold'}}>GREAT FOOD. BETTER COMPANY</h1>
                <Paragraph>New Golden Dragon opened in XXXX as a tea parlor and dim sum house.
                    We have served as a neighborhood staple, offering fresh Chinese
                    pastries, steamed buns, dim sum, and much more...
                </Paragraph>
                <Link to='/menu'>
                    <Button as={ButtonLink} style={{borderRadius: '50px'}}>
                        VIEW MENU
                    </Button >
                </Link>
            </Section>
            <div style={{margin: '25px'}}>
                <Grid centered columns={2} style={{}}>
                <Grid.Row>
                <Grid.Column style={{maxWidth: '500px'}}>
                    <Link to='/contact'>
                    <img src='wedding_img' alt='private events' />
                    </Link>
                    <Link to='/contact'>
                    <h5>Private Events | Weddings</h5>
                    </Link>
                    <p>Do you want to celebrate an occasion with family and friends?
                        We have private dining areas to accommodate large groups.
                        Call us for more info.
                    </p>
                </Grid.Column>
                <Grid.Column style={{maxWidth: '500px'}}>
                    <Link to='/reservations'>
                    <img src='./assets/happy_hour_img' alt='reservations' />
                    </Link>
                    <Link to='/reservations'>
                    <h5>Happy Hour</h5>
                    </Link>
                    <p>Do you want to celebrate an occasion with family and friends?
                        We have private dining areas to accommodate large groups.
                        Call us for more info.
                    </p>
                </Grid.Column>
                </Grid.Row>
                </Grid>
                <Hero2 style={{margin: '100px'}}>
                    <img src='./assets/hero_img_2' alt='second hero img' />
                    <h1 style={{fontSize: '50px', fontStyle: 'bold'}}>DELIVERY / <br /> TAKEOUT</h1>
                    <Link to='/cart'>
                    <Button as={ButtonLink} style={{borderRadius: '50px'}}>
                        ORDER ONLINE
                    </Button>
                    </Link>
                </Hero2>

            </div>
        </div>
    </div>
);

const Hero = styled.div`
text-align: center;
min-height: 764px;
padding: 265px 0px;
`
const Hero2 = styled.div`
text-align: center;
min-height: 764px;
padding: 200px 0px;
`

const Section = styled.div`
text-align: center;`

const ButtonLink = styled.a`
    color: black !important;
    background-color: yellow !important;
    font-size: 20px !important;
`
const Paragraph = styled.p`
    margin: 25px 400px;
`

export default Home;