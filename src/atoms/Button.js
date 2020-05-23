import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import MaterialUIButton from "@material-ui/core/Button";

const useStyles = makeStyles(() => ({
  button: {
    //    marginRight: theme.spacing(2),
    color: "#ffffff",
  },
}));

export default function Button(props) {
  const classes = useStyles();

  const text = props.text || "";
  const onClick = props.onClick || function() {};
  const variant = props.variant || "contained";
  const color = props.color || "inherit";
  const style = props.style || classes.button;

  return (
    <MaterialUIButton color={color} variant={variant} className={style} onClick={onClick}>
      {text}
    </MaterialUIButton>
  );
}

// 受け取れるpropsの説明についてはMaterial UIのButtonのpropsを確認
Button.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func,
  variant: PropTypes.string,
  color: PropTypes.string,
  style: PropTypes.object,
};
