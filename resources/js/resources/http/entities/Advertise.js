import { BASE_URL } from "../../constants";
import Entity from "./Entity";

export class Advertise extends Entity {
    constructor() {
        super();
    }

    async getAdvertise(id) {
        return await this.handlePost(`${BASE_URL}/u/Advertises/show/${id}`);
    }

    async getAllAdvertises(_pi, _pn) {
        return await this.handlePost(`${BASE_URL}/u/Advertises`, {
            _pn,
            _pi,
        });
    }

    async storeAdvertise(companyName, name, family, mobile) {
        return await this.handlePost(`${BASE_URL}/a/Advertises/store`, {
            company_name:companyName,
            name,
            family,
            mobile,
        });
    }

    async updateAdvertise(id, companyName, name, family, mobile) {
        return await this.handlePost(`${BASE_URL}/a/Advertises/update/${id}`, {
            company_name:companyName,
            name,
            family,
            mobile,
        });
    }

    async deleteAdvertise(id) {
        return await this.handlePost(`${BASE_URL}/a/Advertises/delete/${id}`);
    }
}
