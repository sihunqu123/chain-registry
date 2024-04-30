import { AssetList } from '@chain-registry/v2-types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chainName: 'composablepolkadot',
  assets: [{
      denomUnits: [{
          denom: '79228162514264337593543950342',
          exponent: 0
        }, {
          denom: 'dot',
          exponent: 10
        }],
      typeAsset: 'substrate',
      base: '79228162514264337593543950342',
      name: 'Polkadot',
      display: 'dot',
      symbol: 'DOT',
      traces: [{
          type: 'bridge',
          counterparty: {
            chainName: 'polkadot',
            baseDenom: 'Planck'
          },
          provider: 'Polkadot Relay'
        }],
      images: [{
          imageSync: {
            chainName: 'polkadot',
            baseDenom: 'Planck'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/polkadot/images/dot.svg'
        }],
      logoURIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/polkadot/images/dot.svg'
      }
    }]
};
export default info;