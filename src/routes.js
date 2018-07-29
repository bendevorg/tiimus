import Home from './components/Home';

const routes = [
  {
    path: '/',
    name: 'Default',
    components: {
      // 'menu-top': Navmenu,
      default: Home
      // 'foot-compo': Footer
    }
  }
];

export default routes;
