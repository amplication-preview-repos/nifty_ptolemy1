import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { DataEmbeddingServiceBase } from "./base/dataEmbedding.service.base";

@Injectable()
export class DataEmbeddingService extends DataEmbeddingServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
