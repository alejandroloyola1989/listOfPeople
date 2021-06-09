import React from 'react';
import Person from './person'; 

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Checkbox from '@material-ui/core/Checkbox';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    maxWidth: 752,
  },
  demo: {
    backgroundColor: theme.palette.background.paper,
  },
  title: {
    margin: theme.spacing(4, 0, 2),
  },
}));

 
const ListPeople = ({people, removePerson, checked, search}) => {    
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>                    
                    <div className={classes.demo}>                                              
                        {people.map((person) => {
                          if(search !== "" ){
                            if(person.name === search){
                              return <Person key={person.id} {...person} removePerson={removePerson}/>
                            }                            
                          } else {
                            if(checked){
                            if(person.gender === "female"){
                              return <Person key={person.id} {...person} removePerson={removePerson}/>
                            }                                           
                          }else{
                            return <Person key={person.id} {...person} removePerson={removePerson}/>
                          }  
                          }                                                  
                        })}
                    </div>                    
                </Grid>                
            </Grid>            
        </div>
    )
}

export default ListPeople;


