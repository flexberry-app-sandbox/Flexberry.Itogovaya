import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  датаНачала: DS.attr('date', { defaultValue() { return new Date(); } }),
  номер: DS.attr('number'),
  организации: DS.belongsTo('i-i-s-itogovaya-организации', { inverse: null, async: false }),
  склады: DS.belongsTo('i-i-s-itogovaya-склады', { inverse: null, async: false }),
  план: DS.hasMany('i-i-s-itogovaya-план', { inverse: 'планЗакупок', async: false })
});

export let ValidationRules = {
  датаНачала: {
    descriptionKey: 'models.i-i-s-itogovaya-план-закупок.validations.датаНачала.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  номер: {
    descriptionKey: 'models.i-i-s-itogovaya-план-закупок.validations.номер.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  организации: {
    descriptionKey: 'models.i-i-s-itogovaya-план-закупок.validations.организации.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  склады: {
    descriptionKey: 'models.i-i-s-itogovaya-план-закупок.validations.склады.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  план: {
    descriptionKey: 'models.i-i-s-itogovaya-план-закупок.validations.план.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ПланЗакупокE', 'i-i-s-itogovaya-план-закупок', {
    номер: attr('Номер', { index: 0 }),
    датаНачала: attr('Дата', { index: 1 }),
    организации: belongsTo('i-i-s-itogovaya-организации', 'Организации', {
      организация: attr('Организация', { index: 3, hidden: true })
    }, { index: 2, displayMemberPath: 'организация' }),
    склады: belongsTo('i-i-s-itogovaya-склады', 'Склады', {
      склад: attr('Склад', { index: 5, hidden: true })
    }, { index: 4, displayMemberPath: 'склад' }),
    план: hasMany('i-i-s-itogovaya-план', 'План', {
      номенклатура: belongsTo('i-i-s-itogovaya-номенклатура', 'Номенклатура', {
        номенклатура: attr('Номенклатура', { index: 1, hidden: true }),
        единицыИзмер: belongsTo('i-i-s-itogovaya-единицы-измер', '', {
          единицаИзмер: attr('Единица Измерения', { index: 2 })
        }, { index: -1, hidden: true }),
        контрагенты: belongsTo('i-i-s-itogovaya-контрагенты', '', {
          контрагент: attr('Контрагент', { index: 4 })
        }, { index: -1, hidden: true })
      }, { index: 0, displayMemberPath: 'номенклатура' }),
      количество: attr('Количество', { index: 3 }),
      этоУслуга: attr('Это услуга', { index: 5 })
    })
  });

  modelClass.defineProjection('ПланЗакупокL', 'i-i-s-itogovaya-план-закупок', {
    номер: attr('Номер', { index: 0 }),
    датаНачала: attr('Дата начала', { index: 1 }),
    организации: belongsTo('i-i-s-itogovaya-организации', 'Организация', {
      организация: attr('Организация', { index: 2 })
    }, { index: -1, hidden: true }),
    склады: belongsTo('i-i-s-itogovaya-склады', 'Склад', {
      склад: attr('Склад', { index: 3 })
    }, { index: -1, hidden: true })
  });
};
