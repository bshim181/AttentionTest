import React from "react";

function Home() {
    return (
        <div className="aligncenter">
            <nav className="nav">
            <ul className="navul">
                <li className = "navli"><a href="/" className="nava">Home</a></li>
                <li className="navli"><a href="/attentionTest" className="nava">Test</a></li>
                <li className="navli"><a className="nava">Contact</a></li>
                <li className="navli"><a className="nava">About</a></li>
            </ul>
            </nav>
            <header className='header'>Attention Test</header>
            <button id = "startid" type = "button" className = 'btn' onClick = {window['Start']}>Take the test</button>
            <button id = "stopid" type = "button" className = 'btn' style = {{display:"none"}} onClick = {window['Stop']}>Stop</button>
            <p className="container">
                During this attention test, your pupil movements will be tracked and recorded. 
                This information will help to evaluate your attention level and aid in diagnosing attention 
                deficit hyperactivity disorder.  
            </p>
            <label><input type="checkbox" name="heatmap" value="true"></input>Show heat map</label>
            <hr className="line"></hr>
            <div className="Bottombody">
                <a href="https://gazerecorder.com/" className="links">Link to GazeRecoder Website</a>
            </div>
        </div>

    );
}

export default Home;