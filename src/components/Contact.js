import React from 'react';
import './Contact.css'
import PropTypes from 'prop-types'

const Contact = (props) => {
    return (
        <div className="Contact">
            <img className="avatar" src={props.avatar} alt={props.name} />
            <div className="name">
                {props.name}
                <div className="status">
                    <div className={props.online ? "status-online" : "status-offline"}></div>
                    <div className="status-text">
                        {props.online?"online":"offline"}
                    </div>
                </div>
            </div>
        </div>
    )
}


Contact.propTypes = {
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    online: PropTypes.bool.isRequired
  };
export default Contact
