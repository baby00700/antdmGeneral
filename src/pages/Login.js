import React from 'react'
import styles from './Login.less';
import logo from '../assets/logo.png'

class Login extends React.Component{

  state = {
    teacher: false
  }

  stuLoginDoc = () => {
    return (
      <div className={styles.normal}>
        <div className={styles.logo}>
          <img src={logo} alt="" style={{width:'70%'}}/>
        </div>
        <div className={styles.loginForm}>
          <div className={styles.userName}>
            <div className={styles.inputs}>
              <input type="text" placeholder='请输入学号'/>
            </div>
          </div>
          <div className={styles.password}>
            <div className={styles.inputs}>
              <input type="password" placeholder='请输入密码'/>
            </div>
          </div>
          <div className={styles.buttons}>登录</div>
        </div>
        <div className={styles.teacherLogin}>
          <span onClick={() => {
            this.setState({
              teacher: true
            })
          }}>教职工登录</span> | <span>忘记密码</span>
        </div>
      </div>
    )
  }

  teaLoginDoc = () => {
    return (
      <div className={styles.normalt}>
        <div className={styles.logo}>
          <img src={logo} alt="" style={{width:'70%'}}/>
        </div>
        <div className={styles.loginForm}>
          <div className={styles.userName}>
            <div className={styles.inputs}>
              <input type="text" placeholder='请输入工号'/>
            </div>
          </div>
          <div className={styles.password}>
            <div className={styles.inputs}>
              <input type="password" placeholder='请输入密码'/>
            </div>
          </div>
          <div className={styles.buttons}>登录</div>
        </div>
        <div className={styles.teacherLogin}>
          <span onClick={() => {
            this.setState({
              teacher:false
            })
          }}>学生登录</span> | <span>忘记密码</span>
        </div>
      </div>
    )
  }

  docs = () => {
    const {teacher} = this.state
    return !teacher ? this.stuLoginDoc() : this.teaLoginDoc()
  }

  render () {
    return this.docs()
  }
}


export default Login
