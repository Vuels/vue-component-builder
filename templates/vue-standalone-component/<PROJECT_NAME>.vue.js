module.exports = projectName => `
<template lang="html">
  <div 
    class="${projectName}"
    v-html="test"></div>
</template>

<script>
    export default {
        name: '${projectName}',
        data() {
            test: 'Hello World'
        }
    }
</script>

<style lang="scss" scoped>
    .${projectName} {
        display: block;
    }
</style>
`
