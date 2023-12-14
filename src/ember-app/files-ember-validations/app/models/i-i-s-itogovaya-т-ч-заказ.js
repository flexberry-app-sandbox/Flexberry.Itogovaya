import {
  defineNamespace,
  defineProjections,
  Model as ТЧЗаказMixin
} from '../mixins/regenerated/models/i-i-s-itogovaya-т-ч-заказ';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ТЧЗаказMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
