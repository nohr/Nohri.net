// wait for everything to be ready
window.addEventListener("load", function() {
    // set up our WebGL context and append the canvas to our wrapper
    var curtains = new Curtains({
    container: "canvas"
    });
    // get our plane element
    var planeElement = document.getElementsByClassName("plane")[0];
    // set our initial parameters (basic uniforms)
    var params = {
    vertexShaderID: "plane-vs", // our vertex shader ID
    fragmentShaderID: "plane-fs", // our fragment shader ID
    uniforms: {
    time: {
    name: "uTime", // uniform name that will be passed to our shaders
    type: "1f", // this means our uniform is a float
    value: 0,
    },
    },
    };
    // create our plane
    var plane = curtains.addPlane(planeElement, params);
    // if our plane has been successfully created
    if(plane) {
    plane.onReady(function() {
    // set an event listener to start our playback
    document.getElementbyId("start-playing").addEventListener("click", function() {
    plane.playVideos();
    });
    }).onRender(function() {
    // use the onRender method of our plane fired at each requestAnimationFrame call
    plane.uniforms.time.value++; // update our time uniform value
    });
    }
    });