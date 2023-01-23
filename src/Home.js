import { Component } from "react";
import Fire from './Fire.png';
import Chef from './Chef.png';
import Time from './Time.png';
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Image } from "react-bootstrap";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
class Home extends Component{
    constructor(){
        super();
        this.state={

        }
    }
    render(){
        return(
            
            <div>
               
                 <p style={{textAlign:'center', fontSize: '40px'}}>Our Story</p>
                 <p style={{textAlign: 'center'}}>We believe in good. We launched Fresh Pan Pizza Best Excuse Awards on our Facebook fan page. Fans were given situations where they had to come up with wacky and fun excuses. The person with the best excuse won the Best Excuse Badge and won Pizzeria's vouchers Their enthusiastic response proved that Pizzeria's Fresh Pan Pizza is the Tastiest Pan Pizza. Ever!

Ever since we launched the Tastiest Pan Pizza, ever, people have not been able to resist the softest, cheesiest, crunchiest, butteriest Domino's Fresh Pan
Pizza. They have been leaving the stage in the middle of a performance and even finding excuses to be disqualified in a football match.

We launched Fresh Pan Pizza Best Excuse Awards on our Facebook fan page. Fans were given situations where they had to come up with wacky and fun
excuses. The person with the best excuse won the Best Excuse Badge and won Domino's vouchers. Their enthusiastic response proved that Pizzeria's Fresh
Pan Pizza is the Tastiest Pan Pizza. Ever!</p>

<br/>
<br/>
<Container>
<Row>
<Col md={4}><Image src={Fire} width="350" height="200" align="left"/></Col>
<Col md={8}><br/><h3>Ingredients </h3>

<p>We're ruthless about goodness. We have no qualms about tearing up a day-old
lettuce leaf (straight from the farm), or steaming a baby (carrot). Cut Cut, Chop.
Cho Steam Steam. Stir Stir. While they're still young and fresh - that's our motto. It
makes the kitchen a better place.</p>

</Col></Row></Container>
<br/>
<br/>
<Container><Row>
 
<Col md={6}><br/><h3>Our Chefs</h3>

<p>They make sauces sing and salads dance. They create magic with skill, knowledge, passion, and stirring spoons (among other things). 
    They make goodness so good, it doesn't know what to do with itself. We do though. We send it to you.</p></Col>
<Col md={6}><Image src={Chef} width="350" height="200" align="right"/></Col></Row></Container>

<br/>
<br/>
<br/>
<br/>
 <Container><Row><Col md={6}><img src={Time} width="350" height="200" align="left"/></Col>

<Col md={6}><br/><br/><br/><h5>45 min  delivery</h5></Col></Row></Container>

            </div>
        )
    }
}
export default Home;

