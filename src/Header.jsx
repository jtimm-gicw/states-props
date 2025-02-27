//Your Header component needs to have an <h1> with a title.
import Nav from 'react-bootstrap/Nav';

// function Header() {
//   return (
//     <>
//     <h1> Gallery of Horns Header</h1>
//     </>

//   );
// }

function Header() {
  return (
  
    <Nav variant="pills" defaultActiveKey="/home">
      <Nav.Item>
        <Nav.Link href="/home">Active</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-1">Option 2</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="disabled" disabled>
          Disabled
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
}

export default Header;