import React,{useRef} from 'react';

import './App.css';


function App() {
  
  const email=useRef()
  const password=useRef()

  const handleSubmit=()=>{
      localStorage.setItem("email",email.current.value)
      localStorage.setItem("password",password.current.value)
     
  }

 

  return (
    <div className="App">
      
      <form onSubmit={handleSubmit}>
        
        <div className='navigation'>
          <h3 className='menu'>Menu</h3>
          <img className='image' src="https://www.luxuryformen.com/media/amasty/shopby/option_images/slider/brand_logo_A-dam.png" alt="" />
          <h3 className='bag'>Bag <b> 0</b></h3>
        </div>

        <div className='login'>
          <h2>Login</h2>
          <div className='line'></div>
          <label>Email address</label>
          <input type="email" name="email" ref={email} required={true}/>
          
          <label>Password</label>
          <input type="password" name="password"  ref={password}required={true} />
          
          <label className='password'>Password forgot</label>
          <button className='submit' type="submit">login</button><div className='border'></div>
        </div>

        <div className='container'>
          <div className="details">
          <h2>New at A-dam?</h2>
          <div className='line'></div>
          <p>You can track your orders, edit biling/shipping <br/> info, receive exclusive offer and lots more! </p>
         <span>
          <i class="fa-solid fa-check"></i>
            View your orders and returns g easily
            <br/>
            <i class="fa-solid fa-check" aria-hidden="true"></i>
            Speed up orders with saved contact info
            <br/>
            <i class="fa-solid fa-check" aria-hidden="true"></i>
            Be part of the bebeficial A-dam family
          </span>
          <label>Email address</label>
          <input type="email" required={true}   name="email" ref={email} className='email-box'/>
          <button className='submit' id="new-customer">go as new customer</button><div className='border' id="customer"></div>
          </div>
        </div>
      </form>
    
    </div>
  );
}

export default App;
