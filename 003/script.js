const scene = new Urpflanze.Scene({
    height: 800,
    width: 800
  })
  
  const spiral = new Urpflanze.Rect({
    repetitions: 320,
    sideLength: 90,
    displace: propArguments => propArguments.parent.repetition.index,
    distance: propArguments => propArguments.repetition.offset,
    scale: propArguments => propArguments.repetition.offset * 9,
    rotateZ: () => scene.currentTime * Urpflanze.PI2 / 12000,
  })
  
  const container = new Urpflanze.Shape({
    shapeUseParent: true,
    shape: spiral,
    repetitions: 4,
    distance: 120,
    scale: 1.2
  })
  
  
  scene.add(container)
  
  new Urpflanze.DrawerCanvas(scene, document.body).startAnimation()