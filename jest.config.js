module.exports = {
  preset: 'ts-jest', // Dùng ts-jest để xử lý TypeScript
  testEnvironment: 'jsdom', // Cần jsdom khi chạy test với React
  transform: {
    '^.+\\.tsx?$': 'ts-jest', // Chuyển đổi các file .ts, .tsx
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'], // Hỗ trợ các đuôi file .ts, .tsx
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$', // Regex để tìm các file test
}
