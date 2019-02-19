import React from 'react';
import {render} from 'react-dom';

const root = document.getElementById('root');

const App = (props) => (
        <div>
            {props.children}
        </div>
);

render(<App/>, root);

