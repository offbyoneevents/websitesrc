module.exports = {
  meta: {
    title: "Memphis Python User Group",
    description: "Welcome to the Memphis Python User Group",
    lang: "en",
    siteUrl: "https://example.com/",
  },
  feed: { // used in feed.xml.njk
    subtitle: "Lorem ipsum dolor sit amet consecuteor",
    filename: "atom.xml",
    path: "/atom.xml",
    id: "https://example.com/",
    authorName: "John Doe",
    authorEmail: "johndoe@example.com"
  },
  hero: { // used in hero section of main page ie. index.html.njk
    title: "Memphis Python User Group",
    description: "Welcome to the Memphis Python User Group"
  }
}