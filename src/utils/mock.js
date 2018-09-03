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
      msg: {
        projects: [
          { 
            title: 'Brawll', src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg', 
            skills: ['Developer', 'Artist', 'Musician'],
            description: 'Brawll is an action 3D game where your goal is to send the other players to outer space.',
            flex: 3
          },
          { 
            title: 'Jacto Rally', src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg', 
            skills: ['Writer'],
            description: 'Brawll is an action 3D game where your goal is to send the other players to outer space.',
            flex: 3 
          },
          { 
            title: 'Into the light', src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg',
            skills: ['Developer', 'Audio Mixer'],
            description: 'Brawll is an action 3D game where your goal is to send the other players to outer space.',
            flex: 3 },
          { 
            title: 'Disk Overdrive', src: 'https://cdn.vuetifyjs.com/images/cards/docks.jpg', 
            skills: ['Artist'],
            description: 'Brawll is an action 3D game where your goal is to send the other players to outer space.',
            flex: 3 
          }
        ]
      }
    });

    mock
      .onGet('/tags')
      .reply(200, {
        msg: {
          tags: [
            'Action',
            'Strategy',
            '2D',
            '3D'
          ]
        }
      });

    mock
      .onGet('/skills')
      .reply(200, {
        msg: {
          skills: [
            'Artist',
            'Developer',
            'Musician',
            'Writer',
            'Audio Mixer'
          ]
        }
      });

};
