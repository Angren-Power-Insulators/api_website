<template>
  <v-container class="fill-height">
    <v-responsive class="align-centerfill-height mx-auto" max-width="900">
      <v-img class="mb-4" height="150" src="@/assets/logo/logo_api_icon.png" />

      <div class="text-center">
        <div class="text-body-2 font-weight-light mb-n1">Welcome to</div>

        <h1 class="text-h2 font-weight-bold">Angren Power Insulators</h1>
      </div>

      <div class="py-4" />

      <v-row>
        <v-col cols="12">
          <v-card class="py-5" color="surface-variant" rounded="lg" variant="outlined">
            <template #title>
              <h2 class="text-h3 font-weight-bold mb-2">Project Requirements</h2>
            </template>
            <template #subtitle>
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

                <div class="text-h3 text-blue my-3">Navigation:</div>
                <v-list-item-title> Home </v-list-item-title>
                <v-list-item-title>Products </v-list-item-title>
                <v-list-item-title> About Us</v-list-item-title>
                <v-list-item-subtitle>Team</v-list-item-subtitle>
                <v-list-item-subtitle>History</v-list-item-subtitle>
                <v-list-item-subtitle>Gallery</v-list-item-subtitle>
                <v-list-item-title> Contact us </v-list-item-title>
              </div>

              <div class="text-h3 text-blue my-3">Other requirements:</div>
              <v-list-item-title>Multiple languages support</v-list-item-title>
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
            </template>

            <v-overlay opacity=".12" scrim="primary" contained model-value persistent />
          </v-card>
        </v-col>

        <v-col cols="6">
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
            title="Documentation"
            variant="text"
          >
            <v-overlay opacity=".06" scrim="primary" contained model-value persistent />
          </v-card>
        </v-col>

        <v-col cols="6">
          <v-card
            append-icon="mdi-open-in-new"
            class="py-4"
            color="surface-variant"
            href="https://vuetifyjs.com/introduction/why-vuetify/#feature-guides"
            prepend-icon="mdi-star-circle-outline"
            rel="noopener noreferrer"
            rounded="lg"
            subtitle="Explore available framework Features."
            target="_blank"
            title="Features"
            variant="text"
          >
            <v-overlay opacity=".06" scrim="primary" contained model-value persistent />
          </v-card>
        </v-col>

        <v-col cols="6">
          <v-card
            append-icon="mdi-open-in-new"
            class="py-4"
            color="surface-variant"
            href="https://vuetifyjs.com/components/all"
            prepend-icon="mdi-widgets-outline"
            rel="noopener noreferrer"
            rounded="lg"
            subtitle="Discover components in the API Explorer."
            target="_blank"
            title="Components"
            variant="text"
          >
            <v-overlay opacity=".06" scrim="primary" contained model-value persistent />
          </v-card>
        </v-col>

        <v-col cols="6">
          <v-card
            append-icon="mdi-open-in-new"
            class="py-4"
            color="surface-variant"
            href="https://discord.vuetifyjs.com"
            prepend-icon="mdi-account-group-outline"
            rel="noopener noreferrer"
            rounded="lg"
            subtitle="Connect with Vuetify developers."
            target="_blank"
            title="Community"
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
