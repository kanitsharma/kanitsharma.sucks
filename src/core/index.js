import React from 'react'
import { Router, Location } from '@reach/router'
import { Transition } from 'react-spring'
import Home from '../pages/home'
import About from '../pages/about'
import createStore from '../store'
import rootReducer from '../store/rootReducer'

const { Provider, useStore } = createStore(rootReducer)

export default _ => (
  <Provider>
    <Location>
      {
        ({ location }) => (
          <Transition
            keys={location.key}
            items={location}
            from={{ opacity: 0, transform: 'translate3d(100%,0,0)' }}
            enter={{ opacity: 1, transform: 'translate3d(0%,0,0)' }}
            leave={{ opacity: 1, transform: 'translate3d(-50%,0,0)' }}>
            {
              l => style => (
                <Router location={l} className='router' >
                  <Home path='/' />
                  {/* <About path='/about' style={style} /> */}
                </Router>
              )
            }
          </Transition>
        )
      }
    </Location>
  </Provider>
)

export { useStore } 