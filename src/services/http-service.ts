import apiClient from "./api-client";

interface Entity {
  id: number;
}
class HttpService {
  endpoint: string;
  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }
  getAll<T>() {
    const controler = new AbortController();
    const request = apiClient.get<T[]>(this.endpoint, {
      signal: controler.signal,
    });
    return { request, cancel: () => controler.abort() };
  }

  create<T>(entity: T) {
    return apiClient.post(this.endpoint, entity);
  }

  delete(id: number) {
    return apiClient.delete(this.endpoint + "/" + id);
  }

  updateUser<T extends Entity>(entity: T) {
    return apiClient.patch(this.endpoint + "/" + entity.id, entity);
  }
}

const create = (endpoint: string) => new HttpService(endpoint);

export default create;
