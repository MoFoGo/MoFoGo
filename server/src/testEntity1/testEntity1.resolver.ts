import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { TestEntity1ResolverBase } from "./base/testEntity1.resolver.base";
import { TestEntity1 } from "./base/TestEntity1";
import { TestEntity1Service } from "./testEntity1.service";

@graphql.Resolver(() => TestEntity1)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class TestEntity1Resolver extends TestEntity1ResolverBase {
  constructor(
    protected readonly service: TestEntity1Service,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
