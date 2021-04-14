let queryparams =location.hash.substr(1).split("&");
let accesstoken =queryparams[0].split("=")[1];
let playlist_url="https://api.spotify.com/v1/me/playlists"
async function get_playlist_data(){
let playlists=await fetch(playlist_url, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${accesstoken}`
    }
  })
  return playlists_data=await playlists.json();
}
  get_playlist_data().then(playlists =>{playlists.items.forEach(element => {

    let div= document.createElement("div");
    let img_tag= document.createElement("img");
    let playlist_name_tag= document.createElement("p");
    let parent=document.getElementById("playlist")
    let imageURL=element["images"][0]["url"]
    let playlist_name=document.createTextNode(element.name)
    playlist_name_tag.appendChild(playlist_name)
    img_tag.setAttribute("src",imageURL)
  
    div.appendChild(img_tag)
    div.appendChild(playlist_name_tag)
    parent.appendChild(div)
  })});
