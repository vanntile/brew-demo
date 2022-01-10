import React from 'react'

interface Props {
  notification?: INotification
}

const Notification: React.FC<Props> = ({ notification }) =>
  notification ? (
    <div
      className={`text-lg py-3 px-2 rounded mb-3 border-2 border-solid ${
        notification.type === 'error' ? 'bg-red-200 border-red-600' : 'bg-blue-200 border-blue-600'
      }`}
    >
      {notification.message}
    </div>
  ) : null

export default Notification
