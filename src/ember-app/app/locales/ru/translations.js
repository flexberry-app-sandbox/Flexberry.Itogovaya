import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

import IISItogovayaЕдиницыИзмерLForm from './forms/i-i-s-itogovaya-единицы-измер-l';
import IISItogovayaЗаказПостLForm from './forms/i-i-s-itogovaya-заказ-пост-l';
import IISItogovayaКонтрагентыLForm from './forms/i-i-s-itogovaya-контрагенты-l';
import IISItogovayaНоменклатураLForm from './forms/i-i-s-itogovaya-номенклатура-l';
import IISItogovayaОрганизацииLForm from './forms/i-i-s-itogovaya-организации-l';
import IISItogovayaОтчетОЗакLForm from './forms/i-i-s-itogovaya-отчет-о-зак-l';
import IISItogovayaПланЗакупокLForm from './forms/i-i-s-itogovaya-план-закупок-l';
import IISItogovayaСкладыLForm from './forms/i-i-s-itogovaya-склады-l';
import IISItogovayaЕдиницыИзмерEForm from './forms/i-i-s-itogovaya-единицы-измер-e';
import IISItogovayaЗаказПостEForm from './forms/i-i-s-itogovaya-заказ-пост-e';
import IISItogovayaКонтрагентыEForm from './forms/i-i-s-itogovaya-контрагенты-e';
import IISItogovayaНоменклатураEForm from './forms/i-i-s-itogovaya-номенклатура-e';
import IISItogovayaОрганизацииEForm from './forms/i-i-s-itogovaya-организации-e';
import IISItogovayaОтчетОЗакEForm from './forms/i-i-s-itogovaya-отчет-о-зак-e';
import IISItogovayaПланЗакупокEForm from './forms/i-i-s-itogovaya-план-закупок-e';
import IISItogovayaСкладыEForm from './forms/i-i-s-itogovaya-склады-e';
import IISItogovayaЕдиницыИзмерModel from './models/i-i-s-itogovaya-единицы-измер';
import IISItogovayaЗаказПостModel from './models/i-i-s-itogovaya-заказ-пост';
import IISItogovayaКонтрагентыModel from './models/i-i-s-itogovaya-контрагенты';
import IISItogovayaНоменклатураModel from './models/i-i-s-itogovaya-номенклатура';
import IISItogovayaОрганизацииModel from './models/i-i-s-itogovaya-организации';
import IISItogovayaОтчетОЗакModel from './models/i-i-s-itogovaya-отчет-о-зак';
import IISItogovayaПланЗакупокModel from './models/i-i-s-itogovaya-план-закупок';
import IISItogovayaПланModel from './models/i-i-s-itogovaya-план';
import IISItogovayaСкладыModel from './models/i-i-s-itogovaya-склады';
import IISItogovayaТЧЗаказModel from './models/i-i-s-itogovaya-т-ч-заказ';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-itogovaya-единицы-измер': IISItogovayaЕдиницыИзмерModel,
    'i-i-s-itogovaya-заказ-пост': IISItogovayaЗаказПостModel,
    'i-i-s-itogovaya-контрагенты': IISItogovayaКонтрагентыModel,
    'i-i-s-itogovaya-номенклатура': IISItogovayaНоменклатураModel,
    'i-i-s-itogovaya-организации': IISItogovayaОрганизацииModel,
    'i-i-s-itogovaya-отчет-о-зак': IISItogovayaОтчетОЗакModel,
    'i-i-s-itogovaya-план-закупок': IISItogovayaПланЗакупокModel,
    'i-i-s-itogovaya-план': IISItogovayaПланModel,
    'i-i-s-itogovaya-склады': IISItogovayaСкладыModel,
    'i-i-s-itogovaya-т-ч-заказ': IISItogovayaТЧЗаказModel
  },

  'application-name': 'Avtomatizaciya_zakupok_gotovaya',

  forms: {
    loading: {
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'Avtomatizaciya_zakupok_gotovaya',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Avtomatizaciya_zakupok_gotovaya',
          title: 'Avtomatizaciya_zakupok_gotovaya'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
          title: ''
        },
        'автоматизация-закупок': {
          caption: 'Автоматизация закупок',
          title: 'Автоматизация закупок',
          справочник: {
            caption: 'Справочник',
            title: 'Справочник',
            'i-i-s-itogovaya-номенклатура-l': {
              caption: 'Номенклатура',
              title: ''
            },
            'i-i-s-itogovaya-организации-l': {
              caption: 'Организации',
              title: ''
            },
            'i-i-s-itogovaya-контрагенты-l': {
              caption: 'Контрагенты',
              title: ''
            },
            'i-i-s-itogovaya-склады-l': {
              caption: 'Склады',
              title: ''
            },
            'i-i-s-itogovaya-единицы-измер-l': {
              caption: 'Единицы измерения',
              title: ''
            }
          },
          документы: {
            caption: 'Документы',
            title: 'Документы',
            'i-i-s-itogovaya-заказ-пост-l': {
              caption: 'Заказ поставщику',
              title: ''
            },
            'i-i-s-itogovaya-план-закупок-l': {
              caption: 'План закупок',
              title: ''
            }
          },
          отчеты: {
            caption: 'Отчеты',
            title: 'Отчеты',
            'i-i-s-itogovaya-отчет-о-зак-l': {
              caption: 'Отчет о закупках',
              title: ''
            }
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
    },
    'i-i-s-itogovaya-единицы-измер-l': IISItogovayaЕдиницыИзмерLForm,
    'i-i-s-itogovaya-заказ-пост-l': IISItogovayaЗаказПостLForm,
    'i-i-s-itogovaya-контрагенты-l': IISItogovayaКонтрагентыLForm,
    'i-i-s-itogovaya-номенклатура-l': IISItogovayaНоменклатураLForm,
    'i-i-s-itogovaya-организации-l': IISItogovayaОрганизацииLForm,
    'i-i-s-itogovaya-отчет-о-зак-l': IISItogovayaОтчетОЗакLForm,
    'i-i-s-itogovaya-план-закупок-l': IISItogovayaПланЗакупокLForm,
    'i-i-s-itogovaya-склады-l': IISItogovayaСкладыLForm,
    'i-i-s-itogovaya-единицы-измер-e': IISItogovayaЕдиницыИзмерEForm,
    'i-i-s-itogovaya-заказ-пост-e': IISItogovayaЗаказПостEForm,
    'i-i-s-itogovaya-контрагенты-e': IISItogovayaКонтрагентыEForm,
    'i-i-s-itogovaya-номенклатура-e': IISItogovayaНоменклатураEForm,
    'i-i-s-itogovaya-организации-e': IISItogovayaОрганизацииEForm,
    'i-i-s-itogovaya-отчет-о-зак-e': IISItogovayaОтчетОЗакEForm,
    'i-i-s-itogovaya-план-закупок-e': IISItogovayaПланЗакупокEForm,
    'i-i-s-itogovaya-склады-e': IISItogovayaСкладыEForm
  },

});

export default translations;
