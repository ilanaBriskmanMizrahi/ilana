const myObjects = [
    { x: 10, y: 20, width: 30, height: 30 },
    { x: -40, y: 20, width: 30, height: 30 },
    { x: 0, y: 0, width: 10, height: 5 },
  ]; 



//JS:

function detectCollision(objects, point) {
    for (let i = 0; i < objects.length; i++) {
      let object = objects[i];
      if (
        point.x >= object.x &&
        point.x <= object.x + object.width &&
        point.y >= object.y &&
        point.y <= object.y + object.height
      )
        return object;
    }
  }
  
  console.log(detectCollision(myObjects, { x: 10, y: 20}));



//ES6:

var detectCollisionES6 = (_objects, point) => {
    _objects.forEach(obj => {
        if (
            point.x >= obj.x &&
            point.x <= obj.x + obj.width &&
            point.y >= obj.y &&
            point.y <= obj.y + obj.height
          )
          return obj;
    });     
  };

  console.log(detectCollisionES6(myObjects, { x: 10, y: 20}));


