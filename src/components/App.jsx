import React from 'react';
import TopNav from './TopNav';

function App(){
  return(
    <div>
      <style jsx global>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
      `}</style>
      <TopNav/>
    </div>
  );
}

export default App;