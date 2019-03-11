export default {
  Query: {
    wordpressControls: async (_: any, __: any, { dataSources }: any) => 
      dataSources.wordpressControlsAPI.getAllWordpressControls(),
    wordpressControl: async (_: any, { id }: any, { dataSources }: any) => {
      return dataSources.wordpressControlsAPI.getWordpressControlById(id)
  }
}
};
