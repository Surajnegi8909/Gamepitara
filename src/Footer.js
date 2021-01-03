import Container from "@material-ui/core/Container";
import { Box } from "@material-ui/core";

import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import React from "react";
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
import {
  Facebook,
  Instagram,
  Twitter,
  Pinterest,
  Mail,
} from "@material-ui/icons";

function Copyright() {
  return (
    <React.Fragment>
      {"© "}
      <Link color="inherit" href="https://www.gamepitara.com">
        2021 Game Pitara Pvt Ltd
      </Link>{" "}
      {new Date().getFullYear()}
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
  iconsWrapper: {
    height: 120,
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
}));

export default function AppFooter() {
  const classes = useStyles();

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
                <Grid item className={classes.icons}>
                  <Link href="#">
                    <img src={logo} width={200} alt="logo" />
                  </Link>
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
                <Facebook />
                <Instagram />
                <Mail />
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Typography>
      <Box>
        <Grid container justify="space-around">
          <Grid item xs={12}>
            <Typography
              variant="h5"
              className={classes.whiteText}
              align="center"
            >
              GAME PROVIDERS
            </Typography>
          </Grid>
          <img src={g1} height={40} style={{ margin: 20 }} />
          <img src={g2} height={40} style={{ margin: 20 }} />
          <img src={g3} height={40} style={{ margin: 20 }} />
          <img src={g4} height={40} style={{ margin: 20 }} />
        </Grid>
      </Box>
      <Box>
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
        </Grid>
      </Box>
    </>
  );
}
