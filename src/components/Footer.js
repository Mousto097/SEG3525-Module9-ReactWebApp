import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Link from "@material-ui/core/Link";
import { FormattedMessage, injectIntl } from "react-intl";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary">
      {/* Copyright © */}
      <FormattedMessage id="footer.copyright" />
      <Link color="inherit" href="https://material-ui.com/">
        {/* A vos crampons */}
        <FormattedMessage id="a.vos.crampons" />
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
  },
  main: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(2),
  },
  footer: {
    padding: theme.spacing(3, 2),
    marginTop: "auto",
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[200]
        : theme.palette.grey[800],
  },
}));

export default function Footer() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <footer className={classes.footer}>
        <Container maxWidth="sm">
          <Typography variant="body1">
            {/* L’ensemble des marques et droits d’auteurs sont utilisés avec le
            consentement de la Major League Soccer. */}
            <FormattedMessage id="footer.content" />
          </Typography>
          <Copyright />
        </Container>
      </footer>
    </div>
  );
}
