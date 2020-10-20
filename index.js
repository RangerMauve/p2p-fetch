const protoFetch = require('proto-fetch')
const IPFS = require('ipfs')
const makeIPFSFetch = require('js-ipfs-fetch')
const crossFetch = require('cross-fetch')

module.exports = async function makeP2PFetch({ipfsOptions={}}={}) {
  const ipfs = await IPFS.create(ipfsOptions)
  const ipfsFetch = makeIPFSFetch({ipfs})

	const fetch = protoFetch({
		http: crossFetch,
		https: crossFetch,
		ipfs: ipfsFetch,
		ipns: ipfsFetch
	})

	fetch.close = async function () {
		await ipfs.stop()
	}

	return fetch
}
