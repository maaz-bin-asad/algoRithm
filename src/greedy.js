import { Card, CardImg, CardImgOverlay, CardText, CardBody,
    CardTitle } from 'reactstrap';
    import React,{ Component } from 'react'
    import FavoriteIcon from '@material-ui/icons/Favorite';
    
class Greedy extends Component {

    constructor(props) {
        super(props);

        this.state = {
            selectedDish: null
        }
    }

    onDishSelect(greedy) {
        this.setState({ selectedDish: greedy});
    }
    like(e){
        console.log(e.target.value) 
        this.props.greeding.forEach(element => {
            if(element.id==e.target.value){
                element.likes+=1
            }
        });  
       }
    renderDish(greedy) {
        if (greedy != null)
            return(
                <Card id="card">
                    <a href="#"></a>
                    <CardBody>
                      <CardTitle>{greedy.name}</CardTitle>
                      <CardText>{greedy.detail}</CardText>
                    </CardBody>
                </Card>
            );
        else
            return(
                <div></div>
            );
    }

    render() {
        const menu = this.props.greeding.map((greedy) => {
            return (
              <div  className="col-12 col-md-5 m-1">
    
                <Card key={greedy.id}
                  onClick={() => this.onDishSelect(greedy)}>
                      <a href="#card" className="link">Dive into it</a>
                                    <CardImgOverlay>
                      <CardTitle>{greedy.name}</CardTitle>
                  </CardImgOverlay>
                  <button onClick={this.like.bind(this)} value={greedy.id}><FavoriteIcon /></button>
                  <p>{greedy.likes} likes</p>
 
                </Card>
              </div>
            );
        });

        return (
            <div className="container">
                          <div className="row">
                    {menu}
                </div>
                <div className="row">
                  <div  className="col-12 col-md-5 m-1">
                    {this.renderDish(this.state.selectedDish)}
                  </div>
                </div>
            </div>
        );
    }
}
export default Greedy