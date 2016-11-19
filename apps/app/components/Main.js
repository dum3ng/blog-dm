import React, { Component } from 'react'
import { StyleSheet, css } from 'aphrodite'
import HomeContainer from './HomeContainer'

const styles = StyleSheet.create({
  container: {
    flex: 1,
 
    backgroundColor: 'white',
  }
})

let post = {
  title: 'this is the recent post',
  content: ` A long post contains something
Integer nec hendrerit dui, ac cursus augue. Quisque vel dignissim enim. 
Suspendisse nec commodo erat. Maecenas sed fermentum ligula. Pellentesque cursus massa quis lectus tristique convallis vitae nec massa. Etiam molestie dolor semper viverra hendrerit. Morbi vulputate massa vitae nulla eleifend dapibus. Pellentesque vel porttitor odio.
  `,
}

class Main extends Component {
  constructor(props) {
    super(props)
    this.state = {
      post: {},
    }
  }
  componentDidMount() {
    console.log('main did mount...')
    fetch('http://localhost:3000/api/articles/recent')
    .then((response) => {
      var j = response.json()
      console.log(j)
      return j 
    })
    .then((json) => {
      console.log(json[0])
      this.setState({post: json[0]})

    })
  }
  render() {
    var content = ((t) => {
      switch(t){
      case 'archives':
      return <h2>this is archives page.</h2>
      case 'about':
      return <h2>This is about me page.</h2>
      case 'home':
      default:
      return <HomeContainer post={this.state.post} />
    }})(this.props.tab)
    return (
      <div className={css(styles.container)}>
        {content}
      </div>
    )
  }
}

export default Main
