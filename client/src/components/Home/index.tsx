import React from 'react'
import { Button } from '@material-ui/core'
import { Link } from 'react-router-dom'
import './style.css'

export default function Home() {
    return (
        <div className="App">
      <header className="App-header">
        <p>
          Simple App
        </p>

        <Button variant="contained" component={Link} to="/login">
          
          Log In
        </Button>

        <Button variant="contained" component={Link} to="/register">
          
          Register
        </Button>
        
        
      </header>
    </div>
    )
}