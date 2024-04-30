import { AssetList } from '@chain-registry/v2-types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chainName: 'osmosis',
  assets: [
    {
      description: 'The native token of Osmosis',
      denomUnits: [{
          denom: 'uosmo',
          exponent: 0
        }, {
          denom: 'osmo',
          exponent: 6
        }],
      typeAsset: 'sdk.coin',
      base: 'uosmo',
      name: 'Osmosis',
      display: 'osmo',
      symbol: 'OSMO',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.svg'
        }],
      coingeckoId: 'osmosis',
      keywords: ['dex', 'staking'],
      socials: {
        website: 'https://osmosis.zone',
        twitter: 'https://twitter.com/osmosiszone'
      }
    },
    {
      denomUnits: [{
          denom: 'uion',
          exponent: 0
        }, {
          denom: 'ion',
          exponent: 6
        }],
      typeAsset: 'sdk.coin',
      base: 'uion',
      name: 'Ion DAO',
      display: 'ion',
      symbol: 'ION',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/ion.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/ion.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/ion.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/ion.svg'
        }],
      coingeckoId: 'ion',
      keywords: ['memecoin', 'defi'],
      socials: {
        website: 'https://ion.wtf',
        twitter: 'https://twitter.com/_IONDAO'
      }
    },
    {
      description: 'Circle\'s stablecoin on Axelar',
      denomUnits: [{
          denom: 'ibc/D189335C6E4A68B513C10AB227BF1C1D38C746766278BA3EEB4FB14124F1D858',
          exponent: 0,
          aliases: ['uusdc']
        }, {
          denom: 'usdc',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/D189335C6E4A68B513C10AB227BF1C1D38C746766278BA3EEB4FB14124F1D858',
      name: 'USD Coin (Axelar)',
      display: 'usdc',
      symbol: 'USDC.axl',
      traces: [
        {
          type: 'synthetic',
          counterparty: {
            chainName: 'forex',
            baseDenom: 'USD'
          },
          provider: 'Circle'
        },
        {
          type: 'bridge',
          counterparty: {
            chainName: 'ethereum',
            baseDenom: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48'
          },
          provider: 'Axelar'
        },
        {
          type: 'ibc',
          counterparty: {
            chainName: 'axelar',
            baseDenom: 'uusdc',
            channelId: 'channel-3'
          },
          chain: {
            channelId: 'channel-208',
            path: 'transfer/channel-208/uusdc'
          }
        }
      ],
      logoURIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/usdc.axl.svg',
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/usdc.axl.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/usdc.axl.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/usdc.axl.svg'
        }, {
          imageSync: {
            chainName: 'axelar',
            baseDenom: 'uusdc'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/usdc.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/usdc.svg'
        }]
    },
    {
      description: 'Ethereum (ETH) is a decentralized, open-source blockchain system featuring smart contract functionality. It\'s the native cryptocurrency of the Ethereum platform, often regarded as the second most popular digital currency after Bitcoin. Ethereum was proposed in late 2013 and development was crowdfunded in 2014, leading to its network going live on 30 July 2015.\n\nETH, as a digital currency, is used for a variety of purposes within the Ethereum ecosystem, including the execution of decentralized smart contracts and as a mode of payment. Unlike Bitcoin, Ethereum was designed to be a platform for applications that can operate without the need for intermediaries, using blockchain technology. This has made Ethereum a leading platform for various applications, including decentralized finance (DeFi), non-fungible tokens (NFTs), and more. Ethereum is constantly evolving, with a significant upgrade termed Ethereum 2.0, which aims to improve its scalability, security, and sustainability.',
      denomUnits: [{
          denom: 'ibc/EA1D43981D5C9A1C4AAEA9C23BB1D4FA126BA9BC7020A25E0AE4AA841EA25DC5',
          exponent: 0,
          aliases: ['weth-wei']
        }, {
          denom: 'weth',
          exponent: 18
        }],
      typeAsset: 'ics20',
      base: 'ibc/EA1D43981D5C9A1C4AAEA9C23BB1D4FA126BA9BC7020A25E0AE4AA841EA25DC5',
      name: 'Ether',
      display: 'weth',
      symbol: 'ETH',
      traces: [
        {
          type: 'wrapped',
          counterparty: {
            chainName: 'ethereum',
            baseDenom: 'wei'
          },
          provider: 'Ethereum'
        },
        {
          type: 'bridge',
          counterparty: {
            chainName: 'ethereum',
            baseDenom: '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2'
          },
          provider: 'Axelar'
        },
        {
          type: 'ibc',
          counterparty: {
            chainName: 'axelar',
            baseDenom: 'weth-wei',
            channelId: 'channel-3'
          },
          chain: {
            channelId: 'channel-208',
            path: 'transfer/channel-208/weth-wei'
          }
        }
      ],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/eth-white.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/eth-white.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/eth-white.svg'
        }]
    },
    {
      description: 'Wrapped Bitcoin on Axelar',
      denomUnits: [{
          denom: 'ibc/D1542AA8762DB13087D8364F3EA6509FD6F009A34F00426AF9E4F9FA85CBBF1F',
          exponent: 0,
          aliases: ['wbtc-satoshi']
        }, {
          denom: 'wbtc',
          exponent: 8
        }],
      typeAsset: 'ics20',
      base: 'ibc/D1542AA8762DB13087D8364F3EA6509FD6F009A34F00426AF9E4F9FA85CBBF1F',
      name: 'Wrapped Bitcoin (Axelar)',
      display: 'wbtc',
      symbol: 'WBTC.axl',
      traces: [
        {
          type: 'bridge',
          counterparty: {
            chainName: 'bitcoin',
            baseDenom: 'sat'
          },
          provider: 'BitGo, Kyber, and Ren'
        },
        {
          type: 'bridge',
          counterparty: {
            chainName: 'ethereum',
            baseDenom: '0x2260fac5e5542a773aa44fbcfedf7c193bc2c599'
          },
          provider: 'Axelar'
        },
        {
          type: 'ibc',
          counterparty: {
            chainName: 'axelar',
            baseDenom: 'wbtc-satoshi',
            channelId: 'channel-3'
          },
          chain: {
            channelId: 'channel-208',
            path: 'transfer/channel-208/wbtc-satoshi'
          }
        }
      ],
      logoURIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/wbtc.axl.svg',
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/wbtc.axl.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/wbtc.axl.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/wbtc.axl.svg'
        }, {
          imageSync: {
            chainName: 'axelar',
            baseDenom: 'wbtc-satoshi'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/wbtc.png'
        }]
    },
    {
      description: 'Tether\'s USD stablecoin on Axelar',
      denomUnits: [{
          denom: 'ibc/8242AD24008032E457D2E12D46588FD39FB54FB29680C6C7663D296B383C37C4',
          exponent: 0,
          aliases: ['uusdt']
        }, {
          denom: 'usdt',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/8242AD24008032E457D2E12D46588FD39FB54FB29680C6C7663D296B383C37C4',
      name: 'Tether USD (Axelar)',
      display: 'usdt',
      symbol: 'USDT.axl',
      traces: [
        {
          type: 'synthetic',
          counterparty: {
            chainName: 'forex',
            baseDenom: 'USD'
          },
          provider: 'Tether'
        },
        {
          type: 'bridge',
          counterparty: {
            chainName: 'ethereum',
            baseDenom: '0xdac17f958d2ee523a2206206994597c13d831ec7'
          },
          provider: 'Axelar'
        },
        {
          type: 'ibc',
          counterparty: {
            chainName: 'axelar',
            baseDenom: 'uusdt',
            channelId: 'channel-3'
          },
          chain: {
            channelId: 'channel-208',
            path: 'transfer/channel-208/uusdt'
          }
        }
      ],
      logoURIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/usdt.axl.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/usdt.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/usdt.svg'
        }, {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/usdt.axl.svg'
        }]
    },
    {
      description: 'Multi-Collateral Dai, brings a lot of new and exciting features, such as support for new CDP collateral types and Dai Savings Rate.',
      denomUnits: [{
          denom: 'ibc/0CD3A0285E1341859B5E86B6AB7682F023D03E97607CCC1DC95706411D866DF7',
          exponent: 0,
          aliases: ['dai-wei']
        }, {
          denom: 'dai',
          exponent: 18
        }],
      typeAsset: 'ics20',
      base: 'ibc/0CD3A0285E1341859B5E86B6AB7682F023D03E97607CCC1DC95706411D866DF7',
      name: 'Dai Stablecoin',
      display: 'dai',
      symbol: 'DAI',
      traces: [
        {
          type: 'synthetic',
          counterparty: {
            chainName: 'forex',
            baseDenom: 'USD'
          },
          provider: 'MakerDAO'
        },
        {
          type: 'bridge',
          counterparty: {
            chainName: 'ethereum',
            baseDenom: '0x6b175474e89094c44da98b954eedeac495271d0f'
          },
          provider: 'Axelar'
        },
        {
          type: 'ibc',
          counterparty: {
            chainName: 'axelar',
            baseDenom: 'dai-wei',
            channelId: 'channel-3'
          },
          chain: {
            channelId: 'channel-208',
            path: 'transfer/channel-208/dai-wei'
          }
        }
      ],
      logoURIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/dai.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/dai.svg'
        }]
    },
    {
      description: 'Binance USD (BUSD) is a dollar-backed stablecoin issued and custodied by Paxos Trust Company, and regulated by the New York State Department of Financial Services. BUSD is available directly for sale 1:1 with USD on Paxos.com and will be listed for trading on Binance.',
      denomUnits: [{
          denom: 'ibc/6329DD8CF31A334DD5BE3F68C846C9FE313281362B37686A62343BAC1EB1546D',
          exponent: 0,
          aliases: ['busd-wei']
        }, {
          denom: 'busd',
          exponent: 18
        }],
      typeAsset: 'ics20',
      base: 'ibc/6329DD8CF31A334DD5BE3F68C846C9FE313281362B37686A62343BAC1EB1546D',
      name: 'Binance USD',
      display: 'busd',
      symbol: 'BUSD',
      traces: [
        {
          type: 'synthetic',
          counterparty: {
            chainName: 'forex',
            baseDenom: 'USD'
          },
          provider: 'Binance'
        },
        {
          type: 'bridge',
          counterparty: {
            chainName: 'ethereum',
            baseDenom: '0x4fabb145d64652a948d72533023f6e7a623c7c53'
          },
          provider: 'Axelar'
        },
        {
          type: 'ibc',
          counterparty: {
            chainName: 'axelar',
            baseDenom: 'busd-wei',
            channelId: 'channel-3'
          },
          chain: {
            channelId: 'channel-208',
            path: 'transfer/channel-208/busd-wei'
          }
        }
      ],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/busd.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/busd.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/busd.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/busd.svg'
        }]
    },
    {
      description: 'The native staking and governance token of the Cosmos Hub.',
      denomUnits: [{
          denom: 'ibc/27394FB092D2ECCD56123C74F36E4C1F926001CEADA9CA97EA622B25F41E5EB2',
          exponent: 0,
          aliases: ['uatom']
        }, {
          denom: 'atom',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/27394FB092D2ECCD56123C74F36E4C1F926001CEADA9CA97EA622B25F41E5EB2',
      name: 'Cosmos Hub',
      display: 'atom',
      symbol: 'ATOM',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'cosmoshub',
            baseDenom: 'uatom',
            channelId: 'channel-141'
          },
          chain: {
            channelId: 'channel-0',
            path: 'transfer/channel-0/uatom'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.svg'
      },
      images: [{
          imageSync: {
            chainName: 'cosmoshub',
            baseDenom: 'uatom'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.svg'
        }]
    },
    {
      description: 'CRO is the native token of the Crypto.org Chain, referred to as Native CRO.',
      denomUnits: [{
          denom: 'ibc/E6931F78057F7CC5DA0FD6CEF82FF39373A6E0452BF1FD76910B93292CF356C1',
          exponent: 0,
          aliases: ['basecro']
        }, {
          denom: 'cro',
          exponent: 8
        }],
      typeAsset: 'ics20',
      base: 'ibc/E6931F78057F7CC5DA0FD6CEF82FF39373A6E0452BF1FD76910B93292CF356C1',
      name: 'Cronos POS Chain',
      display: 'cro',
      symbol: 'CRO',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'cryptoorgchain',
            baseDenom: 'basecro',
            channelId: 'channel-10'
          },
          chain: {
            channelId: 'channel-5',
            path: 'transfer/channel-5/basecro'
          }
        }],
      logoURIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cronos/images/cro.svg'
      },
      images: [{
          imageSync: {
            chainName: 'cryptoorgchain',
            baseDenom: 'basecro'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cronos/images/cro.svg'
        }]
    },
    {
      description: 'BNB powers the BNB Chain ecosystem and is the native coin of the BNB Beacon Chain and BNB Smart Chain.',
      denomUnits: [{
          denom: 'ibc/F4A070A6D78496D53127EA85C094A9EC87DFC1F36071B8CCDDBD020F933D213D',
          exponent: 0,
          aliases: ['wbnb-wei']
        }, {
          denom: 'wbnb',
          exponent: 18
        }],
      typeAsset: 'ics20',
      base: 'ibc/F4A070A6D78496D53127EA85C094A9EC87DFC1F36071B8CCDDBD020F933D213D',
      name: 'Binance Coin',
      display: 'wbnb',
      symbol: 'BNB',
      traces: [
        {
          type: 'wrapped',
          counterparty: {
            chainName: 'binancesmartchain',
            baseDenom: 'wei'
          },
          chain: {
            contract: '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c'
          },
          provider: 'Binance'
        },
        {
          type: 'bridge',
          counterparty: {
            chainName: 'binancesmartchain',
            baseDenom: '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c'
          },
          provider: 'Axelar'
        },
        {
          type: 'ibc',
          counterparty: {
            chainName: 'axelar',
            baseDenom: 'wbnb-wei',
            channelId: 'channel-3'
          },
          chain: {
            channelId: 'channel-208',
            path: 'transfer/channel-208/wbnb-wei'
          }
        }
      ],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/binancesmartchain/images/bnb.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/binancesmartchain/images/bnb.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/binancesmartchain/images/bnb.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/binancesmartchain/images/bnb.svg'
        }]
    },
    {
      description: 'Polygon (formerly Matic) Network brings massive scale to Ethereum using an adapted version of Plasma with PoS based side chains. Polygon is a well-structured, easy-to-use platform for Ethereum scaling and infrastructure development.',
      denomUnits: [{
          denom: 'ibc/AB589511ED0DD5FA56171A39978AFBF1371DB986EC1C3526CE138A16377E39BB',
          exponent: 0,
          aliases: ['wmatic-wei']
        }, {
          denom: 'wmatic',
          exponent: 18
        }],
      typeAsset: 'ics20',
      base: 'ibc/AB589511ED0DD5FA56171A39978AFBF1371DB986EC1C3526CE138A16377E39BB',
      name: 'Polygon',
      display: 'wmatic',
      symbol: 'MATIC',
      traces: [
        {
          type: 'wrapped',
          counterparty: {
            chainName: 'polygon',
            baseDenom: 'wei'
          },
          provider: 'Polygon'
        },
        {
          type: 'bridge',
          counterparty: {
            chainName: 'polygon',
            baseDenom: '0x0d500b1d8e8ef31e21c99d1db9a6444d3adf1270'
          },
          provider: 'Axelar'
        },
        {
          type: 'ibc',
          counterparty: {
            chainName: 'axelar',
            baseDenom: 'wmatic-wei',
            channelId: 'channel-3'
          },
          chain: {
            channelId: 'channel-208',
            path: 'transfer/channel-208/wmatic-wei'
          }
        }
      ],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/polygon/images/matic-purple.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/polygon/images/matic-purple.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/polygon/images/matic-purple.svg'
        }]
    },
    {
      description: 'AVAX is the native token of Avalanche. It is a hard-capped, scarce asset that is used to pay for fees, secure the platform through staking, and provide a basic unit of account between the multiple subnets created on Avalanche.',
      denomUnits: [{
          denom: 'ibc/6F62F01D913E3FFE472A38C78235B8F021B511BC6596ADFF02615C8F83D3B373',
          exponent: 0,
          aliases: ['wavax-wei']
        }, {
          denom: 'avax',
          exponent: 18
        }],
      typeAsset: 'ics20',
      base: 'ibc/6F62F01D913E3FFE472A38C78235B8F021B511BC6596ADFF02615C8F83D3B373',
      name: 'Avalanche',
      display: 'avax',
      symbol: 'AVAX',
      traces: [
        {
          type: 'wrapped',
          counterparty: {
            chainName: 'avalanche',
            baseDenom: 'wei'
          },
          provider: 'Avalanche'
        },
        {
          type: 'bridge',
          counterparty: {
            chainName: 'avalanche',
            baseDenom: '0xb31f66aa3c1e785363f0875a1b74e27b85fd66c7'
          },
          provider: 'Axelar'
        },
        {
          type: 'ibc',
          counterparty: {
            chainName: 'axelar',
            baseDenom: 'wavax-wei',
            channelId: 'channel-3'
          },
          chain: {
            channelId: 'channel-208',
            path: 'transfer/channel-208/wavax-wei'
          }
        }
      ],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/avalanche/images/avax.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/avalanche/images/avax.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/avalanche/images/avax.svg'
        }]
    },
    {
      description: 'The native staking token of Terra Classic.',
      denomUnits: [
        {
          denom: 'ibc/0EF15DF2F02480ADE0BB6E85D9EBB5DAEA2836D3860E9F97F9AADE4F57A31AA0',
          exponent: 0,
          aliases: ['microluna', 'uluna']
        },
        {
          denom: 'mluna',
          exponent: 3,
          aliases: ['milliluna']
        },
        {
          denom: 'luna',
          exponent: 6,
          aliases: ['lunc']
        }
      ],
      typeAsset: 'ics20',
      base: 'ibc/0EF15DF2F02480ADE0BB6E85D9EBB5DAEA2836D3860E9F97F9AADE4F57A31AA0',
      name: 'Luna Classic',
      display: 'luna',
      symbol: 'LUNC',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'terra',
            baseDenom: 'uluna',
            channelId: 'channel-1'
          },
          chain: {
            channelId: 'channel-72',
            path: 'transfer/channel-72/uluna'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/luna.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/luna.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/luna.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/luna.svg'
        }]
    },
    {
      description: 'The native token of JUNO Chain',
      denomUnits: [{
          denom: 'ibc/46B44899322F3CD854D2D46DEEF881958467CDD4B3B10086DA49296BBED94BED',
          exponent: 0,
          aliases: ['ujuno']
        }, {
          denom: 'juno',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/46B44899322F3CD854D2D46DEEF881958467CDD4B3B10086DA49296BBED94BED',
      name: 'Juno',
      display: 'juno',
      symbol: 'JUNO',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'juno',
            baseDenom: 'ujuno',
            channelId: 'channel-0'
          },
          chain: {
            channelId: 'channel-42',
            path: 'transfer/channel-42/ujuno'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/juno.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/juno.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/juno.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/juno.svg'
        }]
    },
    {
      description: 'Wrapped Polkadot on Axelar',
      denomUnits: [{
          denom: 'ibc/3FF92D26B407FD61AE95D975712A7C319CDE28DE4D80BDC9978D935932B991D7',
          exponent: 0,
          aliases: ['dot-planck']
        }, {
          denom: 'dot',
          exponent: 10
        }],
      typeAsset: 'ics20',
      base: 'ibc/3FF92D26B407FD61AE95D975712A7C319CDE28DE4D80BDC9978D935932B991D7',
      name: 'Wrapped Polkadot (Axelar)',
      display: 'dot',
      symbol: 'moonbeam.DOT.axl',
      traces: [
        {
          type: 'bridge',
          counterparty: {
            chainName: 'polkadot',
            baseDenom: 'Planck'
          },
          provider: 'Polkadot Parachain'
        },
        {
          type: 'bridge',
          counterparty: {
            chainName: 'moonbeam',
            baseDenom: '0xffffffff1fcacbd218edc0eba20fc2308c778080'
          },
          provider: 'Axelar'
        },
        {
          type: 'ibc',
          counterparty: {
            chainName: 'axelar',
            baseDenom: 'dot-planck',
            channelId: 'channel-3'
          },
          chain: {
            channelId: 'channel-208',
            path: 'transfer/channel-208/dot-planck'
          }
        }
      ],
      logoURIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/dot.axl.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/polkadot/images/dot.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/polkadot/images/dot.svg'
        }, {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/dot.axl.svg'
        }]
    },
    {
      description: 'The native EVM, governance and staking token of the Evmos Hub',
      denomUnits: [{
          denom: 'ibc/6AE98883D4D5D5FF9E50D7130F1305DA2FFA0C652D1DD9C123657C6B4EB2DF8A',
          exponent: 0,
          aliases: ['aevmos']
        }, {
          denom: 'evmos',
          exponent: 18
        }],
      typeAsset: 'ics20',
      base: 'ibc/6AE98883D4D5D5FF9E50D7130F1305DA2FFA0C652D1DD9C123657C6B4EB2DF8A',
      name: 'Evmos',
      display: 'evmos',
      symbol: 'EVMOS',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'evmos',
            baseDenom: 'aevmos',
            channelId: 'channel-0'
          },
          chain: {
            channelId: 'channel-204',
            path: 'transfer/channel-204/aevmos'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/evmos/images/evmos.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/evmos/images/evmos.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/evmos/images/evmos.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/evmos/images/evmos.svg'
        }]
    },
    {
      description: 'The native staking and governance token of Kava',
      denomUnits: [{
          denom: 'ibc/57AA1A70A4BC9769C525EBF6386F7A21536E04A79D62E1981EFCEF9428EBB205',
          exponent: 0,
          aliases: ['ukava']
        }, {
          denom: 'kava',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/57AA1A70A4BC9769C525EBF6386F7A21536E04A79D62E1981EFCEF9428EBB205',
      name: 'Kava',
      display: 'kava',
      symbol: 'KAVA',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'kava',
            baseDenom: 'ukava',
            channelId: 'channel-1'
          },
          chain: {
            channelId: 'channel-143',
            path: 'transfer/channel-143/ukava'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/kava.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/kava.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/kava.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/kava.svg'
        }]
    },
    {
      description: 'The native token of Secret Network',
      denomUnits: [{
          denom: 'ibc/0954E1C28EB7AF5B72D24F3BC2B47BBB2FDF91BDDFD57B74B99E133AED40972A',
          exponent: 0,
          aliases: ['uscrt']
        }, {
          denom: 'scrt',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/0954E1C28EB7AF5B72D24F3BC2B47BBB2FDF91BDDFD57B74B99E133AED40972A',
      name: 'Secret Network',
      display: 'scrt',
      symbol: 'SCRT',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'secretnetwork',
            baseDenom: 'uscrt',
            channelId: 'channel-1'
          },
          chain: {
            channelId: 'channel-88',
            path: 'transfer/channel-88/uscrt'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/scrt.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/scrt.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/scrt.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/scrt.svg'
        }]
    },
    {
      description: 'The USD stablecoin of Terra Classic.',
      denomUnits: [
        {
          denom: 'ibc/BE1BB42D4BE3C30D50B68D7C41DB4DFCE9678E8EF8C539F6E6A9345048894FCC',
          exponent: 0,
          aliases: ['microusd', 'uusd']
        },
        {
          denom: 'musd',
          exponent: 3,
          aliases: ['milliusd']
        },
        {
          denom: 'ust',
          exponent: 6,
          aliases: ['ustc']
        }
      ],
      typeAsset: 'ics20',
      base: 'ibc/BE1BB42D4BE3C30D50B68D7C41DB4DFCE9678E8EF8C539F6E6A9345048894FCC',
      name: 'TerraClassicUSD',
      display: 'ust',
      symbol: 'USTC',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'terra',
            baseDenom: 'uusd',
            channelId: 'channel-1'
          },
          chain: {
            channelId: 'channel-72',
            path: 'transfer/channel-72/uusd'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/ust.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/ust.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/ust.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/ust.svg'
        }]
    },
    {
      description: 'The native token of Stargaze',
      denomUnits: [{
          denom: 'ibc/987C17B11ABC2B20019178ACE62929FE9840202CE79498E29FE8E5CB02B7C0A4',
          exponent: 0,
          aliases: ['ustars']
        }, {
          denom: 'stars',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/987C17B11ABC2B20019178ACE62929FE9840202CE79498E29FE8E5CB02B7C0A4',
      name: 'Stargaze',
      display: 'stars',
      symbol: 'STARS',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'stargaze',
            baseDenom: 'ustars',
            channelId: 'channel-0'
          },
          chain: {
            channelId: 'channel-75',
            path: 'transfer/channel-75/ustars'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/stars.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/stars.svg'
      },
      images: [{
          imageSync: {
            chainName: 'stargaze',
            baseDenom: 'ustars'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/stars.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/stars.svg'
        }]
    },
    {
      description: 'The native token of Chihuahua Chain',
      denomUnits: [{
          denom: 'ibc/B9E0A1A524E98BB407D3CED8720EFEFD186002F90C1B1B7964811DD0CCC12228',
          exponent: 0,
          aliases: ['uhuahua']
        }, {
          denom: 'huahua',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/B9E0A1A524E98BB407D3CED8720EFEFD186002F90C1B1B7964811DD0CCC12228',
      name: 'Chihuahua',
      display: 'huahua',
      symbol: 'HUAHUA',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'chihuahua',
            baseDenom: 'uhuahua',
            channelId: 'channel-7'
          },
          chain: {
            channelId: 'channel-113',
            path: 'transfer/channel-113/uhuahua'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/chihuahua/images/huahua.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/chihuahua/images/huahua.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/chihuahua/images/huahua.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/chihuahua/images/huahua.svg'
        }]
    },
    {
      description: 'The XPRT token is primarily a governance token for the Persistence chain.',
      denomUnits: [{
          denom: 'ibc/A0CC0CF735BFB30E730C70019D4218A1244FF383503FF7579C9201AB93CA9293',
          exponent: 0,
          aliases: ['uxprt']
        }, {
          denom: 'xprt',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/A0CC0CF735BFB30E730C70019D4218A1244FF383503FF7579C9201AB93CA9293',
      name: 'Persistence',
      display: 'xprt',
      symbol: 'XPRT',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'persistence',
            baseDenom: 'uxprt',
            channelId: 'channel-6'
          },
          chain: {
            channelId: 'channel-4',
            path: 'transfer/channel-4/uxprt'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/xprt.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/xprt.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/xprt.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/xprt.svg'
        }]
    },
    {
      description: 'pSTAKE is a liquid staking protocol unlocking the liquidity of staked assets. Stakers of PoS tokens can stake their assets while maintaining the liquidity of these assets. Users earn staking rewards + receive 1:1 pegged staked representative tokens which can be used to generate additional yield.',
      denomUnits: [{
          denom: 'ibc/8061A06D3BD4D52C4A28FFECF7150D370393AF0BA661C3776C54FF32836C3961',
          exponent: 0,
          aliases: [
            'gravity0xfB5c6815cA3AC72Ce9F5006869AE67f18bF77006',
            '0xfB5c6815cA3AC72Ce9F5006869AE67f18bF77006',
            'ibc/A6E3AF63B3C906416A9AF7A556C59EA4BD50E617EFFE6299B99700CCB780E444'
          ]
        }, {
          denom: 'pstake',
          exponent: 18
        }],
      typeAsset: 'ics20',
      base: 'ibc/8061A06D3BD4D52C4A28FFECF7150D370393AF0BA661C3776C54FF32836C3961',
      name: 'pSTAKE Finance',
      display: 'pstake',
      symbol: 'PSTAKE',
      traces: [
        {
          type: 'liquid-stake',
          counterparty: {
            chainName: 'persistence',
            baseDenom: 'uxprt'
          },
          provider: 'Persistence'
        },
        {
          type: 'bridge',
          counterparty: {
            chainName: 'ethereum',
            baseDenom: '0xfB5c6815cA3AC72Ce9F5006869AE67f18bF77006'
          },
          provider: 'Gravity Bridge'
        },
        {
          type: 'ibc',
          counterparty: {
            chainName: 'gravitybridge',
            baseDenom: 'gravity0xfB5c6815cA3AC72Ce9F5006869AE67f18bF77006',
            channelId: 'channel-24'
          },
          chain: {
            channelId: 'channel-38',
            path: 'transfer/channel-38/gravity0xfB5c6815cA3AC72Ce9F5006869AE67f18bF77006'
          }
        },
        {
          type: 'ibc',
          counterparty: {
            chainName: 'persistence',
            baseDenom: 'ibc/A6E3AF63B3C906416A9AF7A556C59EA4BD50E617EFFE6299B99700CCB780E444',
            channelId: 'channel-6'
          },
          chain: {
            channelId: 'channel-4',
            path: 'transfer/channel-4/transfer/channel-38/gravity0xfB5c6815cA3AC72Ce9F5006869AE67f18bF77006'
          }
        }
      ],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/pstake.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/pstake.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/pstake.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/pstake.svg'
        }]
    },
    {
      description: 'Akash Token (AKT) is the Akash Network\'s native utility token, used as the primary means to govern, secure the blockchain, incentivize participants, and provide a default mechanism to store and exchange value.',
      denomUnits: [{
          denom: 'ibc/1480B8FD20AD5FCAE81EA87584D269547DD4D436843C1D20F15E00EB64743EF4',
          exponent: 0,
          aliases: ['uakt']
        }, {
          denom: 'akt',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/1480B8FD20AD5FCAE81EA87584D269547DD4D436843C1D20F15E00EB64743EF4',
      name: 'Akash',
      display: 'akt',
      symbol: 'AKT',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'akash',
            baseDenom: 'uakt',
            channelId: 'channel-9'
          },
          chain: {
            channelId: 'channel-1',
            path: 'transfer/channel-1/uakt'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/akash/images/akt.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/akash/images/akt.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/akash/images/akt.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/akash/images/akt.svg'
        }]
    },
    {
      description: 'REGEN coin is the token for the Regen Network Platform',
      denomUnits: [{
          denom: 'ibc/1DCC8A6CB5689018431323953344A9F6CC4D0BFB261E88C9F7777372C10CD076',
          exponent: 0,
          aliases: ['uregen']
        }, {
          denom: 'regen',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/1DCC8A6CB5689018431323953344A9F6CC4D0BFB261E88C9F7777372C10CD076',
      name: 'Regen',
      display: 'regen',
      symbol: 'REGEN',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'regen',
            baseDenom: 'uregen',
            channelId: 'channel-1'
          },
          chain: {
            channelId: 'channel-8',
            path: 'transfer/channel-8/uregen'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/regen/images/regen.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/regen/images/regen.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/regen/images/regen.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/regen/images/regen.svg'
        }]
    },
    {
      description: 'DVPN is the native token of the Sentinel Hub.',
      denomUnits: [{
          denom: 'ibc/9712DBB13B9631EDFA9BF61B55F1B2D290B2ADB67E3A4EB3A875F3B6081B3B84',
          exponent: 0,
          aliases: ['udvpn']
        }, {
          denom: 'dvpn',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/9712DBB13B9631EDFA9BF61B55F1B2D290B2ADB67E3A4EB3A875F3B6081B3B84',
      name: 'Sentinel',
      display: 'dvpn',
      symbol: 'DVPN',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'sentinel',
            baseDenom: 'udvpn',
            channelId: 'channel-0'
          },
          chain: {
            channelId: 'channel-2',
            path: 'transfer/channel-2/udvpn'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sentinel/images/dvpn.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sentinel/images/dvpn.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sentinel/images/dvpn.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sentinel/images/dvpn.svg'
        }]
    },
    {
      description: 'The IRIS token is the native governance token for the IrisNet chain.',
      denomUnits: [{
          denom: 'ibc/7C4D60AA95E5A7558B0A364860979CA34B7FF8AAF255B87AF9E879374470CEC0',
          exponent: 0,
          aliases: ['uiris']
        }, {
          denom: 'iris',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/7C4D60AA95E5A7558B0A364860979CA34B7FF8AAF255B87AF9E879374470CEC0',
      name: 'IRISnet',
      display: 'iris',
      symbol: 'IRIS',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'irisnet',
            baseDenom: 'uiris',
            channelId: 'channel-3'
          },
          chain: {
            channelId: 'channel-6',
            path: 'transfer/channel-6/uiris'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/irisnet/images/iris.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/irisnet/images/iris.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/irisnet/images/iris.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/irisnet/images/iris.svg'
        }]
    },
    {
      description: 'IOV coin is the token for the Starname (IOV) Asset Name Service',
      denomUnits: [{
          denom: 'ibc/52B1AA623B34EB78FD767CEA69E8D7FA6C9CFE1FBF49C5406268FD325E2CC2AC',
          exponent: 0,
          aliases: ['uiov']
        }, {
          denom: 'iov',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/52B1AA623B34EB78FD767CEA69E8D7FA6C9CFE1FBF49C5406268FD325E2CC2AC',
      name: 'Starname',
      display: 'iov',
      symbol: 'IOV',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'starname',
            baseDenom: 'uiov',
            channelId: 'channel-2'
          },
          chain: {
            channelId: 'channel-15',
            path: 'transfer/channel-15/uiov'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/starname/images/iov.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/starname/images/iov.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/starname/images/iov.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/starname/images/iov.svg'
        }]
    },
    {
      description: 'e-Money NGM staking token. In addition to earning staking rewards the token is bought back and burned based on e-Money stablecoin inflation.',
      denomUnits: [{
          denom: 'ibc/1DC495FCEFDA068A3820F903EDBD78B942FBD204D7E93D3BA2B432E9669D1A59',
          exponent: 0,
          aliases: ['ungm']
        }, {
          denom: 'ngm',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/1DC495FCEFDA068A3820F903EDBD78B942FBD204D7E93D3BA2B432E9669D1A59',
      name: 'e-Money',
      display: 'ngm',
      symbol: 'NGM',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'emoney',
            baseDenom: 'ungm',
            channelId: 'channel-0'
          },
          chain: {
            channelId: 'channel-37',
            path: 'transfer/channel-37/ungm'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/emoney/images/ngm.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/emoney/images/ngm.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/emoney/images/ngm.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/emoney/images/ngm.svg'
        }]
    },
    {
      description: 'e-Money EUR stablecoin. Audited and backed by fiat EUR deposits and government bonds.',
      denomUnits: [{
          denom: 'ibc/5973C068568365FFF40DEDCF1A1CB7582B6116B731CD31A12231AE25E20B871F',
          exponent: 0,
          aliases: ['eeur']
        }, {
          denom: 'eur',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/5973C068568365FFF40DEDCF1A1CB7582B6116B731CD31A12231AE25E20B871F',
      name: 'e-Money EUR',
      display: 'eur',
      symbol: 'EEUR',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'emoney',
            baseDenom: 'eeur',
            channelId: 'channel-0'
          },
          chain: {
            channelId: 'channel-37',
            path: 'transfer/channel-37/eeur'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/emoney/images/eeur.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/emoney/images/eeur.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/emoney/images/eeur.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/emoney/images/eeur.svg'
        }]
    },
    {
      description: 'LIKE is the native staking and governance token of LikeCoin chain, a Decentralized Publishing Infrastructure to empower content ownership, authenticity, and provenance.',
      denomUnits: [{
          denom: 'ibc/9989AD6CCA39D1131523DB0617B50F6442081162294B4795E26746292467B525',
          exponent: 0,
          aliases: ['nanolike']
        }, {
          denom: 'like',
          exponent: 9
        }],
      typeAsset: 'ics20',
      base: 'ibc/9989AD6CCA39D1131523DB0617B50F6442081162294B4795E26746292467B525',
      name: 'LikeCoin',
      display: 'like',
      symbol: 'LIKE',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'likecoin',
            baseDenom: 'nanolike',
            channelId: 'channel-3'
          },
          chain: {
            channelId: 'channel-53',
            path: 'transfer/channel-53/nanolike'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/likecoin/images/like.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/likecoin/images/like.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/likecoin/images/like.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/likecoin/images/like.svg'
        }]
    },
    {
      description: 'The native token of IXO Chain',
      denomUnits: [{
          denom: 'ibc/F3FF7A84A73B62921538642F9797C423D2B4C4ACB3C7FCFFCE7F12AA69909C4B',
          exponent: 0,
          aliases: ['uixo']
        }, {
          denom: 'ixo',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/F3FF7A84A73B62921538642F9797C423D2B4C4ACB3C7FCFFCE7F12AA69909C4B',
      name: 'Impacts Hub',
      display: 'ixo',
      symbol: 'IXO',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'impacthub',
            baseDenom: 'uixo',
            channelId: 'channel-4'
          },
          chain: {
            channelId: 'channel-38',
            path: 'transfer/channel-38/uixo'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/impacthub/images/ixo.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/impacthub/images/ixo.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/impacthub/images/ixo.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/impacthub/images/ixo.svg'
        }]
    },
    {
      description: 'The BCNA coin is the transactional token within the BitCanna network, serving the legal cannabis industry through its payment network, supply chain and trust network.',
      denomUnits: [{
          denom: 'ibc/D805F1DA50D31B96E4282C1D4181EDDFB1A44A598BFF5666F4B43E4B8BEA95A5',
          exponent: 0,
          aliases: ['ubcna']
        }, {
          denom: 'bcna',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/D805F1DA50D31B96E4282C1D4181EDDFB1A44A598BFF5666F4B43E4B8BEA95A5',
      name: 'BitCanna',
      display: 'bcna',
      symbol: 'BCNA',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'bitcanna',
            baseDenom: 'ubcna',
            channelId: 'channel-1'
          },
          chain: {
            channelId: 'channel-51',
            path: 'transfer/channel-51/ubcna'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bitcanna/images/bcna.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bitcanna/images/bcna.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bitcanna/images/bcna.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bitcanna/images/bcna.svg'
        }]
    },
    {
      description: 'BitSong Native Token',
      denomUnits: [{
          denom: 'ibc/4E5444C35610CC76FC94E7F7886B93121175C28262DDFDDE6F84E82BF2425452',
          exponent: 0,
          aliases: ['ubtsg']
        }, {
          denom: 'btsg',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/4E5444C35610CC76FC94E7F7886B93121175C28262DDFDDE6F84E82BF2425452',
      name: 'BitSong',
      display: 'btsg',
      symbol: 'BTSG',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'bitsong',
            baseDenom: 'ubtsg',
            channelId: 'channel-0'
          },
          chain: {
            channelId: 'channel-73',
            path: 'transfer/channel-73/ubtsg'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bitsong/images/btsg.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bitsong/images/btsg.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bitsong/images/btsg.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bitsong/images/btsg.svg'
        }]
    },
    {
      description: 'The native token of Ki Chain',
      denomUnits: [{
          denom: 'ibc/B547DC9B897E7C3AA5B824696110B8E3D2C31E3ED3F02FF363DCBAD82457E07E',
          exponent: 0,
          aliases: ['uxki']
        }, {
          denom: 'xki',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/B547DC9B897E7C3AA5B824696110B8E3D2C31E3ED3F02FF363DCBAD82457E07E',
      name: 'Ki',
      display: 'xki',
      symbol: 'XKI',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'kichain',
            baseDenom: 'uxki',
            channelId: 'channel-0'
          },
          chain: {
            channelId: 'channel-77',
            path: 'transfer/channel-77/uxki'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kichain/images/xki.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kichain/images/xki.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kichain/images/xki.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kichain/images/xki.svg'
        }]
    },
    {
      description: 'Panacea is a public blockchain launched by MediBloc, which is the key infrastructure for reinventing the patient-centered healthcare data ecosystem',
      denomUnits: [{
          denom: 'ibc/3BCCC93AD5DF58D11A6F8A05FA8BC801CBA0BA61A981F57E91B8B598BF8061CB',
          exponent: 0,
          aliases: ['umed']
        }, {
          denom: 'med',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/3BCCC93AD5DF58D11A6F8A05FA8BC801CBA0BA61A981F57E91B8B598BF8061CB',
      name: 'Medibloc',
      display: 'med',
      symbol: 'MED',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'panacea',
            baseDenom: 'umed',
            channelId: 'channel-1'
          },
          chain: {
            channelId: 'channel-82',
            path: 'transfer/channel-82/umed'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/panacea/images/med.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/panacea/images/med.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/panacea/images/med.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/panacea/images/med.svg'
        }]
    },
    {
      description: 'The staking token of Bostrom',
      denomUnits: [{
          denom: 'ibc/FE2CD1E6828EC0FAB8AF39BAC45BC25B965BA67CCBC50C13A14BD610B0D1E2C4',
          exponent: 0,
          aliases: ['boot']
        }],
      typeAsset: 'ics20',
      base: 'ibc/FE2CD1E6828EC0FAB8AF39BAC45BC25B965BA67CCBC50C13A14BD610B0D1E2C4',
      name: 'bostrom',
      display: 'ibc/FE2CD1E6828EC0FAB8AF39BAC45BC25B965BA67CCBC50C13A14BD610B0D1E2C4',
      symbol: 'BOOT',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'bostrom',
            baseDenom: 'boot',
            channelId: 'channel-2'
          },
          chain: {
            channelId: 'channel-95',
            path: 'transfer/channel-95/boot'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bostrom/images/boot.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bostrom/images/boot.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bostrom/images/boot.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bostrom/images/boot.svg'
        }]
    },
    {
      description: 'Native Token of Comdex Protocol',
      denomUnits: [{
          denom: 'ibc/EA3E1640F9B1532AB129A571203A0B9F789A7F14BB66E350DCBFA18E1A1931F0',
          exponent: 0,
          aliases: ['ucmdx']
        }, {
          denom: 'cmdx',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/EA3E1640F9B1532AB129A571203A0B9F789A7F14BB66E350DCBFA18E1A1931F0',
      name: 'Comdex',
      display: 'cmdx',
      symbol: 'CMDX',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'comdex',
            baseDenom: 'ucmdx',
            channelId: 'channel-1'
          },
          chain: {
            channelId: 'channel-87',
            path: 'transfer/channel-87/ucmdx'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/comdex/images/cmdx.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/comdex/images/cmdx.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/comdex/images/cmdx.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/comdex/images/cmdx.svg'
        }]
    },
    {
      description: 'Native token for the cheqd network',
      denomUnits: [{
          denom: 'ibc/7A08C6F11EF0F59EB841B9F788A87EC9F2361C7D9703157EC13D940DC53031FA',
          exponent: 0,
          aliases: ['ncheq']
        }, {
          denom: 'cheq',
          exponent: 9
        }],
      typeAsset: 'ics20',
      base: 'ibc/7A08C6F11EF0F59EB841B9F788A87EC9F2361C7D9703157EC13D940DC53031FA',
      name: 'Cheqd',
      display: 'cheq',
      symbol: 'CHEQ',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'cheqd',
            baseDenom: 'ncheq',
            channelId: 'channel-0'
          },
          chain: {
            channelId: 'channel-108',
            path: 'transfer/channel-108/ncheq'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cheqd/images/cheq.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cheqd/images/cheq.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cheqd/images/cheq.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cheqd/images/cheq.svg'
        }]
    },
    {
      description: 'Native token of the Lum Network',
      denomUnits: [{
          denom: 'ibc/8A34AF0C1943FD0DFCDE9ADBF0B2C9959C45E87E6088EA2FC6ADACD59261B8A2',
          exponent: 0,
          aliases: ['ulum']
        }, {
          denom: 'lum',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/8A34AF0C1943FD0DFCDE9ADBF0B2C9959C45E87E6088EA2FC6ADACD59261B8A2',
      name: 'Lum Network',
      display: 'lum',
      symbol: 'LUM',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'lumnetwork',
            baseDenom: 'ulum',
            channelId: 'channel-3'
          },
          chain: {
            channelId: 'channel-115',
            path: 'transfer/channel-115/ulum'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/lumnetwork/images/lum.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/lumnetwork/images/lum.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/lumnetwork/images/lum.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/lumnetwork/images/lum.svg'
        }]
    },
    {
      description: 'The native token of Vidulum',
      denomUnits: [{
          denom: 'ibc/E7B35499CFBEB0FF5778127ABA4FB2C4B79A6B8D3D831D4379C4048C238796BD',
          exponent: 0,
          aliases: ['uvdl']
        }, {
          denom: 'vdl',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/E7B35499CFBEB0FF5778127ABA4FB2C4B79A6B8D3D831D4379C4048C238796BD',
      name: 'Vidulum',
      display: 'vdl',
      symbol: 'VDL',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'vidulum',
            baseDenom: 'uvdl',
            channelId: 'channel-0'
          },
          chain: {
            channelId: 'channel-124',
            path: 'transfer/channel-124/uvdl'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/vidulum/images/vdl.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/vidulum/images/vdl.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/vidulum/images/vdl.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/vidulum/images/vdl.svg'
        }]
    },
    {
      description: 'The native token of Desmos',
      denomUnits: [{
          denom: 'ibc/EA4C0A9F72E2CEDF10D0E7A9A6A22954DB3444910DB5BE980DF59B05A46DAD1C',
          exponent: 0,
          aliases: ['udsm']
        }, {
          denom: 'dsm',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/EA4C0A9F72E2CEDF10D0E7A9A6A22954DB3444910DB5BE980DF59B05A46DAD1C',
      name: 'Desmos',
      display: 'dsm',
      symbol: 'DSM',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'desmos',
            baseDenom: 'udsm',
            channelId: 'channel-2'
          },
          chain: {
            channelId: 'channel-135',
            path: 'transfer/channel-135/udsm'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/desmos/images/dsm.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/desmos/images/dsm.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/desmos/images/dsm.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/desmos/images/dsm.svg'
        }]
    },
    {
      description: 'Native token of Dig Chain',
      denomUnits: [{
          denom: 'ibc/307E5C96C8F60D1CBEE269A9A86C0834E1DB06F2B3788AE4F716EDB97A48B97D',
          exponent: 0,
          aliases: ['udig']
        }, {
          denom: 'dig',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/307E5C96C8F60D1CBEE269A9A86C0834E1DB06F2B3788AE4F716EDB97A48B97D',
      name: 'Dig Chain',
      display: 'dig',
      symbol: 'DIG',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'dig',
            baseDenom: 'udig',
            channelId: 'channel-1'
          },
          chain: {
            channelId: 'channel-128',
            path: 'transfer/channel-128/udig'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dig/images/dig.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dig/images/dig.png'
        }],
      keywords: ['osmosis_unstable']
    },
    {
      description: 'Somm Token (SOMM) is the native staking token of the Sommelier Chain',
      denomUnits: [
        {
          denom: 'ibc/9BBA9A1C257E971E38C1422780CE6F0B0686F0A3085E2D61118D904BFE0F5F5E',
          exponent: 0,
          aliases: ['microsomm', 'usomm']
        },
        {
          denom: 'msomm',
          exponent: 3,
          aliases: ['millisomm']
        },
        {
          denom: 'somm',
          exponent: 6
        }
      ],
      typeAsset: 'ics20',
      base: 'ibc/9BBA9A1C257E971E38C1422780CE6F0B0686F0A3085E2D61118D904BFE0F5F5E',
      name: 'Sommelier',
      display: 'somm',
      symbol: 'SOMM',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'sommelier',
            baseDenom: 'usomm',
            channelId: 'channel-0'
          },
          chain: {
            channelId: 'channel-165',
            path: 'transfer/channel-165/usomm'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sommelier/images/somm.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sommelier/images/somm.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sommelier/images/somm.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sommelier/images/somm.svg'
        }]
    },
    {
      description: 'The native token of BandChain',
      denomUnits: [{
          denom: 'ibc/F867AE2112EFE646EC71A25CD2DFABB8927126AC1E19F1BBF0FF693A4ECA05DE',
          exponent: 0,
          aliases: ['uband']
        }, {
          denom: 'band',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/F867AE2112EFE646EC71A25CD2DFABB8927126AC1E19F1BBF0FF693A4ECA05DE',
      name: 'Band Protocol',
      display: 'band',
      symbol: 'BAND',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'bandchain',
            baseDenom: 'uband',
            channelId: 'channel-83'
          },
          chain: {
            channelId: 'channel-148',
            path: 'transfer/channel-148/uband'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bandchain/images/band.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bandchain/images/band.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bandchain/images/band.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bandchain/images/band.svg'
        }]
    },
    {
      description: 'The native token of Konstellation Network',
      denomUnits: [{
          denom: 'ibc/346786EA82F41FE55FAD14BF69AD8BA9B36985406E43F3CB23E6C45A285A9593',
          exponent: 0,
          aliases: ['udarc']
        }, {
          denom: 'darc',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/346786EA82F41FE55FAD14BF69AD8BA9B36985406E43F3CB23E6C45A285A9593',
      name: 'Konstellation',
      display: 'darc',
      symbol: 'DARC',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'konstellation',
            baseDenom: 'udarc',
            channelId: 'channel-0'
          },
          chain: {
            channelId: 'channel-171',
            path: 'transfer/channel-171/udarc'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/konstellation/images/darc.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/konstellation/images/darc.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/konstellation/images/darc.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/konstellation/images/darc.svg'
        }],
      keywords: ['osmosis_unstable']
    },
    {
      description: 'The native token of Umee',
      denomUnits: [{
          denom: 'ibc/67795E528DF67C5606FC20F824EA39A6EF55BA133F4DC79C90A8C47A0901E17C',
          exponent: 0,
          aliases: ['uumee']
        }, {
          denom: 'umee',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/67795E528DF67C5606FC20F824EA39A6EF55BA133F4DC79C90A8C47A0901E17C',
      name: 'UX Chain',
      display: 'umee',
      symbol: 'UMEE',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'umee',
            baseDenom: 'uumee',
            channelId: 'channel-0'
          },
          chain: {
            channelId: 'channel-184',
            path: 'transfer/channel-184/uumee'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/umee/images/umee.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/umee/images/umee.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/umee/images/umee.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/umee/images/umee.svg'
        }]
    },
    {
      description: 'The native token of Gravity Bridge',
      denomUnits: [{
          denom: 'ibc/E97634A40119F1898989C2A23224ED83FDD0A57EA46B3A094E287288D1672B44',
          exponent: 0,
          aliases: ['ugraviton']
        }, {
          denom: 'graviton',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/E97634A40119F1898989C2A23224ED83FDD0A57EA46B3A094E287288D1672B44',
      name: 'Gravity Bridge',
      display: 'graviton',
      symbol: 'GRAV',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'gravitybridge',
            baseDenom: 'ugraviton',
            channelId: 'channel-10'
          },
          chain: {
            channelId: 'channel-144',
            path: 'transfer/channel-144/ugraviton'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/gravitybridge/images/grav.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/gravitybridge/images/grav.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/gravitybridge/images/grav.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/gravitybridge/images/grav.svg'
        }]
    },
    {
      description: 'The native token of Decentr',
      denomUnits: [{
          denom: 'ibc/9BCB27203424535B6230D594553F1659C77EC173E36D9CF4759E7186EE747E84',
          exponent: 0,
          aliases: ['udec']
        }, {
          denom: 'dec',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/9BCB27203424535B6230D594553F1659C77EC173E36D9CF4759E7186EE747E84',
      name: 'Decentr',
      display: 'dec',
      symbol: 'DEC',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'decentr',
            baseDenom: 'udec',
            channelId: 'channel-1'
          },
          chain: {
            channelId: 'channel-181',
            path: 'transfer/channel-181/udec'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/decentr/images/dec.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/decentr/images/dec.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/decentr/images/dec.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/decentr/images/dec.svg'
        }]
    },
    {
      description: 'The native token cw20 for Marble DAO on Juno Chain',
      denomUnits: [{
          denom: 'ibc/F6B691D5F7126579DDC87357B09D653B47FDCE0A3383FF33C8D8B544FE29A8A6',
          exponent: 0,
          aliases: ['cw20:juno1g2g7ucurum66d42g8k5twk34yegdq8c82858gz0tq2fc75zy7khssgnhjl']
        }, {
          denom: 'marble',
          exponent: 3
        }],
      typeAsset: 'ics20',
      base: 'ibc/F6B691D5F7126579DDC87357B09D653B47FDCE0A3383FF33C8D8B544FE29A8A6',
      name: 'Marble',
      display: 'marble',
      symbol: 'MARBLE',
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            chainName: 'juno',
            baseDenom: 'cw20:juno1g2g7ucurum66d42g8k5twk34yegdq8c82858gz0tq2fc75zy7khssgnhjl',
            port: 'wasm.juno1v4887y83d6g28puzvt8cl0f3cdhd3y6y9mpysnsp3k8krdm7l6jqgm0rkn',
            channelId: 'channel-47'
          },
          chain: {
            port: 'transfer',
            channelId: 'channel-169',
            path: 'transfer/channel-169/cw20:juno1g2g7ucurum66d42g8k5twk34yegdq8c82858gz0tq2fc75zy7khssgnhjl'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/marble.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/marble.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/marble.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/marble.svg'
        }]
    },
    {
      description: 'The native governance token of Carbon',
      denomUnits: [{
          denom: 'ibc/8FEFAE6AECF6E2A255585617F781F35A8D5709A545A804482A261C0C9548A9D3',
          exponent: 0,
          aliases: ['swth']
        }, {
          denom: 'dswth',
          exponent: 8,
          aliases: ['SWTH']
        }],
      typeAsset: 'ics20',
      base: 'ibc/8FEFAE6AECF6E2A255585617F781F35A8D5709A545A804482A261C0C9548A9D3',
      name: 'Carbon',
      display: 'dswth',
      symbol: 'SWTH',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'carbon',
            baseDenom: 'swth',
            channelId: 'channel-0'
          },
          chain: {
            channelId: 'channel-188',
            path: 'transfer/channel-188/swth'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/carbon/images/swth.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/carbon/images/swth.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/carbon/images/swth.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/carbon/images/swth.svg'
        }]
    },
    {
      description: 'The native token of Cerberus Chain',
      denomUnits: [{
          denom: 'ibc/41999DF04D9441DAC0DF5D8291DF4333FBCBA810FFD63FDCE34FDF41EF37B6F7',
          exponent: 0,
          aliases: ['ucrbrus']
        }, {
          denom: 'crbrus',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/41999DF04D9441DAC0DF5D8291DF4333FBCBA810FFD63FDCE34FDF41EF37B6F7',
      name: 'Cerberus',
      display: 'crbrus',
      symbol: 'CRBRUS',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'cerberus',
            baseDenom: 'ucrbrus',
            channelId: 'channel-1'
          },
          chain: {
            channelId: 'channel-212',
            path: 'transfer/channel-212/ucrbrus'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cerberus/images/crbrus.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cerberus/images/crbrus.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cerberus/images/crbrus.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cerberus/images/crbrus.svg'
        }],
      keywords: ['osmosis_unstable']
    },
    {
      description: 'The native staking and governance token of the Fetch Hub.',
      denomUnits: [{
          denom: 'ibc/5D1F516200EE8C6B2354102143B78A2DEDA25EDE771AC0F8DC3C1837C8FD4447',
          exponent: 0,
          aliases: ['afet']
        }, {
          denom: 'fet',
          exponent: 18
        }],
      typeAsset: 'ics20',
      base: 'ibc/5D1F516200EE8C6B2354102143B78A2DEDA25EDE771AC0F8DC3C1837C8FD4447',
      name: 'Fetch.ai',
      display: 'fet',
      symbol: 'FET',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'fetchhub',
            baseDenom: 'afet',
            channelId: 'channel-10'
          },
          chain: {
            channelId: 'channel-229',
            path: 'transfer/channel-229/afet'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/fetchhub/images/fet.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/fetchhub/images/fet.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/fetchhub/images/fet.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/fetchhub/images/fet.svg'
        }]
    },
    {
      description: 'The native token of Asset Mantle',
      denomUnits: [{
          denom: 'ibc/CBA34207E969623D95D057D9B11B0C8B32B89A71F170577D982FDDE623813FFC',
          exponent: 0,
          aliases: ['umntl']
        }, {
          denom: 'mntl',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/CBA34207E969623D95D057D9B11B0C8B32B89A71F170577D982FDDE623813FFC',
      name: 'AssetMantle',
      display: 'mntl',
      symbol: 'MNTL',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'assetmantle',
            baseDenom: 'umntl',
            channelId: 'channel-0'
          },
          chain: {
            channelId: 'channel-232',
            path: 'transfer/channel-232/umntl'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/assetmantle/images/mntl.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/assetmantle/images/mntl.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/assetmantle/images/mntl.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/assetmantle/images/mntl.svg'
        }]
    },
    {
      description: 'The native token cw20 for Neta on Juno Chain',
      denomUnits: [{
          denom: 'ibc/297C64CC42B5A8D8F82FE2EBE208A6FE8F94B86037FA28C4529A23701C228F7A',
          exponent: 0,
          aliases: ['cw20:juno168ctmpyppk90d34p3jjy658zf5a5l3w8wk35wht6ccqj4mr0yv8s4j5awr']
        }, {
          denom: 'neta',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/297C64CC42B5A8D8F82FE2EBE208A6FE8F94B86037FA28C4529A23701C228F7A',
      name: 'Neta',
      display: 'neta',
      symbol: 'NETA',
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            chainName: 'juno',
            baseDenom: 'cw20:juno168ctmpyppk90d34p3jjy658zf5a5l3w8wk35wht6ccqj4mr0yv8s4j5awr',
            port: 'wasm.juno1v4887y83d6g28puzvt8cl0f3cdhd3y6y9mpysnsp3k8krdm7l6jqgm0rkn',
            channelId: 'channel-47'
          },
          chain: {
            port: 'transfer',
            channelId: 'channel-169',
            path: 'transfer/channel-169/cw20:juno168ctmpyppk90d34p3jjy658zf5a5l3w8wk35wht6ccqj4mr0yv8s4j5awr'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/neta.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/neta.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/neta.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/neta.svg'
        }]
    },
    {
      description: 'The INJ token is the native governance token for the Injective chain.',
      denomUnits: [{
          denom: 'ibc/64BA6E31FE887D66C6F8F31C7B1A80C7CA179239677B4088BB55F5EA07DBE273',
          exponent: 0,
          aliases: ['inj']
        }, {
          denom: 'INJ',
          exponent: 18
        }],
      typeAsset: 'ics20',
      base: 'ibc/64BA6E31FE887D66C6F8F31C7B1A80C7CA179239677B4088BB55F5EA07DBE273',
      name: 'Injective',
      display: 'INJ',
      symbol: 'INJ',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'injective',
            baseDenom: 'inj',
            channelId: 'channel-8'
          },
          chain: {
            channelId: 'channel-122',
            path: 'transfer/channel-122/inj'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/inj.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/inj.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/inj.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/inj.svg'
        }]
    },
    {
      description: 'The KRW stablecoin of Terra Classic.',
      denomUnits: [
        {
          denom: 'ibc/204A582244FC241613DBB50B04D1D454116C58C4AF7866C186AA0D6EEAD42780',
          exponent: 0,
          aliases: ['microkrw', 'ukrw']
        },
        {
          denom: 'mkrw',
          exponent: 3,
          aliases: ['millikrw']
        },
        {
          denom: 'krt',
          exponent: 6,
          aliases: ['krtc']
        }
      ],
      typeAsset: 'ics20',
      base: 'ibc/204A582244FC241613DBB50B04D1D454116C58C4AF7866C186AA0D6EEAD42780',
      name: 'TerraClassicKRW',
      display: 'krt',
      symbol: 'KRTC',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'terra',
            baseDenom: 'ukrw',
            channelId: 'channel-1'
          },
          chain: {
            channelId: 'channel-72',
            path: 'transfer/channel-72/ukrw'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/krt.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/krt.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/krt.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/krt.svg'
        }]
    },
    {
      description: 'TICK coin is the token for the Microtick Price Discovery & Oracle App',
      denomUnits: [{
          denom: 'ibc/655BCEF3CDEBE32863FF281DBBE3B06160339E9897DC9C9C9821932A5F8BA6F8',
          exponent: 0,
          aliases: ['utick']
        }, {
          denom: 'tick',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/655BCEF3CDEBE32863FF281DBBE3B06160339E9897DC9C9C9821932A5F8BA6F8',
      name: 'Microtick',
      display: 'tick',
      symbol: 'TICK',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'microtick',
            baseDenom: 'utick',
            channelId: 'channel-16'
          },
          chain: {
            channelId: 'channel-39',
            path: 'transfer/channel-39/utick'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/microtick/images/tick.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/microtick/images/tick.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/microtick/images/tick.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/microtick/images/tick.svg'
        }],
      keywords: ['osmosis_unstable']
    },
    {
      description: 'Rowan Token (ROWAN) is the Sifchain Network\'s native utility token, used as the primary means to govern, provide liquidity, secure the blockchain, incentivize participants, and provide a default mechanism to store and exchange value.',
      denomUnits: [{
          denom: 'ibc/8318FD63C42203D16DDCAF49FE10E8590669B3219A3E87676AC9DA50722687FB',
          exponent: 0,
          aliases: ['rowan']
        }, {
          denom: 'ROWAN',
          exponent: 18
        }],
      typeAsset: 'ics20',
      base: 'ibc/8318FD63C42203D16DDCAF49FE10E8590669B3219A3E87676AC9DA50722687FB',
      name: 'Sifchain',
      display: 'ROWAN',
      symbol: 'ROWAN',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'sifchain',
            baseDenom: 'rowan',
            channelId: 'channel-17'
          },
          chain: {
            channelId: 'channel-47',
            path: 'transfer/channel-47/rowan'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sifchain/images/rowan.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sifchain/images/rowan.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sifchain/images/rowan.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sifchain/images/rowan.svg'
        }]
    },
    {
      description: 'The native token of Shentu',
      denomUnits: [{
          denom: 'ibc/7ED954CFFFC06EE8419387F3FC688837FF64EF264DE14219935F724EEEDBF8D3',
          exponent: 0,
          aliases: ['uctk']
        }, {
          denom: 'ctk',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/7ED954CFFFC06EE8419387F3FC688837FF64EF264DE14219935F724EEEDBF8D3',
      name: 'Shentu',
      display: 'ctk',
      symbol: 'CTK',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'shentu',
            baseDenom: 'uctk',
            channelId: 'channel-8'
          },
          chain: {
            channelId: 'channel-146',
            path: 'transfer/channel-146/uctk'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/shentu/images/ctk.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/shentu/images/ctk.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/shentu/images/ctk.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/shentu/images/ctk.svg'
        }]
    },
    {
      description: 'Hope Galaxy is an NFT collection based on its own native Token $HOPE, a cw20 token on Juno chain.',
      denomUnits: [{
          denom: 'ibc/C2A2E9CA95DDD4828B75124B5E27B8401C7D8493BC48353D418CBFC04565899B',
          exponent: 0,
          aliases: ['cw20:juno1re3x67ppxap48ygndmrc7har2cnc7tcxtm9nplcas4v0gc3wnmvs3s807z']
        }, {
          denom: 'hope',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/C2A2E9CA95DDD4828B75124B5E27B8401C7D8493BC48353D418CBFC04565899B',
      name: 'Hope Galaxy',
      display: 'hope',
      symbol: 'HOPE',
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            chainName: 'juno',
            baseDenom: 'cw20:juno1re3x67ppxap48ygndmrc7har2cnc7tcxtm9nplcas4v0gc3wnmvs3s807z',
            port: 'wasm.juno1v4887y83d6g28puzvt8cl0f3cdhd3y6y9mpysnsp3k8krdm7l6jqgm0rkn',
            channelId: 'channel-47'
          },
          chain: {
            port: 'transfer',
            channelId: 'channel-169',
            path: 'transfer/channel-169/cw20:juno1re3x67ppxap48ygndmrc7har2cnc7tcxtm9nplcas4v0gc3wnmvs3s807z'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/hope.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/hope.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/hope.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/hope.svg'
        }]
    },
    {
      description: 'Racoon aims to simplify accessibility to AI, NFTs and Gambling on the Cosmos Ecosystem',
      denomUnits: [{
          denom: 'ibc/6BDB4C8CCD45033F9604E4B93ED395008A753E01EECD6992E7D1EA23D9D3B788',
          exponent: 0,
          aliases: ['cw20:juno1r4pzw8f9z0sypct5l9j906d47z998ulwvhvqe5xdwgy8wf84583sxwh0pa']
        }, {
          denom: 'rac',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/6BDB4C8CCD45033F9604E4B93ED395008A753E01EECD6992E7D1EA23D9D3B788',
      name: 'Racoon',
      display: 'rac',
      symbol: 'juno.RAC',
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            chainName: 'juno',
            baseDenom: 'cw20:juno1r4pzw8f9z0sypct5l9j906d47z998ulwvhvqe5xdwgy8wf84583sxwh0pa',
            port: 'wasm.juno1v4887y83d6g28puzvt8cl0f3cdhd3y6y9mpysnsp3k8krdm7l6jqgm0rkn',
            channelId: 'channel-47'
          },
          chain: {
            port: 'transfer',
            channelId: 'channel-169',
            path: 'transfer/channel-169/cw20:juno1r4pzw8f9z0sypct5l9j906d47z998ulwvhvqe5xdwgy8wf84583sxwh0pa'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/rac.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/rac.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/rac.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/rac.svg'
        }]
    },
    {
      description: 'Frax is a fractional-algorithmic stablecoin protocol. It aims to provide a highly scalable, decentralized, algorithmic money in place of fixed-supply assets like BTC. Additionally, FXS is the value accrual and governance token of the entire Frax ecosystem.',
      denomUnits: [{
          denom: 'ibc/0E43EDE2E2A3AFA36D0CD38BDDC0B49FECA64FA426A82E102F304E430ECF46EE',
          exponent: 0,
          aliases: ['frax-wei']
        }, {
          denom: 'frax',
          exponent: 18
        }],
      typeAsset: 'ics20',
      base: 'ibc/0E43EDE2E2A3AFA36D0CD38BDDC0B49FECA64FA426A82E102F304E430ECF46EE',
      name: 'Frax',
      display: 'frax',
      symbol: 'FRAX',
      traces: [
        {
          type: 'synthetic',
          counterparty: {
            chainName: 'forex',
            baseDenom: 'USD'
          },
          provider: 'Frax Protocol'
        },
        {
          type: 'bridge',
          counterparty: {
            chainName: 'ethereum',
            baseDenom: '0x853d955acef822db058eb8505911ed77f175b99e'
          },
          provider: 'Axelar'
        },
        {
          type: 'ibc',
          counterparty: {
            chainName: 'axelar',
            baseDenom: 'frax-wei',
            channelId: 'channel-3'
          },
          chain: {
            channelId: 'channel-208',
            path: 'transfer/channel-208/frax-wei'
          }
        }
      ],
      logoURIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/frax.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/frax.svg'
        }]
    },
    {
      description: 'Gravity Bridge WBTC',
      denomUnits: [{
          denom: 'ibc/C9B0D48FD2C5B91135F118FF2484551888966590D7BDC20F6A87308DBA670796',
          exponent: 0,
          aliases: ['gravity0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599']
        }, {
          denom: 'gwbtc',
          exponent: 8
        }],
      typeAsset: 'ics20',
      base: 'ibc/C9B0D48FD2C5B91135F118FF2484551888966590D7BDC20F6A87308DBA670796',
      name: 'Wrapped Bitcoin (Gravity Bridge)',
      display: 'gwbtc',
      symbol: 'WBTC.grv',
      traces: [
        {
          type: 'bridge',
          counterparty: {
            chainName: 'bitcoin',
            baseDenom: 'sat'
          },
          provider: 'BitGo, Kyber, and Ren'
        },
        {
          type: 'bridge',
          counterparty: {
            chainName: 'ethereum',
            baseDenom: '0x2260fac5e5542a773aa44fbcfedf7c193bc2c599'
          },
          provider: 'Gravity Bridge'
        },
        {
          type: 'ibc',
          counterparty: {
            chainName: 'gravitybridge',
            baseDenom: 'gravity0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599',
            channelId: 'channel-10'
          },
          chain: {
            channelId: 'channel-144',
            path: 'transfer/channel-144/gravity0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599'
          }
        }
      ],
      logoURIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/wbtc.grv.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/wbtc.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/wbtc.svg'
        }, {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/wbtc.grv.svg'
        }]
    },
    {
      description: 'Gravity Bridge WETH',
      denomUnits: [{
          denom: 'ibc/65381C5F3FD21442283D56925E62EA524DED8B6927F0FF94E21E0020954C40B5',
          exponent: 0,
          aliases: ['gravity0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2']
        }, {
          denom: 'gweth',
          exponent: 18
        }],
      typeAsset: 'ics20',
      base: 'ibc/65381C5F3FD21442283D56925E62EA524DED8B6927F0FF94E21E0020954C40B5',
      name: 'Ether (Gravity Bridge)',
      display: 'gweth',
      symbol: 'WETH.grv',
      traces: [
        {
          type: 'wrapped',
          counterparty: {
            chainName: 'ethereum',
            baseDenom: 'wei'
          },
          provider: 'Ethereum'
        },
        {
          type: 'bridge',
          counterparty: {
            chainName: 'ethereum',
            baseDenom: '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2'
          },
          provider: 'Gravity Bridge'
        },
        {
          type: 'ibc',
          counterparty: {
            chainName: 'gravitybridge',
            baseDenom: 'gravity0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
            channelId: 'channel-10'
          },
          chain: {
            channelId: 'channel-144',
            path: 'transfer/channel-144/gravity0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2'
          }
        }
      ],
      logoURIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/weth.grv.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/weth.svg'
        }, {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/weth.grv.svg'
        }]
    },
    {
      description: 'Gravity Bridge USDC',
      denomUnits: [{
          denom: 'ibc/9F9B07EF9AD291167CF5700628145DE1DEB777C2CFC7907553B24446515F6D0E',
          exponent: 0,
          aliases: ['gravity0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48']
        }, {
          denom: 'gusdc',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/9F9B07EF9AD291167CF5700628145DE1DEB777C2CFC7907553B24446515F6D0E',
      name: 'USD Coin (Gravity Bridge)',
      display: 'gusdc',
      symbol: 'USDC.grv',
      traces: [
        {
          type: 'synthetic',
          counterparty: {
            chainName: 'forex',
            baseDenom: 'USD'
          },
          provider: 'Circle'
        },
        {
          type: 'bridge',
          counterparty: {
            chainName: 'ethereum',
            baseDenom: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48'
          },
          provider: 'Gravity Bridge'
        },
        {
          type: 'ibc',
          counterparty: {
            chainName: 'gravitybridge',
            baseDenom: 'gravity0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48',
            channelId: 'channel-10'
          },
          chain: {
            channelId: 'channel-144',
            path: 'transfer/channel-144/gravity0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48'
          }
        }
      ],
      logoURIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/usdc.grv.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdc.svg'
        }, {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/usdc.grv.svg'
        }]
    },
    {
      description: 'Gravity Bridge DAI',
      denomUnits: [{
          denom: 'ibc/F292A17CF920E3462C816CBE6B042E779F676CAB59096904C4C1C966413E3DF5',
          exponent: 0,
          aliases: ['gravity0x6B175474E89094C44Da98b954EedeAC495271d0F']
        }, {
          denom: 'gdai',
          exponent: 18
        }],
      typeAsset: 'ics20',
      base: 'ibc/F292A17CF920E3462C816CBE6B042E779F676CAB59096904C4C1C966413E3DF5',
      name: 'DAI Stablecoin (Gravity Bridge)',
      display: 'gdai',
      symbol: 'DAI.grv',
      traces: [
        {
          type: 'synthetic',
          counterparty: {
            chainName: 'forex',
            baseDenom: 'USD'
          },
          provider: 'MakerDAO'
        },
        {
          type: 'bridge',
          counterparty: {
            chainName: 'ethereum',
            baseDenom: '0x6b175474e89094c44da98b954eedeac495271d0f'
          },
          provider: 'Gravity Bridge'
        },
        {
          type: 'ibc',
          counterparty: {
            chainName: 'gravitybridge',
            baseDenom: 'gravity0x6B175474E89094C44Da98b954EedeAC495271d0F',
            channelId: 'channel-10'
          },
          chain: {
            channelId: 'channel-144',
            path: 'transfer/channel-144/gravity0x6B175474E89094C44Da98b954EedeAC495271d0F'
          }
        }
      ],
      logoURIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/dai.grv.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/dai.svg'
        }, {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/dai.grv.svg'
        }]
    },
    {
      description: 'Gravity Bridge USDT',
      denomUnits: [{
          denom: 'ibc/71B441E27F1BBB44DD0891BCD370C2794D404D60A4FFE5AECCD9B1E28BC89805',
          exponent: 0,
          aliases: ['gravity0xdAC17F958D2ee523a2206206994597C13D831ec7']
        }, {
          denom: 'gusdt',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/71B441E27F1BBB44DD0891BCD370C2794D404D60A4FFE5AECCD9B1E28BC89805',
      name: 'Tether USD (Gravity Bridge)',
      display: 'gusdt',
      symbol: 'USDT.grv',
      traces: [
        {
          type: 'synthetic',
          counterparty: {
            chainName: 'forex',
            baseDenom: 'USD'
          },
          provider: 'Tether'
        },
        {
          type: 'bridge',
          counterparty: {
            chainName: 'ethereum',
            baseDenom: '0xdac17f958d2ee523a2206206994597c13d831ec7'
          },
          provider: 'Gravity Bridge'
        },
        {
          type: 'ibc',
          counterparty: {
            chainName: 'gravitybridge',
            baseDenom: 'gravity0xdAC17F958D2ee523a2206206994597C13D831ec7',
            channelId: 'channel-10'
          },
          chain: {
            channelId: 'channel-144',
            path: 'transfer/channel-144/gravity0xdAC17F958D2ee523a2206206994597C13D831ec7'
          }
        }
      ],
      logoURIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/usdt.grv.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdt.svg'
        }, {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/usdt.grv.svg'
        }]
    },
    {
      description: 'The native token of Marble DEX on Juno Chain',
      denomUnits: [{
          denom: 'ibc/DB9755CB6FE55192948AE074D18FA815E1429D3D374D5BDA8D89623C6CF235C3',
          exponent: 0,
          aliases: ['cw20:juno1y9rf7ql6ffwkv02hsgd4yruz23pn4w97p75e2slsnkm0mnamhzysvqnxaq']
        }, {
          denom: 'block',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/DB9755CB6FE55192948AE074D18FA815E1429D3D374D5BDA8D89623C6CF235C3',
      name: 'Block',
      display: 'block',
      symbol: 'BLOCK',
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            chainName: 'juno',
            baseDenom: 'cw20:juno1y9rf7ql6ffwkv02hsgd4yruz23pn4w97p75e2slsnkm0mnamhzysvqnxaq',
            port: 'wasm.juno1v4887y83d6g28puzvt8cl0f3cdhd3y6y9mpysnsp3k8krdm7l6jqgm0rkn',
            channelId: 'channel-47'
          },
          chain: {
            port: 'transfer',
            channelId: 'channel-169',
            path: 'transfer/channel-169/cw20:juno1y9rf7ql6ffwkv02hsgd4yruz23pn4w97p75e2slsnkm0mnamhzysvqnxaq'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/block.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/block.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/block.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/block.svg'
        }]
    },
    {
      description: 'Hash is the staking token of the Provenance Blockchain',
      denomUnits: [{
          denom: 'ibc/CE5BFF1D9BADA03BB5CCA5F56939392A761B53A10FBD03B37506669C3218D3B2',
          exponent: 0,
          aliases: ['nhash']
        }, {
          denom: 'hash',
          exponent: 9
        }],
      typeAsset: 'ics20',
      base: 'ibc/CE5BFF1D9BADA03BB5CCA5F56939392A761B53A10FBD03B37506669C3218D3B2',
      name: 'Provenance',
      display: 'hash',
      symbol: 'HASH',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'provenance',
            baseDenom: 'nhash',
            channelId: 'channel-7'
          },
          chain: {
            channelId: 'channel-222',
            path: 'transfer/channel-222/nhash'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/provenance/images/prov.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/provenance/images/prov.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/provenance/images/prov.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/provenance/images/prov.svg'
        }]
    },
    {
      description: 'GLX is the staking token of the Galaxy Chain',
      denomUnits: [{
          denom: 'ibc/F49DE040EBA5AB2FAD5F660C2A1DDF98A68470FAE82229818BE775EBF3EE79F2',
          exponent: 0,
          aliases: ['uglx']
        }, {
          denom: 'glx',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/F49DE040EBA5AB2FAD5F660C2A1DDF98A68470FAE82229818BE775EBF3EE79F2',
      name: 'Galaxy',
      display: 'glx',
      symbol: 'GLX',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'galaxy',
            baseDenom: 'uglx',
            channelId: 'channel-0'
          },
          chain: {
            channelId: 'channel-236',
            path: 'transfer/channel-236/uglx'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/galaxy/images/glx.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/galaxy/images/glx.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/galaxy/images/glx.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/galaxy/images/glx.svg'
        }]
    },
    {
      description: 'The DAO token to build consensus among Hong Kong People',
      denomUnits: [{
          denom: 'ibc/52E12CF5CA2BB903D84F5298B4BFD725D66CAB95E09AA4FC75B2904CA5485FEB',
          exponent: 0,
          aliases: ['dhk', 'cw20:juno1tdjwrqmnztn2j3sj2ln9xnyps5hs48q3ddwjrz7jpv6mskappjys5czd49']
        }],
      typeAsset: 'ics20',
      base: 'ibc/52E12CF5CA2BB903D84F5298B4BFD725D66CAB95E09AA4FC75B2904CA5485FEB',
      name: 'DHK',
      display: 'dhk',
      symbol: 'DHK',
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            chainName: 'juno',
            baseDenom: 'cw20:juno1tdjwrqmnztn2j3sj2ln9xnyps5hs48q3ddwjrz7jpv6mskappjys5czd49',
            port: 'wasm.juno1v4887y83d6g28puzvt8cl0f3cdhd3y6y9mpysnsp3k8krdm7l6jqgm0rkn',
            channelId: 'channel-47'
          },
          chain: {
            port: 'transfer',
            channelId: 'channel-169',
            path: 'transfer/channel-169/cw20:juno1tdjwrqmnztn2j3sj2ln9xnyps5hs48q3ddwjrz7jpv6mskappjys5czd49'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/dhk.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/dhk.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/dhk.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/dhk.svg'
        }]
    },
    {
      description: 'Token governance for Junoswap',
      denomUnits: [{
          denom: 'ibc/00B6E60AD3D65CBEF5579AC8AF609527C0B57535B6E32D96C80A735344FD9DCC',
          exponent: 0,
          aliases: ['cw20:juno15u3dt79t6sxxa3x3kpkhzsy56edaa5a66wvt3kxmukqjz2sx0hes5sn38g']
        }, {
          denom: 'raw',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/00B6E60AD3D65CBEF5579AC8AF609527C0B57535B6E32D96C80A735344FD9DCC',
      name: 'JunoSwap',
      display: 'raw',
      symbol: 'RAW',
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            chainName: 'juno',
            baseDenom: 'cw20:juno15u3dt79t6sxxa3x3kpkhzsy56edaa5a66wvt3kxmukqjz2sx0hes5sn38g',
            port: 'wasm.juno1v4887y83d6g28puzvt8cl0f3cdhd3y6y9mpysnsp3k8krdm7l6jqgm0rkn',
            channelId: 'channel-47'
          },
          chain: {
            port: 'transfer',
            channelId: 'channel-169',
            path: 'transfer/channel-169/cw20:juno15u3dt79t6sxxa3x3kpkhzsy56edaa5a66wvt3kxmukqjz2sx0hes5sn38g'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/raw.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/raw.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/raw.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/raw.svg'
        }]
    },
    {
      description: 'MEME Token (MEME) is the native staking token of the MEME Chain',
      denomUnits: [{
          denom: 'ibc/67C89B8B0A70C08F093C909A4DD996DD10E0494C87E28FD9A551697BF173D4CA',
          exponent: 0,
          aliases: ['umeme']
        }, {
          denom: 'meme',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/67C89B8B0A70C08F093C909A4DD996DD10E0494C87E28FD9A551697BF173D4CA',
      name: 'MEME',
      display: 'meme',
      symbol: 'MEME',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'meme',
            baseDenom: 'umeme',
            channelId: 'channel-1'
          },
          chain: {
            channelId: 'channel-238',
            path: 'transfer/channel-238/umeme'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/meme/images/meme.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/meme/images/meme.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/meme/images/meme.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/meme/images/meme.svg'
        }]
    },
    {
      description: 'Profit sharing token for Another.Software validator. Hold and receive dividends from Another.Software validator commissions!',
      denomUnits: [{
          denom: 'ibc/AA1C80225BCA7B32ED1FC6ABF8B8E899BEB48ECDB4B417FD69873C6D715F97E7',
          exponent: 0,
          aliases: ['cw20:juno17wzaxtfdw5em7lc94yed4ylgjme63eh73lm3lutp2rhcxttyvpwsypjm4w']
        }, {
          denom: 'asvt',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/AA1C80225BCA7B32ED1FC6ABF8B8E899BEB48ECDB4B417FD69873C6D715F97E7',
      name: 'Another.Software Validator Token',
      display: 'asvt',
      symbol: 'ASVT',
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            chainName: 'juno',
            baseDenom: 'cw20:juno17wzaxtfdw5em7lc94yed4ylgjme63eh73lm3lutp2rhcxttyvpwsypjm4w',
            port: 'wasm.juno1v4887y83d6g28puzvt8cl0f3cdhd3y6y9mpysnsp3k8krdm7l6jqgm0rkn',
            channelId: 'channel-47'
          },
          chain: {
            port: 'transfer',
            channelId: 'channel-169',
            path: 'transfer/channel-169/cw20:juno17wzaxtfdw5em7lc94yed4ylgjme63eh73lm3lutp2rhcxttyvpwsypjm4w'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/asvt.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/asvt.png'
        }]
    },
    {
      description: 'DAO dedicated to building tools on the Juno Network',
      denomUnits: [{
          denom: 'ibc/0CB9DB3441D0D50F35699DEE22B9C965487E83FB2D9F483D1CC5CA34E856C484',
          exponent: 0,
          aliases: ['cw20:juno1n7n7d5088qlzlj37e9mgmkhx6dfgtvt02hqxq66lcap4dxnzdhwqfmgng3']
        }, {
          denom: 'joe',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/0CB9DB3441D0D50F35699DEE22B9C965487E83FB2D9F483D1CC5CA34E856C484',
      name: 'JoeDAO',
      display: 'joe',
      symbol: 'JOE',
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            chainName: 'juno',
            baseDenom: 'cw20:juno1n7n7d5088qlzlj37e9mgmkhx6dfgtvt02hqxq66lcap4dxnzdhwqfmgng3',
            port: 'wasm.juno1v4887y83d6g28puzvt8cl0f3cdhd3y6y9mpysnsp3k8krdm7l6jqgm0rkn',
            channelId: 'channel-47'
          },
          chain: {
            port: 'transfer',
            channelId: 'channel-169',
            path: 'transfer/channel-169/cw20:juno1n7n7d5088qlzlj37e9mgmkhx6dfgtvt02hqxq66lcap4dxnzdhwqfmgng3'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/joe.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/joe.png'
        }]
    },
    {
      description: 'The native staking token of Terra.',
      denomUnits: [{
          denom: 'ibc/785AFEC6B3741100D15E7AF01374E3C4C36F24888E96479B1C33F5C71F364EF9',
          exponent: 0,
          aliases: ['uluna']
        }, {
          denom: 'luna',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/785AFEC6B3741100D15E7AF01374E3C4C36F24888E96479B1C33F5C71F364EF9',
      name: 'Luna',
      display: 'luna',
      symbol: 'LUNA',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'terra2',
            baseDenom: 'uluna',
            channelId: 'channel-1'
          },
          chain: {
            channelId: 'channel-251',
            path: 'transfer/channel-251/uluna'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/luna.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/luna.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/luna.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/luna.svg'
        }]
    },
    {
      description: 'Native token of Rizon Chain',
      denomUnits: [{
          denom: 'ibc/2716E3F2E146664BEFA9217F1A03BFCEDBCD5178B3C71CACB1A0D7584451D219',
          exponent: 0,
          aliases: ['uatolo']
        }, {
          denom: 'atolo',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/2716E3F2E146664BEFA9217F1A03BFCEDBCD5178B3C71CACB1A0D7584451D219',
      name: 'Rizon',
      display: 'atolo',
      symbol: 'ATOLO',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'rizon',
            baseDenom: 'uatolo',
            channelId: 'channel-1'
          },
          chain: {
            channelId: 'channel-221',
            path: 'transfer/channel-221/uatolo'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/rizon/images/atolo.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/rizon/images/atolo.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/rizon/images/atolo.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/rizon/images/atolo.svg'
        }]
    },
    {
      description: 'Governance token of Kava Lend Protocol',
      denomUnits: [{
          denom: 'ibc/D6C28E07F7343360AC41E15DDD44D79701DDCA2E0C2C41279739C8D4AE5264BC',
          exponent: 0,
          aliases: ['hard']
        }, {
          denom: 'HARD',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/D6C28E07F7343360AC41E15DDD44D79701DDCA2E0C2C41279739C8D4AE5264BC',
      name: 'Kava Hard',
      display: 'HARD',
      symbol: 'HARD',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'kava',
            baseDenom: 'hard',
            channelId: 'channel-1'
          },
          chain: {
            channelId: 'channel-143',
            path: 'transfer/channel-143/hard'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/hard.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/hard.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/hard.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/hard.svg'
        }]
    },
    {
      description: 'Governance token of Kava Swap Protocol',
      denomUnits: [{
          denom: 'ibc/70CF1A54E23EA4E480DEDA9E12082D3FD5684C3483CBDCE190C5C807227688C5',
          exponent: 0,
          aliases: ['swp']
        }, {
          denom: 'SWP',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/70CF1A54E23EA4E480DEDA9E12082D3FD5684C3483CBDCE190C5C807227688C5',
      name: 'Kava Swap',
      display: 'SWP',
      symbol: 'SWP',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'kava',
            baseDenom: 'swp',
            channelId: 'channel-1'
          },
          chain: {
            channelId: 'channel-143',
            path: 'transfer/channel-143/swp'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/swp.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/swp.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/swp.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/swp.svg'
        }]
    },
    {
      description: 'A blockchain-based middleware, acting as a bridge between cryptocurrency smart contracts, data feeds, APIs and traditional bank account payments.',
      denomUnits: [{
          denom: 'ibc/D3327A763C23F01EC43D1F0DB3CEFEC390C362569B6FD191F40A5192F8960049',
          exponent: 0,
          aliases: ['link-wei']
        }, {
          denom: 'link',
          exponent: 18
        }],
      typeAsset: 'ics20',
      base: 'ibc/D3327A763C23F01EC43D1F0DB3CEFEC390C362569B6FD191F40A5192F8960049',
      name: 'Chainlink',
      display: 'link',
      symbol: 'LINK',
      traces: [{
          type: 'bridge',
          counterparty: {
            chainName: 'ethereum',
            baseDenom: '0x514910771af9ca656af840dff83e8264ecf986ca'
          },
          provider: 'Axelar'
        }, {
          type: 'ibc',
          counterparty: {
            chainName: 'axelar',
            baseDenom: 'link-wei',
            channelId: 'channel-3'
          },
          chain: {
            channelId: 'channel-208',
            path: 'transfer/channel-208/link-wei'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/link.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/link.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/link.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/link.svg'
        }]
    },
    {
      description: 'L1 coin is the GenesisL1 blockchain utility, governance and EVM token',
      denomUnits: [{
          denom: 'ibc/F16FDC11A7662B86BC0B9CE61871CBACF7C20606F95E86260FD38915184B75B4',
          exponent: 0,
          aliases: ['el1']
        }, {
          denom: 'l1',
          exponent: 18
        }],
      typeAsset: 'ics20',
      base: 'ibc/F16FDC11A7662B86BC0B9CE61871CBACF7C20606F95E86260FD38915184B75B4',
      name: 'GenesisL1',
      display: 'l1',
      symbol: 'L1',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'genesisl1',
            baseDenom: 'el1',
            channelId: 'channel-1'
          },
          chain: {
            channelId: 'channel-253',
            path: 'transfer/channel-253/el1'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/genesisl1/images/l1.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/genesisl1/images/l1.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/genesisl1/images/l1.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/genesisl1/images/l1.svg'
        }],
      keywords: ['osmosis_unstable']
    },
    {
      description: 'Aave is an Open Source and Non-Custodial protocol to earn interest on deposits & borrow assets. It also features access to highly innovative flash loans, which let developers borrow instantly and easily; no collateral needed. With 16 different assets, 5 of which are stablecoins.',
      denomUnits: [{
          denom: 'ibc/384E5DD50BDE042E1AAF51F312B55F08F95BC985C503880189258B4D9374CBBE',
          exponent: 0,
          aliases: ['aave-wei']
        }, {
          denom: 'aave',
          exponent: 18
        }],
      typeAsset: 'ics20',
      base: 'ibc/384E5DD50BDE042E1AAF51F312B55F08F95BC985C503880189258B4D9374CBBE',
      name: 'Aave',
      display: 'aave',
      symbol: 'AAVE',
      traces: [{
          type: 'bridge',
          counterparty: {
            chainName: 'ethereum',
            baseDenom: '0x7fc66500c84a76ad7e9c93437bfc5ac33e2ddae9'
          },
          provider: 'Axelar'
        }, {
          type: 'ibc',
          counterparty: {
            chainName: 'axelar',
            baseDenom: 'aave-wei',
            channelId: 'channel-3'
          },
          chain: {
            channelId: 'channel-208',
            path: 'transfer/channel-208/aave-wei'
          }
        }],
      logoURIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/aave.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/aave.svg'
        }],
      keywords: ['osmosis_unlisted']
    },
    {
      description: 'ApeCoin found new expression in web3 through art, gaming, entertainment, and events. APE is a token made to support what’s next, controlled, and built on by the community. It will serve as a decentralized protocol layer for community-led initiatives that drive culture forward into the metaverse.',
      denomUnits: [{
          denom: 'ibc/F83CC6471DA4D4B508F437244F10B9E4C68975344E551A2DEB6B8617AB08F0D4',
          exponent: 0,
          aliases: ['ape-wei']
        }, {
          denom: 'ape',
          exponent: 18
        }],
      typeAsset: 'ics20',
      base: 'ibc/F83CC6471DA4D4B508F437244F10B9E4C68975344E551A2DEB6B8617AB08F0D4',
      name: 'ApeCoin',
      display: 'ape',
      symbol: 'APE',
      traces: [{
          type: 'bridge',
          counterparty: {
            chainName: 'ethereum',
            baseDenom: '0x4d224452801aced8b2f0aebe155379bb5d594381'
          },
          provider: 'Axelar'
        }, {
          type: 'ibc',
          counterparty: {
            chainName: 'axelar',
            baseDenom: 'ape-wei',
            channelId: 'channel-3'
          },
          chain: {
            channelId: 'channel-208',
            path: 'transfer/channel-208/ape-wei'
          }
        }],
      logoURIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/ape.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/ape.svg'
        }],
      keywords: ['osmosis_unlisted']
    },
    {
      description: 'Maker is a Decentralized Autonomous Organization that creates and insures the dai stablecoin on the Ethereum blockchain',
      denomUnits: [{
          denom: 'ibc/D27DDDF34BB47E5D5A570742CC667DE53277867116CCCA341F27785E899A70F3',
          exponent: 0,
          aliases: ['mkr-wei']
        }, {
          denom: 'mkr',
          exponent: 18
        }],
      typeAsset: 'ics20',
      base: 'ibc/D27DDDF34BB47E5D5A570742CC667DE53277867116CCCA341F27785E899A70F3',
      name: 'Maker',
      display: 'mkr',
      symbol: 'MKR',
      traces: [{
          type: 'bridge',
          counterparty: {
            chainName: 'ethereum',
            baseDenom: '0x9f8f72aa9304c8b593d555f12ef6589cc3a579a2'
          },
          provider: 'Axelar'
        }, {
          type: 'ibc',
          counterparty: {
            chainName: 'axelar',
            baseDenom: 'mkr-wei',
            channelId: 'channel-3'
          },
          chain: {
            channelId: 'channel-208',
            path: 'transfer/channel-208/mkr-wei'
          }
        }],
      logoURIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/mkr.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/mkr.svg'
        }]
    },
    {
      description: 'RAI is a non-pegged, ETH-backed stable asset. It is useful as more \'stable\' collateral for other DeFi protocols (compared to ETH or BTC) or as a stable asset with an embedded interest rate.',
      denomUnits: [{
          denom: 'ibc/BD796662F8825327D41C96355DF62045A5BA225BAE31C0A86289B9D88ED3F44E',
          exponent: 0,
          aliases: ['rai-wei']
        }, {
          denom: 'rai',
          exponent: 18
        }],
      typeAsset: 'ics20',
      base: 'ibc/BD796662F8825327D41C96355DF62045A5BA225BAE31C0A86289B9D88ED3F44E',
      name: 'Rai Reflex Index',
      display: 'rai',
      symbol: 'RAI',
      traces: [
        {
          type: 'synthetic',
          counterparty: {
            chainName: 'forex',
            baseDenom: 'USD'
          },
          provider: 'RAI Finance'
        },
        {
          type: 'bridge',
          counterparty: {
            chainName: 'ethereum',
            baseDenom: '0x03ab458634910aad20ef5f1c8ee96f1d6ac54919'
          },
          provider: 'Axelar'
        },
        {
          type: 'ibc',
          counterparty: {
            chainName: 'axelar',
            baseDenom: 'rai-wei',
            channelId: 'channel-3'
          },
          chain: {
            channelId: 'channel-208',
            path: 'transfer/channel-208/rai-wei'
          }
        }
      ],
      logoURIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/rai.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/rai.svg'
        }]
    },
    {
      description: 'SHIBA INU is a 100% decentralized community experiment with it claims that 1/2 the tokens have been sent to Vitalik and the other half were locked to a Uniswap pool and the keys burned.',
      denomUnits: [{
          denom: 'ibc/19305E20681911F14D1FB275E538CDE524C3BF88CF9AE5D5F78F4D4DA05E85B2',
          exponent: 0,
          aliases: ['shib-wei']
        }, {
          denom: 'shib',
          exponent: 18
        }],
      typeAsset: 'ics20',
      base: 'ibc/19305E20681911F14D1FB275E538CDE524C3BF88CF9AE5D5F78F4D4DA05E85B2',
      name: 'Shiba Inu',
      display: 'shib',
      symbol: 'SHIB',
      traces: [{
          type: 'bridge',
          counterparty: {
            chainName: 'ethereum',
            baseDenom: '0x95ad61b0a150d79219dcf64e1e6cc01f0b64c4ce'
          },
          provider: 'Axelar'
        }, {
          type: 'ibc',
          counterparty: {
            chainName: 'axelar',
            baseDenom: 'shib-wei',
            channelId: 'channel-3'
          },
          chain: {
            channelId: 'channel-208',
            path: 'transfer/channel-208/shib-wei'
          }
        }],
      logoURIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/shib.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/shib.svg'
        }],
      keywords: ['osmosis_unlisted']
    },
    {
      description: 'The native staking and governance token of the Kujira chain.',
      denomUnits: [{
          denom: 'ibc/BB6BCDB515050BAE97516111873CCD7BCF1FD0CCB723CC12F3C4F704D6C646CE',
          exponent: 0,
          aliases: ['ukuji']
        }, {
          denom: 'kuji',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/BB6BCDB515050BAE97516111873CCD7BCF1FD0CCB723CC12F3C4F704D6C646CE',
      name: 'Kujira',
      display: 'kuji',
      symbol: 'KUJI',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'kujira',
            baseDenom: 'ukuji',
            channelId: 'channel-3'
          },
          chain: {
            channelId: 'channel-259',
            path: 'transfer/channel-259/ukuji'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/kuji.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/kuji.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/kuji.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/kuji.svg'
        }]
    },
    {
      description: 'The native token of Tgrade',
      denomUnits: [{
          denom: 'ibc/1E09CB0F506ACF12FDE4683FB6B34DA62FB4BE122641E0D93AAF98A87675676C',
          exponent: 0,
          aliases: ['utgd']
        }, {
          denom: 'tgd',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/1E09CB0F506ACF12FDE4683FB6B34DA62FB4BE122641E0D93AAF98A87675676C',
      name: 'Tgrade',
      display: 'tgd',
      symbol: 'TGD',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'tgrade',
            baseDenom: 'utgd',
            channelId: 'channel-0'
          },
          chain: {
            channelId: 'channel-263',
            path: 'transfer/channel-263/utgd'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/tgrade/images/tgrade-symbol-gradient.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/tgrade/images/tgrade-symbol-gradient.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/tgrade/images/tgrade-symbol-gradient.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/tgrade/images/tgrade-symbol-gradient.svg'
        }]
    },
    {
      description: 'Echelon - a scalable EVM on Cosmos, built on Proof-of-Stake with fast-finality that prioritizes interoperability and novel economics',
      denomUnits: [{
          denom: 'ibc/47EE224A9B33CF0ABEAC82106E52F0F6E8D8CEC5BA80B9D9A6F55172CBB0177D',
          exponent: 0,
          aliases: ['aechelon']
        }, {
          denom: 'echelon',
          exponent: 18
        }],
      typeAsset: 'ics20',
      base: 'ibc/47EE224A9B33CF0ABEAC82106E52F0F6E8D8CEC5BA80B9D9A6F55172CBB0177D',
      name: 'Echelon',
      display: 'echelon',
      symbol: 'ECH',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'echelon',
            baseDenom: 'aechelon',
            channelId: 'channel-11'
          },
          chain: {
            channelId: 'channel-403',
            path: 'transfer/channel-403/aechelon'
          }
        }],
      logoURIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/echelon/images/ech.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/echelon/images/ech.svg'
        }]
    },
    {
      description: 'Staking and governance token for ODIN Protocol',
      denomUnits: [{
          denom: 'ibc/C360EF34A86D334F625E4CBB7DA3223AEA97174B61F35BB3758081A8160F7D9B',
          exponent: 0,
          aliases: ['loki']
        }, {
          denom: 'odin',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/C360EF34A86D334F625E4CBB7DA3223AEA97174B61F35BB3758081A8160F7D9B',
      name: 'Odin Protocol',
      display: 'odin',
      symbol: 'ODIN',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'odin',
            baseDenom: 'loki',
            channelId: 'channel-3'
          },
          chain: {
            channelId: 'channel-258',
            path: 'transfer/channel-258/loki'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/odin/images/odin.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/odin/images/odin.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/odin/images/odin.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/odin/images/odin.svg'
        }]
    },
    {
      description: 'GEO token for ODIN Protocol',
      denomUnits: [{
          denom: 'ibc/9B6FBABA36BB4A3BF127AE5E96B572A5197FD9F3111D895D8919B07BC290764A',
          exponent: 0,
          aliases: ['mGeo']
        }, {
          denom: 'geo',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/9B6FBABA36BB4A3BF127AE5E96B572A5197FD9F3111D895D8919B07BC290764A',
      name: 'GEO',
      display: 'geo',
      symbol: 'GEO',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'odin',
            baseDenom: 'mGeo',
            channelId: 'channel-3'
          },
          chain: {
            channelId: 'channel-258',
            path: 'transfer/channel-258/mGeo'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/odin/images/geo.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/odin/images/geo.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/odin/images/geo.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/odin/images/geo.svg'
        }],
      keywords: ['osmosis_unstable']
    },
    {
      description: 'O9W token for ODIN Protocol',
      denomUnits: [{
          denom: 'ibc/0CD46223FEABD2AEAAAF1F057D01E63BCA79B7D4BD6B68F1EB973A987344695D',
          exponent: 0,
          aliases: ['mO9W']
        }, {
          denom: 'O9W',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/0CD46223FEABD2AEAAAF1F057D01E63BCA79B7D4BD6B68F1EB973A987344695D',
      name: 'O9W',
      display: 'O9W',
      symbol: 'O9W',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'odin',
            baseDenom: 'mO9W',
            channelId: 'channel-3'
          },
          chain: {
            channelId: 'channel-258',
            path: 'transfer/channel-258/mO9W'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/odin/images/o9w.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/odin/images/o9w.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/odin/images/o9w.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/odin/images/o9w.svg'
        }],
      keywords: ['osmosis_unstable']
    },
    {
      description: 'ELEVENPARIS loyalty token on KiChain',
      denomUnits: [{
          denom: 'ibc/AD185F62399F770CCCE8A36A180A77879FF6C26A0398BD3D2A74E087B0BFA121',
          exponent: 0,
          aliases: ['cw20:ki1dt3lk455ed360pna38fkhqn0p8y44qndsr77qu73ghyaz2zv4whq83mwdy']
        }, {
          denom: 'lvn',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/AD185F62399F770CCCE8A36A180A77879FF6C26A0398BD3D2A74E087B0BFA121',
      name: 'LVN',
      display: 'lvn',
      symbol: 'kichain.LVN',
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            chainName: 'kichain',
            baseDenom: 'cw20:ki1dt3lk455ed360pna38fkhqn0p8y44qndsr77qu73ghyaz2zv4whq83mwdy',
            port: 'wasm.ki1hzz0s0ucrhdp6tue2lxk3c03nj6f60qy463we7lgx0wudd72ctmsd9kgha',
            channelId: 'channel-18'
          },
          chain: {
            port: 'transfer',
            channelId: 'channel-261',
            path: 'transfer/channel-261/cw20:ki1dt3lk455ed360pna38fkhqn0p8y44qndsr77qu73ghyaz2zv4whq83mwdy'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kichain/images/lvn.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kichain/images/lvn.png'
        }]
    },
    {
      description: 'Glimmer (GLMR) is the utility token of the Moonbeam Network, Moonbeam’s primary deployment on the Polkadot network that serves as a developer-friendly parachain.',
      denomUnits: [{
          denom: 'ibc/1E26DB0E5122AED464D98462BD384FCCB595732A66B3970AE6CE0B58BAE0FC49',
          exponent: 0,
          aliases: ['wglmr-wei']
        }, {
          denom: 'wglmr',
          exponent: 18
        }],
      typeAsset: 'ics20',
      base: 'ibc/1E26DB0E5122AED464D98462BD384FCCB595732A66B3970AE6CE0B58BAE0FC49',
      name: 'Moonbeam',
      display: 'wglmr',
      symbol: 'GLMR',
      traces: [
        {
          type: 'wrapped',
          counterparty: {
            chainName: 'moonbeam',
            baseDenom: 'Wei'
          },
          provider: 'Moonbeam'
        },
        {
          type: 'bridge',
          counterparty: {
            chainName: 'moonbeam',
            baseDenom: '0xacc15dc74880c9944775448304b263d191c6077f'
          },
          provider: 'Axelar'
        },
        {
          type: 'ibc',
          counterparty: {
            chainName: 'axelar',
            baseDenom: 'wglmr-wei',
            channelId: 'channel-3'
          },
          chain: {
            channelId: 'channel-208',
            path: 'transfer/channel-208/wglmr-wei'
          }
        }
      ],
      logoURIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/moonbeam/images/glmr.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/moonbeam/images/glmr.svg'
        }]
    },
    {
      description: 'DeFi gaming platform built on Juno',
      denomUnits: [{
          denom: 'ibc/52C57FCA7D6854AA178E7A183DDBE4EF322B904B1D719FC485F6FFBC1F72A19E',
          exponent: 0,
          aliases: ['cw20:juno1j0a9ymgngasfn3l5me8qpd53l5zlm9wurfdk7r65s5mg6tkxal3qpgf5se']
        }, {
          denom: 'glto',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/52C57FCA7D6854AA178E7A183DDBE4EF322B904B1D719FC485F6FFBC1F72A19E',
      name: 'Gelotto',
      display: 'glto',
      symbol: 'GLTO',
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            chainName: 'juno',
            baseDenom: 'cw20:juno1j0a9ymgngasfn3l5me8qpd53l5zlm9wurfdk7r65s5mg6tkxal3qpgf5se',
            port: 'wasm.juno1v4887y83d6g28puzvt8cl0f3cdhd3y6y9mpysnsp3k8krdm7l6jqgm0rkn',
            channelId: 'channel-47'
          },
          chain: {
            port: 'transfer',
            channelId: 'channel-169',
            path: 'transfer/channel-169/cw20:juno1j0a9ymgngasfn3l5me8qpd53l5zlm9wurfdk7r65s5mg6tkxal3qpgf5se'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/glto.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/glto.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/glto.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/glto.svg'
        }]
    },
    {
      description: 'Gelotto Year 1 Grand Prize Token',
      denomUnits: [{
          denom: 'ibc/7C781B4C2082CD62129A972D47486D78EC17155C299270E3C89348EA026BEAF8',
          exponent: 0,
          aliases: ['cw20:juno1gz8cf86zr4vw9cjcyyv432vgdaecvr9n254d3uwwkx9rermekddsxzageh']
        }, {
          denom: 'gkey',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/7C781B4C2082CD62129A972D47486D78EC17155C299270E3C89348EA026BEAF8',
      name: 'GKey',
      display: 'gkey',
      symbol: 'GKEY',
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            chainName: 'juno',
            baseDenom: 'cw20:juno1gz8cf86zr4vw9cjcyyv432vgdaecvr9n254d3uwwkx9rermekddsxzageh',
            port: 'wasm.juno1v4887y83d6g28puzvt8cl0f3cdhd3y6y9mpysnsp3k8krdm7l6jqgm0rkn',
            channelId: 'channel-47'
          },
          chain: {
            port: 'transfer',
            channelId: 'channel-169',
            path: 'transfer/channel-169/cw20:juno1gz8cf86zr4vw9cjcyyv432vgdaecvr9n254d3uwwkx9rermekddsxzageh'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/gkey.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/gkey.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/gkey.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/gkey.svg'
        }]
    },
    {
      description: 'The native token of Crescent',
      denomUnits: [{
          denom: 'ibc/5A7C219BA5F7582B99629BA3B2A01A61BFDA0F6FD1FE95B5366F7334C4BC0580',
          exponent: 0,
          aliases: ['ucre']
        }, {
          denom: 'cre',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/5A7C219BA5F7582B99629BA3B2A01A61BFDA0F6FD1FE95B5366F7334C4BC0580',
      name: 'Crescent',
      display: 'cre',
      symbol: 'CRE',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'crescent',
            baseDenom: 'ucre',
            channelId: 'channel-9'
          },
          chain: {
            channelId: 'channel-297',
            path: 'transfer/channel-297/ucre'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/crescent/images/cre.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/crescent/images/cre.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/crescent/images/cre.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/crescent/images/cre.svg'
        }]
    },
    {
      description: 'The native token of LumenX Network',
      denomUnits: [{
          denom: 'ibc/FFA652599C77E853F017193E36B5AB2D4D9AFC4B54721A74904F80C9236BF3B7',
          exponent: 0,
          aliases: ['ulumen']
        }, {
          denom: 'lumen',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/FFA652599C77E853F017193E36B5AB2D4D9AFC4B54721A74904F80C9236BF3B7',
      name: 'LumenX',
      display: 'lumen',
      symbol: 'LUMEN',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'lumenx',
            baseDenom: 'ulumen',
            channelId: 'channel-3'
          },
          chain: {
            channelId: 'channel-286',
            path: 'transfer/channel-286/ulumen'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/lumenx/images/lumen.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/lumenx/images/lumen.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/lumenx/images/lumen.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/lumenx/images/lumen.svg'
        }],
      keywords: ['osmosis_unstable']
    },
    {
      description: 'The native token of Oraichain',
      denomUnits: [{
          denom: 'ibc/161D7D62BAB3B9C39003334F1671208F43C06B643CC9EDBBE82B64793C857F1D',
          exponent: 0,
          aliases: ['orai']
        }, {
          denom: 'ORAI',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/161D7D62BAB3B9C39003334F1671208F43C06B643CC9EDBBE82B64793C857F1D',
      name: 'Oraichain',
      display: 'ORAI',
      symbol: 'ORAI',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'oraichain',
            baseDenom: 'orai',
            channelId: 'channel-13'
          },
          chain: {
            channelId: 'channel-216',
            path: 'transfer/channel-216/orai'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/oraichain/images/orai-white.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/oraichain/images/orai-white.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/oraichain/images/orai-white.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/oraichain/images/orai-white.svg'
        }]
    },
    {
      description: 'The native token of the Cudos blockchain',
      denomUnits: [{
          denom: 'ibc/E09ED39F390EC51FA9F3F69BEA08B5BBE6A48B3057B2B1C3467FAAE9E58B021B',
          exponent: 0,
          aliases: ['attocudos', 'acudos']
        }, {
          denom: 'cudos',
          exponent: 18
        }],
      typeAsset: 'ics20',
      base: 'ibc/E09ED39F390EC51FA9F3F69BEA08B5BBE6A48B3057B2B1C3467FAAE9E58B021B',
      name: 'Cudos',
      display: 'cudos',
      symbol: 'CUDOS',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'cudos',
            baseDenom: 'acudos',
            channelId: 'channel-1'
          },
          chain: {
            channelId: 'channel-298',
            path: 'transfer/channel-298/acudos'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cudos/images/cudos.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cudos/images/cudos.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cudos/images/cudos.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cudos/images/cudos.svg'
        }]
    },
    {
      description: 'The native stablecoin of Kava',
      denomUnits: [{
          denom: 'ibc/C78F65E1648A3DFE0BAEB6C4CDA69CC2A75437F1793C0E6386DFDA26393790AE',
          exponent: 0,
          aliases: ['usdx']
        }, {
          denom: 'USDX',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/C78F65E1648A3DFE0BAEB6C4CDA69CC2A75437F1793C0E6386DFDA26393790AE',
      name: 'Kava USDX',
      display: 'USDX',
      symbol: 'USDX',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'kava',
            baseDenom: 'usdx',
            channelId: 'channel-1'
          },
          chain: {
            channelId: 'channel-143',
            path: 'transfer/channel-143/usdx'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/usdx.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/usdx.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/usdx.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/usdx.svg'
        }]
    },
    {
      description: 'BLD is the token used to secure the Agoric chain through staking and to backstop Inter Protocol.',
      denomUnits: [{
          denom: 'ibc/2DA9C149E9AD2BD27FEFA635458FB37093C256C1A940392634A16BEA45262604',
          exponent: 0,
          aliases: ['ubld']
        }, {
          denom: 'bld',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/2DA9C149E9AD2BD27FEFA635458FB37093C256C1A940392634A16BEA45262604',
      name: 'Agoric',
      display: 'bld',
      symbol: 'BLD',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'agoric',
            baseDenom: 'ubld',
            channelId: 'channel-1'
          },
          chain: {
            channelId: 'channel-320',
            path: 'transfer/channel-320/ubld'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/agoric/images/bld.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/agoric/images/bld.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/agoric/images/bld.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/agoric/images/bld.svg'
        }]
    },
    {
      description: 'IST is the stable token used by the Agoric chain for execution fees and commerce.',
      denomUnits: [{
          denom: 'ibc/92BE0717F4678905E53F4E45B2DED18BC0CB97BF1F8B6A25AFEDF3D5A879B4D5',
          exponent: 0,
          aliases: ['uist']
        }, {
          denom: 'ist',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/92BE0717F4678905E53F4E45B2DED18BC0CB97BF1F8B6A25AFEDF3D5A879B4D5',
      name: 'Inter Stable Token',
      display: 'ist',
      symbol: 'IST',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'agoric',
            baseDenom: 'uist',
            channelId: 'channel-1'
          },
          chain: {
            channelId: 'channel-320',
            path: 'transfer/channel-320/uist'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/agoric/images/ist.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/agoric/images/ist.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/agoric/images/ist.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/agoric/images/ist.svg'
        }]
    },
    {
      description: 'Staking derivative seJUNO for staked JUNO',
      denomUnits: [{
          denom: 'ibc/C6B6BFCB6EE49A7CAB1A7E7B021DE35B99D525AC660844952F0F6C78DCB2A57B',
          exponent: 0,
          aliases: ['cw20:juno1dd0k0um5rqncfueza62w9sentdfh3ec4nw4aq4lk5hkjl63vljqscth9gv']
        }, {
          denom: 'sejuno',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/C6B6BFCB6EE49A7CAB1A7E7B021DE35B99D525AC660844952F0F6C78DCB2A57B',
      name: 'StakeEasy seJUNO',
      display: 'sejuno',
      symbol: 'SEJUNO',
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            chainName: 'juno',
            baseDenom: 'cw20:juno1dd0k0um5rqncfueza62w9sentdfh3ec4nw4aq4lk5hkjl63vljqscth9gv',
            port: 'wasm.juno1v4887y83d6g28puzvt8cl0f3cdhd3y6y9mpysnsp3k8krdm7l6jqgm0rkn',
            channelId: 'channel-47'
          },
          chain: {
            port: 'transfer',
            channelId: 'channel-169',
            path: 'transfer/channel-169/cw20:juno1dd0k0um5rqncfueza62w9sentdfh3ec4nw4aq4lk5hkjl63vljqscth9gv'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/sejuno.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/sejuno.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/sejuno.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/sejuno.svg'
        }]
    },
    {
      description: 'Staking derivative bJUNO for staked JUNO',
      denomUnits: [{
          denom: 'ibc/C2DF5C3949CA835B221C575625991F09BAB4E48FB9C11A4EE357194F736111E3',
          exponent: 0,
          aliases: ['cw20:juno1wwnhkagvcd3tjz6f8vsdsw5plqnw8qy2aj3rrhqr2axvktzv9q2qz8jxn3']
        }, {
          denom: 'bjuno',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/C2DF5C3949CA835B221C575625991F09BAB4E48FB9C11A4EE357194F736111E3',
      name: 'StakeEasy bJUNO',
      display: 'bjuno',
      symbol: 'BJUNO',
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            chainName: 'juno',
            baseDenom: 'cw20:juno1wwnhkagvcd3tjz6f8vsdsw5plqnw8qy2aj3rrhqr2axvktzv9q2qz8jxn3',
            port: 'wasm.juno1v4887y83d6g28puzvt8cl0f3cdhd3y6y9mpysnsp3k8krdm7l6jqgm0rkn',
            channelId: 'channel-47'
          },
          chain: {
            port: 'transfer',
            channelId: 'channel-169',
            path: 'transfer/channel-169/cw20:juno1wwnhkagvcd3tjz6f8vsdsw5plqnw8qy2aj3rrhqr2axvktzv9q2qz8jxn3'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/bjuno.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/bjuno.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/bjuno.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/bjuno.svg'
        }]
    },
    {
      description: 'The native token of Stride',
      denomUnits: [{
          denom: 'ibc/A8CA5EE328FA10C9519DF6057DA1F69682D28F7D0F5CCC7ECB72E3DCA2D157A4',
          exponent: 0,
          aliases: ['ustrd']
        }, {
          denom: 'strd',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/A8CA5EE328FA10C9519DF6057DA1F69682D28F7D0F5CCC7ECB72E3DCA2D157A4',
      name: 'Stride',
      display: 'strd',
      symbol: 'STRD',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'stride',
            baseDenom: 'ustrd',
            channelId: 'channel-5'
          },
          chain: {
            channelId: 'channel-326',
            path: 'transfer/channel-326/ustrd'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/strd.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/strd.svg'
      },
      images: [{
          imageSync: {
            chainName: 'stride',
            baseDenom: 'ustrd'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/strd.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/strd.svg'
        }]
    },
    {
      denomUnits: [{
          denom: 'ibc/C140AFD542AE77BD7DCC83F13FDD8C5E5BB8C4929785E6EC2F4C636F98F17901',
          exponent: 0,
          aliases: ['stuatom']
        }, {
          denom: 'statom',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/C140AFD542AE77BD7DCC83F13FDD8C5E5BB8C4929785E6EC2F4C636F98F17901',
      name: 'Stride Staked ATOM',
      display: 'statom',
      symbol: 'stATOM',
      traces: [{
          type: 'liquid-stake',
          counterparty: {
            chainName: 'cosmoshub',
            baseDenom: 'uatom'
          },
          provider: 'Stride'
        }, {
          type: 'ibc',
          counterparty: {
            chainName: 'stride',
            baseDenom: 'stuatom',
            channelId: 'channel-5'
          },
          chain: {
            channelId: 'channel-326',
            path: 'transfer/channel-326/stuatom'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/statom.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/statom.svg'
      },
      images: [{
          imageSync: {
            chainName: 'stride',
            baseDenom: 'stuatom'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/statom.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/statom.svg'
        }]
    },
    {
      denomUnits: [{
          denom: 'ibc/5DD1F95ED336014D00CE2520977EC71566D282F9749170ADC83A392E0EA7426A',
          exponent: 0,
          aliases: ['stustars']
        }, {
          denom: 'ststars',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/5DD1F95ED336014D00CE2520977EC71566D282F9749170ADC83A392E0EA7426A',
      name: 'Stride Staked STARS',
      display: 'ststars',
      symbol: 'stSTARS',
      traces: [{
          type: 'liquid-stake',
          counterparty: {
            chainName: 'stargaze',
            baseDenom: 'ustars'
          },
          provider: 'Stride'
        }, {
          type: 'ibc',
          counterparty: {
            chainName: 'stride',
            baseDenom: 'stustars',
            channelId: 'channel-5'
          },
          chain: {
            channelId: 'channel-326',
            path: 'transfer/channel-326/stustars'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/ststars.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/ststars.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/ststars.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/ststars.svg'
        }]
    },
    {
      description: 'Solarbank DAO Governance Token for speeding up the shift to renewable and green energy',
      denomUnits: [{
          denom: 'ibc/C3FC4DED273E7D1DD2E7BAA3317EC9A53CD3252B577AA33DC00D9DF2BDF3ED5C',
          exponent: 0,
          aliases: ['cw20:juno159q8t5g02744lxq8lfmcn6f78qqulq9wn3y9w7lxjgkz4e0a6kvsfvapse']
        }, {
          denom: 'solar',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/C3FC4DED273E7D1DD2E7BAA3317EC9A53CD3252B577AA33DC00D9DF2BDF3ED5C',
      name: 'Solarbank DAO',
      display: 'solar',
      symbol: 'SOLAR',
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            chainName: 'juno',
            baseDenom: 'cw20:juno159q8t5g02744lxq8lfmcn6f78qqulq9wn3y9w7lxjgkz4e0a6kvsfvapse',
            port: 'wasm.juno1v4887y83d6g28puzvt8cl0f3cdhd3y6y9mpysnsp3k8krdm7l6jqgm0rkn',
            channelId: 'channel-47'
          },
          chain: {
            port: 'transfer',
            channelId: 'channel-169',
            path: 'transfer/channel-169/cw20:juno159q8t5g02744lxq8lfmcn6f78qqulq9wn3y9w7lxjgkz4e0a6kvsfvapse'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/solar.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/solar.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/solar.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/solar.svg'
        }]
    },
    {
      description: 'StakeEasy governance token',
      denomUnits: [{
          denom: 'ibc/18A676A074F73B9B42DA4F9DFC8E5AEF334C9A6636DDEC8D34682F52F1DECDF6',
          exponent: 0,
          aliases: ['cw20:juno19rqljkh95gh40s7qdx40ksx3zq5tm4qsmsrdz9smw668x9zdr3lqtg33mf']
        }, {
          denom: 'seasy',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/18A676A074F73B9B42DA4F9DFC8E5AEF334C9A6636DDEC8D34682F52F1DECDF6',
      name: 'StakeEasy SEASY',
      display: 'seasy',
      symbol: 'SEASY',
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            chainName: 'juno',
            baseDenom: 'cw20:juno19rqljkh95gh40s7qdx40ksx3zq5tm4qsmsrdz9smw668x9zdr3lqtg33mf',
            port: 'wasm.juno1v4887y83d6g28puzvt8cl0f3cdhd3y6y9mpysnsp3k8krdm7l6jqgm0rkn',
            channelId: 'channel-47'
          },
          chain: {
            port: 'transfer',
            channelId: 'channel-169',
            path: 'transfer/channel-169/cw20:juno19rqljkh95gh40s7qdx40ksx3zq5tm4qsmsrdz9smw668x9zdr3lqtg33mf'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/seasy.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/seasy.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/seasy.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/seasy.svg'
        }]
    },
    {
      description: 'The native token of Axelar',
      denomUnits: [{
          denom: 'ibc/903A61A498756EA560B85A85132D3AEE21B5DEDD41213725D22ABF276EA6945E',
          exponent: 0,
          aliases: ['uaxl']
        }, {
          denom: 'axl',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/903A61A498756EA560B85A85132D3AEE21B5DEDD41213725D22ABF276EA6945E',
      name: 'Axelar',
      display: 'axl',
      symbol: 'AXL',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'axelar',
            baseDenom: 'uaxl',
            channelId: 'channel-3'
          },
          chain: {
            channelId: 'channel-208',
            path: 'transfer/channel-208/uaxl'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/axl.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/axl.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/axl.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/axl.svg'
        }]
    },
    {
      description: 'REBUS, the native coin of the Rebus chain.',
      denomUnits: [{
          denom: 'ibc/A1AC7F9EE2F643A68E3A35BCEB22040120BEA4059773BB56985C76BDFEBC71D9',
          exponent: 0,
          aliases: ['arebus']
        }, {
          denom: 'rebus',
          exponent: 18
        }],
      typeAsset: 'ics20',
      base: 'ibc/A1AC7F9EE2F643A68E3A35BCEB22040120BEA4059773BB56985C76BDFEBC71D9',
      name: 'Rebus',
      display: 'rebus',
      symbol: 'REBUS',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'rebus',
            baseDenom: 'arebus',
            channelId: 'channel-0'
          },
          chain: {
            channelId: 'channel-355',
            path: 'transfer/channel-355/arebus'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/rebus/images/rebus.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/rebus/images/rebus.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/rebus/images/rebus.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/rebus/images/rebus.svg'
        }]
    },
    {
      description: 'The native token of Teritori',
      denomUnits: [{
          denom: 'ibc/EB7FB9C8B425F289B63703413327C2051030E848CE4EAAEA2E51199D6D39D3EC',
          exponent: 0,
          aliases: ['utori']
        }, {
          denom: 'tori',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/EB7FB9C8B425F289B63703413327C2051030E848CE4EAAEA2E51199D6D39D3EC',
      name: 'Teritori',
      display: 'tori',
      symbol: 'TORI',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'teritori',
            baseDenom: 'utori',
            channelId: 'channel-0'
          },
          chain: {
            channelId: 'channel-362',
            path: 'transfer/channel-362/utori'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/teritori/images/utori.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/teritori/images/utori.svg'
      },
      images: [{
          imageSync: {
            chainName: 'teritori',
            baseDenom: 'utori'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/teritori/images/utori.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/teritori/images/utori.svg'
        }]
    },
    {
      denomUnits: [{
          denom: 'ibc/84502A75BCA4A5F68D464C00B3F610CE2585847D59B52E5FFB7C3C9D2DDCD3FE',
          exponent: 0,
          aliases: ['stujuno']
        }, {
          denom: 'stjuno',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/84502A75BCA4A5F68D464C00B3F610CE2585847D59B52E5FFB7C3C9D2DDCD3FE',
      name: 'Stride Staked JUNO',
      display: 'stjuno',
      symbol: 'stJUNO',
      traces: [{
          type: 'liquid-stake',
          counterparty: {
            chainName: 'juno',
            baseDenom: 'ujuno'
          },
          provider: 'Stride'
        }, {
          type: 'ibc',
          counterparty: {
            chainName: 'stride',
            baseDenom: 'stujuno',
            channelId: 'channel-5'
          },
          chain: {
            channelId: 'channel-326',
            path: 'transfer/channel-326/stujuno'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stjuno.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stjuno.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stjuno.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stjuno.svg'
        }]
    },
    {
      denomUnits: [{
          denom: 'ibc/D176154B0C63D1F9C6DCFB4F70349EBF2E2B5A87A05902F57A6AE92B863E9AEC',
          exponent: 0,
          aliases: ['stuosmo']
        }, {
          denom: 'stosmo',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/D176154B0C63D1F9C6DCFB4F70349EBF2E2B5A87A05902F57A6AE92B863E9AEC',
      name: 'Stride Staked OSMO',
      display: 'stosmo',
      symbol: 'stOSMO',
      traces: [{
          type: 'liquid-stake',
          counterparty: {
            chainName: 'osmosis',
            baseDenom: 'uosmo'
          },
          provider: 'Stride'
        }, {
          type: 'ibc',
          counterparty: {
            chainName: 'stride',
            baseDenom: 'stuosmo',
            channelId: 'channel-5'
          },
          chain: {
            channelId: 'channel-326',
            path: 'transfer/channel-326/stuosmo'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stosmo.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stosmo.svg'
      },
      images: [{
          imageSync: {
            chainName: 'stride',
            baseDenom: 'stuosmo'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stosmo.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stosmo.svg'
        }]
    },
    {
      description: 'The native token cw20 for MuseDAO on Juno Chain',
      denomUnits: [{
          denom: 'ibc/6B982170CE024689E8DD0E7555B129B488005130D4EDA426733D552D10B36D8F',
          exponent: 0,
          aliases: ['cw20:juno1p8x807f6h222ur0vssqy3qk6mcpa40gw2pchquz5atl935t7kvyq894ne3']
        }, {
          denom: 'muse',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/6B982170CE024689E8DD0E7555B129B488005130D4EDA426733D552D10B36D8F',
      name: 'MuseDAO',
      display: 'muse',
      symbol: 'MUSE',
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            chainName: 'juno',
            baseDenom: 'cw20:juno1p8x807f6h222ur0vssqy3qk6mcpa40gw2pchquz5atl935t7kvyq894ne3',
            port: 'wasm.juno1v4887y83d6g28puzvt8cl0f3cdhd3y6y9mpysnsp3k8krdm7l6jqgm0rkn',
            channelId: 'channel-47'
          },
          chain: {
            port: 'transfer',
            channelId: 'channel-169',
            path: 'transfer/channel-169/cw20:juno1p8x807f6h222ur0vssqy3qk6mcpa40gw2pchquz5atl935t7kvyq894ne3'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/muse.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/muse.png'
        }]
    },
    {
      description: 'The native token of Lambda',
      denomUnits: [{
          denom: 'ibc/80825E8F04B12D914ABEADB1F4D39C04755B12C8402F6876EE3168450C0A90BB',
          exponent: 0,
          aliases: ['ulamb']
        }, {
          denom: 'lamb',
          exponent: 18
        }],
      typeAsset: 'ics20',
      base: 'ibc/80825E8F04B12D914ABEADB1F4D39C04755B12C8402F6876EE3168450C0A90BB',
      name: 'Lambda',
      display: 'lamb',
      symbol: 'LAMB',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'lambda',
            baseDenom: 'ulamb',
            channelId: 'channel-2'
          },
          chain: {
            channelId: 'channel-378',
            path: 'transfer/channel-378/ulamb'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/lambda/images/lambda.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/lambda/images/lambda.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/lambda/images/lambda.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/lambda/images/lambda.svg'
        }]
    },
    {
      description: 'The native over-collateralized stablecoin from the Kujira chain.',
      denomUnits: [{
          denom: 'ibc/44492EAB24B72E3FB59B9FA619A22337FB74F95D8808FE6BC78CC0E6C18DC2EC',
          exponent: 0,
          aliases: ['factory/kujira1qk00h5atutpsv900x202pxx42npjr9thg58dnqpa72f2p7m2luase444a7/uusk']
        }, {
          denom: 'usk',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/44492EAB24B72E3FB59B9FA619A22337FB74F95D8808FE6BC78CC0E6C18DC2EC',
      name: 'USK',
      display: 'usk',
      symbol: 'USK',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'kujira',
            baseDenom: 'factory/kujira1qk00h5atutpsv900x202pxx42npjr9thg58dnqpa72f2p7m2luase444a7/uusk',
            channelId: 'channel-3'
          },
          chain: {
            channelId: 'channel-259',
            path: 'transfer/channel-259/factory:kujira1qk00h5atutpsv900x202pxx42npjr9thg58dnqpa72f2p7m2luase444a7:uusk'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/usk.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/usk.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/usk.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/usk.svg'
        }]
    },
    {
      description: 'Staking and governance coin for the Unification Blockchain',
      denomUnits: [{
          denom: 'ibc/608EF5C0CE64FEA097500DB39657BDD36CA708CC5DCC2E250A024B6981DD36BC',
          exponent: 0,
          aliases: ['nund']
        }, {
          denom: 'FUND',
          exponent: 9
        }],
      typeAsset: 'ics20',
      base: 'ibc/608EF5C0CE64FEA097500DB39657BDD36CA708CC5DCC2E250A024B6981DD36BC',
      name: 'Unification',
      display: 'FUND',
      symbol: 'FUND',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'unification',
            baseDenom: 'nund',
            channelId: 'channel-0'
          },
          chain: {
            channelId: 'channel-382',
            path: 'transfer/channel-382/nund'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/unification/images/fund.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/unification/images/fund.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/unification/images/fund.svg',
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/unification/images/fund.png'
        }]
    },
    {
      description: 'The native staking and governance token of Jackal.',
      denomUnits: [{
          denom: 'ibc/8E697BDABE97ACE8773C6DF7402B2D1D5104DD1EEABE12608E3469B7F64C15BA',
          exponent: 0,
          aliases: ['ujkl']
        }, {
          denom: 'jkl',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/8E697BDABE97ACE8773C6DF7402B2D1D5104DD1EEABE12608E3469B7F64C15BA',
      name: 'Jackal',
      display: 'jkl',
      symbol: 'JKL',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'jackal',
            baseDenom: 'ujkl',
            channelId: 'channel-0'
          },
          chain: {
            channelId: 'channel-412',
            path: 'transfer/channel-412/ujkl'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/jackal/images/jkl.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/jackal/images/jkl.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/jackal/images/jkl.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/jackal/images/jkl.svg'
        }]
    },
    {
      description: 'The native token cw20 for Alter on Secret Network',
      denomUnits: [{
          denom: 'ibc/A6383B6CF5EA23E067666C06BC34E2A96869927BD9744DC0C1643E589C710AA3',
          exponent: 0,
          aliases: ['cw20:secret12rcvz0umvk875kd6a803txhtlu7y0pnd73kcej']
        }, {
          denom: 'alter',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/A6383B6CF5EA23E067666C06BC34E2A96869927BD9744DC0C1643E589C710AA3',
      name: 'Alter',
      display: 'alter',
      symbol: 'ALTER',
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            chainName: 'secretnetwork',
            baseDenom: 'cw20:secret12rcvz0umvk875kd6a803txhtlu7y0pnd73kcej',
            port: 'wasm.secret1tqmms5awftpuhalcv5h5mg76fa0tkdz4jv9ex4',
            channelId: 'channel-44'
          },
          chain: {
            port: 'transfer',
            channelId: 'channel-476',
            path: 'transfer/channel-476/cw20:secret12rcvz0umvk875kd6a803txhtlu7y0pnd73kcej'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/alter.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/alter.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/alter.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/alter.svg'
        }]
    },
    {
      description: 'The native token cw20 for Button on Secret Network',
      denomUnits: [{
          denom: 'ibc/1FBA9E763B8679BEF7BAAAF2D16BCA78C3B297D226C3F31312C769D7B8F992D8',
          exponent: 0,
          aliases: ['cw20:secret1yxcexylwyxlq58umhgsjgstgcg2a0ytfy4d9lt']
        }, {
          denom: 'butt',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/1FBA9E763B8679BEF7BAAAF2D16BCA78C3B297D226C3F31312C769D7B8F992D8',
      name: 'Button',
      display: 'butt',
      symbol: 'BUTT',
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            chainName: 'secretnetwork',
            baseDenom: 'cw20:secret1yxcexylwyxlq58umhgsjgstgcg2a0ytfy4d9lt',
            port: 'wasm.secret1tqmms5awftpuhalcv5h5mg76fa0tkdz4jv9ex4',
            channelId: 'channel-44'
          },
          chain: {
            port: 'transfer',
            channelId: 'channel-476',
            path: 'transfer/channel-476/cw20:secret1yxcexylwyxlq58umhgsjgstgcg2a0ytfy4d9lt'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/butt.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/butt.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/butt.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/butt.svg'
        }]
    },
    {
      description: 'The native token cw20 for Shade on Secret Network',
      denomUnits: [{
          denom: 'ibc/71055835C7639739EAE03AACD1324FE162DBA41D09F197CB72D966D014225B1C',
          exponent: 0,
          aliases: ['cw20:secret1qfql357amn448duf5gvp9gr48sxx9tsnhupu3d']
        }, {
          denom: 'shd',
          exponent: 8
        }],
      typeAsset: 'ics20',
      base: 'ibc/71055835C7639739EAE03AACD1324FE162DBA41D09F197CB72D966D014225B1C',
      name: 'Shade (old)',
      display: 'shd',
      symbol: 'SHD(old)',
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            chainName: 'secretnetwork',
            baseDenom: 'cw20:secret1qfql357amn448duf5gvp9gr48sxx9tsnhupu3d',
            port: 'wasm.secret1tqmms5awftpuhalcv5h5mg76fa0tkdz4jv9ex4',
            channelId: 'channel-44'
          },
          chain: {
            port: 'transfer',
            channelId: 'channel-476',
            path: 'transfer/channel-476/cw20:secret1qfql357amn448duf5gvp9gr48sxx9tsnhupu3d'
          }
        }],
      logoURIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/shdold.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/shdold.svg'
        }]
    },
    {
      description: 'The native token cw20 for SIENNA on Secret Network',
      denomUnits: [{
          denom: 'ibc/9A8A93D04917A149C8AC7C16D3DA8F470D59E8D867499C4DA97450E1D7363213',
          exponent: 0,
          aliases: ['cw20:secret1rgm2m5t530tdzyd99775n6vzumxa5luxcllml4']
        }, {
          denom: 'sienna',
          exponent: 18
        }],
      typeAsset: 'ics20',
      base: 'ibc/9A8A93D04917A149C8AC7C16D3DA8F470D59E8D867499C4DA97450E1D7363213',
      name: 'SIENNA',
      display: 'sienna',
      symbol: 'SIENNA',
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            chainName: 'secretnetwork',
            baseDenom: 'cw20:secret1rgm2m5t530tdzyd99775n6vzumxa5luxcllml4',
            port: 'wasm.secret1tqmms5awftpuhalcv5h5mg76fa0tkdz4jv9ex4',
            channelId: 'channel-44'
          },
          chain: {
            port: 'transfer',
            channelId: 'channel-476',
            path: 'transfer/channel-476/cw20:secret1rgm2m5t530tdzyd99775n6vzumxa5luxcllml4'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/sienna.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/sienna.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/sienna.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/sienna.svg'
        }]
    },
    {
      description: 'The native token cw20 for SCRT Staking Derivatives on Secret Network',
      denomUnits: [{
          denom: 'ibc/D0E5BF2940FB58D9B283A339032DE88111407AAD7D94A7F1F3EB78874F8616D4',
          exponent: 0,
          aliases: ['cw20:secret1k6u0cy4feepm6pehnz804zmwakuwdapm69tuc4']
        }, {
          denom: 'stkd-scrt',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/D0E5BF2940FB58D9B283A339032DE88111407AAD7D94A7F1F3EB78874F8616D4',
      name: 'SCRT Staking Derivatives',
      display: 'stkd-scrt',
      symbol: 'stkd-SCRT',
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            chainName: 'secretnetwork',
            baseDenom: 'cw20:secret1k6u0cy4feepm6pehnz804zmwakuwdapm69tuc4',
            port: 'wasm.secret1tqmms5awftpuhalcv5h5mg76fa0tkdz4jv9ex4',
            channelId: 'channel-44'
          },
          chain: {
            port: 'transfer',
            channelId: 'channel-476',
            path: 'transfer/channel-476/cw20:secret1k6u0cy4feepm6pehnz804zmwakuwdapm69tuc4'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/stkd-scrt.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/stkd-scrt.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/stkd-scrt.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/stkd-scrt.svg'
        }]
    },
    {
      description: 'BeeZee native blockchain',
      denomUnits: [{
          denom: 'ibc/C822645522FC3EECF817609AA38C24B64D04F5C267A23BCCF8F2E3BC5755FA88',
          exponent: 0,
          aliases: ['ubze']
        }, {
          denom: 'bze',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/C822645522FC3EECF817609AA38C24B64D04F5C267A23BCCF8F2E3BC5755FA88',
      name: 'BeeZee',
      display: 'bze',
      symbol: 'BZE',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'beezee',
            baseDenom: 'ubze',
            channelId: 'channel-0'
          },
          chain: {
            channelId: 'channel-340',
            path: 'transfer/channel-340/ubze'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/beezee/images/bze.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/beezee/images/bze.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/beezee/images/bze.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/beezee/images/bze.svg'
        }]
    },
    {
      description: 'The native token cw20 for Fanfury on Juno Chain',
      denomUnits: [{
          denom: 'ibc/7CE5F388D661D82A0774E47B5129DA51CC7129BD1A70B5FA6BCEBB5B0A2FAEAF',
          exponent: 0,
          aliases: ['cw20:juno1cltgm8v842gu54srmejewghnd6uqa26lzkpa635wzra9m9xuudkqa2gtcz']
        }, {
          denom: 'fury',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/7CE5F388D661D82A0774E47B5129DA51CC7129BD1A70B5FA6BCEBB5B0A2FAEAF',
      name: 'FURY.legacy',
      display: 'fury',
      symbol: 'FURY.legacy',
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            chainName: 'juno',
            baseDenom: 'cw20:juno1cltgm8v842gu54srmejewghnd6uqa26lzkpa635wzra9m9xuudkqa2gtcz',
            port: 'wasm.juno1v4887y83d6g28puzvt8cl0f3cdhd3y6y9mpysnsp3k8krdm7l6jqgm0rkn',
            channelId: 'channel-47'
          },
          chain: {
            port: 'transfer',
            channelId: 'channel-169',
            path: 'transfer/channel-169/cw20:juno1cltgm8v842gu54srmejewghnd6uqa26lzkpa635wzra9m9xuudkqa2gtcz'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/fanfury.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/fanfury.png'
        }]
    },
    {
      description: 'The native EVM, governance and staking token of the Acrechain',
      denomUnits: [{
          denom: 'ibc/BB936517F7E5D77A63E0ADB05217A6608B0C4CF8FBA7EA2F4BAE4107A7238F06',
          exponent: 0,
          aliases: ['aacre']
        }, {
          denom: 'acre',
          exponent: 18
        }],
      typeAsset: 'ics20',
      base: 'ibc/BB936517F7E5D77A63E0ADB05217A6608B0C4CF8FBA7EA2F4BAE4107A7238F06',
      name: 'Acrechain',
      display: 'acre',
      symbol: 'ACRE',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'acrechain',
            baseDenom: 'aacre',
            channelId: 'channel-0'
          },
          chain: {
            channelId: 'channel-490',
            path: 'transfer/channel-490/aacre'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/acrechain/images/acre.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/acrechain/images/acre.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/acrechain/images/acre.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/acrechain/images/acre.svg'
        }]
    },
    {
      description: 'Stable Token of Harbor protocol on Comdex network',
      denomUnits: [{
          denom: 'ibc/23CA6C8D1AB2145DD13EB1E089A2E3F960DC298B468CCE034E19E5A78B61136E',
          exponent: 0,
          aliases: ['ucmst']
        }, {
          denom: 'cmst',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/23CA6C8D1AB2145DD13EB1E089A2E3F960DC298B468CCE034E19E5A78B61136E',
      name: 'CMST',
      display: 'cmst',
      symbol: 'CMST',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'comdex',
            baseDenom: 'ucmst',
            channelId: 'channel-1'
          },
          chain: {
            channelId: 'channel-87',
            path: 'transfer/channel-87/ucmst'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/comdex/images/cmst.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/comdex/images/cmst.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/comdex/images/cmst.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/comdex/images/cmst.svg'
        }]
    },
    {
      description: 'The native EVM, governance and staking token of the Imversed',
      denomUnits: [{
          denom: 'ibc/92B223EBFA74DB99BEA92B23DEAA6050734FEEAABB84689CB8E1AE8F9C9F9AF4',
          exponent: 0,
          aliases: ['aimv']
        }, {
          denom: 'imv',
          exponent: 18
        }],
      typeAsset: 'ics20',
      base: 'ibc/92B223EBFA74DB99BEA92B23DEAA6050734FEEAABB84689CB8E1AE8F9C9F9AF4',
      name: 'Imversed',
      display: 'imv',
      symbol: 'IMV',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'imversed',
            baseDenom: 'aimv',
            channelId: 'channel-1'
          },
          chain: {
            channelId: 'channel-517',
            path: 'transfer/channel-517/aimv'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/imversed/images/imversed.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/imversed/images/imversed.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/imversed/images/imversed.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/imversed/images/imversed.svg'
        }]
    },
    {
      description: 'The native token of Medas Digital Network',
      denomUnits: [{
          denom: 'ibc/01E94A5FF29B8DDEFC86F412CC3927F7330E9B523CC63A6194B1108F5276025C',
          exponent: 0,
          aliases: ['umedas']
        }, {
          denom: 'medas',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/01E94A5FF29B8DDEFC86F412CC3927F7330E9B523CC63A6194B1108F5276025C',
      name: 'Medas Digital Network',
      display: 'medas',
      symbol: 'MEDAS',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'medasdigital',
            baseDenom: 'umedas',
            channelId: 'channel-0'
          },
          chain: {
            channelId: 'channel-519',
            path: 'transfer/channel-519/umedas'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/medasdigital/images/medas.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/medasdigital/images/medas.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/medasdigital/images/medas.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/medasdigital/images/medas.svg'
        }],
      keywords: ['medas']
    },
    {
      description: 'The native token cw20 for PHMN on Juno Chain',
      denomUnits: [{
          denom: 'ibc/D3B574938631B0A1BA704879020C696E514CFADAA7643CDE4BD5EB010BDE327B',
          exponent: 0,
          aliases: ['cw20:juno1rws84uz7969aaa7pej303udhlkt3j9ca0l3egpcae98jwak9quzq8szn2l']
        }, {
          denom: 'phmn',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/D3B574938631B0A1BA704879020C696E514CFADAA7643CDE4BD5EB010BDE327B',
      name: 'POSTHUMAN',
      display: 'phmn',
      symbol: 'PHMN',
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            chainName: 'juno',
            baseDenom: 'cw20:juno1rws84uz7969aaa7pej303udhlkt3j9ca0l3egpcae98jwak9quzq8szn2l',
            port: 'wasm.juno1v4887y83d6g28puzvt8cl0f3cdhd3y6y9mpysnsp3k8krdm7l6jqgm0rkn',
            channelId: 'channel-47'
          },
          chain: {
            port: 'transfer',
            channelId: 'channel-169',
            path: 'transfer/channel-169/cw20:juno1rws84uz7969aaa7pej303udhlkt3j9ca0l3egpcae98jwak9quzq8szn2l'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/phmn.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/phmn.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/phmn.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/phmn.svg'
        }]
    },
    {
      description: 'The native token cw20 for Amber on Secret Network',
      denomUnits: [{
          denom: 'ibc/18A1B70E3205A48DE8590C0D11030E7146CDBF1048789261D53FFFD7527F8B55',
          exponent: 0,
          aliases: ['cw20:secret1s09x2xvfd2lp2skgzm29w2xtena7s8fq98v852']
        }, {
          denom: 'amber',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/18A1B70E3205A48DE8590C0D11030E7146CDBF1048789261D53FFFD7527F8B55',
      name: 'Amber',
      display: 'amber',
      symbol: 'AMBER',
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            chainName: 'secretnetwork',
            baseDenom: 'cw20:secret1s09x2xvfd2lp2skgzm29w2xtena7s8fq98v852',
            port: 'wasm.secret1tqmms5awftpuhalcv5h5mg76fa0tkdz4jv9ex4',
            channelId: 'channel-44'
          },
          chain: {
            port: 'transfer',
            channelId: 'channel-476',
            path: 'transfer/channel-476/cw20:secret1s09x2xvfd2lp2skgzm29w2xtena7s8fq98v852'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/amber.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/amber.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/amber.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/amber.svg'
        }]
    },
    {
      description: 'The native token of Onomy Protocol',
      denomUnits: [{
          denom: 'ibc/B9606D347599F0F2FDF82BA3EE339000673B7D274EA50F59494DC51EFCD42163',
          exponent: 0,
          aliases: ['anom']
        }, {
          denom: 'nom',
          exponent: 18
        }],
      typeAsset: 'ics20',
      base: 'ibc/B9606D347599F0F2FDF82BA3EE339000673B7D274EA50F59494DC51EFCD42163',
      name: 'Onomy',
      display: 'nom',
      symbol: 'NOM',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'onomy',
            baseDenom: 'anom',
            channelId: 'channel-0'
          },
          chain: {
            channelId: 'channel-525',
            path: 'transfer/channel-525/anom'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/onomy/images/nom.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/onomy/images/nom.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/onomy/images/nom.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/onomy/images/nom.svg'
        }],
      keywords: [
        'dex',
        'stablecoin',
        'bridge',
        'staking'
      ]
    },
    {
      description: 'PSTAKE Liquid-Staked ATOM',
      denomUnits: [{
          denom: 'ibc/CAA179E40F0266B0B29FB5EAA288FB9212E628822265D4141EBD1C47C3CBFCBC',
          exponent: 0,
          aliases: ['stk/uatom']
        }, {
          denom: 'stkatom',
          exponent: 6,
          aliases: ['stk/atom']
        }],
      typeAsset: 'ics20',
      base: 'ibc/CAA179E40F0266B0B29FB5EAA288FB9212E628822265D4141EBD1C47C3CBFCBC',
      name: 'PSTAKE staked ATOM',
      display: 'stkatom',
      symbol: 'stkATOM',
      traces: [{
          type: 'liquid-stake',
          counterparty: {
            chainName: 'cosmoshub',
            baseDenom: 'uatom'
          },
          provider: 'pSTAKE'
        }, {
          type: 'ibc',
          counterparty: {
            chainName: 'persistence',
            baseDenom: 'stk/uatom',
            channelId: 'channel-6'
          },
          chain: {
            channelId: 'channel-4',
            path: 'transfer/channel-4/stk/uatom'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/stkatom.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/stkatom.svg'
      },
      images: [{
          imageSync: {
            chainName: 'persistence',
            baseDenom: 'stk/uatom'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/stkatom.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/stkatom.svg'
        }]
    },
    {
      description: 'The native staking and governance token of the Dyson Protocol',
      denomUnits: [{
          denom: 'ibc/E27CD305D33F150369AB526AEB6646A76EC3FFB1A6CA58A663B5DE657A89D55D',
          exponent: 0,
          aliases: ['dys']
        }],
      typeAsset: 'ics20',
      base: 'ibc/E27CD305D33F150369AB526AEB6646A76EC3FFB1A6CA58A663B5DE657A89D55D',
      name: 'Dyson Protocol',
      display: 'ibc/E27CD305D33F150369AB526AEB6646A76EC3FFB1A6CA58A663B5DE657A89D55D',
      symbol: 'DYS',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'dyson',
            baseDenom: 'dys',
            channelId: 'channel-2'
          },
          chain: {
            channelId: 'channel-526',
            path: 'transfer/channel-526/dys'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dyson/images/dys.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dyson/images/dys.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dyson/images/dys.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dyson/images/dys.svg'
        }]
    },
    {
      description: 'The native token cw20 for Hopers on Juno Chain',
      denomUnits: [{
          denom: 'ibc/D3ADAF73F84CDF205BCB72C142FDAEEA2C612AB853CEE6D6C06F184FA38B1099',
          exponent: 0,
          aliases: ['cw20:juno1u45shlp0q4gcckvsj06ss4xuvsu0z24a0d0vr9ce6r24pht4e5xq7q995n']
        }, {
          denom: 'hopers',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/D3ADAF73F84CDF205BCB72C142FDAEEA2C612AB853CEE6D6C06F184FA38B1099',
      name: 'Hopers',
      display: 'hopers',
      symbol: 'HOPERS',
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            chainName: 'juno',
            baseDenom: 'cw20:juno1u45shlp0q4gcckvsj06ss4xuvsu0z24a0d0vr9ce6r24pht4e5xq7q995n',
            port: 'wasm.juno1v4887y83d6g28puzvt8cl0f3cdhd3y6y9mpysnsp3k8krdm7l6jqgm0rkn',
            channelId: 'channel-47'
          },
          chain: {
            port: 'transfer',
            channelId: 'channel-169',
            path: 'transfer/channel-169/cw20:juno1u45shlp0q4gcckvsj06ss4xuvsu0z24a0d0vr9ce6r24pht4e5xq7q995n'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/hopers.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/hopers.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/hopers.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/hopers.svg'
        }]
    },
    {
      description: 'Overcollateralized stable coin for Arable derivatives v1',
      denomUnits: [{
          denom: 'ibc/5D270A584B1078FBE07D14570ED5E88EC1FEDA8518B76C322606291E6FD8286F',
          exponent: 0,
          aliases: ['erc20/0x2Cbea61fdfDFA520Ee99700F104D5b75ADf50B0c']
        }, {
          denom: 'arusd',
          exponent: 18
        }],
      typeAsset: 'ics20',
      base: 'ibc/5D270A584B1078FBE07D14570ED5E88EC1FEDA8518B76C322606291E6FD8286F',
      name: 'Arable USD',
      display: 'arusd',
      symbol: 'arUSD',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'acrechain',
            baseDenom: 'erc20/0x2Cbea61fdfDFA520Ee99700F104D5b75ADf50B0c',
            channelId: 'channel-0'
          },
          chain: {
            channelId: 'channel-490',
            path: 'transfer/channel-490/erc20/0x2Cbea61fdfDFA520Ee99700F104D5b75ADf50B0c'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/acrechain/images/arusd.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/acrechain/images/arusd.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/acrechain/images/arusd.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/acrechain/images/arusd.svg'
        }]
    },
    {
      description: 'The native EVM, governance and staking token of the Planq Network',
      denomUnits: [{
          denom: 'ibc/B1E0166EA0D759FDF4B207D1F5F12210D8BFE36F2345CEFC76948CE2B36DFBAF',
          exponent: 0,
          aliases: ['aplanq']
        }, {
          denom: 'planq',
          exponent: 18
        }],
      typeAsset: 'ics20',
      base: 'ibc/B1E0166EA0D759FDF4B207D1F5F12210D8BFE36F2345CEFC76948CE2B36DFBAF',
      name: 'Planq',
      display: 'planq',
      symbol: 'PLQ',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'planq',
            baseDenom: 'aplanq',
            channelId: 'channel-1'
          },
          chain: {
            channelId: 'channel-492',
            path: 'transfer/channel-492/aplanq'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/planq/images/planq.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/planq/images/planq.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/planq/images/planq.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/planq/images/planq.svg'
        }]
    },
    {
      description: 'Fantom\'s native utility token — FTM — powers the entire Fantom blockchain ecosystem. FTM tokens are used for staking, governance, payments, and fees on the network.',
      denomUnits: [{
          denom: 'ibc/5E2DFDF1734137302129EA1C1BA21A580F96F778D4F021815EA4F6DB378DA1A4',
          exponent: 0,
          aliases: ['wftm-wei']
        }, {
          denom: 'ftm',
          exponent: 18
        }],
      typeAsset: 'ics20',
      base: 'ibc/5E2DFDF1734137302129EA1C1BA21A580F96F778D4F021815EA4F6DB378DA1A4',
      name: 'Fantom',
      display: 'ftm',
      symbol: 'FTM',
      traces: [
        {
          type: 'wrapped',
          counterparty: {
            chainName: 'fantom',
            baseDenom: 'wei'
          },
          chain: {
            contract: '0x21be370D5312f44cB42ce377BC9b8a0cEF1A4C83'
          },
          provider: 'Fantom'
        },
        {
          type: 'bridge',
          counterparty: {
            chainName: 'fantom',
            baseDenom: '0x21be370D5312f44cB42ce377BC9b8a0cEF1A4C83'
          },
          provider: 'Axelar'
        },
        {
          type: 'ibc',
          counterparty: {
            chainName: 'axelar',
            baseDenom: 'wftm-wei',
            channelId: 'channel-3'
          },
          chain: {
            channelId: 'channel-208',
            path: 'transfer/channel-208/wftm-wei'
          }
        }
      ],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/fantom/images/ftm.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/fantom/images/ftm.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/fantom/images/ftm.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/fantom/images/ftm.svg'
        }]
    },
    {
      description: 'Canto is a Layer-1 blockchain built to deliver on the promise of DeFi',
      denomUnits: [{
          denom: 'ibc/47CAF2DB8C016FAC960F33BC492FD8E454593B65CC59D70FA9D9F30424F9C32F',
          exponent: 0,
          aliases: ['acanto']
        }, {
          denom: 'canto',
          exponent: 18
        }],
      typeAsset: 'ics20',
      base: 'ibc/47CAF2DB8C016FAC960F33BC492FD8E454593B65CC59D70FA9D9F30424F9C32F',
      name: 'Canto',
      display: 'canto',
      symbol: 'CANTO',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'canto',
            baseDenom: 'acanto',
            channelId: 'channel-5'
          },
          chain: {
            channelId: 'channel-550',
            path: 'transfer/channel-550/acanto'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/canto/images/canto.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/canto/images/canto.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/canto/images/canto.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/canto/images/canto.svg'
        }]
    },
    {
      description: 'Quicksilver Liquid Staked STARS',
      denomUnits: [{
          denom: 'ibc/46C83BB054E12E189882B5284542DB605D94C99827E367C9192CF0579CD5BC83',
          exponent: 0,
          aliases: ['uqstars']
        }, {
          denom: 'qstars',
          exponent: 6,
          aliases: []
        }],
      typeAsset: 'ics20',
      base: 'ibc/46C83BB054E12E189882B5284542DB605D94C99827E367C9192CF0579CD5BC83',
      name: 'Quicksilver Liquid Staked STARS',
      display: 'qstars',
      symbol: 'qSTARS',
      traces: [{
          type: 'liquid-stake',
          counterparty: {
            chainName: 'stargaze',
            baseDenom: 'ustars'
          },
          provider: 'Quicksilver'
        }, {
          type: 'ibc',
          counterparty: {
            chainName: 'quicksilver',
            baseDenom: 'uqstars',
            channelId: 'channel-2'
          },
          chain: {
            channelId: 'channel-522',
            path: 'transfer/channel-522/uqstars'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/quicksilver/images/qstars.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/quicksilver/images/qstars.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/quicksilver/images/qstars.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/quicksilver/images/qstars.svg'
        }]
    },
    {
      description: 'WYND DAO Governance Token',
      denomUnits: [{
          denom: 'ibc/2FBAC4BF296D7844796844B35978E5899984BA5A6314B2DD8F83C215550010B3',
          exponent: 0,
          aliases: ['cw20:juno1mkw83sv6c7sjdvsaplrzc8yaes9l42p4mhy0ssuxjnyzl87c9eps7ce3m9']
        }, {
          denom: 'wynd',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/2FBAC4BF296D7844796844B35978E5899984BA5A6314B2DD8F83C215550010B3',
      name: 'Wynd DAO Governance Token',
      display: 'wynd',
      symbol: 'WYND',
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            chainName: 'juno',
            baseDenom: 'cw20:juno1mkw83sv6c7sjdvsaplrzc8yaes9l42p4mhy0ssuxjnyzl87c9eps7ce3m9',
            port: 'wasm.juno1v4887y83d6g28puzvt8cl0f3cdhd3y6y9mpysnsp3k8krdm7l6jqgm0rkn',
            channelId: 'channel-47'
          },
          chain: {
            port: 'transfer',
            channelId: 'channel-169',
            path: 'transfer/channel-169/cw20:juno1mkw83sv6c7sjdvsaplrzc8yaes9l42p4mhy0ssuxjnyzl87c9eps7ce3m9'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/wynd.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/wynd.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/wynd.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/wynd.svg'
        }]
    },
    {
      description: 'USDC is a fully collateralized US Dollar stablecoin developed by CENTRE, the open source project with Circle being the first of several forthcoming issuers.',
      denomUnits: [{
          denom: 'ibc/231FD77ECCB2DB916D314019DA30FE013202833386B1908A191D16989AD80B5A',
          exponent: 0,
          aliases: ['polygon-uusdc']
        }, {
          denom: 'polygon-usdc',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/231FD77ECCB2DB916D314019DA30FE013202833386B1908A191D16989AD80B5A',
      name: 'USD Coin (Polygon)',
      display: 'polygon-usdc',
      symbol: 'polygon.USDC.axl',
      traces: [
        {
          type: 'synthetic',
          counterparty: {
            chainName: 'forex',
            baseDenom: 'USD'
          },
          provider: 'Circle'
        },
        {
          type: 'additional-mintage',
          counterparty: {
            chainName: 'ethereum',
            baseDenom: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48'
          },
          provider: 'Circle'
        },
        {
          type: 'bridge',
          counterparty: {
            chainName: 'polygon',
            baseDenom: '0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174'
          },
          provider: 'Axelar'
        },
        {
          type: 'ibc',
          counterparty: {
            chainName: 'axelar',
            baseDenom: 'polygon-uusdc',
            channelId: 'channel-3'
          },
          chain: {
            channelId: 'channel-208',
            path: 'transfer/channel-208/polygon-uusdc'
          }
        }
      ],
      logoURIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/polygon.usdc.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdc.svg'
        }, {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/polygon.usdc.svg'
        }]
    },
    {
      description: 'USDC is a fully collateralized US Dollar stablecoin developed by CENTRE, the open source project with Circle being the first of several forthcoming issuers.',
      denomUnits: [{
          denom: 'ibc/F17C9CA112815613C5B6771047A093054F837C3020CBA59DFFD9D780A8B2984C',
          exponent: 0,
          aliases: ['avalanche-uusdc']
        }, {
          denom: 'avalanche-usdc',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/F17C9CA112815613C5B6771047A093054F837C3020CBA59DFFD9D780A8B2984C',
      name: 'USD Coin (Avalanche)',
      display: 'avalanche-usdc',
      symbol: 'avalanche.USDC.axl',
      traces: [
        {
          type: 'synthetic',
          counterparty: {
            chainName: 'forex',
            baseDenom: 'USD'
          },
          provider: 'Circle'
        },
        {
          type: 'additional-mintage',
          counterparty: {
            chainName: 'ethereum',
            baseDenom: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48'
          },
          provider: 'Circle'
        },
        {
          type: 'bridge',
          counterparty: {
            chainName: 'avalanche',
            baseDenom: '0xB97EF9Ef8734C71904D8002F8b6Bc66Dd9c48a6E'
          },
          provider: 'Axelar'
        },
        {
          type: 'ibc',
          counterparty: {
            chainName: 'axelar',
            baseDenom: 'avalanche-uusdc',
            channelId: 'channel-3'
          },
          chain: {
            channelId: 'channel-208',
            path: 'transfer/channel-208/avalanche-uusdc'
          }
        }
      ],
      logoURIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/avalanche.usdc.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdc.svg'
        }, {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/avalanche.usdc.svg'
        }]
    },
    {
      description: 'Mars protocol token',
      denomUnits: [{
          denom: 'ibc/573FCD90FACEE750F55A8864EF7D38265F07E5A9273FA0E8DAFD39951332B580',
          exponent: 0,
          aliases: ['umars']
        }, {
          denom: 'mars',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/573FCD90FACEE750F55A8864EF7D38265F07E5A9273FA0E8DAFD39951332B580',
      name: 'Mars Hub',
      display: 'mars',
      symbol: 'MARS',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'mars',
            baseDenom: 'umars',
            channelId: 'channel-1'
          },
          chain: {
            channelId: 'channel-557',
            path: 'transfer/channel-557/umars'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/mars/images/mars-token.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/mars/images/mars-token.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/mars/images/mars-token.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/mars/images/mars-token.svg'
        }]
    },
    {
      description: 'Ciento Exchange Token',
      denomUnits: [{
          denom: 'ibc/D38BB3DD46864694F009AF01DA5A815B3A875F8CC52FF5679BFFCC35DC7451D5',
          exponent: 0,
          aliases: ['erc20/0xAE6D3334989a22A65228732446731438672418F2']
        }, {
          denom: 'cnto',
          exponent: 18
        }],
      typeAsset: 'ics20',
      base: 'ibc/D38BB3DD46864694F009AF01DA5A815B3A875F8CC52FF5679BFFCC35DC7451D5',
      name: 'Ciento Token',
      display: 'cnto',
      symbol: 'CNTO',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'acrechain',
            baseDenom: 'erc20/0xAE6D3334989a22A65228732446731438672418F2',
            channelId: 'channel-0'
          },
          chain: {
            channelId: 'channel-490',
            path: 'transfer/channel-490/erc20/0xAE6D3334989a22A65228732446731438672418F2'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/acrechain/images/cnto.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/acrechain/images/cnto.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/acrechain/images/cnto.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/acrechain/images/cnto.svg'
        }]
    },
    {
      denomUnits: [{
          denom: 'ibc/C491E7582E94AE921F6A029790083CDE1106C28F3F6C4AD7F1340544C13EC372',
          exponent: 0,
          aliases: ['stuluna']
        }, {
          denom: 'stluna',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/C491E7582E94AE921F6A029790083CDE1106C28F3F6C4AD7F1340544C13EC372',
      name: 'Stride Staked LUNA',
      display: 'stluna',
      symbol: 'stLUNA',
      traces: [{
          type: 'liquid-stake',
          counterparty: {
            chainName: 'terra2',
            baseDenom: 'uluna'
          },
          provider: 'Stride'
        }, {
          type: 'ibc',
          counterparty: {
            chainName: 'stride',
            baseDenom: 'stuluna',
            channelId: 'channel-5'
          },
          chain: {
            channelId: 'channel-326',
            path: 'transfer/channel-326/stuluna'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stluna.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stluna.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stluna.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stluna.svg'
        }]
    },
    {
      denomUnits: [{
          denom: 'ibc/C5579A9595790017C600DD726276D978B9BF314CF82406CE342720A9C7911A01',
          exponent: 0,
          aliases: ['staevmos']
        }, {
          denom: 'stevmos',
          exponent: 18
        }],
      typeAsset: 'ics20',
      base: 'ibc/C5579A9595790017C600DD726276D978B9BF314CF82406CE342720A9C7911A01',
      name: 'Stride Staked EVMOS',
      display: 'stevmos',
      symbol: 'stEVMOS',
      traces: [{
          type: 'liquid-stake',
          counterparty: {
            chainName: 'evmos',
            baseDenom: 'uaevmos'
          },
          provider: 'Stride'
        }, {
          type: 'ibc',
          counterparty: {
            chainName: 'stride',
            baseDenom: 'staevmos',
            channelId: 'channel-5'
          },
          chain: {
            channelId: 'channel-326',
            path: 'transfer/channel-326/staevmos'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stevmos.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stevmos.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stevmos.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stevmos.svg'
        }]
    },
    {
      description: 'nRide Token',
      denomUnits: [{
          denom: 'ibc/E750D31033DC1CF4A044C3AA0A8117401316DC918FBEBC4E3D34F91B09D5F54C',
          exponent: 0,
          aliases: ['cw20:juno1qmlchtmjpvu0cr7u0tad2pq8838h6farrrjzp39eqa9xswg7teussrswlq']
        }, {
          denom: 'nride',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/E750D31033DC1CF4A044C3AA0A8117401316DC918FBEBC4E3D34F91B09D5F54C',
      name: 'nRide Token',
      display: 'nride',
      symbol: 'NRIDE',
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            chainName: 'juno',
            baseDenom: 'cw20:juno1qmlchtmjpvu0cr7u0tad2pq8838h6farrrjzp39eqa9xswg7teussrswlq',
            port: 'wasm.juno1v4887y83d6g28puzvt8cl0f3cdhd3y6y9mpysnsp3k8krdm7l6jqgm0rkn',
            channelId: 'channel-47'
          },
          chain: {
            port: 'transfer',
            channelId: 'channel-169',
            path: 'transfer/channel-169/cw20:juno1qmlchtmjpvu0cr7u0tad2pq8838h6farrrjzp39eqa9xswg7teussrswlq'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/nride.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/nride.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/nride.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/nride.svg'
        }]
    },
    {
      description: 'The native staking token of 8ball.',
      denomUnits: [{
          denom: 'ibc/8BE73A810E22F80E5E850531A688600D63AE7392E7C2770AE758CAA4FD921B7F',
          exponent: 0,
          aliases: ['uebl']
        }, {
          denom: 'ebl',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/8BE73A810E22F80E5E850531A688600D63AE7392E7C2770AE758CAA4FD921B7F',
      name: '8ball',
      display: 'ebl',
      symbol: 'EBL',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: '8ball',
            baseDenom: 'uebl',
            channelId: 'channel-16'
          },
          chain: {
            channelId: 'channel-641',
            path: 'transfer/channel-641/uebl'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/8ball/images/8ball.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/8ball/images/8ball.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/8ball/images/8ball.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/8ball/images/8ball.svg'
        }]
    },
    {
      description: 'Quicksilver Liquid Staked ATOM',
      denomUnits: [{
          denom: 'ibc/FA602364BEC305A696CBDF987058E99D8B479F0318E47314C49173E8838C5BAC',
          exponent: 0,
          aliases: ['uqatom']
        }, {
          denom: 'qatom',
          exponent: 6,
          aliases: []
        }],
      typeAsset: 'ics20',
      base: 'ibc/FA602364BEC305A696CBDF987058E99D8B479F0318E47314C49173E8838C5BAC',
      name: 'Quicksilver Liquid Staked ATOM',
      display: 'qatom',
      symbol: 'qATOM',
      traces: [{
          type: 'liquid-stake',
          counterparty: {
            chainName: 'cosmoshub',
            baseDenom: 'uatom'
          },
          provider: 'Quicksilver'
        }, {
          type: 'ibc',
          counterparty: {
            chainName: 'quicksilver',
            baseDenom: 'uqatom',
            channelId: 'channel-2'
          },
          chain: {
            channelId: 'channel-522',
            path: 'transfer/channel-522/uqatom'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/quicksilver/images/qatom.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/quicksilver/images/qatom.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/quicksilver/images/qatom.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/quicksilver/images/qatom.svg'
        }]
    },
    {
      description: 'Governance Token of Harbor protocol on Comdex network',
      denomUnits: [{
          denom: 'ibc/AD4DEA52408EA07C0C9E19444EC8DA84A274A70AD2687A710EFDDEB28BB2986A',
          exponent: 0,
          aliases: ['uharbor']
        }, {
          denom: 'harbor',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/AD4DEA52408EA07C0C9E19444EC8DA84A274A70AD2687A710EFDDEB28BB2986A',
      name: 'Harbor',
      display: 'harbor',
      symbol: 'HARBOR',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'comdex',
            baseDenom: 'uharbor',
            channelId: 'channel-1'
          },
          chain: {
            channelId: 'channel-87',
            path: 'transfer/channel-87/uharbor'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/comdex/images/harbor.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/comdex/images/harbor.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/comdex/images/harbor.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/comdex/images/harbor.svg'
        }]
    },
    {
      description: 'Quicksilver Liquid Staked REGEN',
      denomUnits: [{
          denom: 'ibc/79A676508A2ECA1021EDDC7BB9CF70CEEC9514C478DA526A5A8B3E78506C2206',
          exponent: 0,
          aliases: ['uqregen']
        }, {
          denom: 'qregen',
          exponent: 6,
          aliases: []
        }],
      typeAsset: 'ics20',
      base: 'ibc/79A676508A2ECA1021EDDC7BB9CF70CEEC9514C478DA526A5A8B3E78506C2206',
      name: 'Quicksilver Liquid Staked Regen',
      display: 'qregen',
      symbol: 'qREGEN',
      traces: [{
          type: 'liquid-stake',
          counterparty: {
            chainName: 'regen',
            baseDenom: 'uregen'
          },
          provider: 'Quicksilver'
        }, {
          type: 'ibc',
          counterparty: {
            chainName: 'quicksilver',
            baseDenom: 'uqregen',
            channelId: 'channel-2'
          },
          chain: {
            channelId: 'channel-522',
            path: 'transfer/channel-522/uqregen'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/quicksilver/images/qregen.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/quicksilver/images/qregen.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/quicksilver/images/qregen.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/quicksilver/images/qregen.svg'
        }]
    },
    {
      description: 'Inspired by Bonk. A community project to celebrate the settlers of JunoNetwork.',
      denomUnits: [{
          denom: 'ibc/4F24D904BAB5FFBD3524F2DE3EC3C7A9E687A2408D9A985E57B356D9FA9201C6',
          exponent: 0,
          aliases: ['cw20:juno1u8cr3hcjvfkzxcaacv9q75uw9hwjmn8pucc93pmy6yvkzz79kh3qncca8x']
        }, {
          denom: 'fox',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/4F24D904BAB5FFBD3524F2DE3EC3C7A9E687A2408D9A985E57B356D9FA9201C6',
      name: 'Juno Fox',
      display: 'fox',
      symbol: 'FOX',
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            chainName: 'juno',
            baseDenom: 'cw20:juno1u8cr3hcjvfkzxcaacv9q75uw9hwjmn8pucc93pmy6yvkzz79kh3qncca8x',
            port: 'wasm.juno1v4887y83d6g28puzvt8cl0f3cdhd3y6y9mpysnsp3k8krdm7l6jqgm0rkn',
            channelId: 'channel-47'
          },
          chain: {
            port: 'transfer',
            channelId: 'channel-169',
            path: 'transfer/channel-169/cw20:juno1u8cr3hcjvfkzxcaacv9q75uw9hwjmn8pucc93pmy6yvkzz79kh3qncca8x'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/fox.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/fox.png'
        }]
    },
    {
      description: 'QCK - native token of Quicksilver',
      denomUnits: [{
          denom: 'ibc/635CB83EF1DFE598B10A3E90485306FD0D47D34217A4BE5FD9977FA010A5367D',
          exponent: 0,
          aliases: ['uqck']
        }, {
          denom: 'qck',
          exponent: 6,
          aliases: []
        }],
      typeAsset: 'ics20',
      base: 'ibc/635CB83EF1DFE598B10A3E90485306FD0D47D34217A4BE5FD9977FA010A5367D',
      name: 'Quicksilver',
      display: 'qck',
      symbol: 'QCK',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'quicksilver',
            baseDenom: 'uqck',
            channelId: 'channel-2'
          },
          chain: {
            channelId: 'channel-522',
            path: 'transfer/channel-522/uqck'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/quicksilver/images/qck.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/quicksilver/images/qck.png'
        }]
    },
    {
      description: 'The native token of Arkhadian',
      denomUnits: [{
          denom: 'ibc/0F91EE8B98AAE3CF393D94CD7F89A10F8D7758C5EC707E721899DFE65C164C28',
          exponent: 0,
          aliases: ['arkh']
        }, {
          denom: 'ARKH',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/0F91EE8B98AAE3CF393D94CD7F89A10F8D7758C5EC707E721899DFE65C164C28',
      name: 'Arkhadian',
      display: 'ARKH',
      symbol: 'ARKH',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'arkh',
            baseDenom: 'arkh',
            channelId: 'channel-12'
          },
          chain: {
            channelId: 'channel-648',
            path: 'transfer/channel-648/arkh'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/arkh/images/arkh.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/arkh/images/arkh.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/arkh/images/arkh.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/arkh/images/arkh.svg'
        }],
      keywords: ['osmosis_unstable']
    },
    {
      description: 'Quicksilver Liquid Staked OSMO',
      denomUnits: [{
          denom: 'ibc/42D24879D4569CE6477B7E88206ADBFE47C222C6CAD51A54083E4A72594269FC',
          exponent: 0,
          aliases: ['uqosmo']
        }, {
          denom: 'qosmo',
          exponent: 6,
          aliases: []
        }],
      typeAsset: 'ics20',
      base: 'ibc/42D24879D4569CE6477B7E88206ADBFE47C222C6CAD51A54083E4A72594269FC',
      name: 'Quicksilver Liquid Staked OSMO',
      display: 'qosmo',
      symbol: 'qOSMO',
      traces: [{
          type: 'liquid-stake',
          counterparty: {
            chainName: 'osmosis',
            baseDenom: 'uosmo'
          },
          provider: 'Quicksilver'
        }, {
          type: 'ibc',
          counterparty: {
            chainName: 'quicksilver',
            baseDenom: 'uqosmo',
            channelId: 'channel-2'
          },
          chain: {
            channelId: 'channel-522',
            path: 'transfer/channel-522/uqosmo'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/quicksilver/images/qosmo.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/quicksilver/images/qosmo.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/quicksilver/images/qosmo.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/quicksilver/images/qosmo.svg'
        }]
    },
    {
      description: 'Frienzies are an IBC token redeemable exclusively for a physical asset issued by the Noble entity.',
      denomUnits: [{
          denom: 'ibc/7FA7EC64490E3BDE5A1A28CBE73CC0AD22522794957BC891C46321E3A6074DB9',
          exponent: 0,
          aliases: ['microfrienzies', 'ufrienzies']
        }, {
          denom: 'frienzies',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/7FA7EC64490E3BDE5A1A28CBE73CC0AD22522794957BC891C46321E3A6074DB9',
      name: 'Frienzies',
      display: 'frienzies',
      symbol: 'FRNZ',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'noble',
            baseDenom: 'ufrienzies',
            channelId: 'channel-1'
          },
          chain: {
            channelId: 'channel-750',
            path: 'transfer/channel-750/ufrienzies'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/noble/images/frnz.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/noble/images/frnz.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/noble/images/frnz.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/noble/images/frnz.svg'
        }]
    },
    {
      description: 'The native token of Migaloo Chain',
      denomUnits: [{
          denom: 'ibc/EDD6F0D66BCD49C1084FB2C35353B4ACD7B9191117CE63671B61320548F7C89D',
          exponent: 0,
          aliases: ['uwhale']
        }, {
          denom: 'whale',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/EDD6F0D66BCD49C1084FB2C35353B4ACD7B9191117CE63671B61320548F7C89D',
      name: 'Migaloo',
      display: 'whale',
      symbol: 'WHALE',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'migaloo',
            baseDenom: 'uwhale',
            channelId: 'channel-5'
          },
          chain: {
            channelId: 'channel-642',
            path: 'transfer/channel-642/uwhale'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/white-whale.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/white-whale.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/white-whale.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/white-whale.svg'
        }]
    },
    {
      description: 'Evmos Guardians governance token.',
      denomUnits: [{
          denom: 'ibc/BAC9C6998F1F5C316D3353622EAEDAF8BD00FAABEB374FECDF8C9BC475172CFA',
          exponent: 0,
          aliases: ['cw20:juno1xekkh27punj0uxruv3gvuydyt856fax0nu750xns99t2qcxp7xmsqwhfma']
        }, {
          denom: 'grdn',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/BAC9C6998F1F5C316D3353622EAEDAF8BD00FAABEB374FECDF8C9BC475172CFA',
      name: 'Guardian',
      display: 'grdn',
      symbol: 'GRDN',
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            chainName: 'juno',
            baseDenom: 'cw20:juno1xekkh27punj0uxruv3gvuydyt856fax0nu750xns99t2qcxp7xmsqwhfma',
            port: 'wasm.juno1v4887y83d6g28puzvt8cl0f3cdhd3y6y9mpysnsp3k8krdm7l6jqgm0rkn',
            channelId: 'channel-47'
          },
          chain: {
            port: 'transfer',
            channelId: 'channel-169',
            path: 'transfer/channel-169/cw20:juno1xekkh27punj0uxruv3gvuydyt856fax0nu750xns99t2qcxp7xmsqwhfma'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/guardian.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/guardian.png'
        }]
    },
    {
      description: 'Mini Punks Token',
      denomUnits: [{
          denom: 'ibc/DC0D3303BBE739E073224D0314385B88B247F56D71D726A91414CCA244FFFE7E',
          exponent: 0,
          aliases: ['cw20:juno166heaxlyntd33a5euh4rrz26svhean4klzw594esmd02l4atan6sazy2my']
        }, {
          denom: 'mnpu',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/DC0D3303BBE739E073224D0314385B88B247F56D71D726A91414CCA244FFFE7E',
      name: 'Mini Punks',
      display: 'mnpu',
      symbol: 'MNPU',
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            chainName: 'juno',
            baseDenom: 'cw20:juno166heaxlyntd33a5euh4rrz26svhean4klzw594esmd02l4atan6sazy2my',
            port: 'wasm.juno1v4887y83d6g28puzvt8cl0f3cdhd3y6y9mpysnsp3k8krdm7l6jqgm0rkn',
            channelId: 'channel-47'
          },
          chain: {
            port: 'transfer',
            channelId: 'channel-169',
            path: 'transfer/channel-169/cw20:juno166heaxlyntd33a5euh4rrz26svhean4klzw594esmd02l4atan6sazy2my'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/mnpu.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/mnpu.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/mnpu.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/mnpu.svg'
        }]
    },
    {
      description: 'Shiba Cosmos',
      denomUnits: [{
          denom: 'ibc/447A0DCE83691056289503DDAB8EB08E52E167A73629F2ACC59F056B92F51CE8',
          exponent: 0,
          aliases: ['cw20:juno1x5qt47rw84c4k6xvvywtrd40p8gxjt8wnmlahlqg07qevah3f8lqwxfs7z']
        }, {
          denom: 'shibac',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/447A0DCE83691056289503DDAB8EB08E52E167A73629F2ACC59F056B92F51CE8',
      name: 'ShibaCosmos',
      display: 'shibac',
      symbol: 'SHIBAC',
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            chainName: 'juno',
            baseDenom: 'cw20:juno1x5qt47rw84c4k6xvvywtrd40p8gxjt8wnmlahlqg07qevah3f8lqwxfs7z',
            port: 'wasm.juno1v4887y83d6g28puzvt8cl0f3cdhd3y6y9mpysnsp3k8krdm7l6jqgm0rkn',
            channelId: 'channel-47'
          },
          chain: {
            port: 'transfer',
            channelId: 'channel-169',
            path: 'transfer/channel-169/cw20:juno1x5qt47rw84c4k6xvvywtrd40p8gxjt8wnmlahlqg07qevah3f8lqwxfs7z'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/shibacosmos.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/shibacosmos.png'
        }]
    },
    {
      description: 'Sikoba Governance Token',
      denomUnits: [{
          denom: 'ibc/71066B030D8FC6479E638580E1BA9C44925E8C1F6E45036669D22017CFDC8C5E',
          exponent: 0,
          aliases: ['cw20:juno1qqwf3lkfjhp77yja7gmg3y95pda0e5xctqrdhf3wvwdd79flagvqfgrgxp']
        }, {
          denom: 'sikoba',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/71066B030D8FC6479E638580E1BA9C44925E8C1F6E45036669D22017CFDC8C5E',
      name: 'Sikoba Token',
      display: 'sikoba',
      symbol: 'SKOJ',
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            chainName: 'juno',
            baseDenom: 'cw20:juno1qqwf3lkfjhp77yja7gmg3y95pda0e5xctqrdhf3wvwdd79flagvqfgrgxp',
            port: 'wasm.juno1v4887y83d6g28puzvt8cl0f3cdhd3y6y9mpysnsp3k8krdm7l6jqgm0rkn',
            channelId: 'channel-47'
          },
          chain: {
            port: 'transfer',
            channelId: 'channel-169',
            path: 'transfer/channel-169/cw20:juno1qqwf3lkfjhp77yja7gmg3y95pda0e5xctqrdhf3wvwdd79flagvqfgrgxp'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/sikoba.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/sikoba.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/sikoba.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/sikoba.svg'
        }]
    },
    {
      description: 'Nature Carbon Ton (NCT) is a carbon token standard backed 1:1 by carbon credits issued by Verra, a global leader in the voluntary carbon market. NCT credits on Regen Network have been tokenized by Toucan.earth.',
      denomUnits: [{
          denom: 'ibc/A76EB6ECF4E3E2D4A23C526FD1B48FDD42F171B206C9D2758EF778A7826ADD68',
          exponent: 0,
          aliases: ['eco.uC.NCT']
        }, {
          denom: 'nct',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/A76EB6ECF4E3E2D4A23C526FD1B48FDD42F171B206C9D2758EF778A7826ADD68',
      name: 'Nature Carbon Ton',
      display: 'nct',
      symbol: 'NCT',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'regen',
            baseDenom: 'eco.uC.NCT',
            channelId: 'channel-1'
          },
          chain: {
            channelId: 'channel-8',
            path: 'transfer/channel-8/eco.uC.NCT'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/regen/images/nct.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/regen/images/nct.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/regen/images/nct.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/regen/images/nct.svg'
        }]
    },
    {
      description: 'Celestims',
      denomUnits: [{
          denom: 'ibc/0E4FA664327BD40B32803EE84A77F145834C0281B7F82B65521333B3669FA0BA',
          exponent: 0,
          aliases: ['cw20:juno1ngww7zxak55fql42wmyqrr4rhzpne24hhs4p3w4cwhcdgqgr3hxsmzl9zg']
        }, {
          denom: 'clst',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/0E4FA664327BD40B32803EE84A77F145834C0281B7F82B65521333B3669FA0BA',
      name: 'Celestims',
      display: 'clst',
      symbol: 'CLST',
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            chainName: 'juno',
            baseDenom: 'cw20:juno1ngww7zxak55fql42wmyqrr4rhzpne24hhs4p3w4cwhcdgqgr3hxsmzl9zg',
            port: 'wasm.juno1v4887y83d6g28puzvt8cl0f3cdhd3y6y9mpysnsp3k8krdm7l6jqgm0rkn',
            channelId: 'channel-47'
          },
          chain: {
            port: 'transfer',
            channelId: 'channel-169',
            path: 'transfer/channel-169/cw20:juno1ngww7zxak55fql42wmyqrr4rhzpne24hhs4p3w4cwhcdgqgr3hxsmzl9zg'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/celestims.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/celestims.png'
        }]
    },
    {
      description: 'The First Doge on Osmosis',
      denomUnits: [{
          denom: 'ibc/8AEEA9B9304392070F72611076C0E328CE3F2DECA1E18557E36F9DB4F09C0156',
          exponent: 0,
          aliases: ['cw20:juno1ytymtllllsp3hfmndvcp802p2xmy5s8m59ufel8xv9ahyxyfs4hs4kd4je']
        }, {
          denom: 'osdoge',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/8AEEA9B9304392070F72611076C0E328CE3F2DECA1E18557E36F9DB4F09C0156',
      name: 'Osmosis Doge',
      display: 'osdoge',
      symbol: 'OSDOGE',
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            chainName: 'juno',
            baseDenom: 'cw20:juno1ytymtllllsp3hfmndvcp802p2xmy5s8m59ufel8xv9ahyxyfs4hs4kd4je',
            port: 'wasm.juno1v4887y83d6g28puzvt8cl0f3cdhd3y6y9mpysnsp3k8krdm7l6jqgm0rkn',
            channelId: 'channel-47'
          },
          chain: {
            port: 'transfer',
            channelId: 'channel-169',
            path: 'transfer/channel-169/cw20:juno1ytymtllllsp3hfmndvcp802p2xmy5s8m59ufel8xv9ahyxyfs4hs4kd4je'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/osdoge.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/osdoge.png'
        }]
    },
    {
      description: 'Apemos',
      denomUnits: [{
          denom: 'ibc/1EB03F13F29FEA73444586FC4E88A8C14ACE9291501E9658E3BEF951EA4AC85D',
          exponent: 0,
          aliases: ['cw20:juno1jrr0tuuzxrrwcg6hgeqhw5wqpck2y55734e7zcrp745aardlp0qqg8jz06']
        }, {
          denom: 'apemos',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/1EB03F13F29FEA73444586FC4E88A8C14ACE9291501E9658E3BEF951EA4AC85D',
      name: 'Apemos',
      display: 'apemos',
      symbol: 'APEMOS',
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            chainName: 'juno',
            baseDenom: 'cw20:juno1jrr0tuuzxrrwcg6hgeqhw5wqpck2y55734e7zcrp745aardlp0qqg8jz06',
            port: 'wasm.juno1v4887y83d6g28puzvt8cl0f3cdhd3y6y9mpysnsp3k8krdm7l6jqgm0rkn',
            channelId: 'channel-47'
          },
          chain: {
            port: 'transfer',
            channelId: 'channel-169',
            path: 'transfer/channel-169/cw20:juno1jrr0tuuzxrrwcg6hgeqhw5wqpck2y55734e7zcrp745aardlp0qqg8jz06'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/apemos.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/apemos.png'
        }]
    },
    {
      description: 'Evmos Guardians\' Invaders DAO token.',
      denomUnits: [{
          denom: 'ibc/3DB1721541C94AD19D7735FECED74C227E13F925BDB814392980B40A19C1ED54',
          exponent: 0,
          aliases: ['cw20:juno1jwdy7v4egw36pd84aeks3ww6n8k7zhsumd4ac8q5lts83ppxueus4626e8']
        }, {
          denom: 'invdrs',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/3DB1721541C94AD19D7735FECED74C227E13F925BDB814392980B40A19C1ED54',
      name: 'Invaders',
      display: 'invdrs',
      symbol: 'INVDRS',
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            chainName: 'juno',
            baseDenom: 'cw20:juno1jwdy7v4egw36pd84aeks3ww6n8k7zhsumd4ac8q5lts83ppxueus4626e8',
            port: 'wasm.juno1v4887y83d6g28puzvt8cl0f3cdhd3y6y9mpysnsp3k8krdm7l6jqgm0rkn',
            channelId: 'channel-47'
          },
          chain: {
            port: 'transfer',
            channelId: 'channel-169',
            path: 'transfer/channel-169/cw20:juno1jwdy7v4egw36pd84aeks3ww6n8k7zhsumd4ac8q5lts83ppxueus4626e8'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/invdrs.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/invdrs.png'
        }]
    },
    {
      description: 'Doge Apr',
      denomUnits: [{
          denom: 'ibc/04BE4E9C825ED781F9684A1226114BB49607500CAD855F1E3FEEC18532297250',
          exponent: 0,
          aliases: ['cw20:juno1k2ruzzvvwwtwny6gq6kcwyfhkzahaunp685wmz4hafplduekj98q9hgs6d']
        }, {
          denom: 'doga',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/04BE4E9C825ED781F9684A1226114BB49607500CAD855F1E3FEEC18532297250',
      name: 'Doge Apr',
      display: 'doga',
      symbol: 'DOGA',
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            chainName: 'juno',
            baseDenom: 'cw20:juno1k2ruzzvvwwtwny6gq6kcwyfhkzahaunp685wmz4hafplduekj98q9hgs6d',
            port: 'wasm.juno1v4887y83d6g28puzvt8cl0f3cdhd3y6y9mpysnsp3k8krdm7l6jqgm0rkn',
            channelId: 'channel-47'
          },
          chain: {
            port: 'transfer',
            channelId: 'channel-169',
            path: 'transfer/channel-169/cw20:juno1k2ruzzvvwwtwny6gq6kcwyfhkzahaunp685wmz4hafplduekj98q9hgs6d'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/doga.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/doga.png'
        }]
    },
    {
      description: 'Catmos',
      denomUnits: [{
          denom: 'ibc/F4A07138CAEF0BFB4889E03C44C57956A48631061F1C8AB80421C1F229C1B835',
          exponent: 0,
          aliases: ['cw20:juno1f5datjdse3mdgrapwuzs3prl7pvxxht48ns6calnn0t77v2s9l8s0qu488']
        }, {
          denom: 'catmos',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/F4A07138CAEF0BFB4889E03C44C57956A48631061F1C8AB80421C1F229C1B835',
      name: 'Catmos',
      display: 'catmos',
      symbol: 'CATMOS',
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            chainName: 'juno',
            baseDenom: 'cw20:juno1f5datjdse3mdgrapwuzs3prl7pvxxht48ns6calnn0t77v2s9l8s0qu488',
            port: 'wasm.juno1v4887y83d6g28puzvt8cl0f3cdhd3y6y9mpysnsp3k8krdm7l6jqgm0rkn',
            channelId: 'channel-47'
          },
          chain: {
            port: 'transfer',
            channelId: 'channel-169',
            path: 'transfer/channel-169/cw20:juno1f5datjdse3mdgrapwuzs3prl7pvxxht48ns6calnn0t77v2s9l8s0qu488'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/catmos.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/catmos.png'
        }]
    },
    {
      description: 'Social Impact DAO providing showers, meals, and vehicles to the homeless',
      denomUnits: [{
          denom: 'ibc/56B988C4D934FB7503F5EA9B440C75D489C8AD5D193715B477BEC4F84B8BBA2A',
          exponent: 0,
          aliases: ['cw20:juno1j4ux0f6gt7e82z7jdpm25v4g2gts880ap64rdwa49989wzhd0dfqed6vqm']
        }, {
          denom: 'summit',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/56B988C4D934FB7503F5EA9B440C75D489C8AD5D193715B477BEC4F84B8BBA2A',
      name: 'Summit',
      display: 'summit',
      symbol: 'SUMMIT',
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            chainName: 'juno',
            baseDenom: 'cw20:juno1j4ux0f6gt7e82z7jdpm25v4g2gts880ap64rdwa49989wzhd0dfqed6vqm',
            port: 'wasm.juno1v4887y83d6g28puzvt8cl0f3cdhd3y6y9mpysnsp3k8krdm7l6jqgm0rkn',
            channelId: 'channel-47'
          },
          chain: {
            port: 'transfer',
            channelId: 'channel-169',
            path: 'transfer/channel-169/cw20:juno1j4ux0f6gt7e82z7jdpm25v4g2gts880ap64rdwa49989wzhd0dfqed6vqm'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/summit.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/summit.png'
        }]
    },
    {
      description: 'The native staking token of OmniFlix Hub.',
      denomUnits: [{
          denom: 'ibc/CEE970BB3D26F4B907097B6B660489F13F3B0DA765B83CC7D9A0BC0CE220FA6F',
          exponent: 0,
          aliases: ['uflix']
        }, {
          denom: 'flix',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/CEE970BB3D26F4B907097B6B660489F13F3B0DA765B83CC7D9A0BC0CE220FA6F',
      name: 'OmniFlix',
      display: 'flix',
      symbol: 'FLIX',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'omniflixhub',
            baseDenom: 'uflix',
            channelId: 'channel-1'
          },
          chain: {
            channelId: 'channel-199',
            path: 'transfer/channel-199/uflix'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/omniflixhub/images/flix.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/omniflixhub/images/flix.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/omniflixhub/images/flix.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/omniflixhub/images/flix.svg'
        }]
    },
    {
      description: 'Spacer',
      denomUnits: [{
          denom: 'ibc/7A496DB7C2277D4B74EC4428DDB5AC8A62816FBD0DEBE1CFE094935D746BE19C',
          exponent: 0,
          aliases: ['cw20:juno1dyyf7pxeassxvftf570krv7fdf5r8e4r04mp99h0mllsqzp3rs4q7y8yqg']
        }, {
          denom: 'spacer',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/7A496DB7C2277D4B74EC4428DDB5AC8A62816FBD0DEBE1CFE094935D746BE19C',
      name: 'Spacer',
      display: 'spacer',
      symbol: 'SPACER',
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            chainName: 'juno',
            baseDenom: 'cw20:juno1dyyf7pxeassxvftf570krv7fdf5r8e4r04mp99h0mllsqzp3rs4q7y8yqg',
            port: 'wasm.juno1v4887y83d6g28puzvt8cl0f3cdhd3y6y9mpysnsp3k8krdm7l6jqgm0rkn',
            channelId: 'channel-47'
          },
          chain: {
            port: 'transfer',
            channelId: 'channel-169',
            path: 'transfer/channel-169/cw20:juno1dyyf7pxeassxvftf570krv7fdf5r8e4r04mp99h0mllsqzp3rs4q7y8yqg'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/spacer.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/spacer.png'
        }]
    },
    {
      description: 'Light: LumenX community DAO treasury token',
      denomUnits: [{
          denom: 'ibc/3DC08BDF2689978DBCEE28C7ADC2932AA658B2F64B372760FBC5A0058669AD29',
          exponent: 0,
          aliases: ['cw20:juno1dpany8c0lj526lsa02sldv7shzvnw5dt5ues72rk35hd69rrydxqeraz8l']
        }, {
          denom: 'light',
          exponent: 9
        }],
      typeAsset: 'ics20',
      base: 'ibc/3DC08BDF2689978DBCEE28C7ADC2932AA658B2F64B372760FBC5A0058669AD29',
      name: 'LIGHT',
      display: 'light',
      symbol: 'LIGHT',
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            chainName: 'juno',
            baseDenom: 'cw20:juno1dpany8c0lj526lsa02sldv7shzvnw5dt5ues72rk35hd69rrydxqeraz8l',
            port: 'wasm.juno1v4887y83d6g28puzvt8cl0f3cdhd3y6y9mpysnsp3k8krdm7l6jqgm0rkn',
            channelId: 'channel-47'
          },
          chain: {
            port: 'transfer',
            channelId: 'channel-169',
            path: 'transfer/channel-169/cw20:juno1dpany8c0lj526lsa02sldv7shzvnw5dt5ues72rk35hd69rrydxqeraz8l'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/light.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/light.png'
        }]
    },
    {
      description: 'The native token cw20 for Silk on Secret Network',
      denomUnits: [{
          denom: 'ibc/8A025A1E70101E39DE0C0F153E582A30806D3DA16795F6D868A3AA247D2DEDF7',
          exponent: 0,
          aliases: ['cw20:secret1fl449muk5yq8dlad7a22nje4p5d2pnsgymhjfd']
        }, {
          denom: 'silk',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/8A025A1E70101E39DE0C0F153E582A30806D3DA16795F6D868A3AA247D2DEDF7',
      name: 'Silk',
      display: 'silk',
      symbol: 'SILK',
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            chainName: 'secretnetwork',
            baseDenom: 'cw20:secret1fl449muk5yq8dlad7a22nje4p5d2pnsgymhjfd',
            port: 'wasm.secret1tqmms5awftpuhalcv5h5mg76fa0tkdz4jv9ex4',
            channelId: 'channel-44'
          },
          chain: {
            port: 'transfer',
            channelId: 'channel-476',
            path: 'transfer/channel-476/cw20:secret1fl449muk5yq8dlad7a22nje4p5d2pnsgymhjfd'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/silk.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/silk.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/silk.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/silk.svg'
        }]
    },
    {
      description: 'Mille: the 1000th token on osmosis',
      denomUnits: [{
          denom: 'ibc/912275A63A565BFD80734AEDFFB540132C51E446EAC41483B26EDE8A557C71CF',
          exponent: 0,
          aliases: ['cw20:juno1llg7q2d5dqlrqzh5dxv8c7kzzjszld34s5vktqmlmaaxqjssz43sxyhq0d']
        }, {
          denom: 'mile',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/912275A63A565BFD80734AEDFFB540132C51E446EAC41483B26EDE8A557C71CF',
      name: 'Mille',
      display: 'mile',
      symbol: 'MILE',
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            chainName: 'juno',
            baseDenom: 'cw20:juno1llg7q2d5dqlrqzh5dxv8c7kzzjszld34s5vktqmlmaaxqjssz43sxyhq0d',
            port: 'wasm.juno1v4887y83d6g28puzvt8cl0f3cdhd3y6y9mpysnsp3k8krdm7l6jqgm0rkn',
            channelId: 'channel-47'
          },
          chain: {
            port: 'transfer',
            channelId: 'channel-169',
            path: 'transfer/channel-169/cw20:juno1llg7q2d5dqlrqzh5dxv8c7kzzjszld34s5vktqmlmaaxqjssz43sxyhq0d'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/mille.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/mille.png'
        }]
    },
    {
      description: 'Social Impact DAO dedicated to combatting food insecurity and malnutrition',
      denomUnits: [{
          denom: 'ibc/980A2748F37C938AD129B92A51E2ABA8CFFC6862ADD61EC1B291125535DBE30B',
          exponent: 0,
          aliases: ['cw20:juno13ca2g36ng6etcfhr9qxx352uw2n5e92np54thfkm3w3nzlhsgvwsjaqlyq']
        }, {
          denom: 'manna',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/980A2748F37C938AD129B92A51E2ABA8CFFC6862ADD61EC1B291125535DBE30B',
      name: 'Manna',
      display: 'manna',
      symbol: 'MANNA',
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            chainName: 'juno',
            baseDenom: 'cw20:juno13ca2g36ng6etcfhr9qxx352uw2n5e92np54thfkm3w3nzlhsgvwsjaqlyq',
            port: 'wasm.juno1v4887y83d6g28puzvt8cl0f3cdhd3y6y9mpysnsp3k8krdm7l6jqgm0rkn',
            channelId: 'channel-47'
          },
          chain: {
            port: 'transfer',
            channelId: 'channel-169',
            path: 'transfer/channel-169/cw20:juno13ca2g36ng6etcfhr9qxx352uw2n5e92np54thfkm3w3nzlhsgvwsjaqlyq'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/manna.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/manna.png'
        }]
    },
    {
      description: 'Filecoin is a decentralized storage network designed to turn cloud storage into an algorithmic market. The network facilitates open markets for storing and retrieving data, where users pay to store their files on storage miners. Filecoin is built on top of the InterPlanetary File System (IPFS), a peer-to-peer storage network. Filecoin aims to store data in a decentralized manner, unlike traditional cloud storage providers.\n\nParticipants in the Filecoin network are incentivized to act honestly and store as much data as possible because they earn the Filecoin cryptocurrency (FIL) in exchange for their storage services. This setup ensures the integrity and accessibility of data stored. Filecoin\'s model allows for a variety of storage options, including long-term archival storage and more rapid retrieval services, making it a versatile solution for decentralized data storage. The project, developed by Protocol Labs, also focuses on ensuring that data is stored reliably and efficiently.',
      denomUnits: [{
          denom: 'ibc/18FB5C09D9D2371F659D4846A956FA56225E377EE3C3652A2BF3542BF809159D',
          exponent: 0,
          aliases: ['wfil-wei']
        }, {
          denom: 'fil',
          exponent: 18
        }],
      typeAsset: 'ics20',
      base: 'ibc/18FB5C09D9D2371F659D4846A956FA56225E377EE3C3652A2BF3542BF809159D',
      name: 'Filecoin',
      display: 'fil',
      symbol: 'FIL',
      traces: [
        {
          type: 'wrapped',
          counterparty: {
            chainName: 'filecoin',
            baseDenom: 'attoFIL'
          },
          provider: 'Filecoin'
        },
        {
          type: 'bridge',
          counterparty: {
            chainName: 'filecoin',
            baseDenom: '0x60E1773636CF5E4A227d9AC24F20fEca034ee25A'
          },
          provider: 'Axelar'
        },
        {
          type: 'ibc',
          counterparty: {
            chainName: 'axelar',
            baseDenom: 'wfil-wei',
            channelId: 'channel-3'
          },
          chain: {
            channelId: 'channel-208',
            path: 'transfer/channel-208/wfil-wei'
          }
        }
      ],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/filecoin/images/fil.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/filecoin/images/fil.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/filecoin/images/fil.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/filecoin/images/fil.svg'
        }]
    },
    {
      description: 'Void',
      denomUnits: [{
          denom: 'ibc/593F820ECE676A3E0890C734EC4F3A8DE16EC10A54EEDFA8BDFEB40EEA903960',
          exponent: 0,
          aliases: ['cw20:juno1lpvx3mv2a6ddzfjc7zzz2v2cm5gqgqf0hx67hc5p5qwn7hz4cdjsnznhu8']
        }, {
          denom: 'void',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/593F820ECE676A3E0890C734EC4F3A8DE16EC10A54EEDFA8BDFEB40EEA903960',
      name: 'Void',
      display: 'void',
      symbol: 'VOID',
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            chainName: 'juno',
            baseDenom: 'cw20:juno1lpvx3mv2a6ddzfjc7zzz2v2cm5gqgqf0hx67hc5p5qwn7hz4cdjsnznhu8',
            port: 'wasm.juno1v4887y83d6g28puzvt8cl0f3cdhd3y6y9mpysnsp3k8krdm7l6jqgm0rkn',
            channelId: 'channel-47'
          },
          chain: {
            port: 'transfer',
            channelId: 'channel-169',
            path: 'transfer/channel-169/cw20:juno1lpvx3mv2a6ddzfjc7zzz2v2cm5gqgqf0hx67hc5p5qwn7hz4cdjsnznhu8'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/void.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/void.png'
        }]
    },
    {
      description: 'The native token cw20 for Shade on Secret Network',
      denomUnits: [{
          denom: 'ibc/0B3D528E74E3DEAADF8A68F393887AC7E06028904D02173561B0D27F6E751D0A',
          exponent: 0,
          aliases: ['cw20:secret153wu605vvp934xhd4k9dtd640zsep5jkesstdm']
        }, {
          denom: 'shd',
          exponent: 8
        }],
      typeAsset: 'ics20',
      base: 'ibc/0B3D528E74E3DEAADF8A68F393887AC7E06028904D02173561B0D27F6E751D0A',
      name: 'Shade',
      display: 'shd',
      symbol: 'SHD',
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            chainName: 'secretnetwork',
            baseDenom: 'cw20:secret153wu605vvp934xhd4k9dtd640zsep5jkesstdm',
            port: 'wasm.secret1tqmms5awftpuhalcv5h5mg76fa0tkdz4jv9ex4',
            channelId: 'channel-44'
          },
          chain: {
            port: 'transfer',
            channelId: 'channel-476',
            path: 'transfer/channel-476/cw20:secret153wu605vvp934xhd4k9dtd640zsep5jkesstdm'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/shd.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/shd.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/shd.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/shd.svg'
        }]
    },
    {
      description: 'The native token of Bluzelle',
      denomUnits: [{
          denom: 'ibc/63CDD51098FD99E04E5F5610A3882CBE7614C441607BA6FCD7F3A3C1CD5325F8',
          exponent: 0,
          aliases: ['ubnt']
        }, {
          denom: 'bnt',
          exponent: 6,
          aliases: ['blz']
        }],
      typeAsset: 'ics20',
      base: 'ibc/63CDD51098FD99E04E5F5610A3882CBE7614C441607BA6FCD7F3A3C1CD5325F8',
      name: 'Bluzelle',
      display: 'bnt',
      symbol: 'BLZ',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'bluzelle',
            baseDenom: 'ubnt',
            channelId: 'channel-0'
          },
          chain: {
            channelId: 'channel-763',
            path: 'transfer/channel-763/ubnt'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bluzelle/images/bluzelle.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bluzelle/images/bluzelle.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bluzelle/images/bluzelle.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bluzelle/images/bluzelle.svg'
        }],
      keywords: ['bluzelle', 'game']
    },
    {
      description: 'Native token of Arbitrum',
      denomUnits: [{
          denom: 'ibc/10E5E5B06D78FFBB61FD9F89209DEE5FD4446ED0550CBB8E3747DA79E10D9DC6',
          exponent: 0,
          aliases: ['arb-wei']
        }, {
          denom: 'arb',
          exponent: 18
        }],
      typeAsset: 'ics20',
      base: 'ibc/10E5E5B06D78FFBB61FD9F89209DEE5FD4446ED0550CBB8E3747DA79E10D9DC6',
      name: 'Arbitrum',
      display: 'arb',
      symbol: 'ARB',
      traces: [{
          type: 'bridge',
          counterparty: {
            chainName: 'arbitrum',
            baseDenom: '0x912CE59144191C1204E64559FE8253a0e49E6548'
          },
          provider: 'Axelar'
        }, {
          type: 'ibc',
          counterparty: {
            chainName: 'axelar',
            baseDenom: 'arb-wei',
            channelId: 'channel-3'
          },
          chain: {
            channelId: 'channel-208',
            path: 'transfer/channel-208/arb-wei'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/arbitrum/images/arb.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/arbitrum/images/arb.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/arbitrum/images/arb.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/arbitrum/images/arb.svg'
        }]
    },
    {
      description: 'Silica',
      denomUnits: [{
          denom: 'ibc/5164ECF584AD7DC27DA9E6A89E75DAB0F7C4FCB0A624B69215B8BC6A2C40CD07',
          exponent: 0,
          aliases: ['cw20:juno10vgf2u03ufcf25tspgn05l7j3tfg0j63ljgpffy98t697m5r5hmqaw95ux']
        }, {
          denom: 'silica',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/5164ECF584AD7DC27DA9E6A89E75DAB0F7C4FCB0A624B69215B8BC6A2C40CD07',
      name: 'Silica',
      display: 'silica',
      symbol: 'SLCA',
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            chainName: 'juno',
            baseDenom: 'cw20:juno10vgf2u03ufcf25tspgn05l7j3tfg0j63ljgpffy98t697m5r5hmqaw95ux',
            port: 'wasm.juno1v4887y83d6g28puzvt8cl0f3cdhd3y6y9mpysnsp3k8krdm7l6jqgm0rkn',
            channelId: 'channel-47'
          },
          chain: {
            port: 'transfer',
            channelId: 'channel-169',
            path: 'transfer/channel-169/cw20:juno10vgf2u03ufcf25tspgn05l7j3tfg0j63ljgpffy98t697m5r5hmqaw95ux'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/silica.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/silica.png'
        }]
    },
    {
      description: 'Pepec',
      denomUnits: [{
          denom: 'ibc/C00B17F74C94449A62935B4C886E6F0F643249A270DEF269D53CE6741ECCDB93',
          exponent: 0,
          aliases: ['cw20:juno1epxnvge53c4hkcmqzlxryw5fp7eae2utyk6ehjcfpwajwp48km3sgxsh9k']
        }, {
          denom: 'pepec',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/C00B17F74C94449A62935B4C886E6F0F643249A270DEF269D53CE6741ECCDB93',
      name: 'Pepec',
      display: 'pepec',
      symbol: 'PEPEC',
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            chainName: 'juno',
            baseDenom: 'cw20:juno1epxnvge53c4hkcmqzlxryw5fp7eae2utyk6ehjcfpwajwp48km3sgxsh9k',
            port: 'wasm.juno1v4887y83d6g28puzvt8cl0f3cdhd3y6y9mpysnsp3k8krdm7l6jqgm0rkn',
            channelId: 'channel-47'
          },
          chain: {
            port: 'transfer',
            channelId: 'channel-169',
            path: 'transfer/channel-169/cw20:juno1epxnvge53c4hkcmqzlxryw5fp7eae2utyk6ehjcfpwajwp48km3sgxsh9k'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/pepec.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/pepec.png'
        }]
    },
    {
      denomUnits: [{
          denom: 'ibc/E47F4E97C534C95B942729E1B25DBDE111EA791411CFF100515050BEA0AC0C6B',
          exponent: 0,
          aliases: ['0x6982508145454Ce325dDbE47a25d4ec3d2311933', 'pepe-wei']
        }, {
          denom: 'pepe',
          exponent: 18
        }],
      typeAsset: 'ics20',
      base: 'ibc/E47F4E97C534C95B942729E1B25DBDE111EA791411CFF100515050BEA0AC0C6B',
      name: 'Pepe',
      display: 'pepe',
      symbol: 'PEPE',
      traces: [{
          type: 'bridge',
          counterparty: {
            chainName: 'ethereum',
            baseDenom: '0x6982508145454Ce325dDbE47a25d4ec3d2311933'
          },
          provider: 'Axelar'
        }, {
          type: 'ibc',
          counterparty: {
            chainName: 'axelar',
            baseDenom: 'pepe-wei',
            channelId: 'channel-3'
          },
          chain: {
            channelId: 'channel-208',
            path: 'transfer/channel-208/pepe-wei'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/pepe.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/pepe.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/pepe.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/pepe.svg'
        }]
    },
    {
      denomUnits: [{
          denom: 'factory/osmo14klwqgkmackvx2tqa0trtg69dmy0nrg4ntq4gjgw2za4734r5seqjqm4gm/uibcx',
          exponent: 0
        }, {
          denom: 'ibcx',
          exponent: 6
        }],
      typeAsset: 'sdk.coin',
      address: 'osmo14klwqgkmackvx2tqa0trtg69dmy0nrg4ntq4gjgw2za4734r5seqjqm4gm',
      base: 'factory/osmo14klwqgkmackvx2tqa0trtg69dmy0nrg4ntq4gjgw2za4734r5seqjqm4gm/uibcx',
      name: 'IBC Index',
      display: 'ibcx',
      symbol: 'IBCX',
      logoURIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/ibcx.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/ibcx.svg'
        }],
      coingeckoId: 'ibc-index'
    },
    {
      description: 'Coinbase Wrapped Staked ETH (“cbETH”) is a utility token and liquid representation of ETH staked through Coinbase. cbETH gives customers the option to sell, transfer, or otherwise use their staked ETH in dapps while it remains locked by the Ethereum protocol.',
      denomUnits: [{
          denom: 'ibc/4D7A6F2A7744B1534C984A21F9EDFFF8809FC71A9E9243FFB702073E7FCA513A',
          exponent: 0,
          aliases: ['0xbe9895146f7af43049ca1c1ae358b0541ea49704', 'cbeth-wei']
        }, {
          denom: 'cbeth',
          exponent: 18
        }],
      typeAsset: 'ics20',
      base: 'ibc/4D7A6F2A7744B1534C984A21F9EDFFF8809FC71A9E9243FFB702073E7FCA513A',
      name: 'Coinbase Wrapped Staked ETH',
      display: 'cbeth',
      symbol: 'cbETH',
      traces: [
        {
          type: 'liquid-stake',
          counterparty: {
            chainName: 'ethereum',
            baseDenom: 'wei'
          },
          provider: 'Coinbase'
        },
        {
          type: 'bridge',
          counterparty: {
            chainName: 'ethereum',
            baseDenom: '0xbe9895146f7af43049ca1c1ae358b0541ea49704'
          },
          provider: 'Axelar'
        },
        {
          type: 'ibc',
          counterparty: {
            chainName: 'axelar',
            baseDenom: 'cbeth-wei',
            channelId: 'channel-3'
          },
          chain: {
            channelId: 'channel-208',
            path: 'transfer/channel-208/cbeth-wei'
          }
        }
      ],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/cbeth.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/cbeth.png'
        }]
    },
    {
      description: 'Rocket Pool is a decentralised Ethereum Proof of Stake pool.',
      denomUnits: [{
          denom: 'ibc/E610B83FD5544E00A8A1967A2EB3BEF25F1A8CFE8650FE247A8BD4ECA9DC9222',
          exponent: 0,
          aliases: ['0xae78736cd615f374d3085123a210448e74fc6393', 'reth-wei']
        }, {
          denom: 'reth',
          exponent: 18
        }],
      typeAsset: 'ics20',
      base: 'ibc/E610B83FD5544E00A8A1967A2EB3BEF25F1A8CFE8650FE247A8BD4ECA9DC9222',
      name: 'Rocket Pool Ether',
      display: 'reth',
      symbol: 'rETH',
      traces: [
        {
          type: 'liquid-stake',
          counterparty: {
            chainName: 'ethereum',
            baseDenom: 'wei'
          },
          provider: 'Rocket Pool'
        },
        {
          type: 'bridge',
          counterparty: {
            chainName: 'ethereum',
            baseDenom: '0xae78736cd615f374d3085123a210448e74fc6393'
          },
          provider: 'Axelar'
        },
        {
          type: 'ibc',
          counterparty: {
            chainName: 'axelar',
            baseDenom: 'reth-wei',
            channelId: 'channel-3'
          },
          chain: {
            channelId: 'channel-208',
            path: 'transfer/channel-208/reth-wei'
          }
        }
      ],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/reth.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/reth.png'
        }]
    },
    {
      description: 'sfrxETH is the version of frxETH which accrues staking yield. All profit generated from Frax Ether validators is distributed to sfrxETH holders. By exchanging frxETH for sfrxETH, one become\'s eligible for staking yield, which is redeemed upon converting sfrxETH back to frxETH.',
      denomUnits: [{
          denom: 'ibc/81F578C39006EB4B27FFFA9460954527910D73390991B379C03B18934D272F46',
          exponent: 0,
          aliases: ['0xac3e018457b222d93114458476f3e3416abbe38f', 'sfrxeth-wei']
        }, {
          denom: 'sfrxeth',
          exponent: 18
        }],
      typeAsset: 'ics20',
      base: 'ibc/81F578C39006EB4B27FFFA9460954527910D73390991B379C03B18934D272F46',
      name: 'Staked Frax Ether',
      display: 'sfrxeth',
      symbol: 'sfrxETH',
      traces: [
        {
          type: 'liquid-stake',
          counterparty: {
            chainName: 'ethereum',
            baseDenom: 'wei'
          },
          provider: 'Frax'
        },
        {
          type: 'wrapped',
          counterparty: {
            chainName: 'ethereum',
            baseDenom: '0x5e8422345238f34275888049021821e8e08caa1f'
          },
          provider: 'Frax'
        },
        {
          type: 'bridge',
          counterparty: {
            chainName: 'ethereum',
            baseDenom: '0xac3e018457b222d93114458476f3e3416abbe38f'
          },
          provider: 'Axelar'
        },
        {
          type: 'ibc',
          counterparty: {
            chainName: 'axelar',
            baseDenom: 'sfrxeth-wei',
            channelId: 'channel-3'
          },
          chain: {
            channelId: 'channel-208',
            path: 'transfer/channel-208/sfrxeth-wei'
          }
        }
      ],
      logoURIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/sfrxeth.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/sfrxeth.svg'
        }]
    },
    {
      denomUnits: [{
          denom: 'ibc/B2BD584CD2A0A9CE53D4449667E26160C7D44A9C41AF50F602C201E5B3CCA46C',
          exponent: 0,
          aliases: ['0x7f39c581f595b53c5cb19bd0b3f8da6c935e2ca0', 'wsteth-wei']
        }, {
          denom: 'wsteth',
          exponent: 18
        }],
      typeAsset: 'ics20',
      base: 'ibc/B2BD584CD2A0A9CE53D4449667E26160C7D44A9C41AF50F602C201E5B3CCA46C',
      name: 'Wrapped Lido Staked Ether (Axelar)',
      display: 'wsteth',
      symbol: 'wstETH.axl',
      traces: [
        {
          type: 'liquid-stake',
          counterparty: {
            chainName: 'ethereum',
            baseDenom: 'wei'
          },
          provider: 'Lido'
        },
        {
          type: 'wrapped',
          counterparty: {
            chainName: 'ethereum',
            baseDenom: '0xae7ab96520de3a18e5e111b5eaab095312d7fe84'
          },
          provider: 'Lido'
        },
        {
          type: 'bridge',
          counterparty: {
            chainName: 'ethereum',
            baseDenom: '0x7f39c581f595b53c5cb19bd0b3f8da6c935e2ca0'
          },
          provider: 'Axelar'
        },
        {
          type: 'ibc',
          counterparty: {
            chainName: 'axelar',
            baseDenom: 'wsteth-wei',
            channelId: 'channel-3'
          },
          chain: {
            channelId: 'channel-208',
            path: 'transfer/channel-208/wsteth-wei'
          }
        }
      ],
      logoURIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/wstETH.axl.svg'
      },
      images: [{
          imageSync: {
            chainName: 'ethereum',
            baseDenom: '0x7f39c581f595b53c5cb19bd0b3f8da6c935e2ca0'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/wsteth.svg'
        }, {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/wstETH.axl.svg'
        }]
    },
    {
      description: 'The native token of Gitopia',
      denomUnits: [{
          denom: 'ibc/B1C1806A540B3E165A2D42222C59946FB85BA325596FC85662D7047649F419F3',
          exponent: 0,
          aliases: ['ulore']
        }, {
          denom: 'LORE',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/B1C1806A540B3E165A2D42222C59946FB85BA325596FC85662D7047649F419F3',
      name: 'Gitopia',
      display: 'LORE',
      symbol: 'LORE',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'gitopia',
            baseDenom: 'ulore',
            channelId: 'channel-0'
          },
          chain: {
            channelId: 'channel-781',
            path: 'transfer/channel-781/ulore'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/gitopia/images/lore.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/gitopia/images/lore.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/gitopia/images/lore.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/gitopia/images/lore.svg'
        }, {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/gitopia/images/gitopia.png'
        }]
    },
    {
      description: 'Lion DAO is a community DAO that lives on the Terra blockchain with the mission to reactivate the LUNAtic community and showcase Terra protocols & tooling',
      denomUnits: [{
          denom: 'ibc/98BCD43F190C6960D0005BC46BB765C827403A361C9C03C2FF694150A30284B0',
          exponent: 0,
          aliases: ['cw20:terra1lxx40s29qvkrcj8fsa3yzyehy7w50umdvvnls2r830rys6lu2zns63eelv']
        }, {
          denom: 'roar',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/98BCD43F190C6960D0005BC46BB765C827403A361C9C03C2FF694150A30284B0',
      name: 'Lion DAO',
      display: 'roar',
      symbol: 'ROAR',
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            chainName: 'terra2',
            baseDenom: 'cw20:terra1lxx40s29qvkrcj8fsa3yzyehy7w50umdvvnls2r830rys6lu2zns63eelv',
            port: 'wasm.terra1e0mrzy8077druuu42vs0hu7ugguade0cj65dgtauyaw4gsl4kv0qtdf2au',
            channelId: 'channel-26'
          },
          chain: {
            port: 'transfer',
            channelId: 'channel-341',
            path: 'transfer/channel-341/cw20:terra1lxx40s29qvkrcj8fsa3yzyehy7w50umdvvnls2r830rys6lu2zns63eelv'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/roar.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/roar.png'
        }]
    },
    {
      denomUnits: [{
          denom: 'ibc/02F196DA6FD0917DD5FEA249EE61880F4D941EE9059E7964C5C9B50AF103800F',
          exponent: 0,
          aliases: ['stuumee']
        }, {
          denom: 'stumee',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/02F196DA6FD0917DD5FEA249EE61880F4D941EE9059E7964C5C9B50AF103800F',
      name: 'Stride Staked UMEE',
      display: 'stumee',
      symbol: 'stUMEE',
      traces: [{
          type: 'liquid-stake',
          counterparty: {
            chainName: 'umee',
            baseDenom: 'uumee'
          },
          provider: 'Stride'
        }, {
          type: 'ibc',
          counterparty: {
            chainName: 'stride',
            baseDenom: 'stuumee',
            channelId: 'channel-5'
          },
          chain: {
            channelId: 'channel-326',
            path: 'transfer/channel-326/stuumee'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stumee.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stumee.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stumee.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stumee.svg'
        }]
    },
    {
      denomUnits: [{
          denom: 'factory/osmo1xqw2sl9zk8a6pch0csaw78n4swg5ws8t62wc5qta4gnjxfqg6v2qcs243k/stuibcx',
          exponent: 0
        }, {
          denom: 'stibcx',
          exponent: 6
        }],
      typeAsset: 'sdk.coin',
      address: 'osmo1xqw2sl9zk8a6pch0csaw78n4swg5ws8t62wc5qta4gnjxfqg6v2qcs243k',
      base: 'factory/osmo1xqw2sl9zk8a6pch0csaw78n4swg5ws8t62wc5qta4gnjxfqg6v2qcs243k/stuibcx',
      name: 'Staked IBCX',
      display: 'stibcx',
      symbol: 'stIBCX',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/stibcx.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/stibcx.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/stibcx.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/stibcx.svg'
        }]
    },
    {
      description: 'The native token of Nolus chain',
      denomUnits: [{
          denom: 'ibc/D9AFCECDD361D38302AA66EB3BAC23B95234832C51D12489DC451FA2B7C72782',
          exponent: 0,
          aliases: ['unls']
        }, {
          denom: 'nls',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/D9AFCECDD361D38302AA66EB3BAC23B95234832C51D12489DC451FA2B7C72782',
      name: 'Nolus',
      display: 'nls',
      symbol: 'NLS',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'nolus',
            baseDenom: 'unls',
            channelId: 'channel-0'
          },
          chain: {
            channelId: 'channel-783',
            path: 'transfer/channel-783/unls'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nolus/images/nolus.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nolus/images/nolus.svg'
      },
      images: [{
          imageSync: {
            chainName: 'nolus',
            baseDenom: 'unls'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nolus/images/nolus.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nolus/images/nolus.svg'
        }]
    },
    {
      description: 'Lion Cub DAO is a useless meme community DAO on Terra',
      denomUnits: [{
          denom: 'ibc/6F18EFEBF1688AA77F7EAC17065609494DC1BA12AFC78E9AEC832AF70A11BEF3',
          exponent: 0,
          aliases: ['cw20:terra1lalvk0r6nhruel7fvzdppk3tup3mh5j4d4eadrqzfhle4zrf52as58hh9t']
        }, {
          denom: 'cub',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/6F18EFEBF1688AA77F7EAC17065609494DC1BA12AFC78E9AEC832AF70A11BEF3',
      name: 'Lion Cub DAO',
      display: 'cub',
      symbol: 'CUB',
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            chainName: 'terra2',
            baseDenom: 'cw20:terra1lalvk0r6nhruel7fvzdppk3tup3mh5j4d4eadrqzfhle4zrf52as58hh9t',
            port: 'wasm.terra1e0mrzy8077druuu42vs0hu7ugguade0cj65dgtauyaw4gsl4kv0qtdf2au',
            channelId: 'channel-26'
          },
          chain: {
            port: 'transfer',
            channelId: 'channel-341',
            path: 'transfer/channel-341/cw20:terra1lalvk0r6nhruel7fvzdppk3tup3mh5j4d4eadrqzfhle4zrf52as58hh9t'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/cub.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/cub.png'
        }]
    },
    {
      description: 'BLUE CUB DAO is a community DAO on Terra',
      denomUnits: [{
          denom: 'ibc/DA961FE314B009C38595FFE3AF41225D8894D663B8C3F6650DCB5B6F8435592E',
          exponent: 0,
          aliases: ['cw20:terra1gwrz9xzhqsygyr5asrgyq3pu0ewpn00mv2zenu86yvx2nlwpe8lqppv584']
        }, {
          denom: 'blue',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/DA961FE314B009C38595FFE3AF41225D8894D663B8C3F6650DCB5B6F8435592E',
      name: 'BLUE CUB DAO',
      display: 'blue',
      symbol: 'BLUE',
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            chainName: 'terra2',
            baseDenom: 'cw20:terra1gwrz9xzhqsygyr5asrgyq3pu0ewpn00mv2zenu86yvx2nlwpe8lqppv584',
            port: 'wasm.terra1e0mrzy8077druuu42vs0hu7ugguade0cj65dgtauyaw4gsl4kv0qtdf2au',
            channelId: 'channel-26'
          },
          chain: {
            port: 'transfer',
            channelId: 'channel-341',
            path: 'transfer/channel-341/cw20:terra1gwrz9xzhqsygyr5asrgyq3pu0ewpn00mv2zenu86yvx2nlwpe8lqppv584'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/blue.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/blue.png'
        }]
    },
    {
      description: 'The native token of Neutron chain.',
      denomUnits: [{
          denom: 'ibc/126DA09104B71B164883842B769C0E9EC1486C0887D27A9999E395C2C8FB5682',
          exponent: 0,
          aliases: ['untrn']
        }, {
          denom: 'ntrn',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/126DA09104B71B164883842B769C0E9EC1486C0887D27A9999E395C2C8FB5682',
      name: 'Neutron',
      display: 'ntrn',
      symbol: 'NTRN',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'neutron',
            baseDenom: 'untrn',
            channelId: 'channel-10'
          },
          chain: {
            channelId: 'channel-874',
            path: 'transfer/channel-874/untrn'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/ntrn.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/ntrn.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/ntrn.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/ntrn.svg'
        }]
    },
    {
      description: 'An innovative DAO dedicated to housing the most vulnerable',
      denomUnits: [{
          denom: 'ibc/2F5C084037D951B24D100F15CC013A131DF786DCE1B1DBDC48F018A9B9A138DE',
          exponent: 0,
          aliases: ['cw20:juno1ju8k8sqwsqu5k6umrypmtyqu2wqcpnrkf4w4mntvl0javt4nma7s8lzgss']
        }, {
          denom: 'casa',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/2F5C084037D951B24D100F15CC013A131DF786DCE1B1DBDC48F018A9B9A138DE',
      name: 'Casa',
      display: 'casa',
      symbol: 'CASA',
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            chainName: 'juno',
            baseDenom: 'cw20:juno1ju8k8sqwsqu5k6umrypmtyqu2wqcpnrkf4w4mntvl0javt4nma7s8lzgss',
            port: 'wasm.juno1v4887y83d6g28puzvt8cl0f3cdhd3y6y9mpysnsp3k8krdm7l6jqgm0rkn',
            channelId: 'channel-47'
          },
          chain: {
            port: 'transfer',
            channelId: 'channel-169',
            path: 'transfer/channel-169/cw20:juno1ju8k8sqwsqu5k6umrypmtyqu2wqcpnrkf4w4mntvl0javt4nma7s8lzgss'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/casa.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/casa.png'
        }]
    },
    {
      description: 'The native staking and governance token of Composable.',
      denomUnits: [{
          denom: 'ibc/56D7C03B8F6A07AD322EEE1BEF3AE996E09D1C1E34C27CF37E0D4A0AC5972516',
          exponent: 0,
          aliases: ['ppica']
        }, {
          denom: 'pica',
          exponent: 12
        }],
      typeAsset: 'ics20',
      base: 'ibc/56D7C03B8F6A07AD322EEE1BEF3AE996E09D1C1E34C27CF37E0D4A0AC5972516',
      name: 'Composable',
      display: 'pica',
      symbol: 'PICA',
      traces: [{
          type: 'additional-mintage',
          counterparty: {
            chainName: 'picasso',
            baseDenom: 'ppica'
          },
          provider: 'Composable Finance'
        }, {
          type: 'ibc',
          counterparty: {
            chainName: 'composable',
            baseDenom: 'ppica',
            channelId: 'channel-3'
          },
          chain: {
            channelId: 'channel-1279',
            path: 'transfer/channel-1279/ppica'
          }
        }],
      logoURIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/composable/images/pica.svg'
      },
      images: [{
          imageSync: {
            chainName: 'picasso',
            baseDenom: 'ppica'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/composable/images/pica.svg'
        }]
    },
    {
      description: 'The native fee, governance, staking, and bonding token of the Polkadot platform.',
      denomUnits: [{
          denom: 'ibc/6727B2F071643B3841BD535ECDD4ED9CAE52ABDD0DCD07C3630811A7A37B215C',
          exponent: 0,
          aliases: ['4', 'ibc/EE9046745AEC0E8302CB7ED9D5AD67F528FB3B7AE044B247FB0FB293DBDA35E9']
        }, {
          denom: 'ksm',
          exponent: 12
        }],
      typeAsset: 'ics20',
      base: 'ibc/6727B2F071643B3841BD535ECDD4ED9CAE52ABDD0DCD07C3630811A7A37B215C',
      name: 'Kusama',
      display: 'ksm',
      symbol: 'KSM',
      traces: [
        {
          type: 'bridge',
          counterparty: {
            chainName: 'kusama',
            baseDenom: 'Planck'
          },
          provider: 'Kusama Parachain'
        },
        {
          type: 'ibc',
          counterparty: {
            chainName: 'picasso',
            baseDenom: '4',
            channelId: 'channel-17'
          },
          chain: {
            channelId: 'channel-2',
            path: 'transfer/channel-2/4'
          }
        },
        {
          type: 'ibc',
          counterparty: {
            chainName: 'composable',
            baseDenom: 'ibc/EE9046745AEC0E8302CB7ED9D5AD67F528FB3B7AE044B247FB0FB293DBDA35E9',
            channelId: 'channel-3'
          },
          chain: {
            channelId: 'channel-1279',
            path: 'transfer/channel-1279/transfer/channel-2/4'
          }
        }
      ],
      logoURIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/kusama/images/ksm.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/kusama/images/ksm.svg'
        }]
    },
    {
      description: 'The native fee, governance, staking, and bonding token of the Polkadot platform.',
      denomUnits: [{
          denom: 'ibc/6B2B19D874851F631FF0AF82C38A20D4B82F438C7A22F41EDA33568345397244',
          exponent: 0,
          aliases: ['79228162514264337593543950342', 'ibc/3CC19CEC7E5A3E90E78A5A9ECC5A0E2F8F826A375CF1E096F4515CF09DA3E366']
        }, {
          denom: 'dot',
          exponent: 10
        }],
      typeAsset: 'ics20',
      base: 'ibc/6B2B19D874851F631FF0AF82C38A20D4B82F438C7A22F41EDA33568345397244',
      name: 'Polkadot',
      display: 'dot',
      symbol: 'DOT',
      traces: [
        {
          type: 'bridge',
          counterparty: {
            chainName: 'polkadot',
            baseDenom: 'Planck'
          },
          provider: 'Polkadot Relay'
        },
        {
          type: 'ibc',
          counterparty: {
            chainName: 'composablepolkadot',
            baseDenom: '79228162514264337593543950342',
            channelId: 'channel-15'
          },
          chain: {
            channelId: 'channel-15',
            path: 'transfer/channel-15/79228162514264337593543950342'
          }
        },
        {
          type: 'ibc',
          counterparty: {
            chainName: 'picasso',
            baseDenom: '79228162514264337593543950342',
            channelId: 'channel-17'
          },
          chain: {
            channelId: 'channel-2',
            path: 'transfer/channel-2/transfer/channel-15/79228162514264337593543950342'
          }
        },
        {
          type: 'ibc',
          counterparty: {
            chainName: 'composable',
            baseDenom: 'ibc/3CC19CEC7E5A3E90E78A5A9ECC5A0E2F8F826A375CF1E096F4515CF09DA3E366',
            channelId: 'channel-3'
          },
          chain: {
            channelId: 'channel-1279',
            path: 'transfer/channel-1279/transfer/channel-2/transfer/channel-15/79228162514264337593543950342'
          }
        }
      ],
      logoURIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/polkadot/images/dot.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/polkadot/images/dot.svg'
        }]
    },
    {
      description: 'The native token of Quasar',
      denomUnits: [{
          denom: 'ibc/1B708808D372E959CD4839C594960309283424C775F4A038AAEBE7F83A988477',
          exponent: 0,
          aliases: ['uqsr']
        }, {
          denom: 'qsr',
          exponent: 6,
          aliases: []
        }],
      typeAsset: 'ics20',
      base: 'ibc/1B708808D372E959CD4839C594960309283424C775F4A038AAEBE7F83A988477',
      name: 'Quasar',
      display: 'qsr',
      symbol: 'QSR',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'quasar',
            baseDenom: 'uqsr',
            channelId: 'channel-1'
          },
          chain: {
            channelId: 'channel-688',
            path: 'transfer/channel-688/uqsr'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/quasar/images/quasar.png'
      },
      images: [{
          imageSync: {
            chainName: 'quasar',
            baseDenom: 'uqsr'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/quasar/images/quasar.png'
        }]
    },
    {
      description: 'The native token of Archway network',
      denomUnits: [
        {
          denom: 'ibc/23AB778D694C1ECFC59B91D8C399C115CC53B0BD1C61020D8E19519F002BDD85',
          exponent: 0,
          aliases: ['aarch']
        },
        {
          denom: 'uarch',
          exponent: 12
        },
        {
          denom: 'arch',
          exponent: 18
        }
      ],
      typeAsset: 'ics20',
      base: 'ibc/23AB778D694C1ECFC59B91D8C399C115CC53B0BD1C61020D8E19519F002BDD85',
      name: 'Archway',
      display: 'arch',
      symbol: 'ARCH',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'archway',
            baseDenom: 'aarch',
            channelId: 'channel-1'
          },
          chain: {
            channelId: 'channel-1429',
            path: 'transfer/channel-1429/aarch'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/archway/images/archway.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/archway/images/archway.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/archway/images/archway.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/archway/images/archway.svg'
        }]
    },
    {
      description: 'The native staking and governance token of Empower.',
      denomUnits: [{
          denom: 'ibc/DD3938D8131F41994C1F01F4EB5233DEE9A0A5B787545B9A07A321925655BF38',
          exponent: 0,
          aliases: ['umpwr']
        }, {
          denom: 'mpwr',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/DD3938D8131F41994C1F01F4EB5233DEE9A0A5B787545B9A07A321925655BF38',
      name: 'EmpowerChain',
      display: 'mpwr',
      symbol: 'MPWR',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'empowerchain',
            baseDenom: 'umpwr',
            channelId: 'channel-1'
          },
          chain: {
            channelId: 'channel-1411',
            path: 'transfer/channel-1411/umpwr'
          }
        }],
      logoURIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/empowerchain/images/mpwr.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/empowerchain/images/mpwr.svg'
        }]
    },
    {
      description: 'A revolutionary DAO created to bring clean drinking water to men, women, and children worldwide. We hope you join us on our journey!',
      denomUnits: [{
          denom: 'ibc/AABCB14ACAFD53A5C455BAC01EA0CA5AE18714895846681A52BFF1E3B960B44E',
          exponent: 0,
          aliases: ['cw20:juno1m4h8q4p305wgy7vkux0w6e5ylhqll3s6pmadhxkhqtuwd5wlxhxs8xklsw']
        }, {
          denom: 'watr',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/AABCB14ACAFD53A5C455BAC01EA0CA5AE18714895846681A52BFF1E3B960B44E',
      name: 'WATR',
      display: 'watr',
      symbol: 'WATR',
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            chainName: 'juno',
            baseDenom: 'cw20:juno1m4h8q4p305wgy7vkux0w6e5ylhqll3s6pmadhxkhqtuwd5wlxhxs8xklsw',
            port: 'wasm.juno1v4887y83d6g28puzvt8cl0f3cdhd3y6y9mpysnsp3k8krdm7l6jqgm0rkn',
            channelId: 'channel-47'
          },
          chain: {
            port: 'transfer',
            channelId: 'channel-169',
            path: 'transfer/channel-169/cw20:juno1m4h8q4p305wgy7vkux0w6e5ylhqll3s6pmadhxkhqtuwd5wlxhxs8xklsw'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/watr.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/watr.png'
        }]
    },
    {
      description: 'The native utility token of the KYVE network.',
      denomUnits: [{
          denom: 'ibc/613BF0BF2F2146AE9941E923725745E931676B2C14E9768CD609FA0849B2AE13',
          exponent: 0,
          aliases: ['ukyve']
        }, {
          denom: 'kyve',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/613BF0BF2F2146AE9941E923725745E931676B2C14E9768CD609FA0849B2AE13',
      name: 'KYVE',
      display: 'kyve',
      symbol: 'KYVE',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'kyve',
            baseDenom: 'ukyve',
            channelId: 'channel-0'
          },
          chain: {
            channelId: 'channel-767',
            path: 'transfer/channel-767/ukyve'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kyve/images/kyve-token.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kyve/images/kyve-token.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kyve/images/kyve-token.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kyve/images/kyve-token.svg'
        }]
    },
    {
      description: 'Tether gives you the joint benefits of open blockchain technology and traditional currency by converting your cash into a stable digital currency equivalent.',
      denomUnits: [{
          denom: 'ibc/4ABBEF4C8926DDDB320AE5188CFD63267ABBCEFC0583E4AE05D6E5AA2401DDAB',
          exponent: 0,
          aliases: ['erc20/tether/usdt']
        }, {
          denom: 'usdt',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/4ABBEF4C8926DDDB320AE5188CFD63267ABBCEFC0583E4AE05D6E5AA2401DDAB',
      name: 'Tether USD',
      display: 'usdt',
      symbol: 'USDT',
      traces: [
        {
          type: 'synthetic',
          counterparty: {
            chainName: 'forex',
            baseDenom: 'USD'
          },
          provider: 'Tether'
        },
        {
          type: 'additional-mintage',
          counterparty: {
            chainName: 'ethereum',
            baseDenom: '0xdac17f958d2ee523a2206206994597c13d831ec7'
          },
          provider: 'Tether'
        },
        {
          type: 'ibc',
          counterparty: {
            chainName: 'kava',
            baseDenom: 'erc20/tether/usdt',
            channelId: 'channel-1'
          },
          chain: {
            channelId: 'channel-143',
            path: 'transfer/channel-143/erc20/tether/usdt'
          }
        }
      ],
      logoURIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdt.svg'
      },
      images: [{
          imageSync: {
            chainName: 'kava',
            baseDenom: 'erc20/tether/usdt'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdt.svg'
        }]
    },
    {
      description: 'ERIS liquid staked OSMO',
      denomUnits: [{
          denom: 'factory/osmo1dv8wz09tckslr2wy5z86r46dxvegylhpt97r9yd6qc3kyc6tv42qa89dr9/ampOSMO',
          exponent: 0
        }, {
          denom: 'ampOSMO',
          exponent: 6
        }],
      typeAsset: 'sdk.coin',
      address: 'osmo1dv8wz09tckslr2wy5z86r46dxvegylhpt97r9yd6qc3kyc6tv42qa89dr9',
      base: 'factory/osmo1dv8wz09tckslr2wy5z86r46dxvegylhpt97r9yd6qc3kyc6tv42qa89dr9/ampOSMO',
      name: 'ERIS Amplified OSMO',
      display: 'ampOSMO',
      symbol: 'ampOSMO',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/amposmo.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/amposmo.png'
        }],
      socials: {
        website: 'https://www.erisprotocol.com/',
        twitter: 'https://twitter.com/eris_protocol'
      }
    },
    {
      description: 'The native staking token of Sei.',
      denomUnits: [{
          denom: 'ibc/71F11BC0AF8E526B80E44172EBA9D3F0A8E03950BB882325435691EBC9450B1D',
          exponent: 0,
          aliases: ['usei']
        }, {
          denom: 'sei',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/71F11BC0AF8E526B80E44172EBA9D3F0A8E03950BB882325435691EBC9450B1D',
      name: 'Sei',
      display: 'sei',
      symbol: 'SEI',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'sei',
            baseDenom: 'usei',
            channelId: 'channel-0'
          },
          chain: {
            channelId: 'channel-782',
            path: 'transfer/channel-782/usei'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sei/images/sei.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sei/images/sei.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sei/images/sei.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sei/images/sei.svg'
        }]
    },
    {
      description: 'Quicksilver Liquid Staked SOMM',
      denomUnits: [{
          denom: 'ibc/EAF76AD1EEF7B16D167D87711FB26ABE881AC7D9F7E6D0CF313D5FA530417208',
          exponent: 0,
          aliases: ['uqsomm']
        }, {
          denom: 'qsomm',
          exponent: 6,
          aliases: []
        }],
      typeAsset: 'ics20',
      base: 'ibc/EAF76AD1EEF7B16D167D87711FB26ABE881AC7D9F7E6D0CF313D5FA530417208',
      name: 'Quicksilver Liquid Staked SOMM',
      display: 'qsomm',
      symbol: 'qSOMM',
      traces: [{
          type: 'liquid-stake',
          counterparty: {
            chainName: 'sommelier',
            baseDenom: 'usomm'
          },
          provider: 'Quicksilver'
        }, {
          type: 'ibc',
          counterparty: {
            chainName: 'quicksilver',
            baseDenom: 'uqsomm',
            channelId: 'channel-2'
          },
          chain: {
            channelId: 'channel-522',
            path: 'transfer/channel-522/uqsomm'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/quicksilver/images/qsomm.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/quicksilver/images/qsomm.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/quicksilver/images/qsomm.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/quicksilver/images/qsomm.svg'
        }]
    },
    {
      description: 'The native staking and governance token of the Passage chain.',
      denomUnits: [{
          denom: 'ibc/208B2F137CDE510B44C41947C045CFDC27F996A9D990EA64460BDD5B3DBEB2ED',
          exponent: 0,
          aliases: ['upasg']
        }, {
          denom: 'pasg',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/208B2F137CDE510B44C41947C045CFDC27F996A9D990EA64460BDD5B3DBEB2ED',
      name: 'Passage',
      display: 'pasg',
      symbol: 'PASG',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'passage',
            baseDenom: 'upasg',
            channelId: 'channel-0'
          },
          chain: {
            channelId: 'channel-2494',
            path: 'transfer/channel-2494/upasg'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/passage/images/pasg.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/passage/images/pasg.png'
        }]
    },
    {
      denomUnits: [{
          denom: 'ibc/5A0060579D24FBE5268BEA74C3281E7FE533D361C41A99307B4998FEC611E46B',
          exponent: 0,
          aliases: ['stusomm']
        }, {
          denom: 'stsomm',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/5A0060579D24FBE5268BEA74C3281E7FE533D361C41A99307B4998FEC611E46B',
      name: 'Stride Staked SOMM',
      display: 'stsomm',
      symbol: 'stSOMM',
      traces: [{
          type: 'liquid-stake',
          counterparty: {
            chainName: 'sommelier',
            baseDenom: 'usomm'
          },
          provider: 'Stride'
        }, {
          type: 'ibc',
          counterparty: {
            chainName: 'stride',
            baseDenom: 'stusomm',
            channelId: 'channel-5'
          },
          chain: {
            channelId: 'channel-326',
            path: 'transfer/channel-326/stusomm'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stsomm.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stsomm.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stsomm.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stsomm.svg'
        }]
    },
    {
      description: 'Solana (SOL) is the native asset of the Solana blockchain.',
      denomUnits: [{
          denom: 'ibc/1E43D59E565D41FB4E54CA639B838FFD5BCFC20003D330A56CB1396231AA1CBA',
          exponent: 0,
          aliases: ['factory/wormhole14ejqjyq8um4p3xfqj74yld5waqljf88fz25yxnma0cngspxe3les00fpjx/8sYgCzLRJC3J7qPn2bNbx6PiGcarhyx8rBhVaNnfvHCA']
        }, {
          denom: 'wormhole/8sYgCzLRJC3J7qPn2bNbx6PiGcarhyx8rBhVaNnfvHCA/8',
          exponent: 8,
          aliases: []
        }],
      typeAsset: 'ics20',
      base: 'ibc/1E43D59E565D41FB4E54CA639B838FFD5BCFC20003D330A56CB1396231AA1CBA',
      name: 'Solana',
      display: 'wormhole/8sYgCzLRJC3J7qPn2bNbx6PiGcarhyx8rBhVaNnfvHCA/8',
      symbol: 'SOL',
      traces: [
        {
          type: 'wrapped',
          counterparty: {
            chainName: 'solana',
            baseDenom: 'Lamport'
          },
          provider: 'Solana'
        },
        {
          type: 'bridge',
          counterparty: {
            chainName: 'solana',
            baseDenom: 'So11111111111111111111111111111111111111112'
          },
          provider: 'Wormhole'
        },
        {
          type: 'ibc',
          counterparty: {
            chainName: 'gateway',
            baseDenom: 'factory/wormhole14ejqjyq8um4p3xfqj74yld5waqljf88fz25yxnma0cngspxe3les00fpjx/8sYgCzLRJC3J7qPn2bNbx6PiGcarhyx8rBhVaNnfvHCA',
            channelId: 'channel-3'
          },
          chain: {
            channelId: 'channel-2186',
            path: 'transfer/channel-2186/factory/wormhole14ejqjyq8um4p3xfqj74yld5waqljf88fz25yxnma0cngspxe3les00fpjx/8sYgCzLRJC3J7qPn2bNbx6PiGcarhyx8rBhVaNnfvHCA'
          }
        }
      ],
      logoURIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/solana/images/sol.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/solana/images/sol.svg'
        }]
    },
    {
      description: 'The Official Bonk Inu token',
      denomUnits: [{
          denom: 'ibc/CA3733CB0071F480FAE8EF0D9C3D47A49C6589144620A642BBE0D59A293D110E',
          exponent: 0,
          aliases: ['factory/wormhole14ejqjyq8um4p3xfqj74yld5waqljf88fz25yxnma0cngspxe3les00fpjx/95mnwzvJZJ3fKz77xfGN2nR5to9pZmH8YNvaxgLgw5AR']
        }, {
          denom: 'wormhole/95mnwzvJZJ3fKz77xfGN2nR5to9pZmH8YNvaxgLgw5AR/5',
          exponent: 5,
          aliases: []
        }],
      typeAsset: 'ics20',
      base: 'ibc/CA3733CB0071F480FAE8EF0D9C3D47A49C6589144620A642BBE0D59A293D110E',
      name: 'Bonk',
      display: 'wormhole/95mnwzvJZJ3fKz77xfGN2nR5to9pZmH8YNvaxgLgw5AR/5',
      symbol: 'BONK',
      traces: [{
          type: 'bridge',
          counterparty: {
            chainName: 'solana',
            baseDenom: 'DezXAZ8z7PnrnRJjz3wXBoRgixCa6xjnB7YaB1pPB263'
          },
          provider: 'Wormhole'
        }, {
          type: 'ibc',
          counterparty: {
            chainName: 'gateway',
            baseDenom: 'factory/wormhole14ejqjyq8um4p3xfqj74yld5waqljf88fz25yxnma0cngspxe3les00fpjx/95mnwzvJZJ3fKz77xfGN2nR5to9pZmH8YNvaxgLgw5AR',
            channelId: 'channel-3'
          },
          chain: {
            channelId: 'channel-2186',
            path: 'transfer/channel-2186/factory/wormhole14ejqjyq8um4p3xfqj74yld5waqljf88fz25yxnma0cngspxe3les00fpjx/95mnwzvJZJ3fKz77xfGN2nR5to9pZmH8YNvaxgLgw5AR'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/solana/images/bonk.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/solana/images/bonk.png'
        }]
    },
    {
      description: 'Tether USD (Wormhole), USDT, factory/wormhole14ejqjyq8um4p3xfqj74yld5waqljf88fz25yxnma0cngspxe3les00fpjx/8iuAc6DSeLvi2JDUtwJxLytsZT8R19itXebZsNReLLNi',
      denomUnits: [{
          denom: 'ibc/2108F2D81CBE328F371AD0CEF56691B18A86E08C3651504E42487D9EE92DDE9C',
          exponent: 0,
          aliases: ['factory/wormhole14ejqjyq8um4p3xfqj74yld5waqljf88fz25yxnma0cngspxe3les00fpjx/8iuAc6DSeLvi2JDUtwJxLytsZT8R19itXebZsNReLLNi']
        }, {
          denom: 'wormhole/8iuAc6DSeLvi2JDUtwJxLytsZT8R19itXebZsNReLLNi/6',
          exponent: 6,
          aliases: []
        }],
      typeAsset: 'ics20',
      base: 'ibc/2108F2D81CBE328F371AD0CEF56691B18A86E08C3651504E42487D9EE92DDE9C',
      name: 'Tether USD (Wormhole)',
      display: 'wormhole/8iuAc6DSeLvi2JDUtwJxLytsZT8R19itXebZsNReLLNi/6',
      symbol: 'USDT.wh',
      traces: [
        {
          type: 'synthetic',
          counterparty: {
            chainName: 'forex',
            baseDenom: 'USD'
          },
          provider: 'Tether'
        },
        {
          type: 'bridge',
          counterparty: {
            chainName: 'ethereum',
            baseDenom: '0xdac17f958d2ee523a2206206994597c13d831ec7'
          },
          provider: 'Wormhole'
        },
        {
          type: 'ibc',
          counterparty: {
            chainName: 'gateway',
            baseDenom: 'factory/wormhole14ejqjyq8um4p3xfqj74yld5waqljf88fz25yxnma0cngspxe3les00fpjx/8iuAc6DSeLvi2JDUtwJxLytsZT8R19itXebZsNReLLNi',
            channelId: 'channel-3'
          },
          chain: {
            channelId: 'channel-2186',
            path: 'transfer/channel-2186/factory/wormhole14ejqjyq8um4p3xfqj74yld5waqljf88fz25yxnma0cngspxe3les00fpjx/8iuAc6DSeLvi2JDUtwJxLytsZT8R19itXebZsNReLLNi'
          }
        }
      ],
      logoURIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/usdt.hole.svg'
      },
      images: [{
          imageSync: {
            chainName: 'ethereum',
            baseDenom: '0xdac17f958d2ee523a2206206994597c13d831ec7'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdt.svg'
        }, {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/usdt.hole.svg'
        }]
    },
    {
      description: 'Sui’s native asset is called SUI.',
      denomUnits: [{
          denom: 'ibc/B1C287C2701774522570010EEBCD864BCB7AB714711B3AA218699FDD75E832F5',
          exponent: 0,
          aliases: ['factory/wormhole14ejqjyq8um4p3xfqj74yld5waqljf88fz25yxnma0cngspxe3les00fpjx/46YEtoSN1AcwgGSRoWruoS6bnVh8XpMp5aQTpKohCJYh']
        }, {
          denom: 'wormhole/46YEtoSN1AcwgGSRoWruoS6bnVh8XpMp5aQTpKohCJYh/8',
          exponent: 8,
          aliases: []
        }],
      typeAsset: 'ics20',
      base: 'ibc/B1C287C2701774522570010EEBCD864BCB7AB714711B3AA218699FDD75E832F5',
      name: 'Sui',
      display: 'wormhole/46YEtoSN1AcwgGSRoWruoS6bnVh8XpMp5aQTpKohCJYh/8',
      symbol: 'SUI',
      traces: [{
          type: 'bridge',
          counterparty: {
            chainName: 'sui',
            baseDenom: '0x2::sui::SUI'
          },
          provider: 'Wormhole'
        }, {
          type: 'ibc',
          counterparty: {
            chainName: 'gateway',
            baseDenom: 'factory/wormhole14ejqjyq8um4p3xfqj74yld5waqljf88fz25yxnma0cngspxe3les00fpjx/46YEtoSN1AcwgGSRoWruoS6bnVh8XpMp5aQTpKohCJYh',
            channelId: 'channel-3'
          },
          chain: {
            channelId: 'channel-2186',
            path: 'transfer/channel-2186/factory/wormhole14ejqjyq8um4p3xfqj74yld5waqljf88fz25yxnma0cngspxe3les00fpjx/46YEtoSN1AcwgGSRoWruoS6bnVh8XpMp5aQTpKohCJYh'
          }
        }],
      logoURIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/sui/images/sui.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/sui/images/sui.svg'
        }]
    },
    {
      description: 'Aptos token (APT) is the Aptos blockchain native token used for paying network and transaction fees.',
      denomUnits: [{
          denom: 'ibc/A4D176906C1646949574B48C1928D475F2DF56DE0AC04E1C99B08F90BC21ABDE',
          exponent: 0,
          aliases: ['factory/wormhole14ejqjyq8um4p3xfqj74yld5waqljf88fz25yxnma0cngspxe3les00fpjx/5wS2fGojbL9RhGEAeQBdkHPUAciYDxjDTMYvdf9aDn2r']
        }, {
          denom: 'wormhole/5wS2fGojbL9RhGEAeQBdkHPUAciYDxjDTMYvdf9aDn2r/8',
          exponent: 8,
          aliases: []
        }],
      typeAsset: 'ics20',
      base: 'ibc/A4D176906C1646949574B48C1928D475F2DF56DE0AC04E1C99B08F90BC21ABDE',
      name: 'Aptos Coin',
      display: 'wormhole/5wS2fGojbL9RhGEAeQBdkHPUAciYDxjDTMYvdf9aDn2r/8',
      symbol: 'APT',
      traces: [{
          type: 'bridge',
          counterparty: {
            chainName: 'aptos',
            baseDenom: '0x1::aptos_coin::AptosCoin'
          },
          provider: 'Wormhole'
        }, {
          type: 'ibc',
          counterparty: {
            chainName: 'gateway',
            baseDenom: 'factory/wormhole14ejqjyq8um4p3xfqj74yld5waqljf88fz25yxnma0cngspxe3les00fpjx/5wS2fGojbL9RhGEAeQBdkHPUAciYDxjDTMYvdf9aDn2r',
            channelId: 'channel-3'
          },
          chain: {
            channelId: 'channel-2186',
            path: 'transfer/channel-2186/factory/wormhole14ejqjyq8um4p3xfqj74yld5waqljf88fz25yxnma0cngspxe3les00fpjx/5wS2fGojbL9RhGEAeQBdkHPUAciYDxjDTMYvdf9aDn2r'
          }
        }],
      logoURIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/aptos/images/apt-dm.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/aptos/images/aptos.svg'
        }, {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/aptos/images/apt-dm.svg',
          theme: {
            darkMode: true
          }
        }]
    },
    {
      description: 'MantaDAO Governance Token',
      denomUnits: [{
          denom: 'ibc/51D893F870B7675E507E91DA8DB0B22EA66333207E4F5C0708757F08EE059B0B',
          exponent: 0,
          aliases: ['factory/kujira1643jxg8wasy5cfcn7xm8rd742yeazcksqlg4d7/umnta']
        }, {
          denom: 'mnta',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/51D893F870B7675E507E91DA8DB0B22EA66333207E4F5C0708757F08EE059B0B',
      name: 'MantaDAO',
      display: 'mnta',
      symbol: 'MNTA',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'kujira',
            baseDenom: 'factory/kujira1643jxg8wasy5cfcn7xm8rd742yeazcksqlg4d7/umnta',
            channelId: 'channel-3'
          },
          chain: {
            channelId: 'channel-259',
            path: 'transfer/channel-259/factory:kujira1643jxg8wasy5cfcn7xm8rd742yeazcksqlg4d7:umnta'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/mnta.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/mnta.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/mnta.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/mnta.svg'
        }]
    },
    {
      denomUnits: [{
          denom: 'ibc/D69F6D787EC649F4E998161A9F0646F4C2DCC64748A2AB982F14CAFBA7CC0EC9',
          exponent: 0,
          aliases: ['factory/juno1u805lv20qc6jy7c3ttre7nct6uyl20pfky5r7e/DGL']
        }, {
          denom: 'dgl',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/D69F6D787EC649F4E998161A9F0646F4C2DCC64748A2AB982F14CAFBA7CC0EC9',
      name: 'Licorice',
      display: 'dgl',
      symbol: 'DGL',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'juno',
            baseDenom: 'factory/juno1u805lv20qc6jy7c3ttre7nct6uyl20pfky5r7e/DGL',
            channelId: 'channel-0'
          },
          chain: {
            channelId: 'channel-42',
            path: 'transfer/channel-42/factory/juno1u805lv20qc6jy7c3ttre7nct6uyl20pfky5r7e/DGL'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/dgl.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/dgl.png'
        }]
    },
    {
      description: 'USD Coin (Wormhole), USDC, factory/wormhole14ejqjyq8um4p3xfqj74yld5waqljf88fz25yxnma0cngspxe3les00fpjx/GGh9Ufn1SeDGrhzEkMyRKt5568VbbxZK2yvWNsd6PbXt',
      denomUnits: [{
          denom: 'ibc/6B99DB46AA9FF47162148C1726866919E44A6A5E0274B90912FD17E19A337695',
          exponent: 0,
          aliases: ['factory/wormhole14ejqjyq8um4p3xfqj74yld5waqljf88fz25yxnma0cngspxe3les00fpjx/GGh9Ufn1SeDGrhzEkMyRKt5568VbbxZK2yvWNsd6PbXt']
        }, {
          denom: 'wormhole/GGh9Ufn1SeDGrhzEkMyRKt5568VbbxZK2yvWNsd6PbXt/6',
          exponent: 6,
          aliases: []
        }],
      typeAsset: 'ics20',
      base: 'ibc/6B99DB46AA9FF47162148C1726866919E44A6A5E0274B90912FD17E19A337695',
      name: 'USD Coin (Wormhole)',
      display: 'wormhole/GGh9Ufn1SeDGrhzEkMyRKt5568VbbxZK2yvWNsd6PbXt/6',
      symbol: 'USDC.wh',
      traces: [
        {
          type: 'synthetic',
          counterparty: {
            chainName: 'forex',
            baseDenom: 'USD'
          },
          provider: 'Circle'
        },
        {
          type: 'bridge',
          counterparty: {
            chainName: 'ethereum',
            baseDenom: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48'
          },
          provider: 'Wormhole'
        },
        {
          type: 'ibc',
          counterparty: {
            chainName: 'gateway',
            baseDenom: 'factory/wormhole14ejqjyq8um4p3xfqj74yld5waqljf88fz25yxnma0cngspxe3les00fpjx/GGh9Ufn1SeDGrhzEkMyRKt5568VbbxZK2yvWNsd6PbXt',
            channelId: 'channel-3'
          },
          chain: {
            channelId: 'channel-2186',
            path: 'transfer/channel-2186/factory/wormhole14ejqjyq8um4p3xfqj74yld5waqljf88fz25yxnma0cngspxe3les00fpjx/GGh9Ufn1SeDGrhzEkMyRKt5568VbbxZK2yvWNsd6PbXt'
          }
        }
      ],
      logoURIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/usdc.hole.svg'
      },
      images: [{
          imageSync: {
            chainName: 'ethereum',
            baseDenom: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdc.svg'
        }, {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/usdc.hole.svg'
        }]
    },
    {
      description: 'Wrapped Ether (Wormhole), WETH, factory/wormhole14ejqjyq8um4p3xfqj74yld5waqljf88fz25yxnma0cngspxe3les00fpjx/5BWqpR48Lubd55szM5i62zK7TFkddckhbT48yy6mNbDp',
      denomUnits: [{
          denom: 'ibc/62F82550D0B96522361C89B0DA1119DE262FBDFB25E5502BC5101B5C0D0DBAAC',
          exponent: 0,
          aliases: ['factory/wormhole14ejqjyq8um4p3xfqj74yld5waqljf88fz25yxnma0cngspxe3les00fpjx/5BWqpR48Lubd55szM5i62zK7TFkddckhbT48yy6mNbDp']
        }, {
          denom: 'wormhole/5BWqpR48Lubd55szM5i62zK7TFkddckhbT48yy6mNbDp/8',
          exponent: 8,
          aliases: []
        }],
      typeAsset: 'ics20',
      base: 'ibc/62F82550D0B96522361C89B0DA1119DE262FBDFB25E5502BC5101B5C0D0DBAAC',
      name: 'Wrapped Ether (Wormhole)',
      display: 'wormhole/5BWqpR48Lubd55szM5i62zK7TFkddckhbT48yy6mNbDp/8',
      symbol: 'wETH.wh',
      traces: [
        {
          type: 'wrapped',
          counterparty: {
            chainName: 'ethereum',
            baseDenom: 'wei'
          },
          provider: 'Ethereum'
        },
        {
          type: 'bridge',
          counterparty: {
            chainName: 'ethereum',
            baseDenom: '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2'
          },
          provider: 'Wormhole'
        },
        {
          type: 'ibc',
          counterparty: {
            chainName: 'gateway',
            baseDenom: 'factory/wormhole14ejqjyq8um4p3xfqj74yld5waqljf88fz25yxnma0cngspxe3les00fpjx/5BWqpR48Lubd55szM5i62zK7TFkddckhbT48yy6mNbDp',
            channelId: 'channel-3'
          },
          chain: {
            channelId: 'channel-2186',
            path: 'transfer/channel-2186/factory/wormhole14ejqjyq8um4p3xfqj74yld5waqljf88fz25yxnma0cngspxe3les00fpjx/5BWqpR48Lubd55szM5i62zK7TFkddckhbT48yy6mNbDp'
          }
        }
      ],
      logoURIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/weth.hole.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/eth-white.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/eth-white.svg'
        }, {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/weth.hole.svg'
        }]
    },
    {
      description: 'USDC is a fully collateralized US Dollar stablecoin developed by CENTRE, the open source project with Circle being the first of several forthcoming issuers.',
      denomUnits: [{
          denom: 'ibc/498A0751C798A0D9A389AA3691123DADA57DAA4FE165D5C75894505B876BA6E4',
          exponent: 0,
          aliases: ['microusdc', 'uusdc']
        }, {
          denom: 'usdc',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/498A0751C798A0D9A389AA3691123DADA57DAA4FE165D5C75894505B876BA6E4',
      name: 'USD Coin',
      display: 'usdc',
      symbol: 'USDC',
      traces: [
        {
          type: 'synthetic',
          counterparty: {
            chainName: 'forex',
            baseDenom: 'USD'
          },
          provider: 'Circle'
        },
        {
          type: 'additional-mintage',
          counterparty: {
            chainName: 'ethereum',
            baseDenom: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48'
          },
          provider: 'Circle'
        },
        {
          type: 'ibc',
          counterparty: {
            chainName: 'noble',
            baseDenom: 'uusdc',
            channelId: 'channel-1'
          },
          chain: {
            channelId: 'channel-750',
            path: 'transfer/channel-750/uusdc'
          }
        }
      ],
      logoURIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdc.svg'
      },
      images: [{
          imageSync: {
            chainName: 'noble',
            baseDenom: 'uusdc'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/noble/images/USDCoin.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/noble/images/USDCoin.svg'
        }, {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdc.svg'
        }]
    },
    {
      description: 'Maximize ETH yield through leveraged staking across Aave, Compound and Morpho and liquidity provision of ETH liquid staking tokens on Uniswap V3.',
      denomUnits: [{
          denom: 'ibc/FBB3FEF80ED2344D821D4F95C31DBFD33E4E31D5324CAD94EF756E67B749F668',
          exponent: 0,
          aliases: ['0xb5b29320d2Dde5BA5BAFA1EbcD270052070483ec', 'yieldeth-wei']
        }, {
          denom: 'YieldETH',
          exponent: 18
        }],
      typeAsset: 'ics20',
      base: 'ibc/FBB3FEF80ED2344D821D4F95C31DBFD33E4E31D5324CAD94EF756E67B749F668',
      name: 'Real Yield ETH',
      display: 'YieldETH',
      symbol: 'YieldETH',
      traces: [
        {
          type: 'liquid-stake',
          counterparty: {
            chainName: 'ethereum',
            baseDenom: 'wei'
          },
          provider: 'Seven Seas & DeFine Logic Labs'
        },
        {
          type: 'bridge',
          counterparty: {
            chainName: 'ethereum',
            baseDenom: '0xb5b29320d2Dde5BA5BAFA1EbcD270052070483ec'
          },
          provider: 'Axelar'
        },
        {
          type: 'ibc',
          counterparty: {
            chainName: 'axelar',
            baseDenom: 'yieldeth-wei',
            channelId: 'channel-3'
          },
          chain: {
            channelId: 'channel-208',
            path: 'transfer/channel-208/yieldeth-wei'
          }
        }
      ],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/yieldeth.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/yieldeth.svg'
      },
      images: [{
          imageSync: {
            chainName: 'axelar',
            baseDenom: 'yieldeth-wei'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/yieldeth.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/yieldeth.svg'
        }]
    },
    {
      description: 'The native staking token of XPLA.',
      denomUnits: [{
          denom: 'ibc/95C9B5870F95E21A242E6AF9ADCB1F212EE4A8855087226C36FBE43FC41A77B8',
          exponent: 0,
          aliases: ['axpla']
        }, {
          denom: 'xpla',
          exponent: 18
        }],
      typeAsset: 'ics20',
      base: 'ibc/95C9B5870F95E21A242E6AF9ADCB1F212EE4A8855087226C36FBE43FC41A77B8',
      name: 'XPLA',
      display: 'xpla',
      symbol: 'XPLA',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'xpla',
            baseDenom: 'axpla',
            channelId: 'channel-9'
          },
          chain: {
            channelId: 'channel-1634',
            path: 'transfer/channel-1634/axpla'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/xpla/images/xpla.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/xpla/images/xpla.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/xpla/images/xpla.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/xpla/images/xpla.svg'
        }]
    },
    {
      description: 'OIN Token ($OIN) is a groundbreaking digital asset developed on the $SEI Blockchain. It transcends being merely a cryptocurrency; $OIN stands as a robust store of value, symbolizing the future of decentralized finance and its potential to reshape the crypto landscape.',
      denomUnits: [{
          denom: 'ibc/98B3DBF1FA79C4C14CC5F08F62ACD5498560FCB515F677526FD200D54EA048B6',
          exponent: 0,
          aliases: ['factory/sei1thgp6wamxwqt7rthfkeehktmq0ujh5kspluw6w/OIN']
        }, {
          denom: 'oin',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/98B3DBF1FA79C4C14CC5F08F62ACD5498560FCB515F677526FD200D54EA048B6',
      name: 'OIN STORE OF VALUE',
      display: 'oin',
      symbol: 'OIN',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'sei',
            baseDenom: 'factory/sei1thgp6wamxwqt7rthfkeehktmq0ujh5kspluw6w/OIN',
            channelId: 'channel-0'
          },
          chain: {
            channelId: 'channel-782',
            path: 'transfer/channel-782/factory/sei1thgp6wamxwqt7rthfkeehktmq0ujh5kspluw6w/OIN'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sei/images/oin.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sei/images/oin.png'
        }]
    },
    {
      description: 'The token of Neokingdom DAO.',
      denomUnits: [{
          denom: 'ibc/DEE262653B9DE39BCEF0493D47E0DFC4FE62F7F046CF38B9FDEFEBE98D149A71',
          exponent: 0,
          aliases: ['erc20/0x655ecB57432CC1370f65e5dc2309588b71b473A9']
        }, {
          denom: 'neok',
          exponent: 18
        }],
      typeAsset: 'ics20',
      base: 'ibc/DEE262653B9DE39BCEF0493D47E0DFC4FE62F7F046CF38B9FDEFEBE98D149A71',
      name: 'Neokingdom DAO',
      display: 'neok',
      symbol: 'NEOK',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'evmos',
            baseDenom: 'erc20/0x655ecB57432CC1370f65e5dc2309588b71b473A9',
            channelId: 'channel-0'
          },
          chain: {
            channelId: 'channel-204',
            path: 'transfer/channel-204/erc20/0x655ecB57432CC1370f65e5dc2309588b71b473A9'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/evmos/images/neok.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/evmos/images/neok.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/evmos/images/neok.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/evmos/images/neok.svg'
        }]
    },
    {
      description: 'The native currency of the Realio Network.',
      denomUnits: [{
          denom: 'ibc/1CDF9C7D073DD59ED06F15DB08CC0901F2A24759BE70463570E8896F9A444ADF',
          exponent: 0,
          aliases: ['ario']
        }, {
          denom: 'rio',
          exponent: 18
        }],
      typeAsset: 'ics20',
      base: 'ibc/1CDF9C7D073DD59ED06F15DB08CC0901F2A24759BE70463570E8896F9A444ADF',
      name: 'Realio Network',
      display: 'rio',
      symbol: 'RIO',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'realio',
            baseDenom: 'ario',
            channelId: 'channel-1'
          },
          chain: {
            channelId: 'channel-1424',
            path: 'transfer/channel-1424/ario'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/realio/images/rio.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/realio/images/rio.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/realio/images/rio.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/realio/images/rio.svg'
        }]
    },
    {
      description: 'Membrane\'s CDP-style stablecoin called CDT',
      denomUnits: [{
          denom: 'factory/osmo1s794h9rxggytja3a4pmwul53u98k06zy2qtrdvjnfuxruh7s8yjs6cyxgd/ucdt',
          exponent: 0
        }, {
          denom: 'cdt',
          exponent: 6
        }],
      typeAsset: 'sdk.coin',
      base: 'factory/osmo1s794h9rxggytja3a4pmwul53u98k06zy2qtrdvjnfuxruh7s8yjs6cyxgd/ucdt',
      name: 'CDT Stablecoin',
      display: 'cdt',
      symbol: 'CDT',
      logoURIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/CDT.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/CDT.svg'
        }],
      coingeckoId: 'collateralized-debt-token'
    },
    {
      description: 'Membrane\'s protocol token',
      denomUnits: [{
          denom: 'factory/osmo1s794h9rxggytja3a4pmwul53u98k06zy2qtrdvjnfuxruh7s8yjs6cyxgd/umbrn',
          exponent: 0
        }, {
          denom: 'mbrn',
          exponent: 6
        }],
      typeAsset: 'sdk.coin',
      base: 'factory/osmo1s794h9rxggytja3a4pmwul53u98k06zy2qtrdvjnfuxruh7s8yjs6cyxgd/umbrn',
      name: 'Membrane',
      display: 'mbrn',
      symbol: 'MBRN',
      logoURIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/MBRN.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/MBRN.svg'
        }],
      coingeckoId: 'membrane'
    },
    {
      description: 'The native token of SGE Network',
      denomUnits: [{
          denom: 'ibc/A1830DECC0B742F0B2044FF74BE727B5CF92C9A28A9235C3BACE4D24A23504FA',
          exponent: 0,
          aliases: ['usge']
        }, {
          denom: 'sge',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/A1830DECC0B742F0B2044FF74BE727B5CF92C9A28A9235C3BACE4D24A23504FA',
      name: 'SGE',
      display: 'sge',
      symbol: 'SGE',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'sge',
            baseDenom: 'usge',
            channelId: 'channel-0'
          },
          chain: {
            channelId: 'channel-5485',
            path: 'transfer/channel-5485/usge'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sge/images/sge.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sge/images/sge.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sge/images/sge.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sge/images/sge.svg'
        }]
    },
    {
      description: 'The native staking and governance token of the StaFi Hub.',
      denomUnits: [{
          denom: 'ibc/01D2F0C4739C871BFBEE7E786709E6904A55559DC1483DD92ED392EF12247862',
          exponent: 0,
          aliases: ['ufis']
        }, {
          denom: 'fis',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/01D2F0C4739C871BFBEE7E786709E6904A55559DC1483DD92ED392EF12247862',
      name: 'StaFi Hub',
      display: 'fis',
      symbol: 'FIS',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'stafihub',
            baseDenom: 'ufis',
            channelId: 'channel-10'
          },
          chain: {
            channelId: 'channel-5413',
            path: 'transfer/channel-5413/ufis'
          }
        }],
      logoURIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stafihub/images/fis.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stafihub/images/fis.svg'
        }]
    },
    {
      description: 'A liquid staking representation of staked ATOMs',
      denomUnits: [{
          denom: 'ibc/B66CE615C600ED0A8B5AF425ECFE0D57BE2377587F66C45934A76886F34DC9B7',
          exponent: 0,
          aliases: ['uratom']
        }, {
          denom: 'ratom',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/B66CE615C600ED0A8B5AF425ECFE0D57BE2377587F66C45934A76886F34DC9B7',
      name: 'rATOM',
      display: 'ratom',
      symbol: 'rATOM',
      traces: [{
          type: 'liquid-stake',
          counterparty: {
            chainName: 'cosmoshub',
            baseDenom: 'uatom'
          },
          provider: 'StaFiHub'
        }, {
          type: 'ibc',
          counterparty: {
            chainName: 'stafihub',
            baseDenom: 'uratom',
            channelId: 'channel-10'
          },
          chain: {
            channelId: 'channel-5413',
            path: 'transfer/channel-5413/uratom'
          }
        }],
      logoURIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stafihub/images/ratom.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stafihub/images/ratom.svg'
        }]
    },
    {
      description: 'The native token of ohhNFT.',
      denomUnits: [{
          denom: 'ibc/CFF40564FDA3E958D9904B8B479124987901168494655D9CC6B7C0EC0416020B',
          exponent: 0,
          aliases: ['factory/stars16da2uus9zrsy83h23ur42v3lglg5rmyrpqnju4/dust']
        }, {
          denom: 'strdst',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/CFF40564FDA3E958D9904B8B479124987901168494655D9CC6B7C0EC0416020B',
      name: 'Stardust STRDST',
      display: 'strdst',
      symbol: 'STRDST',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'stargaze',
            baseDenom: 'factory/stars16da2uus9zrsy83h23ur42v3lglg5rmyrpqnju4/dust',
            channelId: 'channel-0'
          },
          chain: {
            channelId: 'channel-75',
            path: 'transfer/channel-75/factory/stars16da2uus9zrsy83h23ur42v3lglg5rmyrpqnju4/dust'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/dust.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/dust.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/dust.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/dust.svg'
        }]
    },
    {
      description: 'The native staking and governance token of the Theta testnet version of the Dora Vota.',
      denomUnits: [{
          denom: 'ibc/672406ADE4EDFD8C5EA7A0D0DD0C37E431DA7BD8393A15CD2CFDE3364917EB2A',
          exponent: 0,
          aliases: ['peaka']
        }, {
          denom: 'DORA',
          exponent: 18
        }],
      typeAsset: 'ics20',
      base: 'ibc/672406ADE4EDFD8C5EA7A0D0DD0C37E431DA7BD8393A15CD2CFDE3364917EB2A',
      name: 'Dora Vota',
      display: 'DORA',
      symbol: 'DORA',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'doravota',
            baseDenom: 'peaka',
            channelId: 'channel-0'
          },
          chain: {
            channelId: 'channel-2694',
            path: 'transfer/channel-2694/peaka'
          }
        }],
      logoURIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/doravota/images/dora.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/doravota/images/dora.svg'
        }, {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/doravota/images/doravota.png'
        }]
    },
    {
      description: 'The native token of Coreum',
      denomUnits: [{
          denom: 'ibc/F3166F4D31D6BA1EC6C9F5536F5DDDD4CC93DBA430F7419E7CDC41C497944A65',
          exponent: 0,
          aliases: ['ucore']
        }, {
          denom: 'core',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/F3166F4D31D6BA1EC6C9F5536F5DDDD4CC93DBA430F7419E7CDC41C497944A65',
      name: 'Coreum',
      display: 'core',
      symbol: 'COREUM',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'coreum',
            baseDenom: 'ucore',
            channelId: 'channel-2'
          },
          chain: {
            channelId: 'channel-2188',
            path: 'transfer/channel-2188/ucore'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/coreum/images/coreum.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/coreum/images/coreum.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/coreum/images/coreum.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/coreum/images/coreum.svg'
        }],
      keywords: [
        'dex',
        'staking',
        'wasm',
        'assets',
        'nft'
      ]
    },
    {
      denomUnits: [{
          denom: 'ibc/D79E7D83AB399BFFF93433E54FAA480C191248FC556924A2A8351AE2638B3877',
          exponent: 0,
          aliases: ['utia']
        }, {
          denom: 'tia',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/D79E7D83AB399BFFF93433E54FAA480C191248FC556924A2A8351AE2638B3877',
      name: 'Celestia',
      display: 'tia',
      symbol: 'TIA',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'celestia',
            baseDenom: 'utia',
            channelId: 'channel-2'
          },
          chain: {
            channelId: 'channel-6994',
            path: 'transfer/channel-6994/utia'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/celestia/images/celestia.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/celestia/images/celestia.svg'
      },
      images: [{
          imageSync: {
            chainName: 'celestia',
            baseDenom: 'utia'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/celestia/images/celestia.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/celestia/images/celestia.svg'
        }]
    },
    {
      description: 'The native staking token of dYdX Protocol.',
      denomUnits: [{
          denom: 'ibc/831F0B1BBB1D08A2B75311892876D71565478C532967545476DF4C2D7492E48C',
          exponent: 0,
          aliases: ['adydx']
        }, {
          denom: 'dydx',
          exponent: 18
        }],
      typeAsset: 'ics20',
      base: 'ibc/831F0B1BBB1D08A2B75311892876D71565478C532967545476DF4C2D7492E48C',
      name: 'dYdX Protocol',
      display: 'dydx',
      symbol: 'DYDX',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'dydx',
            baseDenom: 'adydx',
            channelId: 'channel-3'
          },
          chain: {
            channelId: 'channel-6787',
            path: 'transfer/channel-6787/adydx'
          }
        }],
      logoURIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dydx/images/dydx-circle.svg'
      },
      images: [{
          imageSync: {
            chainName: 'dydx',
            baseDenom: 'adydx'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dydx/images/dydx.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dydx/images/dydx.svg'
        }, {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dydx/images/dydx-circle.svg'
        }]
    },
    {
      description: 'The native staking token of the Function X',
      denomUnits: [{
          denom: 'ibc/2B30802A0B03F91E4E16D6175C9B70F2911377C1CAE9E50FF011C821465463F9',
          exponent: 0,
          aliases: ['FX']
        }, {
          denom: 'WFX',
          exponent: 18
        }],
      typeAsset: 'ics20',
      base: 'ibc/2B30802A0B03F91E4E16D6175C9B70F2911377C1CAE9E50FF011C821465463F9',
      name: 'f(x)Core',
      display: 'WFX',
      symbol: 'FX',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'fxcore',
            baseDenom: 'FX',
            channelId: 'channel-19'
          },
          chain: {
            channelId: 'channel-2716',
            path: 'transfer/channel-2716/FX'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/fxcore/images/fx.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/fxcore/images/fx.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/fxcore/images/fx.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/fxcore/images/fx.svg'
        }]
    },
    {
      description: 'Bitcoin. On Cosmos.',
      denomUnits: [{
          denom: 'ibc/75345531D87BD90BF108BE7240BD721CB2CB0A1F16D4EBA71B09EC3C43E15C8F',
          exponent: 0,
          aliases: ['usat']
        }, {
          denom: 'nbtc',
          exponent: 14
        }],
      typeAsset: 'ics20',
      base: 'ibc/75345531D87BD90BF108BE7240BD721CB2CB0A1F16D4EBA71B09EC3C43E15C8F',
      name: 'Nomic Bitcoin',
      display: 'nbtc',
      symbol: 'nBTC',
      traces: [{
          type: 'bridge',
          counterparty: {
            chainName: 'bitcoin',
            baseDenom: 'sat'
          },
          provider: 'Nomic'
        }, {
          type: 'ibc',
          counterparty: {
            chainName: 'nomic',
            baseDenom: 'usat',
            channelId: 'channel-1'
          },
          chain: {
            channelId: 'channel-6897',
            path: 'transfer/channel-6897/usat'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nomic/images/nbtc.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nomic/images/nbtc.svg'
      },
      images: [{
          imageSync: {
            chainName: 'nomic',
            baseDenom: 'usat'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nomic/images/nbtc.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nomic/images/nbtc.svg'
        }]
    },
    {
      description: 'The native token of Nois',
      denomUnits: [{
          denom: 'ibc/6928AFA9EA721938FED13B051F9DBF1272B16393D20C49EA5E4901BB76D94A90',
          exponent: 0,
          aliases: ['unois']
        }, {
          denom: 'nois',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/6928AFA9EA721938FED13B051F9DBF1272B16393D20C49EA5E4901BB76D94A90',
      name: 'Nois',
      display: 'nois',
      symbol: 'NOIS',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'nois',
            baseDenom: 'unois',
            channelId: 'channel-37'
          },
          chain: {
            channelId: 'channel-8277',
            path: 'transfer/channel-8277/unois'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nois/images/nois.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nois/images/nois.svg'
      },
      images: [{
          imageSync: {
            chainName: 'nois',
            baseDenom: 'unois'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nois/images/nois.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nois/images/nois.svg'
        }],
      keywords: [
        'nois',
        'randomness',
        'drand',
        'wasm'
      ]
    },
    {
      description: 'Margined Power Token sqOSMO',
      denomUnits: [{
          denom: 'factory/osmo1g8qypve6l95xmhgc0fddaecerffymsl7kn9muw/squosmo',
          exponent: 0
        }, {
          denom: 'sqosmo',
          exponent: 6
        }],
      typeAsset: 'sdk.coin',
      base: 'factory/osmo1g8qypve6l95xmhgc0fddaecerffymsl7kn9muw/squosmo',
      name: 'OSMO Squared',
      display: 'sqosmo',
      symbol: 'sqOSMO',
      logoURIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/sqosmo.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/sqosmo.svg'
        }]
    },
    {
      description: 'The Revenue & Governance token of Unstake.fi',
      denomUnits: [{
          denom: 'ibc/F74225B0AFD2F675AF56E9BE3F235486BCDE5C5E09AA88A97AFD2E052ABFE04C',
          exponent: 0,
          aliases: ['factory/kujira1aaudpfr9y23lt9d45hrmskphpdfaq9ajxd3ukh/unstk']
        }, {
          denom: 'nstk',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/F74225B0AFD2F675AF56E9BE3F235486BCDE5C5E09AA88A97AFD2E052ABFE04C',
      name: 'Unstake Fi',
      display: 'nstk',
      symbol: 'NSTK',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'kujira',
            baseDenom: 'factory/kujira1aaudpfr9y23lt9d45hrmskphpdfaq9ajxd3ukh/unstk',
            channelId: 'channel-3'
          },
          chain: {
            channelId: 'channel-259',
            path: 'transfer/channel-259/factory:kujira1aaudpfr9y23lt9d45hrmskphpdfaq9ajxd3ukh:unstk'
          }
        }],
      logoURIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/nstk.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/nstk.svg'
        }]
    },
    {
      description: 'ohhNFT LP token.',
      denomUnits: [{
          denom: 'ibc/71DAA4CAFA4FE2F9803ABA0696BA5FC0EFC14305A2EA8B4E01880DB851B1EC02',
          exponent: 0,
          aliases: ['factory/stars16da2uus9zrsy83h23ur42v3lglg5rmyrpqnju4/uBRNCH']
        }, {
          denom: 'BRNCH',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/71DAA4CAFA4FE2F9803ABA0696BA5FC0EFC14305A2EA8B4E01880DB851B1EC02',
      name: 'Branch',
      display: 'BRNCH',
      symbol: 'BRNCH',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'stargaze',
            baseDenom: 'factory/stars16da2uus9zrsy83h23ur42v3lglg5rmyrpqnju4/uBRNCH',
            channelId: 'channel-0'
          },
          chain: {
            channelId: 'channel-75',
            path: 'transfer/channel-75/factory/stars16da2uus9zrsy83h23ur42v3lglg5rmyrpqnju4/uBRNCH'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/brnch.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/brnch.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/brnch.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/brnch.svg'
        }]
    },
    {
      description: 'wstETH is a wrapped version of stETH. As some DeFi protocols require a constant balance mechanism for tokens, wstETH keeps your balance of stETH fixed and uses an underlying share system to reflect your earned staking rewards.',
      denomUnits: [{
          denom: 'ibc/2F21E6D4271DE3F561F20A02CD541DAF7405B1E9CB3B9B07E3C2AC7D8A4338A5',
          exponent: 0,
          aliases: ['factory/neutron1ug740qrkquxzrk2hh29qrlx3sktkfml3je7juusc2te7xmvsscns0n2wry/wstETH']
        }, {
          denom: 'wstETH',
          exponent: 18
        }],
      typeAsset: 'ics20',
      base: 'ibc/2F21E6D4271DE3F561F20A02CD541DAF7405B1E9CB3B9B07E3C2AC7D8A4338A5',
      name: 'Wrapped Lido Staked Ether',
      display: 'wstETH',
      symbol: 'wstETH',
      traces: [
        {
          type: 'liquid-stake',
          counterparty: {
            chainName: 'ethereum',
            baseDenom: 'wei'
          },
          provider: 'Lido'
        },
        {
          type: 'wrapped',
          counterparty: {
            chainName: 'ethereum',
            baseDenom: '0xae7ab96520de3a18e5e111b5eaab095312d7fe84'
          },
          provider: 'Lido'
        },
        {
          type: 'additional-mintage',
          counterparty: {
            chainName: 'ethereum',
            baseDenom: '0x7f39c581f595b53c5cb19bd0b3f8da6c935e2ca0'
          },
          provider: 'Lido'
        },
        {
          type: 'ibc',
          counterparty: {
            chainName: 'neutron',
            baseDenom: 'factory/neutron1ug740qrkquxzrk2hh29qrlx3sktkfml3je7juusc2te7xmvsscns0n2wry/wstETH',
            channelId: 'channel-10'
          },
          chain: {
            channelId: 'channel-874',
            path: 'transfer/channel-874/factory/neutron1ug740qrkquxzrk2hh29qrlx3sktkfml3je7juusc2te7xmvsscns0n2wry/wstETH'
          }
        }
      ],
      logoURIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/wsteth.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/wsteth.svg'
        }]
    },
    {
      description: 'Margined Power Token sqATOM',
      denomUnits: [{
          denom: 'factory/osmo1g8qypve6l95xmhgc0fddaecerffymsl7kn9muw/sqatom',
          exponent: 0
        }, {
          denom: 'sqatom',
          exponent: 6
        }],
      typeAsset: 'sdk.coin',
      base: 'factory/osmo1g8qypve6l95xmhgc0fddaecerffymsl7kn9muw/sqatom',
      name: 'ATOM Squared',
      display: 'sqatom',
      symbol: 'sqATOM',
      logoURIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/sqatom.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/sqatom.svg'
        }]
    },
    {
      description: 'Margined Power Token sqBTC',
      denomUnits: [{
          denom: 'factory/osmo1g8qypve6l95xmhgc0fddaecerffymsl7kn9muw/sqbtc',
          exponent: 0
        }, {
          denom: 'sqbtc',
          exponent: 6
        }],
      typeAsset: 'sdk.coin',
      base: 'factory/osmo1g8qypve6l95xmhgc0fddaecerffymsl7kn9muw/sqbtc',
      name: 'BTC Squared',
      display: 'sqbtc',
      symbol: 'sqBTC',
      logoURIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/sqbtc.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/sqbtc.svg'
        }],
      keywords: ['osmosis_unlisted']
    },
    {
      description: 'QWOYN is the native governance token for Qwoyn Network',
      denomUnits: [{
          denom: 'ibc/09FAF1E04435E14C68DE7AB0D03C521C92975C792DB12B2EA390BAA2E06B3F3D',
          exponent: 0,
          aliases: ['uqwoyn']
        }, {
          denom: 'qwoyn',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/09FAF1E04435E14C68DE7AB0D03C521C92975C792DB12B2EA390BAA2E06B3F3D',
      name: 'Qwoyn',
      display: 'qwoyn',
      symbol: 'QWOYN',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'qwoyn',
            baseDenom: 'uqwoyn',
            channelId: 'channel-0'
          },
          chain: {
            channelId: 'channel-880',
            path: 'transfer/channel-880/uqwoyn'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/qwoyn/images/qwoyn.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/qwoyn/images/qwoyn.png'
        }],
      keywords: ['gaming']
    },
    {
      description: 'The liquid staking token of Bostrom',
      denomUnits: [{
          denom: 'ibc/4F3B0EC2FE2D370D10C3671A1B7B06D2A964C721470C305CBB846ED60E6CAA20',
          exponent: 0,
          aliases: ['hydrogen']
        }],
      typeAsset: 'ics20',
      base: 'ibc/4F3B0EC2FE2D370D10C3671A1B7B06D2A964C721470C305CBB846ED60E6CAA20',
      name: 'Bostrom Hydrogen',
      display: 'ibc/4F3B0EC2FE2D370D10C3671A1B7B06D2A964C721470C305CBB846ED60E6CAA20',
      symbol: 'HYDROGEN',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'bostrom',
            baseDenom: 'hydrogen',
            channelId: 'channel-2'
          },
          chain: {
            channelId: 'channel-95',
            path: 'transfer/channel-95/hydrogen'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bostrom/images/hydrogen.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bostrom/images/hydrogen.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bostrom/images/hydrogen.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bostrom/images/hydrogen.svg'
        }]
    },
    {
      description: 'The staking token of Cyber',
      denomUnits: [{
          denom: 'ibc/BCDB35B7390806F35E716D275E1E017999F8281A81B6F128F087EF34D1DFA761',
          exponent: 0,
          aliases: ['tocyb']
        }],
      typeAsset: 'ics20',
      base: 'ibc/BCDB35B7390806F35E716D275E1E017999F8281A81B6F128F087EF34D1DFA761',
      name: 'Bostrom Tocyb',
      display: 'ibc/BCDB35B7390806F35E716D275E1E017999F8281A81B6F128F087EF34D1DFA761',
      symbol: 'TOCYB',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'bostrom',
            baseDenom: 'tocyb',
            channelId: 'channel-2'
          },
          chain: {
            channelId: 'channel-95',
            path: 'transfer/channel-95/tocyb'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bostrom/images/tocyb.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bostrom/images/tocyb.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bostrom/images/tocyb.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bostrom/images/tocyb.svg'
        }]
    },
    {
      description: 'The resource token of Bostrom',
      denomUnits: [{
          denom: 'ibc/D3A1900B2B520E45608B5671ADA461E1109628E89B4289099557C6D3996F7DAA',
          exponent: 0,
          aliases: ['millivolt']
        }, {
          denom: 'volt',
          exponent: 3,
          aliases: ['volt']
        }],
      typeAsset: 'ics20',
      base: 'ibc/D3A1900B2B520E45608B5671ADA461E1109628E89B4289099557C6D3996F7DAA',
      name: 'Bostrom Volt',
      display: 'volt',
      symbol: 'V',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'bostrom',
            baseDenom: 'millivolt',
            channelId: 'channel-2'
          },
          chain: {
            channelId: 'channel-95',
            path: 'transfer/channel-95/millivolt'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bostrom/images/volt.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bostrom/images/volt.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bostrom/images/volt.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bostrom/images/volt.svg'
        }]
    },
    {
      description: 'The resource token of Bostrom',
      denomUnits: [{
          denom: 'ibc/020F5162B7BC40656FC5432622647091F00D53E82EE8D21757B43D3282F25424',
          exponent: 0,
          aliases: ['milliampere']
        }, {
          denom: 'ampere',
          exponent: 3,
          aliases: ['ampere']
        }],
      typeAsset: 'ics20',
      base: 'ibc/020F5162B7BC40656FC5432622647091F00D53E82EE8D21757B43D3282F25424',
      name: 'Bostrom Ampere',
      display: 'ampere',
      symbol: 'A',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'bostrom',
            baseDenom: 'milliampere',
            channelId: 'channel-2'
          },
          chain: {
            channelId: 'channel-95',
            path: 'transfer/channel-95/milliampere'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bostrom/images/ampere.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bostrom/images/ampere.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bostrom/images/ampere.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bostrom/images/ampere.svg'
        }]
    },
    {
      description: 'The native token of SOURCE Chain',
      denomUnits: [{
          denom: 'ibc/E7905742CE2EA4EA5D592527DC89220C59B617DE803939FE7293805A64B484D7',
          exponent: 0,
          aliases: ['usource']
        }, {
          denom: 'source',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/E7905742CE2EA4EA5D592527DC89220C59B617DE803939FE7293805A64B484D7',
      name: 'Source',
      display: 'source',
      symbol: 'SOURCE',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'source',
            baseDenom: 'usource',
            channelId: 'channel-0'
          },
          chain: {
            channelId: 'channel-8945',
            path: 'transfer/channel-8945/usource'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/source/images/source.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/source/images/source.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/source/images/source.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/source/images/source.svg'
        }]
    },
    {
      description: 'Pyth is a protocol that allows market participants to publish pricing information on-chain for others to use. The protocol is an interaction between three parties:\n-Publishers submit pricing information to Pyth\'s oracle program. Pyth has multiple data publishers for every product to improve the accuracy and robustness of the system.\n-Pyth\'s oracle program combines publishers\' data to produce a single aggregate price and confidence interval.\nConsumers read the price information produced by the oracle program.\n\nPyth\'s oracle program runs simultaneously on both Solana mainnet and Pythnet. Each instance of the program is responsible for its own set of price feeds. Solana Price Feeds are available for use by Solana protocols. In this case, since the oracle program itself runs on Solana, the resulting prices are immediately available to consumers without requiring any additional work. Pythnet Price Feeds are available on 12+ blockchains. The prices constructed on Pythnet are transferred cross-chain to reach consumers on these blockchains.\n\nIn both cases, the critical component of the system is the oracle program that combines the data from each individual publisher. This program maintains a number of different Solana accounts that list the products on Pyth and their current price data. Publishers publish their price and confidence by interacting with the oracle program on every slot. The program stores this information in its accounts. The first price update in a slot additionally triggers price aggregation, which combines the price data from the previous slot into a single aggregate price and confidence interval. This aggregate price is written to the Solana account where it is readable by other on-chain programs and available for transmission to other blockchains.',
      denomUnits: [{
          denom: 'ibc/E42006ED917C769EDE1B474650EEA6BFE3F97958912B9206DD7010A28D01D9D5',
          exponent: 0,
          aliases: ['HZ1JovNiVvGrGNiiYvEozEVgZ58xaU3RKwX8eACQBCt3', 'factory/wormhole14ejqjyq8um4p3xfqj74yld5waqljf88fz25yxnma0cngspxe3les00fpjx/B8ohBnfisop27exk2gtNABJyYjLwQA7ogrp5uNzvZCoy']
        }, {
          denom: 'wormhole/B8ohBnfisop27exk2gtNABJyYjLwQA7ogrp5uNzvZCoy/6',
          exponent: 6,
          aliases: ['pyth']
        }],
      typeAsset: 'ics20',
      base: 'ibc/E42006ED917C769EDE1B474650EEA6BFE3F97958912B9206DD7010A28D01D9D5',
      name: 'Pyth Network',
      display: 'wormhole/B8ohBnfisop27exk2gtNABJyYjLwQA7ogrp5uNzvZCoy/6',
      symbol: 'PYTH',
      traces: [{
          type: 'bridge',
          counterparty: {
            chainName: 'solana',
            baseDenom: 'HZ1JovNiVvGrGNiiYvEozEVgZ58xaU3RKwX8eACQBCt3'
          },
          provider: 'Wormhole'
        }, {
          type: 'ibc',
          counterparty: {
            chainName: 'gateway',
            baseDenom: 'factory/wormhole14ejqjyq8um4p3xfqj74yld5waqljf88fz25yxnma0cngspxe3les00fpjx/B8ohBnfisop27exk2gtNABJyYjLwQA7ogrp5uNzvZCoy',
            channelId: 'channel-3'
          },
          chain: {
            channelId: 'channel-2186',
            path: 'transfer/channel-2186/factory/wormhole14ejqjyq8um4p3xfqj74yld5waqljf88fz25yxnma0cngspxe3les00fpjx/B8ohBnfisop27exk2gtNABJyYjLwQA7ogrp5uNzvZCoy'
          }
        }],
      logoURIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/solana/images/pyth.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/solana/images/pyth.svg'
        }]
    },
    {
      description: 'PSTAKE Liquid-Staked OSMO',
      denomUnits: [{
          denom: 'ibc/ECBE78BF7677320A93E7BA1761D144BCBF0CBC247C290C049655E106FE5DC68E',
          exponent: 0,
          aliases: ['stk/uosmo']
        }, {
          denom: 'stkosmo',
          exponent: 6,
          aliases: ['stk/osmo']
        }],
      typeAsset: 'ics20',
      base: 'ibc/ECBE78BF7677320A93E7BA1761D144BCBF0CBC247C290C049655E106FE5DC68E',
      name: 'PSTAKE staked OSMO',
      display: 'stkosmo',
      symbol: 'stkOSMO',
      traces: [{
          type: 'liquid-stake',
          counterparty: {
            chainName: 'osmosis',
            baseDenom: 'uosmo'
          },
          provider: 'pSTAKE'
        }, {
          type: 'ibc',
          counterparty: {
            chainName: 'persistence',
            baseDenom: 'stk/uosmo',
            channelId: 'channel-6'
          },
          chain: {
            channelId: 'channel-4',
            path: 'transfer/channel-4/stk/uosmo'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/stkosmo.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/stkosmo.svg'
      },
      images: [{
          imageSync: {
            chainName: 'persistence',
            baseDenom: 'stk/uosmo'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/stkosmo.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/stkosmo.svg'
        }]
    },
    {
      description: 'Levana Well-funded Perps is a protocol for perpetual swaps, which are leveraged trading contracts.',
      extendedDescription: 'Levana Well-funded Perps is a protocol for perpetual swaps, which are leveraged trading contracts. It aims to manage risk and provide benefits to both traders and liquidity providers.\n\nFor traders, Levana\'s solution is to make all positions "well-funded," meaning that the maximum profit for each position is locked in advance. This eliminates the possibility of bad debt and insolvency, providing greater security.\n\nLiquidity providers, on the other hand, receive a yield for taking on the risk of market instability. They supply funds that act as collateral, and in return, they earn a fee with a risk premium.\n\nThe protocol addresses the issues with existing perpetual swap models, such as the virtual AMM. These models rely on complex mechanisms to maintain price stability, but they have limitations and can be risky in volatile markets.\n\nBy separating different trading pairs and creating a decentralized market for liquidity, Levana reduces the risk of contagion between different markets. This also makes it easier to expand to other blockchain networks.\n\nOverall, Levana\'s perpetual swaps protocol offers a reliable and secure platform for traders and liquidity providers. It ensures fair settlement, minimizes risks, and allows for the development of additional financial protocols on top of tokenized positions.',
      denomUnits: [{
          denom: 'factory/osmo1mlng7pz4pnyxtpq0akfwall37czyk9lukaucsrn30ameplhhshtqdvfm5c/ulvn',
          exponent: 0
        }, {
          denom: 'lvn',
          exponent: 6
        }],
      typeAsset: 'sdk.coin',
      base: 'factory/osmo1mlng7pz4pnyxtpq0akfwall37czyk9lukaucsrn30ameplhhshtqdvfm5c/ulvn',
      name: 'Levana',
      display: 'lvn',
      symbol: 'LVN',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/levana.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/levana.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/levana.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/levana.svg'
        }],
      coingeckoId: 'levana-protocol'
    },
    {
      description: 'Puppy',
      denomUnits: [{
          denom: 'ibc/46AC07DBFF1352EC94AF5BD4D23740D92D9803A6B41F6E213E77F3A1143FB963',
          exponent: 0,
          aliases: ['cw20:chihuahua1yl8z39ugle8s02fpwkhh293509q5xcpalmdzc4amvchz8nkexrmsy95gef']
        }, {
          denom: 'puppy',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/46AC07DBFF1352EC94AF5BD4D23740D92D9803A6B41F6E213E77F3A1143FB963',
      name: 'Puppy',
      display: 'puppy',
      symbol: 'PUPPY',
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            chainName: 'chihuahua',
            baseDenom: 'cw20:chihuahua1yl8z39ugle8s02fpwkhh293509q5xcpalmdzc4amvchz8nkexrmsy95gef',
            port: 'wasm.chihuahua1jwkag4yvhyj9fuddtkygvavya8hmdjuzmgxwg9vp3lw9twv6lrcq9mgl52',
            channelId: 'channel-73'
          },
          chain: {
            port: 'transfer',
            channelId: 'channel-11348',
            path: 'transfer/channel-11348/cw20:chihuahua1yl8z39ugle8s02fpwkhh293509q5xcpalmdzc4amvchz8nkexrmsy95gef'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/chihuahua/images/puppyhuahua_logo.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/chihuahua/images/puppyhuahua_logo.png'
        }],
      keywords: ['osmosis_unstable']
    },
    {
      description: 'The cutest NEWT token on Neutron chain.',
      denomUnits: [{
          denom: 'ibc/BF685448E564B5A4AC8F6E0493A0B979D0E0BF5EC11F7E15D25A0A2160C944DD',
          exponent: 0,
          aliases: ['unewt', 'factory/neutron1p8d89wvxyjcnawmgw72klknr3lg9gwwl6ypxda/newt']
        }, {
          denom: 'newt',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/BF685448E564B5A4AC8F6E0493A0B979D0E0BF5EC11F7E15D25A0A2160C944DD',
      name: 'Newt',
      display: 'newt',
      symbol: 'NEWT',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'neutron',
            baseDenom: 'factory/neutron1p8d89wvxyjcnawmgw72klknr3lg9gwwl6ypxda/newt',
            channelId: 'channel-10'
          },
          chain: {
            channelId: 'channel-874',
            path: 'transfer/channel-874/factory/neutron1p8d89wvxyjcnawmgw72klknr3lg9gwwl6ypxda/newt'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/newt.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/newt.png'
        }]
    },
    {
      description: 'MilkyWay\'s liquid staked TIA',
      denomUnits: [{
          denom: 'factory/osmo1f5vfcph2dvfeqcqkhetwv75fda69z7e5c2dldm3kvgj23crkv6wqcn47a0/umilkTIA',
          exponent: 0
        }, {
          denom: 'milkTIA',
          exponent: 6
        }],
      typeAsset: 'sdk.coin',
      base: 'factory/osmo1f5vfcph2dvfeqcqkhetwv75fda69z7e5c2dldm3kvgj23crkv6wqcn47a0/umilkTIA',
      name: 'milkTIA',
      display: 'milkTIA',
      symbol: 'milkTIA',
      traces: [{
          type: 'liquid-stake',
          counterparty: {
            chainName: 'celestia',
            baseDenom: 'utia'
          },
          provider: 'MilkyWay'
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/milktia.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/milktia.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/milktia.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/milktia.svg'
        }],
      coingeckoId: 'milkyway-staked-tia'
    },
    {
      description: 'ASH',
      denomUnits: [{
          denom: 'ibc/4976049456D261659D0EC499CC9C2391D3C7D1128A0B9FB0BBF2842D1B2BC7BC',
          exponent: 0,
          aliases: ['factory/migaloo1erul6xyq0gk6ws98ncj7lnq9l4jn4gnnu9we73gdz78yyl2lr7qqrvcgup/ash']
        }, {
          denom: 'ASH',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/4976049456D261659D0EC499CC9C2391D3C7D1128A0B9FB0BBF2842D1B2BC7BC',
      name: 'ASH',
      display: 'ASH',
      symbol: 'ASH',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'migaloo',
            baseDenom: 'factory/migaloo1erul6xyq0gk6ws98ncj7lnq9l4jn4gnnu9we73gdz78yyl2lr7qqrvcgup/ash',
            channelId: 'channel-5'
          },
          chain: {
            channelId: 'channel-642',
            path: 'transfer/channel-642/factory/migaloo1erul6xyq0gk6ws98ncj7lnq9l4jn4gnnu9we73gdz78yyl2lr7qqrvcgup/ash'
          }
        }],
      logoURIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/ash.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/ash.svg'
        }]
    },
    {
      description: 'RAC',
      denomUnits: [{
          denom: 'ibc/DDF1CD4CDC14AE2D6A3060193624605FF12DEE71CF1F8C19EEF35E9447653493',
          exponent: 0,
          aliases: ['factory/migaloo1eqntnl6tzcj9h86psg4y4h6hh05g2h9nj8e09l/urac']
        }, {
          denom: 'RAC',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/DDF1CD4CDC14AE2D6A3060193624605FF12DEE71CF1F8C19EEF35E9447653493',
      name: 'RAC',
      display: 'RAC',
      symbol: 'RAC',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'migaloo',
            baseDenom: 'factory/migaloo1eqntnl6tzcj9h86psg4y4h6hh05g2h9nj8e09l/urac',
            channelId: 'channel-5'
          },
          chain: {
            channelId: 'channel-642',
            path: 'transfer/channel-642/factory/migaloo1eqntnl6tzcj9h86psg4y4h6hh05g2h9nj8e09l/urac'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/rac.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/rac.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/rac.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/rac.svg'
        }]
    },
    {
      description: 'GUPPY',
      denomUnits: [{
          denom: 'ibc/42A9553A7770F3D7B62F3A82AF04E7719B4FD6EAF31BE5645092AAC4A6C2201D',
          exponent: 0,
          aliases: ['factory/migaloo1etlu2h30tjvv8rfa4fwdc43c92f6ul5w9acxzk/uguppy']
        }, {
          denom: 'GUPPY',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/42A9553A7770F3D7B62F3A82AF04E7719B4FD6EAF31BE5645092AAC4A6C2201D',
      name: 'GUPPY',
      display: 'GUPPY',
      symbol: 'GUPPY',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'migaloo',
            baseDenom: 'factory/migaloo1etlu2h30tjvv8rfa4fwdc43c92f6ul5w9acxzk/uguppy',
            channelId: 'channel-5'
          },
          chain: {
            channelId: 'channel-642',
            path: 'transfer/channel-642/factory/migaloo1etlu2h30tjvv8rfa4fwdc43c92f6ul5w9acxzk/uguppy'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/guppy.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/guppy.png'
        }]
    },
    {
      description: 'The native EVM, governance and staking token of the Haqq Network',
      denomUnits: [{
          denom: 'ibc/69110FF673D70B39904FF056CFDFD58A90BEC3194303F45C32CB91B8B0A738EA',
          exponent: 0,
          aliases: ['aISLM']
        }, {
          denom: 'ISLM',
          exponent: 18
        }],
      typeAsset: 'ics20',
      base: 'ibc/69110FF673D70B39904FF056CFDFD58A90BEC3194303F45C32CB91B8B0A738EA',
      name: 'Haqq Network',
      display: 'ISLM',
      symbol: 'ISLM',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'haqq',
            baseDenom: 'aISLM',
            channelId: 'channel-2'
          },
          chain: {
            channelId: 'channel-1575',
            path: 'transfer/channel-1575/aISLM'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/haqq/images/islm.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/haqq/images/islm.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/haqq/images/islm.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/haqq/images/islm.svg'
        }]
    },
    {
      description: '$AUTISM exists to celebrate autism as a superior biological tech stack for a changing world',
      denomUnits: [{
          denom: 'ibc/9DDF52A334F92BC57A9E0D59DFF9984EAC61D2A14E5162605DF601AA58FDFC6D',
          exponent: 0,
          aliases: ['factory/inj14lf8xm6fcvlggpa7guxzjqwjmtr24gnvf56hvz/autism']
        }, {
          denom: 'autism',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/9DDF52A334F92BC57A9E0D59DFF9984EAC61D2A14E5162605DF601AA58FDFC6D',
      name: 'Autism',
      display: 'autism',
      symbol: 'AUTISM',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'injective',
            baseDenom: 'factory/inj14lf8xm6fcvlggpa7guxzjqwjmtr24gnvf56hvz/autism',
            channelId: 'channel-8'
          },
          chain: {
            channelId: 'channel-122',
            path: 'transfer/channel-122/factory/inj14lf8xm6fcvlggpa7guxzjqwjmtr24gnvf56hvz/autism'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/autism.png'
      },
      images: [{
          imageSync: {
            chainName: 'injective',
            baseDenom: 'factory/inj14lf8xm6fcvlggpa7guxzjqwjmtr24gnvf56hvz/autism'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/autism.png'
        }],
      keywords: ['osmosis_unlisted']
    },
    {
      description: 'The PAGE token is used for actions in the PageDAO NFT literary ecosystem and for DAO governance.',
      denomUnits: [{
          denom: 'ibc/23A62409E4AD8133116C249B1FA38EED30E500A115D7B153109462CD82C1CD99',
          exponent: 0,
          aliases: ['gravity0x60e683C6514Edd5F758A55b6f393BeBBAfaA8d5e']
        }, {
          denom: 'page',
          exponent: 8
        }],
      typeAsset: 'ics20',
      base: 'ibc/23A62409E4AD8133116C249B1FA38EED30E500A115D7B153109462CD82C1CD99',
      name: 'Page',
      display: 'page',
      symbol: 'PAGE',
      traces: [{
          type: 'bridge',
          counterparty: {
            chainName: 'ethereum',
            baseDenom: '0x60e683C6514Edd5F758A55b6f393BeBBAfaA8d5e'
          },
          provider: 'Gravity Bridge'
        }, {
          type: 'ibc',
          counterparty: {
            chainName: 'gravitybridge',
            baseDenom: 'gravity0x60e683C6514Edd5F758A55b6f393BeBBAfaA8d5e',
            channelId: 'channel-10'
          },
          chain: {
            channelId: 'channel-144',
            path: 'transfer/channel-144/gravity0x60e683C6514Edd5F758A55b6f393BeBBAfaA8d5e'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/page.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/page.svg'
      },
      images: [{
          imageSync: {
            chainName: 'gravitybridge',
            baseDenom: 'gravity0x60e683C6514Edd5F758A55b6f393BeBBAfaA8d5e'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/page.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/page.svg'
        }]
    },
    {
      description: 'PURSE Token',
      denomUnits: [{
          denom: 'ibc/6FD2938076A4C1BB3A324A676E76B0150A4443DAE0E002FB62AC0E6B604B1519',
          exponent: 0,
          aliases: ['bsc0x29a63F4B209C29B4DC47f06FFA896F32667DAD2C']
        }, {
          denom: 'PURSE',
          exponent: 18
        }],
      typeAsset: 'ics20',
      base: 'ibc/6FD2938076A4C1BB3A324A676E76B0150A4443DAE0E002FB62AC0E6B604B1519',
      name: 'PURSE Token (Function X)',
      display: 'PURSE',
      symbol: 'PURSE',
      traces: [{
          type: 'bridge',
          counterparty: {
            chainName: 'binancesmartchain',
            baseDenom: '0x29a63F4B209C29B4DC47f06FFA896F32667DAD2C',
            contract: '0x84238c00c8313920826D798e3cF6793Ef4F610ad'
          },
          provider: 'Function X'
        }, {
          type: 'ibc',
          counterparty: {
            chainName: 'pundix',
            baseDenom: 'bsc0x29a63F4B209C29B4DC47f06FFA896F32667DAD2C',
            channelId: 'channel-1'
          },
          chain: {
            channelId: 'channel-12618',
            path: 'transfer/channel-12618/bsc0x29a63F4B209C29B4DC47f06FFA896F32667DAD2C'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pundix/images/purse-token-logo.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pundix/images/purse-token-logo.svg'
      },
      images: [{
          imageSync: {
            chainName: 'binancesmartchain',
            baseDenom: '0x29a63F4B209C29B4DC47f06FFA896F32667DAD2C'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pundix/images/purse-token-logo.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pundix/images/purse-token-logo.svg'
        }],
      keywords: ['osmosis_unlisted']
    },
    {
      description: 'The first meme coin on Injective. It’s a dog, but he has nunchucks',
      denomUnits: [{
          denom: 'ibc/183C0BB962D2F57C957E0B134CFA0AC9D6F755C02DE9DC2A59089BA23009DEC3',
          exponent: 0,
          aliases: ['factory/inj1xtel2knkt8hmc9dnzpjz6kdmacgcfmlv5f308w/ninja']
        }, {
          denom: 'NINJA',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/183C0BB962D2F57C957E0B134CFA0AC9D6F755C02DE9DC2A59089BA23009DEC3',
      name: 'Dog wif nunchucks',
      display: 'NINJA',
      symbol: 'NINJA',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'injective',
            baseDenom: 'factory/inj1xtel2knkt8hmc9dnzpjz6kdmacgcfmlv5f308w/ninja',
            channelId: 'channel-8'
          },
          chain: {
            channelId: 'channel-122',
            path: 'transfer/channel-122/factory/inj1xtel2knkt8hmc9dnzpjz6kdmacgcfmlv5f308w/ninja'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/ninja.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/ninja.png'
        }]
    },
    {
      description: 'Kleomedes Token',
      denomUnits: [{
          denom: 'ibc/5F5B7DA5ECC80F6C7A8702D525BB0B74279B1F7B8EFAE36E423D68788F7F39FF',
          exponent: 0,
          aliases: ['cw20:juno10gthz5ufgrpuk5cscve2f0hjp56wgp90psqxcrqlg4m9mcu9dh8q4864xy']
        }, {
          denom: 'kleo',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/5F5B7DA5ECC80F6C7A8702D525BB0B74279B1F7B8EFAE36E423D68788F7F39FF',
      name: 'Kleomedes',
      display: 'kleo',
      symbol: 'KLEO',
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            chainName: 'juno',
            baseDenom: 'cw20:juno10gthz5ufgrpuk5cscve2f0hjp56wgp90psqxcrqlg4m9mcu9dh8q4864xy',
            port: 'wasm.juno1v4887y83d6g28puzvt8cl0f3cdhd3y6y9mpysnsp3k8krdm7l6jqgm0rkn',
            channelId: 'channel-47'
          },
          chain: {
            port: 'transfer',
            channelId: 'channel-169',
            path: 'transfer/channel-169/cw20:juno10gthz5ufgrpuk5cscve2f0hjp56wgp90psqxcrqlg4m9mcu9dh8q4864xy'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/kleomedes.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/kleomedes.png'
        }]
    },
    {
      description: 'NYX Token (NYX) is the Nym Network\'s native token.',
      denomUnits: [{
          denom: 'ibc/1A611E8A3E4248106A1A5A80A64BFA812739435E8B9888EB3F652A21F029F317',
          exponent: 0,
          aliases: ['unyx']
        }, {
          denom: 'nyx',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/1A611E8A3E4248106A1A5A80A64BFA812739435E8B9888EB3F652A21F029F317',
      name: 'Nym',
      display: 'nyx',
      symbol: 'NYX',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'nyx',
            baseDenom: 'unyx',
            channelId: 'channel-8'
          },
          chain: {
            channelId: 'channel-15464',
            path: 'transfer/channel-15464/unyx'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nyx/images/nyx.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nyx/images/nyx.png'
        }],
      keywords: ['osmosis_unlisted']
    },
    {
      description: 'NYM Token (NYM) is the Nym Network\'s native utility token, used as the primary means to incentivize mixnet node operators.',
      denomUnits: [{
          denom: 'ibc/37CB3078432510EE57B9AFA8DBE028B33AE3280A144826FEAC5F2334CF2C5539',
          exponent: 0,
          aliases: ['unym']
        }, {
          denom: 'nym',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/37CB3078432510EE57B9AFA8DBE028B33AE3280A144826FEAC5F2334CF2C5539',
      name: 'NYM',
      display: 'nym',
      symbol: 'NYM',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'nyx',
            baseDenom: 'unym',
            channelId: 'channel-8'
          },
          chain: {
            channelId: 'channel-15464',
            path: 'transfer/channel-15464/unym'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nyx/images/nym.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nyx/images/nym.png'
        }]
    },
    {
      description: 'has a hat',
      denomUnits: [{
          denom: 'ibc/2FFE07C4B4EFC0DDA099A16C6AF3C9CCA653CC56077E87217A585D48794B0BC7',
          exponent: 0,
          aliases: ['factory/chihuahua1x4q2vkrz4dfgd9hcw0p5m2f2nuv2uqmt9xr8k2/achihuahuawifhat']
        }, {
          denom: 'achihuahuawifhat',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/2FFE07C4B4EFC0DDA099A16C6AF3C9CCA653CC56077E87217A585D48794B0BC7',
      name: 'Chihuahuawifhat',
      display: 'achihuahuawifhat',
      symbol: 'BADDOG',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'chihuahua',
            baseDenom: 'factory/chihuahua1x4q2vkrz4dfgd9hcw0p5m2f2nuv2uqmt9xr8k2/achihuahuawifhat',
            channelId: 'channel-7'
          },
          chain: {
            channelId: 'channel-113',
            path: 'transfer/channel-113/factory/chihuahua1x4q2vkrz4dfgd9hcw0p5m2f2nuv2uqmt9xr8k2/achihuahuawifhat'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/chihuahua/images/baddog.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/chihuahua/images/baddog.png'
        }]
    },
    {
      description: 'clownmaxxed store of value',
      denomUnits: [{
          denom: 'ibc/8C8F6349F656C943543C6B040377BE44123D01F712277815C3C13098BB98818C',
          exponent: 0,
          aliases: ['ucircus', 'factory/neutron170v88vrtnedesyfytuku257cggxc79rd7lwt7q/ucircus']
        }, {
          denom: 'circus',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/8C8F6349F656C943543C6B040377BE44123D01F712277815C3C13098BB98818C',
      name: 'AtomEconomicZone69JaeKwonInu',
      display: 'circus',
      symbol: 'CIRCUS',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'neutron',
            baseDenom: 'factory/neutron170v88vrtnedesyfytuku257cggxc79rd7lwt7q/ucircus',
            channelId: 'channel-10'
          },
          chain: {
            channelId: 'channel-874',
            path: 'transfer/channel-874/factory/neutron170v88vrtnedesyfytuku257cggxc79rd7lwt7q/ucircus'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/circus.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/circus.png'
        }]
    },
    {
      description: 'Governance and utility token for the Junø Apes NFT platform on Juno',
      denomUnits: [{
          denom: 'ibc/176DD560277BB0BD676260BE02EBAB697725CA85144D8A2BF286C6B5323DB5FE',
          exponent: 0,
          aliases: ['cw20:juno1zkwveux7y6fmsr88atf3cyffx96p0c96qr8tgcsj7vfnhx7sal3s3zu3ps']
        }, {
          denom: 'jape',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/176DD560277BB0BD676260BE02EBAB697725CA85144D8A2BF286C6B5323DB5FE',
      name: 'Junø Apes',
      display: 'jape',
      symbol: 'JAPE',
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            chainName: 'juno',
            baseDenom: 'cw20:juno1zkwveux7y6fmsr88atf3cyffx96p0c96qr8tgcsj7vfnhx7sal3s3zu3ps',
            port: 'wasm.juno1v4887y83d6g28puzvt8cl0f3cdhd3y6y9mpysnsp3k8krdm7l6jqgm0rkn',
            channelId: 'channel-47'
          },
          chain: {
            port: 'transfer',
            channelId: 'channel-169',
            path: 'transfer/channel-169/cw20:juno1zkwveux7y6fmsr88atf3cyffx96p0c96qr8tgcsj7vfnhx7sal3s3zu3ps'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/jape.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/jape.png'
        }]
    },
    {
      description: 'Woof',
      denomUnits: [{
          denom: 'ibc/9B8EC667B6DF55387DC0F3ACC4F187DA6921B0806ED35DE6B04DE96F5AB81F53',
          exponent: 0,
          aliases: ['factory/chihuahua13jawsn574rf3f0u5rhu7e8n6sayx5gkw3eddhp/uwoof']
        }, {
          denom: 'WOOF',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/9B8EC667B6DF55387DC0F3ACC4F187DA6921B0806ED35DE6B04DE96F5AB81F53',
      name: 'WOOF',
      display: 'WOOF',
      symbol: 'WOOF',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'chihuahua',
            baseDenom: 'factory/chihuahua13jawsn574rf3f0u5rhu7e8n6sayx5gkw3eddhp/uwoof',
            channelId: 'channel-7'
          },
          chain: {
            channelId: 'channel-113',
            path: 'transfer/channel-113/factory/chihuahua13jawsn574rf3f0u5rhu7e8n6sayx5gkw3eddhp/uwoof'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/chihuahua/images/woof.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/chihuahua/images/woof.png'
        }]
    },
    {
      description: 'The native coin of Sneaky Productions.',
      denomUnits: [{
          denom: 'ibc/94ED1F172BC633DFC56D7E26551D8B101ADCCC69052AC44FED89F97FF658138F',
          exponent: 0,
          aliases: ['factory/stars1xx5976njvxpl9n4v8huvff6cudhx7yuu8e7rt4/usneaky']
        }, {
          denom: 'sneaky',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/94ED1F172BC633DFC56D7E26551D8B101ADCCC69052AC44FED89F97FF658138F',
      name: 'Sneaky Productions',
      display: 'sneaky',
      symbol: 'SNEAKY',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'stargaze',
            baseDenom: 'factory/stars1xx5976njvxpl9n4v8huvff6cudhx7yuu8e7rt4/usneaky',
            channelId: 'channel-0'
          },
          chain: {
            channelId: 'channel-75',
            path: 'transfer/channel-75/factory/stars1xx5976njvxpl9n4v8huvff6cudhx7yuu8e7rt4/usneaky'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/sneaky.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/sneaky.svg'
      },
      images: [{
          imageSync: {
            chainName: 'stargaze',
            baseDenom: 'factory/stars1xx5976njvxpl9n4v8huvff6cudhx7yuu8e7rt4/usneaky'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/sneaky.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/sneaky.svg'
        }]
    },
    {
      denomUnits: [{
          denom: 'factory/osmo1z0qrq605sjgcqpylfl4aa6s90x738j7m58wyatt0tdzflg2ha26q67k743/wbtc',
          exponent: 0,
          aliases: ['wbtc-satoshi']
        }, {
          denom: 'wbtc',
          exponent: 8
        }],
      typeAsset: 'sdk.coin',
      address: 'osmo1z0qrq605sjgcqpylfl4aa6s90x738j7m58wyatt0tdzflg2ha26q67k743',
      base: 'factory/osmo1z0qrq605sjgcqpylfl4aa6s90x738j7m58wyatt0tdzflg2ha26q67k743/wbtc',
      name: 'Wrapped Bitcoin',
      display: 'wbtc',
      symbol: 'WBTC',
      traces: [{
          type: 'bridge',
          counterparty: {
            chainName: 'bitcoin',
            baseDenom: 'sat'
          },
          provider: 'BitGo, Kyber, and Ren'
        }, {
          type: 'additional-mintage',
          counterparty: {
            chainName: 'ethereum',
            baseDenom: '0x2260fac5e5542a773aa44fbcfedf7c193bc2c599'
          },
          provider: 'BitGo, Kyber, and Ren'
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/wbtc.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/wbtc.svg'
      },
      images: [{
          imageSync: {
            chainName: 'ethereum',
            baseDenom: '0x2260fac5e5542a773aa44fbcfedf7c193bc2c599'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/wbtc.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/wbtc.svg'
        }],
      coingeckoId: 'wrapped-bitcoin'
    },
    {
      description: 'Baddest coin on Cosmos',
      denomUnits: [{
          denom: 'ibc/442A08C33AE9875DF90792FFA73B5728E1CAECE87AB4F26AE9B422F1E682ED23',
          exponent: 0,
          aliases: ['ubad', 'factory/neutron143wp6g8paqasnuuey6zyapucknwy9rhnld8hkr/bad']
        }, {
          denom: 'bad',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/442A08C33AE9875DF90792FFA73B5728E1CAECE87AB4F26AE9B422F1E682ED23',
      name: 'Badcoin',
      display: 'bad',
      symbol: 'BAD',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'neutron',
            baseDenom: 'factory/neutron143wp6g8paqasnuuey6zyapucknwy9rhnld8hkr/bad',
            channelId: 'channel-10'
          },
          chain: {
            channelId: 'channel-874',
            path: 'transfer/channel-874/factory/neutron143wp6g8paqasnuuey6zyapucknwy9rhnld8hkr/bad'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/bad.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/bad.png'
        }]
    },
    {
      description: 'Signal Art and Gaming on Juno',
      denomUnits: [{
          denom: 'ibc/4BDADBEDA31899036AB286E9901116496A9D85FB87B35A408C9D67C0DCAC660A',
          exponent: 0,
          aliases: ['cw20:juno14lycavan8gvpjn97aapzvwmsj8kyrvf644p05r0hu79namyj3ens87650k']
        }, {
          denom: 'sgnl',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/4BDADBEDA31899036AB286E9901116496A9D85FB87B35A408C9D67C0DCAC660A',
      name: 'Signal',
      display: 'sgnl',
      symbol: 'SGNL',
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            chainName: 'juno',
            baseDenom: 'cw20:juno14lycavan8gvpjn97aapzvwmsj8kyrvf644p05r0hu79namyj3ens87650k',
            port: 'wasm.juno1v4887y83d6g28puzvt8cl0f3cdhd3y6y9mpysnsp3k8krdm7l6jqgm0rkn',
            channelId: 'channel-47'
          },
          chain: {
            port: 'transfer',
            channelId: 'channel-169',
            path: 'transfer/channel-169/cw20:juno14lycavan8gvpjn97aapzvwmsj8kyrvf644p05r0hu79namyj3ens87650k'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/sgnl.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/sgnl.png'
        }]
    },
    {
      description: 'The first native memecoin on Osmosis. Crafted by the deftest of hands in the lab of lunacy. It\'s scientifically anarchic, professionally foolish, and your ticket to the madhouse.',
      denomUnits: [{
          denom: 'factory/osmo1pfyxruwvtwk00y8z06dh2lqjdj82ldvy74wzm3/WOSMO',
          exponent: 0
        }, {
          denom: 'WOSMO',
          exponent: 6
        }],
      typeAsset: 'sdk.coin',
      address: 'osmo1pfyxruwvtwk00y8z06dh2lqjdj82ldvy74wzm3',
      base: 'factory/osmo1pfyxruwvtwk00y8z06dh2lqjdj82ldvy74wzm3/WOSMO',
      name: 'WOSMO',
      display: 'WOSMO',
      symbol: 'WOSMO',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/wosmo.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/wosmo.png'
        }]
    },
    {
      description: 'Margined Power Token sqTIA',
      denomUnits: [{
          denom: 'factory/osmo1g8qypve6l95xmhgc0fddaecerffymsl7kn9muw/sqtia',
          exponent: 0
        }, {
          denom: 'sqtia',
          exponent: 6
        }],
      typeAsset: 'sdk.coin',
      base: 'factory/osmo1g8qypve6l95xmhgc0fddaecerffymsl7kn9muw/sqtia',
      name: 'TIA Squared',
      display: 'sqtia',
      symbol: 'sqTIA',
      logoURIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/sqtia.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/sqtia.svg'
        }]
    },
    {
      description: 'The deflationary utility token of the Apollo DAO project',
      denomUnits: [{
          denom: 'ibc/73BB20AF857D1FE6E061D01CA13870872AD0C979497CAF71BEA25B1CBF6879F1',
          exponent: 0,
          aliases: ['uapollo', 'factory/neutron154gg0wtm2v4h9ur8xg32ep64e8ef0g5twlsgvfeajqwghdryvyqsqhgk8e/APOLLO']
        }, {
          denom: 'apollo',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/73BB20AF857D1FE6E061D01CA13870872AD0C979497CAF71BEA25B1CBF6879F1',
      name: 'Apollo DAO',
      display: 'apollo',
      symbol: 'APOLLO',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'neutron',
            baseDenom: 'factory/neutron154gg0wtm2v4h9ur8xg32ep64e8ef0g5twlsgvfeajqwghdryvyqsqhgk8e/APOLLO',
            channelId: 'channel-10'
          },
          chain: {
            channelId: 'channel-874',
            path: 'transfer/channel-874/factory/neutron154gg0wtm2v4h9ur8xg32ep64e8ef0g5twlsgvfeajqwghdryvyqsqhgk8e/APOLLO'
          }
        }],
      logoURIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/apollo.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/apollo.svg'
        }]
    },
    {
      description: 'Stride\'s liquid staked DYDX',
      denomUnits: [{
          denom: 'ibc/980E82A9F8E7CA8CD480F4577E73682A6D3855A267D1831485D7EBEF0E7A6C2C',
          exponent: 0,
          aliases: ['stadydx']
        }, {
          denom: 'stDYDX',
          exponent: 18
        }],
      typeAsset: 'ics20',
      base: 'ibc/980E82A9F8E7CA8CD480F4577E73682A6D3855A267D1831485D7EBEF0E7A6C2C',
      name: 'Stride Staked DYDX',
      display: 'stDYDX',
      symbol: 'stDYDX',
      traces: [{
          type: 'liquid-stake',
          counterparty: {
            chainName: 'dydx',
            baseDenom: 'adydx'
          },
          provider: 'Stride'
        }, {
          type: 'ibc',
          counterparty: {
            chainName: 'stride',
            baseDenom: 'stadydx',
            channelId: 'channel-5'
          },
          chain: {
            channelId: 'channel-326',
            path: 'transfer/channel-326/stadydx'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stdydx.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stdydx.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stdydx.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stdydx.svg'
        }]
    },
    {
      description: 'Stride\'s liquid staked TIA',
      denomUnits: [{
          denom: 'ibc/698350B8A61D575025F3ED13E9AC9C0F45C89DEFE92F76D5838F1D3C1A7FF7C9',
          exponent: 0,
          aliases: ['stutia']
        }, {
          denom: 'stTIA',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/698350B8A61D575025F3ED13E9AC9C0F45C89DEFE92F76D5838F1D3C1A7FF7C9',
      name: 'Stride Staked TIA',
      display: 'stTIA',
      symbol: 'stTIA',
      traces: [{
          type: 'liquid-stake',
          counterparty: {
            chainName: 'celestia',
            baseDenom: 'utia'
          },
          provider: 'Stride'
        }, {
          type: 'ibc',
          counterparty: {
            chainName: 'stride',
            baseDenom: 'stutia',
            channelId: 'channel-5'
          },
          chain: {
            channelId: 'channel-326',
            path: 'transfer/channel-326/stutia'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/sttia.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/sttia.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/sttia.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/sttia.svg'
        }]
    },
    {
      description: 'Stride\'s liquid staked SAGA',
      denomUnits: [{
          denom: 'ibc/2CD9F8161C3FC332E78EF0C25F6E684D09379FB2F56EF9267E7EC139642EC57B',
          exponent: 0,
          aliases: ['stusaga']
        }, {
          denom: 'stSAGA',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/2CD9F8161C3FC332E78EF0C25F6E684D09379FB2F56EF9267E7EC139642EC57B',
      name: 'Stride Staked SAGA',
      display: 'stSAGA',
      symbol: 'stSAGA',
      traces: [{
          type: 'liquid-stake',
          counterparty: {
            chainName: 'saga',
            baseDenom: 'usaga'
          },
          provider: 'Stride'
        }, {
          type: 'ibc',
          counterparty: {
            chainName: 'stride',
            baseDenom: 'stusaga',
            channelId: 'channel-5'
          },
          chain: {
            channelId: 'channel-326',
            path: 'transfer/channel-326/stusaga'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stsaga.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stsaga.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stsaga.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stsaga.svg'
        }]
    },
    {
      denomUnits: [{
          denom: 'ibc/C04DFC9BCD893E57F2BEFE40F63EFD18D2768514DBD5F63ABD2FF7F48FC01D36',
          exponent: 0,
          aliases: ['stinj']
        }, {
          denom: 'stINJ',
          exponent: 18
        }],
      typeAsset: 'ics20',
      base: 'ibc/C04DFC9BCD893E57F2BEFE40F63EFD18D2768514DBD5F63ABD2FF7F48FC01D36',
      name: 'Stride Staked INJ',
      display: 'stINJ',
      symbol: 'stINJ',
      traces: [{
          type: 'liquid-stake',
          counterparty: {
            chainName: 'injective',
            baseDenom: 'inj'
          },
          provider: 'Stride'
        }, {
          type: 'ibc',
          counterparty: {
            chainName: 'stride',
            baseDenom: 'stinj',
            channelId: 'channel-5'
          },
          chain: {
            channelId: 'channel-326',
            path: 'transfer/channel-326/stinj'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stinj.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stinj.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stinj.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stinj.svg'
        }]
    },
    {
      description: 'GLTO-ERC20 on injective',
      denomUnits: [{
          denom: 'ibc/072E5B3D6F278B3E6A9C51D7EAD1A737148609512C5EBE8CBCB5663264A0DDB7',
          exponent: 0,
          aliases: ['peggy0xd73175f9eb15eee81745d367ae59309Ca2ceb5e2']
        }, {
          denom: 'glto',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/072E5B3D6F278B3E6A9C51D7EAD1A737148609512C5EBE8CBCB5663264A0DDB7',
      name: 'Gelotto (Injective)',
      display: 'glto',
      symbol: 'injective.GLTO',
      traces: [
        {
          type: 'additional-mintage',
          counterparty: {
            chainName: 'juno',
            baseDenom: 'cw20:juno1j0a9ymgngasfn3l5me8qpd53l5zlm9wurfdk7r65s5mg6tkxal3qpgf5se'
          },
          provider: 'Gelotto'
        },
        {
          type: 'bridge',
          counterparty: {
            chainName: 'ethereum',
            baseDenom: '0xd73175f9eb15eee81745d367ae59309Ca2ceb5e2'
          },
          provider: 'Peggy'
        },
        {
          type: 'ibc',
          counterparty: {
            chainName: 'injective',
            baseDenom: 'peggy0xd73175f9eb15eee81745d367ae59309Ca2ceb5e2',
            channelId: 'channel-8'
          },
          chain: {
            channelId: 'channel-122',
            path: 'transfer/channel-122/peggy0xd73175f9eb15eee81745d367ae59309Ca2ceb5e2'
          }
        }
      ],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/glto.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/glto.svg'
      },
      images: [{
          imageSync: {
            chainName: 'ethereum',
            baseDenom: '0xd73175f9eb15eee81745d367ae59309Ca2ceb5e2'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/glto.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/glto.svg'
        }]
    },
    {
      description: 'The native governance and staking token of the Dymension Hub',
      denomUnits: [{
          denom: 'ibc/9A76CDF0CBCEF37923F32518FA15E5DC92B9F56128292BC4D63C4AEA76CBB110',
          exponent: 0,
          aliases: ['adym']
        }, {
          denom: 'dym',
          exponent: 18
        }],
      typeAsset: 'ics20',
      base: 'ibc/9A76CDF0CBCEF37923F32518FA15E5DC92B9F56128292BC4D63C4AEA76CBB110',
      name: 'Dymension Hub',
      display: 'dym',
      symbol: 'DYM',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'dymension',
            baseDenom: 'adym',
            channelId: 'channel-2'
          },
          chain: {
            channelId: 'channel-19774',
            path: 'transfer/channel-19774/adym'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dymension/images/dymension-logo.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dymension/images/dymension-logo.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dymension/images/dymension-logo.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dymension/images/dymension-logo.svg'
        }]
    },
    {
      description: 'Rapture insurance is the first ever P2P insurance platform on $OSMO. Get rewarded to take care of peoples loved ones after the Rapture.',
      denomUnits: [{
          denom: 'factory/osmo1279xudevmf5cw83vkhglct7jededp86k90k2le/RAPTR',
          exponent: 0
        }, {
          denom: 'RAPTR',
          exponent: 6
        }],
      typeAsset: 'sdk.coin',
      address: 'osmo1279xudevmf5cw83vkhglct7jededp86k90k2le',
      base: 'factory/osmo1279xudevmf5cw83vkhglct7jededp86k90k2le/RAPTR',
      name: 'RAPTR',
      display: 'RAPTR',
      symbol: 'RAPTR',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/RAPTR.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/RAPTR.png'
        }],
      keywords: ['osmosis_unlisted']
    },
    {
      description: 'Astroport is a neutral marketplace where anyone, from anywhere in the galaxy, can dock to trade their wares.',
      denomUnits: [{
          denom: 'ibc/C25A2303FE24B922DAFFDCE377AC5A42E5EF746806D32E2ED4B610DE85C203F7',
          exponent: 0,
          aliases: ['cw20:terra1nsuqsk6kh58ulczatwev87ttq2z6r3pusulg9r24mfj2fvtzd4uq3exn26']
        }, {
          denom: 'astro.cw20',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/C25A2303FE24B922DAFFDCE377AC5A42E5EF746806D32E2ED4B610DE85C203F7',
      name: 'Astroport CW20 Token',
      display: 'astro.cw20',
      symbol: 'ASTRO.cw20',
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            chainName: 'terra2',
            baseDenom: 'cw20:terra1nsuqsk6kh58ulczatwev87ttq2z6r3pusulg9r24mfj2fvtzd4uq3exn26',
            port: 'wasm.terra1jhfjnm39y3nn9l4520mdn4k5mw23nz0674c4gsvyrcr90z9tqcvst22fce',
            channelId: 'channel-392'
          },
          chain: {
            port: 'transfer',
            channelId: 'channel-21671',
            path: 'transfer/channel-21671/cw20:terra1nsuqsk6kh58ulczatwev87ttq2z6r3pusulg9r24mfj2fvtzd4uq3exn26'
          }
        }],
      logoURIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/astro-cw20.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/astro-cw20.svg'
        }]
    },
    {
      description: 'A clan of 11y bad kids crafting chaos on the Cosmos eco. One bad memecoin to rule them all  $BADKID. Airdropped to Badkids NFT holders and $STARS stakers. It\'s so bad, your wallet\'s throwing a tantrum for it.',
      denomUnits: [{
          denom: 'factory/osmo10n8rv8npx870l69248hnp6djy6pll2yuzzn9x8/BADKID',
          exponent: 0
        }, {
          denom: 'BADKID',
          exponent: 6
        }],
      typeAsset: 'sdk.coin',
      address: 'osmo10n8rv8npx870l69248hnp6djy6pll2yuzzn9x8',
      base: 'factory/osmo10n8rv8npx870l69248hnp6djy6pll2yuzzn9x8/BADKID',
      name: 'BADKID',
      display: 'BADKID',
      symbol: 'BADKID',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/badkid.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/badkid.png'
        }]
    },
    {
      description: 'Solana USD Coin (Wormhole), Solana USDC, factory/wormhole14ejqjyq8um4p3xfqj74yld5waqljf88fz25yxnma0cngspxe3les00fpjx/HJk1XMDRNUbRrpKkNZYui7SwWDMjXZAsySzqgyNcQoU3',
      denomUnits: [{
          denom: 'ibc/F08DE332018E8070CC4C68FE06E04E254F527556A614F5F8F9A68AF38D367E45',
          exponent: 0,
          aliases: ['factory/wormhole14ejqjyq8um4p3xfqj74yld5waqljf88fz25yxnma0cngspxe3les00fpjx/HJk1XMDRNUbRrpKkNZYui7SwWDMjXZAsySzqgyNcQoU3']
        }, {
          denom: 'wormhole/HJk1XMDRNUbRrpKkNZYui7SwWDMjXZAsySzqgyNcQoU3/6',
          exponent: 6,
          aliases: []
        }],
      typeAsset: 'ics20',
      base: 'ibc/F08DE332018E8070CC4C68FE06E04E254F527556A614F5F8F9A68AF38D367E45',
      name: 'Solana USD Coin (Wormhole)',
      display: 'wormhole/HJk1XMDRNUbRrpKkNZYui7SwWDMjXZAsySzqgyNcQoU3/6',
      symbol: 'solana.USDC.wh',
      traces: [
        {
          type: 'synthetic',
          counterparty: {
            chainName: 'forex',
            baseDenom: 'USD'
          },
          provider: 'Circle'
        },
        {
          type: 'additional-mintage',
          counterparty: {
            chainName: 'ethereum',
            baseDenom: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48'
          },
          provider: 'Circle'
        },
        {
          type: 'bridge',
          counterparty: {
            chainName: 'solana',
            baseDenom: 'EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v'
          },
          provider: 'Wormhole'
        },
        {
          type: 'ibc',
          counterparty: {
            chainName: 'gateway',
            baseDenom: 'factory/wormhole14ejqjyq8um4p3xfqj74yld5waqljf88fz25yxnma0cngspxe3les00fpjx/HJk1XMDRNUbRrpKkNZYui7SwWDMjXZAsySzqgyNcQoU3',
            channelId: 'channel-3'
          },
          chain: {
            channelId: 'channel-2186',
            path: 'transfer/channel-2186/factory/wormhole14ejqjyq8um4p3xfqj74yld5waqljf88fz25yxnma0cngspxe3les00fpjx/HJk1XMDRNUbRrpKkNZYui7SwWDMjXZAsySzqgyNcQoU3'
          }
        }
      ],
      logoURIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/solana.USDC.wh.svg',
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/solana.USDC.wh.png'
      },
      images: [{
          imageSync: {
            chainName: 'solana',
            baseDenom: 'EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdc.svg'
        }, {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/solana.USDC.wh.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/solana.USDC.wh.svg'
        }]
    },
    {
      description: 'The native staking and governance token of Humans.ai.',
      denomUnits: [{
          denom: 'ibc/35CECC330D11DD00FACB555D07687631E0BC7D226260CC5F015F6D7980819533',
          exponent: 0,
          aliases: ['aheart']
        }, {
          denom: 'heart',
          exponent: 18
        }],
      typeAsset: 'ics20',
      base: 'ibc/35CECC330D11DD00FACB555D07687631E0BC7D226260CC5F015F6D7980819533',
      name: 'Humans.ai',
      display: 'heart',
      symbol: 'HEART',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'humans',
            baseDenom: 'aheart',
            channelId: 'channel-4'
          },
          chain: {
            channelId: 'channel-20082',
            path: 'transfer/channel-20082/aheart'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/humans/images/heart-dark-mode.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/humans/images/heart-dark-mode.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/humans/images/heart-dark-mode.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/humans/images/heart-dark-mode.svg',
          theme: {
            darkMode: true
          }
        }]
    },
    {
      description: 'The token of Teledisko DAO.',
      denomUnits: [{
          denom: 'ibc/2BF9656CAB0384A31167DB9B0254F0FB1CB4346A229BD7E5CBDCBB911C3740F7',
          exponent: 0,
          aliases: ['erc20/0x1cFc8f1FE8D5668BAFF2724547EcDbd6f013a280']
        }, {
          denom: 'berlin',
          exponent: 18
        }],
      typeAsset: 'ics20',
      base: 'ibc/2BF9656CAB0384A31167DB9B0254F0FB1CB4346A229BD7E5CBDCBB911C3740F7',
      name: 'Teledisko DAO',
      display: 'berlin',
      symbol: 'BERLIN',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'evmos',
            baseDenom: 'erc20/0x1cFc8f1FE8D5668BAFF2724547EcDbd6f013a280',
            channelId: 'channel-0'
          },
          chain: {
            channelId: 'channel-204',
            path: 'transfer/channel-204/erc20/0x1cFc8f1FE8D5668BAFF2724547EcDbd6f013a280'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/evmos/images/berlin.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/evmos/images/berlin.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/evmos/images/berlin.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/evmos/images/berlin.svg'
        }]
    },
    {
      description: 'The native token of Scorum',
      denomUnits: [{
          denom: 'ibc/178248C262DE2E141EE6287EE7AB0854F05F25B0A3F40C4B912FA1C7E51F466E',
          exponent: 0,
          aliases: ['nscr']
        }, {
          denom: 'scr',
          exponent: 9
        }],
      typeAsset: 'ics20',
      base: 'ibc/178248C262DE2E141EE6287EE7AB0854F05F25B0A3F40C4B912FA1C7E51F466E',
      name: 'Scorum',
      display: 'scr',
      symbol: 'SCR',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'scorum',
            baseDenom: 'nscr',
            channelId: 'channel-1'
          },
          chain: {
            channelId: 'channel-20100',
            path: 'transfer/channel-20100/nscr'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/scorum/images/scr.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/scorum/images/scr.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/scorum/images/scr.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/scorum/images/scr.svg'
        }]
    },
    {
      description: 'The native token of Chain4Energy',
      denomUnits: [{
          denom: 'ibc/62118FB4D5FEDD5D2B18DC93648A745CD5E5B01D420E9B7A5FED5381CB13A7E8',
          exponent: 0,
          aliases: ['uc4e']
        }, {
          denom: 'c4e',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/62118FB4D5FEDD5D2B18DC93648A745CD5E5B01D420E9B7A5FED5381CB13A7E8',
      name: 'C4E',
      display: 'c4e',
      symbol: 'C4E',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'chain4energy',
            baseDenom: 'uc4e',
            channelId: 'channel-1'
          },
          chain: {
            channelId: 'channel-22172',
            path: 'transfer/channel-22172/uc4e'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/chain4energy/images/c4e.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/chain4energy/images/c4e.png'
        }],
      keywords: ['osmosis_unlisted']
    },
    {
      description: 'Bitmos opens doors for BRC20 tokens to thrive alongside established players in the Cosmos Network, revolutionizing decentralized finance (DeFi) for all.',
      denomUnits: [{
          denom: 'ibc/7D389F0ABF1E4D45BE6D7BBE36A2C50EA0559C01E076B02F8E381E685EC1F942',
          exponent: 0,
          aliases: ['cw20:terra1sxe8u2hjczlekwfkcq0rs28egt38pg3wqzfx4zcrese4fnvzzupsk9gjkq']
        }, {
          denom: 'bitmos',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/7D389F0ABF1E4D45BE6D7BBE36A2C50EA0559C01E076B02F8E381E685EC1F942',
      name: 'Bitmos',
      display: 'bitmos',
      symbol: 'BMOS',
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            chainName: 'terra2',
            baseDenom: 'cw20:terra1sxe8u2hjczlekwfkcq0rs28egt38pg3wqzfx4zcrese4fnvzzupsk9gjkq',
            port: 'wasm.terra1e0mrzy8077druuu42vs0hu7ugguade0cj65dgtauyaw4gsl4kv0qtdf2au',
            channelId: 'channel-26'
          },
          chain: {
            port: 'transfer',
            channelId: 'channel-341',
            path: 'transfer/channel-341/cw20:terra1sxe8u2hjczlekwfkcq0rs28egt38pg3wqzfx4zcrese4fnvzzupsk9gjkq'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/bitmos.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/bitmos.png'
        }]
    },
    {
      description: 'The SRCX token of Source Protocol.',
      denomUnits: [{
          denom: 'ibc/C97473CD237EBA2F94FDFA6ABA5EC0E22FA140655D73D2A2754F03A347BBA40B',
          exponent: 0,
          aliases: ['nsrcx', 'ibc/FC5A7360EEED0713AE3E83E9D55A69AF873056A172AC495890ACE4582FF9685A']
        }, {
          denom: 'srcx',
          exponent: 9
        }],
      typeAsset: 'ics20',
      base: 'ibc/C97473CD237EBA2F94FDFA6ABA5EC0E22FA140655D73D2A2754F03A347BBA40B',
      name: 'Source Token',
      display: 'srcx',
      symbol: 'SRCX',
      traces: [
        {
          type: 'bridge',
          counterparty: {
            chainName: 'binancesmartchain',
            baseDenom: '0x454b90716a9435e7161a9aea5cf00e0acbe565ae',
            contract: '0xC891aBa0b42818fb4c975Bf6461033c62BCE75ff'
          },
          chain: {
            contract: '0xC891aBa0b42818fb4c975Bf6461033c62BCE75ff'
          },
          provider: 'DeltaSwap.io'
        },
        {
          type: 'ibc',
          counterparty: {
            chainName: 'planq',
            baseDenom: 'erc20/0x091F9A57A3F58d758b6572E9d41675918EAC7F09',
            channelId: 'channel-61'
          },
          chain: {
            channelId: 'channel-1',
            path: 'transfer/channel-1/erc20/0x091F9A57A3F58d758b6572E9d41675918EAC7F09'
          }
        },
        {
          type: 'ibc',
          counterparty: {
            chainName: 'source',
            baseDenom: 'ibc/FC5A7360EEED0713AE3E83E9D55A69AF873056A172AC495890ACE4582FF9685A',
            channelId: 'channel-0'
          },
          chain: {
            channelId: 'channel-8945',
            path: 'transfer/channel-8945/transfer/channel-1/erc20/0x091F9A57A3F58d758b6572E9d41675918EAC7F09'
          }
        }
      ],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/binancesmartchain/images/srcx.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/binancesmartchain/images/srcx.png'
        }]
    },
    {
      description: 'The revenue token for Pylons',
      denomUnits: [{
          denom: 'ibc/0835781EF3F3ADD053874323AB660C75B50B18B16733CAB783CA6BBD78244EDF',
          exponent: 0,
          aliases: ['ubedrock']
        }, {
          denom: 'rock',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/0835781EF3F3ADD053874323AB660C75B50B18B16733CAB783CA6BBD78244EDF',
      name: 'Pylons',
      display: 'rock',
      symbol: 'ROCK',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'pylons',
            baseDenom: 'ubedrock',
            channelId: 'channel-29'
          },
          chain: {
            channelId: 'channel-17683',
            path: 'transfer/channel-17683/ubedrock'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pylons/images/pylons.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pylons/images/pylons.png'
        }]
    },
    {
      description: 'BSKT tracks the top assets across the crypto ecosystem',
      denomUnits: [{
          denom: 'ibc/CDD1E59BD5034C1B2597DD199782204EB397DB93200AA2E99C0AF3A66B2915FA',
          exponent: 0,
          aliases: [
            '6gnCPhXtLnUD76HjQuSYPENLSZdG8RvDB1pTLM5aLSJA',
            'wormhole14ejqjyq8um4p3xfqj74yld5waqljf88fz25yxnma0cngspxe3les00fpjx/bqqqpqsxzelp2hdfd4cgmxr6ekpatlj8yt2eghk52vst',
            'factory/wormhole14ejqjyq8um4p3xfqj74yld5waqljf88fz25yxnma0cngspxe3les00fpjx/bqqqpqsxzelp2hdfd4cgmxr6ekpatlj8yt2eghk52vst'
          ]
        }, {
          denom: 'wormhole/bqqqpqsxzelp2hdfd4cgmxr6ekpatlj8yt2eghk52vst/5',
          exponent: 5,
          aliases: ['bskt']
        }],
      typeAsset: 'ics20',
      base: 'ibc/CDD1E59BD5034C1B2597DD199782204EB397DB93200AA2E99C0AF3A66B2915FA',
      name: 'Basket',
      display: 'wormhole/bqqqpqsxzelp2hdfd4cgmxr6ekpatlj8yt2eghk52vst/5',
      symbol: 'BSKT',
      traces: [{
          type: 'bridge',
          counterparty: {
            chainName: 'solana',
            baseDenom: '6gnCPhXtLnUD76HjQuSYPENLSZdG8RvDB1pTLM5aLSJA'
          },
          provider: 'Wormhole'
        }, {
          type: 'ibc',
          counterparty: {
            chainName: 'gateway',
            baseDenom: 'factory/wormhole14ejqjyq8um4p3xfqj74yld5waqljf88fz25yxnma0cngspxe3les00fpjx/bqqqpqsxzelp2hdfd4cgmxr6ekpatlj8yt2eghk52vst',
            channelId: 'channel-3'
          },
          chain: {
            channelId: 'channel-2186',
            path: 'transfer/channel-2186/factory/wormhole14ejqjyq8um4p3xfqj74yld5waqljf88fz25yxnma0cngspxe3les00fpjx/bqqqpqsxzelp2hdfd4cgmxr6ekpatlj8yt2eghk52vst'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/solana/images/bskt.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/solana/images/bskt.png'
        }]
    },
    {
      description: 'The native staking and governance token of the AIOZ Network.',
      denomUnits: [
        {
          denom: 'ibc/BB0AFE2AFBD6E883690DAE4B9168EAC2B306BCC9C9292DACBB4152BBB08DB25F',
          exponent: 0,
          aliases: ['attoaioz']
        },
        {
          denom: 'nanoaioz',
          exponent: 9
        },
        {
          denom: 'aioz',
          exponent: 18
        }
      ],
      typeAsset: 'ics20',
      base: 'ibc/BB0AFE2AFBD6E883690DAE4B9168EAC2B306BCC9C9292DACBB4152BBB08DB25F',
      name: 'AIOZ Network',
      display: 'aioz',
      symbol: 'AIOZ',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'aioz',
            baseDenom: 'attoaioz',
            channelId: 'channel-1'
          },
          chain: {
            channelId: 'channel-779',
            path: 'transfer/channel-779/attoaioz'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/aioz/images/aioz.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/aioz/images/aioz.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/aioz/images/aioz.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/aioz/images/aioz.svg'
        }]
    },
    {
      description: 'Stride\'s liquid staked DYM',
      denomUnits: [{
          denom: 'ibc/D53E785DC9C5C2CA50CADB1EFE4DE5D0C30418BE0E9C6F2AF9F092A247E8BC22',
          exponent: 0,
          aliases: ['stadym']
        }, {
          denom: 'stDYM',
          exponent: 18
        }],
      typeAsset: 'ics20',
      base: 'ibc/D53E785DC9C5C2CA50CADB1EFE4DE5D0C30418BE0E9C6F2AF9F092A247E8BC22',
      name: 'Stride Staked DYM',
      display: 'stDYM',
      symbol: 'stDYM',
      traces: [{
          type: 'liquid-stake',
          counterparty: {
            chainName: 'dymension',
            baseDenom: 'adym'
          },
          provider: 'Stride'
        }, {
          type: 'ibc',
          counterparty: {
            chainName: 'stride',
            baseDenom: 'stadym',
            channelId: 'channel-5'
          },
          chain: {
            channelId: 'channel-326',
            path: 'transfer/channel-326/stadym'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stdym.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stdym.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stdym.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stdym.svg'
        }]
    },
    {
      description: 'DOKI the last Dragon',
      denomUnits: [{
          denom: 'ibc/C12C353A83CD1005FC38943410B894DBEC5F2ABC97FC12908F0FB03B970E8E1B',
          exponent: 0,
          aliases: ['udoki']
        }, {
          denom: 'doki',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/C12C353A83CD1005FC38943410B894DBEC5F2ABC97FC12908F0FB03B970E8E1B',
      name: 'DOKI',
      display: 'doki',
      symbol: 'DOKI',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'odin',
            baseDenom: 'udoki',
            channelId: 'channel-3'
          },
          chain: {
            channelId: 'channel-258',
            path: 'transfer/channel-258/udoki'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/odin/images/doki_Logo.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/odin/images/doki_Logo.png'
        }]
    },
    {
      description: 'Sail DAO is a liquidity deployment and management DAO built as a collaboration between the Osmosis and Migaloo Blockchains.',
      extendedDescription: 'Sail DAO is a liquidity deployment and management DAO built as a collaboration between the Osmosis and Migaloo Blockchains. Seeded by both the Osmosis Community Pool and the Migaloo Foundation, Sail DAO is open to hear offers from cosmos based projects that hope to seed liquidity for their token on the Osmosis blockchain. Along with the creation of this DAO the White Whale DEX is deployed on Osmosis, being the first DEX apart from Osmosis to deploy on the chain, it is a great step towards Osmosis becoming an ecosystem from an appchain. Migaloo incubated projects are encouraged to participate in OTC deals with Sail DAO in order to seed or enhance liquidity on WW\'s Osmosis DEX. However, offers are not limited to Migaloo projects and liquidity is not limitied to being deployed on WW DEX. The treasury of this DAO can be deployed however it wishes at the discretion of the Sail DAO voters. The Osmosis CP has been given veto authorization over any props introduced in this DAO and has also been given clawback rights if this venture ever gets off track.',
      denomUnits: [{
          denom: 'factory/osmo1rckme96ptawr4zwexxj5g5gej9s2dmud8r2t9j0k0prn5mch5g4snzzwjv/sail',
          exponent: 0
        }, {
          denom: 'sail',
          exponent: 6
        }],
      typeAsset: 'sdk.coin',
      base: 'factory/osmo1rckme96ptawr4zwexxj5g5gej9s2dmud8r2t9j0k0prn5mch5g4snzzwjv/sail',
      name: 'Sail',
      display: 'sail',
      symbol: 'SAIL',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/sail.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/sail.png'
        }],
      coingeckoId: 'sail-dao',
      socials: {
        website: 'https://daodao.zone/dao/osmo106tvcj58rvdn9k36m9m3xcmcwk2c3fgft3ldcst9lgy05gcmjanqexru3h/home',
        twitter: 'https://twitter.com/Sail_DAO_'
      }
    },
    {
      description: 'SHARK is the apex price prediction market within Cosmos.',
      denomUnits: [{
          denom: 'ibc/64D56DF9EC69BE554F49EBCE0199611062FF1137EF105E2F645C1997344F3834',
          exponent: 0,
          aliases: ['factory/migaloo1eqntnl6tzcj9h86psg4y4h6hh05g2h9nj8e09l/shark']
        }, {
          denom: 'SHARK',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/64D56DF9EC69BE554F49EBCE0199611062FF1137EF105E2F645C1997344F3834',
      name: 'SHARK',
      display: 'SHARK',
      symbol: 'SHARK',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'migaloo',
            baseDenom: 'factory/migaloo1eqntnl6tzcj9h86psg4y4h6hh05g2h9nj8e09l/shark',
            channelId: 'channel-5'
          },
          chain: {
            channelId: 'channel-642',
            path: 'transfer/channel-642/factory/migaloo1eqntnl6tzcj9h86psg4y4h6hh05g2h9nj8e09l/shark'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/shark.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/shark.png'
        }]
    },
    {
      description: 'XRP bridged from XRPL',
      denomUnits: [{
          denom: 'ibc/63A7CA0B6838AD8CAD6B5103998FF9B9B6A6F06FBB9638BFF51E63E0142339F3',
          exponent: 0,
          aliases: ['drop', 'drop-core1zhs909jp9yktml6qqx9f0ptcq2xnhhj99cja03j3lfcsp2pgm86studdrz']
        }, {
          denom: 'xrp',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/63A7CA0B6838AD8CAD6B5103998FF9B9B6A6F06FBB9638BFF51E63E0142339F3',
      name: 'Ripple (Coreum)',
      display: 'xrp',
      symbol: 'XRP.core',
      traces: [{
          type: 'bridge',
          counterparty: {
            chainName: 'xrpl',
            baseDenom: 'drop'
          },
          provider: 'Coreum'
        }, {
          type: 'ibc',
          counterparty: {
            chainName: 'coreum',
            baseDenom: 'drop-core1zhs909jp9yktml6qqx9f0ptcq2xnhhj99cja03j3lfcsp2pgm86studdrz',
            channelId: 'channel-2'
          },
          chain: {
            channelId: 'channel-2188',
            path: 'transfer/channel-2188/drop-core1zhs909jp9yktml6qqx9f0ptcq2xnhhj99cja03j3lfcsp2pgm86studdrz'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/xrp.core.png'
      },
      images: [{
          imageSync: {
            chainName: 'xrpl',
            baseDenom: 'drop'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/xrpl/images/xrp.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/xrpl/images/xrp.svg'
        }, {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/xrp.core.png'
        }]
    },
    {
      description: 'The Original Meme Coin of SEI Network',
      denomUnits: [{
          denom: 'ibc/86074B8DF625A75C25D52FA6112E3FD5446BA41FE418880C168CA99D10E22F05',
          exponent: 0,
          aliases: ['cw20:sei1hrndqntlvtmx2kepr0zsfgr7nzjptcc72cr4ppk4yav58vvy7v3s4er8ed']
        }, {
          denom: 'SEIYAN',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/86074B8DF625A75C25D52FA6112E3FD5446BA41FE418880C168CA99D10E22F05',
      name: 'SEIYAN',
      display: 'SEIYAN',
      symbol: 'SEIYAN',
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            chainName: 'sei',
            baseDenom: 'cw20:sei1hrndqntlvtmx2kepr0zsfgr7nzjptcc72cr4ppk4yav58vvy7v3s4er8ed',
            port: 'transfer',
            channelId: 'channel-0'
          },
          chain: {
            port: 'transfer',
            channelId: 'channel-782',
            path: 'transfer/channel-782/cw20:sei1hrndqntlvtmx2kepr0zsfgr7nzjptcc72cr4ppk4yav58vvy7v3s4er8ed'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sei/images/SEIYAN.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sei/images/SEIYAN.png'
        }],
      keywords: ['osmosis_unlisted']
    },
    {
      description: 'The native token of Nibiru network',
      denomUnits: [{
          denom: 'ibc/4017C65CEA338196ECCEC3FE3FE8258F23D1DE88F1D95750CC912C7A1C1016FF',
          exponent: 0,
          aliases: ['unibi']
        }, {
          denom: 'nibi',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/4017C65CEA338196ECCEC3FE3FE8258F23D1DE88F1D95750CC912C7A1C1016FF',
      name: 'Nibiru',
      display: 'nibi',
      symbol: 'NIBI',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'nibiru',
            baseDenom: 'unibi',
            channelId: 'channel-0'
          },
          chain: {
            channelId: 'channel-21113',
            path: 'transfer/channel-21113/unibi'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nibiru/images/nibiru.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nibiru/images/nibiru.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nibiru/images/nibiru.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nibiru/images/nibiru.svg'
        }]
    },
    {
      description: 'BEAST-ERC20 on injective',
      denomUnits: [{
          denom: 'ibc/B84F8CC583A54DA8173711C0B66B22FDC1954FEB1CA8DBC66C89919DAFE02000',
          exponent: 0,
          aliases: ['peggy0xA4426666addBE8c4985377d36683D17FB40c31Be']
        }, {
          denom: 'beast',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/B84F8CC583A54DA8173711C0B66B22FDC1954FEB1CA8DBC66C89919DAFE02000',
      name: 'Gelotto BEAST (Peggy)',
      display: 'beast',
      symbol: 'BEAST',
      traces: [{
          type: 'bridge',
          counterparty: {
            chainName: 'ethereum',
            baseDenom: '0xA4426666addBE8c4985377d36683D17FB40c31Be'
          },
          provider: 'Peggy'
        }, {
          type: 'ibc',
          counterparty: {
            chainName: 'injective',
            baseDenom: 'peggy0xA4426666addBE8c4985377d36683D17FB40c31Be',
            channelId: 'channel-8'
          },
          chain: {
            channelId: 'channel-122',
            path: 'transfer/channel-122/peggy0xA4426666addBE8c4985377d36683D17FB40c31Be'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/beast.png'
      },
      images: [{
          imageSync: {
            chainName: 'ethereum',
            baseDenom: '0xA4426666addBE8c4985377d36683D17FB40c31Be'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/beast.png'
        }]
    },
    {
      description: 'Cvn is a Layer-1 blockchain built to deliver on the promise of DeFi',
      denomUnits: [{
          denom: 'ibc/D3FAF77F5DE21C18413B164751239BA7D521A9D8EA53BFE553AADF338A721480',
          exponent: 0,
          aliases: ['acvnt']
        }, {
          denom: 'cvnt',
          exponent: 18
        }],
      typeAsset: 'ics20',
      base: 'ibc/D3FAF77F5DE21C18413B164751239BA7D521A9D8EA53BFE553AADF338A721480',
      name: 'ConsciousDAO',
      display: 'cvnt',
      symbol: 'CVN',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'conscious',
            baseDenom: 'acvnt',
            channelId: 'channel-5'
          },
          chain: {
            channelId: 'channel-35264',
            path: 'transfer/channel-35264/acvnt'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/conscious/images/cvn.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/conscious/images/cvn.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/conscious/images/cvn.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/conscious/images/cvn.svg'
        }],
      keywords: ['osmosis_unlisted']
    },
    {
      description: 'The memecoin built for the Celestia community',
      denomUnits: [{
          denom: 'factory/osmo1nr8zfakf6jauye3uqa9lrmr5xumee5n42lv92z/toro',
          exponent: 0
        }, {
          denom: 'toro',
          exponent: 6
        }],
      typeAsset: 'sdk.coin',
      address: 'osmo1nr8zfakf6jauye3uqa9lrmr5xumee5n42lv92z',
      base: 'factory/osmo1nr8zfakf6jauye3uqa9lrmr5xumee5n42lv92z/toro',
      name: 'TORO',
      display: 'toro',
      symbol: 'TORO',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/toro.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/toro.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/toro.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/toro.svg'
        }]
    },
    {
      description: 'Sayve is a revolutionary language learning app in the Web3 era that combines gamification, blockchain technology, and a Metaverse experience to motivate users to learn languages while earning rewards.',
      denomUnits: [{
          denom: 'ibc/06EF575844982382F4D1BC3830D294557A30EDB3CD223153AFC8DFEF06349C56',
          exponent: 0,
          aliases: ['cw20:terra1xp9hrhthzddnl7j5du83gqqr4wmdjm5t0guzg9jp6jwrtpukwfjsjgy4f3']
        }, {
          denom: 'sayve',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/06EF575844982382F4D1BC3830D294557A30EDB3CD223153AFC8DFEF06349C56',
      name: 'sayve',
      display: 'sayve',
      symbol: 'SAYVE',
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            chainName: 'terra2',
            baseDenom: 'cw20:terra1xp9hrhthzddnl7j5du83gqqr4wmdjm5t0guzg9jp6jwrtpukwfjsjgy4f3',
            port: 'wasm.terra1e0mrzy8077druuu42vs0hu7ugguade0cj65dgtauyaw4gsl4kv0qtdf2au',
            channelId: 'channel-26'
          },
          chain: {
            port: 'transfer',
            channelId: 'channel-341',
            path: 'transfer/channel-341/cw20:terra1xp9hrhthzddnl7j5du83gqqr4wmdjm5t0guzg9jp6jwrtpukwfjsjgy4f3'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/sayve.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/sayve.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/sayve.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/sayve.svg'
        }],
      keywords: ['osmosis_unlisted']
    },
    {
      description: 'LAB - Everything is an Experiment',
      extendedDescription: 'LAB - Everything is an Experiment\n\nUse 10 $LAB tokens to mint 1 Mad Scientist NFT on Backbone Labs Osmosis Launchpad. You will then be able to trade your NFTs on the marketplace. You can also choose to hold onto your $LAB tokens as unrevealed NFTs and trade it.\n\n Fair Launch: The event was marked by the absence of whitelists (WLs), no bots and no lock, ensuring an equitable opportunity for all interested parties.\n\nPreparation for the Launch: Participants were given a 52.91-hour window to deposit $OSMO into a pool on Streamswap.\n\nThe Swap Process: After the initial deposit period, $OSMO was converted into $LAB tokens over an additional hour, allowing for a smooth transition and fair distribution.',
      denomUnits: [{
          denom: 'factory/osmo17fel472lgzs87ekt9dvk0zqyh5gl80sqp4sk4n/LAB',
          exponent: 0
        }, {
          denom: 'LAB',
          exponent: 6
        }],
      typeAsset: 'sdk.coin',
      address: 'osmo17fel472lgzs87ekt9dvk0zqyh5gl80sqp4sk4n',
      base: 'factory/osmo17fel472lgzs87ekt9dvk0zqyh5gl80sqp4sk4n/LAB',
      name: 'LAB',
      display: 'LAB',
      symbol: 'LAB',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/LAB.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/LAB.png'
        }]
    },
    {
      description: 'BackBone Labs Liquid Staked OSMO',
      denomUnits: [{
          denom: 'factory/osmo1s3l0lcqc7tu0vpj6wdjz9wqpxv8nk6eraevje4fuwkyjnwuy82qsx3lduv/boneOsmo',
          exponent: 0
        }, {
          denom: 'bOSMO',
          exponent: 6
        }],
      typeAsset: 'sdk.coin',
      address: 'osmo1s3l0lcqc7tu0vpj6wdjz9wqpxv8nk6eraevje4fuwkyjnwuy82qsx3lduv',
      base: 'factory/osmo1s3l0lcqc7tu0vpj6wdjz9wqpxv8nk6eraevje4fuwkyjnwuy82qsx3lduv/boneOsmo',
      name: 'BackBone Labs Liquid Staked OSMO',
      display: 'bOSMO',
      symbol: 'bOSMO',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/bOSMO.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/bOSMO.png'
        }],
      keywords: ['osmosis_unlisted']
    },
    {
      description: 'PUNDIX token is the native token that functions within the Pundi X ecosystem, including PundiX Chain and XPOS.',
      denomUnits: [{
          denom: 'ibc/2EB516F83C9FF44AB6826F269CA98A5622608C6C955E12112E58F23A324FEE07',
          exponent: 0,
          aliases: ['ibc/55367B7B6572631B78A93C66EF9FDFCE87CDE372CC4ED7848DA78C1EB1DCDD78']
        }, {
          denom: 'PUNDIX',
          exponent: 18
        }],
      typeAsset: 'ics20',
      base: 'ibc/2EB516F83C9FF44AB6826F269CA98A5622608C6C955E12112E58F23A324FEE07',
      name: 'Pundi X Token',
      display: 'PUNDIX',
      symbol: 'PUNDIX',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'fxcore',
            baseDenom: 'eth0x0FD10b9899882a6f2fcb5c371E17e70FdEe00C38',
            channelId: 'channel-0'
          },
          chain: {
            channelId: 'channel-0',
            path: 'transfer/channel-0/eth0x0FD10b9899882a6f2fcb5c371E17e70FdEe00C38'
          }
        }, {
          type: 'ibc',
          counterparty: {
            chainName: 'pundix',
            baseDenom: 'ibc/55367B7B6572631B78A93C66EF9FDFCE87CDE372CC4ED7848DA78C1EB1DCDD78',
            channelId: 'channel-1'
          },
          chain: {
            channelId: 'channel-12618',
            path: 'transfer/channel-12618/transfer/channel-0/eth0x0FD10b9899882a6f2fcb5c371E17e70FdEe00C38'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/pundix.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/pundix.png'
        }],
      keywords: ['osmosis_unlisted']
    },
    {
      description: 'The native fee, governance and staking token of the Tinkernet Parachain.',
      denomUnits: [{
          denom: 'ibc/3A0A392E610A8D477851ABFEA74F3D828F36C015AB8E93B0FBB7566A6D13C4D6',
          exponent: 0,
          aliases: ['2125', 'ibc/C58E5D2571042137CB68B1B9851C4E7211C05F7C2C79E21E0966AF0F063961F8']
        }, {
          denom: 'tnkr',
          exponent: 12
        }],
      typeAsset: 'ics20',
      base: 'ibc/3A0A392E610A8D477851ABFEA74F3D828F36C015AB8E93B0FBB7566A6D13C4D6',
      name: 'Tinkernet',
      display: 'tnkr',
      symbol: 'TNKR',
      traces: [
        {
          type: 'bridge',
          counterparty: {
            chainName: 'tinkernet',
            baseDenom: 'Planck'
          },
          provider: 'Tinkernet Parachain'
        },
        {
          type: 'ibc',
          counterparty: {
            chainName: 'picasso',
            baseDenom: '2125',
            channelId: 'channel-17'
          },
          chain: {
            channelId: 'channel-2',
            path: 'transfer/channel-2/2125'
          }
        },
        {
          type: 'ibc',
          counterparty: {
            chainName: 'composable',
            baseDenom: 'ibc/C58E5D2571042137CB68B1B9851C4E7211C05F7C2C79E21E0966AF0F063961F8',
            channelId: 'channel-3'
          },
          chain: {
            channelId: 'channel-1279',
            path: 'transfer/channel-1279/transfer/channel-2/2125'
          }
        }
      ],
      logoURIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/tinkernet/images/tnkr.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/tinkernet/images/tnkr.svg'
        }]
    },
    {
      description: 'W is the native token powering the Wormhole interoperability platform.',
      denomUnits: [{
          denom: 'ibc/AC6EE43E608B5A7EEE460C960480BC1C3708010E32B2071C429DA259836E10C3',
          exponent: 0,
          aliases: ['factory/wormhole14ejqjyq8um4p3xfqj74yld5waqljf88fz25yxnma0cngspxe3les00fpjx/2Wb6ueMFc9WLc2eyYVha6qnwHKbwzUXdooXsg6XXVvos']
        }, {
          denom: 'w',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/AC6EE43E608B5A7EEE460C960480BC1C3708010E32B2071C429DA259836E10C3',
      name: 'Wormhole Token',
      display: 'w',
      symbol: 'W',
      traces: [{
          type: 'bridge',
          counterparty: {
            chainName: 'solana',
            baseDenom: '85VBFQZC9TZkfaptBWjvUw7YbZjy52A6mjtPGjstQAmQ'
          },
          provider: 'Wormhole'
        }, {
          type: 'ibc',
          counterparty: {
            chainName: 'gateway',
            baseDenom: 'factory/wormhole14ejqjyq8um4p3xfqj74yld5waqljf88fz25yxnma0cngspxe3les00fpjx/2Wb6ueMFc9WLc2eyYVha6qnwHKbwzUXdooXsg6XXVvos',
            channelId: 'channel-3'
          },
          chain: {
            channelId: 'channel-2186',
            path: 'transfer/channel-2186/factory/wormhole14ejqjyq8um4p3xfqj74yld5waqljf88fz25yxnma0cngspxe3les00fpjx/2Wb6ueMFc9WLc2eyYVha6qnwHKbwzUXdooXsg6XXVvos'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/solana/images/w.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/solana/images/w.png'
        }]
    },
    {
      description: 'The native token of dHealth',
      denomUnits: [{
          denom: 'ibc/320F8D6EC17E14436D19C6D844BB9A5AE9B9A209F6D18364A2191FF08E8732A9',
          exponent: 0,
          aliases: ['udhp']
        }, {
          denom: 'dhp',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/320F8D6EC17E14436D19C6D844BB9A5AE9B9A209F6D18364A2191FF08E8732A9',
      name: 'dHealth',
      display: 'dhp',
      symbol: 'DHP',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'dhealth',
            baseDenom: 'udhp',
            channelId: 'channel-1'
          },
          chain: {
            channelId: 'channel-38776',
            path: 'transfer/channel-38776/udhp'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dhealth/images/dhp.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dhealth/images/dhp.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dhealth/images/dhp.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dhealth/images/dhp.svg'
        }],
      keywords: ['osmosis_unlisted']
    },
    {
      description: 'The native token of Furya',
      denomUnits: [{
          denom: 'ibc/42D0FBF9DDC72D7359D309A93A6DF9F6FDEE3987EA1C5B3CDE95C06FCE183F12',
          exponent: 0,
          aliases: ['ufury']
        }, {
          denom: 'fury',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/42D0FBF9DDC72D7359D309A93A6DF9F6FDEE3987EA1C5B3CDE95C06FCE183F12',
      name: 'furya',
      display: 'fury',
      symbol: 'FURY',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'furya',
            baseDenom: 'ufury',
            channelId: 'channel-3'
          },
          chain: {
            channelId: 'channel-8690',
            path: 'transfer/channel-8690/ufury'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/furya/images/ufury.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/furya/images/ufury.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/furya/images/ufury.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/furya/images/ufury.svg',
          theme: {
            primaryColorHex: '#eaf143'
          }
        }],
      keywords: [
        'gaming',
        'staking',
        'osmosis_unlisted'
      ]
    },
    {
      description: 'The native staking and governance token of Saga.',
      denomUnits: [{
          denom: 'ibc/094FB70C3006906F67F5D674073D2DAFAFB41537E7033098F5C752F211E7B6C2',
          exponent: 0,
          aliases: ['usaga']
        }, {
          denom: 'saga',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/094FB70C3006906F67F5D674073D2DAFAFB41537E7033098F5C752F211E7B6C2',
      name: 'Saga',
      display: 'saga',
      symbol: 'SAGA',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'saga',
            baseDenom: 'usaga',
            channelId: 'channel-1'
          },
          chain: {
            channelId: 'channel-38946',
            path: 'transfer/channel-38946/usaga'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/saga/images/saga_white.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/saga/images/saga_white.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/saga/images/saga.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/saga/images/saga.svg',
          theme: {
            primaryColorHex: '#000000',
            darkMode: false
          }
        }, {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/saga/images/saga_white.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/saga/images/saga_white.svg',
          theme: {
            primaryColorHex: '#FFFFFF',
            darkMode: true
          }
        }]
    },
    {
      description: '$ATOM to $1,000 LFG!!',
      denomUnits: [{
          denom: 'ibc/0E77E090EC04C476DE2BC0A7056580AC47660DAEB7B0D4701C085E3A046AC7B7',
          exponent: 0,
          aliases: ['uatom1klfg', 'factory/neutron13lkh47msw28yynspc5rnmty3yktk43wc3dsv0l/ATOM1KLFG']
        }, {
          denom: 'ATOM1KLFG',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/0E77E090EC04C476DE2BC0A7056580AC47660DAEB7B0D4701C085E3A046AC7B7',
      name: 'ATOM1KLFG',
      display: 'ATOM1KLFG',
      symbol: 'ATOM1KLFG',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'neutron',
            baseDenom: 'factory/neutron13lkh47msw28yynspc5rnmty3yktk43wc3dsv0l/ATOM1KLFG',
            channelId: 'channel-10'
          },
          chain: {
            channelId: 'channel-874',
            path: 'transfer/channel-874/factory/neutron13lkh47msw28yynspc5rnmty3yktk43wc3dsv0l/ATOM1KLFG'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/ATOM1KLFGc.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/ATOM1KLFGc.png'
        }]
    },
    {
      description: 'The native EVM and Wasm, governance and staking token of the Shido Chain',
      denomUnits: [{
          denom: 'ibc/BBE825F7D1673E1EBF05AB02000E23E6077967B79547A3733B60AE4ED62C4D32',
          exponent: 0,
          aliases: ['shido']
        }, {
          denom: 'SHIDO',
          exponent: 18
        }],
      typeAsset: 'ics20',
      base: 'ibc/BBE825F7D1673E1EBF05AB02000E23E6077967B79547A3733B60AE4ED62C4D32',
      name: 'Shido',
      display: 'SHIDO',
      symbol: 'SHIDO',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'shido',
            baseDenom: 'shido',
            channelId: 'channel-0'
          },
          chain: {
            channelId: 'channel-38921',
            path: 'transfer/channel-38921/shido'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/shido/images/shido.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/shido/images/shido.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/shido/images/shido.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/shido/images/shido.svg'
        }],
      keywords: ['osmosis_unlisted']
    },
    {
      description: 'Decentralized Machine Learning',
      denomUnits: [{
          denom: 'ibc/EFC1776BEFB7842F2DC7BABD9A3050E188145C99007ECC5F3526FED45A68D5F5',
          exponent: 0,
          aliases: ['ucif']
        }, {
          denom: 'cif',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/EFC1776BEFB7842F2DC7BABD9A3050E188145C99007ECC5F3526FED45A68D5F5',
      name: 'Cifer',
      display: 'cif',
      symbol: 'CIF',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'cifer',
            baseDenom: 'ucif',
            channelId: 'channel-1'
          },
          chain: {
            channelId: 'channel-39205',
            path: 'transfer/channel-39205/ucif'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cifer/images/cif.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cifer/images/cif.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cifer/images/cif.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cifer/images/cif.svg'
        }],
      keywords: ['osmosis_unlisted']
    },
    {
      description: 'Hava Coin is the lifeblood of the Cosmos & Injective networks, rewarding builders and welcoming supporters. https://havacoin.xyz/',
      denomUnits: [{
          denom: 'ibc/884EBC228DFCE8F1304D917A712AA9611427A6C1ECC3179B2E91D7468FB091A2',
          exponent: 0,
          aliases: ['factory/inj1h0ypsdtjfcjynqu3m75z2zwwz5mmrj8rtk2g52/uhava']
        }, {
          denom: 'hava',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/884EBC228DFCE8F1304D917A712AA9611427A6C1ECC3179B2E91D7468FB091A2',
      name: 'Hava Coin',
      display: 'hava',
      symbol: 'HAVA',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'injective',
            baseDenom: 'factory/inj1h0ypsdtjfcjynqu3m75z2zwwz5mmrj8rtk2g52/uhava',
            channelId: 'channel-8'
          },
          chain: {
            channelId: 'channel-122',
            path: 'transfer/channel-122/factory/inj1h0ypsdtjfcjynqu3m75z2zwwz5mmrj8rtk2g52/uhava'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/hava.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/hava.png'
        }]
    },
    {
      description: 'OnE mEmEcOiN tO cOnNeCt oL ImBeCiles - aNd in Da Cosmos BiNd DeM',
      denomUnits: [{
          denom: 'factory/osmo1kqdw6pvn0xww6tyfv2sqvkkencdz0qw406x54r/IBC',
          exponent: 0
        }, {
          denom: 'IBC',
          exponent: 6
        }],
      typeAsset: 'sdk.coin',
      base: 'factory/osmo1kqdw6pvn0xww6tyfv2sqvkkencdz0qw406x54r/IBC',
      name: 'IBC',
      display: 'IBC',
      symbol: 'IBC',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/ibc.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/ibc.png'
        }],
      keywords: ['memecoin', 'osmosis_unlisted'],
      socials: {
        website: 'https://www.ibcmeme.wtf',
        twitter: 'https://twitter.com/IBCmemecoin'
      }
    },
    {
      description: 'Astroport is a neutral marketplace where anyone, from anywhere in the galaxy, can dock to trade their wares.',
      denomUnits: [{
          denom: 'ibc/B8C608CEE08C4F30A15A7955306F2EDAF4A02BB191CABC4185C1A57FD978DA1B',
          exponent: 0,
          aliases: ['uastro']
        }, {
          denom: 'astro',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/B8C608CEE08C4F30A15A7955306F2EDAF4A02BB191CABC4185C1A57FD978DA1B',
      name: 'Astroport token',
      display: 'astro',
      symbol: 'ASTRO',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'neutron',
            baseDenom: 'factory/neutron1ffus553eet978k024lmssw0czsxwr97mggyv85lpcsdkft8v9ufsz3sa07/astro',
            channelId: 'channel-10'
          },
          chain: {
            channelId: 'channel-874',
            path: 'transfer/channel-874/factory/neutron1ffus553eet978k024lmssw0czsxwr97mggyv85lpcsdkft8v9ufsz3sa07/astro'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/astro.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/astro.svg'
      },
      images: [{
          imageSync: {
            chainName: 'neutron',
            baseDenom: 'factory/neutron1ffus553eet978k024lmssw0czsxwr97mggyv85lpcsdkft8v9ufsz3sa07/astro'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/astro.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/astro.svg'
        }]
    },
    {
      description: 'Astroport is a neutral marketplace where anyone, from anywhere in the galaxy, can dock to trade their wares.',
      denomUnits: [{
          denom: 'ibc/2ED09B03AA396BC2F35B741F4CA4A82D33A24A1007BFC1973299842DD626F564',
          exponent: 0,
          aliases: ['uxastro', 'factory/neutron1zlf3hutsa4qnmue53lz2tfxrutp8y2e3rj4nkghg3rupgl4mqy8s5jgxsn/xASTRO']
        }, {
          denom: 'xASTRO',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/2ED09B03AA396BC2F35B741F4CA4A82D33A24A1007BFC1973299842DD626F564',
      name: 'Staked Astroport Token',
      display: 'xASTRO',
      symbol: 'xASTRO',
      traces: [{
          type: 'liquid-stake',
          counterparty: {
            chainName: 'neutron',
            baseDenom: 'factory/neutron1ffus553eet978k024lmssw0czsxwr97mggyv85lpcsdkft8v9ufsz3sa07/astro'
          },
          provider: 'Astroport'
        }, {
          type: 'ibc',
          counterparty: {
            chainName: 'neutron',
            baseDenom: 'factory/neutron1zlf3hutsa4qnmue53lz2tfxrutp8y2e3rj4nkghg3rupgl4mqy8s5jgxsn/xASTRO',
            channelId: 'channel-10'
          },
          chain: {
            channelId: 'channel-874',
            path: 'transfer/channel-874/factory/neutron1zlf3hutsa4qnmue53lz2tfxrutp8y2e3rj4nkghg3rupgl4mqy8s5jgxsn/xASTRO'
          }
        }],
      logoURIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/xAstro.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/xAstro.svg'
        }],
      keywords: ['osmosis_unlisted']
    },
    {
      description: 'Gravity Bridge Paxos Gold',
      denomUnits: [{
          denom: 'ibc/A5CCD24BA902843B1003A7EEE5F937C632808B9CF4925601241B15C5A0A51A53',
          exponent: 0,
          aliases: ['gravity0x45804880De22913dAFE09f4980848ECE6EcbAf78']
        }, {
          denom: 'gpaxg',
          exponent: 18
        }],
      typeAsset: 'ics20',
      base: 'ibc/A5CCD24BA902843B1003A7EEE5F937C632808B9CF4925601241B15C5A0A51A53',
      name: 'Paxos Gold (Gravity Bridge)',
      display: 'gpaxg',
      symbol: 'PAXG.grv',
      traces: [
        {
          type: 'synthetic',
          counterparty: {
            chainName: 'comex',
            baseDenom: 'XAU'
          },
          provider: 'Paxos'
        },
        {
          type: 'bridge',
          counterparty: {
            chainName: 'ethereum',
            baseDenom: '0x45804880De22913dAFE09f4980848ECE6EcbAf78'
          },
          provider: 'Gravity Bridge'
        },
        {
          type: 'ibc',
          counterparty: {
            chainName: 'gravitybridge',
            baseDenom: 'gravity0x45804880De22913dAFE09f4980848ECE6EcbAf78',
            channelId: 'channel-10'
          },
          chain: {
            channelId: 'channel-144',
            path: 'transfer/channel-144/gravity0x45804880De22913dAFE09f4980848ECE6EcbAf78'
          }
        }
      ],
      logoURIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/paxg.grv.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/paxg.grv.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/paxg.grv.svg'
        }, {
          imageSync: {
            chainName: 'gravitybridge',
            baseDenom: 'gravity0x45804880De22913dAFE09f4980848ECE6EcbAf78'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/paxg.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/paxg.svg'
        }]
    },
    {
      description: 'Restake DAO Token',
      denomUnits: [{
          denom: 'ibc/04FAC73DFF7F1DD59395948F2F043B0BBF978AD4533EE37E811340F501A08FFB',
          exponent: 0,
          aliases: ['factory/migaloo1d0uma9qzcts4fzt7ml39xp44aut5k6qyjfzz4asalnecppppr3rsl52vvv/rstk']
        }, {
          denom: 'rstk',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/04FAC73DFF7F1DD59395948F2F043B0BBF978AD4533EE37E811340F501A08FFB',
      name: 'RESTAKE',
      display: 'rstk',
      symbol: 'RSTK',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'migaloo',
            baseDenom: 'factory/migaloo1d0uma9qzcts4fzt7ml39xp44aut5k6qyjfzz4asalnecppppr3rsl52vvv/rstk',
            channelId: 'channel-5'
          },
          chain: {
            channelId: 'channel-642',
            path: 'transfer/channel-642/factory/migaloo1d0uma9qzcts4fzt7ml39xp44aut5k6qyjfzz4asalnecppppr3rsl52vvv/rstk'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/rstk.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/rstk.svg'
      },
      images: [{
          imageSync: {
            chainName: 'migaloo',
            baseDenom: 'factory/migaloo1d0uma9qzcts4fzt7ml39xp44aut5k6qyjfzz4asalnecppppr3rsl52vvv/rstk'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/rstk.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/rstk.svg'
        }]
    },
    {
      description: 'The Revenue & Governance token of Unstake.fi',
      denomUnits: [{
          denom: 'ibc/690EB0A0CA0DA2DC1E9CF62FB23C935AE5C7E9F57919CF89690521D5D70948A7',
          exponent: 0,
          aliases: ['factory/kujira1aaudpfr9y23lt9d45hrmskphpdfaq9ajxd3ukh/unstk']
        }, {
          denom: 'nstk',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/690EB0A0CA0DA2DC1E9CF62FB23C935AE5C7E9F57919CF89690521D5D70948A7',
      name: 'Unstake Fi',
      display: 'nstk',
      symbol: 'NSTK',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'kujira',
            baseDenom: 'factory/kujira1aaudpfr9y23lt9d45hrmskphpdfaq9ajxd3ukh/unstk',
            channelId: 'channel-3'
          },
          chain: {
            channelId: 'channel-259',
            path: 'transfer/channel-259/factory:kujira1aaudpfr9y23lt9d45hrmskphpdfaq9ajxd3ukh:unstk'
          }
        }],
      logoURIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/nstk.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/nstk.svg'
        }]
    },
    {
      denomUnits: [{
          denom: 'ibc/0B3C3D06228578334B66B57FBFBA4033216CEB8119B27ACDEE18D92DA5B28D43',
          exponent: 0,
          aliases: ['avalanche-uusdc']
        }, {
          denom: 'avalanche-usdc',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/0B3C3D06228578334B66B57FBFBA4033216CEB8119B27ACDEE18D92DA5B28D43',
      name: 'Wormhole USDC(Avalanche)',
      display: 'avalanche-usdc',
      symbol: 'avalanche.USDC.wh',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'gateway',
            baseDenom: 'factory/wormhole14ejqjyq8um4p3xfqj74yld5waqljf88fz25yxnma0cngspxe3les00fpjx/5ZLmAZpcbaP4EGyihSmpfwryzDr84h51tboV392BCjW4',
            channelId: 'channel-3'
          },
          chain: {
            channelId: 'channel-2186',
            path: 'transfer/channel-2186/factory/wormhole14ejqjyq8um4p3xfqj74yld5waqljf88fz25yxnma0cngspxe3les00fpjx/5ZLmAZpcbaP4EGyihSmpfwryzDr84h51tboV392BCjW4'
          }
        }],
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/usdc.hole.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/usdc.hole.svg'
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/usdc.hole.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/usdc.hole.svg'
      }
    },
    {
      description: 'Nomic\'s native token.',
      denomUnits: [{
          denom: 'ibc/F49DFB3BC8105C57EE7F17EC2402438825B31212CFDD81681EB87911E934F32C',
          exponent: 0,
          aliases: ['unom']
        }, {
          denom: 'nom',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/F49DFB3BC8105C57EE7F17EC2402438825B31212CFDD81681EB87911E934F32C',
      name: 'Nomic',
      display: 'nom',
      symbol: 'nomic.NOM',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'nomic',
            baseDenom: 'unom',
            channelId: 'channel-1'
          },
          chain: {
            channelId: 'channel-6897',
            path: 'transfer/channel-6897/unom'
          }
        }],
      images: [{
          imageSync: {
            chainName: 'nomic',
            baseDenom: 'unom'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nomic/images/nom.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nomic/images/nom.svg'
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nomic/images/nom.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nomic/images/nom.svg'
      }
    },
    {
      description: 'The governance and utility token of Yieldmos, the Interchain Automation Protocol',
      denomUnits: [{
          denom: 'factory/osmo1vdvnznwg597qngrq9mnfcfk0am9jdc9y446jewhcqdreqz4r75xq5j5zvy/ymos',
          exponent: 0
        }, {
          denom: 'ymos',
          exponent: 6
        }],
      typeAsset: 'sdk.coin',
      address: 'osmo1vdvnznwg597qngrq9mnfcfk0am9jdc9y446jewhcqdreqz4r75xq5j5zvy',
      base: 'factory/osmo1vdvnznwg597qngrq9mnfcfk0am9jdc9y446jewhcqdreqz4r75xq5j5zvy/ymos',
      name: 'Yieldmos Coin',
      display: 'ymos',
      symbol: 'YMOS',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/ymos.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/ymos.png'
        }]
    },
    {
      description: 'Memecoin for The International Brane Wave',
      denomUnits: [{
          denom: 'factory/osmo13gu58hzw3e9aqpj25h67m7snwcjuccd7v4p55w/brnz',
          exponent: 0,
          aliases: ['brnz']
        }],
      base: 'factory/osmo13gu58hzw3e9aqpj25h67m7snwcjuccd7v4p55w/brnz',
      name: 'Branez',
      display: 'factory/osmo13gu58hzw3e9aqpj25h67m7snwcjuccd7v4p55w/brnz',
      symbol: 'BRNZ',
      logoURIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/BRNZ.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/BRNZ.svg'
        }]
    },
    {
      description: 'Bernese Mountain Dog. Thematic dog token to have fun and be friends with all other dog tokens. Fixed supply 132M',
      denomUnits: [{
          denom: 'factory/osmo1s6ht8qrm8x0eg8xag5x3ckx9mse9g4se248yss/BERNESE',
          exponent: 0
        }, {
          denom: 'BERNESE',
          exponent: 6
        }],
      typeAsset: 'sdk.coin',
      address: 'osmo1s6ht8qrm8x0eg8xag5x3ckx9mse9g4se248yss',
      base: 'factory/osmo1s6ht8qrm8x0eg8xag5x3ckx9mse9g4se248yss/BERNESE',
      name: 'BERNESE',
      display: 'BERNESE',
      symbol: 'BERNESE',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/bernese.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/bernese.png'
        }]
    }
  ]
};
export default info;