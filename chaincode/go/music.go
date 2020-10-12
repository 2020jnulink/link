package main

import (
	"bytes"
	"encoding/json"
	"fmt"
	"strconv"

	"github.com/hyperledger/fabric/core/chaincode/shim"
	pb "github.com/hyperledger/fabric/protos/peer"
)

type SmartContract struct{}

func (s *SmartContract) Init(APIstub shim.ChaincodeStubInterface) pb.Response {
	return shim.Success(nil)
}

func (s *SmartContract) Invoke(APIstub shim.ChaincodeStubInterface) pb.Response {
	function, args := APIstub.GetFunctionAndParameters()

	if function == "initWallet" {
		return s.initWallet(APIstub)
	} else if function == "getWallet" {
		return s.getWallet(APIstub, args)
	} else if function == "setWallet" {
		return s.setWallet(APIstub, args)
	} else if function == "getScooter" {
		return s.getScooter(APIstub, args)
	} else if function == "setScooter" {
		return s.setScooter(APIstub, args)
	} else if function == "getAllScooter" {
		return s.getAllScooter(APIstub)
	} else if function == "purchaseScooter" {
		return s.purchaseScooter(APIstub, args)
	} else if function == "changeScooterPrice" {
		return s.changeScooterPrice(APIstub, args)
	} else if function == "deleteScooter" {
		return s.deleteScooter(APIstub, args)
	}
	fmt.Println("Please check your function : " + function)
	return shim.Error("Unknown function")
}

func main() {

	err := shim.Start(new(SmartContract))
	if err != nil {
		fmt.Printf("Error starting Simple chaincode: %s", err)
	}
}

type Wallet struct {
	Name  string `json:"name"`
	ID    string `json:"id"`
	Token string `json:"token"`
}

func (s *SmartContract) initWallet(APIstub shim.ChaincodeStubInterface) pb.Response {

	//Declare wallets
	seller := Wallet{Name: "Hyper", ID: "1Q2W3E4R", Token: "100"}
	customer := Wallet{Name: "Ledger", ID: "5T6Y7U8I", Token: "200"}

	// Convert seller to []byte
	SellerasJSONBytes, _ := json.Marshal(seller)
	err := APIstub.PutState(seller.ID, SellerasJSONBytes)
	if err != nil {
		return shim.Error("Failed to create asset " + seller.Name)
	}
	// Convert customer to []byte
	CustomerasJSONBytes, _ := json.Marshal(customer)
	err = APIstub.PutState(customer.ID, CustomerasJSONBytes)
	if err != nil {
		return shim.Error("Failed to create asset " + customer.Name)
	}

	return shim.Success(nil)
}
func (s *SmartContract) getWallet(APIstub shim.ChaincodeStubInterface, args []string) pb.Response {

	walletAsBytes, err := APIstub.GetState(args[0])
	if err != nil {
		fmt.Println(err.Error())
	}

	wallet := Wallet{}
	json.Unmarshal(walletAsBytes, &wallet)

	var buffer bytes.Buffer
	buffer.WriteString("[")
	bArrayMemberAlreadyWritten := false

	if bArrayMemberAlreadyWritten == true {
		buffer.WriteString(",")
	}
	buffer.WriteString("{\"Name\":")
	buffer.WriteString("\"")
	buffer.WriteString(wallet.Name)
	buffer.WriteString("\"")

	buffer.WriteString(", \"ID\":")
	buffer.WriteString("\"")
	buffer.WriteString(wallet.ID)
	buffer.WriteString("\"")

	buffer.WriteString(", \"Token\":")
	buffer.WriteString("\"")
	buffer.WriteString(wallet.Token)
	buffer.WriteString("\"")

	buffer.WriteString("}")
	bArrayMemberAlreadyWritten = true
	buffer.WriteString("]\n")

	return shim.Success(buffer.Bytes())

}

type Scooter struct {
	Productname  string `json:"productname"`
	Manufacturer string `json:"manufacturer"`
	Price        string `json:"price"`
	WalletID     string `json:"walletid"`
	Count        string `json:"count"`
}

type ScooterKey struct {
	Key string
	Idx int
}

func generateKey(APIstub shim.ChaincodeStubInterface, key string) []byte {

	var isFirst bool = false

	scooterkeyAsBytes, err := APIstub.GetState(key)
	if err != nil {
		fmt.Println(err.Error())
	}

	scooterkey := ScooterKey{}
	json.Unmarshal(scooterkeyAsBytes, &scooterkey)
	var tempIdx string
	tempIdx = strconv.Itoa(scooterkey.Idx)
	fmt.Println(scooterkey)
	fmt.Println("Key is " + strconv.Itoa(len(scooterkey.Key)))
	if len(scooterkey.Key) == 0 || scooterkey.Key == "" {
		isFirst = true
		scooterkey.Key = "MS"
	}
	if !isFirst {
		scooterkey.Idx = scooterkey.Idx + 1
	}

	fmt.Println("Last ScooterKey is " + scooterkey.Key + " : " + tempIdx)

	returnValueBytes, _ := json.Marshal(scooterkey)

	return returnValueBytes
}
func (s *SmartContract) setWallet(APIstub shim.ChaincodeStubInterface, args []string) pb.Response {
	if len(args) != 3 {
		return shim.Error("Incorrect number of arguments. Expecting 3")
	}
	var wallet = Wallet{Name: args[0], ID: args[1], Token: args[2]}

	WalletasJSONBytes, _ := json.Marshal(wallet)
	err := APIstub.PutState(wallet.ID, WalletasJSONBytes)
	if err != nil {
		return shim.Error("Failed to create asset " + wallet.Name)
	}
	return shim.Success(nil)
}

func (s *SmartContract) setScooter(APIstub shim.ChaincodeStubInterface, args []string) pb.Response {
	if len(args) != 4 {
		return shim.Error("Incorrect number of arguments. Expecting 4")
	}

	var scooterkey = ScooterKey{}
	json.Unmarshal(generateKey(APIstub, "latestKey"), &scooterkey)
	keyidx := strconv.Itoa(scooterkey.Idx)
	fmt.Println("Key : " + scooterkey.Key + ", Idx : " + keyidx)

	var scooter = Scooter{Productname: args[0], Manufacturer: args[1], Price: args[2], WalletID: args[3], Count: "0"}
	scooterAsJSONBytes, _ := json.Marshal(scooter)

	var keyString = scooterkey.Key + keyidx
	fmt.Println("scooterkey is " + keyString)

	err := APIstub.PutState(keyString, scooterAsJSONBytes)
	if err != nil {
		return shim.Error(fmt.Sprintf("Failed to record scooter catch: %s", scooterkey))
	}

	scooterkeyAsBytes, _ := json.Marshal(scooterkey)
	APIstub.PutState("latestKey", scooterkeyAsBytes)

	return shim.Success(nil)
}
func (s *SmartContract) getAllScooter(APIstub shim.ChaincodeStubInterface) pb.Response {

	// Find latestKey
	scooterkeyAsBytes, _ := APIstub.GetState("latestKey")
	scooterkey := ScooterKey{}
	json.Unmarshal(scooterkeyAsBytes, &scooterkey)
	idxStr := strconv.Itoa(scooterkey.Idx + 1)

	var startKey = "MS0"
	var endKey = scooterkey.Key + idxStr
	fmt.Println(startKey)
	fmt.Println(endKey)

	resultsIter, err := APIstub.GetStateByRange(startKey, endKey)
	if err != nil {
		return shim.Error(err.Error())
	}
	defer resultsIter.Close()

	var buffer bytes.Buffer
	buffer.WriteString("[")
	bArrayMemberAlreadyWritten := false
	for resultsIter.HasNext() {
		queryResponse, err := resultsIter.Next()
		if err != nil {
			return shim.Error(err.Error())
		}

		if bArrayMemberAlreadyWritten == true {
			buffer.WriteString(",")
		}
		buffer.WriteString("{\"Key\":")
		buffer.WriteString("\"")
		buffer.WriteString(queryResponse.Key)
		buffer.WriteString("\"")

		buffer.WriteString(", \"Record\":")

		buffer.WriteString(string(queryResponse.Value))
		buffer.WriteString("}")
		bArrayMemberAlreadyWritten = true
	}
	buffer.WriteString("]\n")
	return shim.Success(buffer.Bytes())
}
func (s *SmartContract) purchaseScooter(APIstub shim.ChaincodeStubInterface, args []string) pb.Response {
	var tokenFromKey, tokenToKey int // Asset holdings
	var scooterprice int             // Transaction value
	var scootercount int
	var err error

	if len(args) != 2 {
		return shim.Error("Incorrect number of arguments. Expecting 2")
	}

	scooterAsBytes, err := APIstub.GetState(args[1])
	if err != nil {
		return shim.Error(err.Error())
	}

	scooter := Scooter{}
	json.Unmarshal(scooterAsBytes, &scooter)
	scooterprice, _ = strconv.Atoi(scooter.Price)
	scootercount, _ = strconv.Atoi(scooter.Count)

	SellerAsBytes, err := APIstub.GetState(scooter.WalletID)
	if err != nil {
		return shim.Error("Failed to get state")
	}
	if SellerAsBytes == nil {
		return shim.Error("Entity not found")
	}
	seller := Wallet{}
	json.Unmarshal(SellerAsBytes, &seller)
	tokenToKey, _ = strconv.Atoi(seller.Token)

	CustomerAsBytes, err := APIstub.GetState(args[0])
	if err != nil {
		return shim.Error("Failed to get state")
	}
	if CustomerAsBytes == nil {
		return shim.Error("Entity not found")
	}

	customer := Wallet{}
	json.Unmarshal(CustomerAsBytes, &customer)
	tokenFromKey, _ = strconv.Atoi(string(customer.Token))

	customer.Token = strconv.Itoa(tokenFromKey - scooterprice)
	seller.Token = strconv.Itoa(tokenToKey + scooterprice)
	scooter.Count = strconv.Itoa(scootercount + 1)
	updatedCustomerAsBytes, _ := json.Marshal(customer)
	updatedSellerAsBytes, _ := json.Marshal(seller)
	updatedScooterAsBytes, _ := json.Marshal(scooter)
	APIstub.PutState(args[0], updatedCustomerAsBytes)
	APIstub.PutState(scooter.WalletID, updatedSellerAsBytes)
	APIstub.PutState(args[1], updatedScooterAsBytes)

	// buffer is a JSON array containing QueryResults
	var buffer bytes.Buffer
	buffer.WriteString("[")

	buffer.WriteString("{\"Customer Token\":")
	buffer.WriteString("\"")
	buffer.WriteString(customer.Token)
	buffer.WriteString("\"")

	buffer.WriteString(", \"Seller Token\":")
	buffer.WriteString("\"")
	buffer.WriteString(seller.Token)
	buffer.WriteString("\"")

	buffer.WriteString("}")
	buffer.WriteString("]\n")

	return shim.Success(buffer.Bytes())
}

func (s *SmartContract) getScooter(APIstub shim.ChaincodeStubInterface, args []string) pb.Response {

	scooterAsBytes, err := APIstub.GetState(args[0])
	if err != nil {
		fmt.Println(err.Error())
	}

	scooter := Scooter{}
	json.Unmarshal(scooterAsBytes, &scooter)

	var buffer bytes.Buffer
	buffer.WriteString("[")
	bArrayMemberAlreadyWritten := false

	if bArrayMemberAlreadyWritten == true {
		buffer.WriteString(",")
	}
	buffer.WriteString("{\"Productname\":")
	buffer.WriteString("\"")
	buffer.WriteString(scooter.Productname)
	buffer.WriteString("\"")

	buffer.WriteString(", \"Manufacturer\":")
	buffer.WriteString("\"")
	buffer.WriteString(scooter.Manufacturer)
	buffer.WriteString("\"")

	buffer.WriteString(", \"Price\":")
	buffer.WriteString("\"")
	buffer.WriteString(scooter.Price)
	buffer.WriteString("\"")

	buffer.WriteString(", \"WalletID\":")
	buffer.WriteString("\"")
	buffer.WriteString(scooter.WalletID)
	buffer.WriteString("\"")

	buffer.WriteString(", \"Count\":")
	buffer.WriteString("\"")
	buffer.WriteString(scooter.Count)
	buffer.WriteString("\"")

	buffer.WriteString("}")
	bArrayMemberAlreadyWritten = true
	buffer.WriteString("]\n")

	return shim.Success(buffer.Bytes())
}
func (s *SmartContract) changeScooterPrice(APIstub shim.ChaincodeStubInterface, args []string) pb.Response {
	if len(args) != 2 {
		return shim.Error("Incorrect number of arguments. Expecting 2")
	}
	scooterbytes, err := APIstub.GetState(args[0])
	if err != nil {
		return shim.Error("Could not locate scooter")
	}
	scooter := Scooter{}
	json.Unmarshal(scooterbytes, &scooter)

	scooter.Price = args[1]
	scooterbytes, _ = json.Marshal(scooter)
	err2 := APIstub.PutState(args[0], scooterbytes)
	if err2 != nil {
		return shim.Error(fmt.Sprintf("Failed to change scooter price: %s", args[0]))
	}
	return shim.Success(nil)
}
func (s *SmartContract) deleteScooter(APIstub shim.ChaincodeStubInterface, args []string) pb.Response {
	if len(args) != 1 {
		return shim.Error("Incorrect number of arguments. Expecting 1")
	}

	A := args[0]

	// Delete the key from the state in ledger
	err := APIstub.DelState(A)
	if err != nil {
		return shim.Error("Failed to delete state")
	}

	return shim.Success(nil)
}
