import React from 'react';
import { List } from '@material-ui/core';
import PeopleItem from '../PeopleItem/PeopleItem';

type PeopleTypes = {
    name: string,
    birth_year: string
}

interface IPeopleList {
    arr: PeopleTypes[]
}

const PeopleList:React.FC<IPeopleList> = ({ arr }) => {

    return(
        <List>
            { arr.map(({ name, birth_year }, i:number) => {
                return <PeopleItem key={i + 1} name={name} birth={birth_year} />
            }) }
        </List>
    );
};

export default PeopleList;