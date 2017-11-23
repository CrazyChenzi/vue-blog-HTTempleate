<template>
  <div id="editor">
    <Card>
      <mavon-editor :ishljs="true" v-model="mdEditor" code_style="solarized-dark" @save="saveHtml"></mavon-editor>
    </Card>
  </div>
</template>
<script>
  import { mavonEditor } from 'mavon-editor'
  import 'mavon-editor/dist/css/index.css'
  export default {
    data() {
      return {
        mdEditor: ''
      }
    },
    components: {
      'mavon-editor': mavonEditor
    },
    methods: {
      saveHtml: function(render, value) {
        console.log(value)
      }
    }
  }
</script>
<style scoped>
  #editor {
  }
  #editor >>> .markdown-body {
    height: calc(100vh - 94px);
  }
</style>