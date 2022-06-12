module.exports = {
  index: async (req, res) => {
    const name = 'Andy';

    return res.render('index', {
      name,
      title: "Ehe",
      greeting:"Welcome to our page"
    });
  },
};
// appereances ;