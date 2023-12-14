import {
  defineNamespace,
  defineBaseModel,
  defineProjections,
  Model as ЗаказПостMixin
} from '../mixins/regenerated/models/i-i-s-itogovaya-заказ-пост';

import ОтчетОЗакModel from './i-i-s-itogovaya-отчет-о-зак';

let Model = ОтчетОЗакModel.extend(ЗаказПостMixin, {
});

defineNamespace(Model);
defineBaseModel(Model);
defineProjections(Model);

export default Model;
