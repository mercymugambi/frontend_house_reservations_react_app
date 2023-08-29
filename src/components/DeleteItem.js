import React, { useState } from "react";

function DeleteItem() {
  const [reservations, setReservations] = useState([
    { id: 1, house: "House A", removed: false },
    { id: 2, house: "House B", removed: false },
    { id: 3, house: "House C", removed: false },
  ]);

  const handleDelete = (reservationId) => {
    const updatedReservations = reservations.map((reservation) =>
      reservation.id === reservationId
        ? { ...reservation, removed: true }
        : reservation
    );
    setReservations(updatedReservations);
  };

  const activeReservations = reservations.filter(
    (reservation) => !reservation.removed
  );
  const deletedReservations = reservations.filter(
    (reservation) => reservation.removed
  );

  return (
    <div>
      <h1>Active Reservations</h1>
      <ul>
        {activeReservations.map((reservation) => (
          <li key={reservation.id}>
            {reservation.house}
            <button onClick={() => handleDelete(reservation.id)}>Delete</button>
          </li>
        ))}
      </ul>
      <hr />
      <h1>Deleted Reservations</h1>
      <ul>
        {deletedReservations.map((reservation) => (
          <li key={reservation.id}>{reservation.house} (Removed)</li>
        ))}
      </ul>
    </div>
  );
}

export default DeleteItem;
