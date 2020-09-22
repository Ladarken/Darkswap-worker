import BigNumber from 'bignumber.js/bignumber'
import React from "react";
import { GiBoneKnife, GiButterflyKnife, GiThrownKnife, GiBowieKnife, GiCurvyKnife, GiDrippingKnife, GiKnifeThrust, GiTrenchKnife,GiAncientSword, GiRustySword, GiSwordBrandish, GiSwordsPower, GiTwoHandedSword, GiBloodySword, GiBroadsword, GiCrocSword, GiCrossedSwords, GiDervishSwords, GiDrippingSword, GiEnergySword, GiFragmentedSword, GiPiercingSword, GiPointySword, GiShardSword, GiShatteredSword, GiShiningSword, GiSpinningSword, GiSwordHilt, GiSwordInStone,GiSwordTie, GiSwordsEmblem, GiWingedSword, GiZeusSword, GiCrossedSabres, GiEnergyArrow, GiHammerDrop, GiMeatHook, GiPlainDagger, GiSacrificialDagger, GiScythe, GiSpiralThrust, GiMonkeyWrench, GiStiletto,GiPirateFlag, GiSwordAltar} from "react-icons/gi";
export const SUBTRACT_GAS_LIMIT = 100000

const ONE_MINUTE_IN_SECONDS = new BigNumber(60)
const ONE_HOUR_IN_SECONDS = ONE_MINUTE_IN_SECONDS.times(60)
const ONE_DAY_IN_SECONDS = ONE_HOUR_IN_SECONDS.times(24)
const ONE_YEAR_IN_SECONDS = ONE_DAY_IN_SECONDS.times(365)

export const INTEGERS = {
  ONE_MINUTE_IN_SECONDS,
  ONE_HOUR_IN_SECONDS,
  ONE_DAY_IN_SECONDS,
  ONE_YEAR_IN_SECONDS,
  ZERO: new BigNumber(0),
  ONE: new BigNumber(1),
  ONES_31: new BigNumber('4294967295'), // 2**32-1
  ONES_127: new BigNumber('340282366920938463463374607431768211455'), // 2**128-1
  ONES_255: new BigNumber(
    '115792089237316195423570985008687907853269984665640564039457584007913129639935',
  ), // 2**256-1
  INTEREST_RATE_BASE: new BigNumber('1e18'),
}

export const addressMap = {
  uniswapFactory: '0xc0a47dFe034B400B47bDaD5FecDa2621de6c4d95',
  uniswapFactoryV2: '0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f',
  YFI: '0x0bc529c00C6401aEF6D220BE8C6Ea1667F6Ad93e',
  YCRV: '0xdF5e0e81Dff6FAF3A7e52BA697820c5e32D806A8',
  UNIAmpl: '0xc5be99a02c6857f9eac67bbce58df5572498f40c',
  WETH: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
  UNIRouter: '0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D',
  LINK: '0x514910771AF9Ca656af840dff83E8264EcF986CA',
  MKR: '0x9f8f72aa9304c8b593d555f12ef6589cc3a579a2',
  SNX: '0xC011a73ee8576Fb46F5E1c5751cA3B9Fe0af2a6F',
  COMP: '0xc00e94Cb662C3520282E6f5717214004A7f26888',
  LEND: '0x80fB784B7eD66730e8b1DBd9820aFD29931aab03',
  SUSHIYCRV: '0x2C7a51A357d5739C5C74Bf3C96816849d2c9F726',
}

export const contractAddresses = {
  sushi: {
    1: '0x3108ccFd96816F9E663baA0E8c5951D229E8C6da',
  },
  masterChef: {
    1: '0xA83Bb332564e226779963bF0cD7c8ED4aAE40E95',
  },
  weth: {
    1: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
  },
}

/*
UNI-V2 LP Address on mainnet for reference
==========================================
0  USDT 0x0d4a11d5eeaac28ec3f61d100daf4d40471f1852
1  USDC 0xb4e16d0168e52d35cacd2c6185b44281ec28c9dc
2  DAI  0xa478c2975ab1ea89e8196811f51a7b7ade33eb11
3  sUSD 0xf80758ab42c3b07da84053fd88804bcb6baa4b5c
4  COMP 0xcffdded873554f362ac02f8fb1f02e5ada10516f
5  LEND 0xab3f9bf1d81ddb224a2014e98b238638824bcf20
6  SNX  0x43ae24960e5534731fc831386c07755a2dc33d47
7  UMA  0x88d97d199b9ed37c29d846d00d443de980832a22
8  LINK 0xa2107fa5b38d9bbd2c461d6edf11b11a50f6b974
9  BAND 0xf421c3f2e695c2d4c0765379ccace8ade4a480d9
10 AMPL 0xc5be99a02c6857f9eac67bbce58df5572498f40c
11 YFI  0x2fdbadf3c4d5a8666bc06645b8358ab803996e28
12 SUSHI 0x3108ccfd96816f9e663baa0e8c5951d229e8c6da
*/

export const supportedPools = [
  {
    pid: 0,
    lpAddresses: {
      1: '0x5cbefe14c66ba706e79ca4237ff10f218461014a',
    },
    tokenAddresses: {
      1: '0x3108ccfd96816f9e663baa0e8c5951d229e8c6da',
    },
    name: 'Darkening Awaits!',
    symbol: 'DARK — ETH UNI-V2 LP',
    tokenSymbol: 'DARK',
    icon: <GiScythe />,
  },  {
    pid: 1,
    lpAddresses: {
      1: '0x1a327696c8e5ea0f07dbe0cf159380980e067dcc',
    },
    tokenAddresses: {
      1: '0x37e808f084101f75783612407e7c3f5f92d8ee3f',
    },
    name: 'Darkening Awaits!',
    symbol: 'DARK — RI UNI-V2 LP',
    tokenSymbol: 'DARK',
    icon: <GiSpiralThrust />,
  },
  {
    pid: 2,
    lpAddresses: {
      1: '0x3b022d8a4c034b5d1b8354640e10a1736eeac532',
    },
    tokenAddresses: {
      1: '0x5dbcf33d8c2e976c6b560249878e6f1491bca25c',
    },
    name: 'Darkening Awaits!',
    symbol: 'DARK — yUSD UNI-V2 LP',
    tokenSymbol: 'DARK',
    icon: <GiStiletto />,
  },  {
    pid: 3,
    lpAddresses: {
      1: '0x5741a1ceff6148c8aaca0f0456c03c88817e05f5',
    },
    tokenAddresses: {
      1: '0x31024a4c3e9aeeb256b825790f5cb7ac645e7cd5',
    },
    name: 'Darkening Awaits!',
    symbol: 'XIOT — ETH UNI-V2 LP',
    tokenSymbol: 'DARK',
    icon: <GiMonkeyWrench />,
  },
  {
    pid: 4,
    lpAddresses: {
      1: '0xb94b43bc589898f8ce5405e4e7809b0d131a967c',
    },
    tokenAddresses: {
      1: '0x5c4ac68aac56ebe098d621cd8ce9f43270aaa355',
    },
    name: 'Darkening Awaits!',
    symbol: 'XIOT — BXIOT UNI-V2 LP',
    tokenSymbol: 'DARK',
    icon: <GiPirateFlag />,
  },
  {
    pid: 5,
    lpAddresses: {
      1: '0xd58cc1b6d9f43a47387708c68111efe83c1e4b0b',
    },
    tokenAddresses: {
      1: '0x37e808f084101f75783612407e7c3f5f92d8ee3f',
    },
    name: 'Darkening Awaits!',
    symbol: 'XIOT — RI UNI-V2 LP',
    tokenSymbol: 'DARK',
    icon: <GiSwordAltar />,
  }
  /* {
    pid: 0,
    lpAddresses: {
      1: '0x2fdbadf3c4d5a8666bc06645b8358ab803996e28',
    },
    tokenAddresses: {
      1: '0x0bc529c00c6401aef6d220be8c6ea1667f6ad93e',
    },
    name: 'Darkening Awaits!',
    symbol: 'ETH — YFI UNI-V2 LP',
    tokenSymbol: 'DARK',
    icon: <GiBoneKnife />,
  },
  {
    pid: 1,
    lpAddresses: {
      1: '0xd3d2e2692501a5c9ca623199d38826e513033a17',
    },
    tokenAddresses: {
      1: '0x1f9840a85d5af5bf1d1762f925bdaddc4201f984',
    },
    name: 'Darkening Awaits!',
    symbol: 'ETH — UNI UNI-V2 LP',
    tokenSymbol: 'DARK',
    icon: <GiButterflyKnife />,
  },
  {
    pid: 3,
    lpAddresses: {
      1: '0xce84867c3c02b05dc570d0135103d3fb9cc19433',
    },
    tokenAddresses: {
      1: '0x6b3595068778dd592e39a122f4f5a5cf09c90fe2',
    },
    name: 'Darkening Awaits!',
    symbol: 'ETH — SUSHI UNI-V2 LP',
    tokenSymbol: 'DARK',
    icon: <GiThrownKnife />,
  },
  {
    pid: 4,
    lpAddresses: {
      1: '0xab3f9bf1d81ddb224a2014e98b238638824bcf20',
    },
    tokenAddresses: {
      1: '0x80fb784b7ed66730e8b1dbd9820afd29931aab03',
    },
    name: 'Darkening Awaits!',
    symbol: 'ETH — LEND UNI-V2 LP',
    tokenSymbol: 'DARK',
    icon: <GiBowieKnife />,
  },  {
    pid: 5,
    lpAddresses: {
      1: '0xc2adda861f89bbb333c90c492cb837741916a225',
    },
    tokenAddresses: {
      1: '0x9f8f72aa9304c8b593d555f12ef6589cc3a579a2',
    },
    name: 'Darkening Awaits!',
    symbol: 'ETH — MKR UNI-V2 LP',
    tokenSymbol: 'DARK',
    icon: <GiCurvyKnife />,
  },
  {
    pid: 6,
    lpAddresses: {
      1: '0x3da1313ae46132a397d90d95b1424a9a7e3e0fce',
    },
    tokenAddresses: {
      1: '0xd533a949740bb3306d119cc777fa900ba034cd52',
    },
    name: 'Darkening Awaits!',
    symbol: 'ETH — CRV UNI-V2 LP',
    tokenSymbol: 'DARK',
    icon: <GiDrippingKnife />,
  },  {
    pid: 7,
    lpAddresses: {
      1: '0x43ae24960e5534731fc831386c07755a2dc33d47',
    },
    tokenAddresses: {
      1: '0xc011a73ee8576fb46f5e1c5751ca3b9fe0af2a6f',
    },
    name: 'Darkening Awaits!',
    symbol: 'ETH — SNX UNI-V2 LP',
    tokenSymbol: 'DARK',
    icon: < GiKnifeThrust />,
  },
  {
    pid: 8,
    lpAddresses: {
      1: '0xcffdded873554f362ac02f8fb1f02e5ada10516f',
    },
    tokenAddresses: {
      1: '0xc00e94cb662c3520282e6f5717214004a7f26888',
    },
    name: 'Darkening Awaits!',
    symbol: 'ETH — COMP UNI-V2 LP',
    tokenSymbol: 'DARK',
    icon: <GiTrenchKnife />,
  },  {
    pid: 9,
    lpAddresses: {
      1: '0xa70d458a4d9bc0e6571565faee18a48da5c0d593',
    },
    tokenAddresses: {
      1: '0xba100000625a3754423978a60c9317c58a424e3d',
    },
    name: 'Darkening Awaits!',
    symbol: 'ETH — BAL UNI-V2 LP',
    tokenSymbol: 'DARK',
    icon: <GiAncientSword />,
  },
  {
    pid: 10,
    lpAddresses: {
      1: '0x8bd1661da98ebdd3bd080f0be4e6d9be8ce9858c',
    },
    tokenAddresses: {
      1: '0x408e41876cccdc0f92210600ef50372656052a38',
    },
    name: 'Darkening Awaits!',
    symbol: 'ETH — REN UNI-V2 LP',
    tokenSymbol: 'DARK',
    icon: <GiRustySword />,
  },  {
    pid: 11,
    lpAddresses: {
      1: '0x08650bb9dc722c9c8c62e79c2bafa2d3fc5b3293',
    },
    tokenAddresses: {
      1: '0xff20817765cb7f73d4bde2e66e067e58d11095c2',
    },
    name: 'Darkening Awaits!',
    symbol: 'ETH — AMP UNI-V2 LP',
    tokenSymbol: 'DARK',
    icon: <GiSwordBrandish />,
  },
  {
    pid: 12,
    lpAddresses: {
      1: '0x23bff8ca20aac06efdf23cee3b8ae296a30dfd27',
    },
    tokenAddresses: {
      1: '0x0d438f3b5175bebc262bf23753c1e53d03432bde',
    },
    name: 'Darkening Awaits!',
    symbol: 'ETH — WNXM UNI-V2 LP',
    tokenSymbol: 'DARK',
    icon: <GiSwordsPower />,
  },  {
    pid: 13,
    lpAddresses: {
      1: '0x232818620877fd9232e9ade0c91ef5518eb11788',
    },
    tokenAddresses: {
      1: '0x431ad2ff6a9c365805ebad47ee021148d6f7dbe0',
    },
    name: 'Darkening Awaits!',
    symbol: 'ETH — DF UNI-V2 LP',
    tokenSymbol: 'DARK',
    icon:<GiTwoHandedSword />,
  },
  {
    pid: 14,
    lpAddresses: {
      1: '0x0d0d65e7a7db277d3e0f5e1676325e75f3340455',
    },
    tokenAddresses: {
      1: '0xa3bed4e1c75d00fa6f4e5e6922db7261b5e9acd2',
    },
    name: 'Darkening Awaits!',
    symbol: 'ETH — MTA UNI-V2 LP',
    tokenSymbol: 'DARK',
    icon: <GiBloodySword />,
  },  {
    pid: 15,
    lpAddresses: {
      1: '0x2cf7a2a639d9b27be53f8c93ab6ae8b90f1a9591',
    },
    tokenAddresses: {
      1: '0x1fcdce58959f536621d76f5b7ffb955baa5a672f',
    },
    name: 'Darkening Awaits!',
    symbol: 'ETH — FOR UNI-V2 LP',
    tokenSymbol: 'DARK',
    icon: <GiBroadsword />,
  },
  {
    pid: 16,
    lpAddresses: {
      1: '0x3fd4cf9303c4bc9e13772618828712c8eac7dd2f',
    },
    tokenAddresses: {
      1: '0x1f573d6fb3f13d689ff844b4ce37794d79a7ff1c',
    },
    name: 'Darkening Awaits!',
    symbol: 'ETH — BNT UNI-V2 LP',
    tokenSymbol: 'DARK',
    icon: <GiCrocSword />,
  },  {
    pid: 17,
    lpAddresses: {
      1: '0x8878df9e1a7c87dcbf6d3999d997f262c05d8c70',
    },
    tokenAddresses: {
      1: '0xbbbbca6a901c926f240b89eacb641d8aec7aeafd',
    },
    name: 'Darkening Awaits!',
    symbol: 'ETH — LRC UNI-V2 LP',
    tokenSymbol: 'DARK',
    icon: <GiCrossedSwords />,
  },
  {
    pid: 18,
    lpAddresses: {
      1: '0xa2107fa5b38d9bbd2c461d6edf11b11a50f6b974',
    },
    tokenAddresses: {
      1: '0x514910771af9ca656af840dff83e8264ecf986ca',
    },
    name: 'Darkening Awaits!',
    symbol: 'ETH — LINK UNI-V2 LP',
    tokenSymbol: 'DARK',
    icon:<GiDervishSwords />,
  },  {
    pid: 19,
    lpAddresses: {
      1: '0x88d97d199b9ed37c29d846d00d443de980832a22',
    },
    tokenAddresses: {
      1: '0x04fa0d235c4abf4bcf4787af4cf447de572ef828',
    },
    name: 'Darkening Awaits!',
    symbol: 'ETH — UMA UNI-V2 LP',
    tokenSymbol: 'DARK',
    icon: <GiDrippingSword />,
  },
  {
    pid: 20,
    lpAddresses: {
      1: '0xf421c3f2e695c2d4c0765379ccace8ade4a480d9',
    },
    tokenAddresses: {
      1: '0xba11d00c5f74255f56a5e366f4f77f5a186d7f55',
    },
    name: 'Darkening Awaits!',
    symbol: 'ETH — BAND UNI-V2 LP',
    tokenSymbol: 'DARK',
    icon: <GiEnergySword />,
  },  {
    pid: 21,
    lpAddresses: {
      1: '0xc5be99a02c6857f9eac67bbce58df5572498f40c',
    },
    tokenAddresses: {
      1: '0xd46ba6d942050d489dbd938a2c909a5d5039a161',
    },
    name: 'Darkening Awaits!',
    symbol: 'ETH — AMPL UNI-V2 LP',
    tokenSymbol: 'DARK',
    icon: <GiFragmentedSword />,
  },
  {
    pid: 22,
    lpAddresses: {
      1: '0xcc3d1ecef1f9fd25599dbea2755019dc09db3c54',
    },
    tokenAddresses: {
      1: '0x476c5e26a75bd202a9683ffd34359c0cc15be0ff',
    },
    name: 'Darkening Awaits!',
    symbol: 'ETH — SRM UNI-V2 LP',
    tokenSymbol: 'DARK',
    icon: <GiPiercingSword />,
  },  {
    pid: 23,
    lpAddresses: {
      1: '0xba65016890709dbc9491ca7bf5de395b8441dc8b',
    },
    tokenAddresses: {
      1: '0x8762db106b2c2a0bccb3a80d1ed41273552616e8',
    },
    name: 'Darkening Awaits!',
    symbol: 'ETH — RSR UNI-V2 LP',
    tokenSymbol: 'DARK',
    icon: <GiPointySword />,
  },
  {
    pid: 24,
    lpAddresses: {
      1: '0xb9b752f7f4a4680eeb327ffe728f46666763a796',
    },
    tokenAddresses: {
      1: '0x56d811088235f11c8920698a204a5010a788f4b3',
    },
    name: 'Darkening Awaits!',
    symbol: 'ETH — BZRX UNI-V2 LP',
    tokenSymbol: 'DARK',
    icon: <GiShardSword />,
  },  {
    pid: 25,
    lpAddresses: {
      1: '0xa478c2975ab1ea89e8196811f51a7b7ade33eb11',
    },
    tokenAddresses: {
      1: '0x6b175474e89094c44da98b954eedeac495271d0f',
    },
    name: 'Darkening Awaits!',
    symbol: 'ETH — DAI UNI-V2 LP',
    tokenSymbol: 'DARK',
    icon: <GiShatteredSword />,
  },
  {
    pid: 26,
    lpAddresses: {
      1: '0xb4e16d0168e52d35cacd2c6185b44281ec28c9dc',
    },
    tokenAddresses: {
      1: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48',
    },
    name: 'Darkening Awaits!',
    symbol: 'ETH — USDC UNI-V2 LP',
    tokenSymbol: 'DARK',
    icon: <GiShiningSword />,
  },  {
    pid: 27,
    lpAddresses: {
      1: '0x9346c20186d1794101b8517177a1b15c49c9ff9b',
    },
    tokenAddresses: {
      1: '0x5dbcf33d8c2e976c6b560249878e6f1491bca25c',
    },
    name: 'Darkening Awaits!',
    symbol: 'ETH — yUSD UNI-V2 LP',
    tokenSymbol: 'DARK',
    icon: <GiSpinningSword />,
  },
  {
    pid: 28,
    lpAddresses: {
      1: '0xbb2b8038a1640196fbe3e38816f3e67cba72d940',
    },
    tokenAddresses: {
      1: '0x2260fac5e5542a773aa44fbcfedf7c193bc2c599',
    },
    name: 'Darkening Awaits!',
    symbol: 'ETH — WBTC UNI-V2 LP',
    tokenSymbol: 'DARK',
    icon: <GiSwordHilt />,
  },  {
    pid: 29,
    lpAddresses: {
      1: '0xe6c804ff4ec692e6808c0d032cdbc03772fc4d42',
    },
    tokenAddresses: {
      1: '0x1c5db575e2ff833e46a2e9864c22f4b22e0b37c2',
    },
    name: 'Darkening Awaits!',
    symbol: 'ETH — renZEC UNI-V2 LP',
    tokenSymbol: 'DARK',
    icon: <GiSwordInStone />,
  },
  {
    pid: 30,
    lpAddresses: {
      1: '0x0e4410dca13d85411bb9281ff0571064493da483',
    },
    tokenAddresses: {
      1: '0x459086f2376525bdceba5bdda135e4e9d3fef5bf',
    },
    name: 'Darkening Awaits!',
    symbol: 'ETH — renBCH UNI-V2 LP',
    tokenSymbol: 'DARK',
    icon: <GiSwordTie />,
  },  {
    pid: 31,
    lpAddresses: {
      1: '0x397ff1542f962076d0bfe58ea045ffa2d347aca0',
    },
    tokenAddresses: {
      1: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48',
    },
    name: 'Darkening Awaits!',
    symbol: 'USDC — ETH SushiSwap SLP',
    tokenSymbol: 'DARK',
    icon: <GiSwordsEmblem />,
  },
  {
    pid: 32,
    lpAddresses: {
      1: '0x06da0fd433c1a5d7a4faa01111c044910a184553',
    },
    tokenAddresses: {
      1: '0xdac17f958d2ee523a2206206994597c13d831ec7',
    },
    name: 'Darkening Awaits!',
    symbol: 'USDT — ETH SushiSwap SLP',
    tokenSymbol: 'DARK',
    icon: <GiWingedSword />,
  },  {
    pid: 33,
    lpAddresses: {
      1: '0x795065dcc9f64b5614c407a6efdc400da6221fb0',
    },
    tokenAddresses: {
      1: '0x6b3595068778dd592e39a122f4f5a5cf09c90fe2',
    },
    name: 'Darkening Awaits!',
    symbol: 'SUSHI — ETH SushiSwap SLP',
    tokenSymbol: 'DARK',
    icon: <GiZeusSword />,
  },
  {
    pid: 34,
    lpAddresses: {
      1: '0xc3d03e4f041fd4cd388c549ee2a29a9e5075882f',
    },
    tokenAddresses: {
      1: '0x6b175474e89094c44da98b954eedeac495271d0f',
    },
    name: 'Darkening Awaits!',
    symbol: 'DAI — ETH SushiSwap SLP',
    tokenSymbol: 'DARK',
    icon: <GiCrossedSabres />,
  },  {
    pid: 35,
    lpAddresses: {
      1: '0x088ee5007c98a9677165d78dd2109ae4a3d04d0c',
    },
    tokenAddresses: {
      1: '0x0bc529c00c6401aef6d220be8c6ea1667f6ad93e',
    },
    name: 'Darkening Awaits!',
    symbol: 'YFI — ETH SushiSwap SLP',
    tokenSymbol: 'DARK',
    icon: <GiEnergyArrow />,
  },
  {
    pid: 36,
    lpAddresses: {
      1: '0xc40d16476380e4037e6b1a2594caf6a6cc8da967',
    },
    tokenAddresses: {
      1: '0x514910771af9ca656af840dff83e8264ecf986ca',
    },
    name: 'Darkening Awaits!',
    symbol: 'LINK — ETH SushiSwap SLP',
    tokenSymbol: 'DARK',
    icon: <GiHammerDrop />,
  },  {
    pid: 37,
    lpAddresses: {
      1: '0x5e63360e891bd60c69445970256c260b0a6a54c6',
    },
    tokenAddresses: {
      1: '0x80fb784b7ed66730e8b1dbd9820afd29931aab03',
    },
    name: 'Darkening Awaits!',
    symbol: 'LEND — ETH SushiSwap SLP',
    tokenSymbol: 'DARK',
    icon: <GiMeatHook />,
  },
  {
    pid: 38,
    lpAddresses: {
      1: '0xf1f85b2c54a2bd284b1cf4141d64fd171bd85539',
    },
    tokenAddresses: {
      1: '0x57ab1ec28d129707052df4df418d58a2d46d5f51',
    },
    name: 'Darkening Awaits!',
    symbol: 'SUSD — ETH SushiSwap SLP',
    tokenSymbol: 'DARK',
    icon: <GiPlainDagger />,
  },  {
    pid: 39,
    lpAddresses: {
      1: '0xa1d7b2d891e3a1f9ef4bbc5be20630c2feb1c470',
    },
    tokenAddresses: {
      1: '0xc011a73ee8576fb46f5e1c5751ca3b9fe0af2a6f',
    },
    name: 'Darkening Awaits!',
    symbol: 'SNX — ETH SushiSwap SLP',
    tokenSymbol: 'DARK',
    icon: <GiSacrificialDagger />,
  }, */
  
]
