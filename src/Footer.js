import Container from "@material-ui/core/Container";
import { Box, Divider } from "@material-ui/core";
import {
    FacebookIcon,TelegramIcon,
    TwitterIcon,  EmailIcon,WhatsappIcon,
    PinterestIcon} from 'react-share';
    import Slider from "react-slick";
    import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import React from "react";
import './footer.css';

import logo from "./logo.png";
import p1 from "./paymentmethods/p1.png";
import p2 from "./paymentmethods/p2.png";
import p3 from "./paymentmethods/p3.png";
import p4 from "./paymentmethods/p4.png";
import p5 from "./paymentmethods/p5.png";
import p6 from "./paymentmethods/p6.png";
import p7 from "./paymentmethods/p7.png";
import p8 from "./paymentmethods/p8.png";
import g1 from "./gameproviders/g1.png";
import g2 from "./gameproviders/g2.png";
import g3 from "./gameproviders/g3.png";
import g4 from "./gameproviders/g4.jpg";
import g5 from "./gameproviders/g5.png";
import g6 from "./gameproviders/g6.jpg";
import g7 from "./gameproviders/g7.jpg";
import g8 from "./gameproviders/g8.jpg";
import g9 from "./gameproviders/g9.png";
import g10 from "./gameproviders/g10.png";
import g11 from "./gameproviders/g11.png";
import g12 from "./gameproviders/g12.jpg";
import g13 from "./gameproviders/g13.png";
import p18 from "./gameproviders/18+.png";
import iosandroid from "./assets/iosandroid.png";


function Copyright() {
  return (
    <React.Fragment>
    
    </React.Fragment>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    backgroundColor: theme.palette.secondary.light,
   
  },
  container: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(8),
    display: "flex",
    
    
   
  },
  buItem:{
    paddingTop: theme.spacing(1),
    fontSize: "14px", color: "#8f99a3",
  },
  bbItem:{
    paddingBottom: theme.spacing(1),
    fontSize: "14px", color: "#8f99a3",
  },
  iconsWrapper: {
    height: 150,
  },
  icons: {
    display: "flex",
  },
  icon: {
    width: 48,
    height: 48,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: theme.palette.warning.main,
    marginRight: theme.spacing(1),
    "&:hover": {
      backgroundColor: theme.palette.warning.dark,
    },
  },
  list: {
    margin: 0,
    listStyle: "none",
    padding: 0,
  },
  listItem: {
    paddingTop: theme.spacing(0.5),
    paddingBottom: theme.spacing(0.5),
  },
  language: {
    marginTop: theme.spacing(1),
    width: 150,
    color: "white",
  },
  link: {
    color: "#8f99a3",
    fontSize: "14px",
  },
  whiteText: {
    color: "white",
  },
  copyrht:{
    color: "white",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
 
}));

export default function AppFooter() {
  const classes = useStyles();
  
  const settings = {
    infinite: true,
    slidesToShow: 7,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    arrows: false,
    autoplaySpeed: 1500,
    cssEase: "ease-out",
    responsive: [
      {
      breakpoint:600,
      settings:{
        slidesToShow: 3,

      }   
    },
    {
      breakpoint:480,
      settings:{
        slidesToShow: 2,

      },
    }
  ]
  };
  return (
    <>
      <Typography
        component="footer"
        style={{ display: "flex", backgroundColor: "#111", color: "white",  }}
      >
        <Container className={classes.container}>
          <Grid container spacing={5} style={{justifyContent:"space-evenly"}}>
            <Grid item xs={12} sm={12} md={3}>
              <Grid
                container
                direction="column"
                justify="flex-end"
                className={classes.iconsWrapper}
                spacing={2}
              >
               <Grid container>
                <ul className={classes.list}><li>
                <Grid item className={classes.icons}>
                  <Link href="#">
                    <img src={logo} width={220} alt="logo" />
                  </Link>
                  </Grid>
                  </li>
                    <li className={classes.buItem}>Asia's Best Online Casino Slot &</li>
                    <li className={classes.bbItem}> Live Games</li>
                    <li><img src={p18} width={40} height={40} alt="logo" /> Be Responsible</li>
                  </ul>
                </Grid>
                <Grid item>
                  <Copyright />
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={6} md={2}>
              <Typography variant="h6" marked="left" gutterBottom>
                Menu
              </Typography>
              <ul className={classes.list}>
                <li className={classes.listItem}>
                  <Link className={classes.link} href="#">
                    Online Casino Games
                  </Link>
                </li>
                <li className={classes.listItem}>
                  <Link className={classes.link} href="#">
                    Casino Slot Games
                  </Link>
                </li>
                <li className={classes.listItem}>
                  <Link className={classes.link} href="#">
                    Casino Table Games
                  </Link>
                </li>
                <li className={classes.listItem}>
                  <Link className={classes.link} href="#">
                    Tournament
                  </Link>
                </li>
              </ul>
            </Grid>
            <Grid item xs={6} md={2}>
              <Typography variant="h6" marked="left" gutterBottom>
                Quick Links
              </Typography>
              <ul className={classes.list}>
                <li className={classes.listItem}>
                  <Link className={classes.link} href="#">
                    Brand Ambasder
                  </Link>
                </li>
                <li className={classes.listItem}>
                  <Link className={classes.link} href="#">
                    FAQ
                  </Link>
                </li>
                <li className={classes.listItem}>
                  <Link className={classes.link} href="#">
                    Blog
                  </Link>
                </li>
                <li className={classes.listItem}>
                  <Link className={classes.link} href="#">
                    Contact Us
                  </Link>
                </li>
                <li className={classes.listItem}>
                  <Link className={classes.link} href="#">
                    About us
                  </Link>
                </li>
              </ul>
            </Grid>
            <Grid item xs={6} md={2}>
              <Typography variant="h6" marked="left" gutterBottom>
                Get In Touch
              </Typography>
              <Grid container justify="space-between">
                <FacebookIcon className="socialicon" size={48} round={true} />
                <EmailIcon className="socialicon"  size={48} round={true} />
                <TwitterIcon className="socialicon"  size={48} round={true} />
                <PinterestIcon className="socialicon"  size={48} round={true}/>
                <WhatsappIcon  className="socialicon"  size={48} round={true} />
                                <TelegramIcon  className="socialicon"  size={48} round={true} />
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Typography>
      <Box style={{ paddingBottom:20}}>
        <Grid container justify="space-around">
          <Grid item xs={12}  style={{ paddingBottom:15 }}>
            <Typography 
              variant="h5"
              className={classes.whiteText}
              align="center" >
              GAME PROVIDERS
            </Typography>
          </Grid>
        
        </Grid>
      </Box>
      <Grid >
      <div className="App" style={{paddingBottom:15, alignItems:"center"}}>
      <Slider {...settings}>
      <div>
          <img src={g1} height={40}  />
          </div>
          <div >
          <img src={g2} height={40} />
          </div>
          <div >
          <img src={g3} height={40} />
          </div>
          <div>
          <img src={g4} height={40} />
          </div>
          <div>
          <img src={g5} height={40}  />
          </div>
          <div >
          <img src={g6} height={40} />
          </div>
          <div >
          <img src={g7} height={40}  />
          </div>
          <div >
          <img src={g8} height={40} />
          </div>
          <div>
          <img src={g9} height={40} />
          </div>
          <div >
          <img src={g10} height={40} />
          </div>
          <div >
          <img src={g11} height={40} />
          </div>
          <div >
          <img src={g12} height={40} />
          </div>
          <div >
          <img src={g13} height={40} />
          </div>
      </Slider>
    </div>
   
    </Grid>
      <Box  style={{ paddingBottom:20}}>
        <Grid container justify="space-around">
          <Grid item xs={12}>
            <Typography
              variant="h5"
              className={classes.whiteText}
              align="center"
            >
              PAYMENT PROVIDERS
            </Typography>
          </Grid>
          <img src={p1} height={40} style={{ margin: 20 }} />
          <img src={p2} height={40} style={{ margin: 20 }} />
          <img src={p3} height={40} style={{ margin: 20 }} />
          <img src={p4} height={40} style={{ margin: 20 }} />
          <img src={p5} height={40} style={{ margin: 20 }} />
          <img src={p6} height={40} style={{ margin: 20 }} />
          <img src={p7} height={40} style={{ margin: 20 }} />
          <img src={p8} height={40} style={{ margin: 20 }} />
          {/* <img src={iosandroid} height={120} width={180} ></img> */}
        </Grid>
      </Box>
      {/* <div  style={{ display: "block",justifyContent: "end",alignItems: "end", height:40}}>
      <img src={iosandroid} height={50} ></img>
      </div> */}
      
      <div className={classes.copyrht} style={{backgroundColor:"#232323",justifyContent: "center",alignItems: "center", height:40}} >
       {"   "}
     © 2021 Game Pitara Pvt Ltd
      {" "}
      {new Date().getFullYear()}
 
      </div>
        
    </>
  );
}
