import React from 'react';
import {
  Create,
  Datagrid,
  DisabledInput,
  Edit,
  EditButton,
  Filter,
  List,
  ReferenceField,
  ReferenceInput,
  SelectInput,
  Show,
  ShowButton,
  SimpleForm,
  SimpleShowLayout,
  TextField,
  TextInput,
} from 'react-admin';

export const OrganisationFilter = props => (
  <Filter {...props}>
    <TextInput label="Search by name" source="name_contains" alwaysOn />
    <ReferenceInput label="Organisation" source="organisation.id" reference="Organisation" alwaysOn>
      <SelectInput optionText="name" />
    </ReferenceInput>
  </Filter>
);

export const OrganisationList = props => (
  <List filters={<OrganisationFilter />} {...props}>
    <Datagrid>
      <TextField source="id" />
      <TextField source="name" />
      <EditButton />
      <ShowButton />
    </Datagrid>
  </List>
);

export const OrganisationEdit = props => (
  <Edit title="Edit a brand" {...props}>
    <SimpleForm>
      <DisabledInput source="id" />
      <TextInput source="name" />
      <ReferenceInput source="category.id" reference="Category">
        <SelectInput optionText="name" />
      </ReferenceInput>
      <ReferenceInput source="shop.id" reference="Shop">
        <SelectInput optionText="name" />
      </ReferenceInput>
    </SimpleForm>
  </Edit>
);

export const OrganisationShow = props => (
  <Show title="Show a brand" {...props}>
    <SimpleShowLayout>
      <TextField source="id" />
      <TextField source="name" />
    </SimpleShowLayout>
  </Show>
);

export const OrganisationCreate = props => (
  <Create title="Create a brand" {...props}>
    <SimpleForm>
      <DisabledInput source="id" />
      <TextInput source="name" />
      <ReferenceInput source="category.id" reference="Category">
        <SelectInput optionText="name" />
      </ReferenceInput>
      <ReferenceInput source="shop.id" reference="Shop">
        <SelectInput optionText="name" />
      </ReferenceInput>
    </SimpleForm>
  </Create>
);
