import React, { useState } from 'react';
import { styles } from './styles';
import { withStyles, WithStyles } from '@material-ui/core'
import UserComments from '../UserCommets/Comments';

import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';




interface IPeopleItem extends WithStyles<typeof styles> {
    name: string,
    birth: string,
}

const PeopleItem:React.FC<IPeopleItem> = ({ name, birth, classes }) => {
    const [ text, setText ] = useState<string>("");
    const [ comments, setComments ] = useState<any>([]);
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => setText(e.target.value);
    const handleClick = () => {
        setComments([...comments, { textComment: text }]);
        setText("");
    };

    return(
        <ListItem className={classes.root}>
            <Box className={classes.peopleSection}>
              <ListItemText primary={name} secondary={birth} />
              <TextField 
                id="outlined-multiline-static"
                label="Your comments"
                multiline
                rows={2}
                variant="outlined"
                onChange={handleChange}
                value={text}
              />
              <Button onClick={handleClick} disabled={text.length > 0 ? false : true} className={classes.btn} variant="contained" color="primary">
                comment
              </Button>
            </Box>
            <UserComments comments={comments} />
        </ListItem>
    );
}; 

export default withStyles(styles)(PeopleItem);