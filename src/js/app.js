// require('../css/main.css');
// import {
//   message,
//   setElementValue,
//   SimpleReact,
//   StatefulReact
// } from './main';
// import React from 'react';
// import ReactDOM from 'react-dom';
//
// ReactDOM.render(
//   <StatefulReact />,
//   document.getElementById('root')
// );


async function main() {
  const apikey = '95c34ace-63f5-4d4a-9015-13cecb65f12d';
  const query = 'north+korea';

  let fetchResult = await fetch(`https://content.guardianapis.com/search?api-key=${apikey}&q=${query}`)
  let parseResult = await fetchResult.json();

  console.log(parseResult);
}

main();
