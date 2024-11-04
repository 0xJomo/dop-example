## Quick Start Guide

### Update git submodules

```bash
git submodule update --init --recursive
```

### Configure dev environment

```bash
curl -L https://foundry.paradigm.xyz | bash
foundryup

# install vscode (optional)
# - add solidity extension JuanBlanco.solidity

# install drosera-cli
curl -L https://app.drosera.io/install | bash
droseraup
```

open the VScode preferences and Select `Solidity: Change workpace compiler version (Remote)`

Select version `0.8.12`

### DOP Trap

The drosera.toml file is configured to deploy a simple DOP trap. Ensure the drosera.toml file is set to the following configuration:

```toml
# Contract function will be executed when the trap is triggered
response_contract = "0xdA890040Af0533D98B9F5f8FE3537720ABf83B0C"
response_function = "helloworld(string)"
```

To deploy the trap, run the following commands:

```bash
# Compile the Trap
forge build

# Deploy/Update the Trap
# Use the account whitelisted for use on the Drosera Holesky testnet.
DROSERA_PRIVATE_KEY=0x.. drosera apply
```

> Note: The `DROSERA_PRIVATE_KEY` environment variable can be used to deploy traps. You can also set it in the drosera.toml file as `private_key = "0x.."`.

After successfully deploying the trap, the CLI will add an `address` field to the `drosera.toml` file.

Congratulations! You have successfully deployed a trap!

### View your trap

- [Drosera App](https://app.drosera.io/)

### Performing an OpenLayer request

```shell
yarn
yarn start
```

## Foundry

**Foundry is a blazing fast, portable and modular toolkit for Ethereum application development written in Rust.**

Foundry consists of:

- **Forge**: Ethereum testing framework (like Truffle, Hardhat and DappTools).
- **Cast**: Swiss army knife for interacting with EVM smart contracts, sending transactions and getting chain data.
- **Anvil**: Local Ethereum node, akin to Ganache, Hardhat Network.
- **Chisel**: Fast, utilitarian, and verbose solidity REPL.

## Documentation

https://book.getfoundry.sh/

## Usage

### Build

```shell
$ forge build
```

### Test

```shell
$ forge test
```

### Format

```shell
$ forge fmt
```

### Gas Snapshots

```shell
$ forge snapshot
```

### Anvil

```shell
$ anvil
```

### Deploy

```shell
$ forge script script/Counter.s.sol:CounterScript --rpc-url <your_rpc_url> --private-key <your_private_key>
```

### Cast

```shell
$ cast <subcommand>
```

### Help

```shell
$ forge --help
$ anvil --help
$ cast --help
```
