import React from 'react'
import { ActivityIndicator } from 'antd-mobile'

class Loading extends React.Component{
  render () {
    return (
      <ActivityIndicator toast text="正在加载" />
    )
  }
}

export default Loading
