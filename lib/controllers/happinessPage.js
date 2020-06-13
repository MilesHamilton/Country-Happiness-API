const HappinessPage = require('../models/HappinessPage');

module.exports = {
  pagination: (req, res) => {
    const page = req.query.page;
    const limit = req.query.limit;

    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;

    const result = HappinessPage.slice(startIndex, endIndex);
    res.json(result);
  },
};
