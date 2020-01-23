/* eslint-disable no-unused-vars */
exports.DirectMessage = class DirectMessage {
  constructor (options) {
    this.options = options || {};
  }

  async create (data, params) {
    // This is really just a pass through. We are only relying on this service
    // for its events. By calling create (`POST /sms`) on this service you are
    // passing the data straight through to clients via a socket event emitter.
    return data;
  }
};
