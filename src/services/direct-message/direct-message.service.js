// Initializes the `direct-message` service on path `/direct-message`
const { DirectMessage } = require('./direct-message.class');
const hooks = require('./direct-message.hooks');

module.exports = function (app) {

  // Initialize our service with any options it requires
  app.use('/direct-message', new DirectMessage({}, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('direct-message');

  service.hooks(hooks);
};
