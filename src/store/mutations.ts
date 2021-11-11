import { IState } from '../typings';

export default {
  setHeaderTitle(state: IState, routerName: string) {
    switch (routerName) {
      case 'home':
        state.headerTitle = state.headerTitle;
        break;
      case 'pins':
        state.headerTitle = '发现 - 沸点 - 掘金';
        break;
      case 'news':
        state.headerTitle = '资讯 - 掘金'
        break;
      default:
        state.headerTitle = state.headerTitle
    }
  }
}