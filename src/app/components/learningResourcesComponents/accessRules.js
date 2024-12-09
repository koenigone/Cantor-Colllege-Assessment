const AccessRules = () => {
  const rules = [
    "The use of Library and Resource Centre facilities is normally limited to use for the educational and other purposes of the College.",
    "All individuals wishing to become members of the Library and Resource Centre must comply with the registration procedures. These include an undertaking to abide by Library and Resource Centre rules.",
    "Individuals or organisations who are not eligible for membership but have good reason to use the Library and Resource Centre may be admitted, by arrangement, for purposes of study only. Procedures for seeking admission are outlined in the External Services leaflet. Non-members must sign the Visitors' Book on each visit and may be required to produce written identification.",
    "ID cards issued by the College are not transferable from one person to another. The person named on each card is responsible for all items borrowed on it and is liable for the cost of replacement of the card or items borrowed on it in the event of loss or damage.",
    "Users of the Library and Resource Centre must show ID cards or other identification when requested to do so by College staff.",
  ];

  return (
    <section id="accessRules">
      <div>
        <h2>Access Rules</h2>
      </div>

      <div className="list-container">
        <ul>
          {rules.map((rule, index) => (
            <li key={index}>{rule}</li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default AccessRules;
