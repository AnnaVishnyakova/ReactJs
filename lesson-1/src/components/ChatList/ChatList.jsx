import React from 'react';
import './ChatList.css';
import MenuList from '@material-ui/core/MenuList';
import MenuItem from '@material-ui/core/MenuItem';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Typography from '@material-ui/core/Typography';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';
import PriorityHighIcon from '@material-ui/icons/PriorityHigh';


export class ChatList extends React.Component{
    render (){
        return(
            <div className='ChatList'>
        <MenuList>
        <MenuItem>
          <ListItemIcon>
            <SendIcon fontSize="small" />
          </ListItemIcon>
          <Typography variant="inherit">Chat 1</Typography>
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
          <SendIcon fontSize="small" />
          </ListItemIcon>
          <Typography variant="inherit">Chat 2</Typography>
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
          <SendIcon fontSize="small" />
          </ListItemIcon>
          <Typography variant="inherit" noWrap>Chat 3</Typography>
        </MenuItem>
        </MenuList>
            </div>
        )
    }
}

