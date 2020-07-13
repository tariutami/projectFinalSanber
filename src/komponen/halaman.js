//dihalaman ini terdapat fitur untuk mengganti tema 
//*saya mencoba menambahkanya  melalui berbagai refrensi yang saya temukan

import React from 'react';
import {ThemeContext} from './tema';
import '../index.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  import LifeUp from "../Konversi";
  import Form from "../Form";
import ToDo from '../Hobi';

class Halamanku extends React.Component{
    render(){
        return (
            <ThemeContext.Consumer>
                {({colorTheme, onChangeTheme, bahasa}) => 
                {return (

                            <div style={
                                {
                                    backgroundColor : colorTheme ==='dark' ? 'blue' : 'white',
                                    color : colorTheme === 'dark' ? 'white' : 'blue'
                                }
                            }>

                            <>
        <div className="header" style={{ backgroundColor : colorTheme ==='dark' ? 'blue' : 'white'}}>
            <h1>Website Sederhana</h1>
            <p>Final Project...</p>
        </div>

        
       
        <Router>
            <div className="topnav">
            <p><Link to="/">Home</Link></p>
            <p><Link to="/konversi">Konversi Uang</Link></p>
            <p><Link to="/Form">Form</Link></p>
            <p><Link to="/Hobi">Hobi</Link></p>
            <button onClick={onChangeTheme}>
                {colorTheme ==='dark' ? 'Normal Mode' : 'Colour Mode'}
            </button>
            </div>
        <div className="row">
        <div className="leftcolumn">
            <div className="card" style={{ backgroundColor : colorTheme ==='dark' ? 'Blue' : 'white'}}>
             {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
        <Route path="/Konversi">
            <LifeUp />
        </Route>
        <Route path="/Form">
            <Form />
        </Route>
        <Route path="/Hobi">
            <ToDo />
        </Route>
        <Route path="/">
            <Home />
        </Route>
        </Switch>

            </div>
        </div>

       
        <div className="rightcolumn" style={{ backgroundColor : colorTheme ==='dark' ? 'grey' : 'white'}}>
            <div classNames="card" style={{ backgroundColor : colorTheme ==='dark' ? 'blue' : 'white'}}>
            <h2>About Me</h2>
            <div className="fakeimg">Image</div>
            <p>Selamat Datang.....</p>
            </div>
            <div className="card" style={{ backgroundColor : colorTheme ==='dark' ? 'red' : 'white'}}>
            <h3>Popular Post</h3>
            <div className="fakeimg"><p>Image</p></div>
            <div className="fakeimg"><p>Image</p></div>
            <div className="fakeimg"><p>Image</p></div>
            </div>
            <div className="card" style={{ backgroundColor : colorTheme ==='dark' ? 'black' : 'white'}}>
            <h1>Follow</h1>
            <p>@tariutamii</p>
            <p>My name is Tari Utami Putri</p>
            </div>
        </div>
        </div>
        </Router>
<div className="footer">
  <h2>Footer</h2>
</div>
        </>
                            
                            
                            
                            </div>
                        )}
                }
            </ThemeContext.Consumer>
        )
        
    }
}

  

export default Halamanku;

function Home() {
    return (
    <>
    <h2>HELLO....</h2>
    <h3>Welcome To This Site !!!!</h3>
    <h5>13-07-2020</h5>
    <div className="fakeimg" >Image</div>
    
    <p>Website ini dibuat untuk project akhir pelatihan belajar react</p>
    </>);
  }
  
  