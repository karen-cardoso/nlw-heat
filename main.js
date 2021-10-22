
const linksSocialMedia = {
  github: 'karen-cardoso',
  youtube: 'channel/UCvxKDqOGP4iEwL4HolrUhdg',
  instagram: 'kah_card',
  facebook: 'karen.cardoso86',
  twitter: 'kah_card'
}

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://www.${social}.com/${linksSocialMedia[social]}`
  }
}

changeSocialMediaLinks()

function getGithubProfileInfos(){
  const url = `https://api.github.com/users/${linksSocialMedia.github}`

  fetch(url)
  .then(response => response.json())
  .then(data => {
    userName.textContent = data.name
    userBio.textContent = data.bio
    userLink.href = data.html_url
    userAvatar.src = data.avatar_url
    userLogin.textContent = data.login
    
  })
}

getGithubProfileInfos()