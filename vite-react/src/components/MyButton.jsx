

function MyButton({count, setCount}) {

  function handleClick() {
    setCount(count + 1);  
  }
    return (
        <button onClick={handleClick}>Increment</button>
    );
}

export default MyButton;