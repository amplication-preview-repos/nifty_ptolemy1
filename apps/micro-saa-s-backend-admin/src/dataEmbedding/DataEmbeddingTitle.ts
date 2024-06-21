import { DataEmbedding as TDataEmbedding } from "../api/dataEmbedding/DataEmbedding";

export const DATAEMBEDDING_TITLE_FIELD = "id";

export const DataEmbeddingTitle = (record: TDataEmbedding): string => {
  return record.id?.toString() || String(record.id);
};
