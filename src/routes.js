import Home from './components/Home';
import ProjectCreation from './components/Project/ProjectCreation';

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
  }
];

export default routes;
