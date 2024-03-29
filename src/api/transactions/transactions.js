const backendRoute = import.meta.env.VITE_BACKEND_TRANSACTIONS

const getAllByCustomerId = async (idCustomer,page) => {
    const url = `${backendRoute}/getAllByCustomerId/${idCustomer}/${page}`;
    const response = await fetch(url,{
        method:'GET',
        headers:{
            'Content-Type': 'Application/json',
        },
    })
    return await response.json();
   
}

const getAllByCategory = async (category,page) => {
    const url = `${backendRoute}/getAllByCategory/${category}/${page}`;
    const response = await fetch(url,{
        method:'GET',
        headers:{
            'Content-Type': 'Application/json',
        },
    })
    return await response.json();
   
}

export {
    getAllByCustomerId,
    getAllByCategory
}