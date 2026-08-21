<template>
  <v-footer class="footer" color="#0A2456">
    <v-container class="py-10 py-md-14">
      <v-row>
        <!-- Brand -->
        <v-col cols="12" md="4">
          <div class="d-flex align-center mb-3">
            <v-img
              alt="Angren Power Insulators"
              src="@/assets/logo/logo_api_icon.png"
              height="34"
              width="34"
              class="mr-2 flex-0-1-auto"
            />
            <span class="text-h6 font-weight-bold text-white">Angren Power Insulators</span>
          </div>
          <p class="text-body-2 footer-muted mb-4">
            {{ t('home.description') }}
          </p>

          <div class="d-flex ga-2">
            <v-btn
              v-for="item in socials"
              :key="item.title"
              :href="item.href"
              :title="item.title"
              icon
              rel="noopener noreferrer"
              size="small"
              target="_blank"
              variant="tonal"
              color="white"
            >
              <v-icon :icon="item.icon" size="20" />
            </v-btn>
          </div>
        </v-col>

        <!-- Quick links -->
        <v-col cols="6" md="2">
          <div class="text-overline footer-heading mb-3">{{ t('footer.menu') }}</div>
          <v-list bg-color="transparent" class="pa-0" density="compact">
            <v-list-item class="px-0 footer-link" exact :title="t('nav.home')" :to="lp('/')" />
            <v-list-item class="px-0 footer-link" :title="t('nav.catalogue')" :to="lp('/catalogue')" />
            <v-list-item class="px-0 footer-link" :title="t('nav.about')" :to="lp('/about')" />
            <v-list-item class="px-0 footer-link" :title="t('nav.contacts')" :to="lp('/contacts')" />
          </v-list>
        </v-col>

        <!-- Contact -->
        <v-col cols="6" md="3">
          <div class="text-overline footer-heading mb-3">{{ t('contacts.title') }}</div>

          <a class="d-flex align-center footer-link text-body-2 mb-3" :href="`tel:${PHONE_TEL}`">
            <v-icon class="mr-2" size="18">mdi-phone</v-icon>
            {{ PHONE_DISPLAY }}
          </a>

          <a class="d-flex align-center footer-link text-body-2 mb-3" :href="`mailto:${EMAIL}`">
            <v-icon class="mr-2" size="18">mdi-email-outline</v-icon>
            {{ EMAIL }}
          </a>

          <div class="d-flex footer-link text-body-2">
            <v-icon class="mr-2 mt-1" size="18">mdi-map-marker-outline</v-icon>
            <span>{{ t('contacts.address') }}</span>
          </div>
        </v-col>

        <!-- CTA -->
        <v-col cols="12" md="3">
          <div class="text-overline footer-heading mb-3">{{ t('contacts.hoursLabel') }}</div>
          <p class="text-body-2 footer-muted mb-4">{{ t('contacts.hours') }}</p>
          <v-btn
            color="white"
            :href="WHATSAPP_URL"
            prepend-icon="mdi-whatsapp"
            rel="noopener noreferrer"
            target="_blank"
            variant="flat"
          >
            {{ t('contacts.whatsapp') }}
          </v-btn>
        </v-col>
      </v-row>

      <v-divider class="my-6 footer-divider" />

      <div class="d-flex flex-column flex-sm-row align-center justify-space-between ga-2">
        <span class="text-caption footer-muted">
          &copy; {{ new Date().getFullYear() }} Angren Power Insulators. {{ t('footer.rights') }}
        </span>
        <LanguageSwitcher class="footer-lang" />
      </div>
    </v-container>
  </v-footer>
</template>


<script setup>
import { useI18n } from 'vue-i18n'
import { useLocalePath } from '@/composables/useLocalePath'
import { PHONE_TEL, PHONE_DISPLAY, EMAIL, WHATSAPP_URL, TELEGRAM_URL, INSTAGRAM_URL } from '@/constants'

const { t } = useI18n()
const lp = useLocalePath()

const socials = [
  { title: 'Whatsapp', icon: 'mdi-whatsapp', href: WHATSAPP_URL },
  { title: 'Telegram', icon: 'mdi-send', href: TELEGRAM_URL },
  { title: 'Instagram', icon: 'mdi-instagram', href: INSTAGRAM_URL },
]
</script>

<style scoped>
.footer-muted {
  color: rgba(255, 255, 255, 0.65);
}
.footer-heading {
  color: rgba(255, 255, 255, 0.85);
  letter-spacing: 0.08em;
}
.footer-link {
  color: rgba(255, 255, 255, 0.78) !important;
  text-decoration: none;
  transition: color 0.15s ease;
}
.footer-link:hover {
  color: #ffffff !important;
}
.footer-divider {
  border-color: rgba(255, 255, 255, 0.12) !important;
}
.footer-lang :deep(.v-field__input),
.footer-lang :deep(.v-icon),
.footer-lang :deep(input) {
  color: rgba(255, 255, 255, 0.85) !important;
}
:deep(.v-list-item-title) {
  font-size: 0.875rem;
}
</style>
