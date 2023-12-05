const UserCard = ({ user, onCardClick, count }) => {
  return (
    <div
      className="user-card m-1 justify-content-between"
      onClick={() => onCardClick(user.id)}
    >
      <div className="user-info  row justify-content-between border border-primary mx-2 my-1 p-2 rounded">
        <div className="user-name col-10">{user.name}</div>
        <div className="post-count col text-end">
          Posts: {count != undefined ? count : 0}
        </div>
      </div>
    </div>
  );
};

export default UserCard;
