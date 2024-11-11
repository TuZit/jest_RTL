// offlineWorker.js

let colorInterval = null
const colors = [
  'red',
  'red',
  'green',
  'blue',
  'orange',
  'yellow',
  'brown',
  'aqua',
  'coral',
  'crimson',
]

function changeTextColor() {
  // Tạo một màu ngẫu nhiên
  const randomIndex = Math.floor(Math.random() * 9) + 1
  postMessage(colors[randomIndex]) // Gửi màu ngẫu nhiên về lại React app
}

function monitorNetworkStatus() {
  if (!navigator.onLine && !colorInterval) {
    // Khi mất mạng, khởi động interval để thay đổi màu mỗi 1 giây
    colorInterval = setInterval(changeTextColor, 1000)
  } else if (navigator.onLine && colorInterval) {
    // Khi có mạng lại, dừng đổi màu và xóa interval
    clearInterval(colorInterval)
    colorInterval = null
  }
}

// Bắt đầu giám sát trạng thái mạng
monitorNetworkStatus()
