<template>
  <div class="login">
    <el-row class="bar">
      <bar-bd/>
    </el-row>
    <el-row>
      <div class="login-main-bg">
        <div class="login-main">
          <img src="https://img.alicdn.com/tfs/TB1NkOydrus3KVjSZKbXXXqkFXa-720-400.png_q75.jpg" alt>
          <div class="login-frame">
            <div class="title">密码登录</div>
            <div class="box">
              <div class="user">
                <div class="icon name">
                  <i class="el-icon-s-custom"></i>
                </div>
                <div class="plain">
                  <input type="text" v-model="name" class="fm-text" placeholder="请输入手机号或邮箱">
                </div>
              </div>

              <div class="user">
                <div class="icon pasd">
                  <i class="el-icon-lock"></i>
                </div>
                <div class="plain">
                  <input type="password" v-model="pasd" class="fm-text" placeholder="请输入登录密码">
                </div>
              </div>
              <div class="btn">
                <el-button type="danger" @click="open">登录</el-button>
              </div>

              <div class="app-icons">
                <a href="#" class="app-icon taobao"></a>
                <a href="#" class="app-icon weixin"></a>
                <a href="#" class="app-icon qq"></a>
                <a href="#" class="app-icon weibo"></a>
              </div>

              <div class="links">
                <a href="#">忘记密码</a>
                <router-link :to="{name:'register'}">免费注册</router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </el-row>
    <el-row>
      <m-footer/>
    </el-row>
  </div>
</template>
<script>
import MFooter from '@/components/footer/footer'
import barBd from '@/components/public/barBd'
import api from '@/api/getData.js'
export default {
  components: {
    MFooter,
    barBd
  },
  data () {
    return {
      name: '',
      pasd: ''
    }
  },
  methods: {
    open () {
      if (!this.name) {
        this.$alert('请输入用户名', '用户名不能为空', {
          confirmButtonText: '确定'
        })
      }
      if (!this.pasd) {
        this.$alert('请输入密码', '密码不能为空', {
          confirmButtonText: '确定'
        })
      }
      api
        .getLogin({
          params: {
            name: this.name,
            pasd: this.pasd
          }
        })
        .then(res => {
          if (res.data.login[0].status === 'success') {
            this.$router.push({ name: 'index' })
            this.$store.commit('setUserName', this.name)
          };
          // if (res.data.status == 'success') {
          //             this.$router.push({name: 'index'});
          //             this.$store.commit('setUserName', this.userName);
          //         } else {
          //             this.error = res.data.msg;
          //         }
        })
    }
  }
}
</script>
<style lang="scss" scoped>
.login {
  .bar {
    height: 90px;
  }
  .login-main-bg {
    height: 600px;
    width: 100%;
    background: linear-gradient(to right, #17073d, #17073d, #17073d);
    .login-main {
      height: 600px;
      margin: 0 auto;
      width: 1150px;
      overflow: hidden;
      > img {
        float: left;
        margin-top: 90px;
        width: 720px;
        height: 400px;
      }
    }
    .login-frame {
      margin: 90px auto 10px;
      padding: 0;
      overflow: hidden;
      float: right;
      width: 350px;
      min-height: 310px;
      background: #fff;
      text-align: center;
      .title {
        height: 38px;
        background: #e7e7e7;
        line-height: 38px;
        color: #ff1268;
      }
      .box {
        width: 300px;
        height: 248px;
        margin: 0 auto;
        box-sizing: border-box;
        margin-top: 14px;
        .user {
          position: relative;
          margin-bottom: 20px;
          font-size: 14px;
          height: 46px;
          margin-left: 15px;
          .icon {
            width: 44px;
            height: 46px;
            line-height: 40px;
            text-align: center;
            color: #fff;
            position: absolute;
            left: 1px;
            background-color: #ccc;
            > i {
              font-size: 26px;
              line-height: 46px;
            }
          }
          .plain {
            .fm-text {
              border: 1px solid #ccc;
              height: 42px;
              outline: none;
              font-size: 14px;
              padding-left: 50px;
            }
          }
        }
        .btn {
          width: 100%;
          .el-button--danger {
            width: 100%;
            font-size: 20px;
            background-image: linear-gradient(90deg, #ff4aae, #ff1268);
          }
        }
        .app-icons {
          margin: 10px 0;
          float: left;
          .app-icon {
            width: 22px;
            height: 22px;
            display: inline-block;
            margin-right: 10px;
            background-size: 100%;
            &.taobao {
              background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAMAAAAp4XiDAAAAJ1BMVEXvVjvvVTrvVTrvVTrvVTrvVjvwVDjvVjvwVTrwVTnvVTrvVTrxVDgxkGpaAAAADXRSTlP+Ab2e2foJ7V0qekEUkXdbKgAAAo1JREFUSMetVgly5DAIxAh0gP7/3uWQx5YzM9mtWpJU2Y5aoKYBwfG0OlQKETNRER31xwJ4vKtgg5s1lPEVotgYdmNoZXyETIwlD4h9aDLfQ7p5eAKWI6D+BlILfDWpT4gHxV8xpe6QSfCrlR2CDH+NCUgV+BtjuSD9JObG0VvTEzLWikaReH6lk594mguy6C1jjuKJU1PNWscPNZSEaH7F5AHYH9QWF+mqY6iWi842AlLSe+ZKgPWoR5dhMZyZqJ0uNxWWE14UluWtehV0t7nlzdzAIZyBUc1/ae48VhUwqW8w2qJCDgj5xgt17bS4z3A5bayI4wtWOBk2ikN9saVsEoqQlxuLDPolVduYfEd1V7OfRvgqJvfTofAlVAmMgiwG8gcDUnHlVABPJ0dgmDpbIMOZPtSd6MMLAm0RSz6MhqnvYPP0skQDba+hOI82IyakcG02L8hNvThdKaWIlBK13ouZtN1Lu+nUMMavnb9W//Vl/jTxCbk3OlPDIEJCpFCcoBnx8yy0e9G2lp1nIdkZMwDuBSQwgrjgAo3yepTdS4GrfXnmJ/FMSOrMkzrKBhETzFnGGl2gpWTSSyL7BukvWbIjqp0sdJvBDK17w05ZrkfuLqqeWs4S879pZxmbFxN/FgJnmyYvqWvn2huoZgllMbC9WCG3RVZd/QzHqy4jc9GJctkqZONlTYOZ+uZGYZbmoYg+kOrVubIpnars/KFxvxoq8Li3Phunzx5Mdbr5wN1b33myn52YPT6MGBfDc2/j73o979v0a77IZ8zd921Y/Doof46kW//4YjjrNl4r/o741yFeXoNguyp8Bry9Knh+SnszJjkG3MdrzyhvPDXU/3u5Oq9waJesj1e4P46NE0UeOhwBAAAAAElFTkSuQmCC);
            }
            &.weixin {
              background-image: url(data:image/svg+xml;base64,PHN2ZyBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlLz48L2RlZnM+PHBhdGggZD0iTTAgNTEyYTUxMiA1MTIgMCAxIDAgMTAyNCAwQTUxMiA1MTIgMCAxIDAgMCA1MTJ6IiBmaWxsPSIjN0VEMzIxIi8+PHBhdGggZD0iTTYyNS4yOCA0MTAuODhjNy4zNiAwIDE0LjY1Ni41MTIgMjEuODI0IDEuMzQ0QzYyNy40NTYgMzIyLjQ5NiA1MjkuODU2IDI1NiA0MTguNTYgMjU2IDI5NC4wOCAyNTYgMTkyIDMzOS4zMjggMTkyIDQ0NS4xODRjMCA2MC45OTIgMzMuOTg0IDExMS4yMzIgOTAuNjI0IDE1MC4xNDRsLTIyLjY1NiA2Ni45NDQgNzkuMTY4LTM5LjA0YzI4LjM1MiA1LjQ0IDUxLjAwOCAxMS4xMzYgNzkuNDI0IDExLjEzNiA3LjA0IDAgMTQuMTQ0LS4zMiAyMS4wNTYtLjg5NmExNjQuMTYgMTY0LjE2IDAgMCAxLTYuOTEyLTQ2LjU5MmMwLTk3LjE1MiA4NC45MjgtMTc2IDE5Mi41NzYtMTc2em0tMTIxLjc5Mi02MC4yMjRjMTYuOTYgMCAyOC4yODggMTEuMDA4IDI4LjI4OCAyNy43MTJzLTExLjI2NCAyNy43NzYtMjguMjg4IDI3Ljc3NmMtMTYuOTYgMC0zNC4xMTItMTEuMTM2LTM0LjExMi0yNy43NzYuMDY0LTE2LjgzMiAxNy4xNTItMjcuNzEyIDM0LjExMi0yNy43MTJ6bS0xNTguNTkyIDU1LjQ4OGMtMTYuOTYgMC0zNC4xNzYtMTEuMTM2LTM0LjE3Ni0yNy43NzYgMC0xNi43NjggMTcuMjE2LTI3LjcxMiAzNC4xNzYtMjcuNzEyczI4LjIyNCAxMS4wMDggMjguMjI0IDI3LjcxMi0xMS4yIDI3Ljc3Ni0yOC4yMjQgMjcuNzc2ek04MzIgNTg0LjMyYzAtODguOTYtOTAuNjI0LTE2MS40NzItMTkyLjM4NC0xNjEuNDcyLTEwNy44NCAwLTE5Mi43NjggNzIuNTEyLTE5Mi43NjggMTYxLjQ3MiAwIDg5LjA4OCA4NC45MjggMTYxLjM0NCAxOTIuNzY4IDE2MS4zNDQgMjIuNTI4IDAgNDUuMTg0LTUuNTY4IDY3Ljk2OC0xMS4xMzZMNzY5Ljc5MiA3NjhsLTE3LjA4OC01NS42MTZDNzk4LjIwOCA2NzguODQ4IDgzMiA2MzQuNDMyIDgzMiA1ODQuMzJ6bS0yNTQuODQ4LTI3Ljk2OGMtMTEuMzI4IDAtMjIuNjU2LTExLjAwOC0yMi42NTYtMjIuMjcyIDAtMTEuMTM2IDExLjQ1Ni0yMi4yNzIgMjIuNjU2LTIyLjI3MiAxNy4wODggMCAyOC4yODggMTEuMTM2IDI4LjI4OCAyMi4yNzIgMCAxMS4yNjQtMTEuMiAyMi4yNzItMjguMjg4IDIyLjI3MnptMTI0LjYwOCAwYy0xMS4yIDAtMjIuNDY0LTExLjAwOC0yMi40NjQtMjIuMjcyIDAtMTEuMTM2IDExLjMyOC0yMi4yNzIgMjIuNDY0LTIyLjI3MiAxNi45NiAwIDI4LjQxNiAxMS4xMzYgMjguNDE2IDIyLjI3MiAwIDExLjI2NC0xMS40NTYgMjIuMjcyLTI4LjQxNiAyMi4yNzJ6IiBmaWxsPSIjRkZGIi8+PC9zdmc+);
            }
            &.qq {
              background-image: url(data:image/svg+xml;base64,PHN2ZyBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlLz48L2RlZnM+PHBhdGggZD0iTTAgNTEyYTUxMiA1MTIgMCAxIDAgMTAyNCAwQTUxMiA1MTIgMCAxIDAgMCA1MTJ6IiBmaWxsPSIjMThBQ0ZDIi8+PHBhdGggZD0iTTUwMC4xMTMgMjI4LjM5YzExOC4zOTYtMS41MTggMTc4LjkyNCA2MS4wMDQgMjAxIDE1NiAzLjQ5NyAxNS4wNDguMTUgMzQuODA3IDAgNTAgMjcuMTQzIDUuNjgyIDMzLjA4NyA2MC4xMDYgMTAgNzV2MWgxYzguMjYgMTQuMzMgMTkuMDQgMjguMTI1IDI2IDQ0IDcuMzMyIDE2LjcyMyA5LjMwNiAzNS4xNiAxNCA1NSA0LjAyNCAxNy4wMS0yLjI4NyA1MS41MDUtMTAgNTctLjc3MS42ODMtMi4yMzEgMS4zMTItMyAyLTE0LjYwMS0zLjAxNi0zMC4zNzctMTYuODY1LTM4LTI3LTMuMDY1LTQuMDc0LTUuMjc1LTkuNjcyLTEwLTEyLS4zOTUgMjEuNTY4LTEyLjUwMyA0MS4xNS0yMiA1NS0zLjUxNCA1LjEyMy0xNC4wNzMgMTMuMjE3LTE0IDE4IDMuNjkxIDIuODM2IDguMzA1IDIuOTU2IDEzIDUgMTAuNTEzIDQuNTc3IDI1LjQ0OSAxMy4xNjggMzIgMjIgMi4zMzQgMy4xNDYgNS41NDggNy41NTUgNyAxMSAxNi4xOTMgMzguNDE0LTM2LjUyNyA0OC4zMTQtNjMgNTQtMjcuMTg1IDUuODM5LTc3LjgxOC0xMC4yMjQtOTItMTktOC43NDktNS40MTQtMTYuODYzLTE4LjU3My0yOS0xOS0zLjY2NiAyLjM4OS0xNC40MzggMS4xMzItMjAgMS0xNi44MjkgMzIuODA0LTEwMS45MTMgNDcuODY4LTE0OCAzMS0xNC4wNjEtNS4xNDYtNDMuMzk4LTE3LjY5NS0zOC00MCA0LjQzNy0xOC4zMjcgMTkuOTQ3LTI5LjIyNCAzNS0zNyA1Ljc1OS0yLjk3NSAxOC45MTUtNC40MTkgMjItMTAtMTMuMTQxLTguOTg4LTI0LjUyMS0yOC42NTktMzEtNDQtMy40MTItOC4wNzctNC4xOTMtMjUuNzc1LTktMzItNy43ODkgMTIuMjQ1LTMyLjA5NyAzNi45MS01MiAzMy0zLjA3MS00LjU1My03LjIxMy05LjA5Ny05LTE1LTQuNzkyLTE1LjgzNS0xLjgxLTQwLjM3OSAyLTU0IDguMTE3LTI5LjAyIDE2Ljk2NS01MC42MjMgMzItNzIgNC42NzItNi42NDMgMTEuNDI1LTEyLjEzNSAxNi0xOS04Ljk0NS05LjczMy02Ljk1MS0zNy41MzYtMS00OSA0LjAwMi03LjcwOSA5LjcwMS03LjQxMyAxMC0yMC0xLjkyLTMuMDIyLS4wNzEtOC42MDQtMS0xMy00LjM4My0yMC43NSAzLjI3My00Ny41NTIgOS02MyAxOS44LTUzLjQyMSA1My43MTItOTAuNDY2IDEwNS0xMTIgMTEuOTg2LTUuMDMzIDI1LjgzMy03Ljc4MyAzOS0xMSA1LjMyMi0xLjMgMTEuOTY5LjUxOCAxNi0yeiIgZmlsbD0iI0ZGRiIvPjwvc3ZnPg==);
            }
            &.weibo {
              background-image: url(data:image/svg+xml;base64,PHN2ZyBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlLz48L2RlZnM+PHBhdGggZD0iTTAgNTEyYTUxMiA1MTIgMCAxIDAgMTAyNCAwQTUxMiA1MTIgMCAxIDAgMCA1MTJ6IiBmaWxsPSIjRTYyNDI1Ii8+PHBhdGggZD0iTTYwOS40NzIgNTA1LjI4YzU5LjA3MiAxNS4zNiA3OC4wOCA0OC4xOTIgNzYuNzM2IDc4LjA4LTQuMjg4IDk4LjM2OC0xMTIuODk2IDE2Ni40NjQtMjUyLjIyNCAxODIuNjU2QzMxNS4zOTIgNzc5Ljc3NiAxOTQuNjg4IDcyMS43OTIgMTkyIDYwMy4yYy0yLjE3Ni05Ni42NCAxMzMuNjk2LTI3OS44MDggMjQ5LjI4LTI2Mi4yMDggNDguNjQgNy40MjQgMjQuNTc2IDg3Ljg3MiAyNi4zMDQgOTAuNDk2IDIuOTQ0IDQuNTQ0IDkwLjExMi01MC4wNDggMTMwLjY4OC0yMi40IDQyLjQ5NiAyOC45OTIuMTI4IDkzLjMxMiAxMS4yIDk2LjE5MnptLTE4LjgxNiAxMDYuNzUyYzUuNjk2LTY2LjQzMi02Ny44NC0xMjAuMzItMTY0LjM1Mi0xMjAuMzJTMjQ3LjA0IDU0NS42IDI0MS4zNDQgNjEyLjAzMmMtNS42OTYgNjYuNDk2IDY3Ljg0IDEyMC4zODQgMTY0LjI4OCAxMjAuMzg0czE3OS4yNjQtNTMuOTUyIDE4NS4wMjQtMTIwLjM4NHpNNDA4IDUzOS45NjhjNTEuNzEyIDAgOTEuNzEyIDM3LjM3NiA4OS40NzIgODMuNDU2LTIuMzA0IDQ2LjA4LTQ2LjAxNiA4My40NTYtOTcuNzI4IDgzLjQ1Ni01MS43MTIgMC05MS43MTItMzcuMzc2LTg5LjQ3Mi04My40NTYgMi4zMDQtNDYuMDggNDYuMDgtODMuNDU2IDk3LjcyOC04My40NTZ6bS0zMS42OCAxMzAuODhhMjkuNTY4IDI5LjU2OCAwIDAgMCAyOS4zMTItMjkuODg4IDI5LjU2OCAyOS41NjggMCAwIDAtMjkuMzEyLTI5Ljg4OCAyOS41NjggMjkuNTY4IDAgMCAwLTI5LjMxMiAyOS44ODhjMCAxNi41MTIgMTMuMTIgMjkuODg4IDI5LjMxMiAyOS44ODh6TTYxMi4wOTYgMjU2QzY5OC4wNDggMjU2IDc2OCAzMjcuMjMyIDc2OCA0MTQuNzg0YTE2Ny40MjQgMTY3LjQyNCAwIDAgMS03LjY4IDQ5LjQ3MiAxOS41MiAxOS41MiAwIDAgMS0yNC40NDggMTIuNjcyIDE5Ljg0IDE5Ljg0IDAgMCAxLTEyLjQxNi0yNC45NiAxMjAuODMyIDEyMC44MzIgMCAwIDAgNS43Ni0zNy4xODRjMC02NS43MjgtNTIuNTQ0LTExOS4yMzItMTE3LjA1Ni0xMTkuMjMyYTExMy45MiAxMTMuOTIgMCAwIDAtMTkuMjY0IDEuNiAxOS40NTYgMTkuNDU2IDAgMCAxLTIyLjMzNi0xNi4zMiAxOS43MTIgMTkuNzEyIDAgMCAxIDE1LjkzNi0yMi43MiAxNTUuODM2IDE1NS44MzYgMCAwIDEgMjUuNi0yLjExMnptLTEuMDg4IDc3LjU2OGE4Mi41NiA4Mi41NiAwIDAgMSA4MS42NjQgODMuMTM2IDg1LjQ0IDg1LjQ0IDAgMCAxLTQuMDMyIDI1Ljg1NiAxOS41MiAxOS41MiAwIDAgMS0yNC40NDggMTIuNjcyIDE5Ljg0IDE5Ljg0IDAgMCAxLTEyLjQxNi0yNC45NiA0My45NjggNDMuOTY4IDAgMCAwIDIuMTEyLTEzLjYzMiA0My4yNjQgNDMuMjY0IDAgMCAwLTQ5Ljg1Ni00My4wNzIgMTkuMzI4IDE5LjMyOCAwIDAgMS0yMi40LTE2LjE5MiAxOS43NzYgMTkuNzc2IDAgMCAxIDE2LTIyLjcyIDg1LjEyIDg1LjEyIDAgMCAxIDEzLjM3Ni0xLjA4OHoiIGZpbGw9IiNGRkYiLz48L3N2Zz4=);
            }
          }
        }
        .links {
          margin: 40px 0;
          text-align: right;
          > a {
            text-decoration: none;
            color: #08c;
            display: inline-block;
            margin-left: 10px;
            font-size: 14px;
          }
        }
      }
    }
  }
}
</style>
