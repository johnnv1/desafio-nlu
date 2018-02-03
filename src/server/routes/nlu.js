const process = require('../modules/nlu');

const handleRequest = async (req, res) => {
  try {
    const { content } = req.body;

    if (!content) {
      res.status(400);
      res.end();
      return;
    }

    const result = await process(content);

    if (!result) {
      res.status(500);
      res.json({ error: 'internal_server_error' });
      return;
    }

    if (!result.length) {
      res.status(404);
      res.end();
      return;
    }

    res.json(result);
  } catch (error) {
    console.log(error); //eslint-disable-line
    res.status(500);
    res.json({ error: 'internal_server_error' });
  }
};

module.exports = handleRequest;
