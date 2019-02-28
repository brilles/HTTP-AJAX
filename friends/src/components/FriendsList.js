import React from "react";

export default function FriendsList(props) {
  return (
    <div className="friends-list-wrapper">
      <h1>Friends</h1>
      {props.friends.map(friend => {
        return (
          <div className="friend-card" key={friend.id}>
            <h2>
              {friend.name}
              <span onClick={e => props.deleteFriend(e, friend.id)}>x</span>
            </h2>
            <div className="friend-info">
              <p>Age: {friend.age}</p>
              <p>
                Email: <a href={`mailto:${friend.email}`}>{friend.email}</a>
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
