import {Component} from 'react'
import "./AdventureStyle.css";

class AdventureData extends Component{
    render() {
        return (
            <div className={this.props.className}>
                <div className='des-text'>
                    <h2>{this.props.heading}</h2>
                    <p>{this.props.text} </p>
                </div>

                <div className='image'>
                    <img alt="img" src={this.props.img1}/>
                    <div className='video'>
                        <video autoPlay loop muted className="background-video">
                            <source src={this.props.vid} type="video/mp4" />
                        </video>
                    </div>
                </div>
            </div>

        )
    }
}

export default AdventureData;