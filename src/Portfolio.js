import React from "react";
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from "react-bootstrap/Row"
import Col from 'react-bootstrap/Col'
import PSY from "./assets/psy_game.png"
import Beer from "./assets/Beer.png"
import Gem from "./assets/magic_gem.png"
import MMA from "./assets/MMA_Gif.png"
import DateNight from "./assets/Date_night.png"
import RPS from "./assets/Rps_Game.png"

const Portfolio = () => {
  return (
<div>
    <Container>
  {/* Row 1 */}
    <Row>
        <Col>
          <Card style={{ width: '30rem', margin: "2rem" }}>
            <Card.Img variant="top"  src= {PSY} style={{height: "18rem"}} />
            <Card.Body>
              <Card.Title>Phychic Game</Card.Title>
              <Card.Text>
              {`Try and guess what letter the comp is thinking! you only get a few guesses`}
              
              </Card.Text>
              <Button variant="primary" href="https://anthonyme0328.github.io/WordGuessGame/" target="_blank">Click here to try</Button>
            </Card.Body>
          </Card>
        </Col>

        <Col>
          <Card style={{ width: '30rem', margin: "2rem" }}>
            <Card.Img variant="top" src= {Gem} style={{height: "18rem"}} />
            <Card.Body>
              <Card.Title>Magic Gem Game</Card.Title>
              <Card.Text>
              {`Try and match the random value the game generates without going over!`}
              </Card.Text>
              <Button variant="primary" href="https://anthonyme0328.github.io/unit-4-game/" target="_blank">Click here to try</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>

  {/* Row 2 */}

    <Row>
        <Col>
          <Card style={{ width: '30rem', margin: "2rem" }}>
            <Card.Img variant="top" src= {Beer} style={{height: "18rem"}} />
            <Card.Body>
              <Card.Title>Beer Trivia</Card.Title>
              <Card.Text>
              {`Multiple choice beer trivia!, but there is a time limit`}
              </Card.Text>
              <Button variant="primary" href="https://anthonyme0328.github.io/Trivia-game/" target="_blank">Click here to try</Button>
            </Card.Body>
          </Card>
          </Col>

          <Col>
          <Card style={{ width: '30rem', margin: "2rem" }}>
            <Card.Img variant="top" src= {MMA} style={{height: "18rem"}} />
            <Card.Body>
              <Card.Title>MMA Gif Generator</Card.Title>
              <Card.Text>
              {`Generates memes for MMA and martial arts, pick a category!`}
              </Card.Text>
              <Button variant="primary" href="https://anthonyme0328.github.io/Giphy_HW_AME/" target="_blank">Click here to try</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>

  {/* Row 3 */}

    <Row>
      <Col>
        <Card style={{ width: '30rem', margin: "2rem" }}>
          <Card.Img variant="top" src= {RPS} style={{height: "18rem"}} />
          <Card.Body>
            <Card.Title>RPS Advanced</Card.Title>
            <Card.Text>
            {`Advanced Rock Paper Scissors against the computer!`}
            </Card.Text>
            <Button variant="primary" href="https://anthonyme0328.github.io/Rock_Paper_Scissors_Game/" target="_blank">Click here to try</Button>
          </Card.Body>
        </Card>
        </Col>

        <Col>
        <Card style={{ width: '30rem', margin: "2rem" }}>
          <Card.Img variant="top" src= {DateNight} style={{height: "18rem"}} />
          <Card.Body>
            <Card.Title>Date Night Roulette</Card.Title>
            <Card.Text>
            {`Finds you something to do something to eat`}
            </Card.Text>
            <Button variant="primary" href="https://anthonyme0328.github.io/On-The-Town-AME/" target="_blank" class="btn btn-primary">Click here to try</Button>
          </Card.Body>
        </Card>
        </Col>
    </Row>
  </Container>
</div>
  );
}

export default Portfolio;