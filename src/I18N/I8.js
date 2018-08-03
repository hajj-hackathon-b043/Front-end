const locale = {
  profileMedical: {
    en: 'Medical Center',
    ar: 'مركز صحي'
  },
  profileCamp: {
    en: 'Camp',
    ar: 'السكن'
  },
  profileWC: {
    en: 'W.C',
    ar: 'دورات مياة'
  },
  profileFood: {
    en: 'Food',
    ar: 'غذاء'
  },
  modalFAQ: {
    en: 'FAQs',
    ar: 'الأسئلة الشائعه'
  },
  FAQsone: {
    en: 'are you lost ?',
    ar: 'هل انت ضائع ؟'
  },
  FAQstwo: {
    en: 'are you fine ?',
    ar: 'هل انت بخير ؟'
  }
};

const translate = (locale, text) => {
  const lang = localStorage.getItem('lang') || 'en';
  return locale[text][lang];
};

export default translate;
