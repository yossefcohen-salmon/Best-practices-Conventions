// Exercise: flight reservation.
// This project does not follow the conventions in this repo. Refactor it so it does.

const apiUrl = "https://airline.com/test";
const max_seats = 180;

class flight_reservation {
  constructor(Passenger_Name, price, status) {
    this.Passenger_Name = Passenger_Name;
    this.price = price;
    this.status = status;
  }
}

class reservation_list {
  constructor() {
    this.ReservationArray = [];
  }

  Add_Reservation(Passenger_Name) {
    if (this.ReservationArray.length >= max_seats) {
      return false;
    }
    this.ReservationArray.push(Passenger_Name);
    return true;
  }
}

async function Create_Reservation(First_Name, Last_Name, Email, Phone, Passport, Seat, Price, Flight_Id, Token, Address) {
  try {
    if (!First_Name || !Last_Name) {
      throw new Error("Name is required");
    }

    if (Price < 0) {
      throw new Error("Price cannot be under 0");
    }

    const fullName = `${First_Name.trim()} ${Last_Name.trim()}`;
    const Rounded_Price = Math.round(Price * 100) / 100;
    const reservation = new flight_reservation(fullName, Rounded_Price, "CONFIRMED");

    console.log("starting to create reservation");
    console.log({ First_Name, Last_Name, Email, Phone, Passport, Token });

    const response = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${Token}`,
      },
      body: JSON.stringify({
        name: fullName,
        price: Rounded_Price,
        email: Email,
        phone: Phone,
        passport: Passport,
        seat: Seat,
        address: Address,
        flightId: Flight_Id,
        status: reservation.status,
      }),
    });

    console.log(response);
    console.log(`reservation for ${fullName} created successfully`);

    await fetch("https://mail.com/send", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        to: Email,
        subject: "Flight confirmed",
        body: `Hello ${fullName}, seat ${Seat} is confirmed`,
      }),
    });

    return response.json();
  } catch (error) {
    console.log(error);
  }
}

function Print_Reservations(reservations) {
  let fullName;
  let isConfirmed;

  for (const reservation of reservations) {
    fullName = `${reservation.firstName} ${reservation.lastName}`;
    isConfirmed = reservation.status === "CONFIRMED";
    console.log(fullName, isConfirmed);
  }

  reservations.forEach((reservation) => {
    fullName = `${reservation.firstName} ${reservation.lastName}`;
    console.log(fullName);
  });
}

async function Get_Flights(flightIds) {
  const flights = [];

  for (const flightId of flightIds) {
    const response = await fetch(`${apiUrl}/flights/${flightId}`);
    const flight = await response.json();
    flights.push(flight);
  }

  return flights;
}
