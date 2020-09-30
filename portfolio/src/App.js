import React, {Component} from 'react';
import Projects from './projects';
import SocialProfiles from './SocialProfiles';
import profilePic from './assets/me.JPG';
class App extends Component{
    state = {displayBio:false};
    toggleContent = () =>{
        this.setState({displayBio:!this.state.displayBio});
    }
    /* constructor(){
        super();
        this.state={displayBio :false};
        console.log("This is cons" , this);
        this.toggleContent = this.toggleContent.bind(this);
        //this.readLess = this.readLess.bind(this);

    } */

    

    render(){
        return (
            <div>
                <img className='profilePic' src={profilePic} alt="proPic"/>
                <h1>Hi!</h1>
                <p>My name is Chinmay.</p>
                <p>I live in Montreal.</p>
                {
                    this.state.displayBio ? (
                    <div>
                        <p>It has been 2 years now that I've been in  Montreal.</p>
                        <p>I know you don't need to know that but I had to add a line here.</p>
                        <button onClick = {this.toggleContent}>Read Less...</button>
                    </div>) : (
                        <div>
                            <button onClick = {this.toggleContent}>Read more...</button>
                        </div>
                    )
                }
                <hr/>
                <Projects/>
                <hr/>
                <SocialProfiles/>
            </div>
        )
    }
}

export default App;