// Initializes the `sms` service on path `/sms`
const { Sms } = require('./sms.class');
const hooks = require('./sms.hooks');

module.exports = function (app) {

  // Initialize our service with any options it requires
  app.use('/sms', new Sms({}, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('sms');

  service.hooks(hooks);
};
