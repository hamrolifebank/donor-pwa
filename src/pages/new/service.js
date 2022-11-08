import client from "@services/client";
import { getExample } from "@services/exampleService";

const getList = (params) =>
  client("/list", {
    params,
  });

export { getExample, getList };
