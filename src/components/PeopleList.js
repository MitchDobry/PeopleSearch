import { Box } from "@material-ui/core";
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';

import { useSelector } from "react-redux";
import { Alert, AlertTitle } from '@material-ui/lab';
import Avatar from '@material-ui/core/Avatar';
import Divider from '@material-ui/core/Divider';

import {
  XHR_STATUS_IDLE,
  XHR_STATUS_PENDING,
  XHR_STATUS_REJECTED,
  XHR_STATUS_FULFILLED,
} from "../consts";

import BasicModal from './BasicModal'

const Person = (props) => (
      <ListItem>
        <ListItemAvatar >
        <Avatar style={{width:'50px', height:'auto'}} alt={props.name.first} src={props.picture.thumbnail} />
        </ListItemAvatar>
        <ListItemText style={{padding:'0.5rem'}}>
        {props.name.title}. {props.name.first} {props.name.last}
        </ListItemText>
        <ListItemText style={{padding:'0.5rem'}}>
        City: {props.location.city}
        </ListItemText>
        <BasicModal {...props} />
      </ListItem>
);

function Results() {
  const results = useSelector((state) => state.results.entities.results);
  const status = useSelector((state) => state.results.status);

  console.log(results);
  switch (status) {
    case XHR_STATUS_IDLE:
      return (
        <Alert severity="info">
        <AlertTitle>Info</AlertTitle>
        Please whait.
      </Alert>
      );
    case XHR_STATUS_PENDING:
      return (
        <Alert severity="info">
        <AlertTitle>Info</AlertTitle>
        Data is loading...
      </Alert>
      );
    case XHR_STATUS_REJECTED:
      return (
        <Alert severity="error">
        <AlertTitle>Error</AlertTitle>
        There was an error, oh my :()
      </Alert>
      );
    case XHR_STATUS_FULFILLED:
      return [...results]
        .map((result) => (
          <Box key={result.dob.date}>
            <Person key={result.id.value} {...result} />
            <Divider />
          </Box>
        ));
    default:
      return null;
  }
}

export default Results;
