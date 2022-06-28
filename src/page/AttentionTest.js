import myMove from "../components/Animation.js"

function AttentionTest() {
    return (
        <div>
        <button onClick ={myMove}>Click me</button>
        <div className = "animContain">
            <div className = "animate" id="animate"></div>
        </div>

        </div>
    );
}

export default AttentionTest;