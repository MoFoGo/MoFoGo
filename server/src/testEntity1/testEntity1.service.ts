import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { TestEntity1ServiceBase } from "./base/testEntity1.service.base";

@Injectable()
export class TestEntity1Service extends TestEntity1ServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
