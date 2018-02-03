const config = require('../config');
const watson = require('watson-developer-cloud');

const nlu = new watson.NaturalLanguageUnderstandingV1({
  username: config.username,
  password: config.password,
  version_date: '2017-02-27',
});

const analyze = parameters =>
  new Promise((resolve, reject) => {
    nlu.analyze(parameters, (err, response) => {
      if (err) {
        reject(err);
        return;
      }
      resolve(response);
    });
  });

const process = async (content) => {
  try {
    const parameters = {
      text: content,
      features: {
        relations: {
          model: config.modelId,
        },
      },
    };

    const { relations } = await analyze(parameters);
    if (!relations || !relations.length) { return []; }
    return relations;
  } catch (error) {
    console.log(error);
    return false;
  }
};

module.exports = process;
