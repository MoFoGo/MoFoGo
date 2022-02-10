import { Module } from "@nestjs/common";
import { TestEntity1ModuleBase } from "./base/testEntity1.module.base";
import { TestEntity1Service } from "./testEntity1.service";
import { TestEntity1Controller } from "./testEntity1.controller";
import { TestEntity1Resolver } from "./testEntity1.resolver";

@Module({
  imports: [TestEntity1ModuleBase],
  controllers: [TestEntity1Controller],
  providers: [TestEntity1Service, TestEntity1Resolver],
  exports: [TestEntity1Service],
})
export class TestEntity1Module {}
