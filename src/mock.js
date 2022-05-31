const Mock = require("mockjs")

Mock.mock("/api/login", "post", {
  message: "hhhh",
  data: Mock.mock({
    "string|1-10": "★"
  })
})
Mock.mock("/api/log", "post", {
  message: "hhhh",
  data: Mock.mock({
    "string|1-10": "★"
  })
})
