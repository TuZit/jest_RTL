import React, { useEffect, useState } from 'react'

const WebWorker = () => {
  const [apiData, setApiData] = useState<any>(null)
  const [textColor, setTextColor] = useState('#000')
  console.log('textColor', textColor)

  useEffect(() => {
    if (window.Worker) {
      const apiWorker = new Worker(new URL('./api-worker.js', import.meta.url))

      apiWorker.onmessage = (event) => {
        setApiData(event.data) // Nhận và lưu dữ liệu từ Web Worker
      }

      // Dừng Web Worker khi component unmount
      return () => {
        apiWorker.terminate()
      }
    }
  }, [])

  useEffect(() => {
    const intervalId = setInterval(() => {
      const offlineWorker = new Worker(
        new URL('./offlineWorker.js', import.meta.url)
      )
      offlineWorker.onmessage = (event: any) => {
        setTextColor(event.data) // Cập nhật màu
      }
    }, 5000)

    // Cleanup function để xóa interval khi component bị unmount
    return () => clearInterval(intervalId)
  }, [])

  return (
    <div>
      <div style={{ width: '80vw', margin: '100px auto' }}>
        <h2>
          {apiData?.title ?? ''} - {apiData?.id ?? ''} - {apiData?.userId ?? ''}
        </h2>
        <p>{apiData?.body ?? ''}</p>
      </div>

      <h1 style={{ color: textColor }}>Hehehehe</h1>
    </div>
  )
}

export default WebWorker
