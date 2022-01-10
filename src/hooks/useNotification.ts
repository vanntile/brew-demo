import { useState } from 'react'

const useNotification = (): [INotification | undefined, (a: INotification, b: number) => void] => {
  const [notificationTimeout, setNotificationTimeout] = useState<number>()
  const [notification, setNotification] = useState<INotification | undefined>()

  const notify = (data: INotification, timeout = 3.5): void => {
    setNotification(data)
    window.clearTimeout(notificationTimeout)

    const timer = window.setTimeout(() => {
      setNotification(undefined)
    }, timeout * 1000)

    setNotificationTimeout(timer)
  }

  return [notification, notify]
}

export default useNotification
