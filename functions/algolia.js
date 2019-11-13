require("dotenv").config()
const algoliasearch = require("algoliasearch")
const axios = require("axios")
const omit = require("lodash/omit")

const {
  ALGOLIA_INDEX,
  ALGOLIA_KEY,
  FOURSQUARE_CLIENT_ID,
  FOURSQUARE_CLIENT_SECRET,
} = process.env

const client = algoliasearch(ALGOLIA_INDEX, ALGOLIA_KEY)

const index = client.initIndex("shops")
exports.handler = async function(event, context, callback) {
  const id = event.queryStringParameters.id

  if (!id) {
    return callback(null, {
      statusCode: 200,
      body: "You need an id",
    })
  }

  try {
    const data = await axios(
      `https://api.foursquare.com/v2/venues/${id}?client_id=${FOURSQUARE_CLIENT_ID}&client_secret=${FOURSQUARE_CLIENT_SECRET}&v=20191110`
    )
    const venue = data.data.response.venue
    const shop = {
      ...omit(venue, [
        "listed",
        "pageUpdates",
        "likes",
        "page",
        "hereNow",
        "beenHere",
        "bestPhoto",
      ]),
      photo: `${venue.bestPhoto.prefix}${venue.bestPhoto.width}${venue.bestPhoto.height}${venue.bestPhoto.suffix}`,
      _geoloc: {
        lat: venue.location.lat,
        lng: venue.location.lng,
      },
    }

    index.addObjects([shop], (err, content) => {
      callback(null, {
        statusCode: 200,
        body: JSON.stringify(content),
      })
    })
  } catch (e) {
    callback(null, {
      statusCode: 500,
      body: JSON.stringify(e),
    })
  }
}
