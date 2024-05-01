import { AssetList } from '@chain-registry/v2-types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chainName: 'dymension',
  assets: [{
      description: 'The native governance and staking token of the Dymension Hub',
      denomUnits: [{
          denom: 'adym',
          exponent: 0
        }, {
          denom: 'dym',
          exponent: 18
        }],
      base: 'adym',
      name: 'Dymension',
      display: 'dym',
      symbol: 'DYM',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dymension/images/dymension-logo.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dymension/images/dymension-logo.svg'
      },
      coingeckoId: 'dymension',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dymension/images/dymension-logo.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dymension/images/dymension-logo.svg'
        }],
      socials: {
        website: 'https://portal.dymension.xyz',
        twitter: 'https://twitter.com/dymension'
      }
    }, {
      description: 'The native token of Nim Network.',
      extendedDescription: 'Nim Network is a highly-adoptable AI Gaming chain that will provide the ultimate ecosystem for exploration and development of games at the intersection of Web3 and AI.',
      denomUnits: [{
          denom: 'anim',
          exponent: 0
        }, {
          denom: 'nim',
          exponent: 18
        }],
      base: 'anim',
      name: 'NIM Network',
      display: 'nim',
      symbol: 'NIM',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dymension/images/nim.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dymension/images/nim.svg'
        }],
      socials: {
        website: 'https://nim.network/',
        twitter: 'https://twitter.com/nim_network'
      },
      keywords: ['gaming', 'AI']
    }]
};
export default info;