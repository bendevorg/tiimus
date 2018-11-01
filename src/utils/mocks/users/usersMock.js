import MockAdapter from 'axios-mock-adapter';

export default axios => {
  const mock = new MockAdapter(axios);

  mock
    .onGet('/user')
    .reply(200, {
      msg: {
        id: 'teste',
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
          skills: ['Developer']
        },
        { 
          id: 'teste',
          name: 'Leonardo', 
          image: 'https://images.vexels.com/media/users/3/145908/preview2/52eabf633ca6414e60a7677b0b917d92-male-avatar-maker.jpg',
          skills: ['Developer', 'Artist']
        },
        { 
          id: 'teste',
          name: 'Lucas', 
          image: 'https://images.vexels.com/media/users/3/145908/preview2/52eabf633ca6414e60a7677b0b917d92-male-avatar-maker.jpg',
          skills: ['Developer', 'Musician']
        },
        { 
          id: 'teste',
          name: 'Michel', 
          image: 'https://images.vexels.com/media/users/3/145908/preview2/52eabf633ca6414e60a7677b0b917d92-male-avatar-maker.jpg',
          skills: ['Developer', 'Artist']
        },
        { 
          id: 'teste',
          name: 'Siqueira', 
          image: 'https://images.vexels.com/media/users/3/145908/preview2/52eabf633ca6414e60a7677b0b917d92-male-avatar-maker.jpg',
          skills: ['Developer', 'Writer']
        }
      ]
    });
};
