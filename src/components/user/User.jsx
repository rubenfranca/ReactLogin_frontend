import React, { Component } from 'react';
import Main from '../templates/Main';

const headerProps = {
    icon: 'users',
    title: 'Users',
    subtitle: 'User registration',
};

export default class User extends Component {
    render() {
        return (
            <Main {...headerProps}>
                User
            </Main>
        );
    }
}