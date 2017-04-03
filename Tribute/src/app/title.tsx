import * as React from 'react';

const styles = {
    main_container: {
        display: 'flex',
        flexDirection: 'column'
    } as React.CSSProperties,
    title_container: {
        display: 'flex',
        flexDirection: 'row'
    } as React.CSSProperties,
    body_container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around'
    } as React.CSSProperties,
    logo_container: {
        flex: 1,
        margin: '1rem'
    },
    quotes_container: {
        flex: 1,
        margin: '1rem'
    },
    h1: {
        fontWeight: 300,
        fontSize: '3rem',
        margin: '1rem',
        width: '100%',
        textAlign: 'center'
    } as React.CSSProperties,
    logo: {
        backgroundColor: 'white',
        borderRadius: '1rem',
        width: '100%',
        height: 'auto',
        flex: 1
    }
};

interface ITitleProps { };

interface ITitleState { };

export class Title extends React.Component<ITitleProps, ITitleState> {
    render() {
        return (
            <div style={styles.main_container}>
                <div id='title_title' style={styles.title_container} >
                    <h1 style={styles.h1}>Nikola Tesla - Welcome Alternating Current</h1>
                </div>
                <div className={'title-body-container'} style={styles.body_container}>
                    <div style={styles.logo_container}>
                        <img style={styles.logo} src='http://turingchurch.com/wp-content/uploads/2015/12/nikola-tesla.jpg' />
                        </div>
                    <div style={styles.quotes_container}>
                        <blockquote className={'quote1'}>Today's scientists have substituted mathematics for experiments, and they wander off through equation after equation, and eventually build a structure which has no relation to reality.</blockquote>
                        <blockquote className={'quote2'}>It is paradoxical, yet true, to say, that the more we know, the more ignorant we become in the absolute sense, for it is only through enlightenment that we become conscious of our limitations. Precisely one of the most gratifying results of intellectual evolution is the continuous opening up of new and greater prospects.</blockquote>
                        <blockquote className={'quote3'}>The year 2100 will see eugenics universally established. In past ages, the law governing the survival of the fittest roughly weeded out the less desirable strains. Then man's new sense of pity began to interfere with the ruthless workings of nature. As a result, we continue to keep alive and to breed the unfit.</blockquote>
                        <blockquote className={'quote4'}>The history of science shows that theories are perishable. With every new truth that is revealed we get a better understanding of Nature and our conceptions and views are modified.</blockquote>
                    </div>
                </div>
            </div>
        );
    }
}
