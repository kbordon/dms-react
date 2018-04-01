import React from 'react';

function UserMenu(){
  var menuStyles = {
    display: 'flex'
  };
  return(
    <div style={menuStyles}>
      <h2>+ campaign</h2>
      <h2>+ character</h2>
      <h2>username</h2>
    </div>
  );
}

export default UserMenu;