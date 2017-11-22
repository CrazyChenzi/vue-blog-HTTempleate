<template>
  <div>
    <div class="container">
      <Button type="primary" size="small" class="container-add">新增</Button>
      <Table :columns="columns1" :data="data1" size="small" border></Table>
      <Page :total="100" show-elevator show-sizer class="container-page"></Page>
      <quill-editor ref="myTextEditor" :content="announcementForm.fContent" :config="editorOption" @change="onEditorChange($event)"></quill-editor>
      <Card>
        <UE :config="config" ref="ueditor"></UE>
      </Card>
    </div>
    <div v-html="announcementForm.fContent"></div>
    <Button @click="save">保存</Button>
  </div>
</template>
<script>
  // const tinymce = require('tinymce');
  import UE from '../../components/UE/UE'
  import hljs from '../../../static/highlight/highlight.js'
  import '../../../static/highlight/tomorrow-night-eighties.css'
  export default {
    name: 'articleManagement',
    components: {
      'UE': UE
    },
    data () {	
      return {
        columns1: [
          {
            title: '发布时间',
            key: 'name'
          },
          {
            title: '标题',
            key: 'name'
          },
          {
            title: '作者',
            key: 'age'
          },
          {
            title: '类别',
            key: 'address'
          },
          {
            title: '置顶',
            key: 'switchSlot',
            render: (h, params) => {
              return h('i-switch',{
                props: {
                  size: 'large',
                  value: params.row.switchSlot
                },
                on: {
                  'on-change': (val) =>{
                    this.data1[params.index].switchSlot = val;
                  }
                }
              },this.switchList.map(item => {
                return h('span',{
                  slot: item.slot
                }, item.name)
              }))
            }
          },
          {
            title: '操作',
            key: 'action',
            width: 150,
            render: (h, params) => {
              console.log(params)
              return h('div', [
                h('Button', {
                  props: {
                    type: 'primary',
                    size: 'small'
                  },
                  style: {
                    marginRight: '5px'
                  },
                  on: {
                  }
                }, '修改'),
                h('Button', {
                  props: {
                    type: 'error',
                    size: 'small'
                  },
                  on: {
                  }
                }, '删除')
              ]);
            }
          }
        ],
        data1: [
          {
            name: 'John Brown',
            age: 18,
            address: 'New York No. 1 Lake Park',
            date: '2016-10-03'
          },
          {
            name: 'Jim Green',
            age: 24,
            address: 'London No. 1 Lake Park',
            date: '2016-10-01'
          },
          {
            name: 'Joe Black',
            age: 30,
            address: 'Sydney No. 1 Lake Park',
            date: '2016-10-02'
          },
          {
            name: 'Jon Snow',
            age: 26,
            address: 'Ottawa No. 2 Lake Park',
            date: '2016-10-04'
          }
        ],
        switchList: [
          {
            slot: 'open',
            name: '打开'
          },
          {
            slot: 'close',
            name: '关闭'
          }
        ],
        announcementForm: {
          fType: 1, // 类型
          fTitle: '', // 标题
          fContent: '' // 内容
          // fStartSendTime: '',
        },
        editorOption: {

        },
        config: {

        }
      }
    },
    mounted() {
      hljs.initHighlightingOnLoad()
      console.log(this.$refs.ueditor)
    },
    methods: {
      onEditorChange({ html }) {
        this.announcementForm.fContent = html;
        // console.log(editor)
        // console.log(html)
        // this.getContent()
        // console.log(text)
      },
      getContent: function(){
        this.announcementForm.fContent = this.$refs.ueditor.getUEContent()
        // console.log(content)
      },
      save: function() {
        this.getContent()
      }
    },
    destroyed() {
    }
  }
</script>
<style scoped>
  .container {
    padding: 10px 20px;
  }
  .container-add {
    margin-bottom: 10px;
  }
  .container-page {
    margin-top: 10px;
  }
</style>