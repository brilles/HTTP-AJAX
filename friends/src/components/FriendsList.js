import React from "react";

export default function FriendsList(props) {
  return (
    <div className="friends-list-wrapper">
      <h1>Friends</h1>
      {props.friends.map(friend => {
        return (
          <div className="friend-card" key={friend.id}>
            <h2>{friend.name}</h2>
            <div className="friend-info">
              <p>Age: {friend.age}</p>
              <p>Email: {friend.email}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
