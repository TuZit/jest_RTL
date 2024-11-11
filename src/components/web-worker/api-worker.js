function fetchApiData() {
  // Thay thế URL này bằng API bạn muốn gọi
  fetch(
    `https://jsonplaceholder.typicode.com/posts/${
      Math.floor(Math.random() * 100) + 1
    }`
  )
    .then((response) => response.json())
    .then((data) => {
      postMessage(data) // Gửi dữ liệu API về lại React app
    })
    .catch((error) => console.error('API fetch error:', error))
}

// Gọi API mỗi 5 giây
setInterval(fetchApiData, 5000)
