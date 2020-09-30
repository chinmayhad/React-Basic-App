import React ,  {Component} from 'react';
import PROJECTS from './data/project';

class Project extends Component{
    render(){
        //console.log('props : ', this.props);
        const {title, image, desc} = this.props.project;
        return(
        <div style={{display:'inline-block', width:250, margin:10}}>
            <h3>{title}</h3>
            <img src = {image} alt='profile' style= {{width:200, height:120} }/>
            <p>{desc}</p>
        </div>
        )
    }
}

class projects extends Component{
    render(){
        return(
            <div>
                <h2>Selected Projects</h2>
                <div>
                    {
                        PROJECTS.map( PR => {
                            return (
                               <Project key={PR.id} project={PR}/>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}

export default projects;