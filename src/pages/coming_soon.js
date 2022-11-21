import React,{useRef,useState } from 'react';
import Soon from './../assets/images/coming_soon.png';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';
import Logo from './../assets/images/logo1.png';


function Coming_soon(){

	  const form = useRef();
    const [email, setEmail] = useState("")
    const [name, setName] = useState("")
	  const sendEmail = (e) => {
    e.preventDefault();
    const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    if(email == "" || name == ""){
    	toast.error("Please Enter Required Fields");
    	return 
    } else if(regex.test(email) === false){
    	toast.warn("Please Enter Valid Email Address");
    	return
    }
    emailjs.sendForm('service_meh0hgg', 'template_yr2u9pf', form.current, 'tzhm6BJNWmSEQcb6w')
      .then((result) => {
          console.log(result.text);
          if(result.text == "OK"){
          	toast.success("Thanks for Registration");
          	document.getElementsByTagName("input")[0].value="";
          	document.getElementsByTagName("input")[1].value="";
          }
      }, (error) => {
          console.log(error.text);
      });
  };
return(
		<>
			<section className="coming_soon">
				<div className="outer_section">
					<div className="side_img">
					<img src={Soon}/>
				</div>
				<div className="inform">
					<div className="heading">
					<div className="logo"><img src={Logo}/></div>
						<h1>COMING SOON</h1>
						<p>Stay tuned. We are launching soon. You will not want to miss this! Be first to know. Enter your information below to know when we launch</p>
					</div>
					<div className="contact_form">
						<form ref={form} onSubmit={sendEmail}>
				     <div className="input_field">
								<input type="text" name="user_name" placeholder="Name" value = {name} onChange = {(e)=>setName(e.target.value)}  />
							</div>
							<div className="input_field">
								<input type="text" name="user_email" placeholder="Email Address" value = {email} onChange = {(e) => setEmail(e.target.value)}  />
							</div>
							<div className="input_field">
								<button>GET ON THE LIST!</button>
							</div>
   			 </form>
					</div>
					<div className="our_email">
						<p>In the meantime, for inquiries or general information you can email us directly at <a href="mailto:support@patmire.store"> support@patmire.store</a>.
						</p>
						<p>Follow us:<a href="https://www.instagram.com/patmire.official/?igshid=YmMyMTA2M2Y%3D" target="_blank">&nbsp;&nbsp;&nbsp;<i className="fa-brands fa-instagram"></i></a></p>
					</div>
				</div>
				</div>
			</section>
		</>
		)
}

export default Coming_soon;