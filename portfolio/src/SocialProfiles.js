import React, {Component} from 'react';
import SOCIAL_PROF from './data/socialProfile';

class SocialProfile extends Component{
    render(){
        const { link, image} = this.props.socialProfile;
        return (
            <span>
                <a href={link}>
                    <img src={image} alt='social-profile-pic' style={{height:35, width:35, margin:12}}/>
                </a>
            </span>
        )
    }
}

class SocialProfiles extends Component{
    render(){
        return (
            <div>
                <h2>Connect with me!</h2>
                <div>
                    {
                        SOCIAL_PROF.map(SOCIAL_PRO => {
                        return <SocialProfile key={SOCIAL_PRO.id} socialProfile={SOCIAL_PRO}/>
                    })}
                </div>
            </div>
        )
    }
}

export default SocialProfiles;