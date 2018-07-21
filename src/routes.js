import Content from './components/shared/Content.vue';

const routes = [
  {
    path: '/',
    name: 'Default',
    components: {
      // 'menu-top': Navmenu,
      default: Content
      // 'foot-compo': Footer
    }
  }
];

export default routes;
