function Contacts({ details }) {
  const phoneHref = details.phone.replace(/[^+\d]/g, '')

  return (
    <section id="contacts">
      <h2>Контакты</h2>
      <address>
        <p>Телефон: <a href={`tel:${phoneHref}`}>{details.phone}</a></p>
        <p>Почта: <a href={`mailto:${details.email}`}>{details.email}</a></p>
        <p>Адрес: {details.address}</p>
        <p>Время работы: {details.hours}</p>
        {details.telegram && <p>Telegram: <a href={details.telegram} target="_blank" rel="noopener noreferrer">Написать</a></p>}
      </address>
    </section>
  )
}

export default Contacts
