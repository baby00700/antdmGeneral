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
// import BaseBottomTabs from '../components/BaseBottomTabs'

class Index extends React.Component{

  state={
    selectedTab: 'message'
  }

  goLogin = () => {
    router.push('/login')
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
          <WingBlank>
            <Button onClick={this.goLogin}>goLogin</Button><WhiteSpace />
            <Button disabled>default disabled</Button><WhiteSpace />

            <Button type="primary">primary</Button><WhiteSpace />
            <Button type="primary" disabled>primary disabled</Button><WhiteSpace />

            <Button type="warning">warning</Button><WhiteSpace />
            <Button type="warning" disabled>warning disabled</Button><WhiteSpace />

            <Button loading>loading button</Button><WhiteSpace />
            <Button icon="check-circle-o">with icon</Button><WhiteSpace />
            <Button icon={<img src="https://gw.alipayobjects.com/zos/rmsportal/jBfVSpDwPbitsABtDDlB.svg" alt="" />}>with custom icon</Button><WhiteSpace />
            <Button icon="check-circle-o" inline size="small" style={{ marginRight: '4px' }}>with icon and inline</Button>
            <Button icon="check-circle-o" inline size="small">with icon and inline</Button>
            <WhiteSpace />

            {/* <Button activeStyle={false}>无点击反馈</Button><WhiteSpace /> */}
            {/* <Button activeStyle={{ backgroundColor: 'red' }}>custom feedback style</Button><WhiteSpace /> */}

            <WhiteSpace />
            <Button type="primary" inline style={{ marginRight: '4px' }}>inline primary</Button>
            {/* use `am-button-borderfix`. because Multiple buttons inline arranged, the last one border-right may not display */}
            <Button type="ghost" inline style={{ marginRight: '4px' }} className="am-button-borderfix">inline ghost</Button>

            <WhiteSpace />
            <Button type="primary" inline size="small" style={{ marginRight: '4px' }}>primary</Button>
            <Button type="primary" inline size="small" disabled>primary disabled</Button>
            <WhiteSpace />
            <Button type="ghost" inline size="small" style={{ marginRight: '4px' }}>ghost</Button>
            {/* use `am-button-borderfix`. because Multiple buttons inline arranged, the last one border-right may not display */}
            <Button type="ghost" inline size="small" className="am-button-borderfix" disabled>ghost disabled</Button>
          </WingBlank>
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
