import MockAdapter from 'axios-mock-adapter';

export default axios => {
  const mock = new MockAdapter(axios);

  mock
    .onPost('/auth/sign_in')
    .reply(200, {
      msg: 'User logged.'
    });

  mock
    .onPost('/auth/sign_up')
    .reply(200, {
      msg: {
        id: '016a362a-4f32-496f-bf25-d785d4df42ed',
        name: 'Mock account'
      }
    });

  mock
    .onGet('/auth/sign_out')
    .reply(200, {});
};
