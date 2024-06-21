import { DataEmbeddingWhereInput } from "./DataEmbeddingWhereInput";
import { DataEmbeddingOrderByInput } from "./DataEmbeddingOrderByInput";

export type DataEmbeddingFindManyArgs = {
  where?: DataEmbeddingWhereInput;
  orderBy?: Array<DataEmbeddingOrderByInput>;
  skip?: number;
  take?: number;
};
