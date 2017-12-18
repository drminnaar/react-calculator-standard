import React from 'react';
import Header from './Header';
import Calculator from './Calculator/Calculator';

const App = () => (
    <div style={{overflow: 'hidden'}}>
        <Header title='React Calc' />
        <div className="mt-md-5">
            <Calculator />
        </div>
    </div>
);

export default App;