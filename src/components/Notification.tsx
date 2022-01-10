import React from 'react'

interface Props {
  notification?: INotification
}

const Notification: React.FC<Props> = ({ notification }) =>
  notification ? <div className={`notification ${notification.type}`}>{notification.message}</div> : null

export default Notification
