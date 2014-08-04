// Generated by IcedCoffeeScript 1.7.1-f
(function() {
  var StatHat, request;

  request = require('request');

  exports.StatHat = StatHat = (function() {
    function StatHat(_arg) {
      var https, timeout;
      https = _arg.https, timeout = _arg.timeout;
      this.protocol = https ? "https:" : "http:";
      this.timeout = (timeout || 30) * 1000;
    }

    StatHat.prototype.trackValue = function(_arg, cb) {
      var key, t, ukey, value;
      ukey = _arg.ukey, key = _arg.key, value = _arg.value, t = _arg.t;
      return this._postRequest('/v', {
        key: key,
        ukey: ukey,
        value: value,
        t: t
      }, cb);
    };

    StatHat.prototype.trackCount = function(_arg, cb) {
      var count, key, t, ukey;
      ukey = _arg.ukey, key = _arg.key, count = _arg.count, t = _arg.t;
      return this._postRequest('/c', {
        key: key,
        ukey: ukey,
        count: count,
        t: t
      }, cb);
    };

    StatHat.prototype.trackEZValue = function(_arg, cb) {
      var ezkey, stat, t, value;
      ezkey = _arg.ezkey, stat = _arg.stat, value = _arg.value, t = _arg.t;
      return this._postRequest('/ez', {
        ezkey: ezkey,
        stat: stat,
        value: value,
        t: t
      }, cb);
    };

    StatHat.prototype.trackEZCount = function(_arg, cb) {
      var count, ezkey, stat, t;
      ezkey = _arg.ezkey, stat = _arg.stat, count = _arg.count, t = _arg.t;
      return this._postRequest('/ez', {
        ezkey: ezkey,
        stat: stat,
        count: count,
        t: t
      }, cb);
    };

    StatHat.prototype._postRequest = function(pathname, form, cb) {
      var opts;
      opts = {
        url: {
          protocol: this.protocol,
          pathname: pathname,
          hostname: 'api.stathat.com'
        },
        form: form,
        timeout: this.timeout,
        method: "POST"
      };
      return request(opts, cb);
    };

    return StatHat;

  })();

}).call(this);

//# sourceMappingURL=index.map
