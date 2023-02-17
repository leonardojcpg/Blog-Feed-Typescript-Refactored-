import styles from "./avatar.module.css"

// coloco essa interrogação antes dos ":" para dizer que a props nao é obrigatoria
interface AvatarProps{
    hasBorder?: boolean;
    src: string;
    alt?: string;
}

const Avatar = ({hasBorder, src, alt}: AvatarProps) => {
    return (
        <>
        <img
        className={hasBorder ? styles.avatarWithBorder : styles.avatar}
        src={src}
        alt=""/>
        </>

    )
}

export default Avatar;