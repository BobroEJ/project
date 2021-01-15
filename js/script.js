// touchstart
// touchmove
// touchend
// touchenter
// touchleave
// touchcancel

window.addEventListener('DOMContentLoaded', () => {
    const box = document.querySelector('.box');

    box.addEventListener('touchstart', (e) => {
        console.log('touchstart');
        console.log(e.touches);
    });

    // box.addEventListener('touchmove', (e) => {
    //     console.log('touchmove');
    // });

    // box.addEventListener('touchend', (e) => {
    //     console.log('touchend');
    // });
});

// touches
// targetTouches
// changedTouches