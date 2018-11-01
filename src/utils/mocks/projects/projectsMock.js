import MockAdapter from 'axios-mock-adapter';

export default axios => {
  const mock = new MockAdapter(axios);

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
        },
        { 
          id: 'teste',
          name: 'Disk Overdrive', 
          src: 'https://cdn.vuetifyjs.com/images/cards/docks.jpg', 
          skills: ['Artist'],
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
};
