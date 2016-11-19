import React, { Component } from 'react'
import { StyleSheet, css } from 'aphrodite'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  space: {
    flex: 1,
  }

})

class _Spinner extends Component{
  constructor(props) {
    super(props);
  
    this.state = {};
  }
  render() {
    return (
      <img src='/images/spinner.svg' style={{transform: `rotate(${this.props.rotation}deg)`}}/>
      )
  }
}

class Spinner extends Component {
  constructor(props) {
    super(props)
    this.state = {
      rotation: 0,
    }
    this.timer
  }
  componentDidMount() {
    this.timer = setInterval(()=>{
      this.setState({rotation: this.state.rotation+12})
    }, 1000/60)
  }
  componentWillUnmount() {
    clearInterval(this.timer)
  }
  render() {
    return (
      <div className={css(styles.container)}>
        <div className={css(styles.space)}></div>
        <_Spinner rotation={this.state.rotation} />
        <div className={css(styles.space)}></div>
      </div>
    )
  }
}

export default Spinner
