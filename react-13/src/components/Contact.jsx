import React from "react";
import { format } from "date-fns";

function Contact(props) {
   return (
      <article className="contact" data-testid="contact">
         <span className="contact__avatar">
            <img src={props.avatar} alt={props.name} />
         </span>
         <span className="contact__data">{props.name}</span>
         <span className="contact__data">{props.phone}</span>
         <span className="contact__data">{props.country}</span>
         <span className="contact__data">
            {/*format(new Date(props.admissionDate), "dd/MM/yyyy")*/}
         </span>
         <span className="contact__data">{props.company}</span>
         <span className="contact__data">{props.department}</span>
      </article>
   );
}

export default Contact;
