import React, { useState } from "react";

const Form = ({ data }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [leadsInMonth, setLeadsInMonth] = useState("");
  const [totalLeadsCRM, setTotalLeadsCRM] = useState("");
  const [CRM, setCRM] = useState();
  const [agents, setAgents] = useState();
  const [leadSources, setLeadSources] = useState("");
  const [hear, setHear] = useState();

  function XYZ(e) {
    e.preventDefault();
    console.log(
      name,
      email,
      phone,
      leadsInMonth,
      totalLeadsCRM,
      CRM,
      agents,
      leadSources,
      hear
    );
  }

  const funcLead = (checked, value) => {
    setLeadSources(value);
  };

  return (
    <div style={{ width: "500px" }}>
      <h1>Get Started with SquadVoice</h1>
      <div>Plan Selected: {data} </div>
      <div>
        <h2> Name </h2>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <div>
          <h2>Email</h2>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <h2>Phone No.</h2>
          <input
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
      </div>
      <div>
        <div>
          <h2>Number of Leads you generate in a month</h2>
          <input
            type="number"
            value={leadsInMonth}
            onChange={(e) => setLeadsInMonth(e.target.value)}
          />
        </div>
        <div>
          <h2>Total leads in your CRM</h2>
          <input
            type="number"
            value={totalLeadsCRM}
            onChange={(e) => setTotalLeadsCRM(e.target.value)}
          />
        </div>
      </div>
      <div>
        <div>
          <h2>Which CRM do you use</h2>
          <input
            type="number"
            value={CRM}
            onChange={(e) => setCRM(e.target.value)}
          />
        </div>
        <div>
          <h2>No. of Agents</h2>
          <input
            type="number"
            value={agents}
            onChange={(e) => setAgents(e.target.value)}
          />
        </div>
      </div>
      <div>
        <h2>What are your biggest lead sources?</h2>
        <div>
          <input
            type="checkbox"
            checked={leadSources === "Zillow"}
            onChange={(e) => funcLead(e.target.checked, "Zillow")}
          />{" "}
          Zillow
          <input
            type="checkbox"
            checked={leadSources === "Realtor"}
            onChange={(e) => funcLead(e.target.checked, "Realtor")}
          />{" "}
          Realtor
          <input
            type="checkbox"
            checked={leadSources === "Ylopo"}
            onChange={(e) => funcLead(e.target.checked, "Ylopo")}
          />{" "}
          Ylopo
          <input
            type="checkbox"
            checked={leadSources === "Others"}
            onChange={(e) => funcLead(e.target.checked, "Others")}
          />{" "}
          Others
        </div>
      </div>
      <div>
        <h2>Where did you hear about us?</h2>
        <div>
          <input
            type="checkbox"
            checked={hear === "Google"}
            onChange={(e) => setHear("Google")}
          />{" "}
          Google
          <input
            type="checkbox"
            checked={hear === "Facebook"}
            onChange={(e) => setHear("Facebook")}
          />{" "}
          Facebook
          <input
            type="checkbox"
            checked={hear === "Email"}
            onChange={(e) => setHear("Email")}
          />{" "}
          Email
          <input
            type="checkbox"
            checked={hear === "Friends"}
            onChange={(e) => setHear("Friends")}
          />{" "}
          Friends
          <input
            type="checkbox"
            checked={hear === "Real Closures"}
            onChange={(e) => setHear("Real Closures")}
          />{" "}
          Real Closures
        </div>
      </div>
      <button onClick={XYZ}>Submit</button>
    </div>
  );
};

export default Form;
