import { Route } from '../../reup'

export default class Home extends Route {
  static actions = ['addItem'];

  addItem(item) {
    return item
  }

  reducer(state = ['test'], action) {
    switch(action.type) {
      case 'addItem':
        return [action.item, ...state]
      default:
        return state
    }
  }
}