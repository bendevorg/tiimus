import MockAdapter from 'axios-mock-adapter';

export default axios => {
  const mock = new MockAdapter(axios);
  
  mock
    .onGet('/tags')
    .reply(200, {
      msg: [
        'Action',
        'Strategy',
        '2D',
        '3D'
      ]
    });
};
