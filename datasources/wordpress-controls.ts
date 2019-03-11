import { RESTDataSource } from 'apollo-datasource-rest';

class WordpressControlsAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'http://localhost:1234';
  }

  getAllWordpressControls = async () => {
    const response = await this.get('wordpress-controls');
    return Array.isArray(response)
      ? response
      : [];
  }

  getWordpressControlById = async (id: number) =>
    await this.get(`wordpress-control/${id}`);
    
}

export default WordpressControlsAPI;
