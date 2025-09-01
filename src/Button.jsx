import "./Button.css";

export default function Button({ appearance = "primary", text = "Click me" }) {
  return (
    <div className="container">
      <button
        className={`btn ${
          appearance === "secondary" ? "btn-secondary" : "btn-primary"
        }`}
        onClick={() => alert("Success!")}
      >
        {text}
      </button>
    </div>
  );
}
