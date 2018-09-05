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

  mock
    .onGet('/projects')
    .reply(200, {
      msg: [
        { 
          title: 'Brawll', src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg', 
          skills: ['Developer', 'Artist', 'Musician'],
          tags: [],
          description: 'Brawll is an action 3D game where your goal is to send the other players to outer space.'
        },
        { 
          title: 'Jacto Rally', src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg', 
          skills: ['Writer'],
          tags: [],
          description: 'Brawll is an action 3D game where your goal is to send the other players to outer space.'
        },
        { 
          title: 'Into the light', src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg',
          skills: ['Developer', 'Audio Mixer'],
          tags: [],
          description: 'Brawll is an action 3D game where your goal is to send the other players to outer space.'
        },
        { 
          title: 'Disk Overdrive', src: 'https://cdn.vuetifyjs.com/images/cards/docks.jpg', 
          skills: ['Artist'],
          tags: [],
          description: 'Brawll is an action 3D game where your goal is to send the other players to outer space.'
        }
      ]
    });

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

    mock
      .onGet('/skills')
      .reply(200, {
        msg: [
          {
            name: 'Developer',
            color: 'grey lighten-1',
            text: 'black'
          },
          {
            name:'Artist',
            color: 'grey darken-1',
            text: 'white'
          },
          {
            name: 'Musician',
            color: 'grey darken-2',
            text: 'white'
          },
          {
            name: 'Writer',
            color: 'grey darken-3',
            text: 'white'
          },
          {
            name: 'Audio Mixer',
            color: 'grey darken-4',
            text: 'white'
          }
        ]
      });

};
