import { postDatabase } from '../database';
import { errors } from '../helper';

export default class postService {

    static get() {
        return new Promise((resolve, reject) => {
            postDatabase.get()
                .then((response) => {
                    resolve(response);
                }).catch((error) => {
                    reject(error);
                })

        })
    }

    static create(body) {
        let newPostObj = body.boxes || [];
        const boxSize = body.boxes.map((val)=>{
            
        })
        return new Promise((resolve, reject) => {
            postDatabase.create(newPostObj)
                .then((response) => {
                    resolve(response);
                }).catch((error) => {
                    reject(error);
                })

        })
    }

    static update(param, obj) {
        return new Promise((resolve, reject) => {
            const _id = param._id;
            //  document id and obj is required
            if (_id && obj) {
                postDatabase.update(_id, obj)
                    .then((response) => {
                        resolve(response);
                    }).catch((error) => {
                        reject(error);
                    })
            } else {
                // requried field not found
                reject(errors['004']);
            }
        })
    }

}
