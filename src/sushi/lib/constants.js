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
    1: '0xc2edad668740f1aa35e4d8f227fb8e17dca888cd',
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
12 SUSHI 0xce84867c3c02b05dc570d0135103d3fb9cc19433
*/

export const supportedPools = [
  {
    pid: 1,
    lpAddresses: {
      1: '0xce84867c3c02b05dc570d0135103d3fb9cc19433',
    },
    tokenAddresses: {
      1: '0x3108ccFd96816F9E663baA0E8c5951D229E8C6da',
    },
    name: 'Darkening Awaits!',
    symbol: 'ETH — YFI UNI-V2 LP',
    tokenSymbol: 'DARK',
    icon: <GiBoneKnife />,
  },
  {
    pid: 2,
    lpAddresses: {
      1: '0xce84867c3c02b05dc570d0135103d3fb9cc19433',
    },
    tokenAddresses: {
      1: '0x3108ccFd96816F9E663baA0E8c5951D229E8C6da',
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
      1: '0x3108ccFd96816F9E663baA0E8c5951D229E8C6da',
    },
    name: 'Darkening Awaits!',
    symbol: 'ETH — SUSHI UNI-V2 LP',
    tokenSymbol: 'DARK',
    icon: <GiThrownKnife />,
  },
  {
    pid: 4,
    lpAddresses: {
      1: '0xce84867c3c02b05dc570d0135103d3fb9cc19433',
    },
    tokenAddresses: {
      1: '0x3108ccFd96816F9E663baA0E8c5951D229E8C6da',
    },
    name: 'Darkening Awaits!',
    symbol: 'ETH — LEND UNI-V2 LP',
    tokenSymbol: 'DARK',
    icon: <GiBowieKnife />,
  },  {
    pid: 5,
    lpAddresses: {
      1: '0xce84867c3c02b05dc570d0135103d3fb9cc19433',
    },
    tokenAddresses: {
      1: '0x3108ccFd96816F9E663baA0E8c5951D229E8C6da',
    },
    name: 'Darkening Awaits!',
    symbol: 'ETH — MKR UNI-V2 LP',
    tokenSymbol: 'DARK',
    icon: <GiCurvyKnife />,
  },
  {
    pid: 6,
    lpAddresses: {
      1: '0xce84867c3c02b05dc570d0135103d3fb9cc19433',
    },
    tokenAddresses: {
      1: '0x3108ccFd96816F9E663baA0E8c5951D229E8C6da',
    },
    name: 'Darkening Awaits!',
    symbol: 'ETH — CRV UNI-V2 LP',
    tokenSymbol: 'DARK',
    icon: <GiDrippingKnife />,
  },  {
    pid: 7,
    lpAddresses: {
      1: '0xce84867c3c02b05dc570d0135103d3fb9cc19433',
    },
    tokenAddresses: {
      1: '0x3108ccFd96816F9E663baA0E8c5951D229E8C6da',
    },
    name: 'Darkening Awaits!',
    symbol: 'ETH — SNX UNI-V2 LP',
    tokenSymbol: 'DARK',
    icon: < GiKnifeThrust />,
  },
  {
    pid: 8,
    lpAddresses: {
      1: '0xce84867c3c02b05dc570d0135103d3fb9cc19433',
    },
    tokenAddresses: {
      1: '0x3108ccFd96816F9E663baA0E8c5951D229E8C6da',
    },
    name: 'Darkening Awaits!',
    symbol: 'ETH — COMP UNI-V2 LP',
    tokenSymbol: 'DARK',
    icon: <GiTrenchKnife />,
  },  {
    pid: 9,
    lpAddresses: {
      1: '0xce84867c3c02b05dc570d0135103d3fb9cc19433',
    },
    tokenAddresses: {
      1: '0x3108ccFd96816F9E663baA0E8c5951D229E8C6da',
    },
    name: 'Darkening Awaits!',
    symbol: 'ETH — BAL UNI-V2 LP',
    tokenSymbol: 'DARK',
    icon: <GiAncientSword />,
  },
  {
    pid: 10,
    lpAddresses: {
      1: '0xce84867c3c02b05dc570d0135103d3fb9cc19433',
    },
    tokenAddresses: {
      1: '0x3108ccFd96816F9E663baA0E8c5951D229E8C6da',
    },
    name: 'Darkening Awaits!',
    symbol: 'ETH — REN UNI-V2 LP',
    tokenSymbol: 'DARK',
    icon: <GiRustySword />,
  },  {
    pid: 11,
    lpAddresses: {
      1: '0xce84867c3c02b05dc570d0135103d3fb9cc19433',
    },
    tokenAddresses: {
      1: '0x3108ccFd96816F9E663baA0E8c5951D229E8C6da',
    },
    name: 'Darkening Awaits!',
    symbol: 'ETH — AMP UNI-V2 LP',
    tokenSymbol: 'DARK',
    icon: <GiSwordBrandish />,
  },
  {
    pid: 12,
    lpAddresses: {
      1: '0xce84867c3c02b05dc570d0135103d3fb9cc19433',
    },
    tokenAddresses: {
      1: '0x3108ccFd96816F9E663baA0E8c5951D229E8C6da',
    },
    name: 'Darkening Awaits!',
    symbol: 'ETH — WNXM UNI-V2 LP',
    tokenSymbol: 'DARK',
    icon: <GiSwordsPower />,
  },  {
    pid: 13,
    lpAddresses: {
      1: '0xce84867c3c02b05dc570d0135103d3fb9cc19433',
    },
    tokenAddresses: {
      1: '0x3108ccFd96816F9E663baA0E8c5951D229E8C6da',
    },
    name: 'Darkening Awaits!',
    symbol: 'ETH — DF UNI-V2 LP',
    tokenSymbol: 'DARK',
    icon:<GiTwoHandedSword />,
  },
  {
    pid: 14,
    lpAddresses: {
      1: '0xce84867c3c02b05dc570d0135103d3fb9cc19433',
    },
    tokenAddresses: {
      1: '0x3108ccFd96816F9E663baA0E8c5951D229E8C6da',
    },
    name: 'Darkening Awaits!',
    symbol: 'ETH — MTA UNI-V2 LP',
    tokenSymbol: 'DARK',
    icon: <GiBloodySword />,
  },  {
    pid: 15,
    lpAddresses: {
      1: '0xce84867c3c02b05dc570d0135103d3fb9cc19433',
    },
    tokenAddresses: {
      1: '0x3108ccFd96816F9E663baA0E8c5951D229E8C6da',
    },
    name: 'Darkening Awaits!',
    symbol: 'ETH — FOR UNI-V2 LP',
    tokenSymbol: 'DARK',
    icon: <GiBroadsword />,
  },
  {
    pid: 16,
    lpAddresses: {
      1: '0xce84867c3c02b05dc570d0135103d3fb9cc19433',
    },
    tokenAddresses: {
      1: '0x3108ccFd96816F9E663baA0E8c5951D229E8C6da',
    },
    name: 'Darkening Awaits!',
    symbol: 'ETH — BNT UNI-V2 LP',
    tokenSymbol: 'DARK',
    icon: <GiCrocSword />,
  },  {
    pid: 17,
    lpAddresses: {
      1: '0xce84867c3c02b05dc570d0135103d3fb9cc19433',
    },
    tokenAddresses: {
      1: '0x3108ccFd96816F9E663baA0E8c5951D229E8C6da',
    },
    name: 'Darkening Awaits!',
    symbol: 'ETH — LRC UNI-V2 LP',
    tokenSymbol: 'DARK',
    icon: <GiCrossedSwords />,
  },
  {
    pid: 18,
    lpAddresses: {
      1: '0xce84867c3c02b05dc570d0135103d3fb9cc19433',
    },
    tokenAddresses: {
      1: '0x3108ccFd96816F9E663baA0E8c5951D229E8C6da',
    },
    name: 'Darkening Awaits!',
    symbol: 'ETH — LINK UNI-V2 LP',
    tokenSymbol: 'DARK',
    icon:<GiDervishSwords />,
  },  {
    pid: 19,
    lpAddresses: {
      1: '0xce84867c3c02b05dc570d0135103d3fb9cc19433',
    },
    tokenAddresses: {
      1: '0x3108ccFd96816F9E663baA0E8c5951D229E8C6da',
    },
    name: 'Darkening Awaits!',
    symbol: 'ETH — UMA UNI-V2 LP',
    tokenSymbol: 'DARK',
    icon: <GiDrippingSword />,
  },
  {
    pid: 20,
    lpAddresses: {
      1: '0xce84867c3c02b05dc570d0135103d3fb9cc19433',
    },
    tokenAddresses: {
      1: '0x3108ccFd96816F9E663baA0E8c5951D229E8C6da',
    },
    name: 'Darkening Awaits!',
    symbol: 'ETH — BAND UNI-V2 LP',
    tokenSymbol: 'DARK',
    icon: <GiEnergySword />,
  },  {
    pid: 21,
    lpAddresses: {
      1: '0xce84867c3c02b05dc570d0135103d3fb9cc19433',
    },
    tokenAddresses: {
      1: '0x3108ccFd96816F9E663baA0E8c5951D229E8C6da',
    },
    name: 'Darkening Awaits!',
    symbol: 'ETH — AMPL UNI-V2 LP',
    tokenSymbol: 'DARK',
    icon: <GiFragmentedSword />,
  },
  {
    pid: 22,
    lpAddresses: {
      1: '0xce84867c3c02b05dc570d0135103d3fb9cc19433',
    },
    tokenAddresses: {
      1: '0x3108ccFd96816F9E663baA0E8c5951D229E8C6da',
    },
    name: 'Darkening Awaits!',
    symbol: 'ETH — SRM UNI-V2 LP',
    tokenSymbol: 'DARK',
    icon: <GiPiercingSword />,
  },  {
    pid: 23,
    lpAddresses: {
      1: '0xce84867c3c02b05dc570d0135103d3fb9cc19433',
    },
    tokenAddresses: {
      1: '0x3108ccFd96816F9E663baA0E8c5951D229E8C6da',
    },
    name: 'Darkening Awaits!',
    symbol: 'ETH — RSR UNI-V2 LP',
    tokenSymbol: 'DARK',
    icon: <GiPointySword />,
  },
  {
    pid: 24,
    lpAddresses: {
      1: '0xce84867c3c02b05dc570d0135103d3fb9cc19433',
    },
    tokenAddresses: {
      1: '0x3108ccFd96816F9E663baA0E8c5951D229E8C6da',
    },
    name: 'Darkening Awaits!',
    symbol: 'ETH — BZRX UNI-V2 LP',
    tokenSymbol: 'DARK',
    icon: <GiShardSword />,
  },  {
    pid: 25,
    lpAddresses: {
      1: '0xce84867c3c02b05dc570d0135103d3fb9cc19433',
    },
    tokenAddresses: {
      1: '0x3108ccFd96816F9E663baA0E8c5951D229E8C6da',
    },
    name: 'Darkening Awaits!',
    symbol: 'ETH — DAI UNI-V2 LP',
    tokenSymbol: 'DARK',
    icon: <GiShatteredSword />,
  },
  {
    pid: 26,
    lpAddresses: {
      1: '0xce84867c3c02b05dc570d0135103d3fb9cc19433',
    },
    tokenAddresses: {
      1: '0x3108ccFd96816F9E663baA0E8c5951D229E8C6da',
    },
    name: 'Darkening Awaits!',
    symbol: 'ETH — USDC UNI-V2 LP',
    tokenSymbol: 'DARK',
    icon: <GiShiningSword />,
  },  {
    pid: 27,
    lpAddresses: {
      1: '0xce84867c3c02b05dc570d0135103d3fb9cc19433',
    },
    tokenAddresses: {
      1: '0x3108ccFd96816F9E663baA0E8c5951D229E8C6da',
    },
    name: 'Darkening Awaits!',
    symbol: 'ETH — yUSD UNI-V2 LP',
    tokenSymbol: 'DARK',
    icon: <GiSpinningSword />,
  },
  {
    pid: 28,
    lpAddresses: {
      1: '0xce84867c3c02b05dc570d0135103d3fb9cc19433',
    },
    tokenAddresses: {
      1: '0x3108ccFd96816F9E663baA0E8c5951D229E8C6da',
    },
    name: 'Darkening Awaits!',
    symbol: 'ETH — WBTC UNI-V2 LP',
    tokenSymbol: 'DARK',
    icon: <GiSwordHilt />,
  },  {
    pid: 29,
    lpAddresses: {
      1: '0xce84867c3c02b05dc570d0135103d3fb9cc19433',
    },
    tokenAddresses: {
      1: '0x3108ccFd96816F9E663baA0E8c5951D229E8C6da',
    },
    name: 'Darkening Awaits!',
    symbol: 'ETH — renZEC UNI-V2 LP',
    tokenSymbol: 'DARK',
    icon: <GiSwordInStone />,
  },
  {
    pid: 30,
    lpAddresses: {
      1: '0xce84867c3c02b05dc570d0135103d3fb9cc19433',
    },
    tokenAddresses: {
      1: '0x3108ccFd96816F9E663baA0E8c5951D229E8C6da',
    },
    name: 'Darkening Awaits!',
    symbol: 'ETH — renBCH UNI-V2 LP',
    tokenSymbol: 'DARK',
    icon: <GiSwordTie />,
  },  {
    pid: 31,
    lpAddresses: {
      1: '0xce84867c3c02b05dc570d0135103d3fb9cc19433',
    },
    tokenAddresses: {
      1: '0x3108ccFd96816F9E663baA0E8c5951D229E8C6da',
    },
    name: 'Darkening Awaits!',
    symbol: 'USDC — ETH SushiSwap SLP',
    tokenSymbol: 'DARK',
    icon: <GiSwordsEmblem />,
  },
  {
    pid: 32,
    lpAddresses: {
      1: '0xce84867c3c02b05dc570d0135103d3fb9cc19433',
    },
    tokenAddresses: {
      1: '0x3108ccFd96816F9E663baA0E8c5951D229E8C6da',
    },
    name: 'Darkening Awaits!',
    symbol: 'USDT — ETH SushiSwap SLP',
    tokenSymbol: 'DARK',
    icon: <GiWingedSword />,
  },  {
    pid: 33,
    lpAddresses: {
      1: '0xce84867c3c02b05dc570d0135103d3fb9cc19433',
    },
    tokenAddresses: {
      1: '0x3108ccFd96816F9E663baA0E8c5951D229E8C6da',
    },
    name: 'Darkening Awaits!',
    symbol: 'SUSHI — ETH SushiSwap SLP',
    tokenSymbol: 'DARK',
    icon: <GiZeusSword />,
  },
  {
    pid: 34,
    lpAddresses: {
      1: '0xce84867c3c02b05dc570d0135103d3fb9cc19433',
    },
    tokenAddresses: {
      1: '0x3108ccFd96816F9E663baA0E8c5951D229E8C6da',
    },
    name: 'Darkening Awaits!',
    symbol: 'DAI — ETH SushiSwap SLP',
    tokenSymbol: 'DARK',
    icon: <GiCrossedSabres />,
  },  {
    pid: 35,
    lpAddresses: {
      1: '0xce84867c3c02b05dc570d0135103d3fb9cc19433',
    },
    tokenAddresses: {
      1: '0x3108ccFd96816F9E663baA0E8c5951D229E8C6da',
    },
    name: 'Darkening Awaits!',
    symbol: 'YFI — ETH SushiSwap SLP',
    tokenSymbol: 'DARK',
    icon: <GiEnergyArrow />,
  },
  {
    pid: 36,
    lpAddresses: {
      1: '0xce84867c3c02b05dc570d0135103d3fb9cc19433',
    },
    tokenAddresses: {
      1: '0x3108ccFd96816F9E663baA0E8c5951D229E8C6da',
    },
    name: 'Darkening Awaits!',
    symbol: 'LINK — ETH SushiSwap SLP',
    tokenSymbol: 'DARK',
    icon: <GiHammerDrop />,
  },  {
    pid: 37,
    lpAddresses: {
      1: '0xce84867c3c02b05dc570d0135103d3fb9cc19433',
    },
    tokenAddresses: {
      1: '0x3108ccFd96816F9E663baA0E8c5951D229E8C6da',
    },
    name: 'Darkening Awaits!',
    symbol: 'LEND — ETH SushiSwap SLP',
    tokenSymbol: 'DARK',
    icon: <GiMeatHook />,
  },
  {
    pid: 38,
    lpAddresses: {
      1: '0xce84867c3c02b05dc570d0135103d3fb9cc19433',
    },
    tokenAddresses: {
      1: '0x3108ccFd96816F9E663baA0E8c5951D229E8C6da',
    },
    name: 'Darkening Awaits!',
    symbol: 'SUSD — ETH SushiSwap SLP',
    tokenSymbol: 'DARK',
    icon: <GiPlainDagger />,
  },  {
    pid: 39,
    lpAddresses: {
      1: '0xce84867c3c02b05dc570d0135103d3fb9cc19433',
    },
    tokenAddresses: {
      1: '0x3108ccFd96816F9E663baA0E8c5951D229E8C6da',
    },
    name: 'Darkening Awaits!',
    symbol: 'SNX — ETH SushiSwap SLP',
    tokenSymbol: 'DARK',
    icon: <GiSacrificialDagger />,
  },
  {
    pid: 40,
    lpAddresses: {
      1: '0xce84867c3c02b05dc570d0135103d3fb9cc19433',
    },
    tokenAddresses: {
      1: '0x3108ccFd96816F9E663baA0E8c5951D229E8C6da',
    },
    name: 'Darkening Awaits!',
    symbol: 'DARK — ETH UNI-V2 LP',
    tokenSymbol: 'DARK',
    icon: <GiScythe />,
  },  {
    pid: 41,
    lpAddresses: {
      1: '0xce84867c3c02b05dc570d0135103d3fb9cc19433',
    },
    tokenAddresses: {
      1: '0x3108ccFd96816F9E663baA0E8c5951D229E8C6da',
    },
    name: 'Darkening Awaits!',
    symbol: 'DARK — RI UNI-V2 LP',
    tokenSymbol: 'DARK',
    icon: <GiSpiralThrust />,
  },
  {
    pid: 42,
    lpAddresses: {
      1: '0xce84867c3c02b05dc570d0135103d3fb9cc19433',
    },
    tokenAddresses: {
      1: '0x3108ccFd96816F9E663baA0E8c5951D229E8C6da',
    },
    name: 'Darkening Awaits!',
    symbol: 'DARK — yUSD UNI-V2 LP',
    tokenSymbol: 'DARK',
    icon: <GiStiletto />,
  },  {
    pid: 43,
    lpAddresses: {
      1: '0xce84867c3c02b05dc570d0135103d3fb9cc19433',
    },
    tokenAddresses: {
      1: '0x3108ccFd96816F9E663baA0E8c5951D229E8C6da',
    },
    name: 'Darkening Awaits!',
    symbol: 'XIOT — ETH UNI-V2 LP',
    tokenSymbol: 'DARK',
    icon: <GiMonkeyWrench />,
  },
  {
    pid: 44,
    lpAddresses: {
      1: '0xce84867c3c02b05dc570d0135103d3fb9cc19433',
    },
    tokenAddresses: {
      1: '0x3108ccFd96816F9E663baA0E8c5951D229E8C6da',
    },
    name: 'Darkening Awaits!',
    symbol: 'XIOT — BXIOT UNI-V2 LP',
    tokenSymbol: 'DARK',
    icon: <GiPirateFlag />,
  },
  {
    pid: 45,
    lpAddresses: {
      1: '0xce84867c3c02b05dc570d0135103d3fb9cc19433',
    },
    tokenAddresses: {
      1: '0x3108ccFd96816F9E663baA0E8c5951D229E8C6da',
    },
    name: 'Darkening Awaits!',
    symbol: 'XIOT — RI UNI-V2 LP',
    tokenSymbol: 'DARK',
    icon: <GiSwordAltar />,
  },
]