import { useState } from "react";
// export function MyForm(){
//     const [nameInput , setNameInput] = useState("");
//     const [surNameInput , setSurNameInput] = useState("");
//     const [emailInput , setEmailInput] = useState("");
//     return (
//         <form onSubmit={(event) => {event.preventDefault();
//             console.log(nameInput , emailInput , surNameInput )
//         }}>
//         <label>Name:</label>
//         <input value={nameInput} onChange={(event => setNameInput(event.target.value))}/>
//         <hr></hr>
//         <label>surname:</label>
//         <input value={surNameInput} onChange={(event => setSurNameInput(event.target.value))}/>
//         <hr></hr>
//         <label>email:</label>
//         <input value={emailInput} onChange={(event => setEmailInput(event.target.value))}/>
//         <hr></hr>
//         <button>submit</button>
//       </form>

//     )

// }

export function MyForm() {
  const [formInputs, setFormInputs] = useState({
    name: "",
    surname: "",
    email: "",
    generalInfo: "",
    IsStudent : false
  });

  //   useEffect(() => {       // u should import useEffect 
  //     console.log(formInputs);
  //   }, [formInputs]);

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        console.log(formInputs);
      }}
    >
      <label>Name:</label>
      <input
        value={formInputs.name}
        onChange={(event) =>
          setFormInputs({ ...formInputs, name: event.target.value })
        }
      />
      <hr></hr>
      <label>surname:</label>
      <input
        value={formInputs.surname}
        onChange={(event) =>
          setFormInputs({ ...formInputs, surname: event.target.value })
        }
      />
      <hr></hr>
      <label>email:</label>
      <input
        value={formInputs.email}
        onChange={(event) =>
          setFormInputs({ ...formInputs, email: event.target.value })
        }
      />
      <hr></hr>
      <label>
        <textarea
          value={formInputs.generalInfo}
          onChange={(event) => {
            setFormInputs({ ...formInputs, generalInfo: event.target.value });
          }}
        ></textarea>
      </label>
      <hr></hr>
      <label>are you a student </label>
      <input type="checkbox" checked={formInputs.IsStudent} onChange={(event) => {
        setFormInputs({...formInputs , IsStudent: event.target.checked})
      }}></input>
      <button>submit</button>
    </form>
  );
}
