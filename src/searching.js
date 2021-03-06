import { Card, CardImg, CardImgOverlay, CardText, CardBody,
    CardTitle } from 'reactstrap';
    import React,{ Component } from 'react'
    import FavoriteIcon from '@material-ui/icons/Favorite';
    
class Searching extends Component {

    constructor(props) {
        super(props);

        this.state = {
            selectedDish: null
        }
    }

    onDishSelect(search) {
        this.setState({ selectedDish: search});
    }
    like(e){
        console.log(e.target.value) 
        this.props.searching.forEach(element => {
            if(element.id==e.target.value){
                element.likes+=1
            }
        });  
       }

    renderDish(search) {
        if (search != null)
            return(
                <Card id="card">
                    <a href="#"></a>
                    <CardBody>
                      <CardTitle>{search.name}</CardTitle>
                      <img src={search.img} />
                      <CardText>{search.detail}</CardText>
                    </CardBody>
                </Card>
            );
        else
            return(
                <div></div>
            );
    }

    render() {
        const menu = this.props.searching.map((search) => {
            return (
              <div  className="col-12 col-md-5 m-1">
    
                <Card key={search.id}
                  onClick={() => this.onDishSelect(search)}>
                      <a href="#card" className="link">Dive into it</a>
                                    <CardImgOverlay>
                      <CardTitle>{search.name}</CardTitle>
                  </CardImgOverlay>
                  <button onClick={this.like.bind(this)} value={search.id}><FavoriteIcon /></button>
                  <p>{search.likes} likes</p>
 
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
export default Searching