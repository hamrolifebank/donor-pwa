import { getExample } from "@services/exampleService";
import api from "@services/client";

const specificService = () => api.get("/specificService");

export { getExample, specificService };

export default function services() {}
