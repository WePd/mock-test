<template>
  <div>
    <div>{{ message }}</div>
    <span>--------------------------------------</span>
    <div>{{ message1 }}</div>
    <span>-----------------------------------------------</span>
    <div>{{ tip }}</div>
  </div>
</template>

<script>
import axios from "axios"

export default {
  data() {
    return {
      message: "",
      message1: "",
      tip: process.env,
    }
  },
  mounted() {
    axios.post("/api/login").then((res) => {
      this.message = res.data.data.string
    }),
      axios.post("/api/log").then((res) => {
        this.message1 = res.data.data.string
      })
  },
}
</script>