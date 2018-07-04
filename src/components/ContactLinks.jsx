import React from 'react';
import { SocialIcon } from 'react-social-icons';

class ContactLinks extends React.Component {


  render() {
    return (
      <div className="flex-row">
        <div className="item-social-icon">
          <SocialIcon url="https://www.instagram.com/drevie1/" />
        </div>
        <div className="item-social-icon">
          <SocialIcon url="https://twitter.com/dan_revie" />
        </div>
        <div className="item-social-icon">
          <SocialIcon url="https://www.linkedin.com/in/daniel-revie/" />
        </div>
        <div className="item-social-icon">
          <SocialIcon url="https://www.facebook.com/drevie" />
        </div>
        <div className="item-social-icon">
          <SocialIcon url="https://github.com/drevie" />

        </div>
      </div>
    );
  }
}

export default ContactLinks;
