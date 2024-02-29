import React from "react";

function BusinessCard(props) {
  const { name, desc, interest, socialLinks } = props;
  const { other } = props.socialLinks;
  console.log(socialLinks);
  return (
    <div style={style.card}>
      <div>
        <h1 style={style.name}>{name}</h1>
        <p style={style.desc}>{desc}</p>
      </div>
      <div style={{ margin: "-10px 0px" }}>
        <h3 style={style.interest}>Interests</h3>
        <ul style={style.ul}>
          {interest.map((item, i) => {
            return (
              <li key={i} style={style.li}>
                {item}
              </li>
            );
          })}
        </ul>
      </div>
      <div style={{ marginTop: "20px" }}>
        <a
          href={socialLinks.linkedin}
          style={style.btn}
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
        <a
          href={socialLinks.twitter}
          style={style.btn}
          target="_blank"
          rel="noopener noreferrer"
        >
          Twitter
        </a>
        {socialLinks.other && (
          <a
            href={other.url}
            style={style.btn}
            target="_blank"
            rel="noopener noreferrer"
          >
            {other.label}
          </a>
        )}
      </div>
    </div>
  );
}

const style = {
  card: {
    border: "1px solid #ddd",
    borderRadius: "8px",
    padding: "20px",
    margin: "20px",
    display: "flex",
    flexDirection: "column",
    alignItems: "start",
    maxWidth: "400px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    backgroundColor: "#f8f9fa",
  },
  name: {
    fontSize: "24px",
    fontFamily: "sans-serif",
  },
  desc: {
    fontSize: "19px",
    fontFamily: "sans-serif",
    color: "Blue",
  },
  interest: {
    fontSize: "24px",
    fontFamily: "sans-serif",
    color: "Blue",
  },
  ul: {
    listStyleType: "none",
  },
  li: {
    fontSize: "16px",
    fontFamily: "sans-serif",
    marginBottom: "10px",
  },
  btn: {
    padding: "10px 15px",
    margin: "10px",
    backgroundColor: "blue",
    color: "white",
    border: "none",
    borderRadius: "5px",
    fontFamily: "sans-serif",
    textDecoration: "none",
  },
};

export default BusinessCard;
