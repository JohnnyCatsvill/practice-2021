import * as React from "react";
import {
    List,
    Datagrid,
    TextField,
    ReferenceField,
    EditButton,
    Edit,
    Create,
    SimpleForm,
    Filter,
    ReferenceInput,
    SelectInput,
    TextInput,
    AutocompleteInput,
    Show,
    ShowButton,
    TabbedShowLayout,
    DateField,
    RichTextField,
    SimpleShowLayout,
    Tab,
    NumberField,
    BooleanField,
    ReferenceManyField,
    UrlField,
    SelectField,
    ArrayField,
    ArrayInput,
    SingleFieldList,
    SimpleFormIterator,
    NumberInput,
    DateInput,
    SimpleList
} from 'react-admin';
import UrlFieldCustom from './UrlFieldCustom'

const otraslFields = [
    {id: '0', name: 'Разработка web-приложений'},
    {id: '1', name: 'Разработка desktop-приложений'},
    {id: '2', name: 'Разработка серверных приложений'},
    {id: '3', name: 'Разработка мобильных приложений'},
    {id: '4', name: 'Программирование встраиваемых систем'},
    {id: '5', name: 'Системное программирование'},
    {id: '6', name: 'Разработка игр'},
];

const stateOfProjectFields = [
    {id: '0', name: 'Активен'},
    {id: '1', name: 'Завершён'},
];

const ndaFields = [
    { name: 'Разрешено', id: '1' },
    { name: 'Запрещено', id: '0' },
];


export const ProjectList = props => (
    <List  {...props}>
        <Datagrid>
            <TextField source="project_name" title="Название"/>
            <TextField source="client" title="Клиент" />
            <NumberField source="budget" title="Бюджет"/>
            <SelectField source="nda" choices={ndaFields} title="NDA"/>
            <DateField source="terms_from" title="Срок От"/>
            <DateField source="terms_to" title="Срок До"/>
            <UrlFieldCustom source="link_to_project_folder" title="Ссылка на проект" />
            <ArrayField source="directions_of_work" title="Направление работы">
                <SimpleList>
                    <TextField source=""/>
                </SimpleList>
            </ArrayField>
            <SelectField source="otrasl" choices={otraslFields} title="Отрасль"/>
            <SelectField source="state_of_project" choices={stateOfProjectFields} title="Статус проекта"/>
            <ShowButton />
            <EditButton />
        </Datagrid>
    </List>
);

export const ProjectEdit = props => (
    <Edit title={<ProjectTitle />} {...props}>
        <SimpleForm>
            <NumberField source="id" />
            <TextInput source="project_name" />
            <SelectInput source="otrasl" choices={otraslFields}/>
            <SelectInput source="state_of_project" choices={stateOfProjectFields}/>
            <TextInput source="client" />
            <SelectInput source="nda" choices={ndaFields} />
            <NumberInput source="budget" />
            <TextInput source="description"/>
            <TextInput source="problems_and_solvings"/>
            <ArrayInput source="technologies">
                <SimpleFormIterator>
                    <TextInput source="technology" />
                </SimpleFormIterator>
            </ArrayInput>
            <ArrayInput source="links_to_store_site">
                <SimpleFormIterator>
                    <TextInput source="link" />
                </SimpleFormIterator>
            </ArrayInput>
            <TextInput source="link_to_project_folder"/>
            <TextInput source="link_to_presentation"/>
            <ArrayInput source="links_to_case_behance_or_our_site">
                <SimpleFormIterator>
                    <TextInput source="link_case" />
                </SimpleFormIterator>
            </ArrayInput>
            <ArrayInput source="teams">
                <SimpleFormIterator>
                    <TextInput source="team_work_direction" />
                    <ArrayInput source="team">
                        <SimpleFormIterator>
                            <TextInput source="workers" />
                        </SimpleFormIterator>
                    </ArrayInput>
                </SimpleFormIterator>
            </ArrayInput>
            <DateInput source="terms_from"/>
            <DateInput source="terms_to"/>
            <ArrayInput source="directions_of_work">
                <SimpleFormIterator>
                    <TextInput source="work_direction"/>
                </SimpleFormIterator>
            </ArrayInput>
            <ArrayInput source="nominations">
                <SimpleFormIterator>
                    <TextInput source="title" />
                    <TextInput source="description" />
                    <TextInput source="link" />
                </SimpleFormIterator>
            </ArrayInput>
            <ArrayInput source="clock_estimation">
                <SimpleFormIterator>
                    <DateInput source="clock" />
                    <TextInput source="direction"/>
                </SimpleFormIterator>
            </ArrayInput>
        </SimpleForm>
    </Edit>
);

export const ProjectCreate = (props) => {

    return (
        <Create {...props}>
            <SimpleForm>
                <TextInput source="project_name" resettable/>
                <SelectInput source="otrasl" choices={otraslFields} />
                <SelectInput source="state_of_project" choices={stateOfProjectFields} />
                <TextInput source="client" resettable/>
                <SelectInput source="nda" choices={ndaFields} />
                <NumberInput source="budget" resettable/>
                <TextInput source="description" resettable/>
                <TextInput source="problems_and_solvings" resettable/>
                <ArrayInput source="technologies" >
                    <SimpleFormIterator>
                        <TextInput source="technology" resettable/>
                    </SimpleFormIterator>
                </ArrayInput>
                <ArrayInput source="links_to_store_site" >
                    <SimpleFormIterator>
                        <TextInput source="link" resettable/>
                    </SimpleFormIterator>
                </ArrayInput>
                <TextInput source="link_to_project_folder" resettable/>
                <TextInput source="link_to_presentation" resettable/>
                <ArrayInput source="links_to_case_behance_or_our_site" >
                    <SimpleFormIterator>
                        <TextInput source="link_case" resettable/>
                    </SimpleFormIterator>
                </ArrayInput>
                <ArrayInput source="teams" >
                    <SimpleFormIterator>
                        <TextInput source="team_work_direction" resettable/>
                        <ArrayInput source="team" >
                            <SimpleFormIterator>
                                <TextInput source="workers" resettable/>
                            </SimpleFormIterator>
                        </ArrayInput>
                    </SimpleFormIterator>
                </ArrayInput>
                <DateInput source="terms_from" />
                <DateInput source="terms_to" />
                <ArrayInput source="directions_of_work" >
                    <SimpleFormIterator>
                        <TextInput source="work_direction" resettable/>
                    </SimpleFormIterator>
                </ArrayInput>
                <ArrayInput source="nominations" >
                    <SimpleFormIterator>
                        <TextInput source="title" resettable/>
                        <TextInput source="description" resettable/>
                        <TextInput source="link" resettable/>
                    </SimpleFormIterator>
                </ArrayInput>
                <ArrayInput source="clock_estimation" >
                    <SimpleFormIterator>
                        <DateInput source="clock" />
                        <TextInput source="direction" resettable/>
                    </SimpleFormIterator>
                </ArrayInput>
            </SimpleForm>
        </Create>
    );
}

const ProjectTitle = ({ record }) => {
    return <span>Project {record ? `"${record.title}"` : ''}</span>;
};

/*const ProjectFilter = (props) => (
    <Filter {...props}>
        <TextInput label="Search" source="q" alwaysOn />
        <ReferenceInput label="Id" source="projectName" reference="projects" allowEmpty>
            <SelectInput optionText="name" />
        </ReferenceInput>
    </Filter>
);*/

export const ProjectShow = props => (
    <Show {...props}>
        <SimpleShowLayout>
            <TextField source="project_name" title="Название"/>
            <SelectField source="otrasl" choices={otraslFields} title="Отрасль"/>
            <SelectField source="state_of_project" choices={stateOfProjectFields} title="Статус" />
            <TextField source="client" title="Клиент" />
            <SelectField source="nda" choices={ndaFields} title="NDA"/>
            <NumberField source="budget" title="Бюджет"/>
            <TextField source="description" title="Описание"/>
            <TextField source="problems_and_solvings" title="Проблемы/сложности"/>
            <ArrayField source="technologies" title="Технологии">
                <SingleFieldList>
                    <TextField source="technology"/>
                </SingleFieldList>
            </ArrayField>
            <ArrayField source="links_to_store_site" title="Cсылка на стор">
                <SingleFieldList>
                    <UrlField source="link"/>
                </SingleFieldList>
            </ArrayField>
            <UrlField source="link_to_project_folder" title="Ссылка на проект" />
            <UrlField source="link_to_presentation" title="Cсылка на презентацию"/>
            <ArrayField source="links_to_case_behance_or_our_site" title="Ссылка на бэхансе/наш сайт">
                <SingleFieldList>
                    <UrlField source="link_case"/>
                </SingleFieldList>
            </ArrayField>
            <ArrayField source="teams" title="Команды">
                <Datagrid>
                    <TextField source="team_work_direction" title="Направление"/>
                    <ArrayField source="team" title="Команда">
                        <SingleFieldList>
                            <TextField source="workers"/>
                        </SingleFieldList>
                    </ArrayField>
                </Datagrid>
            </ArrayField>
            <DateField source="terms_from" title="Срок От"/>
            <DateField source="terms_to" title="Срок До"/>
            <ArrayField source="directions_of_work" title="Направление работы">
                <SingleFieldList>
                    <TextField source="work_direction"/>
                </SingleFieldList>
            </ArrayField>
            <ArrayField source="nominations" title="Номинации">
                <Datagrid>
                    <TextField source="title" title="Название"/>
                    <TextField source="description" title="Описание"/>
                    <TextField source="link" title="Ссылка"/>
                </Datagrid>
            </ArrayField>
            <ArrayField source="clock_estimation" title="Часы по оценке">
                <Datagrid>
                    <DateField source="clock" title="Время"/>
                    <TextField source="direction" title="Направление работы"/>
                </Datagrid>
            </ArrayField>
        </SimpleShowLayout>
    </Show>
);