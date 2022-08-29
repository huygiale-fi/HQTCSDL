import { BillingInfo } from '../models/BillingInfo';
import { db } from './db';

export async function dirty_read_data1() {
  db.sync().then(function () {
    console.log('\nCreated database schema from model.');
  });
  const bill = await BillingInfo.initModel(db);

  const data: BillingInfo[] = await bill.findAll({ raw: true });
  console.log(data);
  return data;
}
export async function dirty_read_trans1(
  orderId = 2,
  address = 'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA'
) {
  const data = await db.query(`EXEC DIRTY_READ_TRANS1 ${orderId},${address}`, {
    raw: true,
  });
  console.log(data);
  return data;
  // db.query('EXEC DIRTY_READ_TRANS2 2', {
  //   raw: true,
  // }).then((v) => console.log(v));
}
export async function dirty_read_trans2(orderId = 2) {
  const data = await db.query(`EXEC DIRTY_READ_TRANS2 ${orderId}`, {
    raw: true,
  });
  console.log(data);
  return data;
}
