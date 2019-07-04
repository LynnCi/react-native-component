# react-native-component
react-native常用组件整理
# 1、Draw - 抽屉式侧滑
安装 npm install react-native-side-menu --save <br>
引入 import SideMenu from 'react-native-side-menu';
# 2、Sideslip - 侧滑删除
安装 npm install --save react-native-swipe-list-view 或 yarn add react-native-swipe-list-view <br>
引入 import {SwipeListView, SwipeRow} from 'react-native-swipe-list-view';

支持开启or关闭左右滑动；<br>
支持隐藏按钮的单击事件；<br>
list组件中支持点击其他item关闭当前item滑动；