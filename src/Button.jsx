import "./Button.css";

export default function Button() {
  return (
    <div className="container">
      <button className="btn" onClick={() => alert("Success!")}>
        Click me
      </button>
    </div>
  );
}
