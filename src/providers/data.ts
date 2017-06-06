import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class Data {

    data: any;

    constructor(public http: Http) {

    }

    load(){

        if(this.data){
            return Promise.resolve(this.data);
        }

        return new Promise(resolve => {

            this.http.get("https://api.myjson.com/bins/11tk5p").map(res => res.json()).subscribe(data => {
                this.data = data.mierda;
                resolve(this.data);
            });

        });

    }

}
