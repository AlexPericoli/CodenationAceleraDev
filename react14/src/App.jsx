import React from "react";

import Topbar from "./components/Topbar";
import Filters from "./components/Filters";
import Contacts from "./components/Contacts";

import "./App.scss";

function App() {
   const [contacts, setContacts] = React.useState([]);
   const [filteredContacts, setFilteredContacts] = React.useState([]);
   const [sortAscending, setSortAscending] = React.useState(true);
   const [activeFilter, setActiveFilter] = React.useState("name");

   React.useEffect(() => {
      async function buscarContatos() {
         const tempContacts = await fetchData();
         setContacts(tempContacts);
         setFilteredContacts(tempContacts);
      }

      async function ordenarContatos() {
         handleFilters(activeFilter);
      }

      const loadData = () => {
         buscarContatos();
         //ordenarContatos();
      };
      loadData();
   }, []);

   async function fetchData() {
      const url = "https://5e82ac6c78337f00160ae496.mockapi.io/api/v1/contacts";
      const result = await fetch(url);
      const data = await result.json();

      // Ordena por nome da primeira vez que carrega os contatos
      let sortContacts = data.sort((a, b) => {
         // Ordem crescente
         return a[activeFilter] < b[activeFilter] ? -1 : 1;
      });
      return sortContacts;
   }

   const handleSearchName = (textSearch) => {
      let filtered = contacts.filter((contact) => {
         let filter = new RegExp(`${textSearch}`, "i");
         return contact.name.match(filter);
      });
      setFilteredContacts(filtered);
   };

   const handleFilters = (att) => {
      setSortAscending(!sortAscending);

      let sortContacts = filteredContacts.sort((a, b) => {
         // Ordem crescente
         if (sortAscending) return a[att] < b[att] ? -1 : 1;
         // Order decrescente
         return a[att] < b[att] ? 1 : -1;
      });
      setFilteredContacts(sortContacts);
   };

   return (
      <div data-testid="app" className="app">
         <Topbar />
         <Filters
            handleFilters={handleFilters}
            handleSearchName={handleSearchName}
            sortAscending={sortAscending}
            activeFilter={activeFilter}
         />
         <Contacts data={filteredContacts} />
      </div>
   );
}

export default App;
