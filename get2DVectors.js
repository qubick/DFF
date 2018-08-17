var pointsOfIntersection = new THREE.Geometry(); //it's saving 2D vectors

var pointOfIntersection = new THREE.Vector3();
var pointMaterial = new THREE.PointsMaterial({
  size:.5,
  color: "green"
});

var a = new THREE.Vector3()
  ,b = new THREE.Vector3()
  ,c = new THREE.Vector3();

var planePointA = new THREE.Vector3()
    ,planePointB = new THREE.Vector3()
    ,planePointC = new THREE.Vector3();

var lineAB, lineBC, lineCA;

// var objGeom = new THREE.DodecahedronGeometry(10, 0);
// var obj = new THREE.Mesh(objGeom, new THREE.MeshBasicMaterial({
//   color: "green",
//   wireframe: true
// }));
// // obj.rotation.z = Math.PI / 10;
// // obj.position.set(0, 3.14, 0);
// scene.add(obj);

function cutInPlaneToGet2DVectors(){
  console.log("in get2DVectors.js: ", target3DObject);

  var planeGeom = new THREE.PlaneGeometry(30, 30);
  var mathPlane = new THREE.Plane();

  planeGeom.rotateX(-Math.PI / 2);

  var plane = new THREE.Mesh(planeGeom, new THREE.MeshBasicMaterial({
    color: "lightgray",
    transparent: true,
    opacity: 0.75,
    side: THREE.DoubleSide
  }));

  plane.position.y = -3.14;
  // plane.rotation.x = Math.PI / 5;
  scene.add(plane);

  //create plane
  plane.localToWorld(planePointA.copy(plane.geometry.vertices[plane.geometry.faces[0].a]));
  plane.localToWorld(planePointB.copy(plane.geometry.vertices[plane.geometry.faces[0].b]));
  plane.localToWorld(planePointC.copy(plane.geometry.vertices[plane.geometry.faces[0].c]));
  mathPlane.setFromCoplanarPoints(planePointA, planePointB, planePointC);

  sphereRegion.geometry.faces.forEach( (face) => {
    sphereRegion.localToWorld(a.copy(sphereRegion.geometry.vertices[face.a]));
    sphereRegion.localToWorld(b.copy(sphereRegion.geometry.vertices[face.b]));
    sphereRegion.localToWorld(c.copy(sphereRegion.geometry.vertices[face.c]));

    lineAB = new THREE.Line3(a, b);
    lineBC = new THREE.Line3(b, c);
    lineCA = new THREE.Line3(c, a);

    setPointOfIntersection(lineAB, mathPlane);
    setPointOfIntersection(lineBC, mathPlane);
    setPointOfIntersection(lineCA, mathPlane);
  });

  var points = new THREE.Points(pointsOfIntersection, pointMaterial);
  scene.add(points);

  var lines = new THREE.LineSegments(pointsOfIntersection, new THREE.LineBasicMaterial({
    color: 0xffffff
  }));
  scene.add(lines);
}

function setPointOfIntersection(line, plane){

  pointOfIntersection = plane.intersectLine(line);
  if(pointOfIntersection){
    pointsOfIntersection.vertices.push(pointOfIntersection.clone())
  }
}
