const loadBuddy = () => {
    fetch('https://randomuser.me/api/?results=5')
    .then(res => res.json())
    .then (data => displayBuddyes(data));
}
// loadQuotes();
const displayBuddyes = data =>{
    console.log(data);
    //result ar vitor array tai- data.results
    const buddies = data.results;
    const buddiesDiv = document.getElementById('buddies');
    for(const buddy of buddies){
 console.log(buddy.name.first, buddy.name.last);
 const p = document.createElement('p');
 p.innerText=`Name: ${buddy.name.title} ${buddy.name.first} ${buddy.name.last} email: ${buddy.email}`;
 buddiesDiv.appendChild(p);
    }
   
}