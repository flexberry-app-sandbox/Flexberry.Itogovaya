import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as ОтчетОЗакMixin
} from '../mixins/regenerated/models/i-i-s-itogovaya-отчет-о-зак';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(ОтчетОЗакMixin, Validations, {
});

defineProjections(Model);

export default Model;
