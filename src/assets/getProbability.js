const Clarifai = require('clarifai');

const app = new Clarifai.App({
  apiKey: 'a2e4434a24d447438d1fc615ff5383c7',
});

async function getGooseProbability(url) {
  const response = await app.models.predict(Clarifai.GENERAL_MODEL, url);
  console.log(response.outputs[0].data.concepts);
  try{
    return response.outputs[0].data.concepts.find((element) => {
      return element.name === 'goose';
  }).value  
  } catch (error) {
    return null;
  }
  }

export default getGooseProbability;