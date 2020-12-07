# Project 5- Decentralized Cryptostar application on Ethereum 
DApps for claiming, buy, transfer, exchange star with blockchain Ethereum.

## Specification
### Versions
- Truffle: 5.1.55
- OpenZeppelin: 2.5.1
- node: 12.13.0


## Token
- Name: SimpleToken
- Symbol: HKK

Create a `.secret` file which include mnemonic (metamask seed).

## Develop
Run test on the contract

```
$ truffle develop
$ compile
$ migrate --reset
$ test
```

## Run in Rinkeby network
Deploy contract to rinkeby test network
```
$ truffle migrate --reset --network rinkeby

Rinkeby Wallet Address: 

https://rinkeby.etherscan.io/address/0x627306090abab3a6e1400e9345bc60c78a8bef57

Contract Address: 

https://rinkeby.etherscan.io/tx/0x5ea632c353d97ab8c84ac862945fcbe75e6cc2d45e5e5838ab817f82958d6a7b


```
