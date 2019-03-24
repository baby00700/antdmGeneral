import React from 'react'
import {TabBar} from 'antd-mobile';

class BaseTabBar extends React.Component{

  state={
    selectedTab: 'me'
  }

  renderContent = (pageKey) => {
    const {pages} = this.props
    return pages[pageKey]
  }

  render () {
   const {items} = this.props
   const {selectedTab} = this.state
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
             selected={selectedTab === t.key}
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
             badge={t.badge}
             onPress={
               () => {
                 this.setState({
                   selectedTab: t.key
                 })
               }
             }
             data-seed="logId"
           >
             {this.renderContent(t.key)}
           </TabBar.Item>
         )
       })}

     </TabBar>
   )
  }
}

export default BaseTabBar
