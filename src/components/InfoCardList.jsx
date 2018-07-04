import React from 'react';
import InfoCard from './InfoCard';

class InfoCardList extends React.Component {
    constructor(props) {
        super(props);
    }

    renderList = () => this.props.cardInfo.map(item =>
        <InfoCard icon={item.icon} text={item.text} />
    );

    render() {
        return (
            <div>
                <span>D J</span>
                {this.renderList()}
            </div>
        )
    }
}

export default InfoCardList;
