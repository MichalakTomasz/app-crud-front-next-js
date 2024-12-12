const appJson = 'application/json';

export const auth = async (url, authInput) =>{
    let data;
      try {
        data = await fetch(url, {
          method: "POST",
          headers: { 'Content-Type': appJson },
          body: JSON.stringify(authInput),
        });
      } catch (error) {
        console.error("Fetch error:", error);
        data = { isRegistered: false, userId: null, token: null, roles: [] };
      }

      return await data.json();
}

export const getProducts = async (url) => {
    const userData = JSON.parse(localStorage.getItem('userData'));
    const data = await fetch(url, {
        method: 'GET',
        headers:  { 
          'Content-Type': appJson,
          'Authorization': `Bearer ${userData?.token}`
        }
    });
    return await data.json();
}

export const getProduct = async (url, id) => {
  const userData = JSON.parse(localStorage.getItem('userData'));
  const data = await fetch(url + '/' + id, {
    method: 'GET',
    headers: { 
      'Content-Type': appJson,
      'Authorization': `Bearer ${userData?.token}`
    }
  });

  return await data.json();
}

export const addProduct = async (url, product) => {
  const userData = JSON.parse(localStorage.getItem('userData'));
  const data = await fetch(url, {
    method: 'POST',
    headers:{
      'Content-Type': appJson,
      'Authorization': `Bearer ${userdata?.token}`
    },
    body: product.json()
  });

  return await data;
}