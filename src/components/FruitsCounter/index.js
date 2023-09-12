import {Component} from 'react'
import './index.css'

class FruitsCounter extends Component {
  state = {
    mangoes: 0,
    bananas: 0,
  }

  bananaAdd = () => {
    this.setState(prevState => ({mangoes: prevState.mangoes + 1}))
  }

  mangoAdd = () => {
    this.setState(prevState => ({bananas: prevState.bananas + 1}))
  }

  render() {
    const {mangoes, bananas} = this.state

    return (
      <div className="container">
        <div className="card-container">
          <h1 className="heading">
            Bob ate <span className="mangoes-count">{mangoes} </span> mangoes
            <span className="mangoes-count"> {bananas} </span>bananas
          </h1>

          <div className="fruits-items-container">
            <div className="fruits-items">
              <img
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png "
                className="mango"
                alt="mango"
              />
              <button type="button" className="button" onClick={this.bananaAdd}>
                Eat Mango
              </button>
            </div>

            <div className="fruits-items">
              <img
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png  "
                className="banana"
                alt="banana"
              />
              <button type="button" className="button" onClick={this.mangoAdd}>
                Eat Banana
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter
