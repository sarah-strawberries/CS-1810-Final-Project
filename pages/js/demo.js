// if (WebGL.isWebGLAvailable()) {

// 	// Initiate function or other initializations here
// 	animate();

// } else {

// 	// use embedded video instead

// 	// const warning = WebGL.getWebGLErrorMessage();
// 	// document.getElementById( 'container' ).appendChild( warning );

// };

// // import ("/js/three.js");



const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth * 0.85, window.innerHeight * 0.75);
document.body.appendChild(renderer.domElement);

// const verticesOfCube = [
//     -1,-1,-1,    1,-1,-1,    1, 1,-1,    -1, 1,-1,
//     -1,-1, 1,    1,-1, 1,    1, 1, 1,    -1, 1, 1,
// ];

// const indicesOfFaces = [
//     2,1,0,    0,3,2,
//     0,4,7,    7,3,0,
//     0,1,5,    5,4,0,
//     1,2,6,    6,5,1,
//     2,3,7,    7,6,2,
//     4,5,6,    6,7,4
// ];

// const geometry = new THREE.PolyhedronGeometry( verticesOfCube, indicesOfFaces, 6, 2 );
// const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
// const cube = new THREE.Mesh(geometry, material);
// scene.add(polyhedron);
 // -----------
 
 const cubeGeometry = new THREE.BoxGeometry(1, 1, 1);
 const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
 const cube = new THREE.Mesh(cubeGeometry, material);
 cube.geometry
 scene.add(cube);

//  const pyramidGeometry = new THREE.pyramidGeometry(5, 8, 3)
//  const pyramid = new THREE.Mesh(pyramidGeometry, material);
//  scene.add(cone);

//  const geometry = new THREE.BufferGeometry();
//  // create a simple square shape. We duplicate the top left and bottom right
//  // vertices because each vertex needs to appear once per triangle.
//  const vertices = new Float32Array( [
// 	 -1.0, -1.0,  1.0,
// 	  1.0, -1.0,  1.0,
// 	  1.0,  1.0,  1.0,
 
// 	  1.0,  1.0,  1.0,
// 	 -1.0,  1.0,  1.0,
// 	 -1.0, -1.0,  1.0
//  ] );
 
//  // itemSize = 3 because there are 3 values (components) per vertex
//  geometry.setAttribute( 'position', new THREE.BufferAttribute( vertices, 3 ) );
//  const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
//  const cube = new THREE.Mesh( geometry, material );


camera.position.z = 5;
// camera.position.x = 2

function animate() {
	requestAnimationFrame(animate);
	cube.rotation.x += 0.01;
	cube.rotation.y += 0.01;

	renderer.render(scene, camera);
}

animate();

window.addEventListener('load', () => {
	window.addEventListener('resize', updateDemoSize);
});

function updateDemoSize() {
	renderer.setSize(window.innerWidth * 0.85, window.innerHeight * 0.75);
	camera.aspect = window.innerWidth / window.innerHeight;
	camera.updateProjectionMatrix();
}
