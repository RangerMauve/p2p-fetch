# p2p-fetch
A fetch interface which supports multiple peer to peer protocols

## Usage

```
npm i --save ipfs p2p-fetch
```

```javascript
const makeP2PFetch = require('p2p-fetch')

const fetch = await makeP2PFetch()

const response = await fetch('ipns://ipfs.io/')

console.log(await response.text())
```

## API

For guides on using the Fetch API, look at the docs on [Mozilla Developer Nework](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch).
For IPFS-specific fetch interfaces, look at [js-ipfs-fetch](https://github.com/RangerMauve/js-ipfs-fetch#readme)

## `const fetch = await makeP2PFetch({ipfsOptions})`

Initialize the fetch interface. You can optionally pass in some configuration settings for IPFS.
