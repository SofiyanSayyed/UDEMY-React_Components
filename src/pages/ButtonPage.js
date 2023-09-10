import Button from '../components/Button'
import {GoBell,GoBug,GoXCircle,GoStarFill} from 'react-icons/go'

function ButtonPage() {
  const handleClick = () =>{
    console.log('click')
  }
  return (
    <div>
      <div>
        <Button className = {'mb-3'} onClick = {handleClick} primary outline>
          <GoBell/>
          Primary</Button>
      </div>
      <div>
        <Button secondary onMouseEnter = {handleClick}  rounded>
          <GoBug/>
          Secondary</Button>
      </div>
      <div>
        <Button onMouseLeave = {handleClick} danger>
          <GoXCircle/>
          Danger</Button>
      </div>
      <div>
        <Button success outline>
          <GoStarFill/>
          Success</Button>
      </div>
      <div>
        <Button outline warning rounded>Warning </Button>
      </div>
    </div>

  );
}

export default ButtonPage;
