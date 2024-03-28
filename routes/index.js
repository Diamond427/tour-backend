const tourRouter = require('./tour.route');

module.exports = function (app) {
  app.use("/tour", tourRouter);
}