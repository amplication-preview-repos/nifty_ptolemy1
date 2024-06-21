import { Module } from "@nestjs/common";
import { DataEmbeddingModuleBase } from "./base/dataEmbedding.module.base";
import { DataEmbeddingService } from "./dataEmbedding.service";
import { DataEmbeddingController } from "./dataEmbedding.controller";
import { DataEmbeddingResolver } from "./dataEmbedding.resolver";

@Module({
  imports: [DataEmbeddingModuleBase],
  controllers: [DataEmbeddingController],
  providers: [DataEmbeddingService, DataEmbeddingResolver],
  exports: [DataEmbeddingService],
})
export class DataEmbeddingModule {}
