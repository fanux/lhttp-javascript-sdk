function Lhttp(url) {
    var _this = this;
    _this.conn = new websocket(url)

    //client interface
    _this.on_open = function(c){console.log("base on open")}
    _this.on_message = function(c){console.log("base on message")}
    _this.on_close = function(c){console.log("base on close")}
    _this.on_error = function(c){console.log("base on error")}

    _this.conn.onclose = function(evt) {
        c = new Context(_this.conn, evt.data);
        _this.on_close(c);
    }
    _this.conn.onopen = function(evt) {
        c = new Context(_this.conn, null);
        _this.on_open(c);
    }
    _this.conn.onmessage = function(evt) {
        c = new Context(_this.conn, evt.data);
        _this.on_onmessage(c);
    }
    _this.conn.onerror = function(evt) {
        c = new Context(_this.conn, evt.data);
        _this.on_error(c);
    }
}

function Context(conn, message) {
    var _this = this;
    _this.conn = conn;
    _this.req = new Message(message);
    _this.resp = new Message("");
    _this.upstreamURL = "";
    _this.multiparts = [];

    function setCommand(str) {
        _this.resp.command = str;
    }

    function getCommand() {
        return _this.req.command;
    }

    function getHeader(str) {
        return _this.req.headers;
    }

    function addHeader(key, value) {
        _this.resp.headers[key] = value;
    }

    function getBody() {
        return _this.req.body;
    }

    function send(body) {
        _this.resp.body = body;
        if (_this.resp.command == "") {
            _this.resp.command = _this.req.command;
        }
        if (_this.resp.headers == {}) {
            _this.resp.headers = _this.req.headers;
        }
        _this.conn.send(_this.reap.encode())
    }

    function getMultipart() {
        return _this.multiparts;
    }

    function appendPart(headers, body) {
        //TODO
    }
}

var PROTOCOL_AND_VER = "LHTTP/1.0";

function Message(message) {
    var _this = this;
    _this.rawMessage = message;
    _this.command = "";
    _this.headers = {};
    _this.body = ""

    function decode() {
        var array = _this.rawMessage.split("\r\n\r\n");
        var command_and_headers = array[0];
        _this.body = array[1];

        //TODO
    }

    function encode() {
        //TODO
    }

    if (message.startWith(PROTOCOL_AND_VER)) {
        decode();
    }
}
