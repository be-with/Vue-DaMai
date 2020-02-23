<template>
  <div class="register-page">
    <el-row>
      <bar-bd/>
    </el-row>
    <el-row class="register">
      <div class="register-box">
        <div class="form">
          <el-form
            :model="ruleForm"
            status-icon
            :rules="rules"
            ref="ruleForm"
            label-width="100px"
            class="demo-ruleForm"
          >
            <el-form-item label="用户名" prop="name">
              <el-input type="text" v-model="ruleForm.name" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="pass">
              <el-input
                type="password"
                v-model="ruleForm.pass"
                autocomplete="off"
                @input="handleInput"
              ></el-input>
            </el-form-item>
            <div class="pw-strength">
              <div :class="['bar', strengthClass]"></div>
              <div class="letter">
                <span>弱</span>
                <span>中</span>
                <span>强</span>
              </div>
            </div>
            <el-form-item label="确认密码" prop="checkPass">
              <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="submitForm('ruleForm')">注册</el-button>
            </el-form-item>
          </el-form>
        </div>
      </div>
    </el-row>
    <el-row>
      <m-footer/>
    </el-row>
  </div>
</template>
<script>
import barBd from '@/components/public/barBd'
import MFooter from '@/components/footer/footer'
import api from '@/api/getData.js'
export default {
  components: {
    barBd,
    MFooter
  },
  data () {
    var validateName = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入用户名'))
      } else if (value.length < 4 || value.length > 16) {
        callback(new Error('用户名必须为4-16位的字母数字下划线组成'))
      } else {
        callback()
      }
    }
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'))
      } else {
        if (this.ruleForm.checkPass !== '') {
          this.$refs.ruleForm.validateField('checkPass')
        }
        callback()
      }
    }
    var validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'))
      } else if (value !== this.ruleForm.pass) {
        callback(new Error('两次输入密码不一致!'))
      } else {
        callback()
      }
    }
    return {
      ruleForm: {
        pass: '',
        checkPass: '',
        name: ''
      },
      rules: {
        pass: [{ validator: validatePass, trigger: 'blur' }],
        checkPass: [{ validator: validatePass2, trigger: 'blur' }],
        name: [{ validator: validateName, trigger: 'blur' }]
      },
      strengthClass: ''
    }
  },
  methods: {
    submitForm (formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          api
            .getRegister({
              params: this.ruleForm
            })
            .then(res => {
              if (res.data.register[0].status === 'success') {
                this.$router.push({ name: 'login' })
              }
            })
        } else {
          alert('error submit!!')
        }
      })
    },
    resetForm (formName) {
      this.$refs[formName].resetFields()
    },
    handleInput () {
      var regStr = /(\w)+/g // 大小写数字_汉字
      var regNum = /(\d)+/g // 匹配数字
      var reg = /_/g
      var strongth =
        this.ruleForm.pass.match(reg) &&
        this.ruleForm.pass.match(regStr) &&
        this.ruleForm.pass.match(regNum)
      if (
        this.ruleForm.pass.length > 20 ||
        (this.ruleForm.pass.length > 6 && strongth)
      ) {
        this.strengthClass = 'strong'
      } else if (this.ruleForm.pass.length < 6) {
        this.strengthClass = 'week'
      } else if (!this.ruleForm.pass) {
        this.strengthClass = ''
      } else {
        this.strengthClass = 'normal'
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.register-page {
  .register {
    background-color: #f8f8f8;
    padding-top: 40px;
    width: 100%;
    height: 580px;
    .register-box {
      width: 1200px;
      height: 580px;
      background-color: #fff;
      margin: 0 auto;
      border: 1px solid #fff;
      .form {
        width: 720px;
        height: 347px;
        margin: 57px auto;
        // border: 1px solid red;
        .el-button {
          background-image: linear-gradient(90deg, #ff4aae, #ff1268);
          border: 1px solid #ff1268;
          border-radius: 3px;
          padding: 0 16px;
          width: 124px;
          height: 40px;
          line-height: 38px;
          font-size: 18px;
          border-width: 1px;
        }
      }
      .pw-strength {
        position: relative;
        width: 330px;
        top: -4px;
        left: 85px;
        background: #eee;
        .bar {
          background: #d3ebee;
          height: 20px;
          width: 0;
          overflow: hidden;
          transition: all 0.4s linear;
          &.week {
            width: 108px;
            background: #f76120;
          }
          &.normal {
            width: 218px;
            background: #ff8900;
          }
          &.strong {
            width: 330px;
            background: #5bab3c;
          }
        }
        .letter {
          position: absolute;
          top: 0;
          left: 0;
          span {
            display: block;
            float: left;
            text-align: center;
            font-size: 12px;
            height: 20px;
            line-height: 20px;
            width: 108px;
            border-right: 2px solid #fff;
            color: #fff;
          }
        }
      }
    }
  }
}
</style>
