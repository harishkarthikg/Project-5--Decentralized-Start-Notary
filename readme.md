# Star Notary - Udacity Blockchain Project 5
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
```
