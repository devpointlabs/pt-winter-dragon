import React from 'react';
import { NavLink as Link } from 'react-router-dom';
import { Button, Grid } from 'semantic-ui-react';
import styled from 'styled-components';
import heroimg from '../assets/hero_img.jpg';
import heroimg2 from '../assets/hero2_img.jpg';
import food from '../assets/food.jpg';
import food2 from '../assets/food2.jpg';

const Home = () => (
    <div>
        <div>
            <Hero>
                {/* <Image src={heroimg} alt='hero_img'/> */}
                <h1 style={{fontSize: '50px', fontStyle: 'bold'}}>NEW GOLDEN DRAGON</h1>
                <h5 style={{fontSize: '20px'}}>TRADITION NEVER TASTED SO GOOD</h5>
            </Hero>
            <Section>
                <h1 style={{fontSize: '50px', fontStyle: 'bold'}}>GREAT FOOD. BETTER COMPANY</h1>
                <Paragraph>New Golden Dragon opened in XXXX as a tea parlor and dim sum house.
                    We have served as a neighborhood staple, offering fresh Chinese
                    pastries, steamed buns, dim sum, and much more...
                </Paragraph>
                    <Button as={ButtonLink} style={{borderRadius: '50px', margin: '25px'}}>
                        <Link to='/menu' style={{color: 'black'}}>
                            VIEW MENU
                        </Link>
                    </Button>
            </Section>
            <div style={{margin: '25px'}}>
                <Grid centered columns={2} style={{}}>
                <Grid.Row>
                <Grid.Column style={{maxWidth: '500px', margin: '50px'}}>
                    <Link to='/contact'>
                    <Image src={food} alt='private events' />
                    </Link>
                    <Link to='/contact'>
                    <SubTitle>Private Events | Weddings</SubTitle>
                    </Link>
                    <p>Do you want to celebrate an occasion with family and friends?
                        We have private dining areas to accommodate large groups.
                        Call us for more info.
                    </p>
                </Grid.Column>
                <Grid.Column style={{maxWidth: '500px', margin: '50px'}}>
                    <Link to='/reservations'>
                    <Image src={food2} alt='reservations' />
                    </Link>
                    <Link to='/reservations'>
                    <SubTitle>Happy Hour</SubTitle>
                    </Link>
                    <p>Do you want to celebrate an occasion with family and friends?
                        We have private dining areas to accommodate large groups.
                        Call us for more info.
                    </p>
                </Grid.Column>
                </Grid.Row>
                </Grid>
            </div>
            <Hero2>
                <h1 style={{fontSize: '50px', fontStyle: 'bold'}}>DELIVERY / <br /> TAKEOUT</h1>
                <Link to='/cart'>
                <Button as={ButtonLink} style={{borderRadius: '50px'}}>
                    ORDER ONLINE
                </Button>
                </Link>
            </Hero2>
        </div>
    </div>
);

const Hero = styled.div`
background-image: url(${heroimg});
text-align: center;
color: white;
min-height: 764px;
padding: 265px 0px;
height: 100% !important;
position: relative;
background-position: center;
background-repeat: no-repeat;
background-size: cover;
`
const Image = styled.img`
    max-height: 500px;
`

const Hero2 = styled.div`
background-image: url(${heroimg2});
text-align: center;
color: white;
padding: 200px 0px;
height: 100% !important;
position: relative;
background-position: center;
background-repeat: no-repeat;
background-size: cover;
`

const Section = styled.div`
margin: 25px;
text-align: center;`

const ButtonLink = styled.p`
    color: black !important;
    background-color: #dfd22f !important;
    font-size: 20px !important;
    margin: 25px;
    
`
const Paragraph = styled.p`
text-align: center;
margin: auto;
max-width: 500px;
`
const SubTitle = styled.h5`
color: black !important;
font-size: 25px;
`

export default Home;