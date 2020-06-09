export function orderByName(contacts) {
   return contacts.sort((a, b) =>
      a.name > b.name ? 1 : a.name === b.name ? (a.size > b.size ? 1 : -1) : -1
   );
}

export function orderByCountry(contacts) {
   return contacts.sort((a, b) =>
      a.country > b.country
         ? 1
         : a.country === b.country
         ? a.size > b.size
            ? 1
            : -1
         : -1
   );
}

export function orderByCompany(contacts) {
   return contacts.sort((a, b) =>
      a.company > b.company
         ? 1
         : a.company === b.company
         ? a.size > b.size
            ? 1
            : -1
         : -1
   );
}

export function orderByDepartment(contacts) {
   return contacts.sort((a, b) =>
      a.department > b.department
         ? 1
         : a.department === b.department
         ? a.size > b.size
            ? 1
            : -1
         : -1
   );
}

export function orderByDate(contacts) {
   return contacts.sort((a, b) =>
      a.admissionDate > b.admissionDate
         ? 1
         : a.admissionDate < b.admissionDate
         ? -1
         : 0
   );
}

export function filterByName(contacts, letters) {
   return contacts.filter((contact) => contact.name.includes(letters));
}
