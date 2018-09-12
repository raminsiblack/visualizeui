const url = 'https://api.spotify.com/v1/search?q=tania%20bowra&type=artist';


const getToken = async () => {
    const authBaseUri = 'http://localhost:8000';
    const res = await fetch(`${authBaseUri}/auth`);
    return res.json();
}

const fetchMusic = (token) => {
    console.log(`Bearer ${token}`);
    fetch(url, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
    .then(data => console.log(data));
    
} 
getToken().then(token => {
    fetchMusic(token.access_token);
})







