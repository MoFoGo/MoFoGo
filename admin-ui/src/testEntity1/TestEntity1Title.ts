import { TestEntity1 as TTestEntity1 } from "../api/testEntity1/TestEntity1";

export const TESTENTITY1_TITLE_FIELD = "id";

export const TestEntity1Title = (record: TTestEntity1): string => {
  return record.id || record.id;
};
