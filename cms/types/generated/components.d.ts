import type { Schema, Struct } from '@strapi/strapi';

export interface BlogParagraph extends Struct.ComponentSchema {
  collectionName: 'components_blog_paragraphs';
  info: {
    description: 'One block of an essay. Emphasis renders it as a pull quote.';
    displayName: 'Paragraph';
    icon: 'align-left';
  };
  attributes: {
    emphasis: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    text: Schema.Attribute.Text & Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export namespace Public {
    export interface ComponentSchemas {
      'blog.paragraph': BlogParagraph;
    }
  }
}
