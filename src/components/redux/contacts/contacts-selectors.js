


export const getAllContacts =store=>store.contact

export const getAllManagers = store => {
    const employees = getAllContacts(store);
    
    return employees.filter(item => {console.log(item)});}
        
