$(document).click( (event) => {
    var text = $(event.target).text();
    console.log("what is event target?: ", event.target);
});


// $( function() {
//   $( ".draggable" ).draggable({
//     helper: 'clone',
//     cursor: 'move',
//     revert: 'invalid',
//     refrecshPositions: true,
//   });
//
//   $(".droppable").droppable({
//     drop: function(event, ui) {
//       console.log(event)
//     }
//   });
// });


function ReturnTypeofGradient(evt){
  //change gradient type
  var regtionSelection = parseInt(evt.target.value);

  // var gradientmaterial = generateGradientShaderMaterial(512);


  var selectObject= scene.getObjectByName("foot_step_volume");
  selectObject.material = normalMaterial;


  var gradientInput = document.createElement("input");

  gradientInput.type = "range"
  gradientInput.min = "10";
  gradientInput.max = "50";
  gradientInput.value = "25";
  gradientInput.class = "slider"
  gradientInput.id = "gradientRange"
  // gradientInput.onChange = "updateValue(this.value)"

  document.getElementById('sliderlocation').innerHTML = '<br/> Gradient stops: ';
  document.getElementById('gradientlocation').appendChild(gradientInput);

}

function ReturnReferenceMaterial(evt){

  var shoreAScale = evt.target.value;
  var input = document.createElement("input");

  input.type = "range"
  input.min = "10";
  input.max = "50";
  input.value = shoreAScale;
  input.class = "slider"
  input.id = "softnessRange"
  input.onChange = "updateValue(this.value)"

  var textInput = document.createElement("text");
  textInput.value = '<br/> Shore A scale: ' + shoreAScale;
  textInput.id = "shoreAScaleValue"

  document.getElementById('sliderlocation').appendChild(document.createElement("br"));
  document.getElementById('sliderlocation').innerHTML = '<br/> Shore A scale: ' + shoreAScale;
  document.getElementById('sliderlocation').appendChild(input);

}

function ReturnTypeofGradient(evt){
  //change gradient type
  var regtionSelection = parseInt(evt.target.value);

  // var gradientmaterial = generateGradientShaderMaterial(512);


  var selectObject= scene.getObjectByName("foot_step_volume");
  selectObject.material = normalMaterial;


  var gradientInput = document.createElement("input");

  gradientInput.type = "range"
  gradientInput.min = "10";
  gradientInput.max = "50";
  gradientInput.value = "25";
  gradientInput.class = "slider"
  gradientInput.id = "gradientRange"
  // gradientInput.onChange = "updateValue(this.value)"

  document.getElementById('sliderlocation').innerHTML = '<br/> Gradient stops: ';
  document.getElementById('gradientlocation').appendChild(gradientInput);

}


$( function() {
  $( ".draggable" ).draggable({
    helper: 'clone',
    cursor: 'move',
    revert: 'invalid',
    refrecshPositions: true,
  });

  $(".droppable").droppable({
    drop: function(event, ui) {
      console.log(event)
    }
  });
});
