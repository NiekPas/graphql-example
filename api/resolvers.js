"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    Query: {
        wordpressControls: async (_, __, { dataSources }) => dataSources.wordpressControlsAPI.getAllWordpressControls(),
        wordpressControl: async (_, { id }, { dataSources }) => {
            return dataSources.wordpressControlsAPI.getWordpressControlById(id);
        }
    }
};
