const data = require('./data.json');

/**
 * @param {Request} req
 * @param {Response} res
 */
exports.http = (req, res) => {
  res.set('Access-Control-Allow-Origin', '*');
  if (req.method === 'OPTIONS') {
    res.set('Access-Control-Allow-Methods', 'GET');
    res.set('Access-Control-Allow-Headers', 'Content-Type');
    res.set('Access-Control-Max-Age', '3600');
    res.status(204).send('');
  } else {
    const pageNo = req?.query.pageNo || 1;
    const perPage = req?.query.perPage || 10;
    const start = perPage * (pageNo - 1);
    const end = perPage + start;
    res
      .status(200)
      .type('json')
      .send(JSON.stringify(data.slice(start, end)));
  }
};
