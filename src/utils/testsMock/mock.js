import MockAdapter from 'axios-mock-adapter';

export default axios => {
  const mock = new MockAdapter(axios);

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

};
