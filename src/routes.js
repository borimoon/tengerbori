import Home from './components/Home.vue';
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

const CornerOne = resolve => {
  require.ensure(['./components/work/CornerOne.vue'], () => {
    resolve(require('./components/work/CornerOne.vue'));
  }, 'corner');
};

const CornerTwo = resolve => {
  require.ensure(['./components/work/CornerTwo.vue'], () => {
    resolve(require('./components/work/CornerTwo.vue'));
  }, 'corner');
};

export const routes = [
  {
    path: '',
    name: 'home',
    component: Home
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
          'corner': CornerOne,
          'footer': Footer
        }
      },

      {
        path: '/mindful-minimalism',
        components: {
          default: WorkTwo,
          'corner': CornerTwo,
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
