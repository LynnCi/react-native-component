import React,{ Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    ListView,
    TouchableOpacity,
} from 'react-native';
import {SwipeListView,SwipeRow} from "react-native-swipe-list-view";

export default class Sideslip3 extends Component{
    render(){
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        const dataSource = ['a', 'b', 'c'];
        return (
            <View style={styles.outView}>
                <SwipeRow
                    leftOpenValue={75}
                    rightOpenValue={-75}
                    disableRightSwipe={true}   //禁止向右滑动
                >
                    <View style={styles.rowBack}>
                        <Text allowFontScaling={false}>加入</Text>
                        <Text allowFontScaling={false}>购物车</Text>
                    </View>
                    <View style={{alignItems: 'center', backgroundColor: '#CCC', height: 50, justifyContent: 'center'}}>
                        <Text>I am a standalone SwipeRow</Text>
                    </View>
                </SwipeRow>

                <SwipeListView
                    style={styles.lists}
                    dataSource={ds.cloneWithRows(dataSource)}
                    renderRow={ data => (
                        <View style={styles.rowFront}>
                            <Text>I am {data} in a SwipeListView</Text>
                        </View>
                    )}

                    renderHiddenRow={ data => (
                        <View style={styles.rowBack}>
                            <TouchableOpacity onPress={() => alert('left')}>
                                <View style={styles.leftView}>
                                    <Text>Left</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => alert('right')}>
                                <View style={styles.leftView}>
                                    <Text>Right</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    )}
                    leftOpenValue={75}
                    rightOpenValue={-75}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    outView: {
        flex: 1,
        marginTop: 22,
    },
    rowBack: {
        alignItems: 'center',
        backgroundColor: '#DDD',
        flexDirection: 'row',
        justifyContent: 'space-between',
        flex: 1,
    },
    rowFront: {
        alignItems: 'center',
        backgroundColor: '#CCC',
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        justifyContent: 'center',
        height: 50,
    },
    leftView: {
        width: 75,
        alignItems: 'center',
        backgroundColor: 'green',
        height: 50,
        justifyContent: 'center',
    },
    lists:{
        marginTop: 20,
    },

});