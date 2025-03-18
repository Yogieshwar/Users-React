import React, { useState } from 'react';
import Modal from "./Modal.jsx";

const UserCard = ({ user, handleDelete, handleUpdate }) => {
  const avatarUrl = `https://api.dicebear.com/7.x/avataaars/svg?seed=${encodeURIComponent(user.username)}`;

  const [isLiked, setIsLiked] = useState(false);
  const [animate, setAnimate] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editedUser, setEditedUser] = useState({ ...user });

  const handleLike = () => {
    setIsLiked(!isLiked);
    setAnimate(true);
    setTimeout(() => setAnimate(false), 500);
  };

  const handleChange = (e) => {
    setEditedUser({ ...editedUser, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    handleUpdate(user.id, editedUser);
    setIsModalOpen(false);
  };

  return (
    <div className="user-card p-3">
      <img src={avatarUrl} alt={`${user.name}'s Avatar`} className="avatar" />

      <h2>{user.name}</h2>
      <p><i className="bi bi-envelope"></i> &nbsp; {user.email}</p>
      <p><i className="bi bi-telephone"></i>&nbsp; {user.phone}</p>

      <hr className="divider" />

      <div className="actions">
        <button onClick={handleLike} className={`like-btn ${animate ? "animate" : ""}`}>
          {isLiked ? <i className="bi bi-heart-fill text-danger"></i> : <i className="bi bi-heart"></i>}
        </button>

        <button onClick={() => setIsModalOpen(true)} className="edit-btn" ><i className="bi bi-pencil"></i> </button>

        <button onClick={() => handleDelete(user.id)} className="delete-btn">
          <i className="bi bi-trash"></i> 
        </button>
      </div>

      {isModalOpen && (
        <Modal onClose={() => setIsModalOpen(false)} onSave={handleSave}>
          <input type="text" className="my-2" name="name" value={editedUser.name} onChange={handleChange} />
          <input type="email" className="my-2"  name="email" value={editedUser.email} onChange={handleChange} />
          <input type="text" className="my-2"  name="phone" value={editedUser.phone} onChange={handleChange} />
        </Modal>
      )}
    </div>
  );
};

export default UserCard;
