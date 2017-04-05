import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {AngularFire} from 'angularfire2';
import {Observable} from 'rxjs';
@Injectable()
export class FireBaseService {
    constructor(private angularFire: AngularFire) {

    }

    public addCustomKey(key, value) {
        let toSend = this.angularFire.database.object(`/users/${key}`);
        toSend.set(value);
    }

    public getHero(name): Observable<any> {
        return this.angularFire.database.object(`/users/${name}`);
    }

    public updateHero(name, money) {
        const itemObservable = this.angularFire.database.object(`/users/${name}`);
        itemObservable.update({name,money});
    }
}