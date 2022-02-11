import React, {useEffect, useRef} from 'react';
import clsx from 'clsx';

import './App.css';

function App() {

    const resInput = useRef(null)

    const [value, setValue] = React.useState(0);


    useEffect(() => {

    }, [])

    return (
        <>
            <div className="wrapper">
                <div className="one">One</div>
                <div className="two">Two</div>
                <div className="three">Three</div>
                <div className="four">Four</div>
                <div className="five">Five</div>
                <div className="six">Six</div>
            </div>
            <div className="wrapper">
                <div className="box1">One</div>
                <div className="box2">Two</div>
                <div className="box3">Three</div>
                <div className="box4">Four</div>
            </div>
        </>
    );
}

export default App;
