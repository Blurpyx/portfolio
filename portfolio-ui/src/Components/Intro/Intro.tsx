import './Intro.css';

export default function Intro() {
    return (
        <div className="bg-gradient-to-r from-[#004A07] to-[#011B03] text-white flex">
            <img src="https://media.licdn.com/dms/image/v2/D4E35AQFdf7DlHDW4rw/profile-framedphoto-shrink_400_400/profile-framedphoto-shrink_400_400/0/1726490227437?e=1727366400&v=beta&t=jg0ESQjCSTvLswYuHVQs3JzWU03tmnoX-7lWn_OPdCw" alt="Profile picture" />
            <div className="">
                <h1>Hi! My name is Tommy.</h1>
                <p>I am a full-stack developer.</p>
                <p>This is my portfolio which houses all my personal and academic projects.</p>
            </div>
        </div>
    );
}