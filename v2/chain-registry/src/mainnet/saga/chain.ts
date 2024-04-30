import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chainName: 'saga',
  status: 'live',
  networkType: 'mainnet',
  website: 'https://www.saga.xyz/',
  prettyName: 'Saga',
  chainId: 'ssc-1',
  bech32Prefix: 'saga',
  daemonName: 'sscd',
  nodeHome: '$HOME/.ssc',
  keyAlgos: ['secp256k1'],
  slip44: 118,
  staking: {
    stakingTokens: [{
        denom: 'usaga'
      }],
    lockDuration: {
      time: '1814400s'
    }
  },
  fees: {
    feeTokens: [{
        denom: 'usaga',
        lowGasPrice: 0.01,
        averageGasPrice: 0.025,
        highGasPrice: 0.04
      }]
  },
  codebase: {
    cosmosSdkVersion: 'osmosis-labs/cosmos-sdk v0.47.5',
    cosmwasmEnabled: false
  },
  apis: {
    rpc: [
      {
        address: 'https://rpc-saga.keplr.app',
        provider: 'chainapsis'
      },
      {
        address: 'https://saga-mainnet-rpc.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected'
      },
      {
        address: 'https://saga-rpc.publicnode.com:443',
        provider: 'Allnodes ⚡️ Nodes & Staking'
      },
      {
        address: 'https://rpc.saga.nodestake.org',
        provider: 'NodeStake'
      },
      {
        address: 'https://saga.rpc.kjnodes.com',
        provider: 'kjnodes'
      }
    ],
    rest: [
      {
        address: 'https://saga-mainnet-lcd.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected'
      },
      {
        address: 'https://saga-rest.publicnode.com',
        provider: 'Allnodes ⚡️ Nodes & Staking'
      },
      {
        address: 'https://api.saga.nodestake.org',
        provider: 'NodeStake'
      },
      {
        address: 'https://saga.api.kjnodes.com',
        provider: 'kjnodes'
      }
    ],
    grpc: [
      {
        address: 'saga-mainnet-grpc.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected'
      },
      {
        address: 'saga-grpc.publicnode.com:443',
        provider: 'Allnodes ⚡️ Nodes & Staking'
      },
      {
        address: 'grpc.saga.nodestake.org:443',
        provider: 'NodeStake'
      },
      {
        address: 'saga.grpc.kjnodes.com:443',
        provider: 'kjnodes'
      }
    ]
  },
  logoURIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/saga/images/saga.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/saga/images/saga.svg'
  },
  description: 'Saga is a Layer 1 protocol that allows developers to automatically spin up VM-agnostic, parallelized and interoperable dedicated chains, or “Chainlets,” that provide applications with infinite horizontal scalability. Each Chainlet is a replica of the Saga Mainnet, with the same validator set and security model.\n\nSaga’s mission is to enable the next 1000 chains in gaming and entertainment as part of the growing Saga Multiverse. ',
  explorers: [
    {
      kind: 'mintscan',
      url: 'https://www.mintscan.io/saga',
      txPage: 'https://www.mintscan.io/saga/transactions/${txHash}',
      accountPage: 'https://www.mintscan.io/saga/accounts/${accountAddress}'
    },
    {
      kind: 'ezstaking',
      url: 'https://ezstaking.app/saga',
      txPage: 'https://ezstaking.app/saga/txs/${txHash}',
      accountPage: 'https://ezstaking.app/saga/account/${accountAddress}'
    },
    {
      kind: 'NodeStake',
      url: 'https://explorer.nodestake.org/saga',
      txPage: 'https://explorer.nodestake.org/saga/tx/${txHash}',
      accountPage: 'https://explorer.nodestake.org/saga/account/${accountAddress}'
    }
  ],
  keywords: [],
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/saga/images/saga.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/saga/images/saga.svg'
    }]
};
export default info;