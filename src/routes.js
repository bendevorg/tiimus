import Home from './components/Home';
import UserPage from './components/user/UserPage';
import UserEdit from './components/user/UserEdit';
import ProjectCreation from './components/project/ProjectCreation';
import ProjectPage from './components/project/ProjectPage';
import ProjectEdit from './components/project/ProjectEdit';

const routes = [
  {
    path: '/',
    name: 'Default',
    components: {
      default: Home
    }
  },
  {
    path: '/users/:id',
    name: 'User page',
    components: {
      default: UserPage
    }
  },
  {
    path: '/user/edit',
    name: 'User edit',
    components: {
      default: UserEdit
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
    path: '/projects/:id/edit',
    name: 'Project edit',
    components: {
      default: ProjectEdit
    }
  }
];

export default routes;
