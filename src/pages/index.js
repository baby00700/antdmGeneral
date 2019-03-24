import React from 'react'
import BaseTabBar from '../components/BaseTabBar'
import messageIcon from '../assets/icon/icon_message.svg'
import messageIconFill from '../assets/icon/icon_message_fill.svg'
import homeIcoon from '../assets/icon/icon_work.svg'
import homeIconFill from '../assets/icon/icon_work_fill.svg'
import meIcon from '../assets/icon/icon_signal.svg'
import meIconFill from '../assets/icon/icon_signal_fill.svg'
import router from 'umi/router';
import { Button,WhiteSpace,WingBlank } from 'antd-mobile';
import Me from './Me'
// import Styles from './Me/index.less'
// import BaseBottomTabs from '../components/BaseBottomTabs'

class Index extends React.Component{

  goLogin = () => {
    router.push('/login')
  }

  render () {
    let pages = {
      'message': (
        <WingBlank>
          <Button>message</Button>
        </WingBlank>
      ),
      'home': (
        <div>home</div>
      ),
      'me': (
        <Me />
      )
    }
    let tabBarLists = [
      {
        title:'消息',
        key:'message',
        badge:'',
        icon: messageIcon,
        selectedIcon: messageIconFill,
      },
      {
        title:'主页',
        key:'home',
        badge:'',
        icon: homeIcoon,
        selectedIcon: homeIconFill,
      },
      {
        title:'我的',
        key:'me',
        badge:'',
        icon: meIcon,
        selectedIcon: meIconFill,
      }
    ]
    return (
      <div style={{
        width:'100%',
        height:'100%',
        position:'fixed',
        bottom: 0
      }}>
        <BaseTabBar pages={pages} items={tabBarLists} />
      </div>
    )
  }
}

export default Index
