import React from 'react'

interface Props {
  notification?: INotification
}

const Notification: React.FC<Props> = ({ notification }) =>
  notification ? (
    <div className="w-full px-2 py-4 overflow-x-auto text-center whitespace-no-wrap rounded-md" role="alert">
      <div
        className={`relative inline-flex w-full max-w-sm ml-3 overflow-hidden rounded shadow-sm hover:shadow-lg ${
          notification.type === 'error' ? 'bg-red-500 hover:bg-red-600' : 'bg-green-500 hover:bg-green-600'
        }`}
      >
        <div className="flex items-center justify-center w-12">
          {notification.type === 'error' ? (
            <svg
              className="w-10 h-10 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          ) : (
            <svg
              className="w-10 h-10 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg>
          )}
        </div>
        <div className="px-4 py-2 text-left">
          <span className="font-semibold text-white">{notification.type}</span>
          <p className="mt-0 mb-2 text-sm leading-none text-white capitalize">{notification.message}</p>
        </div>
      </div>
    </div>
  ) : null

export default Notification
