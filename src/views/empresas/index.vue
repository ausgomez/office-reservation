<template>
  <div>
    <v-data-table
      :search="search"
      :headers="headers"
      :items="empresas"
      sort-by="client_id"
      class="elevation-1"
    >
      <template v-slot:top>
        <v-toolbar flat color="white">
          <v-toolbar-title>Empresas</v-toolbar-title>
          <v-divider class="mx-4" inset vertical></v-divider>
          <v-spacer></v-spacer>
          <v-dialog v-model="dialog" max-width="500px">
            <template v-slot:activator="{ on }">
              <v-btn color="primary" dark class="mb-2" v-on="on">
                New Item
              </v-btn>
            </template>
            <v-card>
              <v-card-title>
                <span class="headline">{{ "formTitle" }}</span>
              </v-card-title>

              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" text @click="close">Cancel</v-btn>
                <v-btn color="blue darken-1" text @click="save">Save</v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-toolbar>
      </template>
      <template v-slot:item.actions="{ item }">
        <v-btn small class="ma-2" color="blue" dark @click="viewItem(item)">
          View
        </v-btn>
        <v-btn small class="ma-2" color="orange" dark @click="editItem(item)">
          Edit
        </v-btn>
      </template>
    </v-data-table>
  </div>
</template>

<script>
import db from "@/firebase/init.js";

export default {
  name: "EmpresasIndex",
  data: () => ({
    search: "",
    dialog: false,
    headers: [
      { text: "ID", value: "id" },
      { text: "Nombre", value: "nombre" },
      { text: "Actions", value: "actions", sortable: false },
    ],
    empresas: [],
  }),
  async created() {
    db.collection("empresas")
      .get()
      .then((snapshot) =>
        snapshot.forEach((doc) => this.empresas.push(doc.data()))
      );
  },
  methods: {
    viewItem(item) {
      this.$router.push({
        name: "ShowEmpresa",
        params: { empresa_id: item.id },
      });
    },
  },
};
</script>

<style></style>
