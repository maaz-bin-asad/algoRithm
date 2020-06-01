import { Card, CardImg, CardImgOverlay, CardText, CardBody,
    CardTitle } from 'reactstrap';
    import React,{ Component } from 'react'

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

    renderDish(search) {
        if (search != null)
            return(
                <Card id="card">
                    <a href="#"></a>
                    <CardBody>
                      <CardTitle>{search.name}</CardTitle>
                      <img src="linear.png" />
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
                      <a href="#card">Click to go</a>
                                    <CardImgOverlay>
                      <CardTitle>{search.name}</CardTitle>
                  </CardImgOverlay>
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