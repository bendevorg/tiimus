import MockAdapter from 'axios-mock-adapter';

export default axios => {
  const mock = new MockAdapter(axios);

  mock
    .onGet('/skills')
    .reply(200, {
      msg: [
        {
          name: 'Developer',
          color: 'grey lighten-1',
          text: 'black',
          icon: 'code'
        },
        {
          name: 'Artist',
          color: 'grey darken-1',
          text: 'white',
          icon: 'photo'
        },
        {
          name: 'Musician',
          color: 'grey darken-2',
          text: 'white',
          icon: 'music_note'
        },
        {
          name: 'Writer',
          color: 'grey darken-3',
          text: 'white',
          icon: 'create'
        },
        {
          name: 'Audio Mixer',
          color: 'grey darken-4',
          text: 'white',
          icon: 'headset'
        }
      ]
    });
};
