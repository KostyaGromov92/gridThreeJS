import * as THREE from 'three';
var OrbitControls = require('three-orbit-controls')(THREE);






var camera, controls, scene, renderer, mesh;

let size = 20;

function init() {
  scene = new THREE.Scene();
  scene.background = new THREE.Color(0x000000);
  // scene.fog = new THREE.FogExp2( 0xcccccc, 0.002 );

  renderer = new THREE.WebGLRenderer();



  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(window.innerWidth, window.innerWidth);

  var container = document.getElementById('container');
  container.appendChild(renderer.domElement);

  camera = new THREE.PerspectiveCamera(
    90,
    window.innerWidth / window.innerHeight,
    1,
    3000
  );
  camera.position.z = 200;

  controls = new OrbitControls(camera, renderer.domElement);

  let material = new THREE.LineBasicMaterial({color: 0xffffff});

  let geometry = new THREE.Geometry();

  for (var i = 0; i < size; i++) {
    geometry.vertices.push(
      new THREE.Vector3(i*10,0,0)
    );
  }

  let mesh = new THREE.Line(geometry, material);

  scene.add(mesh);
  // do something

  animate();
}



let time = 0;
function animate() {
  time++;
  renderer.render(scene, camera);
  requestAnimationFrame(animate);
}


init();
