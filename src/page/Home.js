import Start from "../GazeRecoder/Start";
import Stop from "../GazeRecoder/Stop"
import HandleHeatMap from "../GazeRecoder/HandleHeatMap";
import PlotGaze from "../GazeRecoder/PloGaze";

function Home() {
    return (
        <div className="aligncenter">
            <nav className="nav">
            <ul className="navul">
                <a href="/">Home</a>
                <a href="/attentionTest">Test</a>
            </ul>
            </nav>
            <header className='header'>Attention Test</header>
            <button id = "startid" type = "button" className = 'btn' onClick = {Start}>Start</button>
            <button id = "stopid" type = "button" className = 'btn' style = {{display:"none"}} onClick = {Stop}>Stop</button>
            <p className="container">
                During this attention test, your pupil movements will be tracked and recorded. 
                This information will help to evaluate your attention level and aid in diagnosing attention 
                deficit hyperactivity disorder.  
            </p>
            <label><input type="checkbox" name="heatmap" value="true"></input>Show heat map</label>
            <hr className="line"></hr>
            <div className="Bottombody">
                <a href="https://gazerecorder.com/">Link to GazeRecoder Website</a>
            </div>
        </div>

    );
}

export default Home;