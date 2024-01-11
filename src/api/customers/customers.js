const backendRoute = import.meta.env.VITE_BACKEND_CUSTOMERS

const getAllCustomers = async (pag) => {
    const url = `${backendRoute}/getAll/${pag}`;
    const response = await fetch(url,{
        method:'GET',
        headers:{
            'Content-Type': 'Application/json',
        },
    })
    return await response.json();
}

const getCustomer = async (nameOrDni) => {
    const url = `${backendRoute}/search/${nameOrDni}`;
    const response = await fetch(url,{
        method:'GET',
        headers:{
            'Content-Type': 'Application/json',
        },
    })
    return await response.json();
   
}

export{
    getAllCustomers,
    getCustomer
}