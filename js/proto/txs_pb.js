// source: txs.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {missingRequire} reports error on implicit type usages.
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

var gogoproto_gogo_pb = require('./gogoproto/gogo_pb.js');
goog.object.extend(proto, gogoproto_gogo_pb);
var crypto_pb = require('./crypto_pb.js');
goog.object.extend(proto, crypto_pb);
goog.exportSymbol('proto.txs.Envelope', null, global);
goog.exportSymbol('proto.txs.Envelope.EncodingType', null, global);
goog.exportSymbol('proto.txs.Receipt', null, global);
goog.exportSymbol('proto.txs.Signatory', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.txs.Envelope = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.txs.Envelope.repeatedFields_, null);
};
goog.inherits(proto.txs.Envelope, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.txs.Envelope.displayName = 'proto.txs.Envelope';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.txs.Signatory = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.txs.Signatory, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.txs.Signatory.displayName = 'proto.txs.Signatory';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.txs.Receipt = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.txs.Receipt, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.txs.Receipt.displayName = 'proto.txs.Receipt';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.txs.Envelope.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.txs.Envelope.prototype.toObject = function(opt_includeInstance) {
  return proto.txs.Envelope.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.txs.Envelope} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.txs.Envelope.toObject = function(includeInstance, msg) {
  var f, obj = {
    signatoriesList: jspb.Message.toObjectList(msg.getSignatoriesList(),
    proto.txs.Signatory.toObject, includeInstance),
    tx: msg.getTx_asB64(),
    encoding: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.txs.Envelope}
 */
proto.txs.Envelope.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.txs.Envelope;
  return proto.txs.Envelope.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.txs.Envelope} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.txs.Envelope}
 */
proto.txs.Envelope.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.txs.Signatory;
      reader.readMessage(value,proto.txs.Signatory.deserializeBinaryFromReader);
      msg.addSignatories(value);
      break;
    case 2:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setTx(value);
      break;
    case 3:
      var value = /** @type {!proto.txs.Envelope.EncodingType} */ (reader.readEnum());
      msg.setEncoding(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.txs.Envelope.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.txs.Envelope.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.txs.Envelope} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.txs.Envelope.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSignatoriesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.txs.Signatory.serializeBinaryToWriter
    );
  }
  f = message.getTx_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      2,
      f
    );
  }
  f = message.getEncoding();
  if (f !== 0.0) {
    writer.writeEnum(
      3,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.txs.Envelope.EncodingType = {
  JSON: 0,
  RLP: 1
};

/**
 * repeated Signatory Signatories = 1;
 * @return {!Array<!proto.txs.Signatory>}
 */
proto.txs.Envelope.prototype.getSignatoriesList = function() {
  return /** @type{!Array<!proto.txs.Signatory>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.txs.Signatory, 1));
};


/**
 * @param {!Array<!proto.txs.Signatory>} value
 * @return {!proto.txs.Envelope} returns this
*/
proto.txs.Envelope.prototype.setSignatoriesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.txs.Signatory=} opt_value
 * @param {number=} opt_index
 * @return {!proto.txs.Signatory}
 */
proto.txs.Envelope.prototype.addSignatories = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.txs.Signatory, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.txs.Envelope} returns this
 */
proto.txs.Envelope.prototype.clearSignatoriesList = function() {
  return this.setSignatoriesList([]);
};


/**
 * optional bytes Tx = 2;
 * @return {!(string|Uint8Array)}
 */
proto.txs.Envelope.prototype.getTx = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * optional bytes Tx = 2;
 * This is a type-conversion wrapper around `getTx()`
 * @return {string}
 */
proto.txs.Envelope.prototype.getTx_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getTx()));
};


/**
 * optional bytes Tx = 2;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getTx()`
 * @return {!Uint8Array}
 */
proto.txs.Envelope.prototype.getTx_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getTx()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.txs.Envelope} returns this
 */
proto.txs.Envelope.prototype.setTx = function(value) {
  return jspb.Message.setProto3BytesField(this, 2, value);
};


/**
 * optional EncodingType Encoding = 3;
 * @return {!proto.txs.Envelope.EncodingType}
 */
proto.txs.Envelope.prototype.getEncoding = function() {
  return /** @type {!proto.txs.Envelope.EncodingType} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.txs.Envelope.EncodingType} value
 * @return {!proto.txs.Envelope} returns this
 */
proto.txs.Envelope.prototype.setEncoding = function(value) {
  return jspb.Message.setProto3EnumField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.txs.Signatory.prototype.toObject = function(opt_includeInstance) {
  return proto.txs.Signatory.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.txs.Signatory} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.txs.Signatory.toObject = function(includeInstance, msg) {
  var f, obj = {
    address: msg.getAddress_asB64(),
    publickey: (f = msg.getPublickey()) && crypto_pb.PublicKey.toObject(includeInstance, f),
    signature: (f = msg.getSignature()) && crypto_pb.Signature.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.txs.Signatory}
 */
proto.txs.Signatory.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.txs.Signatory;
  return proto.txs.Signatory.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.txs.Signatory} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.txs.Signatory}
 */
proto.txs.Signatory.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setAddress(value);
      break;
    case 2:
      var value = new crypto_pb.PublicKey;
      reader.readMessage(value,crypto_pb.PublicKey.deserializeBinaryFromReader);
      msg.setPublickey(value);
      break;
    case 4:
      var value = new crypto_pb.Signature;
      reader.readMessage(value,crypto_pb.Signature.deserializeBinaryFromReader);
      msg.setSignature(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.txs.Signatory.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.txs.Signatory.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.txs.Signatory} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.txs.Signatory.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAddress_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
  f = message.getPublickey();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      crypto_pb.PublicKey.serializeBinaryToWriter
    );
  }
  f = message.getSignature();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      crypto_pb.Signature.serializeBinaryToWriter
    );
  }
};


/**
 * optional bytes Address = 1;
 * @return {!(string|Uint8Array)}
 */
proto.txs.Signatory.prototype.getAddress = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes Address = 1;
 * This is a type-conversion wrapper around `getAddress()`
 * @return {string}
 */
proto.txs.Signatory.prototype.getAddress_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getAddress()));
};


/**
 * optional bytes Address = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getAddress()`
 * @return {!Uint8Array}
 */
proto.txs.Signatory.prototype.getAddress_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getAddress()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.txs.Signatory} returns this
 */
proto.txs.Signatory.prototype.setAddress = function(value) {
  return jspb.Message.setProto3BytesField(this, 1, value);
};


/**
 * optional crypto.PublicKey PublicKey = 2;
 * @return {?proto.crypto.PublicKey}
 */
proto.txs.Signatory.prototype.getPublickey = function() {
  return /** @type{?proto.crypto.PublicKey} */ (
    jspb.Message.getWrapperField(this, crypto_pb.PublicKey, 2));
};


/**
 * @param {?proto.crypto.PublicKey|undefined} value
 * @return {!proto.txs.Signatory} returns this
*/
proto.txs.Signatory.prototype.setPublickey = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.txs.Signatory} returns this
 */
proto.txs.Signatory.prototype.clearPublickey = function() {
  return this.setPublickey(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.txs.Signatory.prototype.hasPublickey = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional crypto.Signature Signature = 4;
 * @return {?proto.crypto.Signature}
 */
proto.txs.Signatory.prototype.getSignature = function() {
  return /** @type{?proto.crypto.Signature} */ (
    jspb.Message.getWrapperField(this, crypto_pb.Signature, 4));
};


/**
 * @param {?proto.crypto.Signature|undefined} value
 * @return {!proto.txs.Signatory} returns this
*/
proto.txs.Signatory.prototype.setSignature = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.txs.Signatory} returns this
 */
proto.txs.Signatory.prototype.clearSignature = function() {
  return this.setSignature(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.txs.Signatory.prototype.hasSignature = function() {
  return jspb.Message.getField(this, 4) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.txs.Receipt.prototype.toObject = function(opt_includeInstance) {
  return proto.txs.Receipt.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.txs.Receipt} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.txs.Receipt.toObject = function(includeInstance, msg) {
  var f, obj = {
    txtype: jspb.Message.getFieldWithDefault(msg, 1, 0),
    txhash: msg.getTxhash_asB64(),
    createscontract: jspb.Message.getBooleanFieldWithDefault(msg, 3, false),
    contractaddress: msg.getContractaddress_asB64()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.txs.Receipt}
 */
proto.txs.Receipt.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.txs.Receipt;
  return proto.txs.Receipt.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.txs.Receipt} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.txs.Receipt}
 */
proto.txs.Receipt.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setTxtype(value);
      break;
    case 2:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setTxhash(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setCreatescontract(value);
      break;
    case 4:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setContractaddress(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.txs.Receipt.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.txs.Receipt.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.txs.Receipt} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.txs.Receipt.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTxtype();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getTxhash_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      2,
      f
    );
  }
  f = message.getCreatescontract();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
  f = message.getContractaddress_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      4,
      f
    );
  }
};


/**
 * optional uint32 TxType = 1;
 * @return {number}
 */
proto.txs.Receipt.prototype.getTxtype = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.txs.Receipt} returns this
 */
proto.txs.Receipt.prototype.setTxtype = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional bytes TxHash = 2;
 * @return {!(string|Uint8Array)}
 */
proto.txs.Receipt.prototype.getTxhash = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * optional bytes TxHash = 2;
 * This is a type-conversion wrapper around `getTxhash()`
 * @return {string}
 */
proto.txs.Receipt.prototype.getTxhash_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getTxhash()));
};


/**
 * optional bytes TxHash = 2;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getTxhash()`
 * @return {!Uint8Array}
 */
proto.txs.Receipt.prototype.getTxhash_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getTxhash()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.txs.Receipt} returns this
 */
proto.txs.Receipt.prototype.setTxhash = function(value) {
  return jspb.Message.setProto3BytesField(this, 2, value);
};


/**
 * optional bool CreatesContract = 3;
 * @return {boolean}
 */
proto.txs.Receipt.prototype.getCreatescontract = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.txs.Receipt} returns this
 */
proto.txs.Receipt.prototype.setCreatescontract = function(value) {
  return jspb.Message.setProto3BooleanField(this, 3, value);
};


/**
 * optional bytes ContractAddress = 4;
 * @return {!(string|Uint8Array)}
 */
proto.txs.Receipt.prototype.getContractaddress = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * optional bytes ContractAddress = 4;
 * This is a type-conversion wrapper around `getContractaddress()`
 * @return {string}
 */
proto.txs.Receipt.prototype.getContractaddress_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getContractaddress()));
};


/**
 * optional bytes ContractAddress = 4;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getContractaddress()`
 * @return {!Uint8Array}
 */
proto.txs.Receipt.prototype.getContractaddress_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getContractaddress()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.txs.Receipt} returns this
 */
proto.txs.Receipt.prototype.setContractaddress = function(value) {
  return jspb.Message.setProto3BytesField(this, 4, value);
};


goog.object.extend(exports, proto.txs);
