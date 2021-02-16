import React from 'react';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

type CommentsTypes = {
    textComment: string
}

interface IUserComments {
    comments: Array<CommentsTypes>
}

const UserComments:React.FC<IUserComments> = ({ comments }) => {
    return(
        <List>
        { comments.map(({ textComment }, i:number) => {
          return <ListItem key={i + 1}>
                  <ListItemText primary={textComment} />
          </ListItem>
        }) }
      </List>
    );
};

export default UserComments;