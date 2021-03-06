import React,{Component} from 'react';
import {
  View,
  Text,
  TouchableOpacity
} from 'react-native';
import {Actions} from 'react-native-router-flux'
class Box extends Component{
  constructor(props){//这个也会只调用一次
    super(props);
  }

  componentWillMount(){
    //这个函数调用时机是在组件创建，并初始化了状态之后，在第一次绘制 render() 之前,
    //可以在这里做一些业务初始化操作，也可以设置组件状态。这个函数在整个生命周期中只被调用一次。
  }

  componentDidMount(){
    //在组件第一次绘制之后，会调用 componentDidMount()，通知组件已经加载完成。这个放法只会调用一次
  }

  componentWillUpdate(){
    //可以做一些在更新界面之前要做的事情,就是调用render()函数前会先调用这个。在这个函数里面，不能使用 this.setState 来修改状态。
  }

  componentDidUpdate(){
    //调用了 render() 更新完成界面之后，会调用 componentDidUpdate() 来得到通知
  }

  componentWillUnmount(){
    //当组件要被从界面上移除的时候，就会调用,可以做一些组件相关的清理工作，例如取消计时器、网络请求等
    this.props.actions.clearState();
  }

  click() {
    this.props.actions.click();
  }
  changeScene(nextScene) {
    nextScene == 'scene1_1' ? Actions.yh_subScene1_1() : Actions.yh_subScene1_2();
  }
  render(){
    let {name} = this.props.state;
    let nextScene = this.props.title == 'scene1_1' ? 'scene1_2' : 'scene1_1';
    return(
      <View style ={{flex:1,alignItems:'center',justifyContent:'center'}}>
          <Text style ={{fontSize:18}} onPress ={()=>Actions.pop()}>go back</Text>
          <Text style ={{fontSize:18,marginTop:10}} onPress ={()=>this.click()}>{name} {this.props.title}</Text>
          <Text style ={{fontSize:18,marginTop:10}} onPress ={()=>this.changeScene(nextScene)}>go to {nextScene}</Text>
      </View>
    )
  }
}

export default Box;
