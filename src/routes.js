import Home from './components/Home.vue';
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';

const Works = resolve => {
  require.ensure(['./components/work/Works.vue'], () => {
    resolve(require('./components/work/Works.vue'));
  }, 'work');
};

const WorkOne = resolve => {
  require.ensure(['./components/work/WorkOne.vue'], () => {
    resolve(require('./components/work/WorkOne.vue'));
  }, 'work');
};

const WorkTwo = resolve => {
  require.ensure(['./components/work/WorkTwo.vue'], () => {
    resolve(require('./components/work/WorkTwo.vue'));
  }, 'work');
};

export const routes = [
  {
    path: '',
    name: 'home',
    components: {
      default: Home,
      'header-home': Header
    }
  },

  {
    path: '/work',
    name: 'work',
    component: Works,
    redirect: '/the-new-harmony',
    children:
    [
      {
        path: '/the-new-harmony',
        components: {
          default: WorkOne,
          'header-one': Header,
          'footer': Footer
        }
      },

      {
        path: '/mindful-minimalism',
        components: {
          default: WorkTwo,
          'header-two': Header,
          'footer': Footer
        }
      }
    ]
  },

  {
    path: '*',
    redirect: '/'
  }
];
