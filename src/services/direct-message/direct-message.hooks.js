module.exports = {
  before: {
    create: [
      context => {
        console.log(context.data);
        return context;
      }
    ]
  },

  after: {
    create: [
      context => {
        console.log(context.result);
        return context;
      }
    ]
  },

  error: {
    create: [
      context => {
        console.log(context.error);
        return context;
      }
    ],
  }
};
