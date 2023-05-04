import './intro.css';
import me from "../../img/me2.png";

const Intro = () => {
    return (
        <div className="i">
            <div className="i-left">
                <div className="i-left-wrapper">
                    <h2 className="i-intro">Hello, My name is</h2>
                    <h2 className="i-name">Abhinaba Dutta Gupta</h2>
                    <div className="i-title">
                        <div className='i-title-wrapper'>
                            <div className='i-title-item'>Software Engineer</div>
                            <div className='i-title-item'>Front-end Developer</div>
                            <div className='i-title-item'>Web Developer</div>
                            <div className='i-title-item'>Gamer</div>
                        </div>
                    </div>
                    <p className='i-desc'>
                        Software Engineer with 2+ years of professional experience in front-end development.
                        Proficient in responsive web design, analyzing and fixing UI bugs.
                        Keen on learning new technologies in software development.
                    </p>
                </div>
            </div>
            <div className="i-right">
                <div className='i-bg'></div>
                <img src={me} alt="" className='i-image'></img>
            </div>
        </div>
    )
}

export default Intro