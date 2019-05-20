import Vue from 'vue'
import Router from 'vue-router'

import bill from '@/components/bill'

// 订单
import property from '@/page/repair/property'     //消息中心
import propertyList from '@/page/repair/propertyList'//订单列表
import juxin from '@/page/repair/juxin'
import register from '@/page/repair/register' //报修信息
import detail from '@/page/repair/detail' //订单详情
import closeProperty from '@/page/repair/closeProperty'  //关闭订单
import propertyAssign from '@/page/repair/propertyAssign' //订单分派

//支付
import feedback from '@/page/vote/feedback'
import vote from '@/page/vote/vote'
Vue.use(Router)

const router= new Router({
  routes: [
    {
      path:'/',
      name:'property',
      component:property,
      meta:{
        title:'消息中心'
      },
    },
    {
      path: '/register',
      name: 'register',
      component:register,
      meta:{
        title: '报修信息'
      }
    },
    {
      path: '/detail',
      name: 'detail',
      component:detail,
      meta:{
        title: '报修详情'
      }
    },
    {
      path: '/closeProperty',
      name: 'closeProperty',
      component: closeProperty,
      meta:{
        title: '订单关闭'
      }
    },
    {
      path:'/propertyAssign',
      name:'propertyAssign',
      component:propertyAssign,
      meta:{
        title:'订单分派'
      },
    },
    {
      path: '/juxin',
      name: 'juxin',
      component:juxin,
      meta:{
        title: '巨星'
      }
    },
    {
      path:'/propertyList',
      name:'propertyList',
      component:propertyList,
      meta:{
        title:'报修订单'
      },
    },  
    {
      path:'/feedback',
      name:'feedback',
      component:feedback,
      meta:{
        title:'建议反馈'
      },
    },  
    {
      path:'/vote',
      nmae:'vote',
      component:vote,
      meta:{
        title:'投票'
      }
    }
  ]
});
//路由的钩子函数，
//在每一次路由跳转之前会进入这个方法 to：到哪去  from：从哪来 next() 调用这个方法来完成这个钩子函数
router.beforeEach((to, from, next) => {
    //动态改变title
    changeTitle(to.meta.title)
    next();
});

//动态改变title
function changeTitle(title) {
    title = title ? title : '管家客服';
    window.document.title = title;
};

export default router
