function Start() {
    document.getElementById("startid").style.display = 'none'
    document.getElementById("stopid").style.display = 'flex'
    document.getElementById("stopid").style.alignContent = 'center'
    //return GazeCloudAPI.StartEyeTracking(); 
}

export default Start;