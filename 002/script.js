const scene = new Urpflanze.Scene({
    height: 750,
    width: 750
  })
  
  const rects = new Urpflanze.Rect({
      repetitions: 8,
      sideLength: 25,
      distance: ({ repetition }) => repetition.offset * 100,
    scale: ({ repetition }) => repetition.offset,
    rotateZ: () => scene.currentTime * Urpflanze.PI2 / 3000,
  })
  
  const container = new Urpflanze.Shape({
    shape: rects,
    repetitions: 4,
    distance: 40,
    scale: ({ repetition }) => {
          return Urpflanze.distanceFromRepetition(repetition, [0, 0])
      },
    // rotateY: () => scene.currentTime * Urpflanze.PI2 / 4000,
    // rotateX: () => scene.currentTime * Urpflanze.PI2 / 4000,
    rotateZ: () => scene.currentTime * Urpflanze.PI2 / 4000,
  })
  
  scene.add(container)
  
  const drawer = new Urpflanze.DrawerCanvas(scene, document.body)
  drawer.startAnimation()