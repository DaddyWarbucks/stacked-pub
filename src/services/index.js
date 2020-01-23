const sms = require('./sms/sms.service.js');
const directMessage = require('./direct-message/direct-message.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(sms);
  app.configure(directMessage);
};
