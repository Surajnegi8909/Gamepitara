import React, { useState } from 'react'
import pic from './aboutus_back.jpg'
import { Row, Col, Container } from 'react-bootstrap'
import { Home as HomeIcon } from "@material-ui/icons";
import {
    AppBar,
    Box,
    Grid,
    makeStyles,
    Tab,
    Tabs,
    Toolbar,
    Typography,
    useTheme,
    Button,
} from "@material-ui/core";
import Tool_bar from './Tool_bar'


function a11yProps(index) {
    return {
        id: `full-width-tab-${index}`,
        "aria-controls": `full-width-tabpanel-${index}`,
    };
}
const About_us = () => {
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <div style={{ background: 'rgb(17, 17, 17)' }} className="aboutus_page">
            <AppBar position="static" style={{ backgroundColor: "#111" }}>
                <Tool_bar />
            </AppBar>

            {/* <AppBar position="static" style={{ backgroundColor: "#1a1a1a" }}>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    aria-label="simple tabs example"
                >
                    <Tab label={<HomeIcon />} {...a11yProps(0)} />
                    <Tab label="Item Two" {...a11yProps(1)} />
                    <Tab label="Item Three" {...a11yProps(2)} />
                </Tabs>
            </AppBar> */}


            <div className="image_aboutus">
                <img src={pic} />

            </div>
            <Container>
                <br />
                <br />
                <div style={{ textAlign: 'center' }}>
                    <h4>#1 Online Gambling Casino in India</h4>
                    <p className="first_p_aboutus">Gamepitara is a hub for popular online casinos,  sports betting, and several entertainment games in India. We at Gamepitara offer a broad range of exciting games such as Roulette, Baccarat, Andar Bahar, Sic Bo, Fan Tan, and Dragon Tiger. We make sure every game you play with us is with experienced and certified live dealers. Explore our finest range of slots games and live bets from our vast collection of worldwide sports events. We provide an impressive sign-up bonus on the first sign-up, also we give premium promotions and unlimited cashback back for our gamers. You do not require to make any deposit!
We at Gamepitara keep entertainment and fun along with the safest gaming atmosphere as the top priority. You can reach out to us for any assistance from any corner of the world, we are available round the clock.</p>
                </div>
                <br />
                <Row>
                    <Col md={6} xs={12} sm={12}>
                        <h4>Our Values</h4>
                        <p>At Gamepitara we firmly believe that online casinos and entertainment games should be an exhilarating experience for our gamers. We are strongly committed to making a healthy and fun ambiance for everyone. 
We truly understand the issues with transparency throughout the games among our first-time players.</p>
                    </Col>
                    <Col md={6} xs={12} sm={12}>
                        <h4>Our History</h4>
                        <p>We make sure games are fair employing certified RNG or Random Number Generator. We always test each software to avoid delivering unfair results. We do not entertain players less than 18 years of age. We have no tolerance for any fraud or scammers, Gamepitara takes immediate actions against fraudulent activities.</p>

                        
                    </Col>
                </Row>
            </Container>

        </div>
    )
}

export default About_us