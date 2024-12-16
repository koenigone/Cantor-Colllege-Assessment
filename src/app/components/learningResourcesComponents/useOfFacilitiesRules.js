const UseOfFacilitiesRules = () => {
  const rules = [
    {
      key: 1,
      text: "The Library and Resource Centre is not responsible for loss of, or damage to, personal belongings of its users and visitors. Users must take reasonable precautions against theft and not leave belongings unattended.",
    },
    {
      key: 2,
      text: "All users must conduct themselves quietly throughout the Library and Resource Centre. Conversation must be kept to a minimum, and no conversation is permitted in designated 'Silent' areas.",
    },
    {
      key: 3,
      text: "Personal stereos may not be used in the Library and Resource Centre.",
    },
    {
      key: 4,
      text: "Mobile phones must be turned off in all Library and Resource Centre study areas. Their use is permitted in the enclosed stairwells of the Main Site building.",
    },
    {
      key: 5,
      text: "Users must not use mains electrical supplies for their equipment unless it has been tested and confirmed to meet Health & Safety standards. Written evidence of compliance is required.",
    },
    {
      key: 6,
      text: "Eating and drinking are not permitted in any public areas of the Library and Resource Centre.",
    },
    {
      key: 7,
      text: "Action will be taken against any person misusing furniture, facilities, or materials. Such persons may be required to pay for damage or loss.",
    },
  ];

  return (
    <section id="facilitiesUse">
      <div>
        <h2>Use of Facilities</h2>
      </div>
      
      <div className="list-container">
        <ul className="rules-list">
          {rules.map((rule) => (
            <li key={rule.key}>{rule.text}</li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default UseOfFacilitiesRules;
