import React from 'react';
import VisibleToDoList from './visibleToDoList';
import AddToDo from './addToDo';
import { Footer } from './footer';

export const Main = ({match}) => (<div>
    <VisibleToDoList filter={match.params.filter || 'all'} />
    <AddToDo />
    <Footer />
</div>);