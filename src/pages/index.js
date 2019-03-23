import React from 'react'
import router from 'umi/router';
import { ActivityIndicator, Tabs, Button,WhiteSpace,WingBlank } from 'antd-mobile';

const Hometabs = [
  { title: '消息', sub: '1', icon:'iconicon_message'},
  { title: '主页', sub: '2', icon:'iconicon_workset' },
  { title: '我的', sub: '3', icon:'iconicon_principal' },
];


class Index extends React.Component{

  onChange = (tab,index) => {
    console.log(tab,index)
  }

   goLogin = () => {
    router.push('/login');
  }

  render () {
    return (
      <div style={{
        width:'100%',
        height:'100%',
        position:'fixed',
        bottom: 0
      }}>
        <Tabs tabs={Hometabs}
              initialPage={1}
              swipeable={false}
              tabBarPosition="bottom"
              omChange={this.onChange}
              usePaged={true}
              renderTab={tab => <span style={{
                zIndex:1000
              }}><i className={`iconfont  ${tab.icon}`}></i> {tab.title}</span>}
        >
          <div style={{ height: '100%',overflowY:'scroll',overflowX:'hidden', backgroundColor: '#fff' }}>
            <ActivityIndicator toast text="正在加载" />
          </div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', backgroundColor: '#fff' }}>
            <WingBlank>
              <Button>default</Button><WhiteSpace />
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
          </div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#fff' }}>
            Content of third tab
          </div>
        </Tabs>
      </div>
    )
  }
}

export default Index
