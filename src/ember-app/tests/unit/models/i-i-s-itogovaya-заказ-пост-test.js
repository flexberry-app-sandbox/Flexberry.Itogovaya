import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-itogovaya-заказ-пост', 'Unit | Model | i-i-s-itogovaya-заказ-пост', {
  // Specify the other units that are required for this test.
  needs: [
    'model:i-i-s-itogovaya-единицы-измер',
    'model:i-i-s-itogovaya-заказ-пост',
    'model:i-i-s-itogovaya-контрагенты',
    'model:i-i-s-itogovaya-номенклатура',
    'model:i-i-s-itogovaya-организации',
    'model:i-i-s-itogovaya-отчет-о-зак',
    'model:i-i-s-itogovaya-план-закупок',
    'model:i-i-s-itogovaya-план',
    'model:i-i-s-itogovaya-склады',
    'model:i-i-s-itogovaya-т-ч-заказ',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
