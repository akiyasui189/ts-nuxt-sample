<template>
  <h1>Hello {{word}}!</h1>
</template>
<script>
export default {
  asyncData ({ params }) {
    return { word: params.word }
  },
  validate ({ params }) {
    return /^\w+$/.test(params.word)
  }
}
</script>
