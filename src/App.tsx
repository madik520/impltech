import React, { useState, useEffect } from 'react';
import { withStyles, WithStyles, createStyles } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import { API } from './api/api';
import PeopleList from './components/PeopleLists/PeopleLists';
import Preloader from './components/Preloader/Preloader';


const styles = createStyles({
  root:{
    width: "100%",
    minHeight: "100vh",
    backgroundColor: "#F0FFFF",
    display: "flex",
    justifyContent: "center",
  },
});

interface IApp extends WithStyles<typeof styles>{

}

const App:React.FC<IApp> = ({ classes }) => {
  const [people, setPeople] = useState([]);
  const [isFetching, setFetching] = useState(false);

  useEffect(() => {
    getPeople(API);
  }, [])

  const getPeople = async (api: string) => {
    setFetching(true);
    try{
        const response = await fetch(api);
        const data = await response.json();
        setFetching(false);
        return setPeople(data?.results);
    }catch(err){
        setFetching(false);
        return console.log(err);
    }
  };

  return (
    <div className={classes.root}>
      <Container maxWidth="sm">
        {!isFetching ? <PeopleList arr={people} /> : <Preloader />}
      </Container>
    </div>
  );
};

export default withStyles(styles)(App);
