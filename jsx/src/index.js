//1) Import React and ReactDOM libra
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

//2.) Get a reference to the div with ID root
const el = document.getElementById('root');

//3) Tell React to take control of that element
const root = ReactDOM.createRoot(el);

//4) Show the component on the screen
root.render(<App />);

// LEARNED:
// - when styling an element, the properites go into double brackets becasue you are creating an objec with key/value pairs!!


