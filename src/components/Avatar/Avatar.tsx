import { ImgHTMLAttributes } from 'react';
import AvatarStyles from './Avatar.module.css';

interface propsAvatar extends ImgHTMLAttributes<HTMLImageElement> {
  hasBorder?: boolean;
}

export function Avatar({ src, hasBorder = true }: propsAvatar) {

  return (
    <img className={hasBorder ? AvatarStyles.avatarHasBorder : AvatarStyles.avatar}
      src={src}
    />
  )
}