<template>
  <v-container fill-height fluid>
    <div class="header">
      <h3 class="headline secondary--text" v-if="title">{{title}}</h3>
      <h4 class="caption white--text" v-if="titleSub">{{titleSub}}</h4>
    </div>
    <div class="contents">
      <!--<div class="v-form">
        <div class="testA">aa</div>
        <div class="testB">bb</div>
        <v-btn class="testC" color="accent" depressed @click="reset">보내기</v-btn>
      </div>-->
      <v-form ref="form" v-model="valid" lazy-validation>
        <div class="v-input-group">
          <!--<v-text-field
            v-model="email"
            :rules="emailRules"
            label="E-mail"
            required
            append-icon="close"
          ></v-text-field>-->

          <v-text-field v-model="user" :rules="nameRules" label="연락처" required append-icon="close"></v-text-field>
          <v-text-field v-model="company" label="회사명" required append-icon="close"></v-text-field>

          <!--<v-select
            v-model="select"
            :items="items"
            :rules="[v => !!v || 'Item is required']"
            label="분류"
            required
          ></v-select>-->
        </div>

        <v-textarea
          class="textarea"
          name="comment"
          v-model="comment"
          :rules="commentRules"
          label="내용"
          placeholder
          hide-details
          no-resize
          height="100%"
        ></v-textarea>
        <!--<div class="v-textarea">
          <div class="v-input__control">aa</div>
        </div>-->

        <v-btn color="accent" depressed @click="fn_send">보내기</v-btn>
      </v-form>
    </div>
  </v-container>
</template>
<script>
import config from '../config'
export default {
  created () {
    const baseURI = 'http://localhost:3000/api/contact'
    /* this.$http.get(`${baseURI}/contact`).then(result => {
      this.itemList = result.data;
    }); */
  },
  data () {
    return {
      // inHeight: this.$store.state.inHeight,
      valid: true,
      title: '문의하기',
      titleSub: '견적 및 제품 문의해주세요',
      article: '',
      comment: '',
      contact: '',
      user: '',
      name: '',
      nameRules: [
        v => !!v || 'User is required',
        v => (v && v.length >= 0) || 'User must be less than 0 characters'
      ],
      commentRules: [
        v => !!v || 'comment is required',
        v => (v && v.length >= 0) || 'comment must be less than 0 characters'
      ],
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+/.test(v) || 'E-mail must be valid'
      ],
      company: '',
      companyRules: [
        v => !!v || 'Company Name is required',
        v => (v && v.length <= 10) || 'Name must be less than 0 characters'
      ],
      select: null,
      items: [
        '시스템 개발',
        '시스템 컨설팅',
        '프로그램 제작',
        'A Report',
        'C Builder',
        'X Studio'
      ],
      checkbox: false
    }
  },
  mounted () {
    // console.log(this.$store.state.isMobile)
  },
  methods: {
    validate () {
      if (this.$refs.form.validate()) {
        this.snackbar = true
      }
    },
    fn_reset () {
      this.$refs.form.reset()
    },
    fn_send () {
      if (this.$refs.form.validate()) {
        this.$http
          .post(config.appApi + '/api/contact/add', {
            USER: this.user,
            COMPANY: this.company,
            ARTICLE: this.comment,
            CATAGORY: this.select
          })
          .then(function (response) {
            // console.log(response);
            alert('전송완료')
          })
          .catch(function (error) {
            console.log(error)
          })
        this.fn_reset()
      }
    }
    /* resetValidation() {
      this.$refs.form.resetValidation();
    } */
  }
}
</script>

<style lang="scss">
.v-form {
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
  width: 100%;
  height: 100%;
  .v-btn {
    min-width: 140px;
  }
}
.v-input-group {
  .v-icon {
    color: rgba(255, 255, 255, 0.54) !important;
  }
}
.v-label {
  color: #03a9f4 !important;
}
.v-input:not(.v-input--is-disabled) input,
.v-input:not(.v-input--is-disabled) textarea {
  color: rgba(255, 255, 255, 0.87);
}

.v-input:not(.v-input--is-disabled) input,
.v-input:not(.v-input--is-disabled) textarea,
.v-select .v-select__selections {
  color: #fff !important;
}

.v-text-field > .v-input__control > .v-input__slot > .v-text-field__slot {
  flex-direction: column;
}
.v-textarea {
  position: relative;
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
  .v-input__control {
    border: 0px solid #f0f;
    flex: 1 1 auto;
    height: 100%;
    min-height: 100%;
    .v-input__slot {
      padding: 0 !important;
      align-items: self-start;
      flex-direction: row;
      display: flex;
      height: 100%;
      .v-text-field__slot {
        border: 0px solid #0f0;
        height: 100%;
        margin: 0 !important;
        .v-label {
          min-height: 32px;
          top: 0;
          display: flex;
          align-items: center;
          transform: translateY(0px) scale(1);
          position: relative !important;
        }
        textarea {
          border: 0px solid #0277bd;
        }
        textarea::placeholder {
          color: red !important;
          font-family: "Noto Sans Light", sans-serif !important;
        }
      }
    }
  }
}

/*@media (max-width: 750px) {
  ul {
    margin-top: 0;
  }
}*/
</style>
