import React from "react"
import {
  InstantSearch,
  SearchBox,
  connectHits,
  RatingMenu,
  Configure,
  RefinementList,
  Stats,
} from "react-instantsearch-dom"
import { usePosition } from "use-position"
import algoliasearch from "algoliasearch/lite"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "./index.css"
import Hit from "../components/Hit"

// THIS IS A READ KEY ALL IS GOOD
const client = algoliasearch("AATBKIBCI1", "a62499d32fa16a6db811847d290bf5ca")

const Hits = ({ hits }) => (
  <div
    style={{
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gridGap: 20,
    }}
  >
    {hits.map(hit => (
      <Hit hit={hit} />
    ))}
  </div>
)
const IndexPage = () => {
  const CustomHits = connectHits(Hits)
  const { latitude, longitude } = usePosition()
  return (
    <Layout>
      <SEO title="Home" />
      <InstantSearch searchClient={client} indexName="shops">
        <SearchBox />
        {latitude && longitude ? (
          <Configure
            aroundLatLng={`${latitude}, ${longitude}`}
            aroundLatLngViaIP={!latitude ? true : false}
            getRankingInfo={true}
          />
        ) : (
          <Configure aroundLatLngViaIP={true} getRankingInfo={true}></Configure>
        )}
        <div className="content">
          <div className="sidebar">
            <h3>Rating</h3>
            <RatingMenu attribute="rating" min={7} max={9} />
            <h3>Price Level</h3>
            <RefinementList attribute="price.tier" />
            <h3>Groups</h3>
            <RefinementList attribute="attributes.groups.name" operator="and" />
          </div>
          <main>
            <Stats
              translations={{
                stats(nbHits) {
                  return `${nbHits} results`
                },
              }}
            />
            <CustomHits />
          </main>
        </div>
      </InstantSearch>
    </Layout>
  )
}

export default IndexPage
