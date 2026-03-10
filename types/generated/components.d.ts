import type { Schema, Struct } from '@strapi/strapi';

export interface ContentContent extends Struct.ComponentSchema {
  collectionName: 'components_content_contents';
  info: {
    description: '';
    displayName: 'Content';
  };
  attributes: {
    description: Schema.Attribute.Text;
    sub_title: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface TitleCourselist extends Struct.ComponentSchema {
  collectionName: 'components_title_courselists';
  info: {
    description: '';
    displayName: 'courselist';
  };
  attributes: {
    course_name: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'content.content': ContentContent;
      'title.courselist': TitleCourselist;
    }
  }
}
