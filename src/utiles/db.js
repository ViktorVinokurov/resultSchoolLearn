import { db } from '../firebase';
import { ref, onValue, push, update, remove } from 'firebase/database';
export default class FirebaseDB {
	_referenseDataBase;
	_dbName;
	constructor(dbName) {
		this._dbName = dbName;
		this._referenseDataBase = ref(db, dbName);
	}

	push(data) {
		push(this._referenseDataBase, data);
	}

	update(index, data) {
		update(ref(db, `${this._dbName}/${index}`), data);
	}

	changeData(cb) {
        const unsubscribe = onValue(this._referenseDataBase, (snap) => {
            const value = snap.val()||[]
            const changeData = Object.entries(value).map(([id, values]) => ({
                id,
                ...values,
            }))
            cb(changeData);
          });
          return unsubscribe;
	}

    delete(index) {
        remove(ref(db, `${this._dbName}/${index}`))
    }
}
