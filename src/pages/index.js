import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = ({ data: { shops } }) => {
  return (
    <Layout>
      <SEO title="Home" />
      <div className="flex mb-4 flex-wrap">
        {shops.edges.map(({ node: { response: { venue } } }) => (
          <div key={venue.id} className="w-1/3 mb-20">
            <div class="max-w-sm rounded overflow-hidden shadow-lg">
              {venue.photos.groups.map(photo =>
                photo.items.map(item => (
                  <div class="h-64 w-full overflow-hidden relative">
                    <img
                      style={{
                        top: "50%",
                        left: "50%",
                        transform: "translateX(-50%) translateY(-50%)",
                      }}
                      className="absolute"
                      alt={venue.name}
                      src={`${item.prefix}${item.width}x${item.height}${item.suffix}`}
                    />
                  </div>
                ))
              )}
              <div class="px-6 py-4">
                <div class="font-bold text-xl mb-2">{venue.name}</div>
                <p class="text-gray-700 text-base flex items-center">
                  <svg
                    height="40"
                    width="40"
                    fill="#ffffff"
                    version="1.1"
                    x="0px"
                    y="0px"
                    viewBox="0 0 64 64"
                    enable-background="new 0 0 64 64"
                  >
                    <g>
                      <path
                        fill={venue.rating > 2.5 ? "#F6E05E" : "#4a5568"}
                        d="M44.92,28.943l-7.58-1.031c-0.406-0.055-0.757-0.309-0.937-0.677l-3.445-7.061c-0.456-0.934-1.793-0.913-2.22,0.034   l-3.234,7.178c-0.168,0.372-0.51,0.637-0.913,0.705l-7.553,1.282c-0.983,0.167-1.366,1.375-0.659,2.078l5.637,5.604   c0.276,0.274,0.405,0.664,0.349,1.049l-1.18,7.992c-0.15,1.013,0.936,1.752,1.824,1.242l6.594-3.788   c0.366-0.21,0.814-0.217,1.187-0.019l6.708,3.571c0.903,0.481,1.963-0.291,1.783-1.298l-1.42-7.957   c-0.068-0.383,0.049-0.775,0.316-1.057L45.646,31C46.331,30.275,45.909,29.078,44.92,28.943z"
                      ></path>
                      <path
                        fill={venue.rating > 8.5 ? "#F6E05E" : "#4a5568"}
                        d="M62.164,28.012c0.685-0.726,0.263-1.922-0.726-2.057l-7.58-1.031c-0.406-0.055-0.757-0.309-0.937-0.677l-3.445-7.061   c-0.456-0.934-1.793-0.913-2.22,0.034l-3.234,7.178c-0.168,0.372-0.51,0.637-0.913,0.705l-4.905,0.833l6.995,0.952   c1.232,0.168,2.254,1,2.668,2.172c0.414,1.172,0.141,2.462-0.713,3.366l-5.174,5.477l1.001,5.612l5.141-2.953   c0.366-0.21,0.814-0.217,1.187-0.019l6.708,3.571c0.903,0.481,1.963-0.291,1.783-1.298l-1.42-7.957   c-0.068-0.383,0.049-0.775,0.316-1.057L62.164,28.012z"
                      ></path>

                      <path
                        fill={venue.rating > 5 ? "#F6E05E" : "#4a5568"}
                        d="M22.251,38.225l-5.333-5.302c-0.881-0.876-1.195-2.155-0.819-3.339c0.376-1.184,1.37-2.049,2.594-2.256l7.106-1.206   l0.221-0.49l-5.197-0.707c-0.406-0.055-0.757-0.309-0.937-0.677l-3.445-7.061c-0.456-0.934-1.793-0.913-2.22,0.034l-3.234,7.178   c-0.168,0.372-0.51,0.637-0.913,0.705l-7.553,1.282c-0.983,0.167-1.366,1.375-0.659,2.078L7.5,34.067   c0.276,0.274,0.405,0.664,0.349,1.049l-1.18,7.992c-0.15,1.013,0.936,1.752,1.824,1.242l6.594-3.788   c0.366-0.21,0.814-0.217,1.187-0.019l5.225,2.781L22.251,38.225z"
                      ></path>
                    </g>
                  </svg>
                  <span className="font-bold ml-2">
                    Rating: <span className="font-normal">{venue.rating}</span>
                  </span>
                </p>
                <p class="text-gray-700 text-base flex items-center">
                  <svg
                    height="40"
                    width="40"
                    fill="#4a5568"
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                    x="0px"
                    y="0px"
                    viewBox="0 0 36 36"
                  >
                    <path d="M18,22.91c-1.08,0-1.96-0.88-1.96-1.96c0-0.55-0.45-1-1-1s-1,0.45-1,1c0,1.83,1.26,3.37,2.96,3.81v0.62c0,0.55,0.45,1,1,1  s1-0.45,1-1v-0.62c1.7-0.45,2.96-1.98,2.96-3.81c0-2.18-1.77-3.96-3.96-3.96c-1.08,0-1.96-0.88-1.96-1.96s0.88-1.96,1.96-1.96  s1.96,0.88,1.96,1.96c0,0.55,0.45,1,1,1s1-0.45,1-1c0-1.83-1.26-3.37-2.96-3.81v-0.62c0-0.55-0.45-1-1-1s-1,0.45-1,1v0.62  c-1.7,0.45-2.96,1.98-2.96,3.81c0,2.18,1.77,3.96,3.96,3.96c1.08,0,1.96,0.88,1.96,1.96S19.08,22.91,18,22.91z"></path>
                    <path d="M18,32.3c7.89,0,14.3-6.42,14.3-14.3S25.89,3.7,18,3.7C10.11,3.7,3.7,10.11,3.7,18S10.11,32.3,18,32.3z M18,5.7  c6.78,0,12.3,5.52,12.3,12.3S24.78,30.3,18,30.3S5.7,24.78,5.7,18S11.22,5.7,18,5.7z"></path>
                  </svg>
                  <span className="font-bold ml-2">
                    Price:{" "}
                    <span className="font-normal">
                      {
                        venue.attributes.groups.find(
                          attr => attr.type === "price"
                        ).summary
                      }
                    </span>
                  </span>
                </p>
              </div>
              <div class="px-6 py-4">
                {venue.categories.map(cat => (
                  <span
                    key={cat.id}
                    class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2"
                  >
                    #{cat.name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  {
    shops: allShopsJson {
      edges {
        node {
          response {
            venue {
              attributes {
                groups {
                  type
                  summary
                }
              }
              rating
              id
              name
              categories {
                id
                name
              }
              photos {
                groups {
                  items {
                    prefix
                    suffix
                    width
                    height
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`

export default IndexPage
