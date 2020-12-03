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
      <Avatar className={classes.large}  src="https://media-exp1.licdn.com/dms/image/C4D03AQHeZuu5PGQzYw/profile-displayphoto-shrink_200_200/0/1600449353015?e=1612396800&v=beta&t=HmJnVjehH2c3BhBmzwMjlxoi-LGkKxhVe3ozM2670pk"/>
      <h3 className="userSection-name">Stephen Plummer</h3>
      <p className="userSection-email">StephenPlummer@gmail.com</p>
    </div>
  );
}

export default UserSection;
