import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  количество: DS.attr('number'),
  сумма: DS.attr('number'),
  суммаНДС: DS.attr('number'),
  цена: DS.attr('number'),
  этоУслуга: DS.attr('boolean'),
  номенклатура: DS.belongsTo('i-i-s-itogovaya-номенклатура', { inverse: null, async: false }),
  отчетОЗак: DS.belongsTo('i-i-s-itogovaya-отчет-о-зак', { inverse: 'тЧЗаказ', async: false, polymorphic: true })
});

export let ValidationRules = {
  количество: {
    descriptionKey: 'models.i-i-s-itogovaya-т-ч-заказ.validations.количество.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  сумма: {
    descriptionKey: 'models.i-i-s-itogovaya-т-ч-заказ.validations.сумма.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  суммаНДС: {
    descriptionKey: 'models.i-i-s-itogovaya-т-ч-заказ.validations.суммаНДС.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  цена: {
    descriptionKey: 'models.i-i-s-itogovaya-т-ч-заказ.validations.цена.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  этоУслуга: {
    descriptionKey: 'models.i-i-s-itogovaya-т-ч-заказ.validations.этоУслуга.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  номенклатура: {
    descriptionKey: 'models.i-i-s-itogovaya-т-ч-заказ.validations.номенклатура.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  отчетОЗак: {
    descriptionKey: 'models.i-i-s-itogovaya-т-ч-заказ.validations.отчетОЗак.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ТЧЗаказE', 'i-i-s-itogovaya-т-ч-заказ', {
    номенклатура: belongsTo('i-i-s-itogovaya-номенклатура', 'Номенклатура', {
      номенклатура: attr('Номенклатура', { index: 1, hidden: true }),
      единицыИзмер: belongsTo('i-i-s-itogovaya-единицы-измер', '', {
        единицаИзмер: attr('Единица измерения', { index: 2 })
      }, { index: -1, hidden: true }),
      контрагенты: belongsTo('i-i-s-itogovaya-контрагенты', '', {
        контрагент: attr('Контрагент', { index: 4 })
      }, { index: -1, hidden: true })
    }, { index: 0, displayMemberPath: 'номенклатура' }),
    количество: attr('Количество', { index: 3 }),
    цена: attr('Цена', { index: 5 }),
    суммаНДС: attr('Сумма НДС', { index: 6 }),
    сумма: attr('Сумма', { index: 7 }),
    этоУслуга: attr('Это услуга', { index: 8 })
  });
};
