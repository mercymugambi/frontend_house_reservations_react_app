import react from 'react';

function reservationForm() {
  return (
    <div>
      <Link to="/reservation-form">
        <button>Create Reservation</button>
      </Link>

      {form_with({ model: reservation }, (form) => (
        <div>
          {reservation.errors.any() && (
          <div style={{ color: 'red' }}>
            <h2>
              {pluralize(reservation.errors.count, 'error')}
              {' '}
              prohibited this
              reservation from being saved:
            </h2>
            <ul>
              {reservation.errors.each((error) => (
                <li>{error.full_message}</li>
              ))}
            </ul>
          </div>
          )}

          <div>
            {form.label('city', { style: 'display: block' })}
            {form.text_field('city')}
          </div>

          <div>
            {form.label('reservation_date', { style: 'display: block' })}
            {form.date_field('reservation_date')}
          </div>

          <div>
            {form.label('user_id', { style: 'display: block' })}
            {form.text_field('user_id')}
          </div>

          <div>
            {form.label('house_id', { style: 'display: block' })}
            {form.text_field('house_id')}
          </div>

          <div>
            {form.submit()}
          </div>
        </div>
      ))}
    </div>
  );
}
export default reservationForm;
