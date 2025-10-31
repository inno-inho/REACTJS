
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


import "./03BootStrap.scss"

const Component_03 = () => {

    return (
        <div>
            <h3>부트스트랩 컴포넌트 사용하기</h3>
            <div>
                <Button variant="primary" className='text-primary'>Primary</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="success">Success</Button>
                <Button variant="warning">Warning</Button>
                <Button variant="danger">Danger</Button>
                <Button variant="info">Info</Button>
                <Button variant="light">Light</Button>
                <Button variant="dark">Dark</Button>
                <Button variant="link">Link</Button>
            </div>

            <div style={{marginTop:"500px", marginBottom:"500px"}}> 
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>
            </div>

        </div>
    )

}

export default Component_03