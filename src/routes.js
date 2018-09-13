import Home from './components/Home';
import ProjectCreation from './components/Project/ProjectCreation';
import UserPage from './components/User/UserPage';

const routes = [
  {
    path: '/',
    name: 'Default',
    components: {
      // 'menu-top': Navmenu,
      default: Home
      // 'foot-compo': Footer
    }
  },
  {
    path: '/project/create',
    name: 'Project creation',
    components: {
      default: ProjectCreation
    }
  },
  {
    path: '/users/:id',
    name: 'User page',
    components: {
      default: UserPage
    }
  }
];

export default routes;
