<template>
  <v-container class="fill-height">
    <v-responsive class="align-centerfill-height mx-auto" max-width="900">
      <v-img class="mb-4" height="150" src="@/assets/logo/logo_api.png" />

      <div class="text-center">
        <h1 class="text-h2 font-weight-bold">Welcome</h1>
      </div>

      <div class="py-4" />

      <v-row>
        <v-col cols="12">
          <v-card class="px-5 py-5" rounded="lg">
            <h2 class="text-h3 font-weight-bold mb-2 text-center">Project Requirements</h2>
            <v-list>
              <div class="text-subtitle-1">
                <div class="text-h3 text-blue mb-3">General principles:</div>

                <v-list-item-title class="text-wrap">
                  Modern mobile-friendly website with minimalistic design, no need for fancy
                  animation and effects. No need to overcomplicate the website, there is no shop
                  (yet) and backend is not hooked up
                </v-list-item-title>

                <v-list-item-title class="text-wrap">
                  Mix of blue and gray colors should prevail (consistent with the logo). I guess
                  darker background looks better, but I would not argue
                </v-list-item-title>
                <v-list-item-title>No extra paid packages should be used</v-list-item-title>
                <v-list-item-title>
                  Repository is already integrated with Vercel
                </v-list-item-title>
                <v-list-item-title> Please try to keep the following stack: </v-list-item-title>
                <v-list-item-subtitle>- Vue 3 Composition API (script setup)</v-list-item-subtitle>
                <v-list-item-subtitle>- Vuetify</v-list-item-subtitle>
                <v-list-item-subtitle>- Pinia if store management needed</v-list-item-subtitle>

                <div class="text-h3 text-blue my-3">Navigation [on top only]:</div>
                <v-list-item-title> Home - your choice</v-list-item-title>
                <v-list-item-title>
                  Products - no need for a price photo/short description card - clickable
                </v-list-item-title>
                <v-list-item-title> About Us</v-list-item-title>
                <div class="ml-2">
                  <v-list-item-subtitle>Team</v-list-item-subtitle>
                  <v-list-item-subtitle>History</v-list-item-subtitle>
                  <v-list-item-subtitle>Gallery</v-list-item-subtitle>
                </div>

                <v-list-item-title> Contact us </v-list-item-title>
              </div>

              <div class="text-h3 text-blue my-3">Other requirements:</div>
              <v-list-item-title>
                Multiple languages support [e.g. Uzbek, English, Russian, neighbour's languages]
              </v-list-item-title>
              <v-list-item-title class="text-wrap">
                Admin functionality would be a plus, so there would be no need to hardcode info and
                upload/update photos
              </v-list-item-title>

              <div class="text-h3 text-blue my-3">Useful info:</div>

              <v-list-item-title> Company logos are located in src/assets/logo </v-list-item-title>
              <v-list-item-title> FYI: Font in the logo's text is Montserrat </v-list-item-title>
              <v-list-item-title class="text-wrap">
                Photos will be provided and text for about us will be provided later. For now any
                dummy text and photos can be used
              </v-list-item-title>
            </v-list>

            <v-overlay opacity=".12" scrim="primary" contained model-value persistent />
          </v-card>
        </v-col>

        <v-col cols="12">
          <v-card
            append-icon="mdi-open-in-new"
            class="py-4"
            color="surface-variant"
            href="https://github.com/Angren-Power-Insulators/api_website"
            prepend-icon="mdi-github"
            rel="noopener noreferrer"
            rounded="lg"
            subtitle="Feel free to explore"
            target="_blank"
            title="Go to the repo"
            variant="text"
          >
            <v-overlay opacity=".06" scrim="primary" contained model-value persistent />
          </v-card>

          <v-card
            append-icon="mdi-open-in-new"
            class="py-4"
            color="surface-variant"
            href="https://vuetifyjs.com/"
            prepend-icon="mdi-text-box-outline"
            rel="noopener noreferrer"
            rounded="lg"
            subtitle="Learn about all things Vuetify in our documentation."
            target="_blank"
            title="Vuetify Documentation"
            variant="text"
          >
            <v-overlay opacity=".06" scrim="primary" contained model-value persistent />
          </v-card>
        </v-col>
      </v-row>
    </v-responsive>
  </v-container>
</template>

<script setup>
//
</script>
