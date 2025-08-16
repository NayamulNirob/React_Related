
function MyButton1({count, setCount}) {

  function handleClick() {
    setCount(count - 1);  
  }
    return (
        <button onClick={handleClick}>Decrement</button>
    );
}

export default MyButton1;