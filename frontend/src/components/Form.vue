<template>
  <v-container fluid pa-r>
    <v-layout row wrap>
      <v-flex xs12>
        <h3 class="headline white--text">contact us</h3>
        <h4 class="caption">Build your application today!</h4>
        <p>Wanted for Nothing was started by global entrepreneurs in Los Angeles who saw a lack of industry insights offered by traditional web design agencies. As our name suggests, we have everything your business would need to thrive in the digital front.</p>
      </v-flex>

      <v-flex xs12>
        <v-form ref="form" v-model="valid" lazy-validation>
          <v-text-field v-model="name" :counter="10" :rules="nameRules" label="Name" required></v-text-field>

          <v-text-field v-model="email" :rules="emailRules" label="E-mail" required></v-text-field>

          <v-select
            v-model="select"
            :items="items"
            :rules="[v => !!v || 'Item is required']"
            label="Item"
            required
          ></v-select>

          <v-checkbox
            v-model="checkbox"
            :rules="[v => !!v || 'You must agree to continue!']"
            label="Do you agree?"
            required
          ></v-checkbox>

          <!--<v-btn :disabled="!valid" color="primary" @click="validate">Validate</v-btn>-->
          <v-btn depressed class="mx-0" color="frimary" @click="reset">submit</v-btn>

        </v-form>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
export default {
  data: () => ({
    valid: true,
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
    items: ['Item 1', 'Item 2', 'Item 3', 'Item 4'],
    checkbox: false
  }),

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
