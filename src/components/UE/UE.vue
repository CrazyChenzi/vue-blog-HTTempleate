<template>
  <div>
    <script id="editor" type="text/plain"></script>
  </div>
</template>

<script>
  // import AppConfig from '@/config'
  /* eslint-disable */
  import '../../../static/UE/ueditor.config.js'
  import '../../../static/UE/ueditor.all.js'
  import '../../../static/UE/lang/zh-cn/zh-cn.js'
  export default {
    name: "UE",
    props: {
      id: {
        type: String
      },
      config: {
        type: Object
      }
    },
    data() {
      return {
        editor: null
      }
    },
    mounted() {
      //初始化UE
      this.editor = UE.getEditor('editor', this.config);
    },
    destoryed() {
      this.editor.destory();
    },
    methods: {
      getUEContent: function() {
        return this.editor.getContent();
      }
    }
  }
</script>