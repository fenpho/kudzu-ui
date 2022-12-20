import infoCollector from './infoCollector.mjs'
import tplReplacer from './tplReplacer.mjs'

async function run() {
  const meta = await infoCollector()
  tplReplacer(meta)
}

run()
