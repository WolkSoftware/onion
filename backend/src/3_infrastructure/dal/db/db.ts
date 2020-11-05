import { PoolConfig, Pool } from "pg";

async function getDbConfig(): Promise<PoolConfig> {
  // TODO read config from secret manager
  return Promise.resolve({} as PoolConfig);
}

export async function getDbPool() {
  const config = await getDbConfig();
  return new Pool(config);
}
