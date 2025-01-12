import './HeritageStyle.css';
import {Component} from 'react'
// import KLST1 from '../assets/KLST1.jpg'
// import KLST2 from '../assets/KLST2.jpg'

class HeritageData extends Component{
    render() {
        return (
            <div className={this.props.className}>
                <div className='her-text'>
                    <h2>{this.props.heading}</h2>
                    <p>{this.props.text} </p>
                </div>

                <div className='image'>
                    <img alt="img" src={this.props.img1}/>
                    <img alt="img" src={this.props.img2}/>
                </div>
            </div>
        )
    }
}

export default HeritageData;