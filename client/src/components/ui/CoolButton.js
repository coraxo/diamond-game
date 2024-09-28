function CoolButton({count, onClick}) {
  let user = {name: "John"};

  return (
    <button onClick={onClick}>{user.name + ` ${count}`}</button>
  );
 }

 export default CoolButton;