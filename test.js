// Needed to make sure Buffer is available everywhere
global.Buffer = Buffer

const test = require('tape')
const makeP2PFetch = require('./')

// Used for browser tests
test.onFinish(() => {
  if ((typeof window !== 'undefined') && window.close) window.close()
})

test('IPFS and HTTP requests', async (t) => {
  try {
		var fetch = await makeP2PFetch({ipfsOptions: {silent: true}})

		const httpResponse = await fetch('https://ipfs.io/index.html')

		t.ok(httpResponse.ok, 'Able to get from HTTPS')

		const ipnsResponse = await fetch('ipns://ipfs.io/index.html')

		t.ok(ipnsResponse.ok, 'Able to get from IPNS')
  } catch(e) {
    if(fetch) await fetch.close()
  }
})
