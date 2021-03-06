//
// Autogenerated by Thrift Compiler (0.11.0)
//
// DO NOT EDIT UNLESS YOU ARE SURE THAT YOU KNOW WHAT YOU ARE DOING
//
"use strict";

var thrift = require('thrift');
var Thrift = thrift.Thrift;
var Q = thrift.Q;


var ttypes = require('./api_types');
//HELPER FUNCTIONS AND STRUCTURES

var API_createConsumer_args = function(args) {
  this.consumer = null;
  if (args) {
    if (args.consumer !== undefined && args.consumer !== null) {
      this.consumer = new ttypes.Consumer(args.consumer);
    }
  }
};
API_createConsumer_args.prototype = {};
API_createConsumer_args.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.STRUCT) {
        this.consumer = new ttypes.Consumer();
        this.consumer.read(input);
      } else {
        input.skip(ftype);
      }
      break;
      case 0:
        input.skip(ftype);
        break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

API_createConsumer_args.prototype.write = function(output) {
  output.writeStructBegin('API_createConsumer_args');
  if (this.consumer !== null && this.consumer !== undefined) {
    output.writeFieldBegin('consumer', Thrift.Type.STRUCT, 1);
    this.consumer.write(output);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var API_createConsumer_result = function(args) {
  this.success = null;
  if (args) {
    if (args.success !== undefined && args.success !== null) {
      this.success = new ttypes.Consumer(args.success);
    }
  }
};
API_createConsumer_result.prototype = {};
API_createConsumer_result.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 0:
      if (ftype == Thrift.Type.STRUCT) {
        this.success = new ttypes.Consumer();
        this.success.read(input);
      } else {
        input.skip(ftype);
      }
      break;
      case 0:
        input.skip(ftype);
        break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

API_createConsumer_result.prototype.write = function(output) {
  output.writeStructBegin('API_createConsumer_result');
  if (this.success !== null && this.success !== undefined) {
    output.writeFieldBegin('success', Thrift.Type.STRUCT, 0);
    this.success.write(output);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var API_updateConsumer_args = function(args) {
  this.id = null;
  this.consumer = null;
  if (args) {
    if (args.id !== undefined && args.id !== null) {
      this.id = args.id;
    }
    if (args.consumer !== undefined && args.consumer !== null) {
      this.consumer = new ttypes.Consumer(args.consumer);
    }
  }
};
API_updateConsumer_args.prototype = {};
API_updateConsumer_args.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.I32) {
        this.id = input.readI32();
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.STRUCT) {
        this.consumer = new ttypes.Consumer();
        this.consumer.read(input);
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

API_updateConsumer_args.prototype.write = function(output) {
  output.writeStructBegin('API_updateConsumer_args');
  if (this.id !== null && this.id !== undefined) {
    output.writeFieldBegin('id', Thrift.Type.I32, 1);
    output.writeI32(this.id);
    output.writeFieldEnd();
  }
  if (this.consumer !== null && this.consumer !== undefined) {
    output.writeFieldBegin('consumer', Thrift.Type.STRUCT, 2);
    this.consumer.write(output);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var API_updateConsumer_result = function(args) {
  this.success = null;
  if (args) {
    if (args.success !== undefined && args.success !== null) {
      this.success = new ttypes.Consumer(args.success);
    }
  }
};
API_updateConsumer_result.prototype = {};
API_updateConsumer_result.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 0:
      if (ftype == Thrift.Type.STRUCT) {
        this.success = new ttypes.Consumer();
        this.success.read(input);
      } else {
        input.skip(ftype);
      }
      break;
      case 0:
        input.skip(ftype);
        break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

API_updateConsumer_result.prototype.write = function(output) {
  output.writeStructBegin('API_updateConsumer_result');
  if (this.success !== null && this.success !== undefined) {
    output.writeFieldBegin('success', Thrift.Type.STRUCT, 0);
    this.success.write(output);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var API_removeConsumer_args = function(args) {
  this.id = null;
  if (args) {
    if (args.id !== undefined && args.id !== null) {
      this.id = args.id;
    }
  }
};
API_removeConsumer_args.prototype = {};
API_removeConsumer_args.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.I32) {
        this.id = input.readI32();
      } else {
        input.skip(ftype);
      }
      break;
      case 0:
        input.skip(ftype);
        break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

API_removeConsumer_args.prototype.write = function(output) {
  output.writeStructBegin('API_removeConsumer_args');
  if (this.id !== null && this.id !== undefined) {
    output.writeFieldBegin('id', Thrift.Type.I32, 1);
    output.writeI32(this.id);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var API_removeConsumer_result = function(args) {
};
API_removeConsumer_result.prototype = {};
API_removeConsumer_result.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    input.skip(ftype);
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

API_removeConsumer_result.prototype.write = function(output) {
  output.writeStructBegin('API_removeConsumer_result');
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var API_getConsumer_args = function(args) {
  this.id = null;
  if (args) {
    if (args.id !== undefined && args.id !== null) {
      this.id = args.id;
    }
  }
};
API_getConsumer_args.prototype = {};
API_getConsumer_args.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.I32) {
        this.id = input.readI32();
      } else {
        input.skip(ftype);
      }
      break;
      case 0:
        input.skip(ftype);
        break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

API_getConsumer_args.prototype.write = function(output) {
  output.writeStructBegin('API_getConsumer_args');
  if (this.id !== null && this.id !== undefined) {
    output.writeFieldBegin('id', Thrift.Type.I32, 1);
    output.writeI32(this.id);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var API_getConsumer_result = function(args) {
  this.success = null;
  this.err = null;
  if (args instanceof ttypes.NotExist) {
    this.err = args;
    return;
  }
  if (args) {
    if (args.success !== undefined && args.success !== null) {
      this.success = new ttypes.Consumer(args.success);
    }
    if (args.err !== undefined && args.err !== null) {
      this.err = args.err;
    }
  }
};
API_getConsumer_result.prototype = {};
API_getConsumer_result.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 0:
      if (ftype == Thrift.Type.STRUCT) {
        this.success = new ttypes.Consumer();
        this.success.read(input);
      } else {
        input.skip(ftype);
      }
      break;
      case 1:
      if (ftype == Thrift.Type.STRUCT) {
        this.err = new ttypes.NotExist();
        this.err.read(input);
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

API_getConsumer_result.prototype.write = function(output) {
  output.writeStructBegin('API_getConsumer_result');
  if (this.success !== null && this.success !== undefined) {
    output.writeFieldBegin('success', Thrift.Type.STRUCT, 0);
    this.success.write(output);
    output.writeFieldEnd();
  }
  if (this.err !== null && this.err !== undefined) {
    output.writeFieldBegin('err', Thrift.Type.STRUCT, 1);
    this.err.write(output);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var API_getConsumers_args = function(args) {
};
API_getConsumers_args.prototype = {};
API_getConsumers_args.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    input.skip(ftype);
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

API_getConsumers_args.prototype.write = function(output) {
  output.writeStructBegin('API_getConsumers_args');
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var API_getConsumers_result = function(args) {
  this.success = null;
  if (args) {
    if (args.success !== undefined && args.success !== null) {
      this.success = Thrift.copyList(args.success, [ttypes.Consumer]);
    }
  }
};
API_getConsumers_result.prototype = {};
API_getConsumers_result.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 0:
      if (ftype == Thrift.Type.LIST) {
        var _size0 = 0;
        var _rtmp34;
        this.success = [];
        var _etype3 = 0;
        _rtmp34 = input.readListBegin();
        _etype3 = _rtmp34.etype;
        _size0 = _rtmp34.size;
        for (var _i5 = 0; _i5 < _size0; ++_i5)
        {
          var elem6 = null;
          elem6 = new ttypes.Consumer();
          elem6.read(input);
          this.success.push(elem6);
        }
        input.readListEnd();
      } else {
        input.skip(ftype);
      }
      break;
      case 0:
        input.skip(ftype);
        break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

API_getConsumers_result.prototype.write = function(output) {
  output.writeStructBegin('API_getConsumers_result');
  if (this.success !== null && this.success !== undefined) {
    output.writeFieldBegin('success', Thrift.Type.LIST, 0);
    output.writeListBegin(Thrift.Type.STRUCT, this.success.length);
    for (var iter7 in this.success)
    {
      if (this.success.hasOwnProperty(iter7))
      {
        iter7 = this.success[iter7];
        iter7.write(output);
      }
    }
    output.writeListEnd();
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var APIClient = exports.Client = function(output, pClass) {
    this.output = output;
    this.pClass = pClass;
    this._seqid = 0;
    this._reqs = {};
};
APIClient.prototype = {};
APIClient.prototype.seqid = function() { return this._seqid; };
APIClient.prototype.new_seqid = function() { return this._seqid += 1; };
APIClient.prototype.createConsumer = function(consumer, callback) {
  this._seqid = this.new_seqid();
  if (callback === undefined) {
    var _defer = Q.defer();
    this._reqs[this.seqid()] = function(error, result) {
      if (error) {
        _defer.reject(error);
      } else {
        _defer.resolve(result);
      }
    };
    this.send_createConsumer(consumer);
    return _defer.promise;
  } else {
    this._reqs[this.seqid()] = callback;
    this.send_createConsumer(consumer);
  }
};

APIClient.prototype.send_createConsumer = function(consumer) {
  var output = new this.pClass(this.output);
  output.writeMessageBegin('createConsumer', Thrift.MessageType.CALL, this.seqid());
  var params = {
    consumer: consumer
  };
  var args = new API_createConsumer_args(params);
  args.write(output);
  output.writeMessageEnd();
  return this.output.flush();
};

APIClient.prototype.recv_createConsumer = function(input,mtype,rseqid) {
  var callback = this._reqs[rseqid] || function() {};
  delete this._reqs[rseqid];
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(input);
    input.readMessageEnd();
    return callback(x);
  }
  var result = new API_createConsumer_result();
  result.read(input);
  input.readMessageEnd();

  if (null !== result.success) {
    return callback(null, result.success);
  }
  return callback('createConsumer failed: unknown result');
};
APIClient.prototype.updateConsumer = function(id, consumer, callback) {
  this._seqid = this.new_seqid();
  if (callback === undefined) {
    var _defer = Q.defer();
    this._reqs[this.seqid()] = function(error, result) {
      if (error) {
        _defer.reject(error);
      } else {
        _defer.resolve(result);
      }
    };
    this.send_updateConsumer(id, consumer);
    return _defer.promise;
  } else {
    this._reqs[this.seqid()] = callback;
    this.send_updateConsumer(id, consumer);
  }
};

APIClient.prototype.send_updateConsumer = function(id, consumer) {
  var output = new this.pClass(this.output);
  output.writeMessageBegin('updateConsumer', Thrift.MessageType.CALL, this.seqid());
  var params = {
    id: id,
    consumer: consumer
  };
  var args = new API_updateConsumer_args(params);
  args.write(output);
  output.writeMessageEnd();
  return this.output.flush();
};

APIClient.prototype.recv_updateConsumer = function(input,mtype,rseqid) {
  var callback = this._reqs[rseqid] || function() {};
  delete this._reqs[rseqid];
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(input);
    input.readMessageEnd();
    return callback(x);
  }
  var result = new API_updateConsumer_result();
  result.read(input);
  input.readMessageEnd();

  if (null !== result.success) {
    return callback(null, result.success);
  }
  return callback('updateConsumer failed: unknown result');
};
APIClient.prototype.removeConsumer = function(id, callback) {
  this._seqid = this.new_seqid();
  if (callback === undefined) {
    var _defer = Q.defer();
    this._reqs[this.seqid()] = function(error, result) {
      if (error) {
        _defer.reject(error);
      } else {
        _defer.resolve(result);
      }
    };
    this.send_removeConsumer(id);
    return _defer.promise;
  } else {
    this._reqs[this.seqid()] = callback;
    this.send_removeConsumer(id);
  }
};

APIClient.prototype.send_removeConsumer = function(id) {
  var output = new this.pClass(this.output);
  output.writeMessageBegin('removeConsumer', Thrift.MessageType.CALL, this.seqid());
  var params = {
    id: id
  };
  var args = new API_removeConsumer_args(params);
  args.write(output);
  output.writeMessageEnd();
  return this.output.flush();
};

APIClient.prototype.recv_removeConsumer = function(input,mtype,rseqid) {
  var callback = this._reqs[rseqid] || function() {};
  delete this._reqs[rseqid];
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(input);
    input.readMessageEnd();
    return callback(x);
  }
  var result = new API_removeConsumer_result();
  result.read(input);
  input.readMessageEnd();

  callback(null);
};
APIClient.prototype.getConsumer = function(id, callback) {
  this._seqid = this.new_seqid();
  if (callback === undefined) {
    var _defer = Q.defer();
    this._reqs[this.seqid()] = function(error, result) {
      if (error) {
        _defer.reject(error);
      } else {
        _defer.resolve(result);
      }
    };
    this.send_getConsumer(id);
    return _defer.promise;
  } else {
    this._reqs[this.seqid()] = callback;
    this.send_getConsumer(id);
  }
};

APIClient.prototype.send_getConsumer = function(id) {
  var output = new this.pClass(this.output);
  output.writeMessageBegin('getConsumer', Thrift.MessageType.CALL, this.seqid());
  var params = {
    id: id
  };
  var args = new API_getConsumer_args(params);
  args.write(output);
  output.writeMessageEnd();
  return this.output.flush();
};

APIClient.prototype.recv_getConsumer = function(input,mtype,rseqid) {
  var callback = this._reqs[rseqid] || function() {};
  delete this._reqs[rseqid];
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(input);
    input.readMessageEnd();
    return callback(x);
  }
  var result = new API_getConsumer_result();
  result.read(input);
  input.readMessageEnd();

  if (null !== result.err) {
    return callback(result.err);
  }
  if (null !== result.success) {
    return callback(null, result.success);
  }
  return callback('getConsumer failed: unknown result');
};
APIClient.prototype.getConsumers = function(callback) {
  this._seqid = this.new_seqid();
  if (callback === undefined) {
    var _defer = Q.defer();
    this._reqs[this.seqid()] = function(error, result) {
      if (error) {
        _defer.reject(error);
      } else {
        _defer.resolve(result);
      }
    };
    this.send_getConsumers();
    return _defer.promise;
  } else {
    this._reqs[this.seqid()] = callback;
    this.send_getConsumers();
  }
};

APIClient.prototype.send_getConsumers = function() {
  var output = new this.pClass(this.output);
  output.writeMessageBegin('getConsumers', Thrift.MessageType.CALL, this.seqid());
  var args = new API_getConsumers_args();
  args.write(output);
  output.writeMessageEnd();
  return this.output.flush();
};

APIClient.prototype.recv_getConsumers = function(input,mtype,rseqid) {
  var callback = this._reqs[rseqid] || function() {};
  delete this._reqs[rseqid];
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(input);
    input.readMessageEnd();
    return callback(x);
  }
  var result = new API_getConsumers_result();
  result.read(input);
  input.readMessageEnd();

  if (null !== result.success) {
    return callback(null, result.success);
  }
  return callback('getConsumers failed: unknown result');
};
var APIProcessor = exports.Processor = function(handler) {
  this._handler = handler;
}
;
APIProcessor.prototype.process = function(input, output) {
  var r = input.readMessageBegin();
  if (this['process_' + r.fname]) {
    return this['process_' + r.fname].call(this, r.rseqid, input, output);
  } else {
    input.skip(Thrift.Type.STRUCT);
    input.readMessageEnd();
    var x = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN_METHOD, 'Unknown function ' + r.fname);
    output.writeMessageBegin(r.fname, Thrift.MessageType.EXCEPTION, r.rseqid);
    x.write(output);
    output.writeMessageEnd();
    output.flush();
  }
}
;
APIProcessor.prototype.process_createConsumer = function(seqid, input, output) {
  var args = new API_createConsumer_args();
  args.read(input);
  input.readMessageEnd();
  if (this._handler.createConsumer.length === 1) {
    Q.fcall(this._handler.createConsumer.bind(this._handler), args.consumer)
      .then(function(result) {
        var result_obj = new API_createConsumer_result({success: result});
        output.writeMessageBegin("createConsumer", Thrift.MessageType.REPLY, seqid);
        result_obj.write(output);
        output.writeMessageEnd();
        output.flush();
      }, function (err) {
        var result;
        result = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
        output.writeMessageBegin("createConsumer", Thrift.MessageType.EXCEPTION, seqid);
        result.write(output);
        output.writeMessageEnd();
        output.flush();
      });
  } else {
    this._handler.createConsumer(args.consumer, function (err, result) {
      var result_obj;
      if ((err === null || typeof err === 'undefined')) {
        result_obj = new API_createConsumer_result((err !== null || typeof err === 'undefined') ? err : {success: result});
        output.writeMessageBegin("createConsumer", Thrift.MessageType.REPLY, seqid);
      } else {
        result_obj = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
        output.writeMessageBegin("createConsumer", Thrift.MessageType.EXCEPTION, seqid);
      }
      result_obj.write(output);
      output.writeMessageEnd();
      output.flush();
    });
  }
};
APIProcessor.prototype.process_updateConsumer = function(seqid, input, output) {
  var args = new API_updateConsumer_args();
  args.read(input);
  input.readMessageEnd();
  if (this._handler.updateConsumer.length === 2) {
    Q.fcall(this._handler.updateConsumer.bind(this._handler), args.id, args.consumer)
      .then(function(result) {
        var result_obj = new API_updateConsumer_result({success: result});
        output.writeMessageBegin("updateConsumer", Thrift.MessageType.REPLY, seqid);
        result_obj.write(output);
        output.writeMessageEnd();
        output.flush();
      }, function (err) {
        var result;
        result = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
        output.writeMessageBegin("updateConsumer", Thrift.MessageType.EXCEPTION, seqid);
        result.write(output);
        output.writeMessageEnd();
        output.flush();
      });
  } else {
    this._handler.updateConsumer(args.id, args.consumer, function (err, result) {
      var result_obj;
      if ((err === null || typeof err === 'undefined')) {
        result_obj = new API_updateConsumer_result((err !== null || typeof err === 'undefined') ? err : {success: result});
        output.writeMessageBegin("updateConsumer", Thrift.MessageType.REPLY, seqid);
      } else {
        result_obj = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
        output.writeMessageBegin("updateConsumer", Thrift.MessageType.EXCEPTION, seqid);
      }
      result_obj.write(output);
      output.writeMessageEnd();
      output.flush();
    });
  }
};
APIProcessor.prototype.process_removeConsumer = function(seqid, input, output) {
  var args = new API_removeConsumer_args();
  args.read(input);
  input.readMessageEnd();
  if (this._handler.removeConsumer.length === 1) {
    Q.fcall(this._handler.removeConsumer.bind(this._handler), args.id)
      .then(function(result) {
        var result_obj = new API_removeConsumer_result({success: result});
        output.writeMessageBegin("removeConsumer", Thrift.MessageType.REPLY, seqid);
        result_obj.write(output);
        output.writeMessageEnd();
        output.flush();
      }, function (err) {
        var result;
        result = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
        output.writeMessageBegin("removeConsumer", Thrift.MessageType.EXCEPTION, seqid);
        result.write(output);
        output.writeMessageEnd();
        output.flush();
      });
  } else {
    this._handler.removeConsumer(args.id, function (err, result) {
      var result_obj;
      if ((err === null || typeof err === 'undefined')) {
        result_obj = new API_removeConsumer_result((err !== null || typeof err === 'undefined') ? err : {success: result});
        output.writeMessageBegin("removeConsumer", Thrift.MessageType.REPLY, seqid);
      } else {
        result_obj = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
        output.writeMessageBegin("removeConsumer", Thrift.MessageType.EXCEPTION, seqid);
      }
      result_obj.write(output);
      output.writeMessageEnd();
      output.flush();
    });
  }
};
APIProcessor.prototype.process_getConsumer = function(seqid, input, output) {
  var args = new API_getConsumer_args();
  args.read(input);
  input.readMessageEnd();
  if (this._handler.getConsumer.length === 1) {
    Q.fcall(this._handler.getConsumer.bind(this._handler), args.id)
      .then(function(result) {
        var result_obj = new API_getConsumer_result({success: result});
        output.writeMessageBegin("getConsumer", Thrift.MessageType.REPLY, seqid);
        result_obj.write(output);
        output.writeMessageEnd();
        output.flush();
      }, function (err) {
        var result;
        if (err instanceof ttypes.NotExist) {
          result = new API_getConsumer_result(err);
          output.writeMessageBegin("getConsumer", Thrift.MessageType.REPLY, seqid);
        } else {
          result = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
          output.writeMessageBegin("getConsumer", Thrift.MessageType.EXCEPTION, seqid);
        }
        result.write(output);
        output.writeMessageEnd();
        output.flush();
      });
  } else {
    this._handler.getConsumer(args.id, function (err, result) {
      var result_obj;
      if ((err === null || typeof err === 'undefined') || err instanceof ttypes.NotExist) {
        result_obj = new API_getConsumer_result((err !== null || typeof err === 'undefined') ? err : {success: result});
        output.writeMessageBegin("getConsumer", Thrift.MessageType.REPLY, seqid);
      } else {
        result_obj = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
        output.writeMessageBegin("getConsumer", Thrift.MessageType.EXCEPTION, seqid);
      }
      result_obj.write(output);
      output.writeMessageEnd();
      output.flush();
    });
  }
};
APIProcessor.prototype.process_getConsumers = function(seqid, input, output) {
  var args = new API_getConsumers_args();
  args.read(input);
  input.readMessageEnd();
  if (this._handler.getConsumers.length === 0) {
    Q.fcall(this._handler.getConsumers.bind(this._handler))
      .then(function(result) {
        var result_obj = new API_getConsumers_result({success: result});
        output.writeMessageBegin("getConsumers", Thrift.MessageType.REPLY, seqid);
        result_obj.write(output);
        output.writeMessageEnd();
        output.flush();
      }, function (err) {
        var result;
        result = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
        output.writeMessageBegin("getConsumers", Thrift.MessageType.EXCEPTION, seqid);
        result.write(output);
        output.writeMessageEnd();
        output.flush();
      });
  } else {
    this._handler.getConsumers(function (err, result) {
      var result_obj;
      if ((err === null || typeof err === 'undefined')) {
        result_obj = new API_getConsumers_result((err !== null || typeof err === 'undefined') ? err : {success: result});
        output.writeMessageBegin("getConsumers", Thrift.MessageType.REPLY, seqid);
      } else {
        result_obj = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
        output.writeMessageBegin("getConsumers", Thrift.MessageType.EXCEPTION, seqid);
      }
      result_obj.write(output);
      output.writeMessageEnd();
      output.flush();
    });
  }
};
