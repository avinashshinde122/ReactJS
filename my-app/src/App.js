import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import FormComp from './Components/Card';




class App extends React.Component {
  state = {
    cards:[
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
  }  
 
  
  addNewCard = (cardInfo) =>{
    this.setState (prevState =>({
      cards:prevState.cards.concat(cardInfo)
    }));
  }

    

  render(){
    return(
      <div>
          <FormComp  cards={this.state.cards} onSubmit={this.addNewCard} />
      </div>
    );
  }
}

export default App;
