import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

class PhotoCarousel extends React.Component {
    render() {
        return ( 
            <Carousel wrap={true} touch={true}>
            {this.props.pics.map(picture => {
                    return (
                        <Carousel.Item className="carousel-cell" interval={2500}>
                            <img src={require(`../../images/${this.props.image_folder}/${picture}.png`)} alt={picture} />
                        </Carousel.Item> 
                    )
                })}
            </Carousel> 
        )     
    }
    
}
export default PhotoCarousel