import jdenticon from 'jdenticon'
import fs from 'fs'

const png = jdenticon.toPng("icon value", 200);
fs.writeFileSync("../assets/thumbnail/testicon.png", png);