import "./styles/UserCard.css";

export const UserCard = ({
  user,
  deleteUser,
  setUserSelected,
  setFormIsOpen,
}) => {
  const handleDelete = () => {
    deleteUser(user.id);
  };

  const handleEdit = () => {
    setUserSelected(user);
    setFormIsOpen(true);
  };

  return (
    <article className="user">
      <h3 className="user__name">
        {user.first_name} {user.last_name}
      </h3>
      <hr className="user__hr" />
      <ul className="user__list">
        <li className="user__item">
          <span className="user__label">Email:</span>
          <span className="user__value">{user.email}</span>
        </li>
        <li className="user__item">
          <span className="user__label">Birthday:</span>
          <span className="user__value">{user.birthday}</span>
        </li>
      </ul>
      <footer className="user__footer">
        <button onClick={handleDelete} className="user__btn user__delete">
          <i className="bx bxs-trash"></i>
        </button>
        <button onClick={handleEdit} className="user__btn user__edit">
          <i className="bx bxs-edit-alt"></i>
        </button>
      </footer>
    </article>
  );
};
