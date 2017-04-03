import * as React from 'react';
import {Header} from './header';
import { Title } from './title';
import { Milestones } from './milestones/milestones';
import { Footer } from './footer';

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100%'
  } as React.CSSProperties,
  main: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column'
  } as React.CSSProperties
};

interface IMainProps {};

interface IMainState {};

export class Main extends React.Component<IMainProps, IMainState> {
  render() {
    return (
      <div style={styles.container}>
        <Header/>
        <main style={styles.main}>
          <Title/>
          <Milestones/>
        </main>
        <Footer/>
      </div>
    );
  }
}
