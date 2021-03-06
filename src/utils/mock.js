import MockAdapter from 'axios-mock-adapter';

export default axios => {
  const mock = new MockAdapter(axios);

  mock.onPost('/auth/sign_in').reply(200, {
    msg: 'User logged.'
  });

  mock.onPost('/auth/sign_up').reply(200, {
    msg: {
      id: '016a362a-4f32-496f-bf25-d785d4df42ed',
      name: 'Mock account'
    }
  });

  mock.onGet('/auth/sign_out').reply(200, {});

  mock.onGet('/user').reply(200, {
    msg: {
      id: 'teste',
      name: 'Guilherme',
      email: 'guilherme@teste.com.br',
      lookingForProject: true,
      image:
        'https://images.vexels.com/media/users/3/145908/preview2/52eabf633ca6414e60a7677b0b917d92-male-avatar-maker.jpg',
      skills: ['Developer']
    }
  });

  mock.onGet('/user').reply(200, {
    msg: {
      id: 'testa',
      name: 'Guilherme',
      email: 'guilherme@teste.com.br',
      lookingForProject: true,
      avatar:
        'https://images.vexels.com/media/users/3/145908/preview2/52eabf633ca6414e60a7677b0b917d92-male-avatar-maker.jpg',
      skills: [
        {
          name: 'Developer'
        }
      ],
      projects: [
        {
          id: 'teste',
          name: 'Brawll',
          image: 'https://cdn.vuetifyjs.com/images/cards/house.jpg',
          skills: [
            {
              name: 'Developer'
            },
            {
              name: 'Artist'
            },
            {
              name: 'Musician'
            }
          ],
          tags: [],
          description:
            'Brawll is an action 3D game where your goal is to send the other players to outer space.',
          projects_users: {
            role: 'owner'
          }
        },
        {
          name: 'Jacto Rally',
          image: 'https://cdn.vuetifyjs.com/images/cards/road.jpg',
          skills: [
            {
              name: 'Writer'
            }
          ],
          tags: [],
          description:
            'Brawll is an action 3D game where your goal is to send the other players to outer space.',
          projects_users: {
            role: 'user'
          }
        },
        {
          name: 'Into the light',
          image: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg',
          skills: [
            {
              name: 'Developer'
            },
            {
              name: 'Audio Mixer'
            }
          ],
          tags: [],
          description:
            'Brawll is an action 3D game where your goal is to send the other players to outer space.',
          projects_users: {
            role: 'owner'
          }
        }
      ]
    }
  });

  mock.onGet('/users').reply(200, {
    msg: [
      {
        id: 'teste',
        name: 'Guilherme',
        avatar:
          'https://images.vexels.com/media/users/3/145908/preview2/52eabf633ca6414e60a7677b0b917d92-male-avatar-maker.jpg',
        skills: [
          {
            name: 'Developer'
          }
        ],
        description: `pure dev build, 25`,
        rgb: '#7DD1F0'
      },
      {
        id: 'teste',
        name: 'Leonardo',
        avatar:
          'https://images.vexels.com/media/users/3/145908/preview2/52eabf633ca6414e60a7677b0b917d92-male-avatar-maker.jpg',
        skills: [
          {
            name: 'Developer'
          },
          {
            name: 'Artist'
          }
        ],
        description: `dex hybrid build, 45`,
        rgb: '#BA55DA'
      },
      {
        id: 'teste',
        name: 'Lucas',
        avatar:
          'https://images.vexels.com/media/users/3/145908/preview2/52eabf633ca6414e60a7677b0b917d92-male-avatar-maker.jpg',
        skills: [
          {
            name: 'Developer'
          },
          {
            name: 'Musician'
          }
        ],
        description: `milk, 25`,
        rgb: '#AA9900'
      },
      {
        id: 'teste',
        name: 'Michel',
        avatar:
          'https://images.vexels.com/media/users/3/145908/preview2/52eabf633ca6414e60a7677b0b917d92-male-avatar-maker.jpg',
        skills: [
          {
            name: 'Developer'
          },
          {
            name: 'Artist'
          }
        ],
        description: `bolicia hybrid build, 25`,
        rgb: '#F00'
      },
      {
        id: 'teste',
        name: 'Siqueira',
        avatar:
          'https://images.vexels.com/media/users/3/145908/preview2/52eabf633ca6414e60a7677b0b917d92-male-avatar-maker.jpg',
        skills: [
          {
            name: 'Developer'
          },
          {
            name: 'Writer'
          }
        ],
        description: `25`,
        rgb: '#000000'
      }
    ]
  });

  mock.onGet('/projects').reply(200, {
    msg: [
      {
        id: 'teste',
        name: 'Brawll',
        image: 'https://cdn.vuetifyjs.com/images/cards/house.jpg',
        skills: [
          {
            name: 'Developer'
          },
          {
            name: 'Artist'
          },
          {
            name: 'Musician'
          }
        ],
        tags: [],
        description:
          'Brawll is an action 3D game where your goal is to send the other players to outer space.'
      },
      {
        id: 'teste',
        name: 'Jacto Rally',
        image: 'https://cdn.vuetifyjs.com/images/cards/road.jpg',
        skills: [
          {
            name: 'Writer'
          }
        ],
        tags: [],
        description:
          'Brawll is an action 3D game where your goal is to send the other players to outer space.'
      },
      {
        id: 'teste',
        name: 'Into the light',
        image: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg',
        skills: [
          {
            name: 'Developer'
          },
          {
            name: 'Audio Mixer'
          }
        ],
        tags: [],
        description:
          'Brawll is an action 3D game where your goal is to send the other players to outer space.'
      },
      {
        id: 'teste',
        name: 'Disk Overdrive',
        image: 'https://cdn.vuetifyjs.com/images/cards/docks.jpg',
        skills: [
          {
            name: 'Artist'
          }
        ],
        tags: [],
        description:
          'Brawll is an action 3D game where your goal is to send the other players to outer space.'
      }
    ]
  });

  mock.onGet('/tags').reply(200, {
    msg: [
      {
        name: 'Action'
      },
      {
        name: 'Strategy'
      },
      {
        name: '2D'
      },
      {
        name: '3D'
      }
    ]
  });

  mock.onGet('/projects/test').reply(200, {
    msg: {
      id: 'test',
      name: 'Brawll',
      src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg',
      skills: [
        {
          name: 'Developer'
        },
        {
          name: 'Artist'
        },
        {
          name: 'Musician'
        }
      ],
      users: [
        {
          id: 'teste',
          name: 'Leonardo',
          image:
            'https://images.vexels.com/media/users/3/145908/preview2/52eabf633ca6414e60a7677b0b917d92-male-avatar-maker.jpg',
          skills: ['Developer', 'Artist'],
          projects_users: {
            role: 'owner'
          }
        }
      ]
    }
  });

  mock.onGet(/\/users\/\w+\/projects/).reply(200, {
    msg: [
      {
        name: 'Brawll',
        image: 'https://cdn.vuetifyjs.com/images/cards/house.jpg',
        skills: [
          {
            name: 'Developer'
          },
          {
            name: 'Artist'
          },
          {
            name: 'Musician'
          }
        ],
        tags: ['Action'],
        description:
          'Brawll is an action 3D game where your goal is to send the other players to outer space.'
      },
      {
        name: 'Jacto Rally',
        image: 'https://cdn.vuetifyjs.com/images/cards/road.jpg',
        skills: [
          {
            name: 'Writer'
          }
        ],
        tags: [],
        description:
          'Brawll is an action 3D game where your goal is to send the other players to outer space.'
      },
      {
        name: 'Into the light',
        image: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg',
        skills: [
          {
            name: 'Developer'
          },
          {
            name: 'Audio Mixer'
          }
        ],
        tags: [],
        description:
          'Brawll is an action 3D game where your goal is to send the other players to outer space.'
      },
      {
        name: 'Disk Overdrive',
        image: 'https://cdn.vuetifyjs.com/images/cards/docks.jpg',
        skills: [
          {
            name: 'Artist'
          }
        ],
        tags: [],
        description:
          'Brawll is an action 3D game where your goal is to send the other players to outer space.'
      }
    ]
  });

  mock.onGet(/\/users\/\w+/).reply(200, {
    msg: {
      name: 'Majimbo Monteiro',
      email: 'majimbo_monteiro@teste.com.br',
      avatar:
        'https://images.vexels.com/media/users/3/145908/preview2/52eabf633ca6414e60a7677b0b917d92-male-avatar-maker.jpg',
      skills: [
        {
          name: 'Developer'
        },
        {
          name: 'Artist'
        }
      ],
      projects: [
        {
          name: 'Brawll',
          image: 'https://cdn.vuetifyjs.com/images/cards/house.jpg',
          skills: [
            {
              name: 'Developer'
            },
            {
              name: 'Artist'
            },
            {
              name: 'Musician'
            }
          ],
          tags: [
            {
              name: 'Action'
            }
          ],
          description:
            'Brawll is an action 3D game where your goal is to send the other players to outer space.'
        },
        {
          name: 'Jacto Rally',
          image: 'https://cdn.vuetifyjs.com/images/cards/road.jpg',
          skills: [
            {
              name: 'Writer'
            }
          ],
          tags: [],
          description:
            'Brawll is an action 3D game where your goal is to send the other players to outer space.'
        },
        {
          name: 'Into the light',
          image: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg',
          skills: [
            {
              name: 'Developer'
            },
            {
              name: 'Audio Mixer'
            }
          ],
          tags: [],
          description:
            'Brawll is an action 3D game where your goal is to send the other players to outer space.'
        },
        {
          name: 'Disk Overdrive',
          image: 'https://cdn.vuetifyjs.com/images/cards/docks.jpg',
          skills: [
            {
              name: 'Artist'
            }
          ],
          tags: [],
          description:
            'Brawll is an action 3D game where your goal is to send the other players to outer space.'
        }
      ]
    }
  });

  mock.onGet(/\/projects\/\w+/).reply(200, {
    msg: {
      id: 'test',
      name: 'Brawll',
      image: 'https://cdn.vuetifyjs.com/images/cards/house.jpg',
      skills: [
        {
          name: 'Developer'
        },
        {
          name: 'Artist'
        },
        {
          name: 'Musician'
        }
      ],
      users: [
        {
          id: 'teste',
          name: 'Leonardo',
          avatar:
            'https://images.vexels.com/media/users/3/145908/preview2/52eabf633ca6414e60a7677b0b917d92-male-avatar-maker.jpg',
          skills: [
            {
              name: 'Developer'
            },
            {
              name: 'Artist'
            }
          ],
          projects_users: {
            role: 'owner'
          }
        },
        {
          id: 'teste',
          name: 'Lucas',
          avatar:
            'https://images.vexels.com/media/users/3/145908/preview2/52eabf633ca6414e60a7677b0b917d92-male-avatar-maker.jpg',
          skills: [
            {
              name: 'Developer'
            },
            {
              name: 'Musician'
            }
          ],
          projects_users: {
            role: 'user'
          }
        }
      ],
      tags: [
        {
          name: 'Action'
        }
      ],
      description:
        'Brawll is an action 3D game where your goal is to send the other players to outer space.'
    }
  });

  mock.onPost('/projects/test/ask_join').reply(200, {
    msg: 'Invite done.'
  });

  mock.onPost('/users/test/invite').reply(200, {
    msg: 'Invite done.'
  });
};
