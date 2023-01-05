const users = [
    {name: "Zulaa", age: 18, image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"},
    {name: "Boldoo", age: 25, image: "https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"},
    {name: "Tsetseg", age: 30, image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=988&q=80"},
    {name: "Bataa", age: 21, image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80"},
    {name: "Saraa", age: 28, image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1361&q=80"},
    {name: "Sukhee", age: 22, image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80"}
  ]
  let sum = 0;
  for(let i = 0; i < users.length; i++){
    sum += users[i].age;
  }
  let ave = sum/users.length;

  const UserCard = (props) => {
    return <div className="flex">
              <div>
                <h5>{props.name}</h5>
                <p>{props.age}</p>
              </div>
              <img src = {props.image} alt="" />
            </div>;
  }
  
  
  return (
    <div className="App">
      <h2>My web application</h2>
      <p>Avarage age: {ave}</p>
      <div className='grid'>
          {
            users.map((user)=>{
          return <UserCard name = {user.name} age = {user.age} image = {user.image}/>
            })
          }
      </div>
    </div>
  );