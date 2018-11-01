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
    .onGet('/user')
    .reply(200, {
      msg: {
        id: 'testa',
        name: 'Guilherme',
        email: 'guilherme@teste.com.br',
        lookingForProject: true,
        image: 'https://images.vexels.com/media/users/3/145908/preview2/52eabf633ca6414e60a7677b0b917d92-male-avatar-maker.jpg',
        skills: ['Developer']
      }
    });

  mock
    .onGet('/users')
    .reply(200, {
      msg: [
        { 
          id: 'teste',
          name: 'Guilherme', 
          image: 'https://images.vexels.com/media/users/3/145908/preview2/52eabf633ca6414e60a7677b0b917d92-male-avatar-maker.jpg', 
          skills: ['Developer'],
          description: `pure dev build, 25`,
          rgb: '#7DD1F0'
        },
        { 
          id: 'teste',
          name: 'Leonardo', 
          image: 'https://images.vexels.com/media/users/3/145908/preview2/52eabf633ca6414e60a7677b0b917d92-male-avatar-maker.jpg',
          skills: ['Developer', 'Artist'],
          description: `dex hybrid build, 45`,
          rgb: '#BA55DA'
        },
        { 
          id: 'teste',
          name: 'Lucas', 
          image: 'https://images.vexels.com/media/users/3/145908/preview2/52eabf633ca6414e60a7677b0b917d92-male-avatar-maker.jpg',
          skills: ['Developer', 'Musician'],
          description: `milk, 25`,
          rgb: '#AA9900'
        },
        { 
          id: 'teste',
          name: 'Michel', 
          image: 'https://images.vexels.com/media/users/3/145908/preview2/52eabf633ca6414e60a7677b0b917d92-male-avatar-maker.jpg',
          skills: ['Developer', 'Artist'],
          description: `bolicia hybrid build, 25`,
          rgb: '#F00'
        },
        { 
          id: 'teste',
          name: 'Siqueira', 
          image: 'https://images.vexels.com/media/users/3/145908/preview2/52eabf633ca6414e60a7677b0b917d92-male-avatar-maker.jpg',
          skills: ['Developer', 'Writer'],
          description: `25`,
          rgb: '#000000'
        }
      ]
    });

  mock
    .onGet('/projects')
    .reply(200, {
      msg: [
        { 
          id: 'teste',
          name: 'Brawll', 
          src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg', 
          skills: ['Developer', 'Artist', 'Musician'],
          tags: [],
          description: 'Brawll is an action 3D game where your goal is to send the other players to outer space.'
        },
        { 
          id: 'teste',
          name: 'Jacto Rally', 
          src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg', 
          skills: ['Writer'],
          tags: [],
          description: 'Brawll is an action 3D game where your goal is to send the other players to outer space.'
        },
        { 
          id: 'teste',
          name: 'Into the light', 
          src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg',
          skills: ['Developer', 'Audio Mixer'],
          tags: [],
          description: 'Brawll is an action 3D game where your goal is to send the other players to outer space.'
        },
        { 
          id: 'teste',
          name: 'Disk Overdrive', 
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

    mock
      .onGet('/users/test/projects')
      .reply(200, {
        msg: [
          { 
            name: 'Brawll', 
            src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg', 
            skills: ['Developer', 'Artist', 'Musician'],
            tags: ['Action'],
            description: 'Brawll is an action 3D game where your goal is to send the other players to outer space.'
          },
          { 
            name: 'Jacto Rally', 
            src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg', 
            skills: ['Writer'],
            tags: [],
            description: 'Brawll is an action 3D game where your goal is to send the other players to outer space.'
          },
          { 
            name: 'Into the light', 
            src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg',
            skills: ['Developer', 'Audio Mixer'],
            tags: [],
            description: 'Brawll is an action 3D game where your goal is to send the other players to outer space.'
          },
          { 
            name: 'Disk Overdrive', 
            src: 'https://cdn.vuetifyjs.com/images/cards/docks.jpg', 
            skills: ['Artist'],
            tags: [],
            description: 'Brawll is an action 3D game where your goal is to send the other players to outer space.'
          }
        ]
      });

    mock
      .onGet('/users/test')
      .reply(200, {
        msg: {
          name: 'Majimbo Monteiro',
          email: 'majimbo_monteiro@teste.com.br',
          skills: [
            {
              'name': 'Developer'
            },
            {
              'name': 'Artist'
            }
          ],
          projects: [
            { 
              name: 'Brawll', 
              src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg', 
              skills: ['Developer', 'Artist', 'Musician'],
              tags: ['Action'],
              description: 'Brawll is an action 3D game where your goal is to send the other players to outer space.'
            },
            { 
              name: 'Jacto Rally', 
              src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg', 
              skills: ['Writer'],
              tags: [],
              description: 'Brawll is an action 3D game where your goal is to send the other players to outer space.'
            },
            { 
              name: 'Into the light', 
              src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg',
              skills: ['Developer', 'Audio Mixer'],
              tags: [],
              description: 'Brawll is an action 3D game where your goal is to send the other players to outer space.'
            },
            { 
              name: 'Disk Overdrive', 
              src: 'https://cdn.vuetifyjs.com/images/cards/docks.jpg', 
              skills: ['Artist'],
              tags: [],
              description: 'Brawll is an action 3D game where your goal is to send the other players to outer space.'
            }
          ]
        }
      });

    mock
      .onGet('/projects/test')
      .reply(200, {
        msg: {
          id: 'test',
          name: 'Brawll',
          src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg', 
          skills: [
            {
              'name': 'Developer'
            },
            {
              'name': 'Artist'
            },
            {
              'name': 'Musician'
            }
          ],
          users: [
            { 
              id: 'teste',
              name: 'Leonardo',
              image: 'https://images.vexels.com/media/users/3/145908/preview2/52eabf633ca6414e60a7677b0b917d92-male-avatar-maker.jpg',
              skills: ['Developer', 'Artist'],
              projects_users: {
                role: 'owner'
              }
            },
            { 
              id: 'teste',
              name: 'Lucas', 
              image: 'https://images.vexels.com/media/users/3/145908/preview2/52eabf633ca6414e60a7677b0b917d92-male-avatar-maker.jpg',
              skills: ['Developer', 'Musician'],
              projects_users: {
                role: 'user'
              }
            }
          ],
          tags: ['Action'],
          description: 'Brawll is an action 3D game where your goal is to send the other players to outer space.'
        }
      });

    mock
      .onPost('/projects/test/ask_join')
      .reply(200, {
        msg: 'Invite done.'
      });

};
