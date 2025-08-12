import { useState } from "react";

export default function AvatarManager() {
  const [name, setName] = useState("");
  const [avatars, setAvatars] = useState([]);

  const getInitials = (fullName) =>
    fullName
      .split(" ")
      .map((n) => n[0]?.toUpperCase())
      .join("");

  const randomColor = () => {
    const colors = ["#ff4757", "#1e90ff", "#2ed573", "#ffa502", "#3742fa", "#ff6348"];
    return colors[Math.floor(Math.random() * colors.length)];
  };

  const addAvatar = () => {
    if (!name.trim()) return;
    setAvatars([...avatars, { name, color: randomColor() }]);
    setName("");
  };

  const removeAvatar = (index) => {
    setAvatars(avatars.filter((_, i) => i !== index));
  };

  return (
    <div className="avatar-container">
      <h1>User Avatar Generator</h1>

      <div className="input-section">
        <input
          type="text"
          placeholder="Enter name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button onClick={addAvatar}>Add Avatar</button>
      </div>

      <div className="avatar-list">
        {avatars.map((avatar, index) => (
          <div key={index} className="avatar-card">
            <div
              className="avatar-circle"
              style={{ backgroundColor: avatar.color }}
            >
              {getInitials(avatar.name)}
            </div>
            <p>{avatar.name}</p>
            <button
              className="remove-btn"
              onClick={() => removeAvatar(index)}
            >
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
