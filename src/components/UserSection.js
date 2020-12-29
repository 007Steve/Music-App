import React from "react";
import "../styles/UserSection.css";
import { Avatar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { selectUser } from "../features/userSlice";
import { useSelector } from "react-redux";
function UserSection() {
// user state
  const user = useSelector(selectUser);
  console.log(user.name)
//material ui style for larger avatar
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
      <Avatar className={classes.large}  src=""/>
      <h3 className="userSection-name">{user.name}</h3>
      <p className="userSection-email">{user.email}</p>
    </div>
  );
}

export default UserSection;
