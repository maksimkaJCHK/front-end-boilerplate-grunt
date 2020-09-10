import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './css/style.scss';

const node = document.getElementById('app');

export default class Primer extends Component {
  render() {

    return (
      <div id="example-app">
        <p>Заготовка для приложения</p>
      </div>
    );
  }
}

ReactDOM.render(
  <Primer name="Максим" />,
  node
)