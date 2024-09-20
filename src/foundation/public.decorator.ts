import { IS_PUBLIC_KEY } from './constant/index.constant';
import { SetMetadata } from '@nestjs/common';

export const PublicDecorator = () => SetMetadata(IS_PUBLIC_KEY, true);
