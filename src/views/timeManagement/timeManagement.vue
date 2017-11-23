<template>
  <div class="time-m" >
    <Button type="primary" size="small" class="container-add" @click="add_time">新增</Button>
    <Timeline style="height: 2000px;">
      <TimelineItem color="green" class="icon-background">
        <Icon type="trophy" slot="dot"></Icon>
        <p class="time">1976年</p>
        <Poptip
          title="操作"
          trigger="hover"
          placement="right">
          <p class="content">Apple I 问世</p>
          <div slot="content">
            <Button type="text">修改</Button>
            <Button type="text">删除</Button>
          </div>
        </Poptip>
      </TimelineItem>
      <TimelineItem>
        <p class="time">1984年</p>
        <p class="content">发布 Macintosh</p>
      </TimelineItem>
      <TimelineItem>
        <p class="time">2007年</p>
        <p class="content">发布 iPhone</p>
      </TimelineItem>
      <TimelineItem>
        <p class="time">2010年</p>
        <p class="content">发布 iPad</p>
      </TimelineItem>
      <TimelineItem>
        <p class="time">2011年10月5日</p>
        <p class="content">史蒂夫·乔布斯去世</p>
      </TimelineItem>
    </Timeline>
    <Modal v-model="time_model" width="40%" :mask-closable="false" :transfer="false">
      <p slot="header">
        <span>添加时光轴</span>
      </p>
      <div style="text-align:center">
        <Form ref="formDynamic" :model="formDynamic" :label-width="100">
          <FormItem
            v-for="(item, index) in formDynamic.items"
            v-if="item.status"
            :key="index"
            :label="'时间轴-内容' + item.index"
            :prop="'items.' + index + '.value'"
            :rules="{required: true, message: '时间轴-内容' + item.index +'不能为空', trigger: 'blur'}">
            <Row>
              <Col span="18">
                <Input type="text" v-model="item.value" placeholder="请输入时间轴..."></Input>
              </Col>
              <Col span="1" offset="1">
                <Button type="ghost" @click="handleAdd" icon="plus-round"></Button>
              </Col>
              <Col span="1" offset="1">
                <Button type="ghost" @click="handleRemove(index)" icon="trash-a"></Button>
              </Col>
            </Row>
          </FormItem>
        </Form>
      </div>
      <div slot="footer">
        <Button type="text"  :loading="modal_loading" @click="clear_model">取消</Button>
        <Button type="primary" :loading="modal_loading" @click="save_time('formDynamic')">确定</Button>
      </div>
    </Modal>
  </div>
</template>
<script>
  export default {
    name: 'timeManagement',
    data () {	
      return {
        time_model: false,
        modal_loading: false,
        index: 1,
        formDynamic: {
          items: [
            {
              value: '',
              index: 1,
              status: 1
            }
          ]
        }
      }
    },
    methods: {
      add_time: function() {
        this.time_model = true;
      },
      save_time: function(name) {
        this.$refs[name].validate((valid) => {
          if (valid) {
            this.$Message.success('Success!');
          } else {
            this.$Message.error('Fail!');
          }
        })
      },
      clear_model: function() {
        this.time_model = false;
      },
      handleReset: function(name) {
        this.$refs[name].resetFields();
      },
      handleAdd: function() {
        this.index++;
        this.formDynamic.items.push({
          value: '',
          index: this.index,
          status: 1
        });
      },
      handleRemove: function(index) {
        this.formDynamic.items[index].status = 0;
      }
    }
  }
</script>
<style scoped>
  .time-m {
    padding-top: 20px;
    padding-left: 20px;
  }
  .time{
    font-size: 14px;
    font-weight: bold;
  }
  .content{
    padding-left: 5px;
  }
  .icon-background >>> .ivu-timeline-item-head-custom {
    background: #f3f3f3;
  }
  .time-m >>> .ivu-modal-content {
    min-width: 650px;
  }
</style>