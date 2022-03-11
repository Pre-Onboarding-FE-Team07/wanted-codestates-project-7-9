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
    const pageNo = Math.abs(req.query?.pageNo || 1);
    const perPage = Math.abs(req.query?.perPage || 10);
    const sort = req.query?.sort || 'recent';
    const start = perPage * (pageNo - 1);
    const end = perPage + start;

    let sortedData = data;
    if (sort === 'likes') {
      sortedData = data.sort((lhs, rhs) => rhs.likes - lhs.likes);
    } else if (sort === 'comments') {
      sortedData = data.sort((lhs, rhs) => rhs.comments.length - lhs.comments.length);
    } else if (sort === 'random') {
      sortedData = data
        .map((val) => ({ val, rand: Math.random() }))
        .sort((lhs, rhs) => lhs.rand - rhs.rand)
        .map(({ val }) => val);
    }

    res
      .status(200)
      .type('json')
      .send(JSON.stringify(sortedData.slice(start, end)));
  }
};
