export const initWorldGen = (noa, blockIDs) => {
  const xsize = 20;
  const zsize = 20;

  const getVoxelID = (x, y, z) => {
    if (y < -4) return blockIDs.dirtID;
    var height = 2 * Math.sin(x / xsize) + 3 * Math.cos(z / zsize + 10);
    if (y < height) return blockIDs.grassID;
    if (y === -1) return blockIDs.waterID
    return 0; // signifying empty space
  };
  
  noa.world.on("worldDataNeeded", function (id, data, x, y, z) {
    // `id` - a unique string id for the chunk
    // `data` - an `ndarray` of voxel ID data (see: https://github.com/scijs/ndarray)
    // `x, y, z` - world coords of the corner of the chunk
    for (var i = 0; i < data.shape[0]; i++) {
      for (var j = 0; j < data.shape[1]; j++) {
        for (var k = 0; k < data.shape[2]; k++) {
          var voxelID = getVoxelID(x + i, y + j, z + k);
          data.set(i, j, k, voxelID);
        }
      }
    }
    // tell noa the chunk's terrain data is now set
    noa.world.setChunkData(id, data);
  });

};
