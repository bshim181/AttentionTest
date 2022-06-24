function PlotGaze(GazeData) {

    document.getElementById("GazeData").innerHTML = "Gaze X:" + GazeData.GazeX + "GazeData Y:" + GazeData.GazeY; 
    //document.getElementById("HeadPoseData").innerHTML
    //document.getElementById("HeadRotaData").innerHTML 
    if(!document.getElementById("ShowHeatMap").checked) {
        //In case, where show heat map is checked off, we display the location of our pupil movement in a coordinate system. 
        var x = GazeData.docX;
        var y = GazeData.docY; 

        var gaze = document.getElementById("gaze");
        x -= gaze.clientWidth/2;
        y -= gaze.clientHeight/2; 
        gaze.style.left = x + "px"
        gaze.style.top = y + "px"
        if(GazeData.state != 0) {
            gaze.stylee.display = 'none'; 
        }
        else {
            gaze.style.dispaly = 'block'
        }
    }
}

export default PlotGaze; 