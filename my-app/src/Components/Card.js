import React, { Component}  from 'react';
import axios from 'axios';

const Card = (props)=>{
    return (
        
        <div style={{margin:'1em'}}>
            <img width="75" src={props.avatar_url} />
            <div style={{display:'inline-block',marginLeft:'10px'}}>
                <div style={{fontSize:'1.25em',fontWeight:'bold'}}>
                    {props.name}
                </div>
                <div>{props.company}</div>
            </div>
        </div>
    );
}

let data = [
    {
        name:"Avinash Shinde",
        avatar_url:'https://avatars3.githubusercontent.com/u/31499011?v=4',
        company:'Happiest Minds'
    },
    {
        name:"Ben Alpert",
        avatar_url:'https://avatars.githubusercontent.com/u/6820?v=3',
        company:'Facebook'
    }
]

const CardList = (props)=>{
    return(
        <div>
            {props.cards.map(card=> <Card {...card} />)}
        </div>
    );
}

class FormComp extends React.Component{
    handleSubmit = (event) => {
        event.preventDefault();
        axios.get(`https://api.github.com/users/${this.state.userName}`)
            .then(res=>{
                this.props.onSubmit(res.data);
            })
        console.log ('Event: Form Submit',this.state.userName);
    }
    state ={
        userName:"",
      };
    
    render(){
        return(
            <div>
            <form onSubmit={this.handleSubmit}>
                <input type = 'text'
                value={this.state.userNameInput}
                onChange = {(event)=>this.setState({userName:event.target.value})}
                placeholder='UserName' required/>
                <button type='submit'>Add User</button>
            </form>
            <CardList cards={this.props.cards}/>
            </div>
        );
    }
}



export default FormComp;