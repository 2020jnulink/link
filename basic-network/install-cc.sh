#!/bin/bash
set -ev

# install chaincode for channelsales1
docker exec cli1 peer chaincode install -n scooter-cc-ch1 -v 1.0 -p chaincode/go
sleep 1
# instantiate chaincode for channelsales1
docker exec cli1 peer chaincode instantiate -o orderer1.acornpub.com:7050 -C channelsales1 -n scooter-cc-ch1 -v 1.0 -c '{"Args":[""]}' -P "OR ('Sales1Org.member','CustomerOrg.member')"
sleep 10
# invoke chaincode for channelsales1
docker exec cli1 peer chaincode invoke -o orderer1.acornpub.com:7050 -C channelsales1 -n scooter-cc-ch1 -c '{"function":"initWallet","Args":[""]}'
docker exec cli1 peer chaincode invoke -o orderer1.acornpub.com:7050 -C channelsales1 -n scooter-cc-ch1 -c '{"function":"setScooter","Args":["Fabric", "Hyper", "20", "1Q2W3E4R"]}'
sleep 3
# query chaincode for channelsales1
docker exec cli1 peer chaincode query -o orderer1.acornpub.com:7050 -C channelsales1 -n scooter-cc-ch1 -c '{"function":"getScooter","Args":["MS0"]}'

# install chaincode for channelsales2
docker exec cli2 peer chaincode install -n scooter-cc-ch2 -v 1.0 -p chaincode/go
sleep 1
# install chaincode for channelsales2
docker exec cli2 peer chaincode instantiate -o orderer1.acornpub.com:7050 -C channelsales2 -n scooter-cc-ch2 -v 1.0 -c '{"Args":[""]}' -P "OR ('Sales2Org.member','CustomerOrg.member')"
sleep 3
# invoke chaincode for channelsales2
docker exec cli2 peer chaincode invoke -o orderer1.acornpub.com:7050 -C channelsales2 -n scooter-cc-ch2 -c '{"function":"initWallet","Args":[""]}'
docker exec cli2 peer chaincode invoke -o orderer1.acornpub.com:7050 -C channelsales2 -n scooter-cc-ch2 -c '{"function":"setScooter","Args":["Fabric", "Hyper", "10", "1Q2W3E4R"]}'
sleep 3
# query chaincode for channelsales2
docker exec cli2 peer chaincode query -o orderer1.acornpub.com:7050 -C channelsales2 -n scooter-cc-ch2 -c '{"function":"getScooter","Args":["MS0"]}'

ls $GOPATH/src/link/basic-network/crypto-config/peerOrganizations/sales1.acornpub.com/ca/
