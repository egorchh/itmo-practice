import { API_URL } from '../config';
import { ResponseGlossaryData, ResponseMindMapData } from '../types/api';

class ApiService {
  private baseUrl: string;

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  async getGlossary(): Promise<ResponseGlossaryData> {
    const response = await fetch(`${this.baseUrl}/glossary`);
    if (!response.ok) {
      throw new Error('Failed to fetch glossary');
    }
    return response.json();
  }

  async getMindMap(): Promise<ResponseMindMapData> {
    const response = await fetch(`${this.baseUrl}/mind-map`);
    if (!response.ok) {
      throw new Error('Failed to fetch mind map');
    }
    return response.json();
  }
}

export const apiService = new ApiService(API_URL);
