import React from 'react';
import { View, Image } from 'react-native';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';
import { Text } from './text';

const avatarVariants = cva('rounded-full overflow-hidden', {
  variants: {
    size: {
      sm: 'w-9 h-9',
      md: 'w-12 h-12',
      lg: 'w-16 h-16',
    },
  },
  defaultVariants: {
    size: 'md',
  },
});

interface AvatarProps extends VariantProps<typeof avatarVariants> {
  src?: string;
  name?: string;
  className?: string;
}

export const Avatar: React.FC<AvatarProps> = ({ src, name = '', size, className }) => {
  const getInitials = (fullName: string) => {
    const names = fullName.split(' ');
    if (names.length >= 2) {
      return `${names[0][0]}${names[1][0]}`.toUpperCase();
    }
    return fullName.substring(0, 2).toUpperCase();
  };

  const sizeMap = {
    sm: 36,
    md: 48,
    lg: 64,
  };

  const dimension = sizeMap[size || 'md'];

  if (src) {
    return (
      <View className={cn('relative', className)}>
        <Image
          source={{ uri: src }}
          style={{ width: dimension, height: dimension, borderRadius: dimension / 2 }}
          className="bg-border-light"
        />
      </View>
    );
  }

  return (
    <View
      style={{ width: dimension, height: dimension, borderRadius: dimension / 2 }}
      className={cn('items-center justify-center bg-primary', className)}>
      <Text variant="body" weight="semibold" color="white">
        {getInitials(name)}
      </Text>
    </View>
  );
};
