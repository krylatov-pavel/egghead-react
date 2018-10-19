import React from 'react';
import { FilterLink } from './filterLink';

export const Footer = () => {
    return (
        <div>
            <FilterLink filter="all">All</FilterLink>&nbsp;
            <FilterLink filter="active">Active</FilterLink>&nbsp;
            <FilterLink filter="completed">Completed</FilterLink>
        </div>
    );
}
