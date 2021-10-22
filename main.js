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
