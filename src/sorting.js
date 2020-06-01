import { Card, CardImg, CardImgOverlay, CardText, CardBody,
    CardTitle } from 'reactstrap';
    import React,{ Component } from 'react'

class Sorting extends Component {

    constructor(props) {
        super(props);

        this.state = {
            selectedDish: null
        }
    }

    onDishSelect(sort) {
        this.setState({ selectedDish: sort});
    }
    like(e){
     console.log(e.target.value) 
     this.props.sorting.forEach(element => {
         if(element.id==e.target.value){
             element.likes+=1
         }
     });  
    }

    renderDish(sort) {
        if (sort != null)
            return(
                <Card id="card">
                    <a href="#"></a>
                    <CardBody>
                      <CardTitle>{sort.name}</CardTitle>
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
                  onClick={() => this.onDishSelect(sort)}>
                      <a href="#card">Dive into it</a>
                                    <CardImgOverlay>
                      <CardTitle>{sort.name}</CardTitle>
                  </CardImgOverlay>
                   <button onClick={this.like.bind(this)} value={sort.id}>Loved it</button>
            <p>{sort.likes}</p>
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
export default Sorting