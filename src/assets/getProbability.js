const Clarifai = require('clarifai');

const app = new Clarifai.App({
  apiKey: 'a2e4434a24d447438d1fc615ff5383c7',
});

async function getGooseProbability(url) {
  if (!url.startsWith('http')) {
    throw new Error('not valid url');
  }
  const response = await app.models.predict(Clarifai.GENERAL_MODEL, url);
  try {
    return response.outputs[0].data.concepts.find((element) => {
      return element.name === 'goose';
    }).value;
  } catch (error) {
    return (error);
  }
}

export default getGooseProbability;
