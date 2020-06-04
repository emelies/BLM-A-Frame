/* global THREE AFRAME */

AFRAME.registerComponent("material-update", {
  schema: {
    target: { default: "" },
    ambient: { default: "#000000", type: "color" },
    color: { default: "#000000", type: "color" },
    emissive: { default: "#000000", type: "color" },
    shininess: { default: 0.0 },
    specular: { default: "#000000", type: "color" },
    src: { default: "" }
  },
  init: function() {
    const data = this.data;
    this.el.addEventListener("model-loaded", function(e) {
      let object = e.detail.model;

      console.log(object);
      for (let node of object.children) {
        if (node.type === "SkinnedMesh") {
          node.material.ambient = new THREE.Color(data.ambient);
          node.material.color = new THREE.Color(data.color);
          node.material.emissive = new THREE.Color(data.emissive);
          node.material.shininess = data.shininess;
          node.material.specular = new THREE.Color(data.specular);
          node.material.needsUpdate = true;
        }
      }
    });
  }
});
