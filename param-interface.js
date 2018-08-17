//should be global

var modelLoaded = false;
var settings = {
  modelScale: 1.0
}

//see if geometry can be kept
var targetGeometry;


var panel = new dat.GUI();

var params = {
  loadFile: function(){
    document.getElementById('fileInput').click();
    document.getElementById('fileInput').addEventListener('change', handleFileSelect, false);
  },

  createInfill: function(){
    //get softness region information frist
    createInfillWalls();
    //get 2D vectors here
    //when added region volume, add intersection plane
    cutInPlaneToGet2DVectors();

  },
  export: function(){
    console.log("export stl");



    removeEntity( sphereRegion );
    infillWallArray.forEach( (wall) => {
      removeEntity( wall );
    });
  }
}
// var modelUI = panel.addFolder( 'Model Scale' );

function handleFileSelect(evt){
  var files = evt.target.files;
  let targetSTLFile = './assets/' + files[0].name;

  //load selected target 3D objects
  loader.load( targetSTLFile, ( geometry ) => {
    geometry.center()
    target3DObject = new THREE.Mesh( geometry, lambMaterial );

    target3DObject.rotation.set(-Math.PI/2, 0, 0);
    target3DObject.name = files[0].name;
    target3DObject.receiveShadow = true;
    target3DObject.castShadow = true;


    scene.add(target3DObject);
    objects.push(target3DObject); //add to select & translatable
    transformControlTarget.attach(target3DObject);

    //once load, add UI elements
    panel.add(settings, 'modelScale', -1, 5, 0.1).onChange(function(){
      target3DObject.scale.set(settings.modelScale, settings.modelScale, settings.modelScale);
    });
    panel.add(params, 'export').name('Export Model');

  });
}


function createPanel(){

  // panel.add(params, 'loadFile').name('Load 3D Model');

}


function removePanel(gearType){
  topBoxUI.close();
  delete topBoxUI;
}

function showDiv() {
  // document.getElementById('bbox_shape').style.display = "block";
  // document.getElementById('loadSTL').style.display = "block";
  // document.getElementById('model_rotation').style.display = "block";
}
