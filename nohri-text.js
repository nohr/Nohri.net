 document.fonts.ready.then(function () {
    var text = new Blotter.Text('n', {
      family : "'Menlo', sans-serif",
      size : 500,
      fill : "#ffffff"
    });
    var material = new Blotter.FliesMaterial();
    material.uniforms.uPointCellWidth.value = 0.006;
    material.uniforms.uSpeed.value = 1.0;
    var blotter = new Blotter(material, { texts : text });
    var elem = document.getElementById("nohri-text");   
    var scope = blotter.forText(text);

    scope.appendTo(elem);}.bind(this));