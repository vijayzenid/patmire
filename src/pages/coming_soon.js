import React,{useRef } from 'react';
import Soon from './../assets/images/coming_soon.jpg';
import { useState } from 'react';
import emailjs from '@emailjs/browser';

function Coming_soon(){

	 const form = useRef();

	  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_9gnh3sb', 'template_yr2u9pf', form.current, 'tzhm6BJNWmSEQcb6w')
      .then((result) => {
          console.log(result.text);
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
						<h1>COMING SOON</h1>
						<p>Something new is on the way for ML Designs. We’re in the process of revamping our website and can’t wait to share. Enter your information below to be the first to know when we launch:</p>
					</div>
					<div className="contact_form">
						<form ref={form} onSubmit={sendEmail}>
				     <div className="input_field">
								<input type="text" name="user_name" placeholder="Name"/>
							</div>
							<div className="input_field">
								<input type="email" name="user_email" placeholder="Email Address" />
							</div>
							<div className="input_field">
								<button>GET ON THE LIST!</button>
							</div>
   			 </form>
					</div>
					<div className="our_email">
						<p>In the meantime, for new projects inquiries or general information you can email us directly at <a href="mailto:email@midesigns.com"> email@midesigns.com</a>.
						</p>
					</div>
				</div>
				</div>
			</section>
		</>
		)
}

export default Coming_soon;