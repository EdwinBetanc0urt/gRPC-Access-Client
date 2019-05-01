/**
 * @fileoverview gRPC-Web generated client stub for access
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!



const grpc = {};
grpc.web = require('grpc-web');

const proto = {};
proto.access = require('./access_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.access.AccessServiceClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

  /**
   * @private @const {?Object} The credentials to be used to connect
   *    to the server
   */
  this.credentials_ = credentials;

  /**
   * @private @const {?Object} Options for the client
   */
  this.options_ = options;
};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.access.AccessServicePromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

  /**
   * @private @const {?Object} The credentials to be used to connect
   *    to the server
   */
  this.credentials_ = credentials;

  /**
   * @private @const {?Object} Options for the client
   */
  this.options_ = options;
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.access.LoginRequest,
 *   !proto.access.UserInfoValue>}
 */
const methodInfo_AccessService_RequestUserInfo = new grpc.web.AbstractClientBase.MethodInfo(
  proto.access.UserInfoValue,
  /** @param {!proto.access.LoginRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.access.UserInfoValue.deserializeBinary
);


/**
 * @param {!proto.access.LoginRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.access.UserInfoValue)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.access.UserInfoValue>|undefined}
 *     The XHR Node Readable Stream
 */
proto.access.AccessServiceClient.prototype.requestUserInfo =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/access.AccessService/RequestUserInfo',
      request,
      metadata || {},
      methodInfo_AccessService_RequestUserInfo,
      callback);
};


/**
 * @param {!proto.access.LoginRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.access.UserInfoValue>}
 *     A native promise that resolves to the response
 */
proto.access.AccessServicePromiseClient.prototype.requestUserInfo =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/access.AccessService/RequestUserInfo',
      request,
      metadata || {},
      methodInfo_AccessService_RequestUserInfo);
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.access.LoginRequest,
 *   !proto.access.Session>}
 */
const methodInfo_AccessService_RequestLogin = new grpc.web.AbstractClientBase.MethodInfo(
  proto.access.Session,
  /** @param {!proto.access.LoginRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.access.Session.deserializeBinary
);


/**
 * @param {!proto.access.LoginRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.access.Session)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.access.Session>|undefined}
 *     The XHR Node Readable Stream
 */
proto.access.AccessServiceClient.prototype.requestLogin =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/access.AccessService/RequestLogin',
      request,
      metadata || {},
      methodInfo_AccessService_RequestLogin,
      callback);
};


/**
 * @param {!proto.access.LoginRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.access.Session>}
 *     A native promise that resolves to the response
 */
proto.access.AccessServicePromiseClient.prototype.requestLogin =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/access.AccessService/RequestLogin',
      request,
      metadata || {},
      methodInfo_AccessService_RequestLogin);
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.access.LoginRequest,
 *   !proto.access.Session>}
 */
const methodInfo_AccessService_RequestLoginDefault = new grpc.web.AbstractClientBase.MethodInfo(
  proto.access.Session,
  /** @param {!proto.access.LoginRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.access.Session.deserializeBinary
);


/**
 * @param {!proto.access.LoginRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.access.Session)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.access.Session>|undefined}
 *     The XHR Node Readable Stream
 */
proto.access.AccessServiceClient.prototype.requestLoginDefault =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/access.AccessService/RequestLoginDefault',
      request,
      metadata || {},
      methodInfo_AccessService_RequestLoginDefault,
      callback);
};


/**
 * @param {!proto.access.LoginRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.access.Session>}
 *     A native promise that resolves to the response
 */
proto.access.AccessServicePromiseClient.prototype.requestLoginDefault =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/access.AccessService/RequestLoginDefault',
      request,
      metadata || {},
      methodInfo_AccessService_RequestLoginDefault);
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.access.LogoutRequest,
 *   !proto.access.Session>}
 */
const methodInfo_AccessService_RequestLogout = new grpc.web.AbstractClientBase.MethodInfo(
  proto.access.Session,
  /** @param {!proto.access.LogoutRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.access.Session.deserializeBinary
);


/**
 * @param {!proto.access.LogoutRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.access.Session)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.access.Session>|undefined}
 *     The XHR Node Readable Stream
 */
proto.access.AccessServiceClient.prototype.requestLogout =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/access.AccessService/RequestLogout',
      request,
      metadata || {},
      methodInfo_AccessService_RequestLogout,
      callback);
};


/**
 * @param {!proto.access.LogoutRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.access.Session>}
 *     A native promise that resolves to the response
 */
proto.access.AccessServicePromiseClient.prototype.requestLogout =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/access.AccessService/RequestLogout',
      request,
      metadata || {},
      methodInfo_AccessService_RequestLogout);
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.access.UserInfoRequest,
 *   !proto.access.UserInfoValue>}
 */
const methodInfo_AccessService_RequestUserInfoFromSession = new grpc.web.AbstractClientBase.MethodInfo(
  proto.access.UserInfoValue,
  /** @param {!proto.access.UserInfoRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.access.UserInfoValue.deserializeBinary
);


/**
 * @param {!proto.access.UserInfoRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.access.UserInfoValue)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.access.UserInfoValue>|undefined}
 *     The XHR Node Readable Stream
 */
proto.access.AccessServiceClient.prototype.requestUserInfoFromSession =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/access.AccessService/RequestUserInfoFromSession',
      request,
      metadata || {},
      methodInfo_AccessService_RequestUserInfoFromSession,
      callback);
};


/**
 * @param {!proto.access.UserInfoRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.access.UserInfoValue>}
 *     A native promise that resolves to the response
 */
proto.access.AccessServicePromiseClient.prototype.requestUserInfoFromSession =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/access.AccessService/RequestUserInfoFromSession',
      request,
      metadata || {},
      methodInfo_AccessService_RequestUserInfoFromSession);
};


module.exports = proto.access;

