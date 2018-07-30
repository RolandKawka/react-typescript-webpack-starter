import * as React from 'react';
import * as style from './style/style.scss';

interface Props { name: string; }

export class App extends React.Component<Props, {}> {
  render() {
    return (
      <div className={style.wrapper}>
        <h1>Hello, {this.props.name}</h1>
      </div>
    );
  }
}
