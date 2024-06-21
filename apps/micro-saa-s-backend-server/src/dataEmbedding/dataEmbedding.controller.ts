import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { DataEmbeddingService } from "./dataEmbedding.service";
import { DataEmbeddingControllerBase } from "./base/dataEmbedding.controller.base";

@swagger.ApiTags("dataEmbeddings")
@common.Controller("dataEmbeddings")
export class DataEmbeddingController extends DataEmbeddingControllerBase {
  constructor(protected readonly service: DataEmbeddingService) {
    super(service);
  }
}
