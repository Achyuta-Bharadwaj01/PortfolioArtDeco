import type { Core } from '@strapi/strapi';
import { ensurePublicRead, seedDesignTherapy } from './seed/design-therapy';

export default {
  register(/* { strapi }: { strapi: Core.Strapi } */) {},

  async bootstrap({ strapi }: { strapi: Core.Strapi }) {
    await ensurePublicRead(strapi);
    await seedDesignTherapy(strapi);
  },
};
