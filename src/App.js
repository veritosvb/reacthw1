import React, { Component } from "react";
import Jumbotron from "./components/Jumbotron";
import ImageCard from "./components/ImageCard";
import Nav from "./components/Nav";
import { Col, Row, Container } from "./components/Grid";
import friends from "./friends.json";

class Detail extends Component {
  state = {
    score: 0,
    topScore: 0,
    guessed:"",
    message: "Click an image to begin!",
    friends
  };

    handleIncrement = () => {
      // We always use the setState method to update a component's state
      this.setState({ score: this.state.score + 1 });
    };
  
    // handleDecrement decreases this.state.count by 1
    handleDecrement = () => {
      // We always use the setState method to update a component's state
      if(this.state.score > this.state.topScore){
          this.setState({ topScore: this.state.score })
      }
      this.state.friends.map(friend =>(friend.guessed = 0) );        
      this.setState({ score: 0 });
    };

  clickedFriend = id => {
    if(this.state.friends.filter(friend => friend.id === id)[0].guessed === 0){
      this.state.friends.filter(friend => friend.id === id)[0].guessed = 1;
      this.setState({  message: "You guessed correctly!" });
      this.handleIncrement();
    } else{
      this.setState({  message: "You guessed incorrectly!" });
            this.handleDecrement();
    }
    let friends = this.state.friends.map((a) => [Math.random(),a]).sort((a,b) => a[0]-b[0]).map((a) => a[1]);
    
    this.setState({ friends });

  }

  render() {
    return (
    <div>
      <Nav message= {this.state.message} score={this.state.score} topScore={this.state.topScore}/>
      <Jumbotron>
      <h1>Clicky Game</h1>
      <h2>Click on an image to earn points, but don't click on any more than once!</h2>
      </Jumbotron>
      <Container>
        <Row>
            {this.state.friends.map(friend => (
         <Col size="lg-4 md-4 sm-6">
          <ImageCard
            clickedFriend={this.clickedFriend}
            id={friend.id}
            image={friend.image}
            format={friend.clicked}
          />
          </Col>
        ))}
         
        </Row>
      </Container>
      </div>
    )
}

}

export default Detail;
