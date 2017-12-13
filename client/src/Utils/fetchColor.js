
import { colorRequest } from '../constLoader';
import { findRandomColor } from '../utilsLoader';


export const fetchColor = (state, stateControllingCallback, color) => {
    const request = JSON.stringify(colorRequest.request);
    const url = colorRequest.url;
    console.log(request);
    console.log(url);
    let newState = state;
    let newColor = color;

    newState.blocked = true;
    stateControllingCallback(newState);
    console.log(Date.now());
    fetch(url,{
      method: "POST",
      body: request
    })
        .then( (res) => {
            console.log(res);
            res.json();
        })
        .then( (res) => {
                console.log(res);
        })
        .then( (res) => {
            console.log(res);
            newState.blocked = false;
            stateControllingCallback(newState);
            console.log(Date.now());
        })
        .catch(err => {
            console.log('Error');
            console.log(err)
            console.log(Date.now);
            stateControllingCallback(newState);
            console.log(Date.now());
            return [false, err];
        });
  }
  






export const fetchHttp = () => {
    fetch('http://www.colourlovers.com/api/color/6B4106',{
      headers: {
        'Accept': 'text/html, application/json',
        'Content-Type': 'text/html',
        'Origin':'192.168.0.1',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
        'Access-Control-Allow-Headers': 'Origin, Content-Type'
      },
      method: "POST",
      body : '/color/6B4106'
    })
    .then(res => {
      console.log(res);
      res.json().then( res => {
  
      });
    })
    .catch(err => {
      console.log('error');
      console.log(err);
    });
  };
  