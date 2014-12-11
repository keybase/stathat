
request = require 'request'

#-----------------------------------------------------

exports.StatHat = class StatHat

  constructor : ({https,timeout}) ->
    @protocol = if https then "https:" else "http:"
    @timeout = (timeout or 30)*1000

  trackValue: ({ukey, key, value, t}, cb) ->
    @_postRequest '/v', {key, ukey, value, t}, cb

  trackCount : ({ukey, key, count, t}, cb) ->
    @_postRequest '/c', {key, ukey, count, t}, cb

  trackEZValue: ({ezkey, stat, value, t}, cb) ->
    @_postRequest '/ez', {ezkey, stat, value, t}, cb

  trackEZCount : ({ezkey, stat, count, t}, cb) ->
    @_postRequest '/ez', {ezkey, stat, count, t}, cb

  _postRequest : (pathname, form , cb) ->
    opts = {
      url:  "#{@protocol}//api.stathat.com/#{pathname}"
      form,
      @timeout,
      method : "POST",
    }
    request opts, cb

#-----------------------------------------------------
