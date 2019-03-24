import React from 'react'
import BaseTabBar from '../components/BaseTabBar'
import messageIcon from '../assets/icon/icon_message.svg'
import messageIconFill from '../assets/icon/icon_message_fill.svg'
import homeIcoon from '../assets/icon/icon_work.svg'
import homeIconFill from '../assets/icon/icon_work_fill.svg'
import meIcon from '../assets/icon/icon_signal.svg'
import meIconFill from '../assets/icon/icon_signal_fill.svg'
// import router from 'umi/router';
// import { Button,WhiteSpace,WingBlank } from 'antd-mobile';
// import BaseBottomTabs from '../components/BaseBottomTabs'



class Index extends React.Component{

  state={
    selectedTab: 'message'
  }

  tabBarList = () => {
    const {selectedTab} = this.state
    let tabBarList = [
      {
        title:'消息',
        key:'message',
        badge:'',
        selected: selectedTab === 'message',
        onPress:() => {
          this.setState({
            selectedTab: 'message'
          })
        },
        component: (
          <p>message</p>
        ),
        icon: messageIcon,
        selectedIcon: messageIconFill,
      },
      {
        title:'主页',
        key:'home',
        badge:'',
        selected: selectedTab === 'home',
        onPress:() => {
          this.setState({
            selectedTab: 'home'
          })
        },
        component: (
          <p>home</p>
        ),
        icon: homeIcoon,
        selectedIcon: homeIconFill,
      },
      {
        title:'我的',
        key:'me',
        badge:'',
        selected: selectedTab === 'me',
        onPress:() => {
          this.setState({
            selectedTab: 'me'
          })
        },
        component: (
          <p>me</p>
        ),
        icon: meIcon,
        selectedIcon: meIconFill,
      }
    ]
    return tabBarList
  }

  render () {
    return (
      <div style={{
        width:'100%',
        height:'100%',
        position:'fixed',
        bottom: 0
      }}>
        <BaseTabBar items={this.tabBarList()} />
      </div>
    )
  }
}

export default Index
