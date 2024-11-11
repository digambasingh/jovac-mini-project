import Card from "./Cards";
import contacts from './contacts';
import './member.css'
function createCard(contact) {
  return (
    <Card
      key={contact.id}
      name={contact.name}
      image={contact.imgURL}
      tel={contact.phone}
      email={contact.email}
      job={contact.job}
      add={contact.address}
    />
  );
}
const Member = () => {
    return (
      <>
      
      {/* <h1 className="heading">My Contacts</h1> */}
      <div className='mycontact '>
      {contacts.map(createCard)}
      </div>
      </>
  
  );
};

export default Member;
