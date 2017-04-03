import * as React from 'react';

const styles = {
  header: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#1f1f1f'
  } as React.CSSProperties,
  title: {
    flex: 1,
    fontSize: '1.5rem',
    margin: '1rem'
  },
  date: {
    flex: 1,
    textAlign: 'right',
    margin: '1rem',
    color: 'white'
  }
};

interface IHeaderProps {};

interface IHeaderState {};

export class Header extends React.Component<IHeaderProps, IHeaderState> {
  render() {
    return (
      <header style={styles.header}>
        <p style={styles.title}>
          <a href='https://github.com/FountainJS/generator-fountain-webapp' target='_blank'>
            Nikola Tesla
          </a>
        </p>
        <p style={styles.date}>
          Tribute by Chris Brown
        </p>
      </header>
    );
  }
}
