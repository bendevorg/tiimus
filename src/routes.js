import Home from './components/Home';
import ProjectCreation from './components/Project/ProjectCreation';
import ProjectPage from './components/Project/ProjectPage';
import UserPage from './components/User/UserPage';

const routes = [
  {
    path: '/',
    name: 'Default',
    components: {
      default: Home
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
    path: '/projects/:id',
    name: 'Project page',
    components: {
      default: ProjectPage
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
