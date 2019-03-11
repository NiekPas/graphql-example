"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_datasource_rest_1 = require("apollo-datasource-rest");
class WordpressControlsAPI extends apollo_datasource_rest_1.RESTDataSource {
    constructor() {
        super();
        this.getAllWordpressControls = async () => {
            const response = await this.get('wordpress-controls');
            return Array.isArray(response)
                ? response
                : [];
        };
        this.getWordpressControlById = async (id) => await this.get(`wordpress-control/${id}`);
        this.baseURL = 'http://localhost:1234';
    }
}
exports.default = WordpressControlsAPI;
