<template>
  <div class="login">
    <div class="login-card">
      <Card dis-hover>
        <p slot="title">登录</p>
        <Form ref="formInline" :model="formInline" :rules="ruleInline">
          <FormItem prop="user">
            <Input type="text" v-model="formInline.user" placeholder="Username">
              <Icon type="person" slot="prepend"></Icon>
            </Input>
          </FormItem>
          <FormItem prop="password">
            <Input type="password" v-model="formInline.password" placeholder="Password">
              <Icon type="locked" slot="prepend"></Icon>
            </Input>
          </FormItem>
          <FormItem>
            <Button type="primary" long @click="login('formInline')">登录</Button>
          </FormItem>
        </Form>
      </Card>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'login',
    components: {},
    data() {
      return {
        formInline: {
          user: '',
          password: ''
        },
        ruleInline: {
          user: [
            { required: true, message: '请输入用户名', trigger: 'blur' }
          ],
          password: [
            { required: true, message: '请输入密码', trigger: 'blur' },
            { type: 'string', min: 6, message: '密码至少为6位', trigger: 'blur' }
          ]
        }
      }
    },
    methods: {
      login: function (name) {
        this.$Loading.start()
        this.$refs[name].validate((valid) => {
          if (valid) {
            this.$Message.success('登录成功!')
            this.$Loading.finish()
            this.$router.push({ path: '/index' })
          } else {
            this.$Message.error('登录失败!')
            this.$Loading.error()
          }
        })
      }
    }
  }
</script>
<style lang="less" scoped>
  .login {
    background-image: url('../../../static/images/background.jpg');
    height: calc(100vh);
    background-size: cover;
  }
  .login-card {
    position: absolute;
    right: 160px;
    top: 50%;
    -webkit-transform: translateY(-60%);
    transform: translateY(-60%);
    width: 300px;
  }
</style>