import axios from "axios";

const statesBrazilianService = {
  baseUrl: "https://servicodados.ibge.gov.br/api/v1/localidades/estados",

  getStates: async () => {
    try {
      const API_URL = `${statesBrazilianService.baseUrl}`; // Use a variável de contexto correta

      const httpHeaders = {
        "Content-Type": "application/json", // Corrija o nome da chave
      };

      const response = await axios.get(API_URL, { headers: httpHeaders });

      if (response.data) {
        return response.data;
      } else {
        return [];
      }
    } catch (error) {
      console.error("Erro ao buscar estados", error); // Altere a mensagem de erro
    }
  }
};

export default statesBrazilianService;
