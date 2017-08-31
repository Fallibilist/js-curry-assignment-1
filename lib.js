'use strict'

const listing =
  (name, price) => ({
    name,
    price
  })

const cart =
  (customer, ...items) => ({
    customer,
    items
  })

/**
 * @name listedPrice
 * @param listings the item/price pairs
 * @param name the name of the item we are trying to find the price of
 * @returns the price of the item or 0 is the item is not in the listing
 */
const listedPrice =
  listing =>
    name => {
      const matchedItem = listing.find(currentObject => currentObject.name === name)
      return (matchedItem !== undefined) ? matchedItem.price : 0
    }


/**
 * @name calculateTotals
 * @param listings the item/price pairs
 * @param carts an array of cart objects which contain the customer name and an array of items
 * @returns an array of objects with customers and totals based on the listings
 */
const calculateTotals =
  listings =>
    carts => 
      carts.map(
        cart => ({
          customer : cart.customer,
          total : cart.items.reduce(((cartTotal, item) => cartTotal += listedPrice(listings)(item)),0)
        })
      )
    

module.exports = {
  listing,
  cart,
  calculateTotals
}
