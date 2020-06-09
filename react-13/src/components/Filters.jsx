import React, { useState } from "react";
import "./Filters.scss";

function Filters() {
   const [search, setSearch] = useState("");

   const handleChange = (event) => {
      setSearch(event.target.value);
      console.log(search);
   };

   return (
      <div className="container" data-testid="filters">
         <section className="filters">
            <div className="filters__search">
               <input
                  type="text"
                  className="filters__search__input"
                  placeholder="Pesquisar"
                  value={search}
                  onChange={(event) => handleChange(event)}
               />

               <button className="filters__search__icon">
                  <i className="fa fa-search" />
               </button>
            </div>

            <button className="filters__item is-selected">
               Nome <i className="fas fa-sort-down" />
            </button>

            <button className="filters__item">
               País <i className="fas fa-sort-down" />
            </button>

            <button className="filters__item">
               Empresa <i className="fas fa-sort-down" />
            </button>

            <button className="filters__item">
               Departamento <i className="fas fa-sort-down" />
            </button>

            <button className="filters__item">
               Data de admissão <i className="fas fa-sort-down" />
            </button>
         </section>
      </div>
   );
}

export default Filters;
