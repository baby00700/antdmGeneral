import React from 'react'
import {Tabs} from 'antd-mobile';

class BaseBottomTabs extends React.Component{

  onChange = (tab,index) => {
    console.log(tab,index)
  }

  render () {
    const {tabs, initPageIndex, position, onTabChange, children} = this.props
    return (
      <div style={{
        width:'100%',
        height:'100%',
        position:'fixed',
        bottom: 0
      }}>
        <Tabs tabs={tabs}
              initialPage={initPageIndex}
              swipeable={false}
              tabBarPosition={position}
              omChange={(tab,index) => {onTabChange(tab,index)}}
              usePaged={true}
              renderTab={tab => <span style={{
                zIndex:1000
              }}><i className={`iconfont  ${tab.icon}`}></i> {tab.title}</span>}
        >
          {children.map((t,index) => {
            return (
              <div key={index} style={{ height: '100%',overflowY:'scroll',overflowX:'hidden', backgroundColor: '#fff' }}>
                {t}
              </div>
            )
          })}
        </Tabs>
      </div>
    )
  }
}

export default BaseBottomTabs
