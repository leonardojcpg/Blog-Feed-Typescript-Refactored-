import styles from "./avatar.module.css"

// coloco essa interrogação antes dos ":" para dizer que a props nao é obrigatoria
interface AvatarProps{
    hasBorder?: boolean;
    src: string;
    alt?: string;
    title?: string;
}

const Avatar = ({hasBorder, src, alt, title}: AvatarProps) => {
    return (
        <>
        <img
        className={hasBorder ? styles.avatarWithBorder : styles.avatar}
        src={src}
        alt={alt}
        title={title}/>
        </>

    )
}

export default Avatar;