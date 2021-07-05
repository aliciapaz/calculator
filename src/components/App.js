import React from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
// this is commented out to avoid the linter error 'is defined but never used'
// import calculate from '../logic/calculate';

function App() {
  return (
    <>
      <Display />
      <ButtonPanel />
    </>
  );
}

export default App;
