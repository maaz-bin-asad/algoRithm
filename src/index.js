import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import App from './App';
ReactDOM.render(
  <App hey="name" />,
  document.getElementById('root')
);
var b;
b=7
c=9;
var c;
let d=19;
function func(){
    d=8
}
func()
console.log(d)
console.log(b)
if(true){
  var a=5;
}
console.log(a)
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
