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
import IconButton from "@material-ui/core/IconButton";
import { Home as HomeIcon } from "@material-ui/icons";
import MenuIcon from "@material-ui/icons/Menu";
import React, { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import "./App.css";
import Footer from "./Footer";
import logo from "./logo.png";
import casino from "./download.jpeg";
import h1 from "../src/assets/h1.jpg"
import h2 from "../src/assets/h2.jpg"
import h3 from "../src/assets/h3.jpg"
import h4 from "../src/assets/h4.jpg"
import cover from "../src/assets/cover.jpg";
import casino1 from "../src/assets/games/118.jpg";
import poker1 from "../src/assets/games/poker.jpg";
import cards1 from "../src/assets/games/120.jpg";
import roulette1 from "../src/assets/games/roulette.jpg";
import bingo1 from "../src/assets/games/bingo.jpg";
import baccarat1 from "../src/assets/games/baccarat.jpg";
import slider1 from "../src/assets/11.jpg"
import slider2 from "../src/assets/12.jpg"
import slider3 from "../src/assets/13.jpg"
import slider4 from "../src/assets/14.jpg"
import slider5 from "../src/assets/15.jpg"
import sslider1 from "../src/assets/sslider1.png"
import sslider2 from "../src/assets/sslider2.png"
import sslider3 from "../src/assets/sslider3.png"
import sslider4 from "../src/assets/sslider4.png"
import Container from "react-bootstrap/Container"

import './Home.css'



const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
    whiteText: {
        color: "white",
    },
    wrapper: {
        width: "100%",
        height: "100%",
        padding: "10px",
        background: "white",


    }
}));

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`full-width-tabpanel-${index}`}
            aria-labelledby={`full-width-tab-${index}`}
            {...other}
        >
            {value === index && <Box p={0}>{children}</Box>}
        </div>
    );
}

function a11yProps(index) {
    return {
        id: `full-width-tab-${index}`,
        "aria-controls": `full-width-tabpanel-${index}`,
    };
}

const Home = () => {
    const classes = useStyles();
    const theme = useTheme();
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    const grids = [1, 2, 3, 4, 5, 6, 7, 8];
    const grids2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    return (
        <div className={classes.root}>
            <AppBar position="static" style={{ backgroundColor: "#111" }}>
                <Tool_bar />
            </AppBar>

            <AppBar position="static" style={{ backgroundColor: "#1a1a1a" }}>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    aria-label="simple tabs example"
                >
                    <Tab label={<HomeIcon />} {...a11yProps(0)} />
                    <Tab label="Casino" {...a11yProps(1)} />
                    <Tab label="Poker" {...a11yProps(2)} />
                    <Tab label="Roulette" {...a11yProps(3)} />
                    <Tab label="Bingo" {...a11yProps(4)} />
                    <Tab label="Baccarat" {...a11yProps(5)} />
                    <Tab label="Cards" {...a11yProps(6)} />

                </Tabs>
            </AppBar>

            <TabPanel value={value} index={0} dir={theme.direction}>
                {/* <div  className="heroSlider"> */}
                <Carousel
                    autoPlay
                    showThumbs={false}
                    stopOnHover
                    swipeable
                    emulateTouch
                    infiniteLoop
                   showStatus={false}
                    showArrows={false}
                    interval={2000}
                   swipeScrollTolerance={3}
                   centerMode
                   centerSlidePercentage={120}
                  
                >
                    <div>
                        <img
                            // className = "heroImage"
                            src={slider1}
                            alt="img1"
                        />
                    </div>
                    <div>
                        <img
                        //   className = "heroImage"
                            src={slider2}
                            alt="img1"
                        />
                    </div>
                    <div >
                        <img
                        //   className = "heroImage"
                            src={slider3}
                            alt="img1"
                        />
                    </div>
                    <div>
                        <img
                        //   className = "heroImage"
                            src={slider4}
                            alt="img1"
                        />
                    </div>
                    <div>
                        <img
                        //  className = "heroImage"
                            src={slider5}
                            alt="img1"
                        />
                    </div>
                </Carousel>
                {/* </div> */}
                {/* <Typography variant="h3" align="center" className={classes.whiteText}>
            Game-Pitara Top Games
          </Typography> */}
           <marquee>
          <Typography className={classes.whiteText}>So finally your wait is over, in this auspicious year we are happy to announance we are going live with GAMEPITARA Soon!</Typography>
        </marquee>
        <Typography variant="h5" align="center" className={classes.whiteText}>
          Go for the Scratch!
        </Typography>
         <Grid container style={{ marginTop: 15, padding: 15, marginBottom: 5 }}>
          <Grid item  xs={12} sm={6} style={{ padding: 10 }} >
              <div className="smallCarouselLeft">
            <Carousel
             autoPlay
              showThumbs={false}
              stopOnHover
              swipeable
              dynamicHeight
              emulateTouch
              infiniteLoop
              showStatus={false}
              showArrows={false}
              interval={2000}
              swipeScrollTolerance={3}
              centerMode
              centerSlidePercentage={120}
              className="smallCarousel"
             
            >
              <div>
                <img
                    className="smallSliderImage"
                  src={sslider1}
                  alt="img1"
                />
              </div>
              <div >
                <img
                  src={sslider2}
                  alt="img1"
                />
              </div>
            
            </Carousel>
            </div>
          </Grid>
          <Grid item xs={12} sm={6} style={{ padding: 10 }} >
              <div className="smallCarouselRight" >
            <Carousel
              autoPlay
              showThumbs={false}
              stopOnHover
              swipeable
              dynamicHeight
              emulateTouch
              infiniteLoop
              showStatus={false}
              showArrows={false}
              interval={2000}
              swipeScrollTolerance={3}
              centerMode
              centerSlidePercentage={120}
              className="smallCarousel"
              
             
            >
              <div >
                <img
                  src={sslider3}
                  alt="img1"
                 
                 
                
                />
              </div>
              <div>
                <img
                  src={sslider4}
                  alt="img1"
                  style={{width: "100%", height: "100%", borderRadius: "10%"}}

                />
              </div>
              
            </Carousel>
            </div>
          </Grid>
        </Grid>
        <Typography variant="h5" align="center" className={classes.whiteText}> Why GamePitara ?{" "} </Typography>
        <Grid container style={{ marginTop: 15, padding: 15, marginBottom: 5 }}> 
        <img src={h1} height={300}  style={{ paddingLeft: 20, paddingRight: 20, borderRadius: "10%" }} /> 
        <img src={h2} height={300} style={{ paddingLeft: 20, paddingRight: 20, borderRadius: "10%" }} /> 
        <img src={h3} height={300} style={{ paddingLeft: 20, paddingRight: 20, borderRadius: "10%" }} /> 
        <img src={h4} height={300} style={{ paddingLeft: 20, paddingRight: 20, borderRadius: "10%" }} /> </Grid>
        <Typography variant="h5" align="center" className={classes.whiteText}>
          Hold Your Breath GamePitara is under maintaince and soon we will be
          launching with these games{" "}
        </Typography>
                <Grid container style={{ marginTop: 15, marginBottom: 10 }}>
                    <Grid
                        item
                        xs={12}
                        sm={4}
                        className="content gradient-border"
                        style={{ padding: "10px" }}
                    >
                        <div className="content-overlay"></div>
                        <img
                            src={casino1}
                            style={{ objectFit: "cover", width: "100%", height: "100%", borderRadius: "10%" }}
                        />
                        <div className="content-details fadeIn-top">
                            <h3>Comming Soon...</h3>
                            <p>Keep checking </p>
                            <Button
                                variant="contained"
                                style={{ margin: 10 }}
                                onClick={() => setValue(1)}
                            >
                                View ALL
                </Button>
                        </div>
                    </Grid>
                    <Grid
                        item
                        xs={12}
                        sm={4}
                        className="content gradient-border"
                        style={{ padding: "10px" }}
                    >
                        <div className="content-overlay"></div>
                        <img
                            src={poker1}
                            style={{ objectFit: "cover", width: "100%", height: "100%" }}
                        />
                        <div className="content-details fadeIn-top">
                            <h3>Coming Soon...</h3>
                            <p>Keep checking </p>
                            <Button
                                variant="contained"
                                style={{ margin: 10 }}
                                onClick={() => setValue(2)}
                            >
                                View ALL
                </Button>
                        </div>
                    </Grid>
                    <Grid
                        item
                        xs={12}
                        sm={4}
                        className="content gradient-border"
                        style={{ padding: "10px" }}
                    >
                        <div className="content-overlay"></div>
                        <img
                            src={bingo1}
                            style={{ objectFit: "cover", width: "100%", height: "100%" }}
                        />
                        <div className="content-details fadeIn-top">
                            <h3>Coming Soon...</h3>
                            <p>Keep checking </p>
                            <Button
                                variant="contained"
                                style={{ margin: 10 }}
                                onClick={() => setValue(4)}
                            >
                                View ALL
                </Button>
                        </div>
                    </Grid>
                    {/* <Grid container xs={12} sm={8}>
                        {grids.map((g) => (
                            <Grid
                                item
                                xs={6}
                                sm={3}
                                style={{ padding: "8px" }}
                                className="content"
                                key={g}
                            >
                                <div className="content-overlay"></div>
                                <img
                                    src={cover}
                                    style={{ objectFit: "cover", width: "100%", height: "100%", borderRadius: "10px"}}
                                />
                                <div className="content-details fadeIn-top">
                                    <h5 style={{color: "white"}}>Coming Soon...</h5>
                                    <p>Keep checking </p>
                                </div>
                            </Grid>
                        ))}
                    </Grid> */}
                </Grid>
                <Grid container style={{ marginTop: 15, marginBottom: 10 }}>
                    <Grid
                        item
                        xs={12}
                        sm={4}
                        className="content gradient-border"
                        style={{ padding: "10px" }}
                    >
                        <div className="content-overlay"></div>
                        <img
                            src={cards1}
                            style={{ objectFit: "cover", width: "100%", height: "100%" }}
                        />
                        <div className="content-details fadeIn-top">
                            <h3>Coming Soon...</h3>
                            <p>Keep checking </p>
                            <Button
                                variant="contained"
                                style={{ margin: 10 }}
                                onClick={() => setValue(6)}
                            >
                                View ALL
                </Button>
                        </div>
                    </Grid>
                    <Grid
                        item
                        xs={12}
                        sm={4}
                        className="content gradient-border"
                        style={{ padding: "10px" }}
                    >
                        <div className="content-overlay"></div>
                        <img
                            src={baccarat1}
                            style={{ objectFit: "cover", width: "100%", height: "100%" }}
                        />
                        <div className="content-details fadeIn-top">
                            <h3>Coming Soon...</h3>
                            <p>Keep checking </p>
                            <Button
                                variant="contained"
                                style={{ margin: 10 }}
                                onClick={() => setValue(5)}
                            >
                                View ALL
                </Button>
                        </div>
                    </Grid>
                    <Grid
                        item
                        xs={12}
                        sm={4}
                        className="content gradient-border"
                        style={{ padding: "10px" }}
                    >
                        <div className="content-overlay"></div>
                        <img
                            src={roulette1}
                            style={{ objectFit: "cover", width: "100%", height: "100%" }}
                        />
                        <div className="content-details fadeIn-top">
                            <h3>Coming Soon...</h3>
                            <p>Keep checking </p>
                            <Button
                                variant="contained"
                                style={{ margin: 10 }}
                                onClick={() => setValue(4)}
                            >
                                View ALL
                </Button>
                        </div>
                    </Grid>
                    {/* <Grid container xs={12} sm={8}>
                        {grids.map((g) => (
                            <Grid
                                item
                                xs={6}
                                sm={3}
                                style={{ padding: "8px" }}
                                className="content"
                                key={g}
                            >
                                <div className="content-overlay"></div>
                                <img
                                    src={cover}
                                    style={{ objectFit: "cover", width: "100%", height: "100%", borderRadius: "10px"}}
                                />
                                <div className="content-details fadeIn-top">
                                    <h5 style={{color: "white"}}>Coming Soon...</h5>
                                    <p>Keep checking </p>
                                </div>
                            </Grid>
                        ))}
                    </Grid> */}
                </Grid>
                {/* <Grid container>
                    <Grid container xs={12} sm={8}>
                        {grids.map((g) => (
                            <Grid
                                item
                                xs={6}
                                sm={3}
                                style={{ padding: "8px" }}
                                className="content"
                                key={g}
                            >
                                <div className="content-overlay"></div>
                                <img
                                    src={casino}
                                    style={{ objectFit: "cover", width: "100%", height: "100%" }}
                                />
                                <div className="content-details fadeIn-top">
                                    <h3>Coming Soon...</h3>
                                    <p>Keep checking </p>
                                </div>
                            </Grid>
                        ))}
                    </Grid>
                    <Grid
                        item
                        xs={12}
                        sm={4}
                        className="content"
                        style={{ padding: "8px" }}
                    >
                        <div className="content-overlay"></div>
                        <img
                            src={casino}
                            style={{ objectFit: "cover", width: "100%", height: "100%" }}
                        />
                        <div className="content-details fadeIn-top">
                            <h3>Coming Soon..</h3>
                            <p>Keep checking </p>
                        </div>
                    </Grid>
                </Grid> */}
            </TabPanel>

            {/* //extra page */}
            <TabPanel value={value} index={1} dir={theme.direction}>
                <img
                    src="https://download.ocms365.com/pn/jw/prod/poster-background/1/1597292172269.jpg"
                    width="100%"
                />
                <Grid container>
                    {grids2.map((g) => (
                        <Grid
                            item
                            xs={6}
                            sm={2}
                            className="content"
                            style={{ padding: "8px" }}
                        >
                            <div className="content-overlay"></div>
                            <img
                                src={cover}
                                style={{ objectFit: "cover", width: "100%", height: "100%" }}
                            />
                            <div className="content-details fadeIn-top">
                                <h5 style={{color:"white"}}>Coming Soon.</h5>
                                <p>Keep checking </p>
                            </div>
                        </Grid>
                    ))}
                </Grid>
            </TabPanel>
            {/* <TabPanel value={value} index={2} dir={theme.direction}>
                <Typography className={classes.whiteText}>Page 3</Typography>
            </TabPanel> */}
             <TabPanel value={value} index={2} dir={theme.direction}>
                <img
                    src="https://download.ocms365.com/pn/jw/prod/poster-background/1/1597292172269.jpg"
                    width="100%"
                />
                <Grid container>
                    {grids2.map((g) => (
                        <Grid
                            item
                            xs={6}
                            sm={2}
                            className="content"
                            style={{ padding: "8px" }}
                        >
                            <div className="content-overlay"></div>
                            <img
                                src={cover}
                                style={{ objectFit: "cover", width: "100%", height: "100%" }}
                            />
                            <div className="content-details fadeIn-top">
                                <h5 style={{color:"white"}}>Coming Soon.</h5>
                                <p>Keep checking </p>
                            </div>
                        </Grid>
                    ))}
                </Grid>
            </TabPanel>
            <TabPanel value={value} index={3} dir={theme.direction}>
                <img
                    src="https://download.ocms365.com/pn/jw/prod/poster-background/1/1597292172269.jpg"
                    width="100%"
                />
                <Grid container>
                    {grids2.map((g) => (
                        <Grid
                            item
                            xs={6}
                            sm={2}
                            className="content"
                            style={{ padding: "8px" }}
                        >
                            <div className="content-overlay"></div>
                            <img
                                src={cover}
                                style={{ objectFit: "cover", width: "100%", height: "100%" }}
                            />
                            <div className="content-details fadeIn-top">
                                <h5 style={{color:"white"}}>Coming Soon.</h5>
                                <p>Keep checking </p>
                            </div>
                        </Grid>
                    ))}
                </Grid>
            </TabPanel>
            <TabPanel value={value} index={4} dir={theme.direction}>
                <img
                    src="https://download.ocms365.com/pn/jw/prod/poster-background/1/1597292172269.jpg"
                    width="100%"
                />
                <Grid container>
                    {grids2.map((g) => (
                        <Grid
                            item
                            xs={6}
                            sm={2}
                            className="content"
                            style={{ padding: "8px" }}
                        >
                            <div className="content-overlay"></div>
                            <img
                                src={cover}
                                style={{ objectFit: "cover", width: "100%", height: "100%" }}
                            />
                            <div className="content-details fadeIn-top">
                                <h5 style={{color:"white"}}>Coming Soon.</h5>
                                <p>Keep checking </p>
                            </div>
                        </Grid>
                    ))}
                </Grid>
            </TabPanel>
            <TabPanel value={value} index={5} dir={theme.direction}>
                <img
                    src="https://download.ocms365.com/pn/jw/prod/poster-background/1/1597292172269.jpg"
                    width="100%"
                />
                <Grid container>
                    {grids2.map((g) => (
                        <Grid
                            item
                            xs={6}
                            sm={2}
                            className="content"
                            style={{ padding: "8px" }}
                        >
                            <div className="content-overlay"></div>
                            <img
                                src={cover}
                                style={{ objectFit: "cover", width: "100%", height: "100%" }}
                            />
                            <div className="content-details fadeIn-top">
                                <h5 style={{color:"white"}}>Coming Soon.</h5>
                                <p>Keep checking </p>
                            </div>
                        </Grid>
                    ))}
                </Grid>
            </TabPanel>
            <TabPanel value={value} index={6} dir={theme.direction}>
                <img
                    src="https://download.ocms365.com/pn/jw/prod/poster-background/1/1597292172269.jpg"
                    width="100%"
                />
                <Grid container>
                    {grids2.map((g) => (
                        <Grid
                            item
                            xs={6}
                            sm={2}
                            className="content"
                            style={{ padding: "8px" }}
                        >
                            <div className="content-overlay"></div>
                            <img
                                src={cover}
                                style={{ objectFit: "cover", width: "100%", height: "100%" }}
                            />
                            <div className="content-details fadeIn-top">
                                <h5 style={{color:"white"}}>Coming Soon.</h5>
                                <p>Keep checking </p>
                            </div>
                        </Grid>
                    ))}
                </Grid>
            </TabPanel>
        </div>
    );
};

export default Home;
