import * as React from 'react';

export class Milestone {
    constructor(
        public date: string,
        public description: string
    ) { }
}

const styles = {
    tech: {
        height: '15rem',
        width: '15rem',
        border: '1px solid lightgray',
        borderRadius: '1rem',
        margin: '1rem',
        padding: '1rem'
    },
    logo: {
        width: '5rem',
        height: '5rem',
        float: 'right',
        margin: '0 0 .5rem .5rem'
    },
    h3: {
        fontSize: '1.5rem',
        margin: '0 0 2rem 0'
    }
};

interface IMilestoneProps {
    key: number;
    milestone: Milestone;

};

interface IMilestoneState { };

export class MilestoneComponent extends React.Component<IMilestoneProps, IMilestoneState> {
    static propTypes = {
        date: React.PropTypes.object.isRequired,
        description: React.PropTypes.object.isRequired
    };

    render() {
        return (
            <li>
                <span className={'milestone-date'}>{this.props.milestone.date}</span>
                <span className={'milestone-descrption'}>{this.props.milestone.description}</span>
            </li>
        );
    }
}
