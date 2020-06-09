const axios = require('axios');
const chai = require('chai');
const expect = chai.expect;

const BASE_API_URL = 'http://ptsv2.com/t/';

async function makeGetRequest() {
  try {
    return await axios.get(BASE_API_URL + 'fu807-1554722621/post');
  } catch (error) {
    throw new Error('Something went wrong, check if API is responding')
  }
}

describe('A call to get user credentials', function () {

  it('should return correct response code ', async function () {
    let response = await makeGetRequest();
    expect(response).to.have.property('status', 200);
  });

  it('should return correct Content type header', async function () {
    let response = await makeGetRequest().then(function (response) {
      return response.headers;
    });
    expect(response).to.have.property('content-type', 'text/html; charset=utf-8');
  });

  it('should return correct data in body', async function () {
    let response = await makeGetRequest().then(function (response) {
      return response.data;
    });
    expect(response).to.have.property('username', 'automate');
    expect(response).to.have.property('password', 'everything');
    expect(response).to.have.property('targetUrl', BASE_API_URL + '7ty82-1554722743/post');
  });
});
