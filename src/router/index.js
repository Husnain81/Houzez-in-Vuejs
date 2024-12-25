import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    /*** 
     * @route 'localhost:3000/'
     * @name app
     * @prefix No
     * @auth False
     * @author WebPenter
    ***/
    {
      path: '/',
      name:'app',
      component:() => import('@/views/app/layout/Index.vue'),
      children:[
          {
            path: '/',
            name:'app.home',
            component:() => import('@/views/app/pages/home/Index.vue'),
            meta:{
              title:'Home'
            }
          },
          {
            path: '/add-new-property',
            name:'app.add-new-property',
            component:() => import('@/views/app/pages/add-new-property/Index.vue'),
            meta:{
              title:'Add Property'
            }
          },
          {
            path: '/properties',
            name:'app.properties',
            component:() => import('@/views/app/pages/properties/Index.vue'),
            meta:{
              title:'Properties'
            }
          },
          {
            path: '/property',
            name:'app.property',
            component:() => import('@/views/app/pages/property/Index.vue'),
            meta:{
              title:'Property'
            }
          },
          {
            path: '/realtor',
            name:'app.realtor',
            component:() => import('@/views/app/pages/realtor/Index.vue'),
            meta:{
              title:'Realtor'
            }
          },
          {
            path: '/search-results',
            name:'app.search-results',
            component:() => import('@/views/app/pages/search-results/Index.vue'),
            meta:{
              title:'Search Results'
            }
          },
      ]
    },

     /*** 
     * @route 'localhost:3000/dashboard/'
     * @name dashboard
     * @prefix No
     * @auth True
     * @author WebPenter
    ***/
     {
      path: '/dashboard',
      name:'dashboard',
      component:() => import('@/views/dashboard/layout/Index.vue'),
      children:[
          {
            path: '/dashboard/profile',
            name:'dashboard.profile',
            component:() => import('@/views/dashboard/pages/profile/Index.vue'),
            meta:{
              title:'Profile'
            }
          },
      ]
    },
  ],
})

router.beforeEach((to,from,next) => {
  // -------------- Guards of Protected and Unprotected Routes ----------------
  next();

  // --------------------------- Dynamic Title --------------------------------
   document.title = to?.meta.title ? `Houzez - ${to.meta.title}` : 'Houzez'
});

export default router
