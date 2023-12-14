import FlexberryEnum from 'ember-flexberry-data/transforms/flexberry-enum';
import СостОтгрузкиEnum from '../enums/i-i-s-itogovaya-сост-отгрузки';

export default FlexberryEnum.extend({
  enum: СостОтгрузкиEnum,
  sourceType: 'IIS.Itogovaya.СостОтгрузки'
});
