import React, { Component } from 'react';
import UserItem from './UserItem';

export class Users extends Component {
  state = {
    users: [
      {
        id: '1',
        login: 'octocat',
        avatar_url: 'https://avatars3.githubusercontent.com/u/583231?v=4',
        html_url: 'https://github.com/octocat',
      },
      {
        id: '2',
        login: 'frarredo',
        avatar_url: 'https://avatars3.githubusercontent.com/u/583231?v=4',
        html_url: 'https://github.com/octocat',
      },
      {
        id: '3',
        login: 'jumbo',
        avatar_url: 'https://avatars3.githubusercontent.com/u/583231?v=4',
        html_url: 'https://github.com/octocat',
      },
    ],
  };
  render() {
    return (
      <div style={userStyle}>
        {this.state.users.map(user => (
          <UserItem key={user.id} user={user} />
        ))}
      </div>
    );
  }
}

const userStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gridGap: '1rem',
};

export default Users;
