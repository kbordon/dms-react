import React from 'react';
import UserMenu from './UserMenu';

function TopNav(){
  return(
    <div className='top-nav'>
      <style jsx>{`
        .top-nav {
          padding: 10px 20px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-family: monospace;
          font-weight: bold;
          background-color: rebeccapurple;
          color: gold;
        }
      `}</style>
      <h1>DMs</h1>
      <UserMenu/>
    </div>
  );
}

export default TopNav;