import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";
import { AuthorTitle } from "../author/AuthorTitle";
import { TagTitle } from "../tag/TagTitle";

export const PostCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput source="author.id" reference="Author" label="Author">
          <SelectInput optionText={AuthorTitle} />
        </ReferenceInput>
        <TextInput label="Content" multiline source="content" />
        <TextInput label="Featured Image " source="featuredImage" />
        <ReferenceInput source="tag.id" reference="Tag" label="Tags">
          <SelectInput optionText={TagTitle} />
        </ReferenceInput>
        <TextInput label="Title" source="title" />
      </SimpleForm>
    </Create>
  );
};
