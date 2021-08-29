const loadBuddies = () => {
    fetch('https://randomuser.me/api/?results=5')
        .then(res => res.json())
        .then(data => displayBuddies(data))
}
loadBuddies();

const displayBuddies = user => {
    const buddies = user.results;
    const buddyContainer = document.getElementById('buddies')
    for (const buddy of buddies) {
        const p = document.createElement('p')
        p.innerText = `Name: ${buddy.name.title} ${buddy.name.first} ${buddy.name.last} email: ${buddy.email}`
        buddyContainer.appendChild(p)
    }
}