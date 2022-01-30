import { Color3 } from "@babylonjs/core";

export const initRegistration = (noa) => {
  //#226a22
  const grassGreen = [34 / 255, 106 / 255, 34 / 255];
  noa.registry.registerMaterial("grass", grassGreen, null);
  //#368f00
  const leavesGreen = [54 / 255, 143 / 255, 0 / 255];
  noa.registry.registerMaterial("leaves", leavesGreen, null);
  //#984433
  const dirtBrown = [152 / 255, 68 / 255, 51 / 255];
  noa.registry.registerMaterial("dirt", dirtBrown, null);
  // #752b2b
  const woodBrown = [117 / 255, 172 / 255, 172 / 255];
  noa.registry.registerMaterial("wood", woodBrown, null);
  //#00acac
  const waterBlue = [0 / 255, 43 / 255, 43 / 255,0.7];
  noa.registry.registerMaterial("water", waterBlue, null);

  let blockIDs = {};
  let _id = 1;

  blockIDs.grassID = noa.registry.registerBlock(10, { material: "grass" });
  blockIDs.leavesID = noa.registry.registerBlock(_id++, { material: "leaves" });
  blockIDs.dirtID = noa.registry.registerBlock(_id++, { material: "dirt" });
  blockIDs.woodID = noa.registry.registerBlock(_id++, { material: "wood" });
  blockIDs.waterID = noa.registry.registerBlock(_id++, { material: "water", fluid: true });

  return blockIDs;
};
