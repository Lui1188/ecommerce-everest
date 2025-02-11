import React from 'react';
import ReactDOM from 'react-dom';

import 'bootstrap/dist/css/bootstrap.min.css'; 
import reducer, { initialState } from './reducer';
import { StateProvider } from './StateProvider';

import App from './App';

ReactDOM.render(
    <StateProvider initialState={initialState} reducer={reducer}>
     <App />   
    </StateProvider>,
 document.getElementById('root'));