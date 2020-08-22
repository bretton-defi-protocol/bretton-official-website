import VueI18n from 'vue-i18n'
import Vue from 'vue'

Vue.use(VueI18n)

/*---------使用语言包-----------*/
let browserLang = navigator.language || navigator.userLanguage;
let locale = browserLang.substr(0, 2) == 'zh' ? 'zh-CN' : 'en-US';
if (!localStorage.getItem("lang")) {
    locale = localStorage.setItem("lang", locale);
}


const i18n = new VueI18n({
    locale: localStorage.getItem("lang") || 'zh-CN', // 语言标识
    //this.$i18n.locale // 通过切换locale的值来实现语言切换
    messages: {
        'zh-CN': require('@/common/lang/zh.js'), // 中文语言包
        'en-US': require('@/common/lang/en.js') // 英文语言包
    }
})

export default i18n