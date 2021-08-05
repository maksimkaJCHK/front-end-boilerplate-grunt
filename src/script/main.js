import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './css/style.scss';

const node = document.getElementById('app');

export default class Primer extends Component {
  render() {
    console.log('aaaaaaaaaaa');
    return (
      <div id="example-app">
        <p>Заготовка для приложения</p>
      </div>
    );
  }
}

ReactDOM.render(
  <Primer />,
  node
)