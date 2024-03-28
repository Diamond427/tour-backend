module.exports = mongoose => {
  var schema = mongoose.Schema(
    {
      title: String,
      description: String,
      duration: Number,
      start: [{
        weekday: Number,
        nthweek: Number,
        year: Number,
        month: Number,
        date: Number
      }]
    },
    { timestamps: true }
  );

  schema.method("toJSON", function() {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

  const Tutorial = mongoose.model("tutorial", schema);
  return Tutorial;
};