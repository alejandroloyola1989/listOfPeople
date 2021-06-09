import React from 'react'
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

const person = ({id, name, removePerson}) => {
    return (        
        <div>         
            <List component="nav" aria-label="main mailbox folders">
                <ListItem button>
                    <h4>{name}</h4>            
                    <IconButton edge="end" aria-label="delete" onClick={() => removePerson(id)}>
                        <DeleteIcon />
                    </IconButton>
                </ListItem>                
            </List>            
        </div>
    )
}

export default person;
