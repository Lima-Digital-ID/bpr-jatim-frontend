import Vue from 'vue'
import VueI18n from 'vue-i18n'
import id from '@/lang/id.json'
import en from '@/lang/en.json'

Vue.use(VueI18n)

export const i18n = new VueI18n({
    locale : localStorage.getItem('lang') || 'id',
    fallbackLocale : 'en',
    messages : {
        id:id,
        en:en
    }
})
