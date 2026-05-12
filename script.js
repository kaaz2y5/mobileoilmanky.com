const bookingForm = document.getElementById('bookingForm');

    if (bookingForm) {
      bookingForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const data = new FormData(bookingForm);
        const detail = function (name) {
          return (data.get(name) || '').toString().trim();
        };

        const message = [
          'Hi, I would like to book a mobile oil change.',
          'Name: ' + detail('name'),
          'Phone: ' + detail('phone'),
          'Vehicle: ' + detail('vehicle'),
          'Engine size: ' + (detail('engine') || 'Not sure'),
          'Package: ' + detail('package'),
          'Preferred day/time: ' + detail('time'),
          'Service address/area: ' + detail('location'),
          'Notes: ' + (detail('notes') || 'None')
        ].join('\n');

        window.location.href = 'sms:6066619949?body=' + encodeURIComponent(message);
      });
    }

