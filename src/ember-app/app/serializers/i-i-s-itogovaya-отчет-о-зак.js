import { Serializer as ОтчетОЗакSerializer } from
  '../mixins/regenerated/serializers/i-i-s-itogovaya-отчет-о-зак';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ОтчетОЗакSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
