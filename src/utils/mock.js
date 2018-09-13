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
    .onGet('/users')
    .reply(200, {
      msg: [
        { 
          name: 'Guilherme', 
          image: 'https://images.vexels.com/media/users/3/145908/preview2/52eabf633ca6414e60a7677b0b917d92-male-avatar-maker.jpg', 
          skills: ['Developer']
        },
        { 
          name: 'Leonardo', 
          image: 'https://images.vexels.com/media/users/3/145908/preview2/52eabf633ca6414e60a7677b0b917d92-male-avatar-maker.jpg',
          skills: ['Developer', 'Artist']
        },
        { 
          name: 'Lucas', 
          image: 'https://images.vexels.com/media/users/3/145908/preview2/52eabf633ca6414e60a7677b0b917d92-male-avatar-maker.jpg',
          skills: ['Developer', 'Musician']
        },
        { 
          name: 'Michel', 
          image: 'https://images.vexels.com/media/users/3/145908/preview2/52eabf633ca6414e60a7677b0b917d92-male-avatar-maker.jpg',
          skills: ['Developer', 'Artist']
        },
        { 
          name: 'Siqueira', 
          image: 'https://images.vexels.com/media/users/3/145908/preview2/52eabf633ca6414e60a7677b0b917d92-male-avatar-maker.jpg',
          skills: ['Developer', 'Writer']
        }
      ]
    });

  mock
    .onGet('/projects')
    .reply(200, {
      msg: [
        { 
          title: 'Brawll', 
          src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg', 
          skills: ['Developer', 'Artist', 'Musician'],
          tags: [],
          description: 'Brawll is an action 3D game where your goal is to send the other players to outer space.'
        },
        { 
          title: 'Jacto Rally', 
          src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg', 
          skills: ['Writer'],
          tags: [],
          description: 'Brawll is an action 3D game where your goal is to send the other players to outer space.'
        },
        { 
          title: 'Into the light', 
          src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg',
          skills: ['Developer', 'Audio Mixer'],
          tags: [],
          description: 'Brawll is an action 3D game where your goal is to send the other players to outer space.'
        },
        { 
          title: 'Disk Overdrive', 
          src: 'https://cdn.vuetifyjs.com/images/cards/docks.jpg', 
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

    mock
      .onGet('/users/test/projects')
      .reply(200, {
        msg: [
          { 
            title: 'Brawll', 
            src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg', 
            skills: ['Developer', 'Artist', 'Musician'],
            tags: ['Action'],
            description: 'Brawll is an action 3D game where your goal is to send the other players to outer space.'
          },
          { 
            title: 'Jacto Rally', 
            src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg', 
            skills: ['Writer'],
            tags: [],
            description: 'Brawll is an action 3D game where your goal is to send the other players to outer space.'
          },
          { 
            title: 'Into the light', 
            src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg',
            skills: ['Developer', 'Audio Mixer'],
            tags: [],
            description: 'Brawll is an action 3D game where your goal is to send the other players to outer space.'
          },
          { 
            title: 'Disk Overdrive', 
            src: 'https://cdn.vuetifyjs.com/images/cards/docks.jpg', 
            skills: ['Artist'],
            tags: [],
            description: 'Brawll is an action 3D game where your goal is to send the other players to outer space.'
          }
        ]
      })

};
