import { useState } from 'react';
import '../styles/App.css';
import Login from '../components/Login';

function App({ Component, props }) {
 
 return (   
   <Component {...props} />
  );
}

export default App;