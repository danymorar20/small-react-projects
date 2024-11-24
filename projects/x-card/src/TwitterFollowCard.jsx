import { useState } from "react";

export function TwitterFollowCard ({ formatUserName, name, userName, image }) {
    const [isFollowing, setIsFollowing] = useState(false);
    const handleClick = () => {
        setIsFollowing(!isFollowing);
    }

    const imageSrc = `https://unavatar.io/${image}`;
    const textButton = isFollowing ? "Dejar de seguir" : "Seguir";
    const buttonClassName = isFollowing ? "tw-followCard-button is-following" : "tw-followCard-button"
    return (
        <article className="tw-followCard">
            <header className='tw-followCard-header'>
                <img className='tw-followCard-avatar' alt="avatar" src={imageSrc}></img>
                <div className='tw-followCard-info'>
                    <strong>{name}</strong>
                    <span className='tw-followCard-avatar'>{formatUserName(userName)}</span>
                </div>
            </header>
            <aside>
                <button className={buttonClassName} onClick={handleClick}>
                    {textButton}
                </button>
            </aside>
        </article>
    )
}
