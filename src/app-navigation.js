export default [
  {
    text: 'Home',
    icon: 'home',
    path: '/home',
  },
  {
    text: 'Receiving',
    icon: 'folder',
    path: '/receiving'
  },
  {
    text: 'Create Order',
    icon: 'folder',
    path: '/create-order'
  },
  {
    text: 'Open Orders',
    icon: 'folder',
    path: '/open-orders'
  },
  {
    text: 'Inventory',
    icon: 'folder',
    path: '/inventory'
  },
  {
    text: 'Settings',
    icon: 'folder',
    items: [
      {
        text: 'Customers',
        path: '/customers'
      },
      {
        text: 'Materials',
        path: '/materials'
      },
      {
        text: 'Pricing Tiers',
        path: '/pricing-tiers'
      },
      {
        text: "Settings",
        path: "/settings"
      }
    ]
  },
  {
    text: 'Scheduler',
    icon: 'folder',
    path: '/scheduler'
  },
  {
    text: 'Barcode',
    icon: 'folder',
    path: '/barcode'
  },
]
