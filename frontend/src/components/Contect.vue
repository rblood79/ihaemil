<template>
  <v-container fill-height fluid>
    <div class="header">
      <h3 class="headline secondary--text" v-if="title">{{title}}</h3>
      <h4 class="caption white--text" v-if="titleSub">{{titleSub}}</h4>
    </div>
    <div class="contents">
      <v-form ref="form" v-model="valid" lazy-validation>
        <div class="v-input-group">
          <!--<input type="text" class="v-input" placeholder="email">
          <input type="text" class="v-input" placeholder="catagory">-->
          <v-text-field
            v-model="email"
            :rules="emailRules"
            label="E-mail"
            required
            append-icon="close"
          ></v-text-field>

          <v-select
            v-model="select"
            :items="items"
            :rules="[v => !!v || 'Item is required']"
            label="문의 종류"
            required
          ></v-select>
        </div>
        <!--<textarea type="text" class="v-input" placeholder="contents"></textarea>-->
        <v-textarea class="textarea" name="comment" label="내용" placeholder="" hint></v-textarea>
        <v-btn color="accent" depressed @click="reset">보내기</v-btn>
      </v-form>
    </div>
  </v-container>
</template>
<script>
// import store from "../store";
export default {
  data () {
    return {
      // inHeight: this.$store.state.inHeight,
      valid: true,
      title: '문의와 견적',
      titleSub: 'Easy From design to operation',
      article: '',
      name: '',
      nameRules: [
        v => !!v || 'Name is required',
        v => (v && v.length <= 10) || 'Name must be less than 10 characters'
      ],
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+/.test(v) || 'E-mail must be valid'
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
    reset () {
      this.$refs.form.reset()
    }
    /* resetValidation() {
      this.$refs.form.resetValidation();
    } */
  }
}
</script>

<style lang="scss">
.theme--light.v-label {
  color: #03a9f4 !important;
}
.theme--light.v-input:not(.v-input--is-disabled) input,
.theme--light.v-input:not(.v-input--is-disabled) textarea {
  color: rgba(255, 255, 255, 0.87);
}
.theme--light.v-icon {
  color: rgba(255, 255, 255, 0.54);
}

.theme--light.v-input:not(.v-input--is-disabled) input,
.theme--light.v-input:not(.v-input--is-disabled) textarea,
.theme--light.v-select .v-select__selections {
  color: #fff !important;
}

.v-text-field > .v-input__control > .v-input__slot > .v-text-field__slot {
  flex-direction: column;
}
.v-textarea {
  .theme--light.v-label {
    top: 0;
    display: flex;
    align-items: center;
    transform: translateY(0px) scale(1);
    position: relative !important;
  }
}
textarea::placeholder {
  color: red !important;
  font-family: "Noto Sans Light", sans-serif !important;
}
/*@media (max-width: 750px) {
  ul {
    margin-top: 0;
  }
}*/
</style>
