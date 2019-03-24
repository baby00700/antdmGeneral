import React from 'react'
import {TabBar} from 'antd-mobile';

class BaseTabBar extends React.Component{

  render () {
   const {items} = this.props
   return (
     <TabBar
       unselectedTintColor="#949494"
       tintColor="#33A3F4"
       barTintColor="white"
     >
       {items.map(t => {
         return (
           <TabBar.Item
             title={t.title}
             key={t.key}
             icon={<div style={{
               width: '22px',
               height: '22px',
               background: `url(${t.icon}) center center /  21px 21px no-repeat` }}
             />
             }
             selectedIcon={<div style={{
               width: '22px',
               height: '22px',
               background: `url(${t.selectedIcon}) center center /  21px 21px no-repeat` }}
             />
             }
             selected={t.selected}
             badge={t.badge}
             onPress={t.onPress}
             data-seed="logId"
           >
             {t.component}
           </TabBar.Item>
         )
       })}

     </TabBar>
   )
  }
}

export default BaseTabBar
