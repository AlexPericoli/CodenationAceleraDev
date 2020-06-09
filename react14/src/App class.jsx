import React from "react";

import Topbar from "./components/Topbar";
import Filters from "./components/Filters";
import Contacts from "./components/Contacts";

import "./App.scss";

class App extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         contacts: null,
         filteredContacts: null,
         sortAscending: true,
         activeFilter: "name",
      };
   }

   componentDidMount() {
      const url = "https://5e82ac6c78337f00160ae496.mockapi.io/api/v1/contacts";
      fetch(url)
         .then((response) => response.json())
         .then((result) => {
            this.setState({ contacts: result, filteredContacts: result });
            this.handleFilters(this.state.activeFilter);
         })
         .catch((err) => {
            console.error("Failed retrieving information", err);
         });
   }

   handleSearchName = (textSearch) => {
      let filtered = this.state.contacts.filter((contact) => {
         let filter = new RegExp(`${textSearch}`, "i");
         return contact.name.match(filter);
      });
      this.setState({ filteredContacts: filtered });
   };

   handleFilters = (att) => {
      const { sortAscending } = this.state;
      this.setState({ sortAscending: !sortAscending });

      let filteredContacts = this.state.filteredContacts.sort((a, b) => {
         // Ordem crescente
         if (sortAscending) return a[att] < b[att] ? -1 : 1;
         // Order decrescente
         return a[att] < b[att] ? 1 : -1;
      });
      this.setState({ filteredContacts });
   };

   render() {
      return (
         <div data-testid="app" className="app">
            <Topbar />
            <Filters
               handleFilters={this.handleFilters}
               handleSearchName={this.handleSearchName}
               sortAscending={this.state.sortAscending}
               activeFilter={this.state.activeFilter}
            />
            <Contacts data={this.state.filteredContacts} />
         </div>
      );
   }
}

export default App;
