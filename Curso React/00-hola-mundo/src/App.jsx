import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard.jsx'

export function App(){
    return(
        <section className='App'>
            <TwitterFollowCard isFollowing userName="Jhordan3010" name="Jhordan Huera"/>
            <TwitterFollowCard isFollowing={false} userName="midudev" name="Miguel Ángel Durán"/>
            <TwitterFollowCard isFollowing userName="pheralb" name="Pablo Hernandez"/>
        </section>
    )
}