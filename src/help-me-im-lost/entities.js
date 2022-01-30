import { Scene, SceneLoader, CreateBox } from "@babylonjs/core";
import { OBJFileLoader } from "babylonjs-loaders";
export const setupPlayerEntity = (noa) => {
  const eid = noa.playerEntity;
  const dat = noa.entities.getPositionData(eid);
  const w = dat.width;
  const h = dat.height;
  let playerMesh;
  const offset = [0, h / 2, 0];

  // SceneLoader.Append(
  //   "./assets/",
  //   "protatriste.obj",
  //   noa.rendering.getScene(),
  //   (container) => {
  //     playerMesh = container.createRootMesh();
  //     playerMesh.scaling.x = playerMesh.scaling.z = w;
  //     playerMesh.scaling.y = h;
  //     container.addAllToScene();
  //   }
  // );

  // OBJFileLoader.OPTIMIZE_WITH_UV = true;

  // SceneLoader.ImportMesh("prota","./","Rabbit.babylon", noa.rendering.getScene(), (meshes)=>{
  //   // playerMesh = meshes[0].
  //   // playerMesh.scaling.x = playerMesh.scaling.z = w
  //   // playerMesh.scaling.y = h

  //   //   noa.entities.addComponent(eid, noa.entities.names.mesh, {
  //   //     mesh: playerMesh,
  //   //     offset: offset
  //   // })
  //   console.log(meshes)
  // });

  playerMesh = CreateBox("player", { size: 1 }, noa.rendering.getScene());
  playerMesh.scaling.x = playerMesh.scaling.z = w;
  playerMesh.scaling.y = h;

  noa.entities.addComponent(eid, noa.entities.names.mesh, {
    mesh: playerMesh,
    offset: offset,
  });
};
