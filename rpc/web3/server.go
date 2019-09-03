// Code generated by go-openrpc. DO NOT EDIT.
package web3

import (
	"encoding/json"
	"fmt"
	"io/ioutil"
	"net/http"
	"reflect"
)

const JSONRPC = "2.0"

type Code uint32

const (
	ErrUnknown Code = iota
	ErrCouldNotParse
	ErrInvalidRequest
	ErrNotFound
	ErrInvalidParams
	ErrInternal
	ErrServer
)

func (c Code) Error() string {
	return fmt.Sprintf("Error %d: %s", c, c.String())
}

func (c Code) String() string {
	switch c {
	case ErrCouldNotParse:
		return "could not parse input"
	case ErrInvalidRequest:
		return "invalid request"
	case ErrNotFound:
		return "not found"
	case ErrInvalidParams:
		return "invalid parameters"
	case ErrInternal:
		return "internal error"
	case ErrServer:
		return "server error"
	default:
		return "unknown error"
	}
}

func (c Code) RPCError() *RPCError {
	switch c {
	case ErrCouldNotParse:
		return NewRPCError(-32700, c.String())
	case ErrInvalidRequest:
		return NewRPCError(-32600, c.String())
	case ErrNotFound:
		return NewRPCError(-32601, c.String())
	case ErrInvalidParams:
		return NewRPCError(-32602, c.String())
	case ErrInternal:
		return NewRPCError(-32603, c.String())
	case ErrServer:
		return NewRPCError(-32000, c.String())
	default:
		return NewRPCError(-32099, c.String())
	}
}

func (c Code) RPCErrorWithMessage(msg string) *RPCError {
	resp := c.RPCError()
	resp.Message = msg
	return resp
}

// https://www.jsonrpc.org/specification#request_object
type RPCRequest struct {
	JSONRPC string          `json:"jsonrpc"`
	Method  string          `json:"method"`
	Params  json.RawMessage `json:"params"`
	ID      int             `json:"id"`
}

// https://www.jsonrpc.org/specification#response_object
type RPCResultResponse struct {
	JSONRPC string      `json:"jsonrpc"`
	Result  interface{} `json:"result"`
	ID      int         `json:"id"`
}

// https://www.jsonrpc.org/specification#response_object
type RPCErrorResponse struct {
	JSONRPC string    `json:"jsonrpc"`
	Error   *RPCError `json:"error"`
	ID      int       `json:"id"`
}

// https://www.jsonrpc.org/specification#error_object
type RPCError struct {
	Code    int         `json:"code"`
	Message string      `json:"message"`
	Data    interface{} `json:"data,omitempty"`
}

func NewRPCError(code int, msg string) *RPCError {
	return &RPCError{Code: code, Message: msg}
}

type Server struct {
	service Service
}

func NewServer(rpc Service) *Server {
	return &Server{rpc}
}

func (srv *Server) HandleHTTP(rpcPath string) {
	http.Handle(rpcPath, srv)
}

// https://github.com/a8m/reflect-examples#wrap-a-reflectvalue-with-pointer-t--t
func ptr(v reflect.Value) reflect.Value {
	pt := reflect.PtrTo(v.Type())
	pv := reflect.New(pt.Elem())
	pv.Elem().Set(v)
	return pv
}

func ParamsToStruct(msg json.RawMessage, req interface{}) error {
	// by-name
	err := json.Unmarshal(msg, req)
	if err == nil {
		return nil
	}

	// by-position
	params := make([]json.RawMessage, 0)
	err = json.Unmarshal(msg, &params)
	if err != nil {
		return err
	}
	val := reflect.ValueOf(req)
	if val.Kind() == reflect.Ptr {
		val = val.Elem()
	}

	for i, p := range params {
		if i >= val.NumField() {
			break
		}
		field := val.Field(i)
		if field.CanSet() {
			pf := ptr(field)
			err = json.Unmarshal(p, pf.Interface())
			if err != nil {
				return err
			}
			field.Set(pf.Elem())
		}
	}
	return nil
}

func StructToResult(in interface{}) interface{} {
	val := reflect.ValueOf(in)
	if val.Kind() == reflect.Ptr {
		val = val.Elem()
	}
	if val.Kind() != reflect.Struct {
		return in
	}
	if val.NumField() == 1 {
		return val.Field(0).Interface()
	} else if val.NumField() > 1 {
		result := make([]interface{}, 0)
		for i := 0; i < val.NumField(); i++ {
			field := val.Field(i)
			if val.Kind() == reflect.Ptr {
				field = field.Elem()
			}

			if field.Kind() == reflect.Slice {
				for i := 0; i < field.Len(); i++ {
					result = append(result, field.Index(i).Interface())
				}
			} else if field.CanInterface() {
				result = append(result, field.Interface())
			}
		}
		return result
	} else {
		return nil
	}
}

func (srv *Server) ServeHTTP(w http.ResponseWriter, r *http.Request) {
	if r.Method != http.MethodPost {
		WriteError(w, 0, ErrInternal.RPCError())
		return
	}

	data, err := ioutil.ReadAll(r.Body)
	if err != nil {
		WriteError(w, 0, ErrInvalidRequest.RPCError())
		return
	}
	r.Body.Close()

	in := new(RPCRequest)
	err = json.Unmarshal(data, in)
	if err != nil {
		WriteError(w, 0, ErrCouldNotParse.RPCError())
		return
	}

	if in.JSONRPC != JSONRPC || in.Method == "" || in.ID == 0 {
		WriteError(w, 0, ErrInvalidParams.RPCError())
		return
	}

	var out interface{}

	switch in.Method {
	case "web3_clientVersion":
		out, err = srv.service.Web3ClientVersion()
	case "web3_sha3":
		req := new(Web3Sha3Params)
		err = ParamsToStruct(in.Params, req)
		if err == nil {
			out, err = srv.service.Web3Sha3(req)
		}
	case "net_listening":
		out, err = srv.service.NetListening()
	case "net_peerCount":
		out, err = srv.service.NetPeerCount()
	case "net_version":
		out, err = srv.service.NetVersion()
	case "eth_blockNumber":
		out, err = srv.service.EthBlockNumber()
	case "eth_call":
		req := new(EthCallParams)
		err = ParamsToStruct(in.Params, req)
		if err == nil {
			out, err = srv.service.EthCall(req)
		}
	case "eth_chainId":
		out, err = srv.service.EthChainId()
	case "eth_coinbase":
		out, err = srv.service.EthCoinbase()
	case "eth_estimateGas":
		req := new(EthEstimateGasParams)
		err = ParamsToStruct(in.Params, req)
		if err == nil {
			out, err = srv.service.EthEstimateGas(req)
		}
	case "eth_gasPrice":
		out, err = srv.service.EthGasPrice()
	case "eth_getBalance":
		req := new(EthGetBalanceParams)
		err = ParamsToStruct(in.Params, req)
		if err == nil {
			out, err = srv.service.EthGetBalance(req)
		}
	case "eth_getBlockByHash":
		req := new(EthGetBlockByHashParams)
		err = ParamsToStruct(in.Params, req)
		if err == nil {
			out, err = srv.service.EthGetBlockByHash(req)
		}
	case "eth_getBlockByNumber":
		req := new(EthGetBlockByNumberParams)
		err = ParamsToStruct(in.Params, req)
		if err == nil {
			out, err = srv.service.EthGetBlockByNumber(req)
		}
	case "eth_getBlockTransactionCountByHash":
		req := new(EthGetBlockTransactionCountByHashParams)
		err = ParamsToStruct(in.Params, req)
		if err == nil {
			out, err = srv.service.EthGetBlockTransactionCountByHash(req)
		}
	case "eth_getBlockTransactionCountByNumber":
		req := new(EthGetBlockTransactionCountByNumberParams)
		err = ParamsToStruct(in.Params, req)
		if err == nil {
			out, err = srv.service.EthGetBlockTransactionCountByNumber(req)
		}
	case "eth_getCode":
		req := new(EthGetCodeParams)
		err = ParamsToStruct(in.Params, req)
		if err == nil {
			out, err = srv.service.EthGetCode(req)
		}
	case "eth_getFilterChanges":
		req := new(EthGetFilterChangesParams)
		err = ParamsToStruct(in.Params, req)
		if err == nil {
			out, err = srv.service.EthGetFilterChanges(req)
		}
	case "eth_getFilterLogs":
		req := new(EthGetFilterLogsParams)
		err = ParamsToStruct(in.Params, req)
		if err == nil {
			out, err = srv.service.EthGetFilterLogs(req)
		}
	case "eth_getRawTransactionByHash":
		req := new(EthGetRawTransactionByHashParams)
		err = ParamsToStruct(in.Params, req)
		if err == nil {
			out, err = srv.service.EthGetRawTransactionByHash(req)
		}
	case "eth_getRawTransactionByBlockHashAndIndex":
		req := new(EthGetRawTransactionByBlockHashAndIndexParams)
		err = ParamsToStruct(in.Params, req)
		if err == nil {
			out, err = srv.service.EthGetRawTransactionByBlockHashAndIndex(req)
		}
	case "eth_getRawTransactionByBlockNumberAndIndex":
		req := new(EthGetRawTransactionByBlockNumberAndIndexParams)
		err = ParamsToStruct(in.Params, req)
		if err == nil {
			out, err = srv.service.EthGetRawTransactionByBlockNumberAndIndex(req)
		}
	case "eth_getLogs":
		req := new(EthGetLogsParams)
		err = ParamsToStruct(in.Params, req)
		if err == nil {
			out, err = srv.service.EthGetLogs(req)
		}
	case "eth_getStorageAt":
		req := new(EthGetStorageAtParams)
		err = ParamsToStruct(in.Params, req)
		if err == nil {
			out, err = srv.service.EthGetStorageAt(req)
		}
	case "eth_getTransactionByBlockHashAndIndex":
		req := new(EthGetTransactionByBlockHashAndIndexParams)
		err = ParamsToStruct(in.Params, req)
		if err == nil {
			out, err = srv.service.EthGetTransactionByBlockHashAndIndex(req)
		}
	case "eth_getTransactionByBlockNumberAndIndex":
		req := new(EthGetTransactionByBlockNumberAndIndexParams)
		err = ParamsToStruct(in.Params, req)
		if err == nil {
			out, err = srv.service.EthGetTransactionByBlockNumberAndIndex(req)
		}
	case "eth_getTransactionByHash":
		req := new(EthGetTransactionByHashParams)
		err = ParamsToStruct(in.Params, req)
		if err == nil {
			out, err = srv.service.EthGetTransactionByHash(req)
		}
	case "eth_getTransactionCount":
		req := new(EthGetTransactionCountParams)
		err = ParamsToStruct(in.Params, req)
		if err == nil {
			out, err = srv.service.EthGetTransactionCount(req)
		}
	case "eth_getTransactionReceipt":
		req := new(EthGetTransactionReceiptParams)
		err = ParamsToStruct(in.Params, req)
		if err == nil {
			out, err = srv.service.EthGetTransactionReceipt(req)
		}
	case "eth_getUncleByBlockHashAndIndex":
		req := new(EthGetUncleByBlockHashAndIndexParams)
		err = ParamsToStruct(in.Params, req)
		if err == nil {
			out, err = srv.service.EthGetUncleByBlockHashAndIndex(req)
		}
	case "eth_getUncleByBlockNumberAndIndex":
		req := new(EthGetUncleByBlockNumberAndIndexParams)
		err = ParamsToStruct(in.Params, req)
		if err == nil {
			out, err = srv.service.EthGetUncleByBlockNumberAndIndex(req)
		}
	case "eth_getUncleCountByBlockHash":
		req := new(EthGetUncleCountByBlockHashParams)
		err = ParamsToStruct(in.Params, req)
		if err == nil {
			out, err = srv.service.EthGetUncleCountByBlockHash(req)
		}
	case "eth_getUncleCountByBlockNumber":
		req := new(EthGetUncleCountByBlockNumberParams)
		err = ParamsToStruct(in.Params, req)
		if err == nil {
			out, err = srv.service.EthGetUncleCountByBlockNumber(req)
		}
	case "eth_getProof":
		req := new(EthGetProofParams)
		err = ParamsToStruct(in.Params, req)
		if err == nil {
			out, err = srv.service.EthGetProof(req)
		}
	case "eth_getWork":
		out, err = srv.service.EthGetWork()
	case "eth_hashrate":
		out, err = srv.service.EthHashrate()
	case "eth_mining":
		out, err = srv.service.EthMining()
	case "eth_newBlockFilter":
		out, err = srv.service.EthNewBlockFilter()
	case "eth_newFilter":
		req := new(EthNewFilterParams)
		err = ParamsToStruct(in.Params, req)
		if err == nil {
			out, err = srv.service.EthNewFilter(req)
		}
	case "eth_newPendingTransactionFilter":
		out, err = srv.service.EthNewPendingTransactionFilter()
	case "eth_pendingTransactions":
		out, err = srv.service.EthPendingTransactions()
	case "eth_protocolVersion":
		out, err = srv.service.EthProtocolVersion()
	case "eth_sign":
		req := new(EthSignParams)
		err = ParamsToStruct(in.Params, req)
		if err == nil {
			out, err = srv.service.EthSign(req)
		}
	case "eth_accounts":
		out, err = srv.service.EthAccounts()
	case "eth_sendTransaction":
		req := new(EthSendTransactionParams)
		err = ParamsToStruct(in.Params, req)
		if err == nil {
			out, err = srv.service.EthSendTransaction(req)
		}
	case "eth_sendRawTransaction":
		req := new(EthSendRawTransactionParams)
		err = ParamsToStruct(in.Params, req)
		if err == nil {
			out, err = srv.service.EthSendRawTransaction(req)
		}
	case "eth_submitHashrate":
		req := new(EthSubmitHashrateParams)
		err = ParamsToStruct(in.Params, req)
		if err == nil {
			out, err = srv.service.EthSubmitHashrate(req)
		}
	case "eth_submitWork":
		req := new(EthSubmitWorkParams)
		err = ParamsToStruct(in.Params, req)
		if err == nil {
			out, err = srv.service.EthSubmitWork(req)
		}
	case "eth_syncing":
		out, err = srv.service.EthSyncing()
	case "eth_uninstallFilter":
		req := new(EthUninstallFilterParams)
		err = ParamsToStruct(in.Params, req)
		if err == nil {
			out, err = srv.service.EthUninstallFilter(req)
		}
	}

	if err != nil {
		WriteError(w, in.ID, ErrInternal.RPCErrorWithMessage(err.Error()))
		return
	}

	WriteData(w, in.ID, out)
}

func WriteError(w http.ResponseWriter, id int, resp *RPCError) {
	data, err := json.Marshal(&RPCErrorResponse{
		JSONRPC: JSONRPC,
		Error:   resp,
		ID:      id,
	})
	if err != nil {
		panic(err)
	}
	w.Header().Set("Content-Type", "application/json")
	w.Write(data)
}

func WriteData(w http.ResponseWriter, id int, result interface{}) {
	resp := &RPCResultResponse{
		JSONRPC: JSONRPC,
		ID:      id,
		Result:  StructToResult(result),
	}
	data, err := json.Marshal(resp)
	if err != nil {
		WriteError(w, id, ErrInternal.RPCError())
		return
	}
	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusOK)
	w.Write(data)
}
