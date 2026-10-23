import type { Core } from '@strapi/strapi';

const allowedMediaTypes = [
  'image/*',
  'video/*',
  'audio/*',
  'application/pdf',
  'application/msword',
  'application/vnd.openxmlformats-officedocument.*',
  'text/plain',
  'text/csv',
];

const deniedTypes = [
  'image/svg+xml',
  'application/vnd.microsoft.portable-executable',
  'application/x-msdownload',
  'application/x-msdos-program',
  'application/x-executable',
  'application/x-dosexec',
  'application/x-sh',
  'text/x-shellscript',
  'application/x-mach-binary',
];

const config = ({ env }: Core.Config.Shared.ConfigParams): Core.Config.Plugin => {
  const bucket = env('AWS_BUCKET', '');
  const cdnUrl = env('CDN_URL', '');
  const accessKeyId = env('AWS_ACCESS_KEY_ID', '');
  const secretAccessKey = env('AWS_ACCESS_SECRET', '');

  return {
    'users-permissions': {
      config: {
        jwtManagement: 'refresh',
        sessions: {
          httpOnly: true,
        },
      },
    },
    upload: {
      config: {
        // One stored file per upload. Responsive copies multiply S3 storage.
        breakpoints: {},
        sizeOptimization: true,
        sizeLimit: 15 * 1024 * 1024,
        ...(bucket
          ? {
              provider: 'aws-s3',
              providerOptions: {
                ...(cdnUrl ? { baseUrl: cdnUrl } : {}),
                rootPath: env('AWS_S3_ROOT_PATH', 'uploads'),
                s3Options: {
                  ...(accessKeyId && secretAccessKey
                    ? { credentials: { accessKeyId, secretAccessKey } }
                    : {}),
                  region: env('AWS_REGION', 'ap-south-1'),
                  params: {
                    Bucket: bucket,
                    ACL: null,
                  },
                },
              },
              actionOptions: {
                upload: { ACL: null },
                uploadStream: { ACL: null },
                delete: {},
              },
            }
          : {}),
        security: {
          allowedTypes: allowedMediaTypes,
          deniedTypes,
        },
      },
    },
  };
};

export default config;
