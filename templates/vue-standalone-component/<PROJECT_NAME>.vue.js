module.exports = projectName => `
<template lang="html">
  <div class="${projectName}"></div>
</template>

<script>
    export default {
        name: '${projectName}'
    }
</script>

<style lang="scss" scoped>
    .${projectName} {
        
    }
</style>
`


