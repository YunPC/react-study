import React from 'react'

function User({ user = null }) {
  return (
    user && (
      <div>
        <div>
          <b>ID</b>: {user.id}
        </div>
        <div>
          <b>Username</b>: {user.username}
        </div>
      </div>
    )
  )
}

export default User
