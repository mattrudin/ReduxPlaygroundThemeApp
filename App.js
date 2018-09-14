import React from 'react';
import { Provider } from 'react-redux';
import Navigator from './screens/navigation';
import store from './components/store';

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Navigator />
      </Provider>
    );
  }
}