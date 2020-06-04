import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import DatePicker from "./Datepicker"

import { setDate } from "date-fns";
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(0.5),
    },
  },
}));

export default function SmallChips(props) {
  const classes = useStyles();
  const [date, setDate] = React.useState(props.date);
  const handleChange = (date) => {
    props.modify(props.index, 'date', `${date.getDate()}, ${months[date.getMonth()]}`);
    setDate(date);
  };

  var months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const iconSelector = () => {
    if (date == "Set Date") {
      return (
        <DatePicker Change={handleChange} icon="Set Date" date='null' />
      );
    }
    return (
      <DatePicker Change={handleChange} icon='Date' date={`${date.getDate()}, ${months[date.getMonth()]}`} />

    );
  };
  return <div className={classes.root}>{iconSelector(date)}</div>;
}
