import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Dimensions,

} from 'react-native';

import SideMenu from 'react-native-side-menu';


const {width,height} = Dimensions.get('window');
export default class App extends Component{
    constructor(props){
        super(props);
        this.state = {
            isOpen: false
        }
    }
    render(){
        const menu = <Text style={{ marginTop:22 }} onPress={() => alert('click draw')}>U SEE ME</Text>;
        return(
            <SideMenu
                menu={menu} //抽屉内组件
                isOpen={this.state.isOpen} //抽屉状态 打开or关闭
                openMenuOffset={width/2} //抽屉宽度
                hiddenMenuOffset={0} //抽屉关闭时显示的宽度
                edgeHitWidth={60} //距离屏幕多少距离可以滑出抽屉，默认60
                disableGestures={false} //是否禁用手势滑动 默认false 允许手动滑动
                onChange={ //抽屉状态变化监听函数
                    (isOpen) => {
                        isOpen ? console.log('抽屉打开'):console.log('抽屉关闭')
                    }
                }
                onMove={  //抽屉移动时的监听函数，参数为抽屉拉出来的距离，抽屉在左为正，在右侧为负
                    (marginLeft) => {
                        console.log(marginLeft)
                    }
                }
                menuPosition={'left'} //抽屉在左or右侧
                autoClosing={false} //默认为true 如果为true 一有事件发生抽屉就会关闭
            >
                <View style={styles.container}>
                    <Text
                        style={styles.welcome}
                        onPress={() => {
                            this.setState({
                                isOpen:true
                            })
                        }}
                    >open draw!</Text>
                </View>
            </SideMenu>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#f5fcff',

    },
    welcome:{
        fontSize:20,
        textAlign: 'center',
        margin:10,
    },

});