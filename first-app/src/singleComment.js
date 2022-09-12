import profile1 from './images/aa.jpg';

const singleComment = (props) => {
    console.log(props);
    return(
        <div className='comments'>
            <a href="/" className='Avatar'>
            <img src={profile1} width="150" alt='profile'/>
            </a>
            
            <div className='content'>
                    <a href="/" className='author'>
                    {props.name}
                    </a>
                
                <div className='metadata'>
                    <span className='date'>
                    {props.date}
                    </span>
                </div>
                <div className='text'>
                    {props.text}
                </div>
            </div>
        </div>
    )
}

export default singleComment;
