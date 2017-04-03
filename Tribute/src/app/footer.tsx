import * as React from 'react';

const styles = {
  footer: {
    padding: '0.5rem',
    fontSize: '1rem',
    backgroundColor: '#1f1f1f',
    textAlign: 'center',
    color: 'white'
  }
};

interface IFooterProps {};

interface IFooterState {};

export class Footer extends React.Component<IFooterProps, IFooterState> {
  render() {
    return (
      <footer style={styles.footer}>
        Built as a training exercies for <a href='http://www.buildingi.com' target='_blank'>Buildingi</a>
      </footer>
    );
  }
}
