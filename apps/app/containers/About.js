import React, { Component } from 'react'
import { StyleSheet, css } from 'aphrodite/no-important'
import {connect} from 'react-redux'
import ReactMarkdown from 'react-markdown'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex'
  },
  wrapper: {
    flex: 1,
    padding: '50px 50px'
  }

})

const introduction = `
Two roads diverged in a yellow wood,
And sorry I could not travel both
And be one traveler, long I stood
And looked down one as far as I could
To where it bent in the undergrowth;

Then took the other, as just as fair,
And having perhaps the better claim
Because it was grassy and wanted wear,
Though as for that the passing there
Had worn them really about the same,

And both that morning equally lay
In leaves no step had trodden black.
Oh, I kept the first for another day!
Yet knowing how way leads on to way
I doubted if I should ever come back.

I shall be telling this with a sigh
Somewhere ages and ages hence:
Two roads diverged in a wood, and I,
I took the one less traveled by,
And that has made all the difference.

Robert Frost
`

class About extends Component {
  constructor (props) {
    super(props)
    this.state = {
      
    }
  }
  render () {
    return (
      <div className={css(styles.container)}>
        <div className={css(styles.wrapper)}>
          <h2>About Me</h2>
          <hr />
          <div>
            {introduction.split('\n').map((row) => {
              return <p id='row'>{row}</p>
            })}
          </div>
        </div>
      </div>
    )
  }
}

const mapProps = (state) => {
  return {
 
  }
}

const mapDispatch = (dispatch, getState) => {
  return {
 
  }   
}

export default connect(mapProps, mapDispatch)(About)
