import React, { Component } from 'react';
import './Contact.css'
import PropTypes from 'prop-types'


class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            online: false
        }
    }

    checkOnline = () => {
        const onOff = !this.state.online;
        this.setState({ online: onOff })
        console.log("sdad")
    }

    render() {
        return (
            <div className="Contact">
                <img className="avatar" src={this.props.avatar} alt={this.props.name} />
                <div className="name">
                    {this.props.name}
                    <div className="status">
                        <div className={this.state.online ? "status-online" : "status-offline"}></div>
                        <div onClick={() => this.checkOnline()} className="status-text">
                            {this.state.online ? "online" : "offline"}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

Contact.propTypes = {
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    online: PropTypes.bool.isRequired
};
export default Contact
