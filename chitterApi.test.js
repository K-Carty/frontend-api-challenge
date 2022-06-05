const chitterApi = require('./chitterApi');

require('jest-fetch-mock').enableMocks()

beforeEach(() => {
  fetch.resetMocks();
});

describe ('chitterApi', () => {
  it('use fetch to load data from the GET /notes endpoint', async () => {
    const chitterApi = new chitterApi();
    
    fetch.mockResponseOnce(JSON.stringify(
      [
        {
          "id": 3,
          "body": "my first peep :)",
          "created_at": "2018-06-23T13:21:23.317Z",
          "updated_at": "2018-06-23T13:21:23.317Z",
          "user": {
            "id": 1,
            "handle": "kay"
          },
          "likes": [{
            "user": {
              "id": 1,
              "handle": "kay"
            }
          }]
        }
      ]
    ));

    let result;
    await chitterApi.loadPeeps((Peeps) => {
      result = Peeps;
    });

    expect(result[0].body).toBe("my first peep :)");
    });
  });
