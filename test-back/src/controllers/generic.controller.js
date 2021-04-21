const genericController = (model) => ({
  async getAll(req, res) {
    try {
      const citizens = await model.find();
      return res.status(200).send(citizens);
    } catch (err) {
      console.log(err);
    }
  },
  async create({ body }, res) {
    try {
      const citizen = new model(body);
      const newCitizen = await citizen.save();
      return res.status(200).send(newCitizen);
    } catch (err) {
      console.log(err);
    }
  },
  async delete({ params: { id } }, res) {
    try {
      await model.findByIdAndDelete(id);
      return res.status(200).send({ message: "citizen deleted" });
    } catch (err) {
      console.log(err);
    }
  },
});

module.exports = genericController;
