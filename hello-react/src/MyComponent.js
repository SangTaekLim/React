import React, { Component } from 'react';
import PropTypes from 'prop-types';


class MyComponent extends Component {
    static defaultProps = {
        name: '기본이름'
    };

    static protoTypes = {
        name: PropTypes.string,
        favoriteNumber: PropTypes.number.isRequired

    };
    render() {
        const { name, favoriteNumber, children } = this.props;
        return (
            <div>
                제이름은 {name} 입니다.<br />
                childeren 값은 {children}
                <br />
                제가 가장 좋아 하는 숫자는 {favoriteNumber}
            </div>
        );
    }
}



export default MyComponent;

