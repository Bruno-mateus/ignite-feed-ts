import AvatarStyles from './Avatar.module.css';

interface propsAvatar {
  src: string;
  hasBorder?: boolean;
  alt?: string;
}

export function Avatar({ src, hasBorder = true }: propsAvatar) {

  return (
    <img className={hasBorder ? AvatarStyles.avatarHasBorder : AvatarStyles.avatar}
      src={src} />
  )
}