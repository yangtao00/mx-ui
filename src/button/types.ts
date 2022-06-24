import type { ButtonHTMLAttributes } from 'vue';

export type ButtonType = 'primary' | 'plain' | 'default' | 'danger';

export type ButtonSize = 'xlarge' | 'large' | 'medium' | 'small' | 'mini';

export type ButtonNativeType = NonNullable<ButtonHTMLAttributes['type']>;
