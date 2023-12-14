import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-itogovaya-единицы-измер-l');
  this.route('i-i-s-itogovaya-единицы-измер-e',
  { path: 'i-i-s-itogovaya-единицы-измер-e/:id' });
  this.route('i-i-s-itogovaya-единицы-измер-e.new',
  { path: 'i-i-s-itogovaya-единицы-измер-e/new' });
  this.route('i-i-s-itogovaya-заказ-пост-l');
  this.route('i-i-s-itogovaya-заказ-пост-e',
  { path: 'i-i-s-itogovaya-заказ-пост-e/:id' });
  this.route('i-i-s-itogovaya-заказ-пост-e.new',
  { path: 'i-i-s-itogovaya-заказ-пост-e/new' });
  this.route('i-i-s-itogovaya-контрагенты-l');
  this.route('i-i-s-itogovaya-контрагенты-e',
  { path: 'i-i-s-itogovaya-контрагенты-e/:id' });
  this.route('i-i-s-itogovaya-контрагенты-e.new',
  { path: 'i-i-s-itogovaya-контрагенты-e/new' });
  this.route('i-i-s-itogovaya-номенклатура-l');
  this.route('i-i-s-itogovaya-номенклатура-e',
  { path: 'i-i-s-itogovaya-номенклатура-e/:id' });
  this.route('i-i-s-itogovaya-номенклатура-e.new',
  { path: 'i-i-s-itogovaya-номенклатура-e/new' });
  this.route('i-i-s-itogovaya-организации-l');
  this.route('i-i-s-itogovaya-организации-e',
  { path: 'i-i-s-itogovaya-организации-e/:id' });
  this.route('i-i-s-itogovaya-организации-e.new',
  { path: 'i-i-s-itogovaya-организации-e/new' });
  this.route('i-i-s-itogovaya-отчет-о-зак-l');
  this.route('i-i-s-itogovaya-отчет-о-зак-e',
  { path: 'i-i-s-itogovaya-отчет-о-зак-e/:id' });
  this.route('i-i-s-itogovaya-отчет-о-зак-e.new',
  { path: 'i-i-s-itogovaya-отчет-о-зак-e/new' });
  this.route('i-i-s-itogovaya-план-закупок-l');
  this.route('i-i-s-itogovaya-план-закупок-e',
  { path: 'i-i-s-itogovaya-план-закупок-e/:id' });
  this.route('i-i-s-itogovaya-план-закупок-e.new',
  { path: 'i-i-s-itogovaya-план-закупок-e/new' });
  this.route('i-i-s-itogovaya-склады-l');
  this.route('i-i-s-itogovaya-склады-e',
  { path: 'i-i-s-itogovaya-склады-e/:id' });
  this.route('i-i-s-itogovaya-склады-e.new',
  { path: 'i-i-s-itogovaya-склады-e/new' });
});

export default Router;
