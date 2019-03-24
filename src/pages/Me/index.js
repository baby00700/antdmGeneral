import React from 'react'
import Styles from './index.less'
import { Flex } from 'antd-mobile'
import picture1 from '../../assets/p1.png'
import grinfo from '../../assets/grinfo.png'
import bjinfo from '../../assets/bjinfo.png'

class Me extends React.Component{

  cardWrap = (innerProps) => {
    const {width, height, children} = innerProps
    return (
      <div
        className={Styles.cardWrap}
        style={{width,height}}
      >
        {children}
      </div>
    )
  }

  baseContent = (children) => {
    return (
      <div className={Styles.baseContent}>
        {children.map((t,index) => {
          return (
            <div key={`${index}-k`}>
              {t}
            </div>
          )
        })}
      </div>
    )
  }

  nameIcon = () => {
    return (
      <div  className={Styles.nameIcon}>
        <div className={Styles.nameIcon.left}>
          <img src="" alt=""/>
        </div>
        <div className={Styles.nameIcon.right}>
          张三
        </div>
      </div>
    )
  }

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
        <div className={Styles.floatCards}>
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
      </div>
    )
  }

  baseIndoCard = () => {
    return (
      <div>baseinfo</div>
    )
  }

  render () {
    return this.wrap()
  }
}

export default Me



