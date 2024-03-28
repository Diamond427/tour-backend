const db = require('../models');
const Tour = db.tours;

exports.getAllTour = (req, res) => {
  Tour.find({}).then(data => {
    res.json(data);
  })
}

/**
 * req.body.start -> [{
 *   weekday: String, // one of ['Mon', 'Tue', 'Wed', ...]
 *   nthweek: Number | null, // specifying certain week of the month, if null, means all week
 *   year: Number | null, // if null, current year will be used
 *   month: Number | null, // if null, current month will be used
 *   date: Number | null, // if null, then calculate the date using other info like weekday and nthweek
 * }]
 * 
 * examples:
 *  -> Tour starts every Monday of the week
 *       [{ weekday: 1 }]
 *  -> Tour starts every second Tuesday of the month
 *       [{ weekday: 2, nthweek: 2 }]
 *  -> Tour starts every Tuesday and Thursday
 *       [{ weekday: 2 }, { weekday: 4 }]
 *  -> Next tour starts on Jan 5, Feb 6, March 15
 *       [{ month: 1, date: 5 }, { month: 2, date: 6 }, { month: 3, date: 15 }]
 */

exports.addOne = (req, res) => {
  const tour = new Tour({
    title: req.body.title,
    description: req.body.description,
    start: req.body.start
  })

  tour.save().then(() => {
    res.json({success: true})
  })
}