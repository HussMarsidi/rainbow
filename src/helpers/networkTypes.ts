export enum Network {
  goerli = 'goerli',
  kovan = 'kovan',
  mainnet = 'mainnet',
  kovanovm = 'kovanovm',
  ovm = 'ovm',
  polygon = 'polygon',
  rinkeby = 'rinkeby',
  ropsten = 'ropsten',
}

// We need to keep this one until
// we have typescript everywhere
export default {
  goerli: 'goerli' as Network,
  kovan: 'kovan' as Network,
  kovanovm: 'kovanovm' as Network,
  mainnet: 'mainnet' as Network,
  ovm: 'ovm' as Network,
  polygon: 'polygon' as Network,
  rinkeby: 'rinkeby' as Network,
  ropsten: 'ropsten' as Network,
};
