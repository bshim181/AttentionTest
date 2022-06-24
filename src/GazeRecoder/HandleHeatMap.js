function HandleHeatMap(checkbox) {
    if(checkbox.checked) {
        console.log("checkbox checked")
        //ShowHeatMap();
        //document.getElementById("gaze").style.display = 'none';
    }
    else {
        console.log("checkbox unchecked")
        //RemoveHeatMap(); 
    }
}

export default HandleHeatMap; 