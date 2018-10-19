import React from 'react';
import { NavLink  } from 'react-router-dom';

export const FilterLink = ({filter, children}) => {
    return (<NavLink exact to={filter === 'all' ? '/' : `/${filter}`}
        activeStyle={{
            textDecoration: 'none',
            color: 'black'
        }} >{children}</NavLink>);
}