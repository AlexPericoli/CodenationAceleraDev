import React from "react";
import "./Contact.scss";
import Contact from "./Contact";

class Contacts extends React.Component {
   state = {
      contacts: [],
   };

   componentDidMount() {
      fetch("https://5e82ac6c78337f00160ae496.mockapi.io/api/v1/contacts")
         .then((res) => res.json())
         .then(
            (result) => {
               this.setState({
                  //isLoaded: true,
                  contacts: result,
               });
            },
            // Nota: É importante lidar com os erros aqui
            // em vez de um bloco catch() para não recebermos
            // exceções de erros dos componentes.
            (error) => {
               this.setState({
                  isLoaded: true,
                  error,
               });
            }
         );
   }

   render() {
      let { contacts } = this.state;

      return (
         <div className="container" data-testid="contacts">
            <article className="contact">
               <span className="contact__avatar" />
               <span className="contact__data">Nome</span>
               <span className="contact__data">Telefone</span>
               <span className="contact__data">País</span>
               <span className="contact__data">Admissão</span>
               <span className="contact__data">Empresa</span>
               <span className="contact__data">Departamento</span>
            </article>
         </div>
      );
   }
}

export default Contacts;
