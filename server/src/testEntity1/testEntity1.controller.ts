import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { TestEntity1Service } from "./testEntity1.service";
import { TestEntity1ControllerBase } from "./base/testEntity1.controller.base";

@swagger.ApiTags("test-entity1s")
@common.Controller("test-entity1s")
export class TestEntity1Controller extends TestEntity1ControllerBase {
  constructor(
    protected readonly service: TestEntity1Service,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
