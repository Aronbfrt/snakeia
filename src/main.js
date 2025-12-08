const keys = {
    z: false,
    q: false,
    s: false,
    d: false,
    ArrowUp: false,
    ArrowDown: false,
    ArrowLeft: false,
    ArrowRight: false
};
window.addEventListener("keydown", (e) => {
    if (e.key in keys) {
        keys[e.key] = true;
        console.log(`Key "${e.key}" pressed.`);
    }
});
window.addEventListener("keyup", (e) => {
    if (e.key in keys) {
        keys[e.key] = true;
        console.log(`Key "${e.key}" released.`);
    }
});

function gameLoop() {
    if (keys.z || keys.ArrowUp) {
        console.log("Move Up");
    }
    if (keys.s || keys.ArrowDown) {
        console.log("Move Down");
    }
    if (keys.q || keys.ArrowLeft) {
        console.log("Move Left");
    }
    if (keys.d || keys.ArrowRight) {
        console.log("Move Right");
    }
    requestAnimationFrame(gameLoop);
}
gameLoop();