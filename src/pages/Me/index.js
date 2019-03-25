import React from 'react'
import Styles from './index.less'
import { Flex } from 'antd-mobile'
import picture1 from '../../assets/p1.png'
import grinfo from '../../assets/grinfo.png'
import bjinfo from '../../assets/bjinfo.png'
import jtinfo from '../../assets/jt.png'
import jlinfo from '../../assets/jl.png'
import cfinfo from '../../assets/cf.png'
import jianglinfo from '../../assets/jiangli.png'
import settings from '../../assets/setting.png'

class Me extends React.Component{

  wrap = () => {
    return (
      <div className={Styles.wraps}>
        <div className={Styles.tops}>
          <div className={Styles.names}>
            <div className={Styles.picture}>
              <img src={picture1} alt=""/>
            </div>
            <div className={Styles.name}>
              <div className={Styles.top}>张三 <span style={{fontSize:'0.6em',fontWeight: 100}}>学生</span></div>
              <div className={Styles.bottom}>经济管理学院5班</div>
            </div>
          </div>
        </div>
        <div className={Styles.floatCardsA}>
          <div className={Styles.funs}>
            <Flex style={{height:'100%'}}>
              <Flex.Item>
                <div className={Styles.funCon}>
                  <div className={Styles.iconTop}>
                    <img src={grinfo} alt=""/>
                  </div>
                  <div className={Styles.nameBottom}>
                    个人信息
                  </div>
                </div>
              </Flex.Item>
              <Flex.Item>
                <div className={Styles.funCon}>
                  <div
                    className={Styles.iconTop}
                  >
                    <img src={bjinfo} alt=""/>
                  </div>
                  <div className={Styles.nameBottom}>
                    班级信息
                  </div>
                </div>
              </Flex.Item>
            </Flex>
          </div>
        </div>

        <div className={Styles.floatCardsB}>
          <div className={Styles.funs}>
            <Flex style={{height:'100%'}}>
              <Flex.Item>
                <div className={Styles.funCon}>
                  <div className={Styles.iconTop}>
                    <img src={jtinfo} alt=""/>
                  </div>
                  <div className={Styles.nameBottom}>
                    家庭信息
                  </div>
                </div>
              </Flex.Item>
              <Flex.Item>
                <div className={Styles.funCon}>
                  <div
                    className={Styles.iconTop}
                  >
                    <img src={jlinfo} alt=""/>
                  </div>
                  <div className={Styles.nameBottom}>
                    在校经历
                  </div>
                </div>
              </Flex.Item>
            </Flex>
          </div>
        </div>

        <div className={Styles.floatCardsC}>
          <div className={Styles.funs}>
            <Flex style={{height:'100%'}}>
              <Flex.Item>
                <div className={Styles.funCon}>
                  <div className={Styles.iconTop}>
                    <img src={jianglinfo} alt=""/>
                  </div>
                  <div className={Styles.nameBottom}>
                    我的奖励
                  </div>
                </div>
              </Flex.Item>
              <Flex.Item>
                <div className={Styles.funCon}>
                  <div
                    className={Styles.iconTop}
                  >
                    <img src={cfinfo} alt=""/>
                  </div>
                  <div className={Styles.nameBottom}>
                    我的处分
                  </div>
                </div>
              </Flex.Item>
            </Flex>
          </div>
        </div>
        <div className={Styles.settings}>
          <img src={settings} alt=""/>设置
        </div>

      </div>
    )
  }


  render () {
    return this.wrap()
  }
}

export default Me



