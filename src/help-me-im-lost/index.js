import {Engine} from "noa-engine";
import { initRegistration } from './registration'
import { initWorldGen } from './worldgen'
import { setupPlayerEntity } from './entities'
import { setupInteractions } from './actions'

const noa = new Engine({
    debug: true,
    showFPS: true,
    inverseY: false,
    inverseX: false,
    chunkSize: 32,
    chunkAddDistance: [10, 5],     // [horiz, vert]
    blockTestDistance: 50,
    texturePath: 'textures/',
    playerStart: [0, 10, 0],
    playerHeight:2,
    playerWidth: 0.6,
    playerAutoStep: true,
    useAO: true,
    originRebaseDistance: 25,
    initialZoom: 10,
})

const blockIDs = initRegistration(noa);

initWorldGen(noa, blockIDs);
setupPlayerEntity(noa);
setupInteractions(noa);