<template>
  <div>
    <div class="container">
      <Table :columns="columns1" :data="data1" size="small" border></Table>
      <Page :total="100" show-elevator show-sizer class="container-page"></Page>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'resourceRecycle',
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
            title: '再次发布',
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
        ]
      }
    },
    methods: {}
  }
</script>
<style scoped>
  .container {
    padding-top: 30px;
  }
</style>