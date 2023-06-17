import HomePage from '../pages/Homepage'
export default [
  {
    path: "/",
    component: HomePage,
    exact: true,
    propsData: {
      isUser: true,
    },
  },
 
];
