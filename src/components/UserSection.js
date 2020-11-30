import React from "react";
import "../styles/UserSection.css";
import { Avatar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
function UserSection() {
  const useStyles = makeStyles((theme) => ({
    root: {
      display: "flex",
      "& > *": {
        margin: theme.spacing(1),
      },
    },
    small: {
      width: theme.spacing(3),
      height: theme.spacing(3),
    },
    large: {
      width: theme.spacing(7),
      height: theme.spacing(7),
    },
  }));
  const classes = useStyles();
  return (
    <div className="userSection">
      <Avatar className={classes.large} />
      <h3 className="userSection-name">Stephen Plummer</h3>
      <p className="userSection-email">StephenPlummer@gmail.com</p>
    </div>
  );
}

export default UserSection;
