
import {Frame, Navigation} from '@shopify/polaris';
import {HomeMinor, OrdersMinor, ProductsMinor} from '@shopify/polaris-icons';
import React from 'react';


const Sidebar = () => {
  return (
    <div className='-mt-48'>
        <Frame>
      <Navigation location="/">
        <Navigation.Section
          items={[
            {
              url: '/',
              label: 'Home',
              icon: HomeMinor,
            },
            {
              url: '/view-stores',
              excludePaths: ['#'],
              label: 'view stores',
              icon: OrdersMinor,
              badge: '15',
            },
            {
              url: '/stores/installed',
              excludePaths: ['#'],
              label: 'Installed',
              icon: ProductsMinor,
            },
          ]}
        />
      </Navigation>
    </Frame>
    </div>
  )
}

export default Sidebar


