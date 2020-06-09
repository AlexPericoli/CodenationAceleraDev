import React from "react";

import "./Filters.scss";
import Button from "./Button";

class Filters extends React.Component {
   constructor(props) {
      super(props);

      this.state = {
         name: "",
         selectedButton: props.activeFilter,
      };
   }

   handleNameChange = (name) => {
      this.setState({ name });
   };

   handleClick = (filter) => {
      this.props.handleFilters(filter);
      this.setState({ selectedButton: filter });
   };

   buttonIsSelected = (filter) => {
      return this.state.selectedButton === filter
         ? "filters__item is-selected"
         : "filters__item";
   };

   render() {
      const { handleSearchName } = this.props;

      return (
         <div data-testid="filters" className="container">
            <section className="filters">
               <div className="filters__search">
                  <input
                     type="text"
                     className="filters__search__input"
                     placeholder="Pesquisar"
                     value={this.state.name}
                     onChange={(event) =>
                        this.handleNameChange(
                           event.target.value,
                           handleSearchName(event.target.value)
                        )
                     }
                  />

                  <button
                     className={"filters__search__icon"}
                     onClick={() => handleSearchName(this.state.name)}
                  >
                     <i className="fa fa-search" />
                  </button>
               </div>

               <Button
                  onClick={() => this.handleClick("name")}
                  className={this.buttonIsSelected("name")}
                  labelFilter="Nome"
               />

               <Button
                  onClick={() => this.handleClick("country")}
                  className={this.buttonIsSelected("country")}
                  labelFilter="País"
               />

               <Button
                  onClick={() => this.handleClick("company")}
                  className={this.buttonIsSelected("company")}
                  labelFilter="Empresa"
               />

               <Button
                  onClick={() => this.handleClick("department")}
                  className={this.buttonIsSelected("department")}
                  labelFilter="Departamento"
               />

               <Button
                  onClick={() => this.handleClick("admissionDate")}
                  className={this.buttonIsSelected("admissionDate")}
                  labelFilter="Data de admissão"
               />

               {/*}
               <button
                  className={this.buttonIsSelected("admissionDate")}
                  onClick={() => this.handleClick("admissionDate")}
               >
                  Data de admissão <i className="fas fa-sort-down" />
               </button>
               {*/}
            </section>
         </div>
      );
   }
}

export default Filters;
