import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../../chain.schema.json',
  chain_name: 'sunrisetestnet',
  status: 'live',
  network_type: 'testnet',
  pretty_name: 'Sunrise Testnet',
  chain_id: 'sunrise-test',
  bech32_prefix: 'sunrise',
  daemon_name: 'sunrised',
  node_home: '$HOME/.sunrise',
  key_algos: ['secp256k1'],
  slip44: 118,
  fees: {
    fee_tokens: [{
        denom: 'urise',
        fixed_min_gas_price: 0,
        low_gas_price: 0.0025,
        average_gas_price: 0.025,
        high_gas_price: 0.04
      }]
  },
  staking: {
    staking_tokens: [{
        denom: 'uvrise'
      }]
  },
  codebase: {
    cosmos_sdk_version: '0.50.2'
  },
  logo_URIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sunrise/images/sunrise.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sunrise/images/sunrise.svg'
  },
  apis: {
    rpc: [{
        address: 'https://sunrise-test-1.cauchye.net/',
        provider: 'CauchyE'
      }],
    rest: [{
        address: 'https://sunrise-test-1.cauchye.net:1318',
        provider: 'CauchyE'
      }],
    grpc: [{
        address: 'https://sunrise-test-1.cauchye.net:9092',
        provider: 'CauchyE'
      }]
  },
  explorers: [],
  images: [{
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sunrise/images/sunrise.svg',
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sunrise/images/sunrise.png'
    }]
};
export default info;