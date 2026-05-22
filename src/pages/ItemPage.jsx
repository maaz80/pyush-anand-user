import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getLocations } from '../utils/locations'
import { getServices } from '../utils/service'
import Location from './Location'
import Service from './Service'
import NotFound from './404NotFound'
import { matchesRouteSlug } from '../utils/slug'

const ItemPage = () => {
     const { itemSlug } = useParams()
     const [pageType, setPageType] = useState(null)

     useEffect(() => {
          const resolvePage = async () => {
               if (!itemSlug) {
                    setPageType('notfound')
                    return
               }

               const [locations, services] = await Promise.all([
                    getLocations(),
                    getServices(),
               ])

               const isLocation = locations.some((location) =>
                    location.items?.some((item) => matchesRouteSlug(item, itemSlug))
               )

               if (isLocation) {
                    setPageType('location')
                    return
               }

               const isService = services.some((service) =>
                    service.items?.some((item) => matchesRouteSlug(item, itemSlug))
               )

               setPageType(isService ? 'service' : 'notfound')
          }

          resolvePage()
     }, [itemSlug])

     if (pageType === null) {
          return null
     }

     if (pageType === 'location') {
          return <Location />
     }

     if (pageType === 'service') {
          return <Service />
     }

     return <NotFound />
}

export default ItemPage
