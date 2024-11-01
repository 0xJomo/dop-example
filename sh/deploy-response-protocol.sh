#!/bin/bash

parent_path=$( cd "$(dirname "${BASH_SOURCE[0]}")" ; pwd -P )
cd "$parent_path"

RPC_URL=https://ethereum-holesky-rpc.publicnode.com
PRIVATE_KEY=
cd $parent_path/../
forge script script/ResponseProtocol.s.sol --rpc-url $RPC_URL --private-key $PRIVATE_KEY --broadcast -v