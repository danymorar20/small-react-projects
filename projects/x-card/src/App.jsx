import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

export function App () {
    const formatUserName = (userName) => `@${userName}`;
    return (
        <section className='App'>
            <TwitterFollowCard formatUserName={formatUserName} name="Daniel Mora" userName="daniel" image="midudev" isFollowing/>
            <TwitterFollowCard formatUserName={formatUserName} name="Karla Lopez" userName="karla" image="midudev" isFollowing={false}/>
            <TwitterFollowCard formatUserName={formatUserName} name="Fernanda Dominguez" userName="fer" image="midudev" isFollowing={false}/>
        </section>
    )
}
