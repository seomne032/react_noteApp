import React from 'react';
import Hello from './Hello';

export default function App() {
    return (
        <div className="container">
            <h1 className="title">Hello react</h1>
            <Hello name={'picaso'} age={20} />
            <Hello name={'Alice'} age={12} />
            <Hello name={'Jobs'} age={30} />
        </div>
    );
}
