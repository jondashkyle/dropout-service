<h1 align="center">dropout-service</h1>

An easily self-deployable microservice for nabbing data from [`dropout`](https://github.com/jondashkyle/dropout) when you’re client side. [Fork me on Glitch](https://glitch.com/edit/#!/melodic-comfort?path=index.js:1:0)!

## usage

`git clone https://github.com/jondashkyle/dropout-service.git`

[`dropout-beaker`](https://github.com/jondashkyle/dropout-beaker) uses [Glitch](https://glitch.com/edit/#!/melodic-comfort?path=index.js:1:0) to host an instance of this, which you can fork to easily spin up your own instance. Since you can only run client side within Beaker, we fetch the result from there and write the received data to JSON within the site’s Dat archive.

## features

- Basically nothing 🎉

`POST` at `/` with a `url` in the form data to receive data which looks something like this:

```
{
  "basename": "171029-anticapitalist-human-scale-software-",
  "content": "<main><p>Twitter launches features no one wants. Parse shuts down. Websites track us to an astonishing degree. Corporations close down open systems. They turn over our data to the government.</p>\n<p>Software and services that are supposed to make life better are becoming unreliable and untrustworthy. It is increasingly clear that our interests, as software-using humans, are diverging from the interests of software companies.</p></main>",
  "title": "Anti-capitalist human scale software",
  "date": 1509245145468,
  "url": "https://tilde.tinyserver.club/~jkriss/writing/human-scale",
  "source": "https://tilde.tinyserver.club/~jkriss/writing/human-scale",
  "dateformat": "mmmm dS",
  "read": false
}
```

## todo

- [ ] Capture an image/screenshot of the URL
- [ ] Scrape and return all image assets as blobs