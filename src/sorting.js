import { Card, CardImg, CardImgOverlay, CardText, CardBody,
    CardTitle } from 'reactstrap';
    import React,{ Component } from 'react'
    import FavoriteIcon from '@material-ui/icons/Favorite';

    

class Sorting extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedCard: null
        }
    }

    onCardSelect(sort) {
        this.setState({ selectedCard: sort});
    }
    like(e){
     console.log(e.target.value) 
     this.props.sorting.forEach(element => {
         if(element.id==e.target.value){
             element.likes+=1
         }
     });  
    }

    renderCard(sort) {
        if (sort != null)
            return(
                <Card id="card">
                    <a href="#"></a>
                    <CardBody>
                      <CardTitle>{sort.name}</CardTitle>
                      <img src={sort.img} />
                      <CardText>{sort.detail}</CardText>
                    </CardBody>
                </Card>
            );
        else
            return(
                <div></div>
            );
    }

    render() {
        const menu = this.props.sorting.map((sort) => {
            return (
              <div  className="col-12 col-md-5 m-1">
                <Card key={sort.id}
                  onClick={() => this.onCardSelect(sort)}>
                      <a href="#card" className="link">Dive into it</a>
                                    <CardImgOverlay>
                      <CardTitle>{sort.name}</CardTitle>
                  </CardImgOverlay>
                   <button onClick={this.like.bind(this)} value={sort.id}><FavoriteIcon/></button>
            <p>{sort.likes} likes</p>
            
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
                    {this.renderCard(this.state.selectedCard)}
                  </div>
                </div>
            </div>
        );
    }
}
export default Sorting