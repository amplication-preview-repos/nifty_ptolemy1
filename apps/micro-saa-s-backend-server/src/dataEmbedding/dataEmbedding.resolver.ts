import * as graphql from "@nestjs/graphql";
import { DataEmbeddingResolverBase } from "./base/dataEmbedding.resolver.base";
import { DataEmbedding } from "./base/DataEmbedding";
import { DataEmbeddingService } from "./dataEmbedding.service";

@graphql.Resolver(() => DataEmbedding)
export class DataEmbeddingResolver extends DataEmbeddingResolverBase {
  constructor(protected readonly service: DataEmbeddingService) {
    super(service);
  }
}
