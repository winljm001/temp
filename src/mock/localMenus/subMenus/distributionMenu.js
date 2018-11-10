const childrenMenu = {
  children: [
    {
      children: [
        {
          upMenuCode: '10050000',
          children: [],
          menuIcon: 'paper-clip',
          menuUrl: '/distribution/menu1/menu1_1',
          menuCode: '10050101',
          menuLevel: 2,
          menuName: '活动方案',
          menuScope: 'operate',
          component: 'distribution/menu1/menu1-1/Index'
        },
        {
          upMenuCode: '10050000',
          children: [],
          menuIcon: 'paper-clip',
          menuUrl: '/distribution/menu1/menu1_2',
          menuCode: '10050102',
          menuLevel: 2,
          menuName: '活动方案',
          menuScope: 'operate',
          component: 'distribution/menu1/menu1-2/Index'
        },
        {
          upMenuCode: '10050000',
          children: [],
          menuIcon: 'paper-clip',
          menuUrl: '/distribution/menu1/menu1_3',
          menuCode: '10050103',
          menuLevel: 2,
          menuName: '活动方案',
          menuScope: 'operate',
          hideInMenu: true,
          component: 'distribution/menu1/menu1-3/Index'
        }
      ],
      menuCode: '10050100',
      menuIcon: 'paper-clip',
      menuLevel: 1,
      menuName: '活动运营',
      menuScope: 'operate',
      component: 'distribution/Index',
      menuUrl: '/distribution/menu1'
    },
    {
      children: [
        {
          upMenuCode: '10050200',
          children: [],
          menuIcon: 'paper-clip',
          menuUrl: '/distribution/menu2/menu2_1',
          menuCode: '10050201',
          menuLevel: 2,
          menuName: '活动方案',
          menuScope: 'operate',
          component: 'distribution/menu2/menu2-1/Index'
        },
        {
          upMenuCode: '10050200',
          children: [],
          menuIcon: 'paper-clip',
          menuUrl: '/distribution/menu2/menu2_2',
          menuCode: '10050202',
          menuLevel: 2,
          menuName: '活动方案',
          menuScope: 'operate',
          component: 'distribution/menu2/menu2-2/Index'
        },
        {
          upMenuCode: '10050200',
          children: [],
          menuIcon: 'paper-clip',
          menuUrl: '/distribution/menu2/menu2_3',
          menuCode: '10050203',
          menuLevel: 2,
          menuName: '活动方案',
          menuScope: 'operate',
          component: 'distribution/menu2/menu2-3/Index'
        }
      ],
      menuUrl: '/distribution/menu2',
      menuCode: '10050200',
      menuIcon: 'paper-clip',
      menuLevel: 1,
      menuName: '活动运营',
      menuScope: 'operate',
      component: 'distribution/Index'
    }
  ],
  menuCode: '10050000',
  menuIcon: 'file',
  menuLevel: 1,
  menuName: '配送',
  menuUrl: '/distribution',
  menuScope: 'operate',
  component: 'main/Index'
}
export default childrenMenu
