// Code that runs when the page finishes loading
document.addEventListener('DOMContentLoaded', async function() {
  // retrieves data from rides API endpoint
  let response = await fetch('https://kiei451.com/api/rides.json')
  let json = await response.json()

  // selects a random ride
  let ride = json[Math.floor(Math.random() * json.length)]

  // writes random ride to the JavaScript console
  console.log(ride)

  // 🔥 YOUR CODE GOES HERE 🔥
  // Write the recipe (algorithm) in the comments. Then, write the code.
  
  // Part 1
  // Parse the data given in random ride Object and present in human-readable format, ie: Noober X Passenger: Kiley Thompson - (260) 908-6886. Pickup at 1301 N State Pkwy, Chicago, IL 60624. Dropoff at 2362 N Clybourn Ave, Chicago, IL 60657.
  
  // Define ride types for purpleRequested (Noober Purple or X) amd numberOfPassengers > 3 for Noober XL
    let purpleReq = ride.purpleRequested
    let numberOfPass = ride.numberOfPassengers
    let rideType

  // Create ride type conditional based on # of passengers, purple,ect. and store in memory
    if (purpleReq == true) {
      rideType = `Noober Purple`
    } else if (numberOfPass > 3) {
      rideType = `Noober XL`
    } else {
      rideType = `Noober X`
    }

  // Define passenger detail objects (First, Last, Phone #)
  let passName = `${ride.passengerDetails.first} ${ride.passengerDetails.last}`
  let passPhone = `${ride.passengerDetails.phoneNumber}`

  // Define pickup & dropoff objects (Address, City, State Zip)
  let pickup = `${ride.pickupLocation.address}, ${ride.pickupLocation.city}, ${ride.pickupLocation.state} ${ride.pickupLocation.zip}`
  let dropoff = `${ride.dropoffLocation.address}, ${ride.dropoffLocation.city}, ${ride.dropoffLocation.state} ${ride.dropoffLocation.zip}`

  
  // Write the passenger info to the console
  console.log(`${rideType} Passenger: ${passName} - ${passPhone}. Pickup at ${pickup}. Dropoff at ${dropoff}.`)

  // 🔥 YOUR CODE ENDS HERE 🔥
})
