export const auth = async (url, authModel) =>{
    let data;
      try {
        data = await fetch(url, {
          method: "POST",
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(authModel),
        });
      } catch (error) {
        console.error("Fetch error:", error);
        data = { isRegistered: false, userId: null, token: null, roles: [] };
      }

      return await data.json();
}

export const getProducts = async (url) => {
    const token = localStorage.getItem('jwtToken');
    console.log("token:" + token);
    return await fetch(url, {
        method: 'POST',
        headers:  { 
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    })
}