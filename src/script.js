const listing_price = document.getElementById("listing_price");
const target_price = document.getElementById("target_price");
const desired_yield = document.getElementById("desired_yield");
const converted_rent = document.getElementById("converted_rent");
const duration = document.getElementById("duration");


console.log(listing_price, target_price, desired_yield, converted_rent);



// target_price = listing_price * (1 - discount_vs_asking_price)

// total_monthly_rent = rent + converted_rent

// where

// rent = target_price / 12 * desired_yield

// and

// converted_rent = target_price / 12 * desired_yield * converted_rent_rate

// future_buy_back_price = target_price - (converted_rent * duration * 12)
