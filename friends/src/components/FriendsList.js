import React from "react";

export default function FriendsList(props) {
  return (
    <div className="friends-list-wrapper">
      {props.friends.map(friend => {
        return (
          <div className="friend-card" key={friend.id}>
            <h2>{friend.name}</h2>
            <p>{friend.age}</p>
            <p>{friend.email}</p>
          </div>
        );
      })}
    </div>
  );
}
