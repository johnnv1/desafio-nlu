require('dotenv').config();

const config = {
  username: process.env.NLU_USERNAME,
  password: process.env.NLU_PASSWORD,
  modelId: process.env.MODEL_ID,
};

module.exports = config;
