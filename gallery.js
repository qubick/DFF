var container, stats;
			var camera, scene, raycaster, renderer;
			var mouse = new THREE.Vector2(), INTERSECTED;
			var radius = 500, theta = 0;
			var frustumSize = 1000;
			init();
			animate();
			function init() {
				container = document.createElement( 'gallery' );
				document.body.appendChild( container );
				var info = document.createElement( 'div' );
				info.style.position = 'absolute';
				info.style.top = '10px';
				info.style.left = '0px';
				info.style.width = '10%';
				info.style.height = '100%';
				info.style.bgcolor = 'black';
				container.appendChild( info );

			// 	var aspect = window.innerWidth / window.innerHeight;
			// 	camera = new THREE.OrthographicCamera( frustumSize * aspect / - 2, frustumSize * aspect / 2, frustumSize / 2, frustumSize / - 2, 1, 1000 );
			// 	scene = new THREE.Scene();
			// 	var light = new THREE.DirectionalLight( 0xffffff, 1 );
			// 	light.position.set( 1, 1, 1 ).normalize();
			// 	scene.add( light );
			// 	var geometry = new THREE.BoxBufferGeometry( 20, 20, 20 );
			// 	for ( var i = 0; i < 2000; i ++ ) {
			// 		var object = new THREE.Mesh( geometry, new THREE.MeshLambertMaterial( { color: Math.random() * 0xffffff } ) );
			// 		object.position.x = Math.random() * 800 - 400;
			// 		object.position.y = Math.random() * 800 - 400;
			// 		object.position.z = Math.random() * 800 - 400;
			// 		object.rotation.x = Math.random() * 2 * Math.PI;
			// 		object.rotation.y = Math.random() * 2 * Math.PI;
			// 		object.rotation.z = Math.random() * 2 * Math.PI;
			// 		object.scale.x = Math.random() + 0.5;
			// 		object.scale.y = Math.random() + 0.5;
			// 		object.scale.z = Math.random() + 0.5;
			// 		scene.add( object );
			// 	}
			// 	raycaster = new THREE.Raycaster();
			// 	renderer = new THREE.WebGLRenderer();
			// 	renderer.setClearColor( 0xf0f0f0 );
			// 	renderer.setPixelRatio( window.devicePixelRatio );
			// 	renderer.setSize( window.innerWidth, window.innerHeight );
			// 	renderer.sortObjects = false;
			// 	container.appendChild(renderer.domElement);
			// 	stats = new Stats();
			// 	container.appendChild( stats.dom );
			// 	document.addEventListener( 'mousemove', onDocumentMouseMove, false );
			// 	//
			// 	window.addEventListener( 'resize', onWindowResize, false );
			// }
			// function onWindowResize() {
			// 	var aspect = window.innerWidth / window.innerHeight;
			// 	camera.left   = - frustumSize * aspect / 2;
			// 	camera.right  =   frustumSize * aspect / 2;
			// 	camera.top    =   frustumSize / 2;
			// 	camera.bottom = - frustumSize / 2;
			// 	camera.updateProjectionMatrix();
			// 	renderer.setSize( window.innerWidth, window.innerHeight );
			// }
			// function onDocumentMouseMove( event ) {
			// 	event.preventDefault();
			// 	mouse.x = ( event.clientX / window.innerWidth ) * 2 - 1;
			// 	mouse.y = - ( event.clientY / window.innerHeight ) * 2 + 1;
			// }
			// //
			// function animate() {
			// 	requestAnimationFrame( animate );
			// 	render();
			// 	stats.update();
			// }
			// function render() {
			// 	theta += 0.1;
			// 	camera.position.x = radius * Math.sin( THREE.Math.degToRad( theta ) );
			// 	camera.position.y = radius * Math.sin( THREE.Math.degToRad( theta ) );
			// 	camera.position.z = radius * Math.cos( THREE.Math.degToRad( theta ) );
			// 	camera.lookAt( scene.position );
			// 	camera.updateMatrixWorld();
			// 	// find intersections
			// 	raycaster.setFromCamera( mouse, camera );
			// 	var intersects = raycaster.intersectObjects( scene.children );
			// 	if ( intersects.length > 0 ) {
			// 		if ( INTERSECTED != intersects[ 0 ].object ) {
			// 			if ( INTERSECTED ) INTERSECTED.material.emissive.setHex( INTERSECTED.currentHex );
			// 			INTERSECTED = intersects[ 0 ].object;
			// 			INTERSECTED.currentHex = INTERSECTED.material.emissive.getHex();
			// 			INTERSECTED.material.emissive.setHex( 0xff0000 );
			// 		}
			// 	} else {
			// 		if ( INTERSECTED ) INTERSECTED.material.emissive.setHex( INTERSECTED.currentHex );
			// 		INTERSECTED = null;
			// 	}
			// 	renderer.render( scene, camera );
			}
