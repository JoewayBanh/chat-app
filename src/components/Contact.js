import React from 'react';
import './Contact.css'

const name = "Debra Marshal";
const avatar = "https://randomuser.me/api/portraits/women/95.jpg"
const online = true;

const Contact = () => {
    return (
        <section className="Contact">
            <img className="avatar" src={avatar}></img>
            <div className="name">
                {name}
                <div className="status">
                    <span className="status-text">
                        <div className="status-online"></div>
                        {online ? "online" : "offline"}
                    </span>
                </div>
            </div>
        </section>
    )
}

export default Contact
