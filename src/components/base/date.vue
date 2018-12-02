<template>
  <div class="datetime-picker" :style="{width:width}">
    <input
      type="text"
      @click="show = !show"
      :readonly="readonly"
      v-model="localtime"
      >
    <div class="picker-wrap" v-show="show">
      <table>
        <thead>
          <tr class="date-head">
            <th colspan="4">
              <span class="btn-prev" @click="yearClick(-1)"><</span>
              <span class="show-year">{{now.getFullYear()}}</span>
              <span class="btn-next" @click="yearClick(+1)">></span>
            </th>
            <th colspan="3">
              <span class="btn-prev" @click="monthClick(-1)"><</span>
              <span class="show-month">{{months[now.getMonth()]}}</span>
              <span class="btn-next" @click="monthClick(+1)">></span>
            </th>
          </tr>
          <tr class="date-days">
            <th v-for="day in days">{{day}}</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="i in 6">
            <td v-for="j in 7"
                :class="date[i * 7 + j] && date[i * 7 + j].status"
                :date="date[i * 7 + j] && date[i * 7 + j].date"
                @click="pickDate(i * 7 + j)">{{date[i * 7 + j] && date[i * 7 + j].text}}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
    export default {
      name: "date",
      props:{
        width: { type: String, default: '238px' },
        readonly: { type: Boolean, default: false },
        format: { type: String, default: 'YYYY-MM-DD' },
        //父组件的变量未传递
        styleObj:{type:Object,default:null},
        value:''
      },
      data(){
        return {
          show:false,
          days: ['Sun', 'Mon', 'Tue', 'Wen', 'Thu', 'Fri', 'Sat'],
          months: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
          date: [],
          localtime:this.value,
          now: new Date()
        }
      },
      watch: {
        now () {
          this.update();
        },
        show () {
          this.update();
        }
      },
      methods: {
        close () {
          this.show = false;
        },
        update () {
          var arr = [];
          var time = new Date(this.now);
          time.setMonth(time.getMonth(), 1);           // the first day
          var curFirstDay = time.getDay();
          curFirstDay === 0 && (curFirstDay = 7);
          time.setDate(0);                             // the last day
          var lastDayCount = time.getDate();
          for (let i = curFirstDay; i > 0; i--) {
            arr.push({
              text: lastDayCount - i + 1,
              time: new Date(time.getFullYear(), time.getMonth(), lastDayCount - i + 1),
              status: 'date-pass'
            });
          }

          time.setMonth(time.getMonth() + 2, 0);       // the last day of this month
          var curDayCount = time.getDate();
          time.setDate(1);                             // fix bug when month change
          var value = this.localtime || this.stringify(new Date());
          for (let i = 0; i < curDayCount; i++) {
            let tmpTime = new Date(time.getFullYear(), time.getMonth(), i + 1);
            let status = '';
            this.stringify(tmpTime) === value && (status = 'date-active');
            arr.push({
              text: i + 1,
              time: tmpTime,
              status: status
            });
          }

          var j = 1;
          while (arr.length < 42) {
            arr.push({
              text: j,
              time: new Date(time.getFullYear(), time.getMonth() + 1, j),
              status: 'date-future'
            });
            j++;
          }
          this.date = arr;
        },
        yearClick (flag) {
          this.now.setFullYear(this.now.getFullYear() + flag);
          this.now = new Date(this.now);
        },
        monthClick (flag) {
          this.now.setMonth(this.now.getMonth() + flag);
          this.now = new Date(this.now);
        },
        pickDate (index) {
          this.show = false;
          this.now = new Date(this.date[index].time);
          this.localtime = this.stringify();
          // console.log(this.localtime)
          //change事件将数据传递给父组件
          this.$emit('change',this.localtime)
        },
        parse (str) {
          var time = new Date(str);
          return isNaN(time.getTime()) ? null : time;
        },
        stringify (time = this.now, format = this.format) {
          var year = time.getFullYear();
          var month = time.getMonth() + 1;
          var date = time.getDate();
          var monthName = this.months[time.getMonth()];

          var map = {
            YYYY: year,
            MMM: monthName,
            MM: ('0' + month).slice(-2),
            M: month,
            DD: ('0' + date).slice(-2),
            D: date
          };
          return format.replace(/Y+|M+|D+/g, function (str) {
            return map[str];
          });
        },
        leave (e) {
          if (!this.$el.contains(e.target)) {
            this.close();
          }
        }
      },
      ready () {
        this.now = this.parse(this.localtime) || new Date();
        document.addEventListener('click', this.leave, false);
      }
    }
</script>

<style lang="scss" scoped>
  .datetime-picker{
    display: inline-block;
    position:relative;
    color: #333;
    -webkit-font-smoothing: antialiased;
    font-family:"Segoe UI","Lucida Grande",Helvetica,Arial,"Microsoft YaHei";
    *{
      box-sizing: border-box;
    }
    input{
      width:100%;
      padding:5px 10px;
      height:30px;
      outline:none;
      border:1px solid #ccc;
    }
    .picker-wrap{
      position: absolute;
      z-index: 1000;
      width: 238px;
      height: 280px;
      margin-top: 2px;
      background-color: #fff;
      box-shadow: 0 0 6px #ccc;
      table{
        width: 100%;
        border-collapse: collapse;
        border-spacing: 0;
        text-align: center;
        font-size: 13px;
        tr{
          height: 34px;
          border: 0 none;
          th,td{
            user-select: none;
            width: 34px;
            height: 34px;
            padding: 0;
            border: 0 none;
            line-height: 34px;
            text-align: center;
          }
          td{
            cursor: pointer;
          }
        }
        .date-head{
          background:#3bb4f2;
          text-align: center;
          color:#fff;
          font-size:14px;
          .show-year{
            min-width:62px;
            vertical-align: middle;
          }
          .show-month{
            min-width:28px;
            vertical-align: middle;
          }
          .btn-prev,.btn-next{
            padding:0 10px;
            vertical-align: middle;
            cursor: pointer;
          }
        }
        .date-days{
          background: white;
          color: #3bb4f2;
          vertical-align: middle;
        }
      }
    }
  }
</style>
