import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chain_name: 'lambda',
  status: 'live',
  network_type: 'mainnet',
  pretty_name: 'Lambda',
  chain_id: 'lambda_92000-1',
  bech32_prefix: 'lamb',
  node_home: '$HOME/.lambdavm',
  daemon_name: 'lambdavm',
  slip44: 60,
  fees: {
    fee_tokens: [{
        denom: 'ulamb',
        low_gas_price: 10000000000,
        average_gas_price: 25000000000,
        high_gas_price: 40000000000
      }]
  },
  staking: {
    staking_tokens: [{
        denom: 'ulamb'
      }]
  },
  codebase: {

  },
  logo_URIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/lambda/images/lambda.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/lambda/images/lambda.svg'
  },
  apis: {
    rpc: [
      {
        address: 'https://rpc.lambda.im',
        provider: 'Lambda'
      },
      {
        address: 'http://lambda.rpc.m.stavr.tech:31327',
        provider: '🔥STAVR🔥'
      },
      {
        address: 'https://rpc.lambda.nodestake.top',
        provider: 'NodeStake'
      },
      {
        address: 'https://lambda-rpc.noders.services',
        provider: '[NODERS]TEAM'
      },
      {
        address: 'https://lambda_mainnet_rpc.chain.whenmoonwhenlambo.money',
        provider: '🚀 WHEN MOON 🌕 WHEN LAMBO 🔥'
      }
    ],
    rest: [
      {
        address: 'https://rest.lambda.im',
        provider: 'Lambda'
      },
      {
        address: 'https://lambda.api.m.stavr.tech',
        provider: '🔥STAVR🔥'
      },
      {
        address: 'https://api.lambda.nodestake.top',
        provider: 'NodeStake'
      },
      {
        address: 'https://lambda-api.noders.services',
        provider: '[NODERS]TEAM'
      },
      {
        address: 'https://lambda_mainnet_api.chain.whenmoonwhenlambo.money',
        provider: '🚀 WHEN MOON 🌕 WHEN LAMBO 🔥'
      }
    ],
    grpc: [
      {
        address: 'http://lambda.grpc.m.stavr.tech:2287',
        provider: '🔥STAVR🔥'
      },
      {
        address: 'grpc.lambda.nodestake.top:443',
        provider: 'NodeStake'
      },
      {
        address: 'lambda-grpc.noders.services:31090',
        provider: '[NODERS]TEAM'
      }
    ],
    "evm-http-jsonrpc": [
      {
        address: 'https://jsonrpc-lambda.d-stake.xyz',
        provider: 'D-stake'
      },
      {
        address: 'https://lambda-jsonrpc.noders.services',
        provider: '[NODERS]TEAM'
      },
      {
        address: 'https://lambda_mainnet_evm.chain.whenmoonwhenlambo.money',
        provider: '🚀 WHEN MOON 🌕 WHEN LAMBO 🔥'
      }
    ]
  },
  explorers: [
    {
      kind: 'blockscout',
      url: 'https://explorer.lambda.im/',
      tx_page: 'https://explorer.lambda.im/tx/${txHash}'
    },
    {
      kind: 'NodeStake',
      url: 'https://explorer.nodestake.top/lambda',
      tx_page: 'https://explorer.nodestake.top/lambda/txs/${txHash}'
    },
    {
      kind: '🔥STAVR🔥',
      url: 'https://explorer.stavr.tech/lambda',
      tx_page: 'https://explorer.stavr.tech/lambda/txs/${txHash}'
    },
    {
      kind: 'atomscan',
      url: 'https://atomscan.com/lambda',
      tx_page: 'https://atomscan.com/lambda/transactions/${txHash}',
      account_page: 'https://atomscan.com/lambda/accounts/${accountAddress}'
    },
    {
      kind: '🚀 WHEN MOON 🌕 WHEN LAMBO 🔥',
      url: 'https://explorer.whenmoonwhenlambo.money/lambda',
      tx_page: 'https://explorer.whenmoonwhenlambo.money/lambda/tx/${txHash}',
      account_page: 'https://explorer.whenmoonwhenlambo.money/lambda/account/${accountAddress}'
    }
  ],
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/lambda/images/lambda.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/lambda/images/lambda.svg'
    }]
};
export default info;