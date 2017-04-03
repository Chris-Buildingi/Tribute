import * as React from 'react';
import axios from 'axios';

import { Milestone, MilestoneComponent } from './milestone';

const styles = {
    container: {
        margin: '1rem'
    },
    h2: {
        fontWeight: 300,
        fontSize: '1.5rem'
    } as React.CSSProperties,
    techs: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around'
    }
};

interface IMilestonesProps { };

interface IMilestonesState {
    milestones: Milestone[];
};

export class Milestones extends React.Component<IMilestonesProps, IMilestonesState> {
    constructor() {
        super();
        this.state = { milestones: [] };
    }

    componentDidMount() {
        axios
            .get('app/milestones/milestones.json')
            .then(response => {
                this.setState({ milestones: response.data });
            });
    }

    render() {
        return (
            <div style={styles.container}>
                <ul>
                    {this.state.milestones.map((milestone: Milestone, i: number ) => (
                        <MilestoneComponent key={i} milestone={milestone} />
                    ))}
                    </ul>
            </div>
        );
    }
}
