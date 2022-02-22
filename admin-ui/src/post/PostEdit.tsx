import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";
import { AuthorTitle } from "../author/AuthorTitle";
import { TagTitle } from "../tag/TagTitle";

export const PostEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
