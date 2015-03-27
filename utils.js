(function() {
    var viewport = document.createElement("meta");
    viewport.setAttribute('name', 'viewport');
    viewport.setAttribute(
        'content', 'width=device-width, initial-scale=1, maximum-scale=1');
    document.getElementsByTagName('head')[0].appendChild(viewport);
});

function adjustCanvas(canvas) {
    var prevBounds;
    return setInterval(function() {
        var bounds = canvas.getBoundingClientRect();
        if (!prevBounds || prevBounds.width != bounds.width ||
            prevBounds.height != bounds.height) {
            console.log('Resizing canvas to (' + bounds.width + ', ' +
                        bounds.height + ')');
            var context = canvas.getContext('2d');
            var imageData =
                context.getImageData(0, 0, canvas.width, canvas.height);
            canvas.width = bounds.width;
            canvas.height = bounds.height;
            context.putImageData(imageData, 0, 0);
            prevBounds = bounds;
        }
    }, 100);
}

console.log('utils.js executed');
