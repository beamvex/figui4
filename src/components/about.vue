<template>
    <v-dialog
      v-model="dialog"
      max-width="380px"
    >
      <v-card >
          <v-img  
          src="/logo.png"
          aspect-ratio="2.75"
        ></v-img>
        <v-card-title class="headline">Football Index Chart Tool (alpha 4)</v-card-title>

        <v-card-text>
            This is not an offical tool.
          &copy; 2019 Beamvex ltd.
          &copy; 2019 Football index (data)
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>

          

          <v-btn
            color="green darken-1"
            flat="flat"
            @click="dialog = false"
          >
            Okay
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
</template>

<script>
  export default {
      computed: {
        dialog: {
            get() {
                return this.$store.state.dialog;
            },
            set(newValue) {
                this.$store.dispatch('dialogSet', {newValue: newValue});
            }
        },
      },
  }
  
</script>

<style>

</style>
